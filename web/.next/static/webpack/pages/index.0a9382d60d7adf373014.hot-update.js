webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavBar\", function() { return NavBar; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/facundo/code/reddit/web/src/components/NavBar.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\nvar NavBar = function NavBar(_ref) {\n  _s();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  var _useLogoutMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__[\"useLogoutMutation\"])(),\n      _useLogoutMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useLogoutMutation, 2),\n      logoutFetching = _useLogoutMutation2[0].fetching,\n      logout = _useLogoutMutation2[1];\n\n  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__[\"useMeQuery\"])(),\n      _useMeQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMeQuery, 1),\n      _useMeQuery2$ = _useMeQuery2[0],\n      data = _useMeQuery2$.data,\n      fetching = _useMeQuery2$.fetching;\n\n  var body = null;\n\n  if (fetching) {\n    body = null;\n  } else if (!(data === null || data === void 0 ? void 0 : data.me)) {\n    body = __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"/login\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      mr: 2,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 11\n      }\n    }, \"login\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"/register\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 11\n      }\n    }, \"register\")));\n  } else {\n    body = __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      mr: 2,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }\n    }, data.me.username), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      variant: \"link\",\n      onClick: function onClick() {\n        return logout();\n      },\n      isLoading: logoutFetching,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }\n    }, \"logout\"));\n  }\n\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    bg: \"tan\",\n    p: 4,\n    zIndex: 2,\n    position: \"sticky\",\n    top: \"0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    ml: 'auto',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, body));\n};\n\n_s(NavBar, \"bu7Mo57UkJD6Z7YYu+ueXRjOJFY=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_5__[\"useLogoutMutation\"], _generated_graphql__WEBPACK_IMPORTED_MODULE_5__[\"useMeQuery\"]];\n});\n\n_c = NavBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeD8wZTMyIl0sIm5hbWVzIjpbIk5hdkJhciIsInVzZUxvZ291dE11dGF0aW9uIiwibG9nb3V0RmV0Y2hpbmciLCJmZXRjaGluZyIsImxvZ291dCIsInVzZU1lUXVlcnkiLCJkYXRhIiwiYm9keSIsIm1lIiwidXNlcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSU8sSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FBUTtBQUFBOztBQUFBOztBQUFBLDJCQUNKQyw0RUFBaUIsRUFEYjtBQUFBO0FBQUEsTUFDaENDLGNBRGdDLDBCQUMxQ0MsUUFEMEM7QUFBQSxNQUNkQyxNQURjOztBQUFBLG9CQUV0QkMscUVBQVUsRUFGWTtBQUFBO0FBQUE7QUFBQSxNQUUxQ0MsSUFGMEMsaUJBRTFDQSxJQUYwQztBQUFBLE1BRXBDSCxRQUZvQyxpQkFFcENBLFFBRm9DOztBQUduRCxNQUFJSSxJQUFJLEdBQUcsSUFBWDs7QUFDQSxNQUFJSixRQUFKLEVBQWM7QUFDWkksUUFBSSxHQUFHLElBQVA7QUFDRCxHQUZELE1BRU8sSUFBSSxFQUFDRCxJQUFELGFBQUNBLElBQUQsdUJBQUNBLElBQUksQ0FBRUUsRUFBUCxDQUFKLEVBQWU7QUFDcEJELFFBQUksR0FDRixtRUFDRSxNQUFDLGdEQUFEO0FBQVUsVUFBSSxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQ7QUFBTSxRQUFFLEVBQUUsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FERixFQUlFLE1BQUMsZ0RBQUQ7QUFBVSxVQUFJLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBSkYsQ0FERjtBQVVELEdBWE0sTUFXQTtBQUNMQSxRQUFJLEdBQ0YsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxtREFBRDtBQUFLLFFBQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBYUQsSUFBSSxDQUFDRSxFQUFMLENBQVFDLFFBQXJCLENBREYsRUFFRSxNQUFDLHNEQUFEO0FBQ0UsYUFBTyxFQUFDLE1BRFY7QUFFRSxhQUFPLEVBQUU7QUFBQSxlQUFNTCxNQUFNLEVBQVo7QUFBQSxPQUZYO0FBR0UsZUFBUyxFQUFFRixjQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsQ0FERjtBQVdEOztBQUNELFNBQ0UsTUFBQyxvREFBRDtBQUFNLE1BQUUsRUFBQyxLQUFUO0FBQWUsS0FBQyxFQUFFLENBQWxCO0FBQXFCLFVBQU0sRUFBRSxDQUE3QjtBQUFnQyxZQUFRLEVBQUMsUUFBekM7QUFBa0QsT0FBRyxFQUFDLEdBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQkssSUFBbEIsQ0FERixDQURGO0FBS0QsQ0FuQ007O0dBQU1QLE07VUFDb0NDLG9FLEVBQ2xCSSw2RDs7O0tBRmxCTCxNIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uLCBGbGV4LCBMaW5rIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUxvZ291dE11dGF0aW9uLCB1c2VNZVF1ZXJ5IH0gZnJvbSAnLi4vZ2VuZXJhdGVkL2dyYXBocWwnO1xuXG5pbnRlcmZhY2UgTmF2QmFyUHJvcHMge31cblxuZXhwb3J0IGNvbnN0IE5hdkJhcjogUmVhY3QuRkM8TmF2QmFyUHJvcHM+ID0gKHt9KSA9PiB7XG4gIGNvbnN0IFt7IGZldGNoaW5nOiBsb2dvdXRGZXRjaGluZyB9LCBsb2dvdXRdID0gdXNlTG9nb3V0TXV0YXRpb24oKTtcbiAgY29uc3QgW3sgZGF0YSwgZmV0Y2hpbmcgfV0gPSB1c2VNZVF1ZXJ5KCk7XG4gIGxldCBib2R5ID0gbnVsbDtcbiAgaWYgKGZldGNoaW5nKSB7XG4gICAgYm9keSA9IG51bGw7XG4gIH0gZWxzZSBpZiAoIWRhdGE/Lm1lKSB7XG4gICAgYm9keSA9IChcbiAgICAgIDw+XG4gICAgICAgIDxOZXh0TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgPExpbmsgbXI9ezJ9PmxvZ2luPC9MaW5rPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgIDxMaW5rPnJlZ2lzdGVyPC9MaW5rPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBib2R5ID0gKFxuICAgICAgPEZsZXg+XG4gICAgICAgIDxCb3ggbXI9ezJ9PntkYXRhLm1lLnVzZXJuYW1lfTwvQm94PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cImxpbmtcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfVxuICAgICAgICAgIGlzTG9hZGluZz17bG9nb3V0RmV0Y2hpbmd9PlxuICAgICAgICAgIGxvZ291dFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRmxleD5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPEZsZXggYmc9XCJ0YW5cIiBwPXs0fSB6SW5kZXg9ezJ9IHBvc2l0aW9uPVwic3RpY2t5XCIgdG9wPVwiMFwiPlxuICAgICAgPEJveCBtbD17J2F1dG8nfT57Ym9keX08L0JveD5cbiAgICA8L0ZsZXg+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NavBar.tsx\n");

/***/ })

})