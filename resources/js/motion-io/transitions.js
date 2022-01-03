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

   textRevealInDown: {
      "-webkit-clip-path": [ 'polygon( -10% -10%, 110% -10%, 110% -10%, -10% -10% )', 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )'],
      clipPath: [ 'polygon( -10% -10%, 110% -10%, 110% -10%, -10% -10% )', 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )']
   },

   textRevealInLeft: {
      "-webkit-clip-path": [ 'polygon( -10% -10%, -10% -10%, -10% 110%, -10% 110% )', 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )'],
      clipPath: [ 'polygon( -10% -10%, -10% -10%, -10% 110%, -10% 110% )', 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )']
   },

   textRevealInRight: {
      "-webkit-clip-path": [ 'polygon( 110% -10%, 110% -10%, 110% 110%, 110% 110% )', 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )'],
      clipPath: [ 'polygon( 110% -10%, 110% -10%, 110% 110%, 110% 110% )', 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )']
   },

   textRevealInUp: {
      "-webkit-clip-path": [ 'polygon( -10% 110%, 110% 110%, 110% 110%, -10% 110% )', 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )'],
      clipPath: [ 'polygon( -10% 110%, 110% 110%, 110% 110%, -10% 110% )', 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )']
   },

   // tilt

   // reveal

   // zoom

   // flip

   // rotate
}

export default transitions