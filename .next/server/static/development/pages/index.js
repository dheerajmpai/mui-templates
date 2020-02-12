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

/***/ "./components/comps.js":
/*!*****************************!*\
  !*** ./components/comps.js ***!
  \*****************************/
/*! exports provided: Para1, Para2, Para3, Title1, Title2, Title3, Title4, Image1, featuredImage1, Divider2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Para1", function() { return Para1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Para2", function() { return Para2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Para3", function() { return Para3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title1", function() { return Title1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title2", function() { return Title2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title3", function() { return Title3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title4", function() { return Title4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image1", function() { return Image1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featuredImage1", function() { return featuredImage1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divider2", function() { return Divider2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./constants/index.js");
var _jsxFileName = "/home/pai/zz/DEF/PROJS/HYPERWEB/components/comps.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])(); // style={{ width: '100%', textAlign: 'center', margin: '20px auto', fontFamily: fontFamily1 }}

const Para1 = para => {
  const textFontSize = '20px';
  const fontFamily1 = '"Helvatica", Times, sans-serif';
  const fontFamily2 = '"Roboto", Times, sans-serif';
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "body1",
    style: {
      textAlign: 'justify',
      fontSize: textFontSize,
      fontFamily: fontFamily1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, para.children);
};
const Para2 = para => {
  const textFontSize = '20px';
  const fontFamily1 = '"Helvatica", Times, sans-serif';
  const fontFamily2 = '"Roboto", Times, sans-serif';
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "body1",
    style: {
      textAlign: 'justify',
      fontSize: textFontSize,
      fontFamily: fontFamily2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, para.children);
};
const Para3 = para => {
  const textFontSize = '20px';
  const fontFamily1 = _constants__WEBPACK_IMPORTED_MODULE_4__["FONT_3"];
  const fontFamily2 = '"Roboto", Times, sans-serif';
  const stl = para.style;
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "body1",
    style: _objectSpread({}, stl, {
      textAlign: 'justify',
      fontSize: textFontSize,
      fontFamily: fontFamily1
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, para.children);
};
const Title1 = title => {
  const textFontSize = '45px';
  const fontFamily1 = '"Helvatica", Times, sans-serif';
  const fontFamily2 = '"Roboto", Times, sans-serif';
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "h3",
    style: {
      fontFamily: fontFamily1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, " ", title.children, " ");
};
const Title2 = para => {
  const textFontSize = '20px';
  const fontFamily1 = '"Helvatica", Times, sans-serif';
  const fontFamily2 = '"Roboto", Times, sans-serif';
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "body1",
    style: {
      textAlign: 'justify',
      fontSize: textFontSize,
      fontFamily: fontFamily2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, para.children);
};
const Title3 = para => {
  const textFontSize = '40px';
  const fontFamily1 = '"Helvatica", Times, sans-serif';
  const fontFamily2 = _constants__WEBPACK_IMPORTED_MODULE_4__["FONT_2"];
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "body1",
    style: {
      textAlign: 'justify',
      fontSize: textFontSize,
      fontFamily: fontFamily2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, para.children);
};
const Title4 = title => {
  const textFontSize = '30px';
  const fontFamily1 = '"Helvatica", Times, sans-serif';
  const fontFamily2 = '"Roboto", Times, sans-serif';
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "h4",
    style: {
      fontFamily: fontFamily1,
      fontSize: textFontSize
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, " ", title.children, " ");
};
const Image1 = src => {
  const source = src.src;
  return __jsx("div", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("img", _extends({}, src, {
    src: source,
    style: {
      borderRadius: '1px',
      width: '100%',
      margin: '2px auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  })));
};
const featuredImage1 = src => {
  const source = src.src;
  return __jsx("div", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("img", {
    src: source,
    style: {
      borderRadius: '8px',
      width: '80%',
      margin: '2px auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }));
};
const Divider2 = props => {
  const mar = props.mar;
  return __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      margin: mar ? mar : '20px 0px 20px 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  });
};

/***/ }),

/***/ "./components/draw1.js":
/*!*****************************!*\
  !*** ./components/draw1.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileDrawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "@material-ui/icons/MoveToInbox");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../constants */ "./constants/index.js");
var _jsxFileName = "/home/pai/zz/DEF/PROJS/HYPERWEB/components/draw1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















 // import {sections as sec} from './nav2';

const sec = [{
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
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
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
}));
function MobileDrawer() {
  const classes = useStyles();
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(_objectSpread({}, state, {
      [side]: open
    }));
  };

  const sideList = side => __jsx("div", {
    className: classes.list,
    role: "presentation",
    onClick: toggleDrawer(side, false),
    onKeyDown: toggleDrawer(side, false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, ['Sign Up', 'Starred'].map((text, index) => __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    button: true,
    key: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8___default.a, {
    primary: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, sec.map((text, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
    href: text.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    button: true,
    key: text.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), " "), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8___default.a, {
    primary: text.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }))))));

  const sections = [{
    'title': 'Sign Up',
    'url': '/signup'
  }, {
    'title': 'Subscribe',
    'url': '/subscribe'
  }];
  const title = _constants__WEBPACK_IMPORTED_MODULE_16__["COMPANY_NAME"];
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_13___default.a, {
    position: "static",
    style: {
      background: '#FDDB3A',
      height: '60px',
      color: 'red',
      boxShadow: '0 3px 5px #FFFFFF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12___default.a, {
    component: "nav",
    variant: "dense",
    className: classes.toolbarSecondary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: toggleDrawer('left', true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default.a, {
    component: "h5",
    variant: "h3",
    color: "inherit",
    align: "center",
    height: "80px",
    noWrap: true,
    className: classes.toolbarTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, title))), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2___default.a, {
    open: state.left,
    onClose: toggleDrawer('left', false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, sideList('left')));
}

/***/ }),

/***/ "./components/heads.js":
/*!*****************************!*\
  !*** ./components/heads.js ***!
  \*****************************/
/*! exports provided: Heads */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heads", function() { return Heads; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./constants/index.js");
var _jsxFileName = "/home/pai/zz/DEF/PROJS/HYPERWEB/components/heads.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Heads = () => {
  var thisIsMyCopy = '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZS3O0OOn0a0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  var thisIsMyCopy2 = '<!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=UA-127071484-15"></script>';
  var thisIsMyCopy3 = "<script>  window.dataLayer = window.dataLayer || [];  function gtag(){dataLayer.push(arguments);}  gtag('js', new Date());  gtag('config', 'UA-127071484-15');</script>";
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, _constants__WEBPACK_IMPORTED_MODULE_2__["COMPANY_NAME"]), __jsx("div", {
    className: "content",
    dangerouslySetInnerHTML: {
      __html: thisIsMyCopy2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("div", {
    className: "content",
    dangerouslySetInnerHTML: {
      __html: thisIsMyCopy3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DesktopHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants */ "./constants/index.js");
var _jsxFileName = "/home/pai/zz/DEF/PROJS/HYPERWEB/components/nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
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
}));
function DesktopHeader() {
  const classes = useStyles(); //  const { sections, title } = props;

  const sections = [{
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
  const title = 'News Now';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    position: "static",
    style: {
      background: _constants__WEBPACK_IMPORTED_MODULE_11__["COLOR_1"],
      height: '120px',
      color: 'red',
      boxShadow: '0 3px 5px #FFFFFF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.toolbar,
    style: {
      height: '120px',
      color: 'red'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "  Subscribe")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    component: "h2",
    variant: "h3",
    color: "inherit",
    align: "center",
    noWrap: true,
    className: classes.toolbarTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, title), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "outlined",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Sign up")))), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    position: "sticky",
    style: {
      boxShadow: '0 8px 6px -6px #AAAAAA',
      background: '#FFFFFF',
      height: '42px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    component: "nav",
    variant: "dense",
    className: classes.toolbarSecondary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, sections.map(section => __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    disableRipple: true,
    fullWidth: true,
    disableFocusRipple: true,
    variant: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    color: "inherit",
    noWrap: true,
    key: section.title,
    variant: "body2",
    href: section.url // className={classes.toolbarLink}
    ,
    style: {
      textDecoration: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, section.title)))))));
}
DesktopHeader.propTypes = {
  sections: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./components/nav2.js":
/*!****************************!*\
  !*** ./components/nav2.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nav */ "./components/nav.js");
/* harmony import */ var _draw1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./draw1 */ "./components/draw1.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _nav3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nav3 */ "./components/nav3.js");
/* harmony import */ var _heads__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./heads */ "./components/heads.js");
var _jsxFileName = "/home/pai/zz/DEF/PROJS/HYPERWEB/components/nav2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
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
}));
function Header() {
  // const classes = useStyles();
  // const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isTabletOrMobileDevice = useMediaQuery({
  //   query: '(max-device-width: 1224px)'
  // })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  //  const { sections, title } = props;
  // const title = 'News Now'
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Anton|Fjalla+One|Patua+One&display=swap');"), __jsx(_heads__WEBPACK_IMPORTED_MODULE_15__["Heads"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_13___default.a, {
    xsDown: true,
    implementation: "js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_nav3__WEBPACK_IMPORTED_MODULE_14__["DesktopHeader2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_13___default.a, {
    xsDown: true,
    implementation: "js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_nav3__WEBPACK_IMPORTED_MODULE_14__["DesktopHeader1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_13___default.a, {
    smUp: true,
    implementation: "js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_draw1__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })));
}
Header.propTypes = {
  sections: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants */ "./constants/index.js");
var _jsxFileName = "/home/pai/zz/DEF/PROJS/HYPERWEB/components/nav3.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
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
})); //  const { sections, title } = props;

