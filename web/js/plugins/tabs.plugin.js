(self["webpackChunkvue_motion_test"] = self["webpackChunkvue_motion_test"] || []).push([["/js/plugins/tabs.plugin"],{

/***/ "./resources/js/plugins/tabs.plugin.js":
/*!*********************************************!*\
  !*** ./resources/js/plugins/tabs.plugin.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 *
 * jQuery Tabs Plugin
 */




(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn.tabs) = function () {
  this.each(function () {
    var $nav = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('nav');
    var $tabs = $nav.find('li');
    var $panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.panel');

    if (location.hash) {
      $tabs.each(function () {
        var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);

        if ($this.data('hash') == location.hash) {
          $tabs.not($this).removeClass('active');
          $this.addClass('active');
          var $activePanel = $panel.eq($this.index());
          $panel.not($activePanel).removeClass('active');
          $activePanel.addClass('active');
        }
      });
    }

    $tabs.click(function () {
      var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      var $i = $this.index();
      var $activePanel = $panel.eq($i);
      $panel.not($activePanel).removeClass('active');
      $activePanel.addClass('active');
      $this.siblings('li').removeClass('active');
      $this.addClass('active');
      var hash = $this.data('hash');

      if (hash != 'undefined') {
        if (history.pushState) {
          history.pushState(null, null, hash);
        } else {
          location.hash = hash;
        }
      }
    });
  });
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./resources/js/plugins/tabs.plugin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=tabs.plugin.js.map