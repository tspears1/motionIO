(self["webpackChunkmotion_io"] = self["webpackChunkmotion_io"] || []).push([["/js/main"],{

/***/ "./example/main.js":
/*!*************************!*\
  !*** ./example/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_motion_io_motion_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/motion-io/motion-io */ "./src/motion-io/motion-io.js");
/* harmony import */ var _src_motion_io_motion_text_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/motion-io/motion-text-io */ "./src/motion-io/motion-text-io.js");
/* harmony import */ var _src_motion_io_v_motion_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/motion-io/v-motion-io */ "./src/motion-io/v-motion-io.js");
/* harmony import */ var _src_motion_io_v_motion_text_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/motion-io/v-motion-text-io */ "./src/motion-io/v-motion-text-io.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _src_motion_io_utilities_reduced_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/motion-io/utilities/reduced-motion */ "./src/motion-io/utilities/reduced-motion.js");
/* harmony import */ var _src_motion_io_utilities_reduced_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_motion_io_utilities_reduced_motion__WEBPACK_IMPORTED_MODULE_4__);
// Vanilla Components.

 // Vue Components.


 // Vue.

 // Reduced Motion.

 // eslint-disable-next-line

new vue__WEBPACK_IMPORTED_MODULE_5__.default({
  el: '#root',
  delimiters: ["${", "}"],
  components: {
    Motion: _src_motion_io_v_motion_io__WEBPACK_IMPORTED_MODULE_2__.default,
    MotionText: _src_motion_io_v_motion_text_io__WEBPACK_IMPORTED_MODULE_3__.default
  },
  mounted: function mounted() {
    document.querySelectorAll('[data-motion-text]').forEach(function (el) {
      return new _src_motion_io_motion_text_io__WEBPACK_IMPORTED_MODULE_1__.default(el, {
        preset: 'slideInUp',
        easing: 'easeOutExpo',
        mask: false
      });
    });
    document.querySelectorAll('[data-motion]').forEach(function (el) {
      return new _src_motion_io_motion_io__WEBPACK_IMPORTED_MODULE_0__.default(el, {
        duration: 750,
        threshold: 0.5,
        delay: 500,
        easing: 'easeOutBounce',
        preset: 'slideInRight'
      });
    });
    document.querySelectorAll('[data-motion-group]').forEach(function (el) {
      return new _src_motion_io_motion_io__WEBPACK_IMPORTED_MODULE_0__.default(el, {
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

/***/ "./src/motion-io/motion-io.js":
/*!************************************!*\
  !*** ./src/motion-io/motion-io.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitions */ "./src/motion-io/transitions.js");
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

/***/ "./src/motion-io/motion-text-io.js":
/*!*****************************************!*\
  !*** ./src/motion-io/motion-text-io.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitions */ "./src/motion-io/transitions.js");
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
    this.wordWrap = true; // Callbacks.

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

      if (this.wordWrap) {
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
          wordEl.style.webkitClipPath = 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )';
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

/***/ "./src/motion-io/transitions.js":
/*!**************************************!*\
  !*** ./src/motion-io/transitions.js ***!
  \**************************************/
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
    "-webkit-clip-path": ['inset(0% 0% 100% 0%)', 'inset(0% 0% 0% 0%)'],
    clipPath: ['inset(0% 0% 100% 0%)', 'inset(0% 0% 0% 0%)']
  },
  revealInLeft: {
    "-webkit-clip-path": ['inset(0% 0% 0% 100%)', 'inset(0% 0% 0% 0%)'],
    clipPath: ['inset(0% 0% 0% 100%)', 'inset(0% 0% 0% 0%)']
  },
  revealInRight: {
    "-webkit-clip-path": ['inset(0% 100% 0% 0%)', 'inset(0% 0% 0% 0%)'],
    clipPath: ['inset(0% 100% 0% 0%)', 'inset(0% 0% 0% 0%)']
  },
  revealInUp: {
    "-webkit-clip-path": ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'],
    clipPath: ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)']
  },
  textRevealInDown: {
    "-webkit-clip-path": ['inset(-10% -10% 110% -10%)', 'inset( -10% -10% -10% -10%'],
    clipPath: ['inset(-10% -10% 110% -10%)', 'inset( -10% -10% -10% -10%']
  },
  textRevealInLeft: {
    "-webkit-clip-path": ['inset(-10% -10% -10% 110%)', 'inset( -10% -10% -10% -10%'],
    clipPath: ['inset(-10% -10% -10% 110%)', 'inset( -10% -10% -10% -10%']
  },
  textRevealInRight: {
    "-webkit-clip-path": ['inset(-10% 110% -10% -10%)', 'inset( -10% -10% -10% -10%'],
    clipPath: ['inset(-10% 110% -10% -10%)', 'inset( -10% -10% -10% -10%']
  },
  textRevealInUp: {
    "-webkit-clip-path": ['inset(110% -10% -10% -10%)', 'inset( -10% -10% -10% -10%'],
    clipPath: ['inset(110% -10% -10% -10%)', 'inset( -10% -10% -10% -10%']
  },
  bounceInDown: {
    easing: 'easeOutBounce',
    opacity: [0, 1],
    translateY: ['20vh', 0]
  },
  bounceInLeft: {
    easing: 'easeOutBounce',
    opacity: [0, 1],
    translateX: ['-20vw', 0]
  },
  bounceInRight: {
    easing: 'easeOutBounce',
    opacity: [0, 1],
    translateX: ['20vw', 0]
  },
  bounceInUp: {
    easing: 'easeOutBounce',
    opacity: [0, 1],
    translateY: ['-20vh', 0]
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
    skewZ: [20, 0],
    rotateX: [90, 0],
    translateX: ['-3rem', 0],
    translateY: ['3rem', 0]
  } // tilt

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (transitions);

/***/ }),

/***/ "./src/motion-io/utilities/reduced-motion.js":
/*!***************************************************!*\
  !*** ./src/motion-io/utilities/reduced-motion.js ***!
  \***************************************************/
/***/ (() => {

/**
* Prefers Reduced Motion Settings
*
*  Checks for reduced motion setting and stores status in LocalStorage for use in other scripts.
*
*/
var motionQuery = matchMedia('(prefers-reduced-motion)'); // Store in localStorage for use in other files.
// Ex.
// * let reduceMotion = localStorage.getItem('reduceMotion')

var updateLocalStorage = function updateLocalStorage(value) {
  localStorage.setItem('reduceMotion', value);
};

var stopVideoAutoplay = function stopVideoAutoplay() {
  // Find all HTML5 video elements.
  var videos = document.querySelectorAll('video');
  videos.forEach(function (video) {
    // Pause all videos with autoplay.
    var autoplay = video.getAttribute('autoplay');

    if (autoplay) {
      video.pause();
    }
  });
};

var reducedMotionCheck = function reducedMotionCheck() {
  if (motionQuery.matches) {
    // Add functions for reduced motion here.
    console.warn('[MOTION-IO]: Reduced Motion setting is active. Autoplay and animations have been turned off.');
    updateLocalStorage(true);
    stopVideoAutoplay();
  } else {
    updateLocalStorage(false);
  }
};

reducedMotionCheck();
motionQuery.addEventListener('change', reducedMotionCheck);

/***/ }),

/***/ "./src/motion-io/v-motion-io.js":
/*!**************************************!*\
  !*** ./src/motion-io/v-motion-io.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitions */ "./src/motion-io/transitions.js");
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
    observerRoot: {
      type: Object,
      required: false,
      "default": function _default() {
        return {
          root: null,
          rootMargin: '0px'
        };
      }
    },
    threshold: {
      type: [Function, Array, Number],
      required: false,
      "default": 0.5
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
    origin: {
      type: String,
      required: false
    },
    preset: {
      type: String,
      required: false,
      "default": 'fadeIn'
    },
    svg: {
      type: Boolean,
      required: false,
      "default": false
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
  computed: {
    observerOptions: function observerOptions() {
      return {
        root: this.observerRoot.root,
        rootMargin: this.observerRoot.rootMargin,
        threshold: this.threshold
      };
    },
    selector: function selector() {
      return this.$el;
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
      return this.custom || _transitions__WEBPACK_IMPORTED_MODULE_1__.default["".concat(this.preset)];
    },
    reduceMotion: function reduceMotion() {
      return localStorage.getItem('reduceMotion');
    }
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
  render: function render() {
    return this.$scopedSlots["default"]() ? this.$scopedSlots["default"]({
      entered: this.hasEntered,
      anime: this.$options.anime,
      observer: this.$options.observer
    })[0] : null;
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
      if (this.$scopedSlots["default"]() && this.$scopedSlots["default"]().length > 1) {
        this.warn('[MotionIO] You may only wrap one element in a <intersect> component.');
      } else if (!this.$scopedSlots["default"]() || this.$scopedSlots["default"]().length < 1) {
        this.warn('[MotionIO] You must have one child inside a <intersect> component.');
        return;
      }

      this.$options.observer.observe(this.selector);
    },
    isIntersecting: function isIntersecting(entries) {
      // Run Animation.
      if (this.hasEntered === true) {
        this.$options.anime.pause();
        this.$options.anime.reverse();
      }

      this.$options.anime.play(); // Run Callback.

      this.$emit('enter', entries[0]); // Update on first entrance.

      if (!this.hasEntered) {
        this.hasEntered = true;
        return;
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

      if (this.origin) {
        animejs__WEBPACK_IMPORTED_MODULE_0__.default.set(this.targetSelector, {
          transformOrigin: this.origin
        });
      }

      this.$options.anime = (0,animejs__WEBPACK_IMPORTED_MODULE_0__.default)(_objectSpread(_objectSpread({
        targets: this.targetSelector,
        autoplay: false,
        loop: false,
        strokeDashoffset: this.svg ? [animejs__WEBPACK_IMPORTED_MODULE_0__.default.setDashoffset, 0] : ''
      }, this.transitionStyle), {}, {
        delay: this.stagger ? this.staggerOptions : this.delay,
        duration: this.reduceMotion == "true" ? 0 : this.duration,
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
  }
});

/***/ }),

/***/ "./src/motion-io/v-motion-text-io.js":
/*!*******************************************!*\
  !*** ./src/motion-io/v-motion-text-io.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitions */ "./src/motion-io/transitions.js");
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
  name: 'motion-text',
  props: {
    applyStyles: {
      type: Boolean,
      required: false,
      "default": true
    },
    block: {
      type: String,
      required: false,
      "default": 'motionText'
    },
    mask: {
      type: Boolean,
      required: false,
      "default": false
    },
    tag: {
      type: String,
      required: false,
      "default": 'span'
    },
    wordWrap: {
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
    observerRoot: {
      type: Object,
      required: false,
      "default": function _default() {
        return {
          root: null,
          rootMargin: '0px'
        };
      }
    },
    threshold: {
      type: [Function, Array, Number],
      required: false,
      "default": 0.5
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
    origin: {
      type: String,
      required: false
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
    observerOptions: function observerOptions() {
      return {
        root: this.observerRoot.root,
        rootMargin: this.observerRoot.rootMargin,
        threshold: this.threshold
      };
    },
    staggerOptions: function staggerOptions() {
      return animejs__WEBPACK_IMPORTED_MODULE_0__.default.stagger.apply(animejs__WEBPACK_IMPORTED_MODULE_0__.default, _toConsumableArray(Array.isArray(this.stagger) ? this.stagger : [this.stagger]));
    },
    transitionStyle: function transitionStyle() {
      return this.custom || _transitions__WEBPACK_IMPORTED_MODULE_1__.default["".concat(this.preset)];
    },
    reduceMotion: function reduceMotion() {
      return localStorage.getItem('reduceMotion');
    }
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
  render: function render(h) {
    var _this = this;

    return h(this.tag, {
      "class": "".concat(this.block, "__wrapper")
    }, this.$scopedSlots["default"]({
      entered: this.hasEntered,
      anime: this.$options.anime,
      observer: this.$options.observer
    }).map(function (node) {
      return _this.renderBlock(h, node);
    }));
  },
  methods: {
    renderBlock: function renderBlock(h, block) {
      var _this2 = this;

      // handle tag without text (like a <br/>)

      /*
         * If it's something visible, like an <hr/>, you could add in a nested
         * conditional statement to check for those elements and then return
         * the block with a `${this.block}__letter` class added so that it can
         * still be animated. Or a different class/attribute so it can be
         * animated differently!
         */
      if (!block.text && !Array.isArray(block.children)) {
        return block;
      } // add word span around letters if true.


      if (block.text && this.wordWrap) {
        return block.text.split(" ").map(function (word, index) {
          var wordArray = word.split("").map(function (letter) {
            if (letter !== " " && letter !== "\n") {
              // Return character as span element
              return h("span", {
                "class": "".concat(_this2.block, "__letter"),
                ref: 'letter',
                refInFor: true
              }, letter);
            } else {
              // Otherwise, return just the space/new line as is, without spans
              return letter;
            }
          });
          return h("span", {
            "class": "".concat(_this2.block, "__word"),
            style: _this2.buildStyles(index)
          }, wordArray);
        });
      } // Convert each text into <span>


      if (block.text) {
        // Convert to array for easier handling
        return block.text.split("").map(function (letter) {
          // If it's not a space or newline (could be replaced with regex)
          if (letter !== " " && letter !== "\n") {
            // Return character as span element
            return h("span", {
              "class": "".concat(_this2.block, "__letter"),
              ref: 'letter',
              refInFor: true
            }, letter);
          } else {
            // Otherwise, return just the space/new line as is, without spans
            return letter;
          }
        });
      } // Recursive: if element and has children, loop through each child and re-run


      if (Array.isArray(block.children)) {
        return h(block.tag, {
          // This captures the class that was added in the slot, if available
          // Emptry string if no class
          "class": block.data && block.data.staticClass ? block.data.staticClass : ""
        }, block.children.map(function (childBlock) {
          return _this2.renderBlock(h, childBlock);
        }));
      }
    },
    buildStyles: function buildStyles(index) {
      var styles = {};

      if (this.applyStyles) {
        styles.display = 'inline-flex';

        if (index > 0) {
          styles.marginLeft = '0.5rem';
        }
      }

      if (this.mask) {
        styles.webkitClipPath = 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )';
        styles.clipPath = 'polygon( -10% -10%, 110% -10%, 110% 110%, -10% 110% )';
      }

      return styles;
    },
    // IntersectionObserver.
    initObserver: function initObserver() {
      var _this3 = this;

      this.$options.observer = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) {
          _this3.isNotIntersecting(entries);
        } else {
          _this3.isIntersecting(entries);
        }

        _this3.$emit('change', entries[0].isIntersecting);
      }, this.observerOptions);
      this.$nextTick(function () {
        _this3.activateObserver();
      });
    },
    activateObserver: function activateObserver() {
      this.$options.observer.observe(this.$el);
    },
    isIntersecting: function isIntersecting(entries) {
      var _this4 = this;

      // Run Animation.
      if (this.hasEntered) {
        this.$options.anime.pause();
        this.$options.anime.reverse();
      }

      setTimeout(function () {
        _this4.$options.anime.play();
      }, this.delay); // Run Callback.

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
      var _this5 = this;

      // if ( this.origin ) {
      //    anime.set( this.$refs.letter, { transformOrigin: this.origin })
      // }
      this.$options.anime = (0,animejs__WEBPACK_IMPORTED_MODULE_0__.default)(_objectSpread(_objectSpread({
        targets: this.$refs.letter,
        autoplay: false,
        loop: false
      }, this.transitionStyle), {}, {
        delay: this.stagger ? this.staggerOptions : '',
        duration: this.reduceMotion == "true" ? 0 : this.duration,
        easing: this.easing,
        begin: function begin(anime) {
          _this5.$emit('begin', anime);
        },
        complete: function complete(anime) {
          _this5.$emit('complete', anime);
        }
      }));
    },
    warn: function warn(message) {
      if (!vue__WEBPACK_IMPORTED_MODULE_2__.default.config.silent) {
        console.error(message);
      }
    }
  }
});

/***/ }),

/***/ "./example/styles/main.scss":
/*!**********************************!*\
  !*** ./example/styles/main.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/main","/js/vendor"], () => (__webpack_exec__("./example/main.js"), __webpack_exec__("./example/styles/main.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map