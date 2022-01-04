<template>
   <component
      :is="tag"
      :class="`${className}`"
      ref="motion"
   >
      <span
         :class="`${className}__word`"
         v-for="(word, index) in textGroup"
         :key="`word-${index}`"
         :style="addStyles( index )"
      >
         <span
            :class="`${className}__letter`"
            ref="letter"
            v-for="(letter, index) in word"
            :key="`letter-${index}`"
         >
            {{ letter }}
         </span>
      </span>
   </component>
</template>

<script>
import anime from 'animejs'
import transitions from '../motion-io/transitions'

export default {
   name: 'motion-text',

   props: {
      applyStyles: {
         type: Boolean,
         required: false,
         default: true,
      },
      className: {
         type: String,
         required: false,
         default: 'motionText',
      },
      tag: {
         type: String,
         required: false,
         default: 'span',
      },
      mask: {
         type: Boolean,
         required: false,
         default: false,
      },
      wrapper: {
         type: Boolean,
         required: false,
         default: true,
      },

      // IntersectionObserver.
      once: {
         type: Boolean,
         required: false,
         default: false,
      },
      observerOptions: {
         type: Object,
         required: false,
         default: () => ({
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
         })
      },

      // AnimeJS.
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
         default: 500,
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
         default: 100,
      },
   },

   anime: {},
   observer: {},

   data: () => ({
      hasEntered: false,
   }),

   computed: {
      textGroup() {
         const text = this.$slots.default[0].text
         const words =  text.split(' ')
         let group = []
         words.map( (word) => {
            group = [...group, word.split('') ]
         })
         return group
      },

      staggerOptions() {
         return  anime.stagger(
            ...Array.isArray( this.stagger )
            ? this.stagger
            : [this.stagger]
         )
      },

      transitionStyle() {
         return this.custom || transitions[`${this.preset}`]
      },
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

   methods: {

      addStyles( index ) {
         const styles = {}

         if ( this.applyStyles ) {
            styles.display = 'inline-flex'

            if ( index > 0 ) {
               styles.marginLeft = '0.5rem'
            }
         }

         if ( this.mask ) {
            styles.clipPath = 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )'
         }

         return styles
      },

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
         if (this.$slots.default && this.$slots.default.length > 1) {

            this.warn('[MotionIO] You may only wrap one element in a <intersect> component.')

         } else if (!this.$slots.default || this.$slots.default.length < 1) {

            this.warn('[MotionIO] You must have one child inside a <intersect> component.')

            return
         }

         this.$options.observer.observe( this.$refs.motion )
      },

      isIntersecting( entries ) {
         // Run Animation.
         if ( this.hasEntered ) {
            this.$options.anime.pause()
            this.$options.anime.reverse()
         }
         this.$options.anime.play()

         // Run Callback.
         this.$emit('enter', entries[0])

         // Update on first entrance.
         if ( ! this.hasEntered ) {
            this.hasEntered = true
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
         this.$options.anime = anime({
            targets: this.$refs.letter,

            autoplay: false,
            loop: false,

            ...this.transitionStyle,

            delay: this.stagger ? this.staggerOptions : this.delay,
            duration: this.duration,
            easing: this.easing,

            begin: ( anime ) => {
               this.$emit('begin', anime)
            },
            complete: ( anime ) => {
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
   }
}
</script>