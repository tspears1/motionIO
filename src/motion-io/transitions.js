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
      "-webkit-clip-path": [ 'inset(0% 0% 100% 0%)', 'inset(0% 0% 0% 0%)'],
      clipPath: [ 'inset(0% 0% 100% 0%)', 'inset(0% 0% 0% 0%)']
   },

   revealInLeft: {
      "-webkit-clip-path": [ 'inset(0% 0% 0% 100%)', 'inset(0% 0% 0% 0%)'],
      clipPath: [ 'inset(0% 0% 0% 100%)', 'inset(0% 0% 0% 0%)']
   },

   revealInRight: {
      "-webkit-clip-path": [ 'inset(0% 100% 0% 0%)', 'inset(0% 0% 0% 0%)'],
      clipPath: [ 'inset(0% 100% 0% 0%)', 'inset(0% 0% 0% 0%)']
   },

   revealInUp: {
      "-webkit-clip-path": [ 'inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'],
      clipPath: [ 'inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)']
   },

   textRevealInDown: {
      "-webkit-clip-path": [ 'inset(-10% -10% 110% -10%)', 'inset( -10% -10% -10% -10%'],
      clipPath: [ 'inset(-10% -10% 110% -10%)', 'inset( -10% -10% -10% -10%']
   },

   textRevealInLeft: {
      "-webkit-clip-path": [ 'inset(-10% -10% -10% 110%)', 'inset( -10% -10% -10% -10%'],
      clipPath: [ 'inset(-10% -10% -10% 110%)', 'inset( -10% -10% -10% -10%']
   },

   textRevealInRight: {
      "-webkit-clip-path": [ 'inset(-10% 110% -10% -10%)', 'inset( -10% -10% -10% -10%'],
      clipPath: [ 'inset(-10% 110% -10% -10%)', 'inset( -10% -10% -10% -10%']
   },

   textRevealInUp: {
      "-webkit-clip-path": [ 'inset(110% -10% -10% -10%)', 'inset( -10% -10% -10% -10%'],
      clipPath: [ 'inset(110% -10% -10% -10%)', 'inset( -10% -10% -10% -10%']
   },

   bounceInDown: {
      easing: 'easeOutBounce',
      opacity: [0, 1],
      translateY: [ '20vh', 0 ]
   },
   bounceInLeft: {
      easing: 'easeOutBounce',
      opacity: [0, 1],
      translateX: [ '-20vw', 0 ]
   },
   bounceInRight: {
      easing: 'easeOutBounce',
      opacity: [0, 1],
      translateX: [ '20vw', 0 ]
   },
   bounceInUp: {
      easing: 'easeOutBounce',
      opacity: [0, 1],
      translateY: [ '-20vh', 0 ]
   },

   zoomIn: {
      opacity: [0, 1],
      scaleX: [0, 1],
      scaleY: [0, 1]
   },

   zoomOut: {
      opacity: [0, 1],
      scaleX: [2, 1],
      scaleY: [2, 1]
   },

   flipX: {
      rotateX: [90, 0]
   },

   flipY: {
      rotateY: [90, 0]
   },

   rotateLeft: {
      opacity: [0, 1],
      rotate: [360, 0]
   },

   rotateRight: {
      opacity: [0, 1],
      rotate: [-360, 0]
   },

   standRight: {
      skewZ: [ 20, 0],
      rotateX: [90, 0],
      translateX: [ '-3rem', 0],
      translateY: [ '3rem', 0]
   }

   // tilt


}

export default transitions