const sections = [{
  'title': 'Services',
  'url': '/nation'
}, {
  'title': 'Research',
  'url': '/politics'
}, {
  'title': 'Advertise',
  'url': '/grow'
}, {
  'title': 'Build',
  'url': '/build'
}, {
  'title': 'Resources',
  'url': '/resources'
}, {
  'title': 'Partner with Us',
  'url': '/partners'
}, {
  'title': 'Internships',
  'url': '/intern'
}, {
  'title': 'Jobs',
  'url': '/jobs'
}, {
  'title': 'About Us',
  'url': '/about'
}, {
  'title': 'Contact Us',
  'url': '/contact'
}]; // const sections = [{ 'title': 'Nation', 'url': '/nation' },
// { 'title': 'World', 'url': '/world' },
// { 'title': 'Politics', 'url': '/politics' },
// { 'title': 'Bussiness', 'url': '/biz' },
// { 'title': 'Sports', 'url': '/sports' },
// { 'title': 'Trending', 'url': '/trending' },
// { 'title': 'Jobs', 'url': '/jobs' },
// { 'title': 'About Us', 'url': 'https://news.tess.now.sh/about' },
// ]

const title = _constants__WEBPACK_IMPORTED_MODULE_11__["COMPANY_NAME"];
const DesktopHeader1 = () => {
  const classes = useStyles();
  return __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    position: "sticky",
    style: {
      boxShadow: '0 8px 6px -6px #AAAAAA',
      background: '#FFFFFF',
      height: '42px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    component: "nav",
    variant: "dense",
    className: classes.toolbarSecondary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, sections.map(section => __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: section.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    size: "small",
    fullWidth: true,
    disableFocusRipple: true,
    variant: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("mLink", {
    color: "inherit",
    noWrap: true,
    key: section.title,
    variant: "body2",
    href: section.url,
    className: classes.toolbarLink,
    style: {
      fontFamily: _constants__WEBPACK_IMPORTED_MODULE_11__["FONT_2"]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, section.title)))))));
};
const DesktopHeader2 = () => {
  const classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    position: "static",
    style: {
      background: '#FFFFFF',
      height: '80px',
      color: 'red',
      boxShadow: '0 3px 5px #FFFFFF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.toolbar,
    style: {
      height: '80px',
      color: 'red'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    component: "h2",
    variant: "h3",
    color: "inherit",
    align: "center",
    noWrap: true,
    className: classes.toolbarTitle,
    style: {
      fontFamily: _constants__WEBPACK_IMPORTED_MODULE_11__["FONT_1"]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, title))));
}; // DesktopHeader.propTypes = {
//   sections: PropTypes.array,
//   title: PropTypes.string,
// };

/***/ }),

/***/ "./constants/academic.constants.js":
/*!*****************************************!*\
  !*** ./constants/academic.constants.js ***!
  \*****************************************/
/*! exports provided: majorCategoryChoices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "majorCategoryChoices", function() { return majorCategoryChoices; });
const majorCategoryChoices = [{
  key: '1',
  text: 'Education',
  value: 'Education'
}, {
  key: '2',
  text: 'Health',
  value: 'Health'
}, {
  key: '3',
  text: 'Humanities & Liberal Arts',
  value: 'Humanities & Liberal Arts'
}, {
  key: '4',
  text: 'Physical Sciences',
  value: 'Physical Sciences'
}, {
  key: '5',
  text: 'Social Science',
  value: 'Social Science'
}, {
  key: '6',
  text: 'Computers & Mathematics',
  value: 'Computers & Mathematics'
}, {
  key: '7',
  text: 'Engineering',
  value: 'Engineering'
}, {
  key: '8',
  text: 'Industrial Arts & Consumer Services',
  value: 'Industrial Arts & Consumer Services'
}, {
  key: '9',
  text: 'Agriculture & Natural Resources',
  value: 'Agriculture & Natural Resources'
}, {
  key: '10',
  text: 'Interdisciplinary',
  value: 'Interdisciplinary'
}, {
  key: '11',
  text: 'INDUSTRIAL RADIOLOGY',
  value: 'INDUSTRIAL RADIOLOGY'
}, {
  key: '12',
  text: 'Arts',
  value: 'Arts'
}, {
  key: '13',
  text: 'Psychology & Social Work',
  value: 'Psychology & Social Work'
}, {
  key: '14',
  text: 'Communications & Journalism',
  value: 'Communications & Journalism'
}, {
  key: '15',
  text: 'Business',
  value: 'Business'
}, {
  key: '16',
  text: 'Biology & Life Science',
  value: 'Biology & Life Science'
}];

/***/ }),

/***/ "./constants/alert.constants.js":
/*!**************************************!*\
  !*** ./constants/alert.constants.js ***!
  \**************************************/
/*! exports provided: alertConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertConstants", function() { return alertConstants; });
const alertConstants = {
  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR',
  CLEAR: 'ALERT_CLEAR'
};

/***/ }),

/***/ "./constants/common.constants.js":
/*!***************************************!*\
  !*** ./constants/common.constants.js ***!
  \***************************************/
/*! exports provided: MonthNames, NumberRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthNames", function() { return MonthNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberRegex", function() { return NumberRegex; });
const MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const NumberRegex = /^[0-9\b]+$/;

/***/ }),

/***/ "./constants/countrycode.constants.js":
/*!********************************************!*\
  !*** ./constants/countrycode.constants.js ***!
  \********************************************/
