(self["webpackChunkMotionIO"] = self["webpackChunkMotionIO"] || []).push([["/js/main"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HelloWorld.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HelloWorld.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'HelloWorld',
  props: {
    msg: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/v-motion-text-io.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/v-motion-text-io.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _motion_io_transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../motion-io/transitions */ "./resources/js/motion-io/transitions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'motion-text',
  props: {
    applyStyles: {
      type: Boolean,
      required: false,
      "default": true
    },
    className: {
      type: String,
      required: false,
      "default": 'motionText'
    },
    tag: {
      type: String,
      required: false,
      "default": 'span'
    },
    text: {
      type: [String, Object, HTMLElement],
      required: true
    },
    mask: {
      type: Boolean,
      required: false,
      "default": false
    },
    wrapper: {
      type: Boolean,
      required: false,
      "default": true
    },
    // IntersectionObserver.
    once: {
      type: Boolean,
      required: false,
      "default": false
    },
    observerOptions: {
      type: Object,
      required: false,
      "default": function _default() {
        return {
          root: null,
          rootMargin: '0px',
          threshold: 0.5
        };
      }
    },
    // AnimeJS.
    custom: {
      type: Object,
      required: false
    },
    delay: {
      type: [Number, Function],
      required: false,
      "default": 0
    },
    duration: {
      type: [Number, Function],
      required: false,
      "default": 500
    },
    easing: {
      type: [String, Function],
      required: false,
      "default": 'linear'
    },
    preset: {
      type: String,
      required: false,
      "default": 'fadeIn'
    },
    stagger: {
      type: [Array, Number],
      required: false,
      "default": 100
    }
  },
  anime: {},
  observer: {},
  data: function data() {
    return {
      hasEntered: false,
      html: ''
    };
  },
  computed: {
    parseText: function parseText() {
      var parser = new DOMParser();
      var doc = parser.parseFromString(this.text, 'text/html');
      var template = document.createElement('template');
      template.innerHTML = doc.body.innerHTML;
      var nodes = template.content.childNodes;
      console.log(nodes); // const getSlotContent = ( nodes ) => {
      //    nodes.forEach( (node) => {
      //       if ( node.childNodes ) {
      //          getSlotContent(node.childNodes)
      //       } else {
      //          return node.nodeValue
      //       }
      //    })
      // }
      // 1. Iterate through HTML nodes with search loop.
      // 2. If node is text (type 3), run TextSplit function.
      // 3. If node is element (type 1), check for children.
      // 3a. If no children (ie. </br>), create element.
      // 3b. If children (ie. <p>, <strong>, <a href>), create element and start new search loop.
    },
    textGroup: function textGroup() {
      var text = ''; // add text prop

      var words = text.split(' ');
      var group = [];
      words.map(function (word) {
        group = [].concat(_toConsumableArray(group), [word.split('')]);
      });
      return group;
    },
    fullText: function fullText() {},
    staggerOptions: function staggerOptions() {
      return animejs__WEBPACK_IMPORTED_MODULE_0__.default.stagger.apply(animejs__WEBPACK_IMPORTED_MODULE_0__.default, _toConsumableArray(Array.isArray(this.stagger) ? this.stagger : [this.stagger]));
    },
    transitionStyle: function transitionStyle() {
      return this.custom || _motion_io_transitions__WEBPACK_IMPORTED_MODULE_1__.default["".concat(this.preset)];
    }
  },
  mounted: function mounted() {
    this.initAnime();
    this.initObserver();
    console.log(this.parseText);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$options.observer) {
      this.$options.observer.disconnect();
    }
  },
  methods: {
    addStyles: function addStyles(index) {
      var styles = {};

      if (this.applyStyles) {
        styles.display = 'inline-flex';

        if (index > 0) {
          styles.marginLeft = '0.5rem';
        }
      }

      if (this.mask) {
        styles.clipPath = 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )';
      }

      return styles;
    },
    // IntersectionObserver.
    initObserver: function initObserver() {
      var _this = this;

      this.$options.observer = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) {
          _this.isNotIntersecting(entries);
        } else {
          _this.isIntersecting(entries);
        }

        _this.$emit('change', entries[0].isIntersecting);
      }, this.observerOptions);
      this.$nextTick(function () {
        _this.activateObserver();
      });
    },
    activateObserver: function activateObserver() {
      this.$options.observer.observe(this.$el);
    },
    isIntersecting: function isIntersecting(entries) {
      // Run Animation.
      if (this.hasEntered) {
        this.$options.anime.pause();
        this.$options.anime.reverse();
      }

      this.$options.anime.play(); // Run Callback.

      this.$emit('enter', entries[0]); // Update on first entrance.

      if (!this.hasEntered) {
        this.hasEntered = true;
      } // Remove observer.


      if (this.once) {
        this.$options.observer.unobserve(entries[0].target);
      }
    },
    isNotIntersecting: function isNotIntersecting(entries) {
      if (!this.once && this.hasEntered) {
        this.$options.anime.pause();
        this.$options.anime.reverse();
        this.$options.anime.play();
      }

      this.$emit('leave', entries[0]);
    },
    // AnimeJS.
    initAnime: function initAnime() {
      var _this2 = this;

      this.$options.anime = (0,animejs__WEBPACK_IMPORTED_MODULE_0__.default)(_objectSpread(_objectSpread({
        targets: this.$refs.letter,
        autoplay: false,
        loop: false
      }, this.transitionStyle), {}, {
        delay: this.stagger ? this.staggerOptions : this.delay,
        duration: this.duration,
        easing: this.easing,
        begin: function begin(anime) {
          _this2.$emit('begin', anime);
        },
        complete: function complete(anime) {
          _this2.$emit('complete', anime);
        }
      }));
    },
    // Utility.
    getSlotContent: function getSlotContent(slot) {
      var _ = this;

      slot.forEach(function (node) {
        return node.children ? _.getSlotContent(node.children) : node.text;
      }).join('');
    },
    warn: function warn(message) {
      if (!Vue.config.silent) {
        console.error(message);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/v-motion-io.js":
/*!************************************************!*\
  !*** ./resources/js/components/v-motion-io.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _motion_io_transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../motion-io/transitions */ "./resources/js/motion-io/transitions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'motion',
  props: {
    // IntersectionObserver.
    once: {
      type: Boolean,
      required: false,
      "default": false
    },
    observerOptions: {
      type: Object,
      required: false,
      "default": function _default() {
        return {
          root: null,
          rootMargin: '0px',
          threshold: 0.5
        };
      }
    },
    // AnimeJS.
    children: {
      type: [Array, Boolean],
      required: false,
      "default": false
    },
    custom: {
      type: Object,
      required: false
    },
    delay: {
      type: [Number, Function],
      required: false,
      "default": 0
    },
    duration: {
      type: [Number, Function],
      required: false,
      "default": 1000
    },
    easing: {
      type: [String, Function],
      required: false,
      "default": 'linear'
    },
    preset: {
      type: String,
      required: false,
      "default": 'fadeIn'
    },
    stagger: {
      type: [Array, Number],
      required: false
    }
  },
  anime: {},
  observer: {},
  data: function data() {
    return {
      hasEntered: false
    };
  },
  mounted: function mounted() {
    this.initAnime();
    this.initObserver();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$options.observer) {
      this.$options.observer.disconnect();
    }
  },
  computed: {
    selector: function selector() {
      return this.$slots["default"][0].elm;
    },
    staggerOptions: function staggerOptions() {
      return animejs__WEBPACK_IMPORTED_MODULE_0__.default.stagger.apply(animejs__WEBPACK_IMPORTED_MODULE_0__.default, _toConsumableArray(Array.isArray(this.stagger) ? this.stagger : [this.stagger]));
    },
    targetSelector: function targetSelector() {
      if (Array.isArray(this.children)) {
        return this.selector.querySelectorAll(this.children);
      } else if (this.children == true) {
        return this.selector.children;
      } else {
        return this.selector;
      }
    },
    transitionStyle: function transitionStyle() {
      return this.custom || _motion_io_transitions__WEBPACK_IMPORTED_MODULE_1__.default["".concat(this.preset)];
    }
  },
  methods: {
    // IntersectionObserver.
    initObserver: function initObserver() {
      var _this = this;

      this.$options.observer = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) {
          _this.isNotIntersecting(entries);
        } else {
          _this.isIntersecting(entries);
        }

        _this.$emit('change', entries[0].isIntersecting);
      }, this.observerOptions);
      this.$nextTick(function () {
        _this.activateObserver();
      });
    },
    activateObserver: function activateObserver() {
      if (this.$slots["default"] && this.$slots["default"].length > 1) {
        this.warn('[MotionIO] You may only wrap one element in a <intersect> component.');
      } else if (!this.$slots["default"] || this.$slots["default"].length < 1) {
        this.warn('[MotionIO] You must have one child inside a <intersect> component.');
        return;
      }

      this.$options.observer.observe(this.selector);
    },
    isIntersecting: function isIntersecting(entries) {
      // Run Animation.
      if (this.hasEntered) {
        this.$options.anime.pause();
        this.$options.anime.reverse();
      }

      this.$options.anime.play(); // Run Callback.

      this.$emit('enter', entries[0]); // Update on first entrance.

      if (!this.hasEntered) {
        this.hasEntered = true;
      } // Remove observer.


      if (this.once) {
        this.$options.observer.unobserve(entries[0].target);
      }
    },
    isNotIntersecting: function isNotIntersecting(entries) {
      if (!this.once && this.hasEntered) {
        this.$options.anime.pause();
        this.$options.anime.reverse();
        this.$options.anime.play();
      }

      this.$emit('leave', entries[0]);
    },
    // AnimeJS.
    initAnime: function initAnime() {
      var _this2 = this;

      this.$options.anime = (0,animejs__WEBPACK_IMPORTED_MODULE_0__.default)(_objectSpread(_objectSpread({
        targets: this.targetSelector,
        autoplay: false,
        loop: false
      }, this.transitionStyle), {}, {
        delay: this.stagger ? this.staggerOptions : this.delay,
        duration: this.duration,
        easing: this.easing,
        begin: function begin() {
          for (var _len = arguments.length, anime = new Array(_len), _key = 0; _key < _len; _key++) {
            anime[_key] = arguments[_key];
          }

          _this2.$emit('begin', anime);
        },
        complete: function complete() {
          for (var _len2 = arguments.length, anime = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            anime[_key2] = arguments[_key2];
          }

          _this2.$emit('complete', anime);
        }
      }));
    },
    // Utility.
    warn: function warn(message) {
      if (!vue__WEBPACK_IMPORTED_MODULE_2__.default.config.silent) {
        console.error(message);
      }
    }
  },
  render: function render() {
    return this.$slots["default"] ? this.$slots["default"][0] : null;
  }
});

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _motion_io_motion_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./motion-io/motion-io */ "./resources/js/motion-io/motion-io.js");
/* harmony import */ var _motion_io_motion_text_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./motion-io/motion-text-io */ "./resources/js/motion-io/motion-text-io.js");
/* harmony import */ var _components_HelloWorld__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/HelloWorld */ "./resources/js/components/HelloWorld.vue");
/* harmony import */ var _components_v_motion_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/v-motion-io */ "./resources/js/components/v-motion-io.js");
/* harmony import */ var _components_v_motion_text_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/v-motion-text-io */ "./resources/js/components/v-motion-text-io.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
//Libraries.
 // Vanilla Components.


 // Vue Components.



 // Vue.

 // eslint-disable-next-line

