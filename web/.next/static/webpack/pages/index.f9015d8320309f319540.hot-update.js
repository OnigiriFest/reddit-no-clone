webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n/* harmony import */ var _components_UpdootSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UpdootSection */ \"./src/components/UpdootSection.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/facundo/code/reddit/web/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    limit: 20,\n    cursor: null\n  }),\n      variables = _useState[0],\n      setVariables = _useState[1];\n\n  var _usePostsQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"usePostsQuery\"])({\n    variables: variables\n  }),\n      _usePostsQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_usePostsQuery, 1),\n      _usePostsQuery2$ = _usePostsQuery2[0],\n      data = _usePostsQuery2$.data,\n      fetching = _usePostsQuery2$.fetching;\n\n  var _useDeletePostMutatio = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useDeletePostMutation\"])(),\n      _useDeletePostMutatio2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDeletePostMutatio, 2),\n      deletePost = _useDeletePostMutatio2[1];\n\n  if (!fetching && !data) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 12\n      }\n    }, \"you got no posts for some reason\");\n  }\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, !data && fetching ? __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, \"Loading...\") : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n    spacing: 8,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, data.posts.posts.map(function (p) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      key: p.id,\n      p: 5,\n      shadow: \"md\",\n      borderWidth: \"1px\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 13\n      }\n    }, __jsx(_components_UpdootSection__WEBPACK_IMPORTED_MODULE_8__[\"UpdootSection\"], {\n      post: p,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 15\n      }\n    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      flex: 1,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 15\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/post/[id]\",\n      as: \"/post/\".concat(p.id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 19\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n      fontSize: \"xl\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 21\n      }\n    }, p.title))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }\n    }, \"posted by \", p.creator.username), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      align: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      flex: 1,\n      mt: 4,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 19\n      }\n    }, p.textSnippet), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n      ml: \"auto\",\n      icon: \"delete\",\n      variantColor: \"red\",\n      \"aria-label\": \"Delete Post\",\n      onClick: function onClick() {\n        return deletePost({\n          id: p.id\n        });\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 19\n      }\n    }))));\n  })), data && data.posts.hasMore ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    onClick: function onClick() {\n      setVariables({\n        limit: variables.limit,\n        cursor: data.posts.posts[data.posts.posts.length - 1].createdAt\n      });\n    },\n    m: \"auto\",\n    my: 8,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, \"load more\")) : null);\n};\n\n_s(Index, \"12Ip5tLJNCD3zhLIZrRK0A8oG0w=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"usePostsQuery\"], _generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"useDeletePostMutation\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_3__[\"withUrqlClient\"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_7__[\"createUrqlClient\"], {\n  ssr: true\n})(Index));\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJsaW1pdCIsImN1cnNvciIsInZhcmlhYmxlcyIsInNldFZhcmlhYmxlcyIsInVzZVBvc3RzUXVlcnkiLCJkYXRhIiwiZmV0Y2hpbmciLCJ1c2VEZWxldGVQb3N0TXV0YXRpb24iLCJkZWxldGVQb3N0IiwicG9zdHMiLCJtYXAiLCJwIiwiaWQiLCJ0aXRsZSIsImNyZWF0b3IiLCJ1c2VybmFtZSIsInRleHRTbmlwcGV0IiwiaGFzTW9yZSIsImxlbmd0aCIsImNyZWF0ZWRBdCIsIndpdGhVcnFsQ2xpZW50IiwiY3JlYXRlVXJxbENsaWVudCIsInNzciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUM7QUFDekNDLFNBQUssRUFBRSxFQURrQztBQUV6Q0MsVUFBTSxFQUFFO0FBRmlDLEdBQUQsQ0FEeEI7QUFBQSxNQUNYQyxTQURXO0FBQUEsTUFDQUMsWUFEQTs7QUFBQSx1QkFLV0Msd0VBQWEsQ0FBQztBQUN6Q0YsYUFBUyxFQUFUQTtBQUR5QyxHQUFELENBTHhCO0FBQUE7QUFBQTtBQUFBLE1BS1RHLElBTFMsb0JBS1RBLElBTFM7QUFBQSxNQUtIQyxRQUxHLG9CQUtIQSxRQUxHOztBQUFBLDhCQVFLQyxnRkFBcUIsRUFSMUI7QUFBQTtBQUFBLE1BUVRDLFVBUlM7O0FBVWxCLE1BQUksQ0FBQ0YsUUFBRCxJQUFhLENBQUNELElBQWxCLEVBQXdCO0FBQ3RCLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FBUDtBQUNEOztBQUVELFNBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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O0tBUm5CVCxLO0FBa0VTc0IsK0hBQWMsQ0FBQ0Msd0VBQUQsRUFBbUI7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBbkIsQ0FBZCxDQUFnRHhCLEtBQWhELENBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIEZsZXgsXG4gIEhlYWRpbmcsXG4gIExpbmssXG4gIFN0YWNrLFxuICBUZXh0LFxuICBJY29uLFxuICBJY29uQnV0dG9uLFxufSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuaW1wb3J0IHsgd2l0aFVycWxDbGllbnQgfSBmcm9tICduZXh0LXVycWwnO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IHVzZVBvc3RzUXVlcnksIHVzZURlbGV0ZVBvc3RNdXRhdGlvbiB9IGZyb20gJy4uL2dlbmVyYXRlZC9ncmFwaHFsJztcbmltcG9ydCB7IGNyZWF0ZVVycWxDbGllbnQgfSBmcm9tICcuLi91dGlscy9jcmVhdGVVcnFsQ2xpZW50JztcbmltcG9ydCB7IFVwZG9vdFNlY3Rpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL1VwZG9vdFNlY3Rpb24nO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW3ZhcmlhYmxlcywgc2V0VmFyaWFibGVzXSA9IHVzZVN0YXRlKHtcbiAgICBsaW1pdDogMjAsXG4gICAgY3Vyc29yOiBudWxsIGFzIG51bGwgfCBzdHJpbmcsXG4gIH0pO1xuICBjb25zdCBbeyBkYXRhLCBmZXRjaGluZyB9XSA9IHVzZVBvc3RzUXVlcnkoe1xuICAgIHZhcmlhYmxlcyxcbiAgfSk7XG4gIGNvbnN0IFssIGRlbGV0ZVBvc3RdID0gdXNlRGVsZXRlUG9zdE11dGF0aW9uKCk7XG5cbiAgaWYgKCFmZXRjaGluZyAmJiAhZGF0YSkge1xuICAgIHJldHVybiA8ZGl2PnlvdSBnb3Qgbm8gcG9zdHMgZm9yIHNvbWUgcmVhc29uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgeyFkYXRhICYmIGZldGNoaW5nID8gKFxuICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXs4fT5cbiAgICAgICAgICB7ZGF0YSEucG9zdHMucG9zdHMubWFwKChwKSA9PiAoXG4gICAgICAgICAgICA8RmxleCBrZXk9e3AuaWR9IHA9ezV9IHNoYWRvdz1cIm1kXCIgYm9yZGVyV2lkdGg9XCIxcHhcIj5cbiAgICAgICAgICAgICAgPFVwZG9vdFNlY3Rpb24gcG9zdD17cH0gLz5cbiAgICAgICAgICAgICAgPEJveCBmbGV4PXsxfT5cbiAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj17YC9wb3N0L1tpZF1gfSBhcz17YC9wb3N0LyR7cC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cInhsXCI+e3AudGl0bGV9PC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgICAgICAgPFRleHQ+cG9zdGVkIGJ5IHtwLmNyZWF0b3IudXNlcm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBmbGV4PXsxfSBtdD17NH0+XG4gICAgICAgICAgICAgICAgICAgIHtwLnRleHRTbmlwcGV0fVxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgbWw9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWxldGUgUG9zdFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVBvc3QoeyBpZDogcC5pZCB9KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICl9XG4gICAgICB7ZGF0YSAmJiBkYXRhLnBvc3RzLmhhc01vcmUgPyAoXG4gICAgICAgIDxGbGV4PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0VmFyaWFibGVzKHtcbiAgICAgICAgICAgICAgICBsaW1pdDogdmFyaWFibGVzLmxpbWl0LFxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGF0YS5wb3N0cy5wb3N0c1tkYXRhLnBvc3RzLnBvc3RzLmxlbmd0aCAtIDFdLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgbT1cImF1dG9cIlxuICAgICAgICAgICAgbXk9ezh9PlxuICAgICAgICAgICAgbG9hZCBtb3JlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRmxleD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFVycWxDbGllbnQoY3JlYXRlVXJxbENsaWVudCwgeyBzc3I6IHRydWUgfSkoSW5kZXgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})