webpackHotUpdate_N_E("pages/post/edit/[id]",{

/***/ "./src/pages/post/edit/[id].tsx":
/*!**************************************!*\
  !*** ./src/pages/post/edit/[id].tsx ***!
  \**************************************/
/*! exports provided: EditPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EditPost\", function() { return EditPost; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/InputField */ \"./src/components/InputField.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n/* harmony import */ var _utils_useGetPostFromUrl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utils/useGetPostFromUrl */ \"./src/utils/useGetPostFromUrl.ts\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/facundo/code/reddit/web/src/pages/post/edit/[id].tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar EditPost = function EditPost(_ref) {\n  _s();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_ref);\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n\n  var _useGetPostFromUrl = Object(_utils_useGetPostFromUrl__WEBPACK_IMPORTED_MODULE_12__[\"useGetPostFromUrl\"])(),\n      _useGetPostFromUrl2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useGetPostFromUrl, 1),\n      _useGetPostFromUrl2$ = _useGetPostFromUrl2[0],\n      data = _useGetPostFromUrl2$.data,\n      fetching = _useGetPostFromUrl2$.fetching;\n\n  if (fetching) {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__[\"Layout\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }\n    }, \"loading...\"));\n  }\n\n  if (!(data === null || data === void 0 ? void 0 : data.post)) {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__[\"Layout\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 7\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }\n    }, \"could not find post\"));\n  }\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__[\"Layout\"], {\n    variant: \"small\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_5__[\"Formik\"], {\n    initialValues: {\n      title: data.post.title,\n      text: data.post.text\n    },\n    onSubmit: /*#__PURE__*/function () {\n      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, _ref2) {\n        var setErrors;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setErrors = _ref2.setErrors;\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x, _x2) {\n        return _ref3.apply(this, arguments);\n      };\n    }(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, function (_ref4) {\n    var isSubmitting = _ref4.isSubmitting;\n    return __jsx(formik__WEBPACK_IMPORTED_MODULE_5__[\"Form\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }\n    }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_9__[\"InputField\"], {\n      name: \"title\",\n      placeholder: \"title\",\n      label: \"Title\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }\n    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n      mt: 4,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }\n    }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_9__[\"InputField\"], {\n      textarea: true,\n      name: \"text\",\n      placeholder: \"text\",\n      label: \"Body\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 15\n      }\n    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n      type: \"submit\",\n      variantColor: \"teal\",\n      mt: \"4\",\n      isLoading: isSubmitting,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }\n    }, \"edit post\"));\n  }));\n};\n\n_s(EditPost, \"M1rRru7WTRBoZB9PJ3Unrt/EeLQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"], _utils_useGetPostFromUrl__WEBPACK_IMPORTED_MODULE_12__[\"useGetPostFromUrl\"]];\n});\n\n_c = EditPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_6__[\"withUrqlClient\"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_11__[\"createUrqlClient\"])(EditPost));\n\nvar _c;\n\n$RefreshReg$(_c, \"EditPost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvZWRpdC8udHN4PzZlOGEiXSwibmFtZXMiOlsiRWRpdFBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VHZXRQb3N0RnJvbVVybCIsImRhdGEiLCJmZXRjaGluZyIsInBvc3QiLCJ0aXRsZSIsInRleHQiLCJ2YWx1ZXMiLCJzZXRFcnJvcnMiLCJpc1N1Ym1pdHRpbmciLCJ3aXRoVXJxbENsaWVudCIsImNyZWF0ZVVycWxDbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxRQUFzQixHQUFHLFNBQXpCQSxRQUF5QixPQUFRO0FBQUE7O0FBQUE7O0FBQzVDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRDRDLDJCQUVmQyxtRkFBaUIsRUFGRjtBQUFBO0FBQUE7QUFBQSxNQUVuQ0MsSUFGbUMsd0JBRW5DQSxJQUZtQztBQUFBLE1BRTdCQyxRQUY2Qix3QkFFN0JBLFFBRjZCOztBQUc1QyxNQUFJQSxRQUFKLEVBQWM7QUFDWixXQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FERjtBQUtEOztBQUVELE1BQUksRUFBQ0QsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVFLElBQVAsQ0FBSixFQUFpQjtBQUNmLFdBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLENBREY7QUFLRDs7QUFFRCxTQUNFLE1BQUMsMERBQUQ7QUFBUSxXQUFPLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkNBQUQ7QUFDRSxpQkFBYSxFQUFFO0FBQUVDLFdBQUssRUFBRUgsSUFBSSxDQUFDRSxJQUFMLENBQVVDLEtBQW5CO0FBQTBCQyxVQUFJLEVBQUVKLElBQUksQ0FBQ0UsSUFBTCxDQUFVRTtBQUExQyxLQURqQjtBQUVFLFlBQVE7QUFBQSxtTUFBRSxpQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUJDLHlCQUFqQixTQUFpQkEsU0FBakI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRztBQUFBLFFBQUdDLFlBQUgsU0FBR0EsWUFBSDtBQUFBLFdBQ0MsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxpRUFBRDtBQUFZLFVBQUksRUFBQyxPQUFqQjtBQUF5QixpQkFBVyxFQUFDLE9BQXJDO0FBQTZDLFdBQUssRUFBQyxPQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRSxNQUFDLG1EQUFEO0FBQUssUUFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsaUVBQUQ7QUFDRSxjQUFRLE1BRFY7QUFFRSxVQUFJLEVBQUMsTUFGUDtBQUdFLGlCQUFXLEVBQUMsTUFIZDtBQUlFLFdBQUssRUFBQyxNQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQUZGLEVBVUUsTUFBQyxzREFBRDtBQUNFLFVBQUksRUFBQyxRQURQO0FBRUUsa0JBQVksRUFBQyxNQUZmO0FBR0UsUUFBRSxFQUFDLEdBSEw7QUFJRSxlQUFTLEVBQUVBLFlBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRixDQUREO0FBQUEsR0FSSCxDQURGLENBREY7QUFpQ0QsQ0FwRE07O0dBQU1YLFE7VUFDSUUscUQsRUFDY0MsMkU7OztLQUZsQkgsUTtBQXNERVksK0hBQWMsQ0FBQ0MseUVBQUQsQ0FBZCxDQUFpQ2IsUUFBakMsQ0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9wb3N0L2VkaXQvW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5pbXBvcnQgeyBGb3JtLCBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IHsgd2l0aFVycWxDbGllbnQgfSBmcm9tICduZXh0LXVycWwnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0lucHV0RmllbGQnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgY3JlYXRlVXJxbENsaWVudCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQnO1xuaW1wb3J0IHsgdXNlR2V0UG9zdEZyb21VcmwgfSBmcm9tICcuLi8uLi8uLi91dGlscy91c2VHZXRQb3N0RnJvbVVybCc7XG5cbmV4cG9ydCBjb25zdCBFZGl0UG9zdDogUmVhY3QuRkM8e30+ID0gKHt9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbeyBkYXRhLCBmZXRjaGluZyB9XSA9IHVzZUdldFBvc3RGcm9tVXJsKCk7XG4gIGlmIChmZXRjaGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cblxuICBpZiAoIWRhdGE/LnBvc3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEJveD5jb3VsZCBub3QgZmluZCBwb3N0PC9Cb3g+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHZhcmlhbnQ9XCJzbWFsbFwiPlxuICAgICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHRpdGxlOiBkYXRhLnBvc3QudGl0bGUsIHRleHQ6IGRhdGEucG9zdC50ZXh0IH19XG4gICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7IHNldEVycm9ycyB9KSA9PiB7XG4gICAgICAgICAgLy8gY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgY3JlYXRlUG9zdCh7IGlucHV0OiB2YWx1ZXMgfSk7XG4gICAgICAgICAgLy8gaWYgKCFlcnJvcikge1xuICAgICAgICAgIC8vICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH19PlxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nIH0pID0+IChcbiAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgIDxJbnB1dEZpZWxkIG5hbWU9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwidGl0bGVcIiBsYWJlbD1cIlRpdGxlXCIgLz5cbiAgICAgICAgICAgIDxCb3ggbXQ9ezR9PlxuICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICAgIHRleHRhcmVhXG4gICAgICAgICAgICAgICAgbmFtZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJCb2R5XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgdmFyaWFudENvbG9yPVwidGVhbFwiXG4gICAgICAgICAgICAgIG10PVwiNFwiXG4gICAgICAgICAgICAgIGlzTG9hZGluZz17aXNTdWJtaXR0aW5nfT5cbiAgICAgICAgICAgICAgZWRpdCBwb3N0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICl9XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhVcnFsQ2xpZW50KGNyZWF0ZVVycWxDbGllbnQpKEVkaXRQb3N0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/post/edit/[id].tsx\n");

/***/ }),

