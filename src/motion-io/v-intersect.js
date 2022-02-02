import Vue from 'vue'

export default {
   name: 'intersect',

   props: {

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

   },

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

   },

   mounted() {
      this.initObserver()
   },

   beforeDestroy() {
      if ( this.$options.observer ) {
         this.$options.observer.disconnect()
      }
   },

   render () {
      return this.$scopedSlots.default()
      ? this.$scopedSlots.default({ entered: this.hasEntered, observer: this.$options.observer })[0]
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

         // Run Callback.
         this.$emit('enter', entries[0])

         // Update on first entrance.
         if ( ! this.hasEntered ) {
            this.hasEntered = true
            this.$emit('hasEntered', true)
            return
         }

         // Remove observer.
         if ( this.once ) {
            this.$options.observer.unobserve(entries[0].target)
         }
      },

      isNotIntersecting( entries ) {
         this.$emit('leave', entries[0])
      },

      // Utility.
      warn( message ) {
         if ( !Vue.config.silent ) {
            console.error( message )
         }
      },
   },

}
