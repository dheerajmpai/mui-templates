webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/nav3.js":
/*!****************************!*\
  !*** ./components/nav3.js ***!
  \****************************/
/*! exports provided: DesktopHeader1, DesktopHeader2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopHeader1", function() { return DesktopHeader1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopHeader2", function() { return DesktopHeader2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants */ "./constants/index.js");
var _jsxFileName = "/home/pai/zz/DEF/PROJS/HYPERWEB/components/nav3.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    toolbar: {
      borderBottom: "1px solid ".concat(theme.palette.divider)
    },
    toolbarTitle: {
      flex: 1,
      color: '#000AAA',
      fontFamily: 'Comic-Sans'
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
      color: 'black'
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0
    }
  };
}); //  const { sections, title } = props;

var sections = [{
  'title': 'Nation',
  'url': '/nation'
}, {
  'title': 'World',
  'url': '/world'
}, {
  'title': 'Politics',
  'url': '/politics'
}, {
  'title': 'Bussiness',
  'url': '/biz'
}, {
  'title': 'Sports',
  'url': '/sports'
}, {
  'title': 'Trending',
  'url': '/trending'
}, {
  'title': 'Jobs',
  'url': '/jobs'
}, {
  'title': 'About Us',
  'url': 'https://news.tess.now.sh/about'
}];
var title = {
  COMPANY_NAME: _constants__WEBPACK_IMPORTED_MODULE_11__["COMPANY_NAME"]
};
var DesktopHeader1 = function DesktopHeader1() {
  var classes = useStyles();
  return __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    position: "sticky",
    style: {
      boxShadow: '0 8px 6px -6px #AAAAAA',
      background: '#FFFFFF',
      height: '42px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "nav",
    variant: "dense",
    className: classes.toolbarSecondary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, sections.map(function (section) {
    return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      disableRipple: true,
      fullWidth: true,
      disableFocusRipple: true,
      variant: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
      color: "inherit",
      noWrap: true,
      key: section.title,
      variant: "body2",
      href: section.url,
      className: classes.toolbarLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, section.title));
  })));
};
var DesktopHeader2 = function DesktopHeader2() {
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    position: "static",
    style: {
      background: '#FFFB3A',
      height: '120px',
      color: 'red',
      boxShadow: '0 3px 5px #FFFFFF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.toolbar,
    style: {
      height: '120px',
      color: 'red'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "  Subscribe")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "h2",
    variant: "h3",
    color: "inherit",
    align: "center",
    noWrap: true,
    className: classes.toolbarTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, title), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "outlined",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Sign up")))));
}; // DesktopHeader.propTypes = {
//   sections: PropTypes.array,
//   title: PropTypes.string,
// };

/***/ })

})
//# sourceMappingURL=index.js.8f5500976dcfd87ed5e2.hot-update.js.map