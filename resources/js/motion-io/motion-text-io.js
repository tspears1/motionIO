import anime from 'animejs'
import transitions from './transitions'

class MotionTextIO {
   constructor( el, options ) {
      this.selector = el

      // Text.
      this.className = 'motionText'
      this.elementTag = 'span'
      this.mask = false
      this.style = true
      this.text = el.innerText
      this.textGroup = []
      this.wrapper = true

      // Callbacks.
      this.onBegin = function() {}
      this.onChange = function() {}
      this.onComplete = function() {}
      this.onEnter = function() {}
      this.onLeave = function() {}

      // IntersectionObserver.
      this.once = false
      this.threshold = 0.5
      this.rootMargin = '0px 0px 0px 0px'
      this.root = null
      this.hasEntered = false

      // AnimeJS.
      this.anime = {}
      this.custom = false
      this.delay = 0
      this.duration = 500
      this.easing = 'linear'
      this.preset = 'fadeIn'
      this.stagger = 100

      // Override defaults.
      Object.assign( this, options )

      this.init()
   }

   init() {
      this.buildText()
      this.renderText()
      this.initAnime()
      this.initObserver()
   }

   buildText() {
      const textWord = this.text.split(' ')
      textWord.map( (word) => {
         const wordArray = word.split('')
         this.textGroup = [...this.textGroup, wordArray ]
      })
   }

   renderText() {
      this.selector.innerText = ''
      if ( this.wrapper ) {
         this.buildWrapper()
      }
   }

   buildWrapper() {
      const wrapper = document.createElement(this.elementTag)
      wrapper.classList.add(this.className)
      this.selector.appendChild( wrapper )
      this.buildWords( this.textGroup, wrapper )

   }

   buildWords(phrase, wrapper) {
      phrase.forEach( (word, index) => {
         const wordEl = document.createElement( 'span' )
         wordEl.classList.add( `${this.className}__word` )
         wordEl.classList.add( `word-${index + 1}` )

         if ( this.style ) {
            wordEl.style.display = 'inline-flex'

            if ( index > 0 ) {
               wordEl.style.marginLeft = '0.5rem'
            }
         }

         if ( this.mask ) {
            wordEl.style.clipPath = 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )'
         }

         wrapper.appendChild( wordEl )
         this.buildLetters( word, wordEl )
      })
   }

   buildLetters( word, wordEl ) {
      word.forEach( (letter, index) => {
         const letterEl = document.createElement( 'span' )
         letterEl.classList.add( `${this.className}__letter` )
         letterEl.classList.add( `letter-${index + 1}` )
         letterEl.innerText = letter
         wordEl.appendChild( letterEl )
      })
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

         // Update on first entrance.
         if ( ! this.hasEntered ) {
            this.hasEntered = true
         }

         // Remove observer.
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
         targets: this.selector.querySelectorAll( `.${this.className}__letter` ),

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

export default MotionTextIO