new vue__WEBPACK_IMPORTED_MODULE_6__.default({
  el: '#root',
  components: {
    HelloWorld: _components_HelloWorld__WEBPACK_IMPORTED_MODULE_3__.default,
    Motion: _components_v_motion_io__WEBPACK_IMPORTED_MODULE_4__.default,
    MotionText: _components_v_motion_text_io__WEBPACK_IMPORTED_MODULE_5__.default
  },
  mounted: function mounted() {
    document.querySelectorAll('[data-motion-text]').forEach(function (el) {
      return new _motion_io_motion_text_io__WEBPACK_IMPORTED_MODULE_2__.default(el, {
        preset: 'slideInUp',
        easing: 'easeOutExpo',
        mask: false
      });
    });
    document.querySelectorAll('[data-motion]').forEach(function (el) {
      return new _motion_io_motion_io__WEBPACK_IMPORTED_MODULE_1__.default(el, {
        duration: 750,
        threshold: 0.5,
        delay: 500,
        easing: 'easeOutBounce',
        preset: 'slideInRight'
      });
    });
    document.querySelectorAll('[data-motion-group]').forEach(function (el) {
      return new _motion_io_motion_io__WEBPACK_IMPORTED_MODULE_1__.default(el, {
        duration: 1500,
        threshold: 0.4,
        easing: 'easeOutCirc',
        children: true,
        stagger: 250,
        preset: 'revealInUp'
      });
    });
  }
});

