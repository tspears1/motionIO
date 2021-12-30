(self["webpackChunkvue_motion_test"] = self["webpackChunkvue_motion_test"] || []).push([["/js/plugins/dropdown.plugin"],{

/***/ "./resources/js/plugins/dropdown.plugin.js":
/*!*************************************************!*\
  !*** ./resources/js/plugins/dropdown.plugin.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 *
 * jQuery Dropdown Plugin
 */




(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn.dropdown) = function () {
  var $menuItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()('nav.primary > ul > li');
  $menuItem.hover(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.dropdown').addClass('open');
  }, function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.dropdown').removeClass('open');
  });
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./resources/js/plugins/dropdown.plugin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=dropdown.plugin.js.map