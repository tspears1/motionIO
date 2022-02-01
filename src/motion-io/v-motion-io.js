import Vue from 'vue'
import anime from 'animejs'
import transitions from './transitions'

export default {
   name: 'motion',

   props: {

      // IntersectionObserver.
      once: {
         type: Boolean,
         required: false,
         default: false,
      },
      observerRoot: {
         type: Object,
         required: false,
         default: () => ({
            root: null,
            rootMargin: '0px',
         })
      },

      threshold: {
         type: [ Function, Array, Number ],
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
      origin: {
         type: String,
         required: false,
      },
      preset: {
         type: String,
         required: false,
         default: 'fadeIn',
      },
      svg: {
         type: Boolean,
         required: false,
         default: false,
      },
      stagger: {
         type: [ Array, Number ],
         required: false,
      },

   },

   anime: {},
   observer: {},

   data: () => ({
      hasEntered: false,
   }),

   computed: {

      observerOptions() {
         return {
            root: this.observerRoot.root,
            rootMargin: this.observerRoot.rootMargin,
            threshold: this.threshold
         }
      },

      selector() {
         return this.$el
      },

      staggerOptions() {
         return  anime.stagger(
            ...Array.isArray( this.stagger )
            ? this.stagger
            : [this.stagger]
         )
      },

      targetSelector() {
         if ( Array.isArray( this.children ) ) {
            return this.selector.querySelectorAll( this.children )
         } else if ( this.children == true ) {
            return this.selector.children
         } else {
            return this.selector
         }
      },

      transitionStyle() {
         return this.custom || transitions[`${this.preset}`]
      },

      reduceMotion() {
         return localStorage.getItem('reduceMotion')
      }

   },

   mounted() {
      this.initAnime()
      this.initObserver()
   },

   beforeDestroy() {
      if ( this.$options.observer ) {
         this.$options.observer.disconnect()
      }
   },

   render () {
      return this.$scopedSlots.default()
      ? this.$scopedSlots.default({ entered: this.hasEntered, anime: this.$options.anime, observer: this.$options.observer })[0]
      : null
   },

   methods: {

      // IntersectionObserver.
      initObserver() {
         this.$options.observer = new IntersectionObserver( (entries) => {

            if ( !entries[0].isIntersecting ) {
               this.isNotIntersecting( entries )
            } else {
               this.isIntersecting( entries )
            }
            this.$emit('change', entries[0].isIntersecting )

         }, this.observerOptions )

         this.$nextTick(() => {
            this.activateObserver()
         })
      },

      activateObserver() {
         if (this.$scopedSlots.default() && this.$scopedSlots.default().length > 1) {

            this.warn('[MotionIO] You may only wrap one element in a <intersect> component.')

         } else if (!this.$scopedSlots.default() || this.$scopedSlots.default().length < 1) {

            this.warn('[MotionIO] You must have one child inside a <intersect> component.')

            return
         }

         this.$options.observer.observe( this.selector )
      },

      isIntersecting( entries ) {
         // Run Animation.
         if ( this.hasEntered === true ) {
            this.$options.anime.pause()
            this.$options.anime.reverse()
         }
         this.$options.anime.play()

         // Run Callback.
         this.$emit('enter', entries[0])

         // Update on first entrance.
         if ( ! this.hasEntered ) {
            this.hasEntered = true
            return
         }

         // Remove observer.
         if ( this.once ) {
            this.$options.observer.unobserve(entries[0].target)
         }
      },

      isNotIntersecting( entries ) {
         if ( ! this.once && this.hasEntered ) {
            this.$options.anime.pause()
            this.$options.anime.reverse()
            this.$options.anime.play()
         }
         this.$emit('leave', entries[0])
      },

      // AnimeJS.
      initAnime() {
         if ( this.origin ) {
            anime.set( this.targetSelector, { transformOrigin: this.origin })
         }
         this.$options.anime = anime({
            targets: this.targetSelector,

            autoplay: false,
            loop: false,
            strokeDashoffset: this.svg ? [anime.setDashoffset, 0] : '',

            ...this.transitionStyle,

            delay: this.stagger ? this.staggerOptions : this.delay,
            duration: this.reduceMotion == "true" ? 0 : this.duration,
            easing: this.easing,


            begin: (...anime) => {
               this.$emit('begin', anime)
            },
            complete: (...anime) => {
               this.$emit('complete', anime)
            },
         })
      },

      // Utility.
      warn( message ) {
         if ( !Vue.config.silent ) {
            console.error( message )
         }
      },
   },

}
