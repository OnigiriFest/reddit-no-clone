webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/facundo/code/reddit/web/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    limit: 20,\n    cursor: null\n  }),\n      variables = _useState[0],\n      setVariables = _useState[1];\n\n  var _usePostsQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_4__[\"usePostsQuery\"])({\n    variables: variables\n  }),\n      _usePostsQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_usePostsQuery, 1),\n      _usePostsQuery2$ = _usePostsQuery2[0],\n      data = _usePostsQuery2$.data,\n      fetching = _usePostsQuery2$.fetching;\n\n  if (!fetching && !data) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 12\n      }\n    }, \"you got no posts for some reason\");\n  }\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Flex\"], {\n    align: \"center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Heading\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \"Reddit\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: \"/create-post\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], {\n    ml: \"auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, \"create post\"))), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, \"Hello World\"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }), !data && fetching ? __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"Loading...\") : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Stack\"], {\n    spacing: 8,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, data.posts.posts.map(function (p) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {\n      key: p.id,\n      p: 5,\n      shadow: \"md\",\n      borderWidth: \"1px\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 13\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Heading\"], {\n      fontSize: \"xl\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 15\n      }\n    }, p.title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], {\n      mt: 4,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 15\n      }\n    }, p.textSnippet));\n  })), data && data.posts.hasMore ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Flex\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Button\"], {\n    onClick: function onClick() {\n      setVariables({\n        limit: variables.limit,\n        cursor: data.posts.posts[data.posts.posts.length - 1].createdAt\n      });\n    },\n    m: \"auto\",\n    my: 8,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, \"load more\")) : null);\n};\n\n_s(Index, \"SAVRmdEAK227HBJZj/9lBMSZFlw=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_4__[\"usePostsQuery\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_2__[\"withUrqlClient\"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_3__[\"createUrqlClient\"], {\n  ssr: true\n})(Index));\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJsaW1pdCIsImN1cnNvciIsInZhcmlhYmxlcyIsInNldFZhcmlhYmxlcyIsInVzZVBvc3RzUXVlcnkiLCJkYXRhIiwiZmV0Y2hpbmciLCJwb3N0cyIsIm1hcCIsInAiLCJpZCIsInRpdGxlIiwidGV4dFNuaXBwZXQiLCJoYXNNb3JlIiwibGVuZ3RoIiwiY3JlYXRlZEF0Iiwid2l0aFVycWxDbGllbnQiLCJjcmVhdGVVcnFsQ2xpZW50Iiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNnQkMsc0RBQVEsQ0FBQztBQUN6Q0MsU0FBSyxFQUFFLEVBRGtDO0FBRXpDQyxVQUFNLEVBQUU7QUFGaUMsR0FBRCxDQUR4QjtBQUFBLE1BQ1hDLFNBRFc7QUFBQSxNQUNBQyxZQURBOztBQUFBLHVCQUtXQyx3RUFBYSxDQUFDO0FBQ3pDRixhQUFTLEVBQVRBO0FBRHlDLEdBQUQsQ0FMeEI7QUFBQTtBQUFBO0FBQUEsTUFLVEcsSUFMUyxvQkFLVEEsSUFMUztBQUFBLE1BS0hDLFFBTEcsb0JBS0hBLFFBTEc7O0FBU2xCLE1BQUksQ0FBQ0EsUUFBRCxJQUFhLENBQUNELElBQWxCLEVBQXdCO0FBQ3RCLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FBUDtBQUNEOztBQUVELFNBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFNLFNBQUssRUFBQyxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFLE1BQUMsZ0RBQUQ7QUFBVSxRQUFJLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFNLE1BQUUsRUFBQyxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FGRixDQURGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVHLENBQUNBLElBQUQsSUFBU0MsUUFBVCxHQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsR0FHQyxNQUFDLHFEQUFEO0FBQU8sV0FBTyxFQUFFLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsSUFBSSxDQUFFRSxLQUFOLENBQVlBLEtBQVosQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLENBQUQ7QUFBQSxXQUNyQixNQUFDLG1EQUFEO0FBQUssU0FBRyxFQUFFQSxDQUFDLENBQUNDLEVBQVo7QUFBZ0IsT0FBQyxFQUFFLENBQW5CO0FBQXNCLFlBQU0sRUFBQyxJQUE3QjtBQUFrQyxpQkFBVyxFQUFDLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHVEQUFEO0FBQVMsY0FBUSxFQUFDLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBd0JELENBQUMsQ0FBQ0UsS0FBMUIsQ0FERixFQUVFLE1BQUMsb0RBQUQ7QUFBTSxRQUFFLEVBQUUsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWNGLENBQUMsQ0FBQ0csV0FBaEIsQ0FGRixDQURxQjtBQUFBLEdBQXRCLENBREgsQ0FiSixFQXNCR1AsSUFBSSxJQUFJQSxJQUFJLENBQUNFLEtBQUwsQ0FBV00sT0FBbkIsR0FDQyxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQ0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2JWLGtCQUFZLENBQUM7QUFDWEgsYUFBSyxFQUFFRSxTQUFTLENBQUNGLEtBRE47QUFFWEMsY0FBTSxFQUFFSSxJQUFJLENBQUNFLEtBQUwsQ0FBV0EsS0FBWCxDQUFpQkYsSUFBSSxDQUFDRSxLQUFMLENBQVdBLEtBQVgsQ0FBaUJPLE1BQWpCLEdBQTBCLENBQTNDLEVBQThDQztBQUYzQyxPQUFELENBQVo7QUFJRCxLQU5IO0FBT0UsS0FBQyxFQUFDLE1BUEo7QUFRRSxNQUFFLEVBQUUsQ0FSTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBREQsR0FjRyxJQXBDTixDQURGO0FBd0NELENBckREOztHQUFNakIsSztVQUt5Qk0sZ0U7OztLQUx6Qk4sSztBQXVEU2tCLCtIQUFjLENBQUNDLHdFQUFELEVBQW1CO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQW5CLENBQWQsQ0FBZ0RwQixLQUFoRCxDQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhVcnFsQ2xpZW50IH0gZnJvbSAnbmV4dC11cnFsJztcbmltcG9ydCB7IGNyZWF0ZVVycWxDbGllbnQgfSBmcm9tICcuLi91dGlscy9jcmVhdGVVcnFsQ2xpZW50JztcbmltcG9ydCB7IHVzZVBvc3RzUXVlcnkgfSBmcm9tICcuLi9nZW5lcmF0ZWQvZ3JhcGhxbCc7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBCdXR0b24sIExpbmssIFN0YWNrLCBCb3gsIEhlYWRpbmcsIFRleHQsIEZsZXggfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFt2YXJpYWJsZXMsIHNldFZhcmlhYmxlc10gPSB1c2VTdGF0ZSh7XG4gICAgbGltaXQ6IDIwLFxuICAgIGN1cnNvcjogbnVsbCBhcyBudWxsIHwgc3RyaW5nLFxuICB9KTtcbiAgY29uc3QgW3sgZGF0YSwgZmV0Y2hpbmcgfV0gPSB1c2VQb3N0c1F1ZXJ5KHtcbiAgICB2YXJpYWJsZXMsXG4gIH0pO1xuXG4gIGlmICghZmV0Y2hpbmcgJiYgIWRhdGEpIHtcbiAgICByZXR1cm4gPGRpdj55b3UgZ290IG5vIHBvc3RzIGZvciBzb21lIHJlYXNvbjwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIDxIZWFkaW5nPlJlZGRpdDwvSGVhZGluZz5cbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvY3JlYXRlLXBvc3RcIj5cbiAgICAgICAgICA8TGluayBtbD1cImF1dG9cIj5jcmVhdGUgcG9zdDwvTGluaz5cbiAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgIDwvRmxleD5cbiAgICAgIDxiciAvPlxuICAgICAgPGRpdj5IZWxsbyBXb3JsZDwvZGl2PlxuICAgICAgPGJyIC8+XG4gICAgICB7IWRhdGEgJiYgZmV0Y2hpbmcgPyAoXG4gICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezh9PlxuICAgICAgICAgIHtkYXRhIS5wb3N0cy5wb3N0cy5tYXAoKHApID0+IChcbiAgICAgICAgICAgIDxCb3gga2V5PXtwLmlkfSBwPXs1fSBzaGFkb3c9XCJtZFwiIGJvcmRlcldpZHRoPVwiMXB4XCI+XG4gICAgICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwieGxcIj57cC50aXRsZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDxUZXh0IG10PXs0fT57cC50ZXh0U25pcHBldH08L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICl9XG4gICAgICB7ZGF0YSAmJiBkYXRhLnBvc3RzLmhhc01vcmUgPyAoXG4gICAgICAgIDxGbGV4PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0VmFyaWFibGVzKHtcbiAgICAgICAgICAgICAgICBsaW1pdDogdmFyaWFibGVzLmxpbWl0LFxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGF0YS5wb3N0cy5wb3N0c1tkYXRhLnBvc3RzLnBvc3RzLmxlbmd0aCAtIDFdLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgbT1cImF1dG9cIlxuICAgICAgICAgICAgbXk9ezh9PlxuICAgICAgICAgICAgbG9hZCBtb3JlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRmxleD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFVycWxDbGllbnQoY3JlYXRlVXJxbENsaWVudCwgeyBzc3I6IHRydWUgfSkoSW5kZXgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})