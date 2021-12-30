(self["webpackChunkvue_motion_test"] = self["webpackChunkvue_motion_test"] || []).push([["/js/plugins/mobileNavigation.plugin"],{

/***/ "./resources/js/plugins/mobileNavigation.plugin.js":
/*!*********************************************************!*\
  !*** ./resources/js/plugins/mobileNavigation.plugin.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 *
 * jQuery Mobile Navigation Plugin
 */




(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn.mobileNavigation) = function (options) {
  var plugin = this;
  var defaults = {
    toggleClass: 'menu-toggle',
    wrapperClass: 'shell',
    subMenuClass: 'dropdown',
    directionFrom: 'left',
    overlayCss: {
      display: 'none',
      background: '#000000',
      bottom: '0%',
      height: '100%',
      left: '0%',
      opacity: '.4',
      position: 'fixed',
      right: '0%',
      top: '0%',
      width: '100%'
    }
  };
  this.settings = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, defaults, options);

  this.closeAll = function () {
    toggleAll();
  };
  /**
   *
   * Return CSS selector from class name.
   */


  var toSelector = function toSelector(className) {
    return '.' + className;
  };
  /**
   *
   * Validate optionals params when initializing library.
   */


  var validateOptions = function validateOptions() {
    var classRegExp = new RegExp(/^\./);
    jquery__WEBPACK_IMPORTED_MODULE_0___default().each(plugin.settings, function (key, value) {
      if (key === 'directionFrom') {
        if (value !== 'left' && value !== 'right') {
          jquery__WEBPACK_IMPORTED_MODULE_0___default().error('Wrong direction. Choose  "left" or "right".');
        }

        return true;
      }

      if (classRegExp.test(value)) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().error('The value ' + value + ' for ' + key + ' just needs the class name not css selector.');
      }
    });
  };
  /**
   *
   * Toggles Individual Menu
   * .init sets the menu opacity to 1 to prevent FOUC.
   */


  var toggleMenu = function toggleMenu() {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('init')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('init');
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('open');
  };
  /**
   *
   *  Toggles All Menus
   */


  var toggleAll = function toggleAll() {
    var toggleSelector = toSelector(plugin.settings.toggleClass);
    var subMenuClass = toSelector(plugin.settings.subMenuClass);
    var $overlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(toSelector(plugin.settings.wrapperClass)).find('.mobile-overlay');
    $overlay.toggle();
    toggleFreezeFrame();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(toggleSelector).find('i').toggleClass('fa-bars fa-times');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(plugin[0].parentNode).find(subMenuClass).each(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('open')) {
        toggleMenu.call(this);
      }
    });
    toggleMenu.call(plugin[0]);
  };
  /**
   *
   * Sets the direction from where the menu animates from.
   */


  var setMenuDirection = function setMenuDirection() {
    var subMenuClass = toSelector(plugin.settings.subMenuClass);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass(plugin.settings.directionFrom).find(subMenuClass).addClass(plugin.settings.directionFrom);
  };
  /**
   *
   * Toggles the main menu. Closes other sub menus if they're open.
   */


  var bindToggle = function bindToggle() {
    var $toggle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(toSelector(plugin.settings.toggleClass));
    $toggle.on('click', toggleAll);
  };
  /**
   *
   * Bind sub menu button to toggle child menu.
   */


  var bindSubMenuToggle = function bindSubMenuToggle() {
    var subMenuClass = toSelector(plugin.settings.subMenuClass);
    var $pluginParent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(plugin[0].parentNode);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.sub-menu-toggle').on('click', $pluginParent, function () {
      var text = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('menu');
      toggleMenu.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(subMenuClass + '[data-menu="' + text + '"]'));
    });
  };
  /**
   *
   * Append buttons to list items with subMenu menus. Add back buttons to menus.
   */


  var appendControl = function appendControl() {
    var subMenuClass = toSelector(plugin.settings.subMenuClass);
    var text = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('> a').text();

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(subMenuClass).length == 0) {
      return true;
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).append('<button class="sub-menu-toggle" data-menu="' + text + '"><i class="fa fa-angle-right" aria-hidden="true"></i></button>');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(subMenuClass + ' ul').first().prepend('<li><button class="sub-menu-toggle" data-menu="' + text + '"><i class="fa fa-angle-left" aria-hidden="true"></i> ' + text + '</button></li>');
  };
  /**
   *
   * Find all sub menus and append as a sibling of library's initialized class.
   */


  var cloneAndAppendMenu = function cloneAndAppendMenu() {
    var subMenuClass = toSelector(plugin.settings.subMenuClass);
    var clone = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).clone(true, true);
    var pluginParent = plugin[0].parentNode; // Remove sub menus from mark up

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(clone).find(subMenuClass).remove(); // Checks for sub menu of another sub menu and call function recursively

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(subMenuClass).length > 0) {
      cloneAndAppendMenu.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(subMenuClass));
    } // Remove after cloning and appending


    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(pluginParent).append(clone).end().remove();
  };
  /**
   *
   *  Set unique identifier on each menu.
   */


  var setMenuId = function setMenuId() {
    var subMenuClass = toSelector(plugin.settings.subMenuClass);
    var text = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings('a').text();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(subMenuClass).each(function () {
      var text = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings('a').text();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-menu', text).addClass('sub-menu');
    }).end().attr('data-menu', text);
  };
  /**
   *
   * Set up sub menu
   */


  var initSubMenu = function initSubMenu() {
    var subMenuClass = toSelector(plugin.settings.subMenuClass);
    var $menuItems = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('nav ul li'); // For each menu item

    $menuItems.each(function () {
      appendControl.call(this);
      bindSubMenuToggle.call(this);
    }); // For each menu

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(subMenuClass).each(function (index) {
      setMenuId.call(this, index);
      cloneAndAppendMenu.call(this);
    });
  };
  /**
   *
   * Insert overlay and bind it to close all menus on click
   */


  var addOverlay = function addOverlay() {
    var overlay = '<div class="mobile-overlay"></div>';
    overlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(overlay).css(plugin.settings.overlayCss);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(toSelector(plugin.settings.wrapperClass)).append(jquery__WEBPACK_IMPORTED_MODULE_0___default()(overlay));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(overlay).on('click', function () {
      toggleAll();
    });
  };
  /*
   *
   * Freeze frame toggle
   */


  var toggleFreezeFrame = function toggleFreezeFrame() {
    var scroll = {
      'height': '100%',
      'overflow': 'hidden'
    };

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(plugin[0]).hasClass('open')) {
      scroll.overflow = 'auto';
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').css(scroll);
  };
  /**
   *
   * Set up main menu
   */


  var init = function init() {
    validateOptions();
    addOverlay();
    setMenuDirection.call(this);
    bindToggle.call(this);
  };
  /**
   *
   * Do this each time the library is initialized
   */


  return this.each(function () {
    init.call(this);
    initSubMenu.call(this);
  });
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./resources/js/plugins/mobileNavigation.plugin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=mobileNavigation.plugin.js.map