(self["webpackChunkvue_motion_test"] = self["webpackChunkvue_motion_test"] || []).push([["/js/plugins/stickyHeader.plugin"],{

/***/ "./resources/js/plugins/stickyHeader.plugin.js":
/*!*****************************************************!*\
  !*** ./resources/js/plugins/stickyHeader.plugin.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 *
 * jQuery Sticky Header Plugin
 */



var $window = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);

(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn.stickyHeader) = function (options) {
  var plugin = this;
  var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
  return this.each(function () {
    // header hide and show on scroll up/down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var $header = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    var $headerContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-content');
    var initialHeight = $header.outerHeight();
    var $searchDrawer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-drawer');
    var $searchToggle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-toggle'); // handle search form toggling

    $searchToggle.on('click', function (e) {
      e.preventDefault();
      $searchDrawer.find('> div').toggleClass('open');
    }); // set up JS-enabled stuff

    $header.addClass('sticky');
    $body.css('padding-top', initialHeight);
    $window.scroll(function (event) {
      didScroll = true;
    });

    var scrollCheck = function scrollCheck() {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }

      requestAnimationFrame(scrollCheck);
    };

    requestAnimationFrame(scrollCheck);

    var hasScrolled = function hasScrolled() {
      var height = $header.outerHeight();
      var scrollPos = $window.scrollTop();
      var doNothing = scrollPos == lastScrollTop || Math.abs(lastScrollTop - scrollPos) <= delta;

      if (doNothing) {
        return;
      } // If they scrolled down and are past the header, add class .header-up.


      if (scrollPos > lastScrollTop && scrollPos > height) {
        // Scroll Down
        $header.addClass('header-up').css('top', -height);
      } else {
        // Scroll Up
        $header.removeClass('header-up').css('top', '0');
      }

      lastScrollTop = scrollPos;
    };

    $window.resize(function () {
      // check for inner containter to measure height
      // incase the search drawer is open
      var height = $headerContent.outerHeight();
      $body.css('padding-top', height);
      hasScrolled();
    });
  });
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./resources/js/plugins/stickyHeader.plugin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=stickyHeader.plugin.js.map