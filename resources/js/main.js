//Libraries.
import 'lazysizes'

// Vanilla Components.
import MotionIO from './motion-io/motion-io'
import MotionTextIO from './motion-io/motion-text-io'

// Vue Components.
import HelloWorld from './components/HelloWorld'

// Vue.
import Vue from 'vue'

// eslint-disable-next-line
new Vue({
    el: '#root',
    components: {
        HelloWorld,
    },

    mounted() {

        document.querySelectorAll('[data-motion-text]')
            .forEach( el => new MotionTextIO( el, {
                preset: 'slideInUp',
                easing: 'easeOutBounce',
                mask: true,
            }))

        document.querySelectorAll('[data-motion]')
            .forEach( el => new MotionIO( el, {
                duration: 750,
                threshold: 0.5,
                delay: 500,
                easing: 'easeOutBounce',
                preset: 'slideInRight',
        }))

        document.querySelectorAll('[data-motion-group]')
            .forEach( el => new MotionIO( el, {
                duration: 1500,
                threshold: 0.4,
                easing: 'easeOutBounce',
                children: true,
                stagger: 250,
                preset: 'revealInUp',

        }))
    },
})