/*! exports provided: countryCodeOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryCodeOptions", function() { return countryCodeOptions; });
const countryCodeOptions = [{
  "code": "AF",
  "dial_code": "+93",
  "key": "AF",
  "text": "Afghanistan",
  "value": "Afghanistan"
}, {
  "code": "AX",
  "dial_code": "+358",
  "key": "AX",
  "text": "Aland Islands",
  "value": "Aland Islands"
}, {
  "code": "AL",
  "dial_code": "+355",
  "key": "AL",
  "text": "Albania",
  "value": "Albania"
}, {
  "code": "DZ",
  "dial_code": "+213",
  "key": "DZ",
  "text": "Algeria",
  "value": "Algeria"
}, {
  "code": "AS",
  "dial_code": "+1684",
  "key": "AS",
  "text": "AmericanSamoa",
  "value": "AmericanSamoa"
}, {
  "code": "AD",
  "dial_code": "+376",
  "key": "AD",
  "text": "Andorra",
  "value": "Andorra"
}, {
  "code": "AO",
  "dial_code": "+244",
  "key": "AO",
  "text": "Angola",
  "value": "Angola"
}, {
  "code": "AI",
  "dial_code": "+1264",
  "key": "AI",
  "text": "Anguilla",
  "value": "Anguilla"
}, {
  "code": "AQ",
  "dial_code": "+672",
  "key": "AQ",
  "text": "Antarctica",
  "value": "Antarctica"
}, {
  "code": "AG",
  "dial_code": "+1268",
  "key": "AG",
  "text": "Antigua and Barbuda",
  "value": "Antigua and Barbuda"
}, {
  "code": "AR",
  "dial_code": "+54",
  "key": "AR",
  "text": "Argentina",
  "value": "Argentina"
}, {
  "code": "AM",
  "dial_code": "+374",
  "key": "AM",
  "text": "Armenia",
  "value": "Armenia"
}, {
  "code": "AW",
  "dial_code": "+297",
  "key": "AW",
  "text": "Aruba",
  "value": "Aruba"
}, {
  "code": "AU",
  "dial_code": "+61",
  "key": "AU",
  "text": "Australia",
  "value": "Australia"
}, {
  "code": "AT",
  "dial_code": "+43",
  "key": "AT",
  "text": "Austria",
  "value": "Austria"
}, {
  "code": "AZ",
  "dial_code": "+994",
  "key": "AZ",
  "text": "Azerbaijan",
  "value": "Azerbaijan"
}, {
  "code": "BS",
  "dial_code": "+1242",
  "key": "BS",
  "text": "Bahamas",
  "value": "Bahamas"
}, {
  "code": "BH",
  "dial_code": "+973",
  "key": "BH",
  "text": "Bahrain",
  "value": "Bahrain"
}, {
  "code": "BD",
  "dial_code": "+880",
  "key": "BD",
  "text": "Bangladesh",
  "value": "Bangladesh"
}, {
  "code": "BB",
  "dial_code": "+1246",
  "key": "BB",
  "text": "Barbados",
  "value": "Barbados"
}, {
  "code": "BY",
  "dial_code": "+375",
  "key": "BY",
  "text": "Belarus",
  "value": "Belarus"
}, {
  "code": "BE",
  "dial_code": "+32",
  "key": "BE",
  "text": "Belgium",
  "value": "Belgium"
}, {
  "code": "BZ",
  "dial_code": "+501",
  "key": "BZ",
  "text": "Belize",
  "value": "Belize"
}, {
  "code": "BJ",
  "dial_code": "+229",
  "key": "BJ",
  "text": "Benin",
  "value": "Benin"
}, {
  "code": "BM",
  "dial_code": "+1441",
  "key": "BM",
  "text": "Bermuda",
  "value": "Bermuda"
}, {
  "code": "BT",
  "dial_code": "+975",
  "key": "BT",
  "text": "Bhutan",
  "value": "Bhutan"
}, {
  "code": "BO",
  "dial_code": "+591",
  "key": "BO",
  "text": "Bolivia, Plurinational State of bolivia",
  "value": "Bolivia, Plurinational State of bolivia"
}, {
  "code": "BA",
  "dial_code": "+387",
  "key": "BA",
  "text": "Bosnia and Herzegovina",
  "value": "Bosnia and Herzegovina"
}, {
  "code": "BW",
  "dial_code": "+267",
  "key": "BW",
  "text": "Botswana",
  "value": "Botswana"
}, {
  "code": "BR",
  "dial_code": "+55",
  "key": "BR",
  "text": "Brazil",
  "value": "Brazil"
}, {
  "code": "IO",
  "dial_code": "+246",
  "key": "IO",
  "text": "British Indian Ocean Territory",
  "value": "British Indian Ocean Territory"
}, {
  "code": "BN",
  "dial_code": "+673",
  "key": "BN",
  "text": "Brunei Darussalam",
  "value": "Brunei Darussalam"
}, {
  "code": "BG",
  "dial_code": "+359",
  "key": "BG",
  "text": "Bulgaria",
  "value": "Bulgaria"
}, {
  "code": "BF",
  "dial_code": "+226",
  "key": "BF",
  "text": "Burkina Faso",
  "value": "Burkina Faso"
}, {
  "code": "BI",
  "dial_code": "+257",
  "key": "BI",
  "text": "Burundi",
  "value": "Burundi"
}, {
  "code": "KH",
  "dial_code": "+855",
  "key": "KH",
  "text": "Cambodia",
  "value": "Cambodia"
}, {
  "code": "CM",
  "dial_code": "+237",
  "key": "CM",
  "text": "Cameroon",
  "value": "Cameroon"
}, {
  "code": "CA",
  "dial_code": "+1",
  "key": "CA",
  "text": "Canada",
  "value": "Canada"
}, {
  "code": "CV",
  "dial_code": "+238",
  "key": "CV",
  "text": "Cape Verde",
  "value": "Cape Verde"
}, {
  "code": "KY",
  "dial_code": "+ 345",
  "key": "KY",
  "text": "Cayman Islands",
  "value": "Cayman Islands"
}, {
  "code": "CF",
  "dial_code": "+236",
  "key": "CF",
  "text": "Central African Republic",
  "value": "Central African Republic"
}, {
  "code": "TD",
  "dial_code": "+235",
  "key": "TD",
  "text": "Chad",
  "value": "Chad"
}, {
  "code": "CL",
  "dial_code": "+56",
  "key": "CL",
  "text": "Chile",
  "value": "Chile"
}, {
  "code": "CN",
  "dial_code": "+86",
  "key": "CN",
  "text": "China",
  "value": "China"
}, {
  "code": "CX",
  "dial_code": "+61",
  "key": "CX",
  "text": "Christmas Island",
  "value": "Christmas Island"
}, {
  "code": "CC",
  "dial_code": "+61",
  "key": "CC",
  "text": "Cocos (Keeling) Islands",
  "value": "Cocos (Keeling) Islands"
}, {
  "code": "CO",
  "dial_code": "+57",
  "key": "CO",
  "text": "Colombia",
  "value": "Colombia"
}, {
  "code": "KM",
  "dial_code": "+269",
  "key": "KM",
  "text": "Comoros",
  "value": "Comoros"
}, {
  "code": "CG",
  "dial_code": "+242",
  "key": "CG",
  "text": "Congo",
  "value": "Congo"
}, {
  "code": "CD",
  "dial_code": "+243",
  "key": "CD",
  "text": "Congo, The Democratic Republic of the Congo",
  "value": "Congo, The Democratic Republic of the Congo"
}, {
  "code": "CK",
  "dial_code": "+682",
  "key": "CK",
  "text": "Cook Islands",
  "value": "Cook Islands"
}, {
  "code": "CR",
  "dial_code": "+506",
  "key": "CR",
  "text": "Costa Rica",
  "value": "Costa Rica"
}, {
  "code": "CI",
  "dial_code": "+225",
  "key": "CI",
  "text": "Cote d'Ivoire",
  "value": "Cote d'Ivoire"
}, {
  "code": "HR",
  "dial_code": "+385",
  "key": "HR",
  "text": "Croatia",
  "value": "Croatia"
}, {
  "code": "CU",
  "dial_code": "+53",
  "key": "CU",
  "text": "Cuba",
  "value": "Cuba"
}, {
  "code": "CY",
  "dial_code": "+357",
  "key": "CY",
  "text": "Cyprus",
  "value": "Cyprus"
}, {
  "code": "CZ",
  "dial_code": "+420",
  "key": "CZ",
  "text": "Czech Republic",
  "value": "Czech Republic"
}, {
  "code": "DK",
  "dial_code": "+45",
  "key": "DK",
  "text": "Denmark",
  "value": "Denmark"
}, {
  "code": "DJ",
  "dial_code": "+253",
  "key": "DJ",
  "text": "Djibouti",
  "value": "Djibouti"
}, {
  "code": "DM",
  "dial_code": "+1767",
  "key": "DM",
  "text": "Dominica",
  "value": "Dominica"
}, {
  "code": "DO",
  "dial_code": "+1849",
  "key": "DO",
  "text": "Dominican Republic",
  "value": "Dominican Republic"
}, {
  "code": "EC",
  "dial_code": "+593",
  "key": "EC",
  "text": "Ecuador",
  "value": "Ecuador"
}, {
  "code": "EG",
  "dial_code": "+20",
  "key": "EG",
  "text": "Egypt",
  "value": "Egypt"
}, {
  "code": "SV",
  "dial_code": "+503",
  "key": "SV",
  "text": "El Salvador",
  "value": "El Salvador"
}, {
  "code": "GQ",
  "dial_code": "+240",
  "key": "GQ",
  "text": "Equatorial Guinea",
  "value": "Equatorial Guinea"
}, {
  "code": "ER",
  "dial_code": "+291",
  "key": "ER",
  "text": "Eritrea",
  "value": "Eritrea"
}, {
  "code": "EE",
  "dial_code": "+372",
  "key": "EE",
  "text": "Estonia",
  "value": "Estonia"
}, {
  "code": "ET",
  "dial_code": "+251",
  "key": "ET",
  "text": "Ethiopia",
  "value": "Ethiopia"
}, {
  "code": "FK",
  "dial_code": "+500",
  "key": "FK",
  "text": "Falkland Islands (Malvinas)",
  "value": "Falkland Islands (Malvinas)"
}, {
  "code": "FO",
  "dial_code": "+298",
  "key": "FO",
  "text": "Faroe Islands",
  "value": "Faroe Islands"
}, {
  "code": "FJ",
  "dial_code": "+679",
  "key": "FJ",
  "text": "Fiji",
  "value": "Fiji"
}, {
  "code": "FI",
  "dial_code": "+358",
  "key": "FI",
  "text": "Finland",
  "value": "Finland"
}, {
  "code": "FR",
  "dial_code": "+33",
  "key": "FR",
  "text": "France",
  "value": "France"
}, {
  "code": "GF",
  "dial_code": "+594",
  "key": "GF",
  "text": "French Guiana",
  "value": "French Guiana"
}, {
  "code": "PF",
  "dial_code": "+689",
  "key": "PF",
  "text": "French Polynesia",
  "value": "French Polynesia"
}, {
  "code": "GA",
  "dial_code": "+241",
  "key": "GA",
  "text": "Gabon",
  "value": "Gabon"
}, {
  "code": "GM",
  "dial_code": "+220",
  "key": "GM",
  "text": "Gambia",
  "value": "Gambia"
}, {
  "code": "GE",
  "dial_code": "+995",
  "key": "GE",
  "text": "Georgia",
  "value": "Georgia"
}, {
  "code": "DE",
  "dial_code": "+49",
  "key": "DE",
  "text": "Germany",
  "value": "Germany"
}, {
  "code": "GH",
  "dial_code": "+233",
  "key": "GH",
  "text": "Ghana",
  "value": "Ghana"
}, {
  "code": "GI",
  "dial_code": "+350",
  "key": "GI",
  "text": "Gibraltar",
  "value": "Gibraltar"
}, {
  "code": "GR",
  "dial_code": "+30",
  "key": "GR",
  "text": "Greece",
  "value": "Greece"
}, {
  "code": "GL",
  "dial_code": "+299",
  "key": "GL",
  "text": "Greenland",
  "value": "Greenland"
}, {
  "code": "GD",
  "dial_code": "+1473",
  "key": "GD",
  "text": "Grenada",
  "value": "Grenada"
}, {
  "code": "GP",
  "dial_code": "+590",
  "key": "GP",
  "text": "Guadeloupe",
  "value": "Guadeloupe"
}, {
  "code": "GU",
  "dial_code": "+1671",
  "key": "GU",
  "text": "Guam",
  "value": "Guam"
}, {
  "code": "GT",
  "dial_code": "+502",
  "key": "GT",
  "text": "Guatemala",
  "value": "Guatemala"
}, {
  "code": "GG",
  "dial_code": "+44",
  "key": "GG",
  "text": "Guernsey",
  "value": "Guernsey"
}, {
  "code": "GN",
  "dial_code": "+224",
  "key": "GN",
  "text": "Guinea",
  "value": "Guinea"
}, {
  "code": "GW",
  "dial_code": "+245",
  "key": "GW",
  "text": "Guinea-Bissau",
  "value": "Guinea-Bissau"
}, {
  "code": "GY",
  "dial_code": "+592",
  "key": "GY",
  "text": "Guyana",
  "value": "Guyana"
}, {
  "code": "HT",
  "dial_code": "+509",
  "key": "HT",
  "text": "Haiti",
  "value": "Haiti"
}, {
  "code": "VA",
  "dial_code": "+379",
  "key": "VA",
  "text": "Holy See (Vatican City State)",
  "value": "Holy See (Vatican City State)"
}, {
  "code": "HN",
  "dial_code": "+504",
  "key": "HN",
  "text": "Honduras",
  "value": "Honduras"
}, {
  "code": "HK",
  "dial_code": "+852",
  "key": "HK",
  "text": "Hong Kong",
  "value": "Hong Kong"
}, {
  "code": "HU",
  "dial_code": "+36",
  "key": "HU",
  "text": "Hungary",
  "value": "Hungary"
}, {
  "code": "IS",
  "dial_code": "+354",
  "key": "IS",
  "text": "Iceland",
  "value": "Iceland"
}, {
  "code": "IN",
  "dial_code": "+91",
  "key": "IN",
  "text": "India",
  "value": "India"
}, {
  "code": "ID",
  "dial_code": "+62",
  "key": "ID",
  "text": "Indonesia",
  "value": "Indonesia"
}, {
  "code": "IR",
  "dial_code": "+98",
  "key": "IR",
  "text": "Iran, Islamic Republic of Persian Gulf",
  "value": "Iran, Islamic Republic of Persian Gulf"
}, {
  "code": "IQ",
  "dial_code": "+964",
  "key": "IQ",
  "text": "Iraq",
  "value": "Iraq"
}, {
  "code": "IE",
  "dial_code": "+353",
  "key": "IE",
  "text": "Ireland",
  "value": "Ireland"
}, {
  "code": "IM",
  "dial_code": "+44",
  "key": "IM",
  "text": "Isle of Man",
  "value": "Isle of Man"
}, {
  "code": "IL",
  "dial_code": "+972",
  "key": "IL",
  "text": "Israel",
  "value": "Israel"
}, {
  "code": "IT",
  "dial_code": "+39",
  "key": "IT",
  "text": "Italy",
  "value": "Italy"
}, {
  "code": "JM",
  "dial_code": "+1876",
  "key": "JM",
  "text": "Jamaica",
  "value": "Jamaica"
}, {
  "code": "JP",
  "dial_code": "+81",
  "key": "JP",
  "text": "Japan",
  "value": "Japan"
}, {
  "code": "JE",
  "dial_code": "+44",
  "key": "JE",
  "text": "Jersey",
  "value": "Jersey"
}, {
  "code": "JO",
  "dial_code": "+962",
  "key": "JO",
  "text": "Jordan",
  "value": "Jordan"
}, {
  "code": "KZ",
  "dial_code": "+7",
  "key": "KZ",
  "text": "Kazakhstan",
  "value": "Kazakhstan"
}, {
  "code": "KE",
  "dial_code": "+254",
  "key": "KE",
  "text": "Kenya",
  "value": "Kenya"
}, {
  "code": "KI",
  "dial_code": "+686",
  "key": "KI",
  "text": "Kiribati",
  "value": "Kiribati"
}, {
  "code": "KP",
  "dial_code": "+850",
  "key": "KP",
  "text": "Korea, Democratic People's Republic of Korea",
  "value": "Korea, Democratic People's Republic of Korea"
}, {
  "code": "KR",
  "dial_code": "+82",
  "key": "KR",
  "text": "Korea, Republic of South Korea",
  "value": "Korea, Republic of South Korea"
}, {
  "code": "KW",
  "dial_code": "+965",
  "key": "KW",
  "text": "Kuwait",
  "value": "Kuwait"
}, {
  "code": "KG",
  "dial_code": "+996",
  "key": "KG",
  "text": "Kyrgyzstan",
  "value": "Kyrgyzstan"
}, {
  "code": "LA",
  "dial_code": "+856",
  "key": "LA",
  "text": "Laos",
  "value": "Laos"
}, {
  "code": "LV",
  "dial_code": "+371",
  "key": "LV",
  "text": "Latvia",
  "value": "Latvia"
}, {
  "code": "LB",
  "dial_code": "+961",
  "key": "LB",
  "text": "Lebanon",
  "value": "Lebanon"
}, {
  "code": "LS",
  "dial_code": "+266",
  "key": "LS",
  "text": "Lesotho",
  "value": "Lesotho"
}, {
  "code": "LR",
  "dial_code": "+231",
  "key": "LR",
  "text": "Liberia",
  "value": "Liberia"
}, {
  "code": "LY",
  "dial_code": "+218",
  "key": "LY",
  "text": "Libyan Arab Jamahiriya",
  "value": "Libyan Arab Jamahiriya"
}, {
  "code": "LI",
  "dial_code": "+423",
  "key": "LI",
  "text": "Liechtenstein",
  "value": "Liechtenstein"
}, {
  "code": "LT",
  "dial_code": "+370",
  "key": "LT",
  "text": "Lithuania",
  "value": "Lithuania"
}, {
  "code": "LU",
  "dial_code": "+352",
  "key": "LU",
  "text": "Luxembourg",
  "value": "Luxembourg"
}, {
  "code": "MO",
  "dial_code": "+853",
  "key": "MO",
  "text": "Macao",
  "value": "Macao"
}, {
  "code": "MK",
  "dial_code": "+389",
  "key": "MK",
  "text": "Macedonia",
  "value": "Macedonia"
}, {
  "code": "MG",
  "dial_code": "+261",
  "key": "MG",
  "text": "Madagascar",
  "value": "Madagascar"
}, {
  "code": "MW",
  "dial_code": "+265",
  "key": "MW",
  "text": "Malawi",
  "value": "Malawi"
}, {
  "code": "MY",
  "dial_code": "+60",
  "key": "MY",
  "text": "Malaysia",
  "value": "Malaysia"
}, {
  "code": "MV",
  "dial_code": "+960",
  "key": "MV",
  "text": "Maldives",
  "value": "Maldives"
}, {
  "code": "ML",
  "dial_code": "+223",
  "key": "ML",
  "text": "Mali",
  "value": "Mali"
}, {
  "code": "MT",
  "dial_code": "+356",
  "key": "MT",
  "text": "Malta",
  "value": "Malta"
}, {
  "code": "MH",
  "dial_code": "+692",
  "key": "MH",
  "text": "Marshall Islands",
  "value": "Marshall Islands"
}, {
  "code": "MQ",
  "dial_code": "+596",
  "key": "MQ",
  "text": "Martinique",
  "value": "Martinique"
}, {
  "code": "MR",
  "dial_code": "+222",
  "key": "MR",
  "text": "Mauritania",
  "value": "Mauritania"
}, {
  "code": "MU",
  "dial_code": "+230",
  "key": "MU",
  "text": "Mauritius",
  "value": "Mauritius"
}, {
  "code": "YT",
  "dial_code": "+262",
  "key": "YT",
  "text": "Mayotte",
  "value": "Mayotte"
}, {
  "code": "MX",
  "dial_code": "+52",
  "key": "MX",
  "text": "Mexico",
  "value": "Mexico"
}, {
  "code": "FM",
  "dial_code": "+691",
  "key": "FM",
  "text": "Micronesia, Federated States of Micronesia",
  "value": "Micronesia, Federated States of Micronesia"
}, {
  "code": "MD",
  "dial_code": "+373",
  "key": "MD",
  "text": "Moldova",
  "value": "Moldova"
}, {
  "code": "MC",
  "dial_code": "+377",
  "key": "MC",
  "text": "Monaco",
  "value": "Monaco"
}, {
  "code": "MN",
  "dial_code": "+976",
  "key": "MN",
  "text": "Mongolia",
  "value": "Mongolia"
}, {
  "code": "ME",
  "dial_code": "+382",
  "key": "ME",
  "text": "Montenegro",
  "value": "Montenegro"
}, {
  "code": "MS",
  "dial_code": "+1664",
  "key": "MS",
  "text": "Montserrat",
  "value": "Montserrat"
}, {
  "code": "MA",
  "dial_code": "+212",
  "key": "MA",
  "text": "Morocco",
  "value": "Morocco"
}, {
  "code": "MZ",
  "dial_code": "+258",
  "key": "MZ",
  "text": "Mozambique",
  "value": "Mozambique"
}, {
  "code": "MM",
  "dial_code": "+95",
  "key": "MM",
  "text": "Myanmar",
  "value": "Myanmar"
}, {
  "code": "NA",
  "dial_code": "+264",
  "key": "NA",
  "text": "Namibia",
  "value": "Namibia"
}, {
  "code": "NR",
  "dial_code": "+674",
  "key": "NR",
  "text": "Nauru",
  "value": "Nauru"
}, {
  "code": "NP",
  "dial_code": "+977",
  "key": "NP",
  "text": "Nepal",
  "value": "Nepal"
}, {
  "code": "NL",
  "dial_code": "+31",
  "key": "NL",
  "text": "Netherlands",
  "value": "Netherlands"
}, {
  "code": "AN",
  "dial_code": "+599",
  "key": "AN",
  "text": "Netherlands Antilles",
  "value": "Netherlands Antilles"
}, {
  "code": "NC",
  "dial_code": "+687",
  "key": "NC",
  "text": "New Caledonia",
  "value": "New Caledonia"
}, {
  "code": "NZ",
  "dial_code": "+64",
  "key": "NZ",
  "text": "New Zealand",
  "value": "New Zealand"
}, {
  "code": "NI",
  "dial_code": "+505",
  "key": "NI",
  "text": "Nicaragua",
  "value": "Nicaragua"
}, {
  "code": "NE",
  "dial_code": "+227",
  "key": "NE",
  "text": "Niger",
  "value": "Niger"
}, {
  "code": "NG",
  "dial_code": "+234",
  "key": "NG",
  "text": "Nigeria",
  "value": "Nigeria"
}, {
  "code": "NU",
  "dial_code": "+683",
  "key": "NU",
  "text": "Niue",
  "value": "Niue"
}, {
  "code": "NF",
  "dial_code": "+672",
  "key": "NF",
  "text": "Norfolk Island",
  "value": "Norfolk Island"
}, {
  "code": "MP",
  "dial_code": "+1670",
  "key": "MP",
  "text": "Northern Mariana Islands",
  "value": "Northern Mariana Islands"
}, {
  "code": "NO",
  "dial_code": "+47",
  "key": "NO",
  "text": "Norway",
  "value": "Norway"
}, {
  "code": "OM",
  "dial_code": "+968",
  "key": "OM",
  "text": "Oman",
  "value": "Oman"
}, {
  "code": "PK",
  "dial_code": "+92",
  "key": "PK",
  "text": "Pakistan",
  "value": "Pakistan"
}, {
  "code": "PW",
  "dial_code": "+680",
  "key": "PW",
  "text": "Palau",
  "value": "Palau"
}, {
  "code": "PS",
  "dial_code": "+970",
  "key": "PS",
  "text": "Palestinian Territory, Occupied",
  "value": "Palestinian Territory, Occupied"
}, {
  "code": "PA",
  "dial_code": "+507",
  "key": "PA",
  "text": "Panama",
  "value": "Panama"
}, {
  "code": "PG",
  "dial_code": "+675",
  "key": "PG",
  "text": "Papua New Guinea",
  "value": "Papua New Guinea"
}, {
  "code": "PY",
  "dial_code": "+595",
  "key": "PY",
  "text": "Paraguay",
  "value": "Paraguay"
}, {
  "code": "PE",
  "dial_code": "+51",
  "key": "PE",
  "text": "Peru",
  "value": "Peru"
}, {
  "code": "PH",
  "dial_code": "+63",
  "key": "PH",
  "text": "Philippines",
  "value": "Philippines"
}, {
  "code": "PN",
  "dial_code": "+64",
  "key": "PN",
  "text": "Pitcairn",
  "value": "Pitcairn"
}, {
  "code": "PL",
  "dial_code": "+48",
  "key": "PL",
  "text": "Poland",
  "value": "Poland"
}, {
  "code": "PT",
  "dial_code": "+351",
  "key": "PT",
  "text": "Portugal",
  "value": "Portugal"
}, {
  "code": "PR",
  "dial_code": "+1939",
  "key": "PR",
  "text": "Puerto Rico",
  "value": "Puerto Rico"
}, {
  "code": "QA",
  "dial_code": "+974",
  "key": "QA",
  "text": "Qatar",
  "value": "Qatar"
}, {
  "code": "RO",
  "dial_code": "+40",
  "key": "RO",
  "text": "Romania",
  "value": "Romania"
}, {
  "code": "RU",
  "dial_code": "+7",
  "key": "RU",
  "text": "Russia",
  "value": "Russia"
}, {
  "code": "RW",
  "dial_code": "+250",
  "key": "RW",
  "text": "Rwanda",
  "value": "Rwanda"
}, {
  "code": "RE",
  "dial_code": "+262",
  "key": "RE",
  "text": "Reunion",
  "value": "Reunion"
}, {
  "code": "BL",
  "dial_code": "+590",
  "key": "BL",
  "text": "Saint Barthelemy",
  "value": "Saint Barthelemy"
}, {
  "code": "SH",
  "dial_code": "+290",
  "key": "SH",
  "text": "Saint Helena, Ascension and Tristan Da Cunha",
  "value": "Saint Helena, Ascension and Tristan Da Cunha"
}, {
  "code": "KN",
  "dial_code": "+1869",
  "key": "KN",
  "text": "Saint Kitts and Nevis",
  "value": "Saint Kitts and Nevis"
}, {
  "code": "LC",
  "dial_code": "+1758",
  "key": "LC",
  "text": "Saint Lucia",
  "value": "Saint Lucia"
}, {
  "code": "MF",
  "dial_code": "+590",
  "key": "MF",
  "text": "Saint Martin",
  "value": "Saint Martin"
}, {
  "code": "PM",
  "dial_code": "+508",
  "key": "PM",
  "text": "Saint Pierre and Miquelon",
  "value": "Saint Pierre and Miquelon"
}, {
  "code": "VC",
  "dial_code": "+1784",
  "key": "VC",
  "text": "Saint Vincent and the Grenadines",
  "value": "Saint Vincent and the Grenadines"
}, {
  "code": "WS",
  "dial_code": "+685",
  "key": "WS",
  "text": "Samoa",
  "value": "Samoa"
}, {
  "code": "SM",
  "dial_code": "+378",
  "key": "SM",
  "text": "San Marino",
  "value": "San Marino"
}, {
  "code": "ST",
  "dial_code": "+239",
  "key": "ST",
  "text": "Sao Tome and Principe",
  "value": "Sao Tome and Principe"
}, {
  "code": "SA",
  "dial_code": "+966",
  "key": "SA",
  "text": "Saudi Arabia",
  "value": "Saudi Arabia"
}, {
  "code": "SN",
  "dial_code": "+221",
  "key": "SN",
  "text": "Senegal",
  "value": "Senegal"
}, {
  "code": "RS",
  "dial_code": "+381",
  "key": "RS",
  "text": "Serbia",
  "value": "Serbia"
}, {
  "code": "SC",
  "dial_code": "+248",
  "key": "SC",
  "text": "Seychelles",
  "value": "Seychelles"
}, {
  "code": "SL",
  "dial_code": "+232",
  "key": "SL",
  "text": "Sierra Leone",
  "value": "Sierra Leone"
}, {
  "code": "SG",
  "dial_code": "+65",
  "key": "SG",
  "text": "Singapore",
  "value": "Singapore"
}, {
  "code": "SK",
  "dial_code": "+421",
  "key": "SK",
  "text": "Slovakia",
  "value": "Slovakia"
}, {
  "code": "SI",
  "dial_code": "+386",
  "key": "SI",
  "text": "Slovenia",
  "value": "Slovenia"
}, {
  "code": "SB",
  "dial_code": "+677",
  "key": "SB",
  "text": "Solomon Islands",
  "value": "Solomon Islands"
}, {
  "code": "SO",
  "dial_code": "+252",
  "key": "SO",
  "text": "Somalia",
  "value": "Somalia"
}, {
  "code": "ZA",
  "dial_code": "+27",
  "key": "ZA",
  "text": "South Africa",
  "value": "South Africa"
}, {
  "code": "SS",
  "dial_code": "+211",
  "key": "SS",
  "text": "South Sudan",
  "value": "South Sudan"
}, {
  "code": "GS",
  "dial_code": "+500",
  "key": "GS",
  "text": "South Georgia and the South Sandwich Islands",
  "value": "South Georgia and the South Sandwich Islands"
}, {
  "code": "ES",
  "dial_code": "+34",
  "key": "ES",
  "text": "Spain",
  "value": "Spain"
}, {
  "code": "LK",
  "dial_code": "+94",
  "key": "LK",
  "text": "Sri Lanka",
  "value": "Sri Lanka"
}, {
  "code": "SD",
  "dial_code": "+249",
  "key": "SD",
  "text": "Sudan",
  "value": "Sudan"
}, {
  "code": "SR",
  "dial_code": "+597",
  "key": "SR",
  "text": "Suriname",
  "value": "Suriname"
}, {
  "code": "SJ",
  "dial_code": "+47",
  "key": "SJ",
  "text": "Svalbard and Jan Mayen",
  "value": "Svalbard and Jan Mayen"
}, {
  "code": "SZ",
  "dial_code": "+268",
  "key": "SZ",
  "text": "Swaziland",
  "value": "Swaziland"
}, {
  "code": "SE",
  "dial_code": "+46",
  "key": "SE",
  "text": "Sweden",
  "value": "Sweden"
}, {
  "code": "CH",
  "dial_code": "+41",
  "key": "CH",
  "text": "Switzerland",
  "value": "Switzerland"
}, {
  "code": "SY",
  "dial_code": "+963",
  "key": "SY",
  "text": "Syrian Arab Republic",
  "value": "Syrian Arab Republic"
}, {
  "code": "TW",
  "dial_code": "+886",
  "key": "TW",
  "text": "Taiwan",
  "value": "Taiwan"
}, {
  "code": "TJ",
  "dial_code": "+992",
  "key": "TJ",
  "text": "Tajikistan",
  "value": "Tajikistan"
}, {
  "code": "TZ",
  "dial_code": "+255",
  "key": "TZ",
  "text": "Tanzania, United Republic of Tanzania",
  "value": "Tanzania, United Republic of Tanzania"
}, {
  "code": "TH",
  "dial_code": "+66",
  "key": "TH",
  "text": "Thailand",
  "value": "Thailand"
}, {
  "code": "TL",
  "dial_code": "+670",
  "key": "TL",
  "text": "Timor-Leste",
  "value": "Timor-Leste"
}, {
  "code": "TG",
  "dial_code": "+228",
  "key": "TG",
  "text": "Togo",
  "value": "Togo"
}, {
  "code": "TK",
  "dial_code": "+690",
  "key": "TK",
  "text": "Tokelau",
  "value": "Tokelau"
}, {
  "code": "TO",
  "dial_code": "+676",
  "key": "TO",
  "text": "Tonga",
  "value": "Tonga"
}, {
  "code": "TT",
  "dial_code": "+1868",
  "key": "TT",
  "text": "Trinidad and Tobago",
  "value": "Trinidad and Tobago"
}, {
  "code": "TN",
  "dial_code": "+216",
  "key": "TN",
  "text": "Tunisia",
  "value": "Tunisia"
}, {
  "code": "TR",
  "dial_code": "+90",
  "key": "TR",
  "text": "Turkey",
  "value": "Turkey"
}, {
  "code": "TM",
  "dial_code": "+993",
  "key": "TM",
  "text": "Turkmenistan",
  "value": "Turkmenistan"
}, {
  "code": "TC",
  "dial_code": "+1649",
  "key": "TC",
  "text": "Turks and Caicos Islands",
  "value": "Turks and Caicos Islands"
}, {
  "code": "TV",
  "dial_code": "+688",
  "key": "TV",
  "text": "Tuvalu",
  "value": "Tuvalu"
}, {
  "code": "UG",
  "dial_code": "+256",
  "key": "UG",
  "text": "Uganda",
  "value": "Uganda"
}, {
  "code": "UA",
  "dial_code": "+380",
  "key": "UA",
  "text": "Ukraine",
  "value": "Ukraine"
}, {
  "code": "AE",
  "dial_code": "+971",
  "key": "AE",
  "text": "United Arab Emirates",
  "value": "United Arab Emirates"
}, {
  "code": "GB",
  "dial_code": "+44",
  "key": "GB",
  "text": "United Kingdom",
  "value": "United Kingdom"
}, {
  "code": "US",
  "dial_code": "+1",
  "key": "US",
  "text": "United States",
  "value": "United States"
}, {
  "code": "UY",
  "dial_code": "+598",
  "key": "UY",
  "text": "Uruguay",
  "value": "Uruguay"
}, {
  "code": "UZ",
  "dial_code": "+998",
  "key": "UZ",
  "text": "Uzbekistan",
  "value": "Uzbekistan"
}, {
  "code": "VU",
  "dial_code": "+678",
  "key": "VU",
  "text": "Vanuatu",
  "value": "Vanuatu"
}, {
  "code": "VE",
  "dial_code": "+58",
  "key": "VE",
  "text": "Venezuela, Bolivarian Republic of Venezuela",
  "value": "Venezuela, Bolivarian Republic of Venezuela"
}, {
  "code": "VN",
  "dial_code": "+84",
  "key": "VN",
  "text": "Vietnam",
  "value": "Vietnam"
}, {
  "code": "VG",
  "dial_code": "+1284",
  "key": "VG",
  "text": "Virgin Islands, British",
  "value": "Virgin Islands, British"
}, {
  "code": "VI",
  "dial_code": "+1340",
  "key": "VI",
  "text": "Virgin Islands, U.S.",
  "value": "Virgin Islands, U.S."
}, {
  "code": "WF",
  "dial_code": "+681",
  "key": "WF",
  "text": "Wallis and Futuna",
  "value": "Wallis and Futuna"
}, {
  "code": "YE",
  "dial_code": "+967",
  "key": "YE",
  "text": "Yemen",
  "value": "Yemen"
}, {
  "code": "ZM",
  "dial_code": "+260",
  "key": "ZM",
  "text": "Zambia",
  "value": "Zambia"
}, {
  "code": "ZW",
  "dial_code": "+263",
  "key": "ZW",
  "text": "Zimbabwe",
  "value": "Zimbabwe"
}];

/***/ }),

