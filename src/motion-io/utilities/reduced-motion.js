/**
* Prefers Reduced Motion Settings
*
*  Checks for reduced motion setting and stores status in LocalStorage for use in other scripts.
*
*/
const motionQuery = matchMedia('(prefers-reduced-motion)')

// Store in localStorage for use in other files.
// Ex.
// * let reduceMotion = localStorage.getItem('reduceMotion')

const updateLocalStorage = ( value ) => {
   localStorage.setItem('reduceMotion', value )
}

const stopVideoAutoplay = () => {
   // Find all HTML5 video elements.
   const videos = document.querySelectorAll( 'video' )
   videos.forEach( video => {
      // Pause all videos with autoplay.
      const autoplay  = video.getAttribute('autoplay')
      if ( autoplay ) {
         video.pause()
      }
   })
}

const reducedMotionCheck = () => {
   if ( motionQuery.matches ) {
      // Add functions for reduced motion here.
      console.warn('[MOTION-IO]: Reduced Motion setting is active. Autoplay and animations have been turned off.')
      updateLocalStorage( true )
      stopVideoAutoplay()
   } else {
      updateLocalStorage( false )
   }
}

reducedMotionCheck()
motionQuery.addEventListener('change', reducedMotionCheck)