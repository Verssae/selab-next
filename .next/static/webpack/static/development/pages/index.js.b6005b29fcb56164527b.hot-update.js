webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/useIsomorphicLayoutEffect.jsx":
/*!**************************************************!*\
  !*** ./components/useIsomorphicLayoutEffect.jsx ***!
  \**************************************************/
/*! exports provided: useIsomorphicLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useIsomorphicLayoutEffect = true ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : undefined;

/***/ }),

/***/ "./components/useScrollPosition.jsx":
/*!******************************************!*\
  !*** ./components/useScrollPosition.jsx ***!
  \******************************************/
/*! exports provided: useScrollPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScrollPosition", function() { return useScrollPosition; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./components/useIsomorphicLayoutEffect.jsx");
/* eslint-disable react-hooks/exhaustive-deps */


var isBrowser = true;

function getScrollPosition(_ref) {
  var element = _ref.element,
      useWindow = _ref.useWindow;
  if (!isBrowser) return {
    x: 0,
    y: 0
  };
  var target = element ? element.current : document.body;
  var position = target.getBoundingClientRect();
  return useWindow ? {
    x: window.scrollX,
    y: window.scrollY
  } : {
    x: position.left,
    y: position.top
  };
}

function useScrollPosition(effect, deps, element, useWindow, wait) {
  var position = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(getScrollPosition({
    useWindow: useWindow
  }));
  var throttleTimeout = null;

  var callBack = function callBack() {
    var currPos = getScrollPosition({
      element: element,
      useWindow: useWindow
    });
    effect({
      prevPos: position.current,
      currPos: currPos
    });
    position.current = currPos;
    throttleTimeout = null;
  };

  Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["useIsomorphicLayoutEffect"])(function () {
    if (!isBrowser) {
      return;
    }

    var handleScroll = function handleScroll() {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, deps);
}
useScrollPosition.defaultProps = {
  deps: [],
  element: false,
  useWindow: false,
  wait: null
};

/***/ }),

/***/ "./node_modules/@n8tb1t/use-scroll-position/lib/index.js":
false,

/***/ "./node_modules/@n8tb1t/use-scroll-position/lib/useScrollPosition.js":
false,

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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/theme */ "./components/theme.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_useScrollPosition__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/useScrollPosition */ "./components/useScrollPosition.jsx");











var _jsxFileName = "D:\\selab-next\\pages\\index.js",
    _header;


var __jsx = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






