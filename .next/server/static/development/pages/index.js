module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "D:\\selab-next\\components\\Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



const Header = ({
  refs,
  options,
  children
}) => {
  const {
    headerHeight
  } = options;
  console.log(refs);
  const {
    0: styles,
    1: setStyles
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(_objectSpread({}, refs[0], {
    top: headerHeight
  }));

  const onPercentChange = () => {
    let belows = refs.filter(({
      ref
    }) => ref.current.getBoundingClientRect().top >= -100);

    if (belows.length > 0) {
      let el = belows[0];
      let {
        top
      } = el.ref.current.getBoundingClientRect();
      setStyles(_objectSpread({
        top
      }, el));
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    window.addEventListener('scroll', onPercentChange);
    return () => window.removeEventListener('scroll', onPercentChange);
  }, [styles]);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["247433999", [headerHeight, headerHeight, styles.defaultBgColor, styles.bgColor, styles.top, styles.defaultTextColor, styles.textColor, styles.top]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["247433999", [headerHeight, headerHeight, styles.defaultBgColor, styles.bgColor, styles.top, styles.defaultTextColor, styles.textColor, styles.top]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["247433999", [headerHeight, headerHeight, styles.defaultBgColor, styles.bgColor, styles.top, styles.defaultTextColor, styles.textColor, styles.top]]]) + " " + "block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["247433999", [headerHeight, headerHeight, styles.defaultBgColor, styles.bgColor, styles.top, styles.defaultTextColor, styles.textColor, styles.top]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, children)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["247433999", [headerHeight, headerHeight, styles.defaultBgColor, styles.bgColor, styles.top, styles.defaultTextColor, styles.textColor, styles.top]]]) + " " + "block-clone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["247433999", [headerHeight, headerHeight, styles.defaultBgColor, styles.bgColor, styles.top, styles.defaultTextColor, styles.textColor, styles.top]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, children))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "247433999",
    dynamic: [headerHeight, headerHeight, styles.defaultBgColor, styles.bgColor, styles.top, styles.defaultTextColor, styles.textColor, styles.top],
    __self: undefined
  }, `header.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;width:100%;height:${headerHeight}px;margin:0;overflow:hidden;}.block.__jsx-style-dynamic-selector,.block-clone.__jsx-style-dynamic-selector{width:100%;position:absolute;height:${headerHeight}px;}.block.__jsx-style-dynamic-selector{background-color:${styles.defaultBgColor};}.block-clone.__jsx-style-dynamic-selector{background-color:${styles.bgColor};-webkit-clip-path:inset(${styles.top}px 0 0 0);clip-path:inset(${styles.top}px 0 0 0);}.block.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{color:${styles.defaultTextColor};}.block-clone.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{color:${styles.textColor};-webkit-clip-path:inset(${styles.top}px 0 0 0);clip-path:inset(${styles.top}px 0 0 0);}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzZWxhYi1uZXh0XFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEN3QixBQUlvQyxBQVVKLEFBTW1DLEFBSUEsQUFNWCxBQUlBLFdBbkJqQixJQVZaLE1BQ0MsT0FDSSxDQVMyQixNQWUxQyxBQUkwRCxJQTNCaEIsT0FhMUMsQUFJMEQscUJBUjFELFVBUmEsU0FDTyxnQkFDcEIsaURBeUJBLFdBVkEiLCJmaWxlIjoiRDpcXHNlbGFiLW5leHRcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IHJlZnMsIG9wdGlvbnMsIGNoaWxkcmVuIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGhlYWRlckhlaWdodCB9ID0gb3B0aW9uc1xyXG4gICAgY29uc29sZS5sb2cocmVmcylcclxuXHJcbiAgICBjb25zdCBbc3R5bGVzLCBzZXRTdHlsZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIC4uLnJlZnNbMF0sXHJcbiAgICAgICAgdG9wOiBoZWFkZXJIZWlnaHRcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgb25QZXJjZW50Q2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBiZWxvd3MgPSByZWZzLmZpbHRlcigoeyByZWYgfSkgPT4gcmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID49IC0xMDApXHJcbiAgICAgICAgaWYgKGJlbG93cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBlbCA9IGJlbG93c1swXVxyXG4gICAgICAgICAgICBsZXQgeyB0b3AgfSA9IGVsLnJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICAgIHNldFN0eWxlcyh7XHJcbiAgICAgICAgICAgICAgICB0b3AsXHJcbiAgICAgICAgICAgICAgICAuLi5lbFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblBlcmNlbnRDaGFuZ2UpXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblBlcmNlbnRDaGFuZ2UpXHJcbiAgICB9LCBbc3R5bGVzXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNsb25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7aGVhZGVySGVpZ2h0fXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5ibG9jaywgLmJsb2NrLWNsb25lIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAke2hlYWRlckhlaWdodH1weDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c3R5bGVzLmRlZmF1bHRCZ0NvbG9yfTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYmxvY2stY2xvbmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c3R5bGVzLmJnQ29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogaW5zZXQoJHtzdHlsZXMudG9wfXB4IDAgMCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLmJsb2NrICA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7c3R5bGVzLmRlZmF1bHRUZXh0Q29sb3J9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5ibG9jay1jbG9uZSAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3N0eWxlcy50ZXh0Q29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogaW5zZXQoJHtzdHlsZXMudG9wfXB4IDAgMCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBvcHRpb25zIDogeyBoZWFkZXJIZWlnaHQ6IDkwIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl19 */
/*@ sourceURL=D:\selab-next\components\Header.js */`));
};

