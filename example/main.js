// Vanilla Components.
import MotionIO from '../src/motion-io/motion-io'
import MotionTextIO from '../src/motion-io/motion-text-io'

// Vue Components.
import Motion from '../src/motion-io/v-motion-io'
import MotionText from '../src/motion-io/v-motion-text-io'

// Vue.
import Vue from 'vue'

// Reduced Motion.
import '../src/motion-io/utilities/reduced-motion'

// eslint-disable-next-line
new Vue({
    el: '#root',

    delimiters: ["${", "}"],

    components: {
        Motion,
        MotionText,
    },

    mounted() {

        document.querySelectorAll('[data-motion-text]')
            .forEach( el => new MotionTextIO( el, {
                preset: 'slideInUp',
                easing: 'easeOutExpo',
                mask: false,
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
                easing: 'easeOutCirc',
                children: true,
                stagger: 250,
                preset: 'revealInUp',

        }))
    },
})
