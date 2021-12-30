import anime from 'animejs'
import transitions from './transitions'

class MotionTextIO {
   constructor( el, options ) {
      this.selector = el

      this.className = 'motionText'
      this.elementTag = 'span'
      this.wrapper = true
      this.text = el.innerText
      this.textGroup = []


      this.init()
   }

   init() {
      this.buildText()
      this.renderText()
      console.log(this)
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
         this.buildContainer()
      }
   }

   buildWapper() {
      const wrapper = document.createElement(this.elementTag)
      wrapper.classList.add(this.className)
      this.selector.appendChild(wrapper)
   }

   buildWords() {
      // forEach loop

   }

   buildLetters() {
      // nested forEach loop
   }


}

export default MotionTextIO