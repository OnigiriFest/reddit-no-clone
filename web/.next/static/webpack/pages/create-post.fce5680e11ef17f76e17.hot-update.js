webpackHotUpdate_N_E("pages/create-post",{

/***/ "./src/utils/createUrqlClient.ts":
/*!***************************************!*\
  !*** ./src/utils/createUrqlClient.ts ***!
  \***************************************/
/*! exports provided: cursorPagination, createUrqlClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cursorPagination\", function() { return cursorPagination; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUrqlClient\", function() { return createUrqlClient; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @urql/exchange-graphcache */ \"./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs\");\n/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wonka */ \"./node_modules/wonka/dist/wonka.mjs\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _betterUpdateQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./betterUpdateQuery */ \"./src/utils/betterUpdateQuery.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n                fargment _ on Post {\\n                  id\\n                  points\\n                }\\n              \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar errorExchange = function errorExchange(_ref) {\n  var forward = _ref.forward;\n  return function (ops$) {\n    return Object(wonka__WEBPACK_IMPORTED_MODULE_4__[\"pipe\"])(forward(ops$), Object(wonka__WEBPACK_IMPORTED_MODULE_4__[\"tap\"])(function (_ref2) {\n      var error = _ref2.error;\n\n      if (error === null || error === void 0 ? void 0 : error.message.includes('not authenticated')) {\n        next_router__WEBPACK_IMPORTED_MODULE_7___default.a.replace('/login');\n      }\n    }));\n  };\n};\n\nvar cursorPagination = function cursorPagination() {\n  return function (_parent, fieldArgs, cache, info) {\n    var entityKey = info.parentKey,\n        fieldName = info.fieldName;\n    var allFields = cache.inspectFields(entityKey);\n    var fieldInfos = allFields.filter(function (info) {\n      return info.fieldName === fieldName;\n    });\n    var size = fieldInfos.length;\n\n    if (size === 0) {\n      return undefined;\n    }\n\n    var fieldKey = \"\".concat(fieldName, \"(\").concat(Object(urql__WEBPACK_IMPORTED_MODULE_2__[\"stringifyVariables\"])(fieldArgs), \")\");\n    var isItInTheCache = cache.resolve(cache.resolveFieldByKey(entityKey, fieldKey), 'posts');\n    info.partial = !isItInTheCache;\n    var hasMore = true;\n    var results = [];\n    fieldInfos.forEach(function (fi) {\n      var key = cache.resolveFieldByKey(entityKey, fi.fieldKey);\n      var data = cache.resolve(key, 'posts');\n\n      var _hasMore = cache.resolve(key, 'hasMore');\n\n      if (!_hasMore) {\n        hasMore = _hasMore;\n      }\n\n      results.push.apply(results, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data));\n    });\n    return {\n      __typename: 'PaginatedPosts',\n      hasMore: hasMore,\n      posts: results\n    };\n  };\n};\nvar createUrqlClient = function createUrqlClient(ssrExchange) {\n  return {\n    url: 'http://localhost:4000/graphql',\n    fetchOptions: {\n      credentials: 'include'\n    },\n    exchanges: [urql__WEBPACK_IMPORTED_MODULE_2__[\"dedupExchange\"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_3__[\"cacheExchange\"])({\n      keys: {\n        PaginatedPosts: function PaginatedPosts() {\n          return null;\n        }\n      },\n      resolvers: {\n        Query: {\n          posts: cursorPagination()\n        }\n      },\n      updates: {\n        Mutation: {\n          vote: function vote(_result, args, cache, info) {\n            var _ref3 = args,\n                postId = _ref3.postId,\n                value = _ref3.value;\n            var data = cache.readFragment(graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject()), {\n              id: postId\n            });\n          },\n          createPost: function createPost(_result, args, cache, info) {\n            var allFields = cache.inspectFields('Query');\n            var fieldInfos = allFields.filter(function (info) {\n              return info.fieldName === 'posts';\n            });\n            fieldInfos.forEach(function (fi) {\n              cache.invalidate('Query', 'posts', fi.arguments || {});\n            });\n          },\n          login: function login(_result, args, cache, info) {\n            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_6__[\"betterUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_5__[\"MeDocument\"]\n            }, _result, function (result, query) {\n              if (result.login.errors) {\n                return query;\n              } else {\n                return {\n                  me: result.login.user\n                };\n              }\n            });\n          },\n          register: function register(_result, args, cache, info) {\n            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_6__[\"betterUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_5__[\"MeDocument\"]\n            }, _result, function (result, query) {\n              if (result.register.errors) {\n                return query;\n              } else {\n                return {\n                  me: result.register.user\n                };\n              }\n            });\n          },\n          logout: function logout(_result, args, cache, info) {\n            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_6__[\"betterUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_5__[\"MeDocument\"]\n            }, _result, function () {\n              return {\n                me: null\n              };\n            });\n          }\n        }\n      }\n    }), errorExchange, ssrExchange, urql__WEBPACK_IMPORTED_MODULE_2__[\"fetchExchange\"]]\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHM/ZjRiNiJdLCJuYW1lcyI6WyJlcnJvckV4Y2hhbmdlIiwiZm9yd2FyZCIsIm9wcyQiLCJwaXBlIiwidGFwIiwiZXJyb3IiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJSb3V0ZXIiLCJyZXBsYWNlIiwiY3Vyc29yUGFnaW5hdGlvbiIsIl9wYXJlbnQiLCJmaWVsZEFyZ3MiLCJjYWNoZSIsImluZm8iLCJlbnRpdHlLZXkiLCJwYXJlbnRLZXkiLCJmaWVsZE5hbWUiLCJhbGxGaWVsZHMiLCJpbnNwZWN0RmllbGRzIiwiZmllbGRJbmZvcyIsImZpbHRlciIsInNpemUiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJmaWVsZEtleSIsInN0cmluZ2lmeVZhcmlhYmxlcyIsImlzSXRJblRoZUNhY2hlIiwicmVzb2x2ZSIsInJlc29sdmVGaWVsZEJ5S2V5IiwicGFydGlhbCIsImhhc01vcmUiLCJyZXN1bHRzIiwiZm9yRWFjaCIsImZpIiwia2V5IiwiZGF0YSIsIl9oYXNNb3JlIiwicHVzaCIsIl9fdHlwZW5hbWUiLCJwb3N0cyIsImNyZWF0ZVVycWxDbGllbnQiLCJzc3JFeGNoYW5nZSIsInVybCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiZXhjaGFuZ2VzIiwiZGVkdXBFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJrZXlzIiwiUGFnaW5hdGVkUG9zdHMiLCJyZXNvbHZlcnMiLCJRdWVyeSIsInVwZGF0ZXMiLCJNdXRhdGlvbiIsInZvdGUiLCJfcmVzdWx0IiwiYXJncyIsInBvc3RJZCIsInZhbHVlIiwicmVhZEZyYWdtZW50IiwiZ3FsIiwiaWQiLCJjcmVhdGVQb3N0IiwiaW52YWxpZGF0ZSIsImFyZ3VtZW50cyIsImxvZ2luIiwiYmV0dGVyVXBkYXRlUXVlcnkiLCJxdWVyeSIsIk1lRG9jdW1lbnQiLCJyZXN1bHQiLCJlcnJvcnMiLCJtZSIsInVzZXIiLCJyZWdpc3RlciIs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O0FBTUQ7QUE3RE87QUFESDtBQVRHLEtBQUQsQ0FGSixFQTZFVHhFLGFBN0VTLEVBOEVUMEMsV0E5RVMsRUErRVRrQyxrREEvRVM7QUFMMEMsR0FBdkI7QUFBQSxDQUF6QiIsImZpbGUiOiIuL3NyYy91dGlscy9jcmVhdGVVcnFsQ2xpZW50LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZGVkdXBFeGNoYW5nZSxcbiAgZmV0Y2hFeGNoYW5nZSxcbiAgRXhjaGFuZ2UsXG4gIHN0cmluZ2lmeVZhcmlhYmxlcyxcbn0gZnJvbSAndXJxbCc7XG5pbXBvcnQgeyBjYWNoZUV4Y2hhbmdlLCBSZXNvbHZlciB9IGZyb20gJ0B1cnFsL2V4Y2hhbmdlLWdyYXBoY2FjaGUnO1xuaW1wb3J0IHsgcGlwZSwgdGFwIH0gZnJvbSAnd29ua2EnO1xuaW1wb3J0IHtcbiAgTG9naW5NdXRhdGlvbixcbiAgTWVRdWVyeSxcbiAgTWVEb2N1bWVudCxcbiAgUmVnaXN0ZXJNdXRhdGlvbixcbiAgVm90ZU11dGF0aW9uVmFyaWFibGVzLFxufSBmcm9tICcuLi9nZW5lcmF0ZWQvZ3JhcGhxbCc7XG5pbXBvcnQgeyBiZXR0ZXJVcGRhdGVRdWVyeSB9IGZyb20gJy4vYmV0dGVyVXBkYXRlUXVlcnknO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBmaWVsZEluZm9PZktleSB9IGZyb20gJ0B1cnFsL2V4Y2hhbmdlLWdyYXBoY2FjaGUvZGlzdC90eXBlcy9zdG9yZSc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuY29uc3QgZXJyb3JFeGNoYW5nZTogRXhjaGFuZ2UgPSAoeyBmb3J3YXJkIH0pID0+IChvcHMkKSA9PiB7XG4gIHJldHVybiBwaXBlKFxuICAgIGZvcndhcmQob3BzJCksXG4gICAgdGFwKCh7IGVycm9yIH0pID0+IHtcbiAgICAgIGlmIChlcnJvcj8ubWVzc2FnZS5pbmNsdWRlcygnbm90IGF1dGhlbnRpY2F0ZWQnKSkge1xuICAgICAgICBSb3V0ZXIucmVwbGFjZSgnL2xvZ2luJyk7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5hdGlvblBhcmFtcyB7XG4gIG9mZnNldEFyZ3VtZW50Pzogc3RyaW5nO1xuICBsaW1pdEFyZ3VtZW50Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY3Vyc29yUGFnaW5hdGlvbiA9ICgpOiBSZXNvbHZlciA9PiB7XG4gIHJldHVybiAoX3BhcmVudCwgZmllbGRBcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgIGNvbnN0IHsgcGFyZW50S2V5OiBlbnRpdHlLZXksIGZpZWxkTmFtZSB9ID0gaW5mbztcbiAgICBjb25zdCBhbGxGaWVsZHMgPSBjYWNoZS5pbnNwZWN0RmllbGRzKGVudGl0eUtleSk7XG4gICAgY29uc3QgZmllbGRJbmZvcyA9IGFsbEZpZWxkcy5maWx0ZXIoKGluZm8pID0+IGluZm8uZmllbGROYW1lID09PSBmaWVsZE5hbWUpO1xuICAgIGNvbnN0IHNpemUgPSBmaWVsZEluZm9zLmxlbmd0aDtcbiAgICBpZiAoc2l6ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZEtleSA9IGAke2ZpZWxkTmFtZX0oJHtzdHJpbmdpZnlWYXJpYWJsZXMoZmllbGRBcmdzKX0pYDtcbiAgICBjb25zdCBpc0l0SW5UaGVDYWNoZSA9IGNhY2hlLnJlc29sdmUoXG4gICAgICBjYWNoZS5yZXNvbHZlRmllbGRCeUtleShlbnRpdHlLZXksIGZpZWxkS2V5KSBhcyBzdHJpbmcsXG4gICAgICAncG9zdHMnXG4gICAgKTtcblxuICAgIGluZm8ucGFydGlhbCA9ICFpc0l0SW5UaGVDYWNoZTtcbiAgICBsZXQgaGFzTW9yZSA9IHRydWU7XG5cbiAgICBjb25zdCByZXN1bHRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZpZWxkSW5mb3MuZm9yRWFjaCgoZmkpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGNhY2hlLnJlc29sdmVGaWVsZEJ5S2V5KGVudGl0eUtleSwgZmkuZmllbGRLZXkpIGFzIHN0cmluZztcbiAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZXNvbHZlKGtleSwgJ3Bvc3RzJykgYXMgc3RyaW5nW107XG4gICAgICBjb25zdCBfaGFzTW9yZSA9IGNhY2hlLnJlc29sdmUoa2V5LCAnaGFzTW9yZScpO1xuXG4gICAgICBpZiAoIV9oYXNNb3JlKSB7XG4gICAgICAgIGhhc01vcmUgPSBfaGFzTW9yZSBhcyBib29sZWFuO1xuICAgICAgfVxuXG4gICAgICByZXN1bHRzLnB1c2goLi4uZGF0YSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgX190eXBlbmFtZTogJ1BhZ2luYXRlZFBvc3RzJyxcbiAgICAgIGhhc01vcmUsXG4gICAgICBwb3N0czogcmVzdWx0cyxcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVycWxDbGllbnQgPSAoc3NyRXhjaGFuZ2U6IGFueSkgPT4gKHtcbiAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWwnLFxuICBmZXRjaE9wdGlvbnM6IHtcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnIGFzIGNvbnN0LFxuICB9LFxuICBleGNoYW5nZXM6IFtcbiAgICBkZWR1cEV4Y2hhbmdlLFxuICAgIGNhY2hlRXhjaGFuZ2Uoe1xuICAgICAga2V5czoge1xuICAgICAgICBQYWdpbmF0ZWRQb3N0czogKCkgPT4gbnVsbCxcbiAgICAgIH0sXG4gICAgICByZXNvbHZlcnM6IHtcbiAgICAgICAgUXVlcnk6IHtcbiAgICAgICAgICBwb3N0czogY3Vyc29yUGFnaW5hdGlvbigpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHVwZGF0ZXM6IHtcbiAgICAgICAgTXV0YXRpb246IHtcbiAgICAgICAgICB2b3RlOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcG9zdElkLCB2YWx1ZSB9ID0gYXJncyBhcyBWb3RlTXV0YXRpb25WYXJpYWJsZXM7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVhZEZyYWdtZW50KFxuICAgICAgICAgICAgICBncWxgXG4gICAgICAgICAgICAgICAgZmFyZ21lbnQgXyBvbiBQb3N0IHtcbiAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICBwb2ludHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgIHsgaWQ6IHBvc3RJZCB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY3JlYXRlUG9zdDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbGxGaWVsZHMgPSBjYWNoZS5pbnNwZWN0RmllbGRzKCdRdWVyeScpO1xuICAgICAgICAgICAgY29uc3QgZmllbGRJbmZvcyA9IGFsbEZpZWxkcy5maWx0ZXIoXG4gICAgICAgICAgICAgIChpbmZvKSA9PiBpbmZvLmZpZWxkTmFtZSA9PT0gJ3Bvc3RzJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZpZWxkSW5mb3MuZm9yRWFjaCgoZmkpID0+IHtcbiAgICAgICAgICAgICAgY2FjaGUuaW52YWxpZGF0ZSgnUXVlcnknLCAncG9zdHMnLCBmaS5hcmd1bWVudHMgfHwge30pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsb2dpbjogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5PihcbiAgICAgICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcbiAgICAgICAgICAgICAgX3Jlc3VsdCxcbiAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmxvZ2luLmVycm9ycykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LmxvZ2luLnVzZXIsXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcbiAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PFJlZ2lzdGVyTXV0YXRpb24sIE1lUXVlcnk+KFxuICAgICAgICAgICAgICBjYWNoZSxcbiAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxuICAgICAgICAgICAgICBfcmVzdWx0LFxuICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVnaXN0ZXIuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQucmVnaXN0ZXIudXNlcixcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbG9nb3V0OiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcbiAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PExvZ2luTXV0YXRpb24sIE1lUXVlcnk+KFxuICAgICAgICAgICAgICBjYWNoZSxcbiAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxuICAgICAgICAgICAgICBfcmVzdWx0LFxuICAgICAgICAgICAgICAoKSA9PiAoeyBtZTogbnVsbCB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBlcnJvckV4Y2hhbmdlLFxuICAgIHNzckV4Y2hhbmdlLFxuICAgIGZldGNoRXhjaGFuZ2UsXG4gIF0sXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/createUrqlClient.ts\n");

/***/ })

})