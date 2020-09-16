webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavBar\", function() { return NavBar; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _utils_isServer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/isServer */ \"./src/utils/isServer.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/facundo/code/reddit/web/src/components/NavBar.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar NavBar = function NavBar(_ref) {\n  _s();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  var _useLogoutMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__[\"useLogoutMutation\"])(),\n      _useLogoutMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useLogoutMutation, 2),\n      logoutFetching = _useLogoutMutation2[0].fetching,\n      logout = _useLogoutMutation2[1];\n\n  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__[\"useMeQuery\"])({\n    pause: Object(_utils_isServer__WEBPACK_IMPORTED_MODULE_6__[\"isServer\"])()\n  }),\n      _useMeQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMeQuery, 1),\n      _useMeQuery2$ = _useMeQuery2[0],\n      data = _useMeQuery2$.data,\n      fetching = _useMeQuery2$.fetching;\n\n  var body = null;\n\n  if (fetching) {\n    body = null;\n  } else if (!(data === null || data === void 0 ? void 0 : data.me)) {\n    body = __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/login\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n      mr: 2,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }\n    }, \"login\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/register\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }\n    }, \"register\")));\n  } else {\n    body = __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      mr: 2,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }\n    }, data.me.username), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      variant: \"link\",\n      onClick: function onClick() {\n        return logout();\n      },\n      isLoading: logoutFetching,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }\n    }, \"logout\"));\n  }\n\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n    bg: \"tan\",\n    p: 4,\n    zIndex: 2,\n    position: \"sticky\",\n    top: \"0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, __jsx(Heading, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, \"Reddit\"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    ml: 'auto',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, body));\n};\n\n_s(NavBar, \"bu7Mo57UkJD6Z7YYu+ueXRjOJFY=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_5__[\"useLogoutMutation\"], _generated_graphql__WEBPACK_IMPORTED_MODULE_5__[\"useMeQuery\"]];\n});\n\n_c = NavBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeD8wZTMyIl0sIm5hbWVzIjpbIk5hdkJhciIsInVzZUxvZ291dE11dGF0aW9uIiwibG9nb3V0RmV0Y2hpbmciLCJmZXRjaGluZyIsImxvZ291dCIsInVzZU1lUXVlcnkiLCJwYXVzZSIsImlzU2VydmVyIiwiZGF0YSIsImJvZHkiLCJtZSIsInVzZXJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlPLElBQU1BLE1BQTZCLEdBQUcsU0FBaENBLE1BQWdDLE9BQVE7QUFBQTs7QUFBQTs7QUFBQSwyQkFDSkMsNEVBQWlCLEVBRGI7QUFBQTtBQUFBLE1BQ2hDQyxjQURnQywwQkFDMUNDLFFBRDBDO0FBQUEsTUFDZEMsTUFEYzs7QUFBQSxvQkFFdEJDLHFFQUFVLENBQUM7QUFBRUMsU0FBSyxFQUFFQyxnRUFBUTtBQUFqQixHQUFELENBRlk7QUFBQTtBQUFBO0FBQUEsTUFFMUNDLElBRjBDLGlCQUUxQ0EsSUFGMEM7QUFBQSxNQUVwQ0wsUUFGb0MsaUJBRXBDQSxRQUZvQzs7QUFHbkQsTUFBSU0sSUFBSSxHQUFHLElBQVg7O0FBQ0EsTUFBSU4sUUFBSixFQUFjO0FBQ1pNLFFBQUksR0FBRyxJQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUksRUFBQ0QsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVFLEVBQVAsQ0FBSixFQUFlO0FBQ3BCRCxRQUFJLEdBQ0YsbUVBQ0UsTUFBQyxnREFBRDtBQUFVLFVBQUksRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG9EQUFEO0FBQU0sUUFBRSxFQUFFLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBREYsRUFJRSxNQUFDLGdEQUFEO0FBQVUsVUFBSSxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQUpGLENBREY7QUFVRCxHQVhNLE1BV0E7QUFDTEEsUUFBSSxHQUNGLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsbURBQUQ7QUFBSyxRQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWFELElBQUksQ0FBQ0UsRUFBTCxDQUFRQyxRQUFyQixDQURGLEVBRUUsTUFBQyxzREFBRDtBQUNFLGFBQU8sRUFBQyxNQURWO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBTVAsTUFBTSxFQUFaO0FBQUEsT0FGWDtBQUdFLGVBQVMsRUFBRUYsY0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLENBREY7QUFXRDs7QUFDRCxTQUNFLE1BQUMsb0RBQUQ7QUFBTSxNQUFFLEVBQUMsS0FBVDtBQUFlLEtBQUMsRUFBRSxDQUFsQjtBQUFxQixVQUFNLEVBQUUsQ0FBN0I7QUFBZ0MsWUFBUSxFQUFDLFFBQXpDO0FBQWtELE9BQUcsRUFBQyxHQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQURGLENBREYsRUFNRSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQk8sSUFBbEIsQ0FORixDQURGO0FBVUQsQ0F4Q007O0dBQU1ULE07VUFDb0NDLG9FLEVBQ2xCSSw2RDs7O0tBRmxCTCxNIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIExpbmssIEZsZXgsIEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZU1lUXVlcnksIHVzZUxvZ291dE11dGF0aW9uIH0gZnJvbSAnLi4vZ2VuZXJhdGVkL2dyYXBocWwnO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICcuLi91dGlscy9pc1NlcnZlcic7XG5cbmludGVyZmFjZSBOYXZCYXJQcm9wcyB7fVxuXG5leHBvcnQgY29uc3QgTmF2QmFyOiBSZWFjdC5GQzxOYXZCYXJQcm9wcz4gPSAoe30pID0+IHtcbiAgY29uc3QgW3sgZmV0Y2hpbmc6IGxvZ291dEZldGNoaW5nIH0sIGxvZ291dF0gPSB1c2VMb2dvdXRNdXRhdGlvbigpO1xuICBjb25zdCBbeyBkYXRhLCBmZXRjaGluZyB9XSA9IHVzZU1lUXVlcnkoeyBwYXVzZTogaXNTZXJ2ZXIoKSB9KTtcbiAgbGV0IGJvZHkgPSBudWxsO1xuICBpZiAoZmV0Y2hpbmcpIHtcbiAgICBib2R5ID0gbnVsbDtcbiAgfSBlbHNlIGlmICghZGF0YT8ubWUpIHtcbiAgICBib2R5ID0gKFxuICAgICAgPD5cbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICA8TGluayBtcj17Mn0+bG9naW48L0xpbms+XG4gICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgIDxOZXh0TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgPExpbms+cmVnaXN0ZXI8L0xpbms+XG4gICAgICAgIDwvTmV4dExpbms+XG4gICAgICA8Lz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGJvZHkgPSAoXG4gICAgICA8RmxleD5cbiAgICAgICAgPEJveCBtcj17Mn0+e2RhdGEubWUudXNlcm5hbWV9PC9Cb3g+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwibGlua1wiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gbG9nb3V0KCl9XG4gICAgICAgICAgaXNMb2FkaW5nPXtsb2dvdXRGZXRjaGluZ30+XG4gICAgICAgICAgbG9nb3V0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9GbGV4PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8RmxleCBiZz1cInRhblwiIHA9ezR9IHpJbmRleD17Mn0gcG9zaXRpb249XCJzdGlja3lcIiB0b3A9XCIwXCI+XG4gICAgICA8TmV4dExpbms+XG4gICAgICAgIDxMaW5rPlxuICAgICAgICAgIDxIZWFkaW5nPlJlZGRpdDwvSGVhZGluZz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9OZXh0TGluaz5cbiAgICAgIDxCb3ggbWw9eydhdXRvJ30+e2JvZHl9PC9Cb3g+XG4gICAgPC9GbGV4PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NavBar.tsx\n");

/***/ })

})