/***/ }),

/***/ "./resources/js/motion-io/motion-io.js":
/*!*********************************************!*\
  !*** ./resources/js/motion-io/motion-io.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitions */ "./resources/js/motion-io/transitions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // Todo: Add 'targets' option to anime to allow array of elements inside parent

var MotionIO = /*#__PURE__*/function () {
  function MotionIO(el, options) {
    _classCallCheck(this, MotionIO);

    this.selector = el; // Callbacks.

    this.onBegin = function () {};

    this.onChange = function () {};

    this.onComplete = function () {};

    this.onEnter = function () {};

    this.onLeave = function () {}; // IntersectionObserver.


    this.once = false;
    this.threshold = 0.5;
    this.rootMargin = '0px 0px 0px 0px';
    this.root = null;
    this.hasEntered = false; // AnimeJS.

    this.anime = {};
    this.custom = false;
    this.delay = 0;
    this.duration = 1000;
    this.easing = 'linear';
    this.children = false;
    this.preset = 'fadeIn';
    this.stagger = false;
    this.targets = []; // Override defaults.

    Object.assign(this, options);
    this.init();
  }

  _createClass(MotionIO, [{
    key: "init",
    value: function init() {
      this.initAnime();
      this.initObserver();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.observer) {
        this.observer.disconnect();
      }
    }
  }, {
    key: "initObserver",
    value: function initObserver() {
      var _this = this;

      var observerOptions = {
        threshold: this.threshold,
        root: this.root,
        rootMargin: this.rootMargin
      };

      var isIntersecting = function isIntersecting() {
        // Run Animation.
        if (_this.hasEntered) {
          _this.anime.pause();

          _this.anime.reverse();
        }

        _this.anime.play(); // Run Callback.


        _this.onEnter(); // Update on first entrance.


        if (!_this.hasEntered) {
          _this.hasEntered = true;
        } // Remove observer.


        if (_this.once) {
          _this.observer.unobserve(entries[0].target);
        }
      };

      var isNotIntersecting = function isNotIntersecting() {
        if (!_this.once && _this.hasEntered) {
          _this.anime.pause();

          _this.anime.reverse();

          _this.anime.play();
        }

        _this.onLeave();
      };

      this.observer = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) {
          isNotIntersecting();
        } else {
          isIntersecting();
        }

        _this.onChange();
      }, observerOptions);
      this.observer.observe(this.selector);
    }
  }, {
    key: "initAnime",
    value: function initAnime() {
      var transitionStyle = this.custom ? this.custom : _transitions__WEBPACK_IMPORTED_MODULE_1__.default["".concat(this.preset)];
      var staggerOptions = Array.isArray(this.stagger) ? animejs__WEBPACK_IMPORTED_MODULE_0__.default.stagger.apply(animejs__WEBPACK_IMPORTED_MODULE_0__.default, _toConsumableArray(this.stagger)) : animejs__WEBPACK_IMPORTED_MODULE_0__.default.stagger(this.stagger);

      var settings = _objectSpread(_objectSpread({
        targets: this.children ? this.selector.children : this.selector,
        autoplay: false,
        loop: false
      }, transitionStyle), {}, {
        delay: this.stagger ? staggerOptions : this.delay,
        duration: this.duration,
        easing: this.easing,
        begin: this.onBegin,
        complete: this.onComplete
      });

      this.anime = (0,animejs__WEBPACK_IMPORTED_MODULE_0__.default)(_objectSpread({}, settings));
    }
  }]);

  return MotionIO;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MotionIO);

