webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
var _this = undefined,
    _jsxFileName = "/Users/damianjoniec/Downloads/Advanced-React-master/ninjammagear/frontend/components/Page.js";



function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family:   \n  }\n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n  \n  *,*:before, *:after {\n    box-sizing: inherit;\n  }\n  \n  body {\n    padding: 0;\n    margin: 0;\n    font-size: 1.5rem; \n    line-height: 2;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};
Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])(_templateObject());
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-4u7a64-0"
})(["background:white;color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.black;
});
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-4u7a64-1"
})(["max-width:", ";background:", ";margin:0 auto;padding:2rem;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.maxWidth;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.background;
});

var Page = function Page(_ref4) {
  var children = _ref4.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=_app.js.578f8d9199ac2aa3752b.hot-update.js.map