/***/ "./constants/dialog.constants.js":
/*!***************************************!*\
  !*** ./constants/dialog.constants.js ***!
  \***************************************/
/*! exports provided: dialogConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dialogConstants", function() { return dialogConstants; });
const dialogConstants = {
  OPEN: 'DIALOG_OPEN',
  CLEAR: 'DIALOG_CLOSE'
};

/***/ }),

/***/ "./constants/drawer.constants.js":
/*!***************************************!*\
  !*** ./constants/drawer.constants.js ***!
  \***************************************/
/*! exports provided: drawerConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawerConstants", function() { return drawerConstants; });
const drawerConstants = {
  UPDATE: 'DRW_ERROR',
  CLEAR: 'DRW_CLEAR',
  OPEN: 'DRW_OPEN',
  CLOSE: 'DRW_CLOSE'
};

/***/ }),

/***/ "./constants/global.constants.js":
/*!***************************************!*\
  !*** ./constants/global.constants.js ***!
  \***************************************/
/*! exports provided: COMPANY_NAME, COMPANY_NAME_SMALL, WEBSITE_URL, BACKEND_URL, SUPPORT_EMAIL, COLOR_1, COLOR_2, COLOR_3, COLOR_4, FONT_1, FONT_2, FONT_3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPANY_NAME", function() { return COMPANY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPANY_NAME_SMALL", function() { return COMPANY_NAME_SMALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBSITE_URL", function() { return WEBSITE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKEND_URL", function() { return BACKEND_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_EMAIL", function() { return SUPPORT_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_1", function() { return COLOR_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_2", function() { return COLOR_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_3", function() { return COLOR_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_4", function() { return COLOR_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_1", function() { return FONT_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_2", function() { return FONT_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_3", function() { return FONT_3; });
const COMPANY_NAME = "HYPERWEB AI";
const COMPANY_NAME_SMALL = "Hyperweb AI";
const WEBSITE_URL = "https://hyperweb.ai";
const BACKEND_URL = "https://api.hyperweb.ai/v1/";
const SUPPORT_EMAIL = "editor@sae.news";
const COLOR_1 = '#142850';
const COLOR_2 = '#27496d';
const COLOR_3 = '#0c7b93';
const COLOR_4 = '#00a8cc';
const FONT_1 = "'Anton', sans-serif";
const FONT_2 = "'Fjalla One', sans-serif";
const FONT_3 = "'Patua One', cursive";

/***/ }),