/***/ }),

/***/ "./resources/js/motion-io/motion-text-io.js":
/*!**************************************************!*\
  !*** ./resources/js/motion-io/motion-text-io.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitions */ "./resources/js/motion-io/transitions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var MotionTextIO = /*#__PURE__*/function () {
  function MotionTextIO(el, options) {
    _classCallCheck(this, MotionTextIO);

    this.selector = el; // Text.

    this.className = 'motionText';
    this.elementTag = 'span';
    this.mask = false;
    this.style = true;
    this.text = el.innerText;
    this.textGroup = [];
    this.wrapper = true; // Callbacks.

    this.onBegin = function () {};

    this.onChange = function () {};

    this.onComplete = function () {};

    this.onEnter = function () {};

    this.onLeave = function () {}; // IntersectionObserver.


    this.once = false;
    this.threshold = 0.5;
    this.rootMargin = '0px 0px 0px 0px';
    this.root = null;
    this.hasEntered = false; // AnimeJS.

    this.anime = {};
    this.custom = false;
    this.delay = 0;
    this.duration = 500;
    this.easing = 'linear';
    this.preset = 'fadeIn';
    this.stagger = 100; // Override defaults.

    Object.assign(this, options);
    this.init();
  }

  _createClass(MotionTextIO, [{
    key: "init",
    value: function init() {
      this.buildText();
      this.renderText();
      this.initAnime();
      this.initObserver();
    }
  }, {
    key: "buildText",
    value: function buildText() {
      var _this = this;

      var textWord = this.text.split(' ');
      textWord.map(function (word) {
        var wordArray = word.split('');
        _this.textGroup = [].concat(_toConsumableArray(_this.textGroup), [wordArray]);
      });
    }
  }, {
    key: "renderText",
    value: function renderText() {
      this.selector.innerText = '';

      if (this.wrapper) {
        this.buildWrapper();
      }
    }
  }, {
    key: "buildWrapper",
    value: function buildWrapper() {
      var wrapper = document.createElement(this.elementTag);
      wrapper.classList.add(this.className);
      this.selector.appendChild(wrapper);
      this.buildWords(this.textGroup, wrapper);
    }
  }, {
    key: "buildWords",
    value: function buildWords(phrase, wrapper) {
      var _this2 = this;

      phrase.forEach(function (word, index) {
        var wordEl = document.createElement('span');
        wordEl.classList.add("".concat(_this2.className, "__word"));
        wordEl.classList.add("word-".concat(index + 1));

        if (_this2.style) {
          wordEl.style.display = 'inline-flex';

          if (index > 0) {
            wordEl.style.marginLeft = '0.5rem';
          }
        }

        if (_this2.mask) {
          wordEl.style.clipPath = 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )';
        }

        wrapper.appendChild(wordEl);

        _this2.buildLetters(word, wordEl);
      });
    }
  }, {
    key: "buildLetters",
    value: function buildLetters(word, wordEl) {
      var _this3 = this;

      word.forEach(function (letter, index) {
        var letterEl = document.createElement('span');
        letterEl.classList.add("".concat(_this3.className, "__letter"));
        letterEl.classList.add("letter-".concat(index + 1));
        letterEl.innerText = letter;
        wordEl.appendChild(letterEl);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.observer) {
        this.observer.disconnect();
      }
    }
  }, {
    key: "initObserver",
    value: function initObserver() {
      var _this4 = this;

      var observerOptions = {
        threshold: this.threshold,
        root: this.root,
        rootMargin: this.rootMargin
      };

      var isIntersecting = function isIntersecting(entries) {
        // Run Animation.
        if (_this4.hasEntered) {
          _this4.anime.pause();

          _this4.anime.reverse();
        }

        _this4.anime.play(); // Run Callback.


        _this4.onEnter(entries); // Update on first entrance.


        if (!_this4.hasEntered) {
          _this4.hasEntered = true;
        } // Remove observer.


        if (_this4.once) {
          _this4.observer.unobserve(entries[0].target);
        }
      };

      var isNotIntersecting = function isNotIntersecting(entries) {
        if (!_this4.once && _this4.hasEntered) {
          _this4.anime.pause();

          _this4.anime.reverse();

          _this4.anime.play();
        }

        _this4.onLeave(entries);
      };

      this.observer = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) {
          isNotIntersecting(entries);
        } else {
          isIntersecting(entries);
        }

        _this4.onChange(entries);
      }, observerOptions);
      this.observer.observe(this.selector);
    }
  }, {
    key: "initAnime",
    value: function initAnime() {
      var transitionStyle = this.custom || _transitions__WEBPACK_IMPORTED_MODULE_1__.default["".concat(this.preset)];
      var staggerOptions = animejs__WEBPACK_IMPORTED_MODULE_0__.default.stagger.apply(animejs__WEBPACK_IMPORTED_MODULE_0__.default, _toConsumableArray(Array.isArray(this.stagger) ? this.stagger : [this.stagger]));

      var settings = _objectSpread(_objectSpread({
        targets: this.selector.querySelectorAll(".".concat(this.className, "__letter")),
        autoplay: false,
        loop: false
      }, transitionStyle), {}, {
        delay: this.stagger ? staggerOptions : this.delay,
        duration: this.duration,
        easing: this.easing,
        begin: this.onBegin,
        complete: this.onComplete
      });

      this.anime = (0,animejs__WEBPACK_IMPORTED_MODULE_0__.default)(_objectSpread({}, settings));
    }
  }]);

  return MotionTextIO;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MotionTextIO);

