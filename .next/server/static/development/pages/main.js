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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/reactScrollCollision.js":
/*!********************************************!*\
  !*** ./components/reactScrollCollision.js ***!
  \********************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "D:\\selab-next\\components\\reactScrollCollision.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



class ScrollCollision extends react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "state", {
      allBlocks: null,
      blockClass: null,
      style: {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0'
      },
      originOuter: 0,
      cloneOuter: 0,
      base: 100,
      element: {
        top: 0,
        bottom: 0,
        height: 0
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "componentDidMount", () => {
      const blocks = document.querySelectorAll('[data-clippath]');
      this.updateElement();
      this.setState(_objectSpread({}, this.state, {
        allBlocks: blocks,
        cloneOuter: this.state.base
      }));
      window.addEventListener("scroll", this.handleScroll);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "componentDidUpdate", () => {
      this.updateElement();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "handleScroll", event => {
      this.testCollision();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "testCollision", () => {
      const {
        allBlocks,
        element
      } = _objectSpread({}, this.state);

      for (let i = 0; i < allBlocks.length; i++) {
        const block = this.getBlockInfos(allBlocks[i]);
        let newOrigin = 0;
        let newClone = 0;

        if (element.bottom >= block.top && element.top <= block.top && this.isInBoundaries()) {
          newOrigin = block.top - element.bottom;
          newClone = block.top - element.top;
          return this.updateOverlay(newOrigin, newClone, block.class);
        }

        if (element.bottom >= block.bottom && element.top <= block.bottom && this.isInBoundaries()) {
          newOrigin = block.bottom - element.top;
          newClone = block.bottom - element.bottom;
          return this.updateOverlay(newOrigin, newClone, block.class);
        }

        if (element.top > block.top && element.bottom < block.bottom) return this.updateOverlay(-110, 0, block.class);
      }

      ;
      return this.updateOverlay(0, 110, null);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "updateElement", () => {
      const newElem = this.getBlockInfos(this.wrapperRef.current);

      if (this.state.element.top !== newElem.top || this.state.element.bottom !== newElem.bottom) {
        const element = {
          top: newElem.top,
          bottom: newElem.bottom,
          height: newElem.bottom - newElem.top
        };
        this.setState(_objectSpread({}, this.state, {
          element: element
        }));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "updateOverlay", (origin, clone, blockClass) => {
      const tempOrigin = this.getPercent(origin);
      const tempClone = this.getPercent(clone);
      this.setState(_objectSpread({}, this.state, {
        blockClass: blockClass,
        originOuter: tempOrigin,
        cloneOuter: tempClone
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "isInBoundaries", () => {
      const {
        originOuter,
        cloneOuter,
        base
      } = _objectSpread({}, this.state);

      return originOuter <= base && originOuter >= -base && cloneOuter <= base && cloneOuter >= -base;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "getPercent", value => {
      const {
        base
      } = _objectSpread({}, this.state);

      let percent = value * base / this.state.element.height;
      if (percent > base) percent = base;else if (percent < -base) percent = -base;
      return percent;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "getBlockInfos", elem => {
      const position = elem.getBoundingClientRect();
      const blockClass = elem.dataset ? elem.dataset.clippath : null;
      const element = {
        top: position.top,
        bottom: position.bottom,
        class: blockClass
      };
      return element;
    });

    this.wrapperRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
  }

  render() {
    const {
      className,
      children,
      style
    } = _objectSpread({}, this.props);

    return __jsx("div", {
      className: "clippath-wrapper " + className,
      ref: this.wrapperRef,
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx("div", {
      className: "clippath-origin",
      style: _objectSpread({}, this.state.style, {
        overflow: 'hidden',
        transform: "translateY(" + this.state.originOuter + "%)"
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, __jsx("div", {
      className: "clippath-inner",
      style: _objectSpread({}, this.state.style, {
        overflow: 'auto',
        transform: "translateY(" + -this.state.originOuter + "%)"
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, children))), __jsx("div", {
      className: "clippath-clone " + this.state.blockClass,
      style: _objectSpread({}, this.state.style, {
        overflow: 'hidden',
        transform: "translateY(" + this.state.cloneOuter + "%)"
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx("div", {
      className: "clippath-inner",
      style: _objectSpread({}, this.state.style, {
        overflow: 'auto',
        transform: "translateY(" + -this.state.cloneOuter + "%)"
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, children))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ScrollCollision);

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

/***/ "./pages/main.js":
/*!***********************!*\
  !*** ./pages/main.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/theme */ "./components/theme.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_reactScrollCollision__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/reactScrollCollision */ "./components/reactScrollCollision.js");