/***/ "./constants/icons.constants.js":
/*!**************************************!*\
  !*** ./constants/icons.constants.js ***!
  \**************************************/
/*! exports provided: LOGO, LOGO_SMALL, ErrorIcon, NOT_FOUND_ICON, VERIFY_EMAIL_ICON, MENTOR_ICON, STARTUP_ICON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGO", function() { return LOGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGO_SMALL", function() { return LOGO_SMALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorIcon", function() { return ErrorIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT_FOUND_ICON", function() { return NOT_FOUND_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_EMAIL_ICON", function() { return VERIFY_EMAIL_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENTOR_ICON", function() { return MENTOR_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STARTUP_ICON", function() { return STARTUP_ICON; });
const LOGO = '/static/images/1.png';
const LOGO_SMALL = '/static/images/1.png'; //  'https://s3.ap-south-1.amazonaws.com/defstart.dev/static/logos/defstart_logo_small.png';

const ErrorIcon = '/static/icons/error_exclamation.png';
const NOT_FOUND_ICON = '/static/icons/404.png';
const VERIFY_EMAIL_ICON = '/static/icons/email.png';
const MENTOR_ICON = '/static/icons/teacher.png';
const STARTUP_ICON = '/static/icons/reocket.png';

/***/ }),

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/*! exports provided: COMPANY_NAME, COMPANY_NAME_SMALL, WEBSITE_URL, BACKEND_URL, SUPPORT_EMAIL, COLOR_1, COLOR_2, COLOR_3, COLOR_4, FONT_1, FONT_2, FONT_3, userConstants, alertConstants, dialogConstants, drawerConstants, countryCodeOptions, MonthNames, NumberRegex, orgConstants, productConstants, mentorConstants, LOGO, LOGO_SMALL, ErrorIcon, NOT_FOUND_ICON, VERIFY_EMAIL_ICON, MENTOR_ICON, STARTUP_ICON, registerOrgConstants, majorCategoryChoices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.constants */ "./constants/global.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMPANY_NAME", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["COMPANY_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMPANY_NAME_SMALL", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["COMPANY_NAME_SMALL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WEBSITE_URL", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["WEBSITE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BACKEND_URL", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_EMAIL", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["SUPPORT_EMAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLOR_1", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR_1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLOR_2", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR_2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLOR_3", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR_3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLOR_4", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR_4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FONT_1", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["FONT_1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FONT_2", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["FONT_2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FONT_3", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["FONT_3"]; });

/* harmony import */ var _user_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.constants */ "./constants/user.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userConstants", function() { return _user_constants__WEBPACK_IMPORTED_MODULE_1__["userConstants"]; });

/* harmony import */ var _alert_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.constants */ "./constants/alert.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alertConstants", function() { return _alert_constants__WEBPACK_IMPORTED_MODULE_2__["alertConstants"]; });

/* harmony import */ var _dialog_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog.constants */ "./constants/dialog.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dialogConstants", function() { return _dialog_constants__WEBPACK_IMPORTED_MODULE_3__["dialogConstants"]; });