/***/ }),

/***/ "./resources/js/motion-io/transitions.js":
/*!***********************************************!*\
  !*** ./resources/js/motion-io/transitions.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var transitions = {
  fadeIn: {
    opacity: [0, 1]
  },
  slideInDown: {
    opacity: [0, 1],
    translateY: ['20vh', 0]
  },
  slideInLeft: {
    opacity: [0, 1],
    translateX: ['-20vw', 0]
  },
  slideInRight: {
    opacity: [0, 1],
    translateX: ['20vw', 0]
  },
  slideInUp: {
    opacity: [0, 1],
    translateY: ['-20vh', 0]
  },
  revealInDown: {
    "-webkit-clip-path": ['polygon( 0% 0%, 100% 0%, 100% 0%, 0% 0% )', 'polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100% )'],
    clipPath: ['polygon( 0% 0%, 100% 0%, 100% 0%, 0% 0% )', 'polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100% )']
  },
  revealInLeft: {
    "-webkit-clip-path": ['polygon( 0% 0%, 0% 0%, 0% 100%, 0% 100% )', 'polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100% )'],
    clipPath: ['polygon( 0% 0%, 0% 0%, 0% 100%, 0% 100% )', 'polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100% )']
  },
  revealInRight: {
    "-webkit-clip-path": ['polygon( 100% 0%, 100% 0%, 100% 100%, 100% 100% )', 'polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100% )'],
    clipPath: ['polygon( 100% 0%, 100% 0%, 100% 100%, 100% 100% )', 'polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100% )']
  },
  revealInUp: {
    "-webkit-clip-path": ['polygon( 0% 100%, 100% 100%, 100% 100%, 0% 100% )', 'polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100% )'],
    clipPath: ['polygon( 0% 100%, 100% 100%, 100% 100%, 0% 100% )', 'polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100% )']
  },
  textRevealInDown: {
    "-webkit-clip-path": ['polygon( -10% -10%, 110% -10%, 110% -10%, -10% -10% )', 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )'],
    clipPath: ['polygon( -10% -10%, 110% -10%, 110% -10%, -10% -10% )', 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )']
  },
  textRevealInLeft: {
    "-webkit-clip-path": ['polygon( -10% -10%, -10% -10%, -10% 110%, -10% 110% )', 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )'],
    clipPath: ['polygon( -10% -10%, -10% -10%, -10% 110%, -10% 110% )', 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )']
  },
  textRevealInRight: {
    "-webkit-clip-path": ['polygon( 110% -10%, 110% -10%, 110% 110%, 110% 110% )', 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )'],
    clipPath: ['polygon( 110% -10%, 110% -10%, 110% 110%, 110% 110% )', 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )']
  },
  textRevealInUp: {
    "-webkit-clip-path": ['polygon( -10% 110%, 110% 110%, 110% 110%, -10% 110% )', 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )'],
    clipPath: ['polygon( -10% 110%, 110% 110%, 110% 110%, -10% 110% )', 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )']
  } // tilt
  // zoom
  // flip
  // rotate

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (transitions);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HelloWorld.vue?vue&type=style&index=0&id=1d11828b&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HelloWorld.vue?vue&type=style&index=0&id=1d11828b&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nh1[data-v-1d11828b] {\n  padding: 10px 20px;\n}\nh3[data-v-1d11828b] {\n  margin: 40px 0 0;\n}\nul[data-v-1d11828b] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-1d11828b] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-1d11828b] {\n  color: #42b983;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/HelloWorld.vue"],"names":[],"mappings":";AAyBA;EACA,kBAAA;AACA;AAEA;EACA,gBAAA;AACA;AACA;EACA,qBAAA;EACA,UAAA;AACA;AACA;EACA,qBAAA;EACA,cAAA;AACA;AACA;EACA,cAAA;AACA","sourcesContent":["<template>\n  <section>\n    <div class=\"siteHeader\">\n      <div class=\"siteHeader__container\">\n        <div class=\"siteHeader__brand\">\n          <h1 class=\"siteHeader__siteName\">Imarc Motion Tests</h1>\n\n        </div>\n\n      </div>\n    </div>\n  </section>\n</template>\n\n<script>\nexport default {\n  name: 'HelloWorld',\n  props: {\n    msg: String\n  }\n}\n</script>\n\n<!-- Add \"scoped\" attribute to limit CSS to this component only -->\n<style scoped>\nh1 {\n  padding: 10px 20px;\n}\n\nh3 {\n  margin: 40px 0 0;\n}\nul {\n  list-style-type: none;\n  padding: 0;\n}\nli {\n  display: inline-block;\n  margin: 0 10px;\n}\na {\n  color: #42b983;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/styles/main.scss":
/*!************************************!*\
  !*** ./resources/styles/main.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HelloWorld.vue?vue&type=style&index=0&id=1d11828b&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HelloWorld.vue?vue&type=style&index=0&id=1d11828b&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_1d11828b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HelloWorld.vue?vue&type=style&index=0&id=1d11828b&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HelloWorld.vue?vue&type=style&index=0&id=1d11828b&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_1d11828b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_1d11828b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/HelloWorld.vue":
/*!************************************************!*\
  !*** ./resources/js/components/HelloWorld.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HelloWorld_vue_vue_type_template_id_1d11828b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelloWorld.vue?vue&type=template&id=1d11828b&scoped=true& */ "./resources/js/components/HelloWorld.vue?vue&type=template&id=1d11828b&scoped=true&");
