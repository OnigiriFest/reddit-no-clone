webpackHotUpdate_N_E("pages/post/edit/[id]",{

/***/ "./src/pages/create-post.tsx":
false,

/***/ "./src/pages/post/edit/[id].tsx":
/*!**************************************!*\
  !*** ./src/pages/post/edit/[id].tsx ***!
  \**************************************/
/*! exports provided: EditPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EditPost\", function() { return EditPost; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/InputField */ \"./src/components/InputField.tsx\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/facundo/code/reddit/web/src/pages/post/edit/[id].tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\nvar EditPost = function EditPost(_ref) {\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref);\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"Layout\"], {\n    variant: \"small\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_7__[\"Formik\"], {\n    initialValues: {\n      title: '',\n      text: ''\n    },\n    onSubmit: /*#__PURE__*/function () {\n      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, _ref2) {\n        var setErrors;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setErrors = _ref2.setErrors;\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x, _x2) {\n        return _ref3.apply(this, arguments);\n      };\n    }(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, function (_ref4) {\n    var isSubmitting = _ref4.isSubmitting;\n    return __jsx(formik__WEBPACK_IMPORTED_MODULE_7__[\"Form\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }\n    }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_8__[\"InputField\"], {\n      name: \"title\",\n      placeholder: \"title\",\n      label: \"Title\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }\n    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"Box\"], {\n      mt: 4,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }\n    }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_8__[\"InputField\"], {\n      textarea: true,\n      name: \"text\",\n      placeholder: \"text\",\n      label: \"Body\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 15\n      }\n    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n      type: \"submit\",\n      variantColor: \"teal\",\n      mt: \"4\",\n      isLoading: isSubmitting,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }\n    }, \"create post\"));\n  }));\n};\n_c = EditPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_4__[\"withUrqlClient\"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_5__[\"createUrqlClient\"])(EditPost));\n\nvar _c;\n\n$RefreshReg$(_c, \"EditPost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvZWRpdC8udHN4PzZlOGEiXSwibmFtZXMiOlsiRWRpdFBvc3QiLCJ0aXRsZSIsInRleHQiLCJ2YWx1ZXMiLCJzZXRFcnJvcnMiLCJpc1N1Ym1pdHRpbmciLCJ3aXRoVXJxbENsaWVudCIsImNyZWF0ZVVycWxDbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVPLElBQU1BLFFBQXNCLEdBQUcsU0FBekJBLFFBQXlCLE9BQVE7QUFBQTs7QUFDNUMsU0FDRSxNQUFDLHlEQUFEO0FBQVEsV0FBTyxFQUFDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZDQUFEO0FBQ0UsaUJBQWEsRUFBRTtBQUFFQyxXQUFLLEVBQUUsRUFBVDtBQUFhQyxVQUFJLEVBQUU7QUFBbkIsS0FEakI7QUFFRSxZQUFRO0FBQUEsbU1BQUUsaUJBQU9DLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlCQyx5QkFBakIsU0FBaUJBLFNBQWpCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUc7QUFBQSxRQUFHQyxZQUFILFNBQUdBLFlBQUg7QUFBQSxXQUNDLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsaUVBQUQ7QUFBWSxVQUFJLEVBQUMsT0FBakI7QUFBeUIsaUJBQVcsRUFBQyxPQUFyQztBQUE2QyxXQUFLLEVBQUMsT0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUUsTUFBQyxtREFBRDtBQUFLLFFBQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGlFQUFEO0FBQ0UsY0FBUSxNQURWO0FBRUUsVUFBSSxFQUFDLE1BRlA7QUFHRSxpQkFBVyxFQUFDLE1BSGQ7QUFJRSxXQUFLLEVBQUMsTUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FGRixFQVVFLE1BQUMsc0RBQUQ7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLGtCQUFZLEVBQUMsTUFGZjtBQUdFLFFBQUUsRUFBQyxHQUhMO0FBSUUsZUFBUyxFQUFFQSxZQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkYsQ0FERDtBQUFBLEdBUkgsQ0FERixDQURGO0FBaUNELENBbENNO0tBQU1MLFE7QUFvQ0VNLCtIQUFjLENBQUNDLHdFQUFELENBQWQsQ0FBaUNQLFFBQWpDLENBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdC9lZGl0L1tpZF0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhVcnFsQ2xpZW50IH0gZnJvbSAnbmV4dC11cnFsJztcbmltcG9ydCB7IGNyZWF0ZVVycWxDbGllbnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jcmVhdGVVcnFsQ2xpZW50JztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgY3JlYXRlUG9zdCBmcm9tICcuLi8uLi9jcmVhdGUtcG9zdCc7XG5pbXBvcnQgeyBJbnB1dEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9JbnB1dEZpZWxkJztcbmltcG9ydCB7IEJveCwgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuZXhwb3J0IGNvbnN0IEVkaXRQb3N0OiBSZWFjdC5GQzx7fT4gPSAoe30pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHZhcmlhbnQ9XCJzbWFsbFwiPlxuICAgICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHRpdGxlOiAnJywgdGV4dDogJycgfX1cbiAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHsgc2V0RXJyb3JzIH0pID0+IHtcbiAgICAgICAgICAvLyBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBjcmVhdGVQb3N0KHsgaW5wdXQ6IHZhbHVlcyB9KTtcbiAgICAgICAgICAvLyBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgLy8gICByb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgfX0+XG4gICAgICAgIHsoeyBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxuICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgPElucHV0RmllbGQgbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiIGxhYmVsPVwiVGl0bGVcIiAvPlxuICAgICAgICAgICAgPEJveCBtdD17NH0+XG4gICAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgICAgdGV4dGFyZWFcbiAgICAgICAgICAgICAgICBuYW1lPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJvZHlcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICB2YXJpYW50Q29sb3I9XCJ0ZWFsXCJcbiAgICAgICAgICAgICAgbXQ9XCI0XCJcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc1N1Ym1pdHRpbmd9PlxuICAgICAgICAgICAgICBjcmVhdGUgcG9zdFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtaWs+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjcmVhdGVVcnFsQ2xpZW50KShFZGl0UG9zdCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/post/edit/[id].tsx\n");

/***/ }),

/***/ "./src/utils/useIsAuth.ts":
false

})