/* harmony import */ var _drawer_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawer.constants */ "./constants/drawer.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drawerConstants", function() { return _drawer_constants__WEBPACK_IMPORTED_MODULE_4__["drawerConstants"]; });

/* harmony import */ var _countrycode_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./countrycode.constants */ "./constants/countrycode.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countryCodeOptions", function() { return _countrycode_constants__WEBPACK_IMPORTED_MODULE_5__["countryCodeOptions"]; });

/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common.constants */ "./constants/common.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthNames", function() { return _common_constants__WEBPACK_IMPORTED_MODULE_6__["MonthNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberRegex", function() { return _common_constants__WEBPACK_IMPORTED_MODULE_6__["NumberRegex"]; });

/* harmony import */ var _organisation_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organisation.constants */ "./constants/organisation.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orgConstants", function() { return _organisation_constants__WEBPACK_IMPORTED_MODULE_7__["orgConstants"]; });

/* harmony import */ var _product_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product.constants */ "./constants/product.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "productConstants", function() { return _product_constants__WEBPACK_IMPORTED_MODULE_8__["productConstants"]; });

/* harmony import */ var _mentor_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mentor.constants */ "./constants/mentor.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mentorConstants", function() { return _mentor_constants__WEBPACK_IMPORTED_MODULE_9__["mentorConstants"]; });