/* harmony import */ var _HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HelloWorld.vue?vue&type=script&lang=js& */ "./resources/js/components/HelloWorld.vue?vue&type=script&lang=js&");
/* harmony import */ var _HelloWorld_vue_vue_type_style_index_0_id_1d11828b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HelloWorld.vue?vue&type=style&index=0&id=1d11828b&scoped=true&lang=css& */ "./resources/js/components/HelloWorld.vue?vue&type=style&index=0&id=1d11828b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _HelloWorld_vue_vue_type_template_id_1d11828b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _HelloWorld_vue_vue_type_template_id_1d11828b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1d11828b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/HelloWorld.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/v-motion-text-io.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/v-motion-text-io.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _v_motion_text_io_vue_vue_type_template_id_1408c031___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v-motion-text-io.vue?vue&type=template&id=1408c031& */ "./resources/js/components/v-motion-text-io.vue?vue&type=template&id=1408c031&");
/* harmony import */ var _v_motion_text_io_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v-motion-text-io.vue?vue&type=script&lang=js& */ "./resources/js/components/v-motion-text-io.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _v_motion_text_io_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _v_motion_text_io_vue_vue_type_template_id_1408c031___WEBPACK_IMPORTED_MODULE_0__.render,
  _v_motion_text_io_vue_vue_type_template_id_1408c031___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/v-motion-text-io.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/HelloWorld.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/HelloWorld.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HelloWorld.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HelloWorld.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/v-motion-text-io.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/v-motion-text-io.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_v_motion_text_io_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./v-motion-text-io.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/v-motion-text-io.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_v_motion_text_io_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/HelloWorld.vue?vue&type=style&index=0&id=1d11828b&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/HelloWorld.vue?vue&type=style&index=0&id=1d11828b&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_1d11828b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HelloWorld.vue?vue&type=style&index=0&id=1d11828b&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HelloWorld.vue?vue&type=style&index=0&id=1d11828b&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/HelloWorld.vue?vue&type=template&id=1d11828b&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/HelloWorld.vue?vue&type=template&id=1d11828b&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_1d11828b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_1d11828b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_1d11828b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HelloWorld.vue?vue&type=template&id=1d11828b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HelloWorld.vue?vue&type=template&id=1d11828b&scoped=true&");