var TestElement = function TestElement(_ref) {
  var title = _ref.title,
      content = _ref.content,
      backgroundColor = _ref.backgroundColor,
      callback = _ref.callback;
  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_13__["useRef"])();
  Object(_components_useScrollPosition__WEBPACK_IMPORTED_MODULE_14__["useScrollPosition"])(function (_ref2) {
    var currPos = _ref2.currPos;
    var ratio = currPos.y / 85 * 100;

    if (ratio >= 0 && ratio <= 100) {
      console.log(title);
      callback(backgroundColor, ratio);
    }
  }, [], elementRef);
  return __jsx("div", {
    className: "asdfsafd",
    ref: elementRef,
    style: _objectSpread({}, styles.element, {
      backgroundColor: backgroundColor
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("p", {
    style: {
      flex: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, title), __jsx("p", {
    style: {
      flex: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, content));
};

var Index = function Index(props) {
  var texts = props.texts;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])({
    lastColor: _components_theme__WEBPACK_IMPORTED_MODULE_12__["default"].COLORS.BG1,
    currentColor: _components_theme__WEBPACK_IMPORTED_MODULE_12__["default"].COLORS.BG1,
    amount: "100%"
  }),
      backgroundState = _useState[0],
      setBackgroundState = _useState[1];

  Object(_components_useScrollPosition__WEBPACK_IMPORTED_MODULE_14__["useScrollPosition"])(function (_ref3) {
    var prevPos = _ref3.prevPos,
        currPos = _ref3.currPos;
    // console.log(`${prevPos.y}->${currPos.y}`)
    var isDown = prevPos.y - currPos.y > 0;
    console.log(isDown);
  });

  var changeBackgroundColor = function changeBackgroundColor(bgcolor, amount) {
    console.log("".concat(bgcolor, ", ").concat(amount));
    var currentColor = backgroundState.currentColor,
        lastColor = backgroundState.lastColor;
    setBackgroundState({
      lastColor: currentColor,
      currentColor: bgcolor,
      amount: amount
    });
  };

  var currentColor = backgroundState.currentColor,
      lastColor = backgroundState.lastColor,
      amount = backgroundState.amount;
  var background = "linear-gradient(".concat(lastColor, " ").concat(amount, "%,").concat(lastColor, " 0%,").concat(currentColor, " 0%, ").concat(currentColor, " ").concat(100 - amount, "%)");
  return __jsx("div", {
    style: styles.container,
    className: "jsx-2822436972",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(Header, {
    background: background,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), texts.map(function (text, index) {
    return __jsx(TestElement, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({
      key: index
    }, text, {
      callback: changeBackgroundColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: "2822436972",
    __self: this
  }, "body{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzZWxhYi1uZXh0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUUrQixBQUcwQixTQUNDLFVBQ2QiLCJmaWxlIjoiRDpcXHNlbGFiLW5leHRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL2NvbXBvbmVudHMvdGhlbWUnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIGZvcndhcmRSZWYsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTY3JvbGxQb3NpdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvdXNlU2Nyb2xsUG9zaXRpb24nXHJcblxyXG5jb25zdCBUZXN0RWxlbWVudCA9ICh7IHRpdGxlLCBjb250ZW50LCBiYWNrZ3JvdW5kQ29sb3IsIGNhbGxiYWNrIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50UmVmID0gdXNlUmVmKClcclxuICAgIHVzZVNjcm9sbFBvc2l0aW9uKCh7IGN1cnJQb3MgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhdGlvID0gY3VyclBvcy55IC8gODUgKiAxMDBcclxuICAgICAgICBpZiAocmF0aW8gPj0gMCAmJiByYXRpbyA8PSAxMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGl0bGUpXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGJhY2tncm91bmRDb2xvciwgcmF0aW8pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtdLCBlbGVtZW50UmVmKVxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNkZnNhZmRcIiByZWY9e2VsZW1lbnRSZWZ9IHN0eWxlPXt7IC4uLnN0eWxlcy5lbGVtZW50LCBiYWNrZ3JvdW5kQ29sb3IsIH19PlxyXG5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZmxleDogMSB9fT57dGl0bGV9PC9wPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmbGV4OiAxIH19Pntjb250ZW50fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyB0ZXh0cyB9ID0gcHJvcHNcclxuICAgIGNvbnN0IFtiYWNrZ3JvdW5kU3RhdGUsIHNldEJhY2tncm91bmRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbGFzdENvbG9yOiB0aGVtZS5DT0xPUlMuQkcxLFxyXG4gICAgICAgIGN1cnJlbnRDb2xvcjogdGhlbWUuQ09MT1JTLkJHMSxcclxuICAgICAgICBhbW91bnQ6IFwiMTAwJVwiLFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgdXNlU2Nyb2xsUG9zaXRpb24oKHtwcmV2UG9zLCBjdXJyUG9zfSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3ByZXZQb3MueX0tPiR7Y3VyclBvcy55fWApXHJcbiAgICAgICAgY29uc3QgaXNEb3duID0gcHJldlBvcy55IC0gY3VyclBvcy55ID4gMFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlzRG93bilcclxuICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3IgPSAoYmdjb2xvciwgYW1vdW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7Ymdjb2xvcn0sICR7YW1vdW50fWApXHJcbiAgICAgICAgY29uc3Qge2N1cnJlbnRDb2xvciwgbGFzdENvbG9yfSA9IGJhY2tncm91bmRTdGF0ZVxyXG4gICAgICAgIHNldEJhY2tncm91bmRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxhc3RDb2xvcjogY3VycmVudENvbG9yLFxyXG4gICAgICAgICAgICBjdXJyZW50Q29sb3I6IGJnY29sb3IsXHJcbiAgICAgICAgICAgIGFtb3VudCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICBjb25zdCB7Y3VycmVudENvbG9yLCBsYXN0Q29sb3IsIGFtb3VudH0gPSBiYWNrZ3JvdW5kU3RhdGVcclxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBgbGluZWFyLWdyYWRpZW50KCR7bGFzdENvbG9yfSAke2Ftb3VudH0lLCR7bGFzdENvbG9yfSAwJSwke2N1cnJlbnRDb2xvcn0gMCUsICR7Y3VycmVudENvbG9yfSAkezEwMCAtIGFtb3VudH0lKWBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8SGVhZGVyIGJhY2tncm91bmQ9e2JhY2tncm91bmR9IC8+XHJcbiAgICAgICAgICAgIHt0ZXh0cy5tYXAoKHRleHQsIGluZGV4KSA9PiA8VGVzdEVsZW1lbnQga2V5PXtpbmRleH0gey4uLnRleHR9IGNhbGxiYWNrPXtjaGFuZ2VCYWNrZ3JvdW5kQ29sb3J9IC8+KX1cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5jb25zdCBIZWFkZXIgPSAoeyBiYWNrZ3JvdW5kIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlciBzdHlsZT17eyAuLi5zdHlsZXMuaGVhZGVyLCBiYWNrZ3JvdW5kIH19PlxyXG4gICAgICAgICAgICA8aDE+U0VMYWI8L2gxPlxyXG4gICAgICAgICAgICA8cD5UaGlzIGlzIFNFTEFCJ3MgbWFpbiBwYWdlPC9wPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuQ09MT1JTLkJHMSxcclxuICAgICAgICAuLi50aGVtZS5GT05UUyxcclxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgfSxcclxuICAgIGVsZW1lbnQ6IHtcclxuICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgIGhlaWdodDogJzMwdmgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgcGFkZGluZ1RvcDogJzEwdmgnLFxyXG4gICAgfSxcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnLXdlYmtpdC1zdGlja3knLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoICNGRkMwQ0IgNTAlLCAjMDBGRkZGIDUwJSknLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSB9KSA9PiB7XHJcbiAgICBjb25zdCB1c2VyQWdlbnQgPSByZXEgPyByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIDogbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgY29uc29sZS5sb2codXNlckFnZW50KVxyXG4gICAgY29uc3QgdGV4dHMgPSBbXHJcbiAgICAgICAgeyB0aXRsZTogXCJUaGlzIGlzIFRlc3QxXCIsIGNvbnRlbnQ6IFwiSGVsbG8gV29ybGQhXCIsIGJhY2tncm91bmRDb2xvcjogdGhlbWUuQ09MT1JTLkJHMSB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwiVGhpcyBpcyBUZXN0MlwiLCBjb250ZW50OiBcIkhlbGxvIFdvcmxkIVwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLkNPTE9SUy5CRzIgfSxcclxuICAgICAgICB7IHRpdGxlOiBcIlRoaXMgaXMgVGVzdDNcIiwgY29udGVudDogXCJIZWxsbyBXb3JsZCFcIiwgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5DT0xPUlMuQkcxIH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCJUaGlzIGlzIFRlc3Q0XCIsIGNvbnRlbnQ6IFwiSGVsbG8gV29ybGQhXCIsIGJhY2tncm91bmRDb2xvcjogdGhlbWUuQ09MT1JTLkJHMiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwiVGhpcyBpcyBUZXN0NVwiLCBjb250ZW50OiBcIkhlbGxvIFdvcmxkIVwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLkNPTE9SUy5CRzEgfSxcclxuICAgICAgICB7IHRpdGxlOiBcIlRoaXMgaXMgVGVzdDFcIiwgY29udGVudDogXCJIZWxsbyBXb3JsZCFcIiwgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5DT0xPUlMuQkcxIH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCJUaGlzIGlzIFRlc3QyXCIsIGNvbnRlbnQ6IFwiSGVsbG8gV29ybGQhXCIsIGJhY2tncm91bmRDb2xvcjogdGhlbWUuQ09MT1JTLkJHMiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwiVGhpcyBpcyBUZXN0M1wiLCBjb250ZW50OiBcIkhlbGxvIFdvcmxkIVwiLCBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLkNPTE9SUy5CRzEgfSxcclxuICAgICAgICB7IHRpdGxlOiBcIlRoaXMgaXMgVGVzdDRcIiwgY29udGVudDogXCJIZWxsbyBXb3JsZCFcIiwgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5DT0xPUlMuQkcyIH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCJUaGlzIGlzIFRlc3Q1XCIsIGNvbnRlbnQ6IFwiSGVsbG8gV29ybGQhXCIsIGJhY2tncm91bmRDb2xvcjogdGhlbWUuQ09MT1JTLkJHMSB9LFxyXG4gICAgXVxyXG4gICAgcmV0dXJuIHsgdGV4dHMgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdfQ== */\n/*@ sourceURL=D:\\selab-next\\pages\\index.js */"));
};

var Header = function Header(_ref4) {
  var background = _ref4.background;
  return __jsx("header", {
    style: _objectSpread({}, styles.header, {
      background: background
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "SELab"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "This is SELAB's main page"));
};

var styles = {
  container: _objectSpread({
    flex: 1,
    backgroundColor: _components_theme__WEBPACK_IMPORTED_MODULE_12__["default"].COLORS.BG1
  }, _components_theme__WEBPACK_IMPORTED_MODULE_12__["default"].FONTS, {
    color: "white",
    margin: 0,
    padding: 0
  }),
  element: {
    flex: 1,
    height: '30vh',
    backgroundColor: 'white',
    color: 'black',
    textAlign: "center",
    paddingTop: '10vh'
  },
  header: (_header = {
    position: '-webkit-sticky'
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_header, "position", 'sticky'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_header, "top", 0), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_header, "width", "100%"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_header, "background", 'linear-gradient( #FFC0CB 50%, #00FFFF 50%)'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_header, "margin", 0), _header)
};

Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(_ref5) {
    var req, userAgent, texts;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref5.req;
            userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
            console.log(userAgent);
            texts = [{
              title: "This is Test1",
              content: "Hello World!",
              backgroundColor: _components_theme__WEBPACK_IMPORTED_MODULE_12__["default"].COLORS.BG1
            }, {
              title: "This is Test2",
              content: "Hello World!",
              backgroundColor: _components_theme__WEBPACK_IMPORTED_MODULE_12__["default"].COLORS.BG2
            }, {
              title: "This is Test3",
              content: "Hello World!",
              backgroundColor: _components_theme__WEBPACK_IMPORTED_MODULE_12__["default"].COLORS.BG1
            }, {
              title: "This is Test4",
              content: "Hello World!",
              backgroundColor: _components_theme__WEBPACK_IMPORTED_MODULE_12__["default"].COLORS.BG2
            }, {
              title: "This is Test5",
              content: "Hello World!",
              backgroundColor: _components_theme__WEBPACK_IMPORTED_MODULE_12__["default"].COLORS.BG1
            }, {
              title: "This is Test1",
              content: "Hello World!",
              backgroundColor: _components_theme__WEBPACK_IMPORTED_MODULE_12__["default"].COLORS.BG1
            }, {
              title: "This is Test2",
              content: "Hello World!",
              backgroundColor: _components_theme__WEBPACK_IMPORTED_MODULE_12__["default"].COLORS.BG2
            }, {
              title: "This is Test3",
              content: "Hello World!",
              backgroundColor: _components_theme__WEBPACK_IMPORTED_MODULE_12__["default"].COLORS.BG1
            }, {
              title: "This is Test4",
              content: "Hello World!",
              backgroundColor: _components_theme__WEBPACK_IMPORTED_MODULE_12__["default"].COLORS.BG2
            }, {
              title: "This is Test5",
              content: "Hello World!",
              backgroundColor: _components_theme__WEBPACK_IMPORTED_MODULE_12__["default"].COLORS.BG1
            }];
            return _context.abrupt("return", {
              texts: texts
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref6.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.b6005b29fcb56164527b.hot-update.js.map