/* harmony import */ var _icons_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons.constants */ "./constants/icons.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGO", function() { return _icons_constants__WEBPACK_IMPORTED_MODULE_10__["LOGO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGO_SMALL", function() { return _icons_constants__WEBPACK_IMPORTED_MODULE_10__["LOGO_SMALL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorIcon", function() { return _icons_constants__WEBPACK_IMPORTED_MODULE_10__["ErrorIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOT_FOUND_ICON", function() { return _icons_constants__WEBPACK_IMPORTED_MODULE_10__["NOT_FOUND_ICON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERIFY_EMAIL_ICON", function() { return _icons_constants__WEBPACK_IMPORTED_MODULE_10__["VERIFY_EMAIL_ICON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MENTOR_ICON", function() { return _icons_constants__WEBPACK_IMPORTED_MODULE_10__["MENTOR_ICON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STARTUP_ICON", function() { return _icons_constants__WEBPACK_IMPORTED_MODULE_10__["STARTUP_ICON"]; });

/* harmony import */ var _registerorg_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./registerorg.constants */ "./constants/registerorg.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerOrgConstants", function() { return _registerorg_constants__WEBPACK_IMPORTED_MODULE_11__["registerOrgConstants"]; });

/* harmony import */ var _academic_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./academic.constants */ "./constants/academic.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "majorCategoryChoices", function() { return _academic_constants__WEBPACK_IMPORTED_MODULE_12__["majorCategoryChoices"]; });















/***/ }),

/***/ "./constants/mentor.constants.js":
/*!***************************************!*\
  !*** ./constants/mentor.constants.js ***!
  \***************************************/
/*! exports provided: mentorConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mentorConstants", function() { return mentorConstants; });
const mentorConstants = {
  REGISTER_REQUEST: 'MEN_REGISTER_REQUEST',
  REGISTER_SUCCESS: 'MEN_REGISTER_SUCCESS',
  REGISTER_FAILURE: 'MEN_REGISTER_FAILURE',
  REGISTER_REFRESH: 'MEN_REGISTER_REFRESH',
  EDITOR_UPDATE: 'MEN_EDITOR_UPDATE',
  FETCH_REQUEST: 'MEN_FETCH_REQUEST',
  FETCH_SUCCESS: 'MEN_FETCH_SUCCESS',
  FETCH_FAILURE: 'MEN_FETCH_FAILURE',
  FETCH_REFRESH: 'MEN_FETCH_REFRESH',
  DELETE_REQUEST: 'MEN_DELETE_REQUEST',
  DELETE_SUCCESS: 'MEN_DELETE_SUCCESS',
  DELETE_FAILURE: 'MEN_DELETE_FAILURE',
  ALERT_UPDATE: 'MEN_ALERT_UPDATE'
};

/***/ }),

/***/ "./constants/organisation.constants.js":
/*!*********************************************!*\
  !*** ./constants/organisation.constants.js ***!
  \*********************************************/
/*! exports provided: orgConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orgConstants", function() { return orgConstants; });
const orgConstants = {
  REGISTER_REQUEST: 'ORG_REGISTER_REQUEST',
  REGISTER_SUCCESS: 'ORG_REGISTER_SUCCESS',
  REGISTER_FAILURE: 'ORG_REGISTER_FAILURE',
  GET_REQUEST: 'ORG_GET_REQUEST',
  GET_SUCCESS: 'ORG_GET_SUCCESS',
  GET_FAILURE: 'ORG_GET_FAILURE',
  SET_ORG: 'ORG_SET',
  SET_ACTIVE: 'ORG_SET_ACTIVE_ITEM',
  SET_ID: 'ORG_SET_ID',
  DELETE_REQUEST: 'ORG_DELETE_REQUEST',
  DELETE_SUCCESS: 'ORG_DELETE_SUCCESS',
  DELETE_FAILURE: 'ORG_DELETE_FAILURE',
  FETCH_ADMIN_REQUEST: 'ORG_FETCH_ADMIN_REQUEST',
  FETCH_ADMIN_SUCCESS: 'ORG_FETCH_ADMIN_SUCCESS',
  FETCH_ADMIN_FAILURE: 'ORG_FETCH_ADMIN_FAILURE',
  ADD_ADMIN_REQUEST: 'ORG_ADD_ADMIN_REQUEST',
  ADD_ADMIN_SUCCESS: 'ORG_ADD_ADMIN_SUCCESS',
  ADD_ADMIN_FAILURE: 'ORG_ADD_ADMIN_FAILURE',
  DELETE_ADMIN_REQUEST: 'ORG_DELETE_ADMIN_REQUEST',
  DELETE_ADMIN_SUCCESS: 'ORG_DELETE_ADMIN_SUCCESS',
  DELETE_ADMIN_FAILURE: 'ORG_DELETE_ADMIN_FAILURE'
};

/***/ }),

/***/ "./constants/product.constants.js":
/*!****************************************!*\
  !*** ./constants/product.constants.js ***!
  \****************************************/
/*! exports provided: productConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productConstants", function() { return productConstants; });
const productConstants = {
  REGISTER_REQUEST: 'PRO_REGISTER_REQUEST',
  REGISTER_SUCCESS: 'PRO_REGISTER_SUCCESS',
  REGISTER_FAILURE: 'PRO_REGISTER_FAILURE',
  REGISTER_REFRESH: 'PRO_REGISTER_REFRESH',
  EDITOR_UPDATE: 'PRO_EDITOR_UPDATE',
  GET_REQUEST: 'PRO_GET_REQUEST',
  GET_FAILURE: 'PRO_GET_FAILURE',
  GET_SUCCESS: 'PRO_GET_SUCCESS',
  FETCH_REQUEST: 'PRO_FETCH_REQUEST',
  FETCH_SUCCESS: 'PRO_FETCH_SUCCESS',
  FETCH_FAILURE: 'PRO_FETCH_FAILURE',
  FETCH_REFRESH: 'PRO_FETCH_REFRESH',
  DELETE_REQUEST: 'PRO_DELETE_REQUEST',
  DELETE_SUCCESS: 'PRO_DELETE_SUCCESS',
  DELETE_FAILURE: 'PRO_DELETE_FAILURE',
  ALERT_UPDATE: 'PRO_ALERT_UPDATE'
};

/***/ }),

/***/ "./constants/registerorg.constants.js":
/*!********************************************!*\
  !*** ./constants/registerorg.constants.js ***!
  \********************************************/
/*! exports provided: registerOrgConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerOrgConstants", function() { return registerOrgConstants; });
const registerOrgConstants = {
  REGISTER_REQUEST: 'RORG_REGISTER_REQUEST',
  REGISTER_SUCCESS: 'RORG_REGISTER_SUCCESS',
  REGISTER_FAILURE: 'RORG_REGISTER_FAILURE',
  REGISTER_RESET: 'RORG_REGISTER_RESET',
  INCREASE_STEP: 'RORG_INCREASE_STEP',
  DECREASE_STEP: 'RORG_DECREASE_STEP',
  UPDATE_BASIC: 'RORG_UPDATE_BASIC',
  UPDATE_CONTACT: 'RORG_UPDATE_CONTACT',
  UPDATE_LOGO: 'RORG_UPDATE_LOGO',
  UPDATE_INFO: 'RORG_UPDATE_INFO',
  UPDATE_TAGS: 'RORG_UPDATE_TAGS'
};

/***/ }),

/***/ "./constants/user.constants.js":
/*!*************************************!*\
  !*** ./constants/user.constants.js ***!
  \*************************************/
