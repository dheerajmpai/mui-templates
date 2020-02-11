webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DesktopHeader; });
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
var _jsxFileName = "/home/pai/zz/DEF/PROJS/HYPERWEB/components/nav.js";
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
});
function DesktopHeader() {
  var classes = useStyles(); //  const { sections, title } = props;

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
  var title = 'News Now';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
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
      lineNumber: 49
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
      lineNumber: 50
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, "  Subscribe")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, title), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, "Sign up")))), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "nav",
    variant: "dense",
    className: classes.toolbarSecondary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, sections.map(function (section) {
    return __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    }, section.title)));
  }))));
}
DesktopHeader.propTypes = {
  sections: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

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
var majorCategoryChoices = [{
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
var alertConstants = {
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
var MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var NumberRegex = /^[0-9\b]+$/;

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
var countryCodeOptions = [{
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
var dialogConstants = {
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
var drawerConstants = {
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
/*! exports provided: COMPANY_NAME, WEBSITE_URL, BACKEND_URL, SUPPORT_EMAIL, COLOR_1, COLOR_2, COLOR_3, COLOR_4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPANY_NAME", function() { return COMPANY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBSITE_URL", function() { return WEBSITE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKEND_URL", function() { return BACKEND_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_EMAIL", function() { return SUPPORT_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_1", function() { return COLOR_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_2", function() { return COLOR_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_3", function() { return COLOR_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_4", function() { return COLOR_4; });
var COMPANY_NAME = "Hyperweb AI";
var WEBSITE_URL = "https://hyperweb.ai";
var BACKEND_URL = "https://api.hyperweb.ai/v1/";
var SUPPORT_EMAIL = "editor@sae.news";
var COLOR_1 = '#142850';
var COLOR_2 = '#27496d';
var COLOR_3 = '#0c7b93';
var COLOR_4 = '#00a8cc';

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
var LOGO = '/static/images/1.png';
var LOGO_SMALL = '/static/images/1.png'; //  'https://s3.ap-south-1.amazonaws.com/defstart.dev/static/logos/defstart_logo_small.png';

var ErrorIcon = '/static/icons/error_exclamation.png';
var NOT_FOUND_ICON = '/static/icons/404.png';
var VERIFY_EMAIL_ICON = '/static/icons/email.png';
var MENTOR_ICON = '/static/icons/teacher.png';
var STARTUP_ICON = '/static/icons/reocket.png';

/***/ }),

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/*! exports provided: COMPANY_NAME, WEBSITE_URL, BACKEND_URL, SUPPORT_EMAIL, COLOR_1, COLOR_2, COLOR_3, COLOR_4, userConstants, alertConstants, dialogConstants, drawerConstants, countryCodeOptions, MonthNames, NumberRegex, orgConstants, productConstants, mentorConstants, LOGO, LOGO_SMALL, ErrorIcon, NOT_FOUND_ICON, VERIFY_EMAIL_ICON, MENTOR_ICON, STARTUP_ICON, registerOrgConstants, majorCategoryChoices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.constants */ "./constants/global.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMPANY_NAME", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["COMPANY_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WEBSITE_URL", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["WEBSITE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BACKEND_URL", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_EMAIL", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["SUPPORT_EMAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLOR_1", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR_1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLOR_2", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR_2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLOR_3", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR_3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLOR_4", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR_4"]; });

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
var mentorConstants = {
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
var orgConstants = {
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
var productConstants = {
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
var registerOrgConstants = {
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
var userConstants = {
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
var userGenderChoices = [{
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

/***/ })

})
//# sourceMappingURL=index.js.a825dec2a1def7c3cb1d.hot-update.js.map