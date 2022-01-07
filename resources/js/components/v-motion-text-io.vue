<template>
   <component
      :is="tag"
      :class="`${className}`"
      :aria-label="fullText"
   >
      <span v-html="parseText" />
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
      text: {
         type: [ String, Object, HTMLElement ],
         required: true,
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
      html: '',
   }),

   computed: {
      parseText() {
         const parser = new DOMParser()
         var doc = parser.parseFromString( this.text, 'text/html')
         let template = document.createElement( 'template' )
         template.innerHTML = doc.body.innerHTML
         let nodes = template.content.childNodes
         console.log(nodes)
         // const getSlotContent = ( nodes ) => {
         //    nodes.forEach( (node) => {
         //       if ( node.childNodes ) {
         //          getSlotContent(node.childNodes)
         //       } else {
         //          return node.nodeValue
         //       }
         //    })
         // }

         // 1. Iterate through HTML nodes with search loop.
         // 2. If node is text (type 3), run TextSplit function.
         // 3. If node is element (type 1), check for children.
         // 3a. If no children (ie. </br>), create element.
         // 3b. If children (ie. <p>, <strong>, <a href>), create element and start new search loop.
      },

      textGroup() {
         const text = '' // add text prop
         const words =  text.split(' ')
         let group = []
         words.map( (word) => {
            group = [...group, word.split('') ]
         })
         return group
      },

      fullText() {

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
      console.log( this.parseText )
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
         this.$options.observer.observe( this.$el )
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
      getSlotContent( slot ) {
         const _ = this
         slot.forEach( (node) => {
            return node.children
               ? _.getSlotContent(node.children)
               : node.text
         }).join('')
      },

      warn( message ) {
         if ( !Vue.config.silent ) {
            console.error( message )
         }
      },
   }
}
</script>