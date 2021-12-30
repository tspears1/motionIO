import anime from 'animejs'

const transitions = {

   fadeIn: {
      opacity: [0, 1]
   },

   slideInDown: {
      opacity: [0, 1],
      translateY: [ '20vh', 0 ]
   },
   slideInLeft: {
      opacity: [0, 1],
      translateX: [ '-20vw', 0 ]
   },
   slideInRight: {
      opacity: [0, 1],
      translateX: [ '20vw', 0 ]
   },
   slideInUp: {
      opacity: [0, 1],
      translateY: [ '-20vh', 0 ]
   },

   revealInDown: {
      "-webkit-clip-path": [ 'polygon( 0% 0%, 100% 0%, 100% 0%, 0% 0% )', 'polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100% )'],
      clipPath: [ 'polygon( 0% 0%, 100% 0%, 100% 0%, 0% 0% )', 'polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100% )']
   },

   revealInLeft: {
      "-webkit-clip-path": [ 'polygon( 0% 0%, 0% 0%, 0% 100%, 0% 100% )', 'polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100% )'],
      clipPath: [ 'polygon( 0% 0%, 0% 0%, 0% 100%, 0% 100% )', 'polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100% )']
   },

   revealInRight: {
      "-webkit-clip-path": [ 'polygon( 100% 0%, 100% 0%, 100% 100%, 100% 100% )', 'polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100% )'],
      clipPath: [ 'polygon( 100% 0%, 100% 0%, 100% 100%, 100% 100% )', 'polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100% )']
   },

   revealInUp: {
      "-webkit-clip-path": [ 'polygon( 0% 100%, 100% 100%, 100% 100%, 0% 100% )', 'polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100% )'],
      clipPath: [ 'polygon( 0% 100%, 100% 100%, 100% 100%, 0% 100% )', 'polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100% )']
   },

   // tilt

   // reveal

   // zoom

   // flip

   // rotate
}

class MotionIO {
   constructor(el, options) {
      this.selector = el

      // Callbacks.
      this.onBegin = function() {}
      this.onChange = function() {}
      this.onComplete = function() {}
      this.onEnter = function() {}
      this.onLeave = function() {}

      // IntersectionalObserver.
      this.once = false
      this.threshold = 0.5
      this.rootMargin = '0px 0px 0px 0px'
      this.root = null
      this.hasEntered = false

      // AnimeJS.
      this.anime = {}
      this.custom = false
      this.delay = 0
      this.duration = 1000
      this.easing = 'linear'
      this.group = false
      this.preset = 'fadeIn'
      this.stagger = false

      // Override defaults.
      Object.assign( this, options )

      this.init()
   }

   init() {
      this.initAnime()
      this.initObserver()
   }

   destroy() {
      if ( this.observer ) {
         this.observer.disconnect()
      }
   }

   initObserver() {
      const observerOptions = {
         threshold: this.threshold,
         root: this.root,
         rootMargin: this.rootMargin,
      }

      const isIntersecting = () => {
         // Run Animation.
         if ( this.hasEntered ) {
            this.anime.pause()
            this.anime.reverse()
         }
         this.anime.play()

         // Run Callback.
         this.onEnter()

         // On first entrance, update
         if ( ! this.hasEntered ) {
            this.hasEntered = true
         }

         if ( this.once ) {
            this.observer.unobserve(entries[0].target)
         }
      }

      const isNotIntersecting = () => {
         if ( ! this.once && this.hasEntered ) {
            this.anime.pause()
            this.anime.reverse()
            this.anime.play()
         }
         this.onLeave()
      }

      this.observer = new IntersectionObserver((entries) => {

         if (!entries[0].isIntersecting) {
            isNotIntersecting()
         } else {
            isIntersecting()
         }
         this.onChange()

      }, observerOptions )

      this.observer.observe(this.selector)
   }

   initAnime() {
      const transitionStyle = this.custom ? this.custom : transitions[`${this.preset}`]
      const staggerOptions = Array.isArray( this.stagger ) ? anime.stagger( ...this.stagger ) : anime.stagger( this.stagger )

      const settings = {
         targets: this.group ? this.selector.children : this.selector,

         autoplay: false,
         loop: false,

         ...transitionStyle,

         delay: this.stagger ? staggerOptions : this.delay,
         duration: this.duration,
         easing: this.easing,

         begin: this.onBegin,
         complete: this.onComplete,
      }

      this.anime = anime({
         ...settings,
      })
   }
}

export default MotionIO