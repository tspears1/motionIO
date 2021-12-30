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

export default transitions