/***/ }),

/***/ "./resources/js/components/v-motion-text-io.vue?vue&type=template&id=1408c031&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/v-motion-text-io.vue?vue&type=template&id=1408c031& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_v_motion_text_io_vue_vue_type_template_id_1408c031___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_v_motion_text_io_vue_vue_type_template_id_1408c031___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_v_motion_text_io_vue_vue_type_template_id_1408c031___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./v-motion-text-io.vue?vue&type=template&id=1408c031& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/v-motion-text-io.vue?vue&type=template&id=1408c031&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HelloWorld.vue?vue&type=template&id=1d11828b&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HelloWorld.vue?vue&type=template&id=1d11828b&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", [
      _c("div", { staticClass: "siteHeader" }, [
        _c("div", { staticClass: "siteHeader__container" }, [
          _c("div", { staticClass: "siteHeader__brand" }, [
            _c("h1", { staticClass: "siteHeader__siteName" }, [
              _vm._v("Imarc Motion Tests")
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/v-motion-text-io.vue?vue&type=template&id=1408c031&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/v-motion-text-io.vue?vue&type=template&id=1408c031& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    _vm.tag,
    {
      tag: "component",
      class: "" + _vm.className,
      attrs: { "aria-label": _vm.fullText }
    },
    [
      _c("span", { domProps: { innerHTML: _vm._s(_vm.parseText) } }),
      _vm._v(" "),
      _vm._l(_vm.textGroup, function(word, index) {
        return _c(
          "span",
          {
            key: "word-" + index,
            class: _vm.className + "__word",
            style: _vm.addStyles(index)
          },
          _vm._l(word, function(letter, index) {
            return _c(
              "span",
              {
                key: "letter-" + index,
                ref: "letter",
                refInFor: true,
                class: _vm.className + "__letter"
              },
              [_vm._v("\n         " + _vm._s(letter) + "\n      ")]
            )
          }),
          0
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/main","/js/vendor"], () => (__webpack_exec__("./resources/js/main.js"), __webpack_exec__("./resources/styles/main.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map