/***/ "./src/utils/useGetPostFromUrl.ts":
/*!****************************************!*\
  !*** ./src/utils/useGetPostFromUrl.ts ***!
  \****************************************/
/*! exports provided: useGetPostFromUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useGetPostFromUrl\", function() { return useGetPostFromUrl; });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\nvar _s = $RefreshSig$();\n\n\n\nvar useGetPostFromUrl = function useGetPostFromUrl() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"])();\n  var intId = typeof router.query.id === 'string' ? parseInt(router.query.id) : -1;\n  return Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_1__[\"usePostQuery\"])({\n    pause: intId === -1,\n    variables: {\n      id: intId\n    }\n  });\n};\n\n_s(useGetPostFromUrl, \"g0RlFs3gUjTH1AjmWa/RFl1XYlw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"], _generated_graphql__WEBPACK_IMPORTED_MODULE_1__[\"usePostQuery\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3VzZUdldFBvc3RGcm9tVXJsLnRzPzUyNjIiXSwibmFtZXMiOlsidXNlR2V0UG9zdEZyb21VcmwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpbnRJZCIsInF1ZXJ5IiwiaWQiLCJwYXJzZUludCIsInVzZVBvc3RRdWVyeSIsInBhdXNlIiwidmFyaWFibGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFBOztBQUNyQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsS0FBSyxHQUNULE9BQU9GLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxFQUFwQixLQUEyQixRQUEzQixHQUFzQ0MsUUFBUSxDQUFDTCxNQUFNLENBQUNHLEtBQVAsQ0FBYUMsRUFBZCxDQUE5QyxHQUFrRSxDQUFDLENBRHJFO0FBRUEsU0FBT0UsdUVBQVksQ0FBQztBQUNsQkMsU0FBSyxFQUFFTCxLQUFLLEtBQUssQ0FBQyxDQURBO0FBRWxCTSxhQUFTLEVBQUU7QUFDVEosUUFBRSxFQUFFRjtBQURLO0FBRk8sR0FBRCxDQUFuQjtBQU1ELENBVk07O0dBQU1ILGlCO1VBQ0lFLHFELEVBR1JLLCtEIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL3VzZUdldFBvc3RGcm9tVXJsLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlUG9zdFF1ZXJ5IH0gZnJvbSAnLi4vZ2VuZXJhdGVkL2dyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgdXNlR2V0UG9zdEZyb21VcmwgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBpbnRJZCA9XG4gICAgdHlwZW9mIHJvdXRlci5xdWVyeS5pZCA9PT0gJ3N0cmluZycgPyBwYXJzZUludChyb3V0ZXIucXVlcnkuaWQpIDogLTE7XG4gIHJldHVybiB1c2VQb3N0UXVlcnkoe1xuICAgIHBhdXNlOiBpbnRJZCA9PT0gLTEsXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBpZDogaW50SWQsXG4gICAgfSxcbiAgfSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/useGetPostFromUrl.ts\n");

/***/ })

})