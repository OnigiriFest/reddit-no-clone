webpackHotUpdate_N_E("pages/index",{

/***/ "./src/utils/createUrqlClient.ts":
/*!***************************************!*\
  !*** ./src/utils/createUrqlClient.ts ***!
  \***************************************/
/*! exports provided: cursorPagination, createUrqlClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cursorPagination\", function() { return cursorPagination; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUrqlClient\", function() { return createUrqlClient; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @urql/exchange-graphcache */ \"./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wonka */ \"./node_modules/wonka/dist/wonka.mjs\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _betterUpdateQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./betterUpdateQuery */ \"./src/utils/betterUpdateQuery.ts\");\n/* harmony import */ var _isServer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isServer */ \"./src/utils/isServer.ts\");\n\n\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n                    fragment __ on Post {\\n                      points\\n                      voteStatus\\n                    }\\n                  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n                  fragment _ on Post {\\n                    id\\n                    points\\n                    voteStatus\\n                  }\\n                \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\nvar errorExchange = function errorExchange(_ref) {\n  var forward = _ref.forward;\n  return function (ops$) {\n    return Object(wonka__WEBPACK_IMPORTED_MODULE_6__[\"pipe\"])(forward(ops$), Object(wonka__WEBPACK_IMPORTED_MODULE_6__[\"tap\"])(function (_ref2) {\n      var error = _ref2.error;\n\n      if (error === null || error === void 0 ? void 0 : error.message.includes('not authenticated')) {\n        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace('/login');\n      }\n    }));\n  };\n};\n\nvar cursorPagination = function cursorPagination() {\n  return function (_parent, fieldArgs, cache, info) {\n    var entityKey = info.parentKey,\n        fieldName = info.fieldName;\n    var allFields = cache.inspectFields(entityKey);\n    var fieldInfos = allFields.filter(function (info) {\n      return info.fieldName === fieldName;\n    });\n    var size = fieldInfos.length;\n\n    if (size === 0) {\n      return undefined;\n    }\n\n    var fieldKey = \"\".concat(fieldName, \"(\").concat(Object(urql__WEBPACK_IMPORTED_MODULE_5__[\"stringifyVariables\"])(fieldArgs), \")\");\n    var isItInTheCache = cache.resolve(cache.resolveFieldByKey(entityKey, fieldKey), 'posts');\n    info.partial = !isItInTheCache;\n    var hasMore = true;\n    var results = [];\n    fieldInfos.forEach(function (fi) {\n      var key = cache.resolveFieldByKey(entityKey, fi.fieldKey);\n      var data = cache.resolve(key, 'posts');\n\n      var _hasMore = cache.resolve(key, 'hasMore');\n\n      if (!_hasMore) {\n        hasMore = _hasMore;\n      }\n\n      results.push.apply(results, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data));\n    });\n    return {\n      __typename: 'PaginatedPosts',\n      hasMore: hasMore,\n      posts: results\n    };\n  };\n};\nvar createUrqlClient = function createUrqlClient(ssrExchange, ctx) {\n  var cookie = '';\n\n  if (Object(_isServer__WEBPACK_IMPORTED_MODULE_9__[\"isServer\"])()) {\n    cookie = ctx.req.headers.cookie;\n  }\n\n  return {\n    url: 'http://localhost:4000/graphql',\n    fetchOptions: {\n      credentials: 'include',\n      headers: cookie ? {\n        cookie: cookie\n      } : undefined\n    },\n    exchanges: [urql__WEBPACK_IMPORTED_MODULE_5__[\"dedupExchange\"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_2__[\"cacheExchange\"])({\n      keys: {\n        PaginatedPosts: function PaginatedPosts() {\n          return null;\n        }\n      },\n      resolvers: {\n        Query: {\n          posts: cursorPagination()\n        }\n      },\n      updates: {\n        Mutation: {\n          vote: function vote(_result, args, cache, info) {\n            var _ref3 = args,\n                postId = _ref3.postId,\n                value = _ref3.value;\n            var data = cache.readFragment(graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject()), {\n              id: postId\n            });\n\n            if (data) {\n              if (data.voteStatus === args.value) {\n                return;\n              }\n\n              var newPoints = data.points + (!data.voteStatus ? 1 : 2) * value;\n              cache.writeFragment(graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2()), {\n                id: postId,\n                points: newPoints,\n                voteStatus: value\n              });\n            }\n          },\n          createPost: function createPost(_result, args, cache, info) {\n            var allFields = cache.inspectFields('Query');\n            var fieldInfos = allFields.filter(function (info) {\n              return info.fieldName === 'posts';\n            });\n            fieldInfos.forEach(function (fi) {\n              cache.invalidate('Query', 'posts', fi.arguments || {});\n            });\n          },\n          login: function login(_result, args, cache, info) {\n            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_8__[\"betterUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_7__[\"MeDocument\"]\n            }, _result, function (result, query) {\n              if (result.login.errors) {\n                return query;\n              } else {\n                return {\n                  me: result.login.user\n                };\n              }\n            });\n          },\n          register: function register(_result, args, cache, info) {\n            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_8__[\"betterUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_7__[\"MeDocument\"]\n            }, _result, function (result, query) {\n              if (result.register.errors) {\n                return query;\n              } else {\n                return {\n                  me: result.register.user\n                };\n              }\n            });\n          },\n          logout: function logout(_result, args, cache, info) {\n            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_8__[\"betterUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_7__[\"MeDocument\"]\n            }, _result, function () {\n              return {\n                me: null\n              };\n            });\n          }\n        }\n      }\n    }), errorExchange, ssrExchange, urql__WEBPACK_IMPORTED_MODULE_5__[\"fetchExchange\"]]\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHM/ZjRiNiJdLCJuYW1lcyI6WyJlcnJvckV4Y2hhbmdlIiwiZm9yd2FyZCIsIm9wcyQiLCJwaXBlIiwidGFwIiwiZXJyb3IiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJSb3V0ZXIiLCJyZXBsYWNlIiwiY3Vyc29yUGFnaW5hdGlvbiIsIl9wYXJlbnQiLCJmaWVsZEFyZ3MiLCJjYWNoZSIsImluZm8iLCJlbnRpdHlLZXkiLCJwYXJlbnRLZXkiLCJmaWVsZE5hbWUiLCJhbGxGaWVsZHMiLCJpbnNwZWN0RmllbGRzIiwiZmllbGRJbmZvcyIsImZpbHRlciIsInNpemUiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJmaWVsZEtleSIsInN0cmluZ2lmeVZhcmlhYmxlcyIsImlzSXRJblRoZUNhY2hlIiwicmVzb2x2ZSIsInJlc29sdmVGaWVsZEJ5S2V5IiwicGFydGlhbCIsImhhc01vcmUiLCJyZXN1bHRzIiwiZm9yRWFjaCIsImZpIiwia2V5IiwiZGF0YSIsIl9oYXNNb3JlIiwicHVzaCIsIl9fdHlwZW5hbWUiLCJwb3N0cyIsImNyZWF0ZVVycWxDbGllbnQiLCJzc3JFeGNoYW5nZSIsImN0eCIsImNvb2tpZSIsImlzU2VydmVyIiwicmVxIiwiaGVhZGVycyIsInVybCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiZXhjaGFuZ2VzIiwiZGVkdXBFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJrZXlzIiwiUGFnaW5hdGVkUG9zdHMiLCJyZXNvbHZlcnMiLCJRdWVyeSIsInVwZGF0ZXMiLCJNdXRhdGlvbiIsInZvdGUiLCJfcmVzdWx0IiwiYXJncyIsInBvc3RJZCIsInZhbHVlIiwicmVhZEZyYWdtZW50IiwiZ3FsIiwiaWQiLCJ2b3RlU3RhdHVzIiwibmV3UG9pbnRzIiwicG9pbnRzIiwid3JpdGVGcmFnbWVudCIsImNyZWF0ZVBvc3QiLCJpbnZhbGlkYXRlIiwiYXJndW1lbnRzIiwibG9naW4iLCJiZXR0ZXJVcGRhdGVRdWVyeSIsInF1ZXJ5IiwiTWVEb2N1bWVudCIsInJlc3VsdCIsImVycm9ycyIsIm1lIiwidXNlciIsInJlZ2lzdGVyIiwibG9nb3V0IiwiZmV0Y2hFeGNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFPQTtBQUNBOztBQUVBLElBQU1BLGFBQXVCLEdBQUcsU0FBMUJBLGFBQTBCO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsU0FBaUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pELFdBQU9DLGtEQUFJLENBQ1RGLE9BQU8sQ0FBQ0MsSUFBRCxDQURFLEVBRVRFLGlEQUFHLENBQUMsaUJBQWU7QUFBQSxVQUFaQyxLQUFZLFNBQVpBLEtBQVk7O0FBQ2pCLFVBQUlBLEtBQUosYUFBSUEsS0FBSix1QkFBSUEsS0FBSyxDQUFFQyxPQUFQLENBQWVDLFFBQWYsQ0FBd0IsbUJBQXhCLENBQUosRUFBa0Q7QUFDaERDLDBEQUFNLENBQUNDLE9BQVAsQ0FBZSxRQUFmO0FBQ0Q7QUFDRixLQUpFLENBRk0sQ0FBWDtBQVFELEdBVCtCO0FBQUEsQ0FBaEM7O0FBZ0JPLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBZ0I7QUFDOUMsU0FBTyxVQUFDQyxPQUFELEVBQVVDLFNBQVYsRUFBcUJDLEtBQXJCLEVBQTRCQyxJQUE1QixFQUFxQztBQUFBLFFBQ3ZCQyxTQUR1QixHQUNFRCxJQURGLENBQ2xDRSxTQURrQztBQUFBLFFBQ1pDLFNBRFksR0FDRUgsSUFERixDQUNaRyxTQURZO0FBRTFDLFFBQU1DLFNBQVMsR0FBR0wsS0FBSyxDQUFDTSxhQUFOLENBQW9CSixTQUFwQixDQUFsQjtBQUNBLFFBQU1LLFVBQVUsR0FBR0YsU0FBUyxDQUFDRyxNQUFWLENBQWlCLFVBQUNQLElBQUQ7QUFBQSxhQUFVQSxJQUFJLENBQUNHLFNBQUwsS0FBbUJBLFNB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RixNQUFNLENBQUNKLEtBQVAsQ0FBYU87QUFEWixpQkFBUDtBQUdEO0FBQ0YsYUFaYyxDQUFqQjtBQWNELFdBdkRPO0FBd0RSQyxrQkFBUSxFQUFFLGtCQUFDdEIsT0FBRCxFQUFVQyxJQUFWLEVBQWdCakQsS0FBaEIsRUFBdUJDLElBQXZCLEVBQWdDO0FBQ3hDOEQsd0ZBQWlCLENBQ2YvRCxLQURlLEVBRWY7QUFBRWdFLG1CQUFLLEVBQUVDLDZEQUFVQTtBQUFuQixhQUZlLEVBR2ZqQixPQUhlLEVBSWYsVUFBQ2tCLE1BQUQsRUFBU0YsS0FBVCxFQUFtQjtBQUNqQixrQkFBSUUsTUFBTSxDQUFDSSxRQUFQLENBQWdCSCxNQUFwQixFQUE0QjtBQUMxQix1QkFBT0gsS0FBUDtBQUNELGVBRkQsTUFFTztBQUNMLHVCQUFPO0FBQ0xJLG9CQUFFLEVBQUVGLE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQkQ7QUFEZixpQkFBUDtBQUdEO0FBQ0YsYUFaYyxDQUFqQjtBQWNELFdBdkVPO0FBd0VSRSxnQkFBTSxFQUFFLGdCQUFDdkIsT0FBRCxFQUFVQyxJQUFWLEVBQWdCakQsS0FBaEIsRUFBdUJDLElBQXZCLEVBQWdDO0FBQ3RDOEQsd0ZBQWlCLENBQ2YvRCxLQURlLEVBRWY7QUFBRWdFLG1CQUFLLEVBQUVDLDZEQUFVQTtBQUFuQixhQUZlLEVBR2ZqQixPQUhlLEVBSWY7QUFBQSxxQkFBTztBQUFFb0Isa0JBQUUsRUFBRTtBQUFOLGVBQVA7QUFBQSxhQUplLENBQWpCO0FBTUQ7QUEvRU87QUFESDtBQVRHLEtBQUQsQ0FGSixFQStGVGpGLGFBL0ZTLEVBZ0dUMEMsV0FoR1MsRUFpR1QyQyxrREFqR1M7QUFWTixHQUFQO0FBOEdELENBcEhNIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYWNoZUV4Y2hhbmdlLCBSZXNvbHZlciB9IGZyb20gJ0B1cnFsL2V4Y2hhbmdlLWdyYXBoY2FjaGUnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7XG4gIGRlZHVwRXhjaGFuZ2UsXG4gIEV4Y2hhbmdlLFxuICBmZXRjaEV4Y2hhbmdlLFxuICBzdHJpbmdpZnlWYXJpYWJsZXMsXG59IGZyb20gJ3VycWwnO1xuaW1wb3J0IHsgcGlwZSwgdGFwIH0gZnJvbSAnd29ua2EnO1xuaW1wb3J0IHtcbiAgTG9naW5NdXRhdGlvbixcbiAgTWVEb2N1bWVudCxcbiAgTWVRdWVyeSxcbiAgUmVnaXN0ZXJNdXRhdGlvbixcbiAgVm90ZU11dGF0aW9uVmFyaWFibGVzLFxufSBmcm9tICcuLi9nZW5lcmF0ZWQvZ3JhcGhxbCc7XG5pbXBvcnQgeyBiZXR0ZXJVcGRhdGVRdWVyeSB9IGZyb20gJy4vYmV0dGVyVXBkYXRlUXVlcnknO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICcuL2lzU2VydmVyJztcblxuY29uc3QgZXJyb3JFeGNoYW5nZTogRXhjaGFuZ2UgPSAoeyBmb3J3YXJkIH0pID0+IChvcHMkKSA9PiB7XG4gIHJldHVybiBwaXBlKFxuICAgIGZvcndhcmQob3BzJCksXG4gICAgdGFwKCh7IGVycm9yIH0pID0+IHtcbiAgICAgIGlmIChlcnJvcj8ubWVzc2FnZS5pbmNsdWRlcygnbm90IGF1dGhlbnRpY2F0ZWQnKSkge1xuICAgICAgICBSb3V0ZXIucmVwbGFjZSgnL2xvZ2luJyk7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5hdGlvblBhcmFtcyB7XG4gIG9mZnNldEFyZ3VtZW50Pzogc3RyaW5nO1xuICBsaW1pdEFyZ3VtZW50Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY3Vyc29yUGFnaW5hdGlvbiA9ICgpOiBSZXNvbHZlciA9PiB7XG4gIHJldHVybiAoX3BhcmVudCwgZmllbGRBcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgIGNvbnN0IHsgcGFyZW50S2V5OiBlbnRpdHlLZXksIGZpZWxkTmFtZSB9ID0gaW5mbztcbiAgICBjb25zdCBhbGxGaWVsZHMgPSBjYWNoZS5pbnNwZWN0RmllbGRzKGVudGl0eUtleSk7XG4gICAgY29uc3QgZmllbGRJbmZvcyA9IGFsbEZpZWxkcy5maWx0ZXIoKGluZm8pID0+IGluZm8uZmllbGROYW1lID09PSBmaWVsZE5hbWUpO1xuICAgIGNvbnN0IHNpemUgPSBmaWVsZEluZm9zLmxlbmd0aDtcbiAgICBpZiAoc2l6ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZEtleSA9IGAke2ZpZWxkTmFtZX0oJHtzdHJpbmdpZnlWYXJpYWJsZXMoZmllbGRBcmdzKX0pYDtcbiAgICBjb25zdCBpc0l0SW5UaGVDYWNoZSA9IGNhY2hlLnJlc29sdmUoXG4gICAgICBjYWNoZS5yZXNvbHZlRmllbGRCeUtleShlbnRpdHlLZXksIGZpZWxkS2V5KSBhcyBzdHJpbmcsXG4gICAgICAncG9zdHMnXG4gICAgKTtcblxuICAgIGluZm8ucGFydGlhbCA9ICFpc0l0SW5UaGVDYWNoZTtcbiAgICBsZXQgaGFzTW9yZSA9IHRydWU7XG5cbiAgICBjb25zdCByZXN1bHRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZpZWxkSW5mb3MuZm9yRWFjaCgoZmkpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGNhY2hlLnJlc29sdmVGaWVsZEJ5S2V5KGVudGl0eUtleSwgZmkuZmllbGRLZXkpIGFzIHN0cmluZztcbiAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZXNvbHZlKGtleSwgJ3Bvc3RzJykgYXMgc3RyaW5nW107XG4gICAgICBjb25zdCBfaGFzTW9yZSA9IGNhY2hlLnJlc29sdmUoa2V5LCAnaGFzTW9yZScpO1xuXG4gICAgICBpZiAoIV9oYXNNb3JlKSB7XG4gICAgICAgIGhhc01vcmUgPSBfaGFzTW9yZSBhcyBib29sZWFuO1xuICAgICAgfVxuXG4gICAgICByZXN1bHRzLnB1c2goLi4uZGF0YSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgX190eXBlbmFtZTogJ1BhZ2luYXRlZFBvc3RzJyxcbiAgICAgIGhhc01vcmUsXG4gICAgICBwb3N0czogcmVzdWx0cyxcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVycWxDbGllbnQgPSAoc3NyRXhjaGFuZ2U6IGFueSwgY3R4OiBhbnkpID0+IHtcbiAgbGV0IGNvb2tpZSA9ICcnO1xuICBpZiAoaXNTZXJ2ZXIoKSkge1xuICAgIGNvb2tpZSA9IGN0eC5yZXEuaGVhZGVycy5jb29raWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsJyxcbiAgICBmZXRjaE9wdGlvbnM6IHtcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScgYXMgY29uc3QsXG4gICAgICBoZWFkZXJzOiBjb29raWVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBjb29raWUsXG4gICAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICB9LFxuICAgIGV4Y2hhbmdlczogW1xuICAgICAgZGVkdXBFeGNoYW5nZSxcbiAgICAgIGNhY2hlRXhjaGFuZ2Uoe1xuICAgICAgICBrZXlzOiB7XG4gICAgICAgICAgUGFnaW5hdGVkUG9zdHM6ICgpID0+IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmVyczoge1xuICAgICAgICAgIFF1ZXJ5OiB7XG4gICAgICAgICAgICBwb3N0czogY3Vyc29yUGFnaW5hdGlvbigpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZXM6IHtcbiAgICAgICAgICBNdXRhdGlvbjoge1xuICAgICAgICAgICAgdm90ZTogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcG9zdElkLCB2YWx1ZSB9ID0gYXJncyBhcyBWb3RlTXV0YXRpb25WYXJpYWJsZXM7XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZWFkRnJhZ21lbnQoXG4gICAgICAgICAgICAgICAgZ3FsYFxuICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgXyBvbiBQb3N0IHtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzXG4gICAgICAgICAgICAgICAgICAgIHZvdGVTdGF0dXNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIHsgaWQ6IHBvc3RJZCB9IGFzIGFueVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnZvdGVTdGF0dXMgPT09IGFyZ3MudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UG9pbnRzID1cbiAgICAgICAgICAgICAgICAgIChkYXRhLnBvaW50cyBhcyBudW1iZXIpICsgKCFkYXRhLnZvdGVTdGF0dXMgPyAxIDogMikgKiB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIGNhY2hlLndyaXRlRnJhZ21lbnQoXG4gICAgICAgICAgICAgICAgICBncWxgXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IF9fIG9uIFBvc3Qge1xuICAgICAgICAgICAgICAgICAgICAgIHBvaW50c1xuICAgICAgICAgICAgICAgICAgICAgIHZvdGVTdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICAgIHsgaWQ6IHBvc3RJZCwgcG9pbnRzOiBuZXdQb2ludHMsIHZvdGVTdGF0dXM6IHZhbHVlIH0gYXMgYW55XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZVBvc3Q6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhbGxGaWVsZHMgPSBjYWNoZS5pbnNwZWN0RmllbGRzKCdRdWVyeScpO1xuICAgICAgICAgICAgICBjb25zdCBmaWVsZEluZm9zID0gYWxsRmllbGRzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoaW5mbykgPT4gaW5mby5maWVsZE5hbWUgPT09ICdwb3N0cydcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgZmllbGRJbmZvcy5mb3JFYWNoKChmaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNhY2hlLmludmFsaWRhdGUoJ1F1ZXJ5JywgJ3Bvc3RzJywgZmkuYXJndW1lbnRzIHx8IHt9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9naW46IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5PihcbiAgICAgICAgICAgICAgICBjYWNoZSxcbiAgICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXG4gICAgICAgICAgICAgICAgX3Jlc3VsdCxcbiAgICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5sb2dpbi5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LmxvZ2luLnVzZXIsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVyOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcbiAgICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8UmVnaXN0ZXJNdXRhdGlvbiwgTWVRdWVyeT4oXG4gICAgICAgICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxuICAgICAgICAgICAgICAgIF9yZXN1bHQsXG4gICAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVnaXN0ZXIuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgbWU6IHJlc3VsdC5yZWdpc3Rlci51c2VyLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2dvdXQ6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5PihcbiAgICAgICAgICAgICAgICBjYWNoZSxcbiAgICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXG4gICAgICAgICAgICAgICAgX3Jlc3VsdCxcbiAgICAgICAgICAgICAgICAoKSA9PiAoeyBtZTogbnVsbCB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBlcnJvckV4Y2hhbmdlLFxuICAgICAgc3NyRXhjaGFuZ2UsXG4gICAgICBmZXRjaEV4Y2hhbmdlLFxuICAgIF0sXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/createUrqlClient.ts\n");

/***/ })

})