/*! exports provided: userConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userConstants", function() { return userConstants; });
const userConstants = {
  LOAD_DATA: 'USER_LOAD_DATA',
  REGISTER_REQUEST: 'USER_REGISTER_REQUEST',
  REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
  REGISTER_FAILURE: 'USER_REGISTER_FAILURE',
  LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USER_LOGIN_FAILURE',
  GET_REQUEST: 'USER_GET_REQUEST',
  GET_SUCCESS: 'USER_GET_SUCCESS',
  GET_FAILURE: 'USER_GET_FAILURE',
  PATCH_REQUEST: 'USER_PATCH_REQUEST',
  PATCH_SUCCESS: 'USER_PATCH_SUCCESS',
  PATCH_FAILURE: 'USER_PATCH_FAILURE',
  BIO_REQUEST: 'USER_BIO_REQUEST',
  BIO_SUCCESS: 'USER_BIO_SUCCESS',
  BIO_FAILURE: 'USER_BIO_FAILURE',
  BIO_PUT_REQUEST: 'USER_BIO_PUT_REQUEST',
  BIO_PUT_SUCCESS: 'USER_BIO_PUT_SUCCESS',
  BIO_PUT_FAILURE: 'USER_BIO_PUT_FAILURE',
  BIO_UPDATE_REQUEST: 'USER_BIO_UPDATE_REQUEST',
  BIO_UPDATE_SUCCESS: 'USER_BIO_UPDATE_SUCCESS',
  BIO_UPDATE_FAILURE: 'USER_BIO_UPDATE_FAILURE',
  MODAL_CLEAR: 'USER_MODAL_CLEAR',
  MODAL_OPEN: 'USER_MODAL_CLEAR',
  OE_GET_REQUEST: 'USER_OE_GET_REQUEST',
  OE_GET_SUCCESS: 'USER_OE_GET_SUCCESS',
  OE_GET_FAILURE: 'USER_OE_GET_FAILURE',
  AC_GET_REQUEST: 'USER_AC_GET_REQUEST',
  AC_GET_SUCCESS: 'USER_AC_GET_SUCCESS',
  AC_GET_FAILURE: 'USER_AC_GET_FAILURE',
  LOGOUT: 'USER_LOGOUT'
};
const userGenderChoices = [{
  key: 'M',
  text: 'Male',
  value: 'Male'
}, {
  key: 'F',
  text: 'Female',
  value: 'Female'
}, {
  key: 'O',
  text: 'Other',
  value: 'Other'
}];

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/footer.js":
/*!*************************!*\
  !*** ./pages/footer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/pai/zz/DEF/PROJS/HYPERWEB/pages/footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Copyright() {
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, 'Copyright © ', __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    color: "inherit",
    href: "https://hyperweb.ai",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Hyperweb Media Private Limited"), ' ', new Date().getFullYear(), '.');
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: 'wrap'
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200]
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}));
const footers = [{
  title: 'Company',
  description: [{
    'title': 'Team',
    'url': '/team'
  }, {
    'title': 'History',
    'url': '/history'
  }, {
    'title': 'Contact Us',
    'url': '/contactus'
  }, {
    'title': 'Locations',
    'url': '/locations'
  }]
}, {
  title: 'Features',
  description: [{
    'title': 'Latest Updates',
    'url': '/team'
  }, {
    'title': 'Random feature',
    'url': '/history'
  }, {
    'title': 'Team feature',
    'url': '/contactus'
  }, {
    'title': 'Developers',
    'url': '/locations'
  }]
}, {
  title: 'Resources',
  description: [{
    'title': 'Resource',
    'url': '/team'
  }, {
    'title': 'Resource name',
    'url': '/history'
  }, {
    'title': 'Another resource',
    'url': '/contactus'
  }, {
    'title': 'Final resource',
    'url': '/locations'
  }]
}, {
  title: 'Legal',
  description: [{
    'title': 'Privacy policy',
    'url': '/privacy'
  }, {
    'title': 'Terms of use',
    'url': '/terms'
  }]
}];
function Footer() {
  const classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6___default.a, {
    maxWidth: "md",
    component: "footer",
    className: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 4,
    justify: "space-evenly",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, footers.map(footer => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 6,
    sm: 3,
    key: footer.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h6",
    color: "textPrimary",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, footer.title), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, footer.description.map(item => __jsx("li", {
    key: item.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: item.url,
    variant: "subtitle1",
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, item.title))))))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default.a, {
    mt: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx(Copyright, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./pages/grid1.js":
/*!************************!*\
  !*** ./pages/grid1.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridPage; });
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_comps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/comps */ "./components/comps.js");
var _jsxFileName = "/home/pai/zz/DEF/PROJS/HYPERWEB/pages/grid1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;








function GridPage() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
    container: true,
    spacing: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    style: {
      margin: '50px 0px 50px 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, " ")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    elevation: 0,
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("img", {
    src: "/brand2.jpeg",
    style: {
      borderRadius: '1px',
      width: '90%',
      margin: '2px auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    style: {
      textAlign: 'center',
      verticalAlign: 'middle',
      lineHeight: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_components_comps__WEBPACK_IMPORTED_MODULE_7__["Title3"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "BUILD YOUR BRAND")), __jsx(_components_comps__WEBPACK_IMPORTED_MODULE_7__["Divider2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_components_comps__WEBPACK_IMPORTED_MODULE_7__["Para3"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Build your brand by advertising on the Hyperweb Ad Network. Publish your ads on The South Asian Express, Awakened Indian and Hyperweb AI. ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/grow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Read More"))), __jsx(_components_comps__WEBPACK_IMPORTED_MODULE_7__["Divider2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_components_comps__WEBPACK_IMPORTED_MODULE_7__["Para3"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Claim your $200 ad credits now!")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    style: {
      margin: '50px 0px 50px 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, " ")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
    item: true,
    xs: 12,
    sm: 5,
    style: {
      textAlign: 'center',
      verticalAlign: 'middle',
      lineHeight: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_components_comps__WEBPACK_IMPORTED_MODULE_7__["Title3"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "GROW YOUR ONLINE PRESENCE")), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_components_comps__WEBPACK_IMPORTED_MODULE_7__["Para3"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Build blazing fast websites with advanced tools of Hyperweb AI. Stand out of the crowd and stand up in the search engine ranking with the next generation web-dev technologies. ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/build",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Read More"))), __jsx(_components_comps__WEBPACK_IMPORTED_MODULE_7__["Divider2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_components_comps__WEBPACK_IMPORTED_MODULE_7__["Para3"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Start Building your website for FREE!")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
    item: true,
    xs: 12,
    sm: 7,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    elevation: 0,
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("img", {
    src: "/speed1.jpeg",
    style: {
      borderRadius: '1px',
      width: '90%',
      margin: '2px auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    style: {
      margin: '50px 0px 50px 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, " ")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    elevation: 0,
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("img", {
    src: "/it.jpg",
    style: {
      borderRadius: '1px',
      width: '90%',
      margin: '2px auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    style: {
      textAlign: 'center',
      verticalAlign: 'middle',
      lineHeight: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_components_comps__WEBPACK_IMPORTED_MODULE_7__["Title3"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "CONTRIBUTE TO OPENSOURCE SOFTWARES")), __jsx(_components_comps__WEBPACK_IMPORTED_MODULE_7__["Divider2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_components_comps__WEBPACK_IMPORTED_MODULE_7__["Para3"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, " Work on Open-source softwares that are used by thousands of users worldwide. Intern at Hyperweb AI. Learn, Build, contribute and have fun building latest and the best technology that change the world. ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/opensource",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Read More"), " ")), __jsx(_components_comps__WEBPACK_IMPORTED_MODULE_7__["Divider2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/intern",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(_components_comps__WEBPACK_IMPORTED_MODULE_7__["Para3"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Apply for Internship!"))))), "=", __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    style: {
      margin: '50px 0px 50px 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, " ")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
    item: true,
    xs: 12,
    sm: 5,
    style: {
      textAlign: 'center',
      verticalAlign: 'middle',
      lineHeight: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_components_comps__WEBPACK_IMPORTED_MODULE_7__["Title3"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "JOIN THE COMMUNITY")), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_components_comps__WEBPACK_IMPORTED_MODULE_7__["Para3"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Join the Hyperweb AI community in developing impactful technologies that change the world.", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/slack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Read More")), "  "), __jsx(_components_comps__WEBPACK_IMPORTED_MODULE_7__["Divider2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_components_comps__WEBPACK_IMPORTED_MODULE_7__["Para3"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, " Join the Slack group Now!"))), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    elevation: 0,
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_components_comps__WEBPACK_IMPORTED_MODULE_7__["Para3"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Not on Slack? Join using ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/whatsapp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Whatsapp!")), "  ")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    elevation: 0,
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("img", {
    src: "/ai4all.jpg",
    style: {
      borderRadius: '1px',
      width: '100%',
      margin: '2px auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("div", {
    style: {
      margin: '50px 0px 50px 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, " "))));
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_nav2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav2 */ "./components/nav2.js");
/* harmony import */ var _grid1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid1 */ "./pages/grid1.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./pages/footer.js");
var _jsxFileName = "/home/pai/zz/DEF/PROJS/HYPERWEB/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




{
  /* <style>
  @import url('https://fonts.googleapis.com/css?family=Anton|Fjalla+One|Patua+One&display=swap');
  </style> 
  font-family: 'Anton', sans-serif;
  font-family: 'Fjalla One', sans-serif;
  font-family: 'Patua One', cursive;
  */
}
function App() {
  var thisIsMyCopy = '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZS3O0OOn0a0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  var thisIsMyCopy2 = '<!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=UA-127071484-15"></script>';
  var thisIsMyCopy3 = "<script>  window.dataLayer = window.dataLayer || [];  function gtag(){dataLayer.push(arguments);}  gtag('js', new Date());  gtag('config', 'UA-127071484-15');</script>";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "content",
    dangerouslySetInnerHTML: {
      __html: thisIsMyCopy2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("div", {
    className: "content",
    dangerouslySetInnerHTML: {
      __html: thisIsMyCopy3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
    maxWidth: "xl",
    style: {
      margin: '20px 20px 20px 20px auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_components_nav2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_grid1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pai/zz/DEF/PROJS/HYPERWEB/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/MoveToInbox":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MoveToInbox" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoveToInbox");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

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

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map