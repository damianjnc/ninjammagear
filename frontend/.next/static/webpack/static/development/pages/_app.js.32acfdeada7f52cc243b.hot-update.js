webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
var _this = undefined,
    _jsxFileName = "/Users/damianjoniec/Downloads/Advanced-React-master/ninjammagear/frontend/components/Header.js";



function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  .bar {\n    border-bottom: 10px solid ", ";\n    display: grid;\n    grid-template-columns: auto 1fr;\n    justify-content: space-between;\n    align-items: stretch;\n    @media (max-width: 1300px) {\n      grid-template-columns: 1fr;\n      justify-content: center;\n    }\n  }\n  .sub-bar {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    border-bottom: 1px solid ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 4rem;\n  margin-left: 2rem;\n  position: relative;\n  z-index: 2;\n  transform: skew(-7deg);\n  a {\n    padding: 0.5rem 1rem;\n    background: ", ";\n    color: white;\n    text-transform: uppercase;\n    text-decoration: none;\n  }\n  @media (max-width: 1300px) {\n    margin: 0;\n    text-align: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1(_templateObject(), function (props) {
  return props.theme.red;
});
var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].header(_templateObject2(), function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.lightgrey;
});

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeader, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, 'NinjaMMAGear'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sub-bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, 'Search')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, 'Cart'));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.32acfdeada7f52cc243b.hot-update.js.map