var _jsxFileName = "D:\\selab-next\\pages\\main.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const App = () => __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3431981738", [_components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG2, _components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG1]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3431981738", [_components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG2, _components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG1]]]) + " " + "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_components_reactScrollCollision__WEBPACK_IMPORTED_MODULE_3__["default"], {
  className: "Elem1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Scroll Down"), __jsx(_components_reactScrollCollision__WEBPACK_IMPORTED_MODULE_3__["default"], {
  className: "Elem3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Scroll Down")), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3431981738", [_components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG2, _components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG1]]]) + " " + "Block-White",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("div", {
  "data-clippath": "ColorWhite",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3431981738", [_components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG2, _components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG1]]]) + " " + "Block-Black",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("p", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3431981738", [_components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG2, _components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG1]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "asdfasdfasdfasdfasfasfadf")), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3431981738", [_components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG2, _components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG1]]]) + " " + "Block-White",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx("div", {
  "data-clippath": "ColorWhite",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3431981738", [_components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG2, _components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG1]]]) + " " + "Block-Black",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3431981738", [_components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG2, _components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG1]]]) + " " + "Block-White",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3431981738",
  dynamic: [_components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG2, _components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG1],
  __self: undefined
}, `.Block-White,.Block-Black{width:100%;height:50vh;}p{margin:0;}.container{oveflow:hidden;position:fixed;top:0%;width:100%;}.Block-White{background:${_components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG2};}.Block-Black{background:${_components_theme__WEBPACK_IMPORTED_MODULE_1__["default"].COLORS.BG1};}.ColorWhite{color:white;fill:white;}.ColorGray{background-color:lightgray;}.Elem1{position:fixed;top:0%;left:50% height:20px;width:300px;}.Elem2{-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);height:17px;width:150px;}.Elem3{position:fixed;top:0%;left:20%;height:20px;width:150px;}.ElemSVG{position:fixed;top:30%;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);height:100px;width:100px;}.ElemSVG svg{position:absolute;top:-33px;left:-33px;}.ElemSVG svg path{stroke:#fff;stroke-width:6px;stroke-linecap:round;fill:transparent;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzZWxhYi1uZXh0XFxwYWdlc1xcbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QjJCLEFBSzBCLEFBS0EsQUFJTSxBQU91QixBQUlBLEFBSTVCLEFBS2UsQUFLVixBQVFVLEFBTVYsQUFRRixBQVNLLEFBTU4sU0FqRWhCLEVBTGMsQ0F3QkQsQUErQ1EsR0E5REYsQUF5QlIsQUFjQSxBQVFELEdBU0ksSUE3QkEsQUFhRCxDQWhEYixBQXdCQSxBQWdDVyxJQTNCWCxDQW9DZSxDQU1VLENBOURkLENBd0NHLENBUWUsS0EvQ2QsRUF3RGYsQ0FuREEsQUFJQSxHQWlCYyxBQWNBLEtBdkNkLEVBNkRxQixLQW5DckIsQUFjQSxZQXNCQSwwQkFoQ2MsWUFDQSxZQUNkLFFBZWUsYUFDRCxZQUNkIiwiZmlsZSI6IkQ6XFxzZWxhYi1uZXh0XFxwYWdlc1xcbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aGVtZSBmcm9tICcuLi9jb21wb25lbnRzL3RoZW1lJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTY3JvbGxDb2xsaXNpb24gZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdFNjcm9sbENvbGxpc2lvbic7XHJcblxyXG5cclxuY29uc3QgQXBwID0gKCkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiID5cclxuICAgICAgICAgICAgPFNjcm9sbENvbGxpc2lvbiBjbGFzc05hbWU9XCJFbGVtMVwiPlNjcm9sbCBEb3duPC9TY3JvbGxDb2xsaXNpb24+XHJcbiAgICAgICAgICAgIDxTY3JvbGxDb2xsaXNpb24gY2xhc3NOYW1lPVwiRWxlbTNcIj5TY3JvbGwgRG93bjwvU2Nyb2xsQ29sbGlzaW9uPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCbG9jay1XaGl0ZVwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJsb2NrLUJsYWNrXCIgZGF0YS1jbGlwcGF0aD1cIkNvbG9yV2hpdGVcIj5cclxuICAgICAgICAgICAgPHA+YXNkZmFzZGZhc2RmYXNkZmFzZmFzZmFkZjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJsb2NrLVdoaXRlXCI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmxvY2stQmxhY2tcIiBkYXRhLWNsaXBwYXRoPVwiQ29sb3JXaGl0ZVwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCbG9jay1XaGl0ZVwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLkJsb2NrLVdoaXRlLFxyXG4gICAgICAgICAgICAuQmxvY2stQmxhY2sge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNTB2aDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgb3ZlZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuQmxvY2stV2hpdGUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuQ09MT1JTLkJHMn07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5CbG9jay1CbGFjayB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5DT0xPUlMuQkcxfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLkNvbG9yV2hpdGV7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuQ29sb3JHcmF5e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgICAgICAgICAgLy8gICBmaWxsOmdyYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5FbGVtMSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLkVsZW0yIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLkVsZW0zIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLkVsZW1TVkcge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICB0b3A6IDMwJTtcclxuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuRWxlbVNWRyBzdmd7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0zM3B4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTMzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5FbGVtU1ZHIHN2ZyBwYXRoe1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcCJdfQ== */
/*@ sourceURL=D:\selab-next\pages\main.js */`));

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\selab-next\pages\main.js */"./pages/main.js");


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
//# sourceMappingURL=main.js.map