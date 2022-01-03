import Vue from 'vue'
import anime from 'animejs'
import transitions from '../motion-io/transitions'

export default {
   name: 'motion',

   props: {
      // Callbacks.
      onBegin: {
         type: Function,
         required: false,
         default: function() {},
      },
      onChange: {
         type: Function,
         required: false,
         default: function() {},
      },
      onComplete: {
         type: Function,
         required: false,
         default: function() {},
      },
      onEnter: {
         type: Function,
         required: false,
         default: function() {},
      },
      onLeave: {
         type: Function,
         required: false,
         default: function() {},
      },

      // IntersectionObserver.
      once: {
         type: Boolean,
         required: false,
         default: false,
      },
      root: {
         type: typeof HTMLElement !== 'undefined' ? HTMLElement : Object,
         required: false,
         default: null,
      },
      rootMargin: {
         type: [ String, Number ],
         required: false,
         default: '0px',
      },
      threshold: {
         type: [ Array, Number ],
         required: false,
         default: 0.5,
      },

      // AnimeJS.
      children: {
         type: [ Array, Boolean ],
         required: false,
         default: false,
      },
      custom: {
         type: Object,
         required: false,
      },
      delay: {
         type: [ Number, Function ],
         required: false,
         default: 0,
      },
      duration: {
         type: [ Number, Function ],
         required: false,
         default: 1000,
      },
      easing: {
         type: [ String, Function ],
         required: false,
         default: 'linear',
      },
      preset: {
         type: String,
         required: false,
         default: 'fadeIn',
      },
      stagger: {
         type: [ Array, Number ],
         required: false,
      },

   },

   data: () => ({
      anime: {},
      hasEntered: false,
      observer: {},
      selector: null,
   }),

   mounted() {
      this.selector = this.$slots.default[0].elm
      this.initAnime()
      this.initObserver()
   },

   beforeDestroy() {
      if ( this.observer ) {
         this.observer.disconnect()
      }
   },

   computed: {
      observerOptions() {
         return {
            root: this.root,
            rootMargin: this.rootMargin,
            threshold: this.threshold,
         }
      },

      staggerOptions() {
         return Array.isArray( this.stagger )
            ? anime.stagger( ...this.stagger )
            : anime.stagger( this.stagger )
      },

      targetSelector() {
         return Array.isArray( this.children )
            ? this.selector.querySelectorAll( this.children )
            : this.children == true
            ? this.selector.children
            : this.selector
      },

      transitionStyle() {
         return this.custom ? this.custom : transitions[`${this.preset}`]
      },

   },

   methods: {

      // IntersectionObserver.
      initObserver() {
         this.observer = new IntersectionObserver( (entries) => {

            if ( !entries[0].isIntersecting ) {
               this.isNotIntersecting()
            } else {
               this.isIntersecting()
            }
            this.onChange()

         }, this.observerOptions )

         this.$nextTick(() => {
            this.activateObserver()
         })
      },

      activateObserver() {
         if (this.$slots.default && this.$slots.default.length > 1) {

            this.warn('[DashIntersect] You may only wrap one element in a <intersect> component.')

         } else if (!this.$slots.default || this.$slots.default.length < 1) {

            this.warn('[DashIntersect] You must have one child inside a <intersect> component.')

            return
         }

         this.observer.observe( this.selector )
      },

      isIntersecting() {
         // Run Animation.
         if ( this.hasEntered ) {
            this.anime.pause()
            this.anime.reverse()
         }
         this.anime.play()

         // Run Callback.
         this.onEnter()

         // Update on first entrance.
         if ( ! this.hasEntered ) {
            this.hasEntered = true
         }

         // Remove observer.
         if ( this.once ) {
            this.observer.unobserve(entries[0].target)
         }
      },

      isNotIntersecting() {
         if ( ! this.once && this.hasEntered ) {
            this.anime.pause()
            this.anime.reverse()
            this.anime.play()
         }
         this.onLeave()
      },

      // AnimeJS.
      initAnime() {
         this.anime = anime({
            targets: this.targetSelector,

            autoplay: false,
            loop: false,

            ...this.transitionStyle,

            delay: this.stagger ? this.staggerOptions : this.delay,
            duration: this.duration,
            easing: this.easing,

            begin: this.onBegin,
            complete: this.onComplete,
         })
      },

      // Utility.
      warn( message ) {
         if ( !Vue.config.silent ) {
            console.warn( message )
         }
      },

      isEmpty( obj ) {
         return Object.keys(obj).length === 0;
      }
   },

   render () {
      return this.$slots.default ? this.$slots.default[0] : null
   },

}
