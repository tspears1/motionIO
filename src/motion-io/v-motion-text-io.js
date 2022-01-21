import Vue from 'vue'
import anime from 'animejs'
import transitions from './transitions'

export default {
   name: 'motion-text',

   props: {
      applyStyles: {
         type: Boolean,
         required: false,
         default: true,
      },
      block: {
         type: String,
         required: false,
         default: 'motionText',
      },
      mask: {
         type: Boolean,
         required: false,
         default: false,
      },
      tag: {
         type: String,
         required: false,
         default: 'span',
      },
      wordWrap: {
         type: Boolean,
         required: false,
         default: false,
      },

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
      html: '',
   }),

   computed: {

      observerOptions() {
         return {
            root: this.observerRoot.root,
            rootMargin: this.observerRoot.rootMargin,
            threshold: this.threshold
         }
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

   render: function (h) {
         return h(
            this.tag,
            {
               class: `${this.block}__wrapper`,
            },
            this.$scopedSlots.default({
               entered: this.hasEntered,
               anime: this.$options.anime,
               observer: this.$options.observer
            }).map( (node) => this.renderBlock(h, node) )
         )
   },

   methods: {

      renderBlock(h, block) {
         // handle tag without text (like a <br/>)
         /*
            * If it's something visible, like an <hr/>, you could add in a nested
            * conditional statement to check for those elements and then return
            * the block with a `${this.block}__letter` class added so that it can
            * still be animated. Or a different class/attribute so it can be
            * animated differently!
            */
         if (!block.text && !Array.isArray(block.children)) {
            return block;
         }

         // add word span around letters if true.
         if ( block.text && this.wordWrap ) {
            return block.text.split(" ").map( (word, index) => {
               const wordArray = word.split("").map( (letter) => {
                  if (letter !== " " && letter !== "\n") {
                     // Return character as span element
                     return h("span", { class: `${this.block}__letter`, ref: 'letter', refInFor: true, }, letter);
                  } else {
                     // Otherwise, return just the space/new line as is, without spans
                     return letter;
                  }
               })
               return h("span", { class: `${this.block}__word`, style: this.buildStyles(index) }, wordArray )
            })
         }

         // Convert each text into <span>
         if (block.text) {
            // Convert to array for easier handling
            return block.text.split("").map( (letter) => {
               // If it's not a space or newline (could be replaced with regex)
               if (letter !== " " && letter !== "\n") {
                  // Return character as span element
                  return h("span", { class: `${this.block}__letter`, ref: 'letter', refInFor: true, }, letter);
               } else {
                  // Otherwise, return just the space/new line as is, without spans
                  return letter;
               }
            });
         }

         // Recursive: if element and has children, loop through each child and re-run
         if (Array.isArray(block.children)) {
            return h(
               block.tag,
               {
                  // This captures the class that was added in the slot, if available
                  // Emptry string if no class
                  class:
                     block.data && block.data.staticClass
                        ? block.data.staticClass
                        : "",
               },
               block.children.map((childBlock) => this.renderBlock(h, childBlock))
            )
         }
      },

      buildStyles( index ) {
         const styles = {}

         if ( this.applyStyles ) {
            styles.display = 'inline-flex'

            if ( index > 0 ) {
               styles.marginLeft = '0.5rem'
            }
         }

         if ( this.mask ) {
            styles.webkitClipPath = 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )'
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
         this.$options.observer.observe( this.$el )
      },

      isIntersecting( entries ) {
         // Run Animation.
         if ( this.hasEntered ) {
            this.$options.anime.pause()
            this.$options.anime.reverse()
         }
         setTimeout(() => {
            this.$options.anime.play()
         }, this.delay );

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

            delay: this.stagger ? this.staggerOptions : '',
            duration: this.reduceMotion == "true" ? 0 : this.duration,
            easing: this.easing,

            begin: ( anime ) => {
               this.$emit('begin', anime)
            },
            complete: ( anime ) => {
               this.$emit('complete', anime)
            },
         })
      },

      warn( message ) {
         if ( !Vue.config.silent ) {
            console.error( message )
         }
      },
   }
}