Header.defaultProps = {
  options: {
    headerHeight: 90
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/theme.js":
/*!*****************************!*\
  !*** ./components/theme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  COLORS: {
    BG1: '#162e7c',
    BG2: '#fbe8b1',
    BTN1: '#2860f6'
  },
  FONTS: {
    fontFamily: 'sans-serif',
    fontSize: 16
  }
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/theme */ "./components/theme.js");







var _jsxFileName = "D:\\selab-next\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





const Index = () => {
  const headerStyleStart = {
    defaultBgColor: _components_theme__WEBPACK_IMPORTED_MODULE_10__["default"].COLORS.BG1,
    defaultTextColor: 'white',
    bgColor: _components_theme__WEBPACK_IMPORTED_MODULE_10__["default"].COLORS.BG2,
    textColor: 'black'
  };
  const headerStyleEnd = {
    defaultBgColor: _components_theme__WEBPACK_IMPORTED_MODULE_10__["default"].COLORS.BG2,
    defaultTextColor: 'black',
    bgColor: _components_theme__WEBPACK_IMPORTED_MODULE_10__["default"].COLORS.BG1,
    textColor: 'white'
  };
  const vanilaStart1 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null);
  const vanilaEnd1 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null);
  const vanilaStart2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null);
  const vanilaEnd2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null);
  const refs = [_objectSpread({
    ref: vanilaStart1
  }, headerStyleStart), _objectSpread({
    ref: vanilaEnd1
  }, headerStyleEnd), _objectSpread({
    ref: vanilaStart2
  }, headerStyleStart), _objectSpread({
    ref: vanilaEnd2
  }, headerStyleEnd)];
  return __jsx("div", {
    className: "jsx-2562696843" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
    refs: refs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-2562696843" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "lab[se]"), __jsx("p", {
    className: "jsx-2562696843" + " " + "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, " Research")), __jsx("div", {
    className: "jsx-2562696843" + " " + "pages",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(Page, {
    style: {
      backgroundColor: _components_theme__WEBPACK_IMPORTED_MODULE_10__["default"].COLORS.BG1,
      paddingTop: 90,
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, `Hello, THis is first Page`), __jsx(Page, {
    ref: vanilaStart1,
    style: {
      backgroundColor: _components_theme__WEBPACK_IMPORTED_MODULE_10__["default"].COLORS.BG2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, `Hello, THis is second Page`), __jsx(Page, {
    ref: vanilaEnd1,
    style: {
      backgroundColor: _components_theme__WEBPACK_IMPORTED_MODULE_10__["default"].COLORS.BG1,
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, `Hello, THis is third Page`), __jsx(Page, {
    ref: vanilaStart2,
    style: {
      backgroundColor: _components_theme__WEBPACK_IMPORTED_MODULE_10__["default"].COLORS.BG2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, `Hello, THis is fourth Page`), __jsx(Page, {
    ref: vanilaEnd2,
    style: {
      backgroundColor: _components_theme__WEBPACK_IMPORTED_MODULE_10__["default"].COLORS.BG1,
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, `Hello, THis is fifth Page`)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "2562696843",
    __self: undefined
  }, "body{margin:0;padding:0;}.title{font-size:40px;font-weight:bold;margin:0;margin-left:10px;display:inline-block;}.link{font-size:30px;font-weight:bold;margin:0;margin-left:10px;display:inline-block;}.container{margin:0;padding:0;width:100%;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzZWxhYi1uZXh0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0UrQixBQUc4QixBQU1NLEFBUUEsQUFRTixTQXJCQyxBQXNCQSxNQWhCTyxBQVFBLElBWnJCLEFBcUJlLFdBQ0ssRUFqQlAsQUFRQSxTQVBRLEFBUUEsS0FTckIsWUFoQnlCLEFBUUEscUJBUHpCLEFBUUEiLCJmaWxlIjoiRDpcXHNlbGFiLW5leHRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9jb21wb25lbnRzL3RoZW1lJ1xyXG5pbXBvcnQgeyB1c2VSZWYsIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyU3R5bGVTdGFydCA9IHtcclxuICAgICAgICBkZWZhdWx0QmdDb2xvcjogdGhlbWUuQ09MT1JTLkJHMSxcclxuICAgICAgICBkZWZhdWx0VGV4dENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGJnQ29sb3I6IHRoZW1lLkNPTE9SUy5CRzIsXHJcbiAgICAgICAgdGV4dENvbG9yOiAnYmxhY2snLFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhlYWRlclN0eWxlRW5kID0ge1xyXG4gICAgICAgIGRlZmF1bHRCZ0NvbG9yOiB0aGVtZS5DT0xPUlMuQkcyLFxyXG4gICAgICAgIGRlZmF1bHRUZXh0Q29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgYmdDb2xvcjogdGhlbWUuQ09MT1JTLkJHMSxcclxuICAgICAgICB0ZXh0Q29sb3I6ICd3aGl0ZScsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFuaWxhU3RhcnQxID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCB2YW5pbGFFbmQxID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCB2YW5pbGFTdGFydDIgPSB1c2VSZWYobnVsbClcclxuICAgIGNvbnN0IHZhbmlsYUVuZDIgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgICBjb25zdCByZWZzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVmOiB2YW5pbGFTdGFydDEsXHJcbiAgICAgICAgICAgIC4uLmhlYWRlclN0eWxlU3RhcnQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlZjogdmFuaWxhRW5kMSxcclxuICAgICAgICAgICAgLi4uaGVhZGVyU3R5bGVFbmQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlZjogdmFuaWxhU3RhcnQyLFxyXG4gICAgICAgICAgICAuLi5oZWFkZXJTdHlsZVN0YXJ0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZWY6IHZhbmlsYUVuZDIsXHJcbiAgICAgICAgICAgIC4uLmhlYWRlclN0eWxlRW5kLFxyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgcmVmcz17cmVmc30gPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5sYWJbc2VdPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlua1wiPiBSZXNlYXJjaDwvcD5cclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZXNcIj5cclxuICAgICAgICAgICAgICAgIDxQYWdlIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdGhlbWUuQ09MT1JTLkJHMSwgcGFkZGluZ1RvcDogOTAsIGNvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgSGVsbG8sIFRIaXMgaXMgZmlyc3QgUGFnZWB9XHJcbiAgICAgICAgICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICAgICAgICAgICA8UGFnZSByZWY9e3ZhbmlsYVN0YXJ0MX0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5DT0xPUlMuQkcyLCB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7YEhlbGxvLCBUSGlzIGlzIHNlY29uZCBQYWdlYH1cclxuICAgICAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICAgICAgICAgIDxQYWdlIHJlZj17dmFuaWxhRW5kMX0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5DT0xPUlMuQkcxLCBjb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7YEhlbGxvLCBUSGlzIGlzIHRoaXJkIFBhZ2VgfVxyXG4gICAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2UgcmVmPXt2YW5pbGFTdGFydDJ9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdGhlbWUuQ09MT1JTLkJHMiwgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2BIZWxsbywgVEhpcyBpcyBmb3VydGggUGFnZWB9XHJcbiAgICAgICAgICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICAgICAgICAgICA8UGFnZSByZWY9e3ZhbmlsYUVuZDJ9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdGhlbWUuQ09MT1JTLkJHMSwgY29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2BIZWxsbywgVEhpcyBpcyBmaWZ0aCBQYWdlYH1cclxuICAgICAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgUGFnZSA9IGZvcndhcmRSZWYoKHsgc3R5bGUsIGNoaWxkcmVuIH0sIHJlZikgPT4gKFxyXG4gICAgPGRpdiByZWY9e3JlZn0gc3R5bGU9e3tcclxuXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgIC4uLnN0eWxlLFxyXG4gICAgfX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbikpXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=D:\\selab-next\\pages\\index.js */"));
};

const Page = Object(react__WEBPACK_IMPORTED_MODULE_8__["forwardRef"])(({
  style,
  children
}, ref) => __jsx("div", {
  ref: ref,
  style: _objectSpread({
    width: '100%',
    height: '100vh',
    margin: 0,
    padding: 0,
    fontSize: 20
  }, style),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}, children));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\selab-next\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map