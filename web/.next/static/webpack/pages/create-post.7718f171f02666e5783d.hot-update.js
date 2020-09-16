webpackHotUpdate_N_E("pages/create-post",{

/***/ "./src/utils/createUrqlClient.ts":
/*!***************************************!*\
  !*** ./src/utils/createUrqlClient.ts ***!
  \***************************************/
/*! exports provided: cursorPagination, createUrqlClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cursorPagination\", function() { return cursorPagination; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUrqlClient\", function() { return createUrqlClient; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @urql/exchange-graphcache */ \"./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs\");\n/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wonka */ \"./node_modules/wonka/dist/wonka.mjs\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _betterUpdateQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./betterUpdateQuery */ \"./src/utils/betterUpdateQuery.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar errorExchange = function errorExchange(_ref) {\n  var forward = _ref.forward;\n  return function (ops$) {\n    return Object(wonka__WEBPACK_IMPORTED_MODULE_3__[\"pipe\"])(forward(ops$), Object(wonka__WEBPACK_IMPORTED_MODULE_3__[\"tap\"])(function (_ref2) {\n      var error = _ref2.error;\n\n      if (error === null || error === void 0 ? void 0 : error.message.includes('not authenticated')) {\n        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.replace('/login');\n      }\n    }));\n  };\n};\n\nvar cursorPagination = function cursorPagination() {\n  return function (_parent, fieldArgs, cache, info) {\n    var entityKey = info.parentKey,\n        fieldName = info.fieldName;\n    var allFields = cache.inspectFields(entityKey);\n    var fieldInfos = allFields.filter(function (info) {\n      return info.fieldName === fieldName;\n    });\n    var size = fieldInfos.length;\n\n    if (size === 0) {\n      return undefined;\n    }\n\n    var fieldKey = \"\".concat(fieldName, \"(\").concat(Object(urql__WEBPACK_IMPORTED_MODULE_1__[\"stringifyVariables\"])(fieldArgs), \")\");\n    var isItInTheCache = cache.resolve(cache.resolveFieldByKey(entityKey, fieldKey), 'posts');\n    info.partial = !isItInTheCache;\n    var hasMore = true;\n    var results = [];\n    fieldInfos.forEach(function (fi) {\n      var key = cache.resolveFieldByKey(entityKey, fi.fieldKey);\n      var data = cache.resolve(key, 'posts');\n\n      var _hasMore = cache.resolve(key, 'hasMore');\n\n      if (!_hasMore) {\n        hasMore = _hasMore;\n      }\n\n      results.push.apply(results, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data));\n    });\n    return {\n      __typename: 'PaginatedPosts',\n      hasMore: hasMore,\n      posts: results\n    };\n  };\n};\nvar createUrqlClient = function createUrqlClient(ssrExchange) {\n  return {\n    url: 'http://localhost:4000/graphql',\n    fetchOptions: {\n      credentials: 'include'\n    },\n    exchanges: [urql__WEBPACK_IMPORTED_MODULE_1__[\"dedupExchange\"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_2__[\"cacheExchange\"])({\n      keys: {\n        PaginatedPosts: function PaginatedPosts() {\n          return null;\n        }\n      },\n      resolvers: {\n        Query: {\n          posts: cursorPagination()\n        }\n      },\n      updates: {\n        Mutation: {\n          createPost: function createPost(_result, args, cache, info) {\n            var allFields = cache.inspectFields('Query');\n            var fieldInfos = allFields.filter(function (info) {\n              return info.fieldName === 'posts';\n            });\n            fieldInfos.forEach(function (fi) {\n              cache.invalidate('Query', 'posts', fi.arguments || {});\n            });\n          },\n          login: function login(_result, args, cache, info) {\n            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_5__[\"betterUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_4__[\"MeDocument\"]\n            }, _result, function (result, query) {\n              if (result.login.errors) {\n                return query;\n              } else {\n                return {\n                  me: result.login.user\n                };\n              }\n            });\n          },\n          register: function register(_result, args, cache, info) {\n            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_5__[\"betterUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_4__[\"MeDocument\"]\n            }, _result, function (result, query) {\n              if (result.register.errors) {\n                return query;\n              } else {\n                return {\n                  me: result.register.user\n                };\n              }\n            });\n          },\n          logout: function logout(_result, args, cache, info) {\n            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_5__[\"betterUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_4__[\"MeDocument\"]\n            }, _result, function () {\n              return {\n                me: null\n              };\n            });\n          }\n        }\n      }\n    }), errorExchange, ssrExchange, urql__WEBPACK_IMPORTED_MODULE_1__[\"fetchExchange\"]]\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHM/ZjRiNiJdLCJuYW1lcyI6WyJlcnJvckV4Y2hhbmdlIiwiZm9yd2FyZCIsIm9wcyQiLCJwaXBlIiwidGFwIiwiZXJyb3IiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJSb3V0ZXIiLCJyZXBsYWNlIiwiY3Vyc29yUGFnaW5hdGlvbiIsIl9wYXJlbnQiLCJmaWVsZEFyZ3MiLCJjYWNoZSIsImluZm8iLCJlbnRpdHlLZXkiLCJwYXJlbnRLZXkiLCJmaWVsZE5hbWUiLCJhbGxGaWVsZHMiLCJpbnNwZWN0RmllbGRzIiwiZmllbGRJbmZvcyIsImZpbHRlciIsInNpemUiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJmaWVsZEtleSIsInN0cmluZ2lmeVZhcmlhYmxlcyIsImlzSXRJblRoZUNhY2hlIiwicmVzb2x2ZSIsInJlc29sdmVGaWVsZEJ5S2V5IiwicGFydGlhbCIsImhhc01vcmUiLCJyZXN1bHRzIiwiZm9yRWFjaCIsImZpIiwia2V5IiwiZGF0YSIsIl9oYXNNb3JlIiwicHVzaCIsIl9fdHlwZW5hbWUiLCJwb3N0cyIsImNyZWF0ZVVycWxDbGllbnQiLCJzc3JFeGNoYW5nZSIsInVybCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiZXhjaGFuZ2VzIiwiZGVkdXBFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJrZXlzIiwiUGFnaW5hdGVkUG9zdHMiLCJyZXNvbHZlcnMiLCJRdWVyeSIsInVwZGF0ZXMiLCJNdXRhdGlvbiIsImNyZWF0ZVBvc3QiLCJfcmVzdWx0IiwiYXJncyIsImludmFsaWRhdGUiLCJhcmd1bWVudHMiLCJsb2dpbiIsImJldHRlclVwZGF0ZVF1ZXJ5IiwicXVlcnkiLCJNZURvY3VtZW50IiwicmVzdWx0IiwiZXJyb3JzIiwibWUiLCJ1c2VyIiwicmVnaXN0ZXIiLCJsb2dvdXQiLCJmZXRjaEV4Y2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7O0FBR0EsSUFBTUEsYUFBdUIsR0FBRyxTQUExQkEsYUFBMEI7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxTQUFpQixVQUFDQyxJQUFELEVBQVU7QUFDekQsV0FBT0Msa0RBQUksQ0FDVEYsT0FBTyxDQUFDQyxJQUFELENBREUsRUFFVEUsaURBQUcsQ0FBQyxpQkFBZTtBQUFBLFVBQVpDLEtBQVksU0FBWkEsS0FBWTs7QUFDakIsVUFBSUEsS0FBSixhQUFJQSxLQUFKLHVCQUFJQSxLQUFLLENBQUVDLE9BQVAsQ0FBZUMsUUFBZixDQUF3QixtQkFBeEIsQ0FBSixFQUFrRDtBQUNoREMsMERBQU0sQ0FBQ0MsT0FBUCxDQUFlLFFBQWY7QUFDRDtBQUNGLEtBSkUsQ0FGTSxDQUFYO0FBUUQsR0FUK0I7QUFBQSxDQUFoQzs7QUFnQk8sSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFnQjtBQUM5QyxTQUFPLFVBQUNDLE9BQUQsRUFBVUMsU0FBVixFQUFxQkMsS0FBckIsRUFBNEJDLElBQTVCLEVBQXFDO0FBQUEsUUFDdkJDLFNBRHVCLEdBQ0VELElBREYsQ0FDbENFLFNBRGtDO0FBQUEsUUFDWkMsU0FEWSxHQUNFSCxJQURGLENBQ1pHLFNBRFk7QUFFMUMsUUFBTUMsU0FBUyxHQUFHTCxLQUFLLENBQUNNLGFBQU4sQ0FBb0JKLFNBQXBCLENBQWxCO0FBQ0EsUUFBTUssVUFBVSxHQUFHRixTQUFTLENBQUNHLE1BQVYsQ0FBaUIsVUFBQ1AsSUFBRDtBQUFBLGFBQVVBLElBQUksQ0FBQ0csU0FBTCxLQUFtQkEsU0FBN0I7QUFBQSxLQUFqQixDQUFuQjtBQUNBLFFBQU1LLElBQUksR0FBR0YsVUFBVSxDQUFDRyxNQUF4Qjs7QUFDQSxRQUFJRCxJQUFJLEtBQUssQ0FBYixFQUFnQjtBQUNkLGFBQU9FLFNBQVA7QUFDRDs7QUFFRCxRQUFNQyxRQUFRLGFBQU1SLFNBQU4sY0FBbUJTLCtEQUFrQixDQUFDZCxTQUFELENBQXJDLE1BQWQ7QUFDQSxRQUFNZSxjQUFjLEdBQUdkLEtBQUssQ0FBQ2UsT0FBTixDQUNyQmYsS0FBSyxDQUFDZ0IsaUJBQU4sQ0FBd0JkLFNBQXhCLEVBQW1DVSxRQUFuQyxDQURxQixFQUVyQixPQUZxQixDQUF2QjtBQUtBWCxRQUFJLENBQUNnQixPQUFMLEdBQWUsQ0FBQ0gsY0FBaEI7QUFDQSxRQUFJSSxPQUFPLEdBQUcsSUFBZDtBQUVBLFFBQU1DLE9BQWlCLEdBQUcsRUFBMUI7QUFDQVosY0FBVSxDQUFDYSxPQUFYLENBQW1CLFVBQUNDLEVBQUQsRUFBUTtBQUN6QixVQUFNQyxHQUFHLEdBQUd0QixLQUFLLENBQUNnQixpQkFBTixDQUF3QmQsU0FBeEIsRUFBbUNtQixFQUFFLENBQUNULFFBQXRDLENBQVo7QUFDQSxVQUFNVyxJQUFJLEdBQUd2QixLQUFLLENBQUNlLE9BQU4sQ0FBY08sR0FBZCxFQUFtQixPQUFuQixDQUFiOztBQUNBLFVBQU1FLFFBQVEsR0FBR3hCLEtBQUssQ0FBQ2UsT0FBTixDQUFjTyxHQUFkLEVBQW1CLFNBQW5CLENBQWpCOztBQUVBLFVBQUksQ0FBQ0UsUUFBTCxFQUFlO0FBQ2JOLGVBQU8sR0FBR00sUUFBVjtBQUNEOztBQUVETCxhQUFPLENBQUNNLElBQVIsT0FBQU4sT0FBTywrRkFBU0ksSUFBVCxFQUFQO0FBQ0QsS0FWRDtBQVlBLFdBQU87QUFDTEcsZ0JBQVUsRUFBRSxnQkFEUDtBQUVMUixhQUFPLEVBQVBBLE9BRks7QUFHTFMsV0FBSyxFQUFFUjtBQUhGLEtBQVA7QUFLRCxHQXBDRDtBQXFDRCxDQXRDTTtBQXdDQSxJQUFNUyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFdBQUQ7QUFBQSxTQUF1QjtBQUNyREMsT0FBRyxFQUFFLCtCQURnRDtBQUVyREMsZ0JBQVksRUFBRTtBQUNaQyxpQkFBVyxFQUFFO0FBREQsS0FGdUM7QUFLckRDLGFBQVMsRUFBRSxDQUNUQyxrREFEUyxFQUVUQywrRUFBYSxDQUFDO0FBQ1pDLFVBQUksRUFBRTtBQUNKQyxzQkFBYyxFQUFFO0FBQUEsaUJBQU0sSUFBTjtBQUFBO0FBRFosT0FETTtBQUlaQyxlQUFTLEVBQUU7QUFDVEMsYUFBSyxFQUFFO0FBQ0xaLGVBQUssRUFBRTlCLGdCQUFnQjtBQURsQjtBQURFLE9BSkM7QUFTWjJDLGFBQU8sRUFBRTtBQUNQQyxnQkFBUSxFQUFFO0FBQ1JDLG9CQUFVLEVBQUUsb0JBQUNDLE9BQUQsRUFBVUMsSUFBVixFQUFnQjVDLEtBQWhCLEVBQXVCQyxJQUF2QixFQUFnQztBQUMxQyxnQkFBTUksU0FBUyxHQUFHTCxLQUFLLENBQUNNLGFBQU4sQ0FBb0IsT0FBcEIsQ0FBbEI7QUFDQSxnQkFBTUMsVUFBVSxHQUFHRixTQUFTLENBQUNHLE1BQVYsQ0FDakIsVUFBQ1AsSUFBRDtBQUFBLHFCQUFVQSxJQUFJLENBQUNHLFNBQUwsS0FBbUIsT0FBN0I7QUFBQSxhQURpQixDQUFuQjtBQUdBRyxzQkFBVSxDQUFDYSxPQUFYLENBQW1CLFVBQUNDLEVBQUQsRUFBUTtBQUN6QnJCLG1CQUFLLENBQUM2QyxVQUFOLENBQWlCLE9BQWpCLEVBQTBCLE9BQTFCLEVBQW1DeEIsRUFBRSxDQUFDeUIsU0FBSCxJQUFnQixFQUFuRDtBQUNELGFBRkQ7QUFHRCxXQVRPO0FBVVJDLGVBQUssRUFBRSxlQUFDSixPQUFELEVBQVVDLElBQVYsRUFBZ0I1QyxLQUFoQixFQUF1QkMsSUFBdkIsRUFBZ0M7QUFDckMrQyx3RkFBaUIsQ0FDZmhELEtBRGUsRUFFZjtBQUFFaUQsbUJBQUssRUFBRUMsNkRBQVVBO0FBQW5CLGFBRmUsRUFHZlAsT0FIZSxFQUlmLFVBQUNRLE1BQUQsRUFBU0YsS0FBVCxFQUFtQjtBQUNqQixrQkFBSUUsTUFBTSxDQUFDSixLQUFQLENBQWFLLE1BQWpCLEVBQXlCO0FBQ3ZCLHVCQUFPSCxLQUFQO0FBQ0QsZUFGRCxNQUVPO0FBQ0wsdUJBQU87QUFDTEksb0JBQUUsRUFBRUYsTUFBTSxDQUFDSixLQUFQLENBQWFPO0FBRFosaUJBQVA7QUFHRDtBQUNGLGFBWmMsQ0FBakI7QUFjRCxXQXpCTztBQTBCUkMsa0JBQVEsRUFBRSxrQkFBQ1osT0FBRCxFQUFVQyxJQUFWLEVBQWdCNUMsS0FBaEIsRUFBdUJDLElBQXZCLEVBQWdDO0FBQ3hDK0Msd0ZBQWlCLENBQ2ZoRCxLQURlLEVBRWY7QUFBRWlELG1CQUFLLEVBQUVDLDZEQUFVQTtBQUFuQixhQUZlLEVBR2ZQLE9BSGUsRUFJZixVQUFDUSxNQUFELEVBQVNGLEtBQVQsRUFBbUI7QUFDakIsa0JBQUlFLE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQkgsTUFBcEIsRUFBNEI7QUFDMUIsdUJBQU9ILEtBQVA7QUFDRCxlQUZELE1BRU87QUFDTCx1QkFBTztBQUNMSSxvQkFBRSxFQUFFRixNQUFNLENBQUNJLFFBQVAsQ0FBZ0JEO0FBRGYsaUJBQVA7QUFHRDtBQUNGLGFBWmMsQ0FBakI7QUFjRCxXQXpDTztBQTBDUkUsZ0JBQU0sRUFBRSxnQkFBQ2IsT0FBRCxFQUFVQyxJQUFWLEVBQWdCNUMsS0FBaEIsRUFBdUJDLElBQXZCLEVBQWdDO0FBQ3RDK0Msd0ZBQWlCLENBQ2ZoRCxLQURlLEVBRWY7QUFBRWlELG1CQUFLLEVBQUVDLDZEQUFVQTtBQUFuQixhQUZlLEVBR2ZQLE9BSGUsRUFJZjtBQUFBLHFCQUFPO0FBQUVVLGtCQUFFLEVBQUU7QUFBTixlQUFQO0FBQUEsYUFKZSxDQUFqQjtBQU1EO0FBakRPO0FBREg7QUFURyxLQUFELENBRkosRUFpRVRsRSxhQWpFUyxFQWtFVDBDLFdBbEVTLEVBbUVUNEIsa0RBbkVTO0FBTDBDLEdBQXZCO0FBQUEsQ0FBekIiLCJmaWxlIjoiLi9zcmMvdXRpbHMvY3JlYXRlVXJxbENsaWVudC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGRlZHVwRXhjaGFuZ2UsXG4gIGZldGNoRXhjaGFuZ2UsXG4gIEV4Y2hhbmdlLFxuICBzdHJpbmdpZnlWYXJpYWJsZXMsXG59IGZyb20gJ3VycWwnO1xuaW1wb3J0IHsgY2FjaGVFeGNoYW5nZSwgUmVzb2x2ZXIgfSBmcm9tICdAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlJztcbmltcG9ydCB7IHBpcGUsIHRhcCB9IGZyb20gJ3dvbmthJztcbmltcG9ydCB7XG4gIExvZ2luTXV0YXRpb24sXG4gIE1lUXVlcnksXG4gIE1lRG9jdW1lbnQsXG4gIFJlZ2lzdGVyTXV0YXRpb24sXG59IGZyb20gJy4uL2dlbmVyYXRlZC9ncmFwaHFsJztcbmltcG9ydCB7IGJldHRlclVwZGF0ZVF1ZXJ5IH0gZnJvbSAnLi9iZXR0ZXJVcGRhdGVRdWVyeSc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGZpZWxkSW5mb09mS2V5IH0gZnJvbSAnQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZS9kaXN0L3R5cGVzL3N0b3JlJztcblxuY29uc3QgZXJyb3JFeGNoYW5nZTogRXhjaGFuZ2UgPSAoeyBmb3J3YXJkIH0pID0+IChvcHMkKSA9PiB7XG4gIHJldHVybiBwaXBlKFxuICAgIGZvcndhcmQob3BzJCksXG4gICAgdGFwKCh7IGVycm9yIH0pID0+IHtcbiAgICAgIGlmIChlcnJvcj8ubWVzc2FnZS5pbmNsdWRlcygnbm90IGF1dGhlbnRpY2F0ZWQnKSkge1xuICAgICAgICBSb3V0ZXIucmVwbGFjZSgnL2xvZ2luJyk7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5hdGlvblBhcmFtcyB7XG4gIG9mZnNldEFyZ3VtZW50Pzogc3RyaW5nO1xuICBsaW1pdEFyZ3VtZW50Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY3Vyc29yUGFnaW5hdGlvbiA9ICgpOiBSZXNvbHZlciA9PiB7XG4gIHJldHVybiAoX3BhcmVudCwgZmllbGRBcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgIGNvbnN0IHsgcGFyZW50S2V5OiBlbnRpdHlLZXksIGZpZWxkTmFtZSB9ID0gaW5mbztcbiAgICBjb25zdCBhbGxGaWVsZHMgPSBjYWNoZS5pbnNwZWN0RmllbGRzKGVudGl0eUtleSk7XG4gICAgY29uc3QgZmllbGRJbmZvcyA9IGFsbEZpZWxkcy5maWx0ZXIoKGluZm8pID0+IGluZm8uZmllbGROYW1lID09PSBmaWVsZE5hbWUpO1xuICAgIGNvbnN0IHNpemUgPSBmaWVsZEluZm9zLmxlbmd0aDtcbiAgICBpZiAoc2l6ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZEtleSA9IGAke2ZpZWxkTmFtZX0oJHtzdHJpbmdpZnlWYXJpYWJsZXMoZmllbGRBcmdzKX0pYDtcbiAgICBjb25zdCBpc0l0SW5UaGVDYWNoZSA9IGNhY2hlLnJlc29sdmUoXG4gICAgICBjYWNoZS5yZXNvbHZlRmllbGRCeUtleShlbnRpdHlLZXksIGZpZWxkS2V5KSBhcyBzdHJpbmcsXG4gICAgICAncG9zdHMnXG4gICAgKTtcblxuICAgIGluZm8ucGFydGlhbCA9ICFpc0l0SW5UaGVDYWNoZTtcbiAgICBsZXQgaGFzTW9yZSA9IHRydWU7XG5cbiAgICBjb25zdCByZXN1bHRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZpZWxkSW5mb3MuZm9yRWFjaCgoZmkpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGNhY2hlLnJlc29sdmVGaWVsZEJ5S2V5KGVudGl0eUtleSwgZmkuZmllbGRLZXkpIGFzIHN0cmluZztcbiAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZXNvbHZlKGtleSwgJ3Bvc3RzJykgYXMgc3RyaW5nW107XG4gICAgICBjb25zdCBfaGFzTW9yZSA9IGNhY2hlLnJlc29sdmUoa2V5LCAnaGFzTW9yZScpO1xuXG4gICAgICBpZiAoIV9oYXNNb3JlKSB7XG4gICAgICAgIGhhc01vcmUgPSBfaGFzTW9yZSBhcyBib29sZWFuO1xuICAgICAgfVxuXG4gICAgICByZXN1bHRzLnB1c2goLi4uZGF0YSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgX190eXBlbmFtZTogJ1BhZ2luYXRlZFBvc3RzJyxcbiAgICAgIGhhc01vcmUsXG4gICAgICBwb3N0czogcmVzdWx0cyxcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVycWxDbGllbnQgPSAoc3NyRXhjaGFuZ2U6IGFueSkgPT4gKHtcbiAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWwnLFxuICBmZXRjaE9wdGlvbnM6IHtcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnIGFzIGNvbnN0LFxuICB9LFxuICBleGNoYW5nZXM6IFtcbiAgICBkZWR1cEV4Y2hhbmdlLFxuICAgIGNhY2hlRXhjaGFuZ2Uoe1xuICAgICAga2V5czoge1xuICAgICAgICBQYWdpbmF0ZWRQb3N0czogKCkgPT4gbnVsbCxcbiAgICAgIH0sXG4gICAgICByZXNvbHZlcnM6IHtcbiAgICAgICAgUXVlcnk6IHtcbiAgICAgICAgICBwb3N0czogY3Vyc29yUGFnaW5hdGlvbigpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHVwZGF0ZXM6IHtcbiAgICAgICAgTXV0YXRpb246IHtcbiAgICAgICAgICBjcmVhdGVQb3N0OiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFsbEZpZWxkcyA9IGNhY2hlLmluc3BlY3RGaWVsZHMoJ1F1ZXJ5Jyk7XG4gICAgICAgICAgICBjb25zdCBmaWVsZEluZm9zID0gYWxsRmllbGRzLmZpbHRlcihcbiAgICAgICAgICAgICAgKGluZm8pID0+IGluZm8uZmllbGROYW1lID09PSAncG9zdHMnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZmllbGRJbmZvcy5mb3JFYWNoKChmaSkgPT4ge1xuICAgICAgICAgICAgICBjYWNoZS5pbnZhbGlkYXRlKCdRdWVyeScsICdwb3N0cycsIGZpLmFyZ3VtZW50cyB8fCB7fSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxvZ2luOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcbiAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PExvZ2luTXV0YXRpb24sIE1lUXVlcnk+KFxuICAgICAgICAgICAgICBjYWNoZSxcbiAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxuICAgICAgICAgICAgICBfcmVzdWx0LFxuICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubG9naW4uZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQubG9naW4udXNlcixcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVnaXN0ZXI6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8UmVnaXN0ZXJNdXRhdGlvbiwgTWVRdWVyeT4oXG4gICAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXG4gICAgICAgICAgICAgIF9yZXN1bHQsXG4gICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZWdpc3Rlci5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbWU6IHJlc3VsdC5yZWdpc3Rlci51c2VyLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsb2dvdXQ6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8TG9naW5NdXRhdGlvbiwgTWVRdWVyeT4oXG4gICAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXG4gICAgICAgICAgICAgIF9yZXN1bHQsXG4gICAgICAgICAgICAgICgpID0+ICh7IG1lOiBudWxsIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGVycm9yRXhjaGFuZ2UsXG4gICAgc3NyRXhjaGFuZ2UsXG4gICAgZmV0Y2hFeGNoYW5nZSxcbiAgXSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/createUrqlClient.ts\n");

/***/ })

})