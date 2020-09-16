webpackHotUpdate_N_E("pages/create-post",{

/***/ "./src/utils/createUrqlClient.ts":
/*!***************************************!*\
  !*** ./src/utils/createUrqlClient.ts ***!
  \***************************************/
/*! exports provided: cursorPagination, createUrqlClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cursorPagination\", function() { return cursorPagination; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUrqlClient\", function() { return createUrqlClient; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @urql/exchange-graphcache */ \"./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs\");\n/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wonka */ \"./node_modules/wonka/dist/wonka.mjs\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _betterUpdateQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./betterUpdateQuery */ \"./src/utils/betterUpdateQuery.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n                  fragment __ on Post {\\n                    points\\n                  }\\n                \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n                fragment _ on Post {\\n                  id\\n                  points\\n                  voteStatus\\n                }\\n              \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar errorExchange = function errorExchange(_ref) {\n  var forward = _ref.forward;\n  return function (ops$) {\n    return Object(wonka__WEBPACK_IMPORTED_MODULE_4__[\"pipe\"])(forward(ops$), Object(wonka__WEBPACK_IMPORTED_MODULE_4__[\"tap\"])(function (_ref2) {\n      var error = _ref2.error;\n\n      if (error === null || error === void 0 ? void 0 : error.message.includes('not authenticated')) {\n        next_router__WEBPACK_IMPORTED_MODULE_7___default.a.replace('/login');\n      }\n    }));\n  };\n};\n\nvar cursorPagination = function cursorPagination() {\n  return function (_parent, fieldArgs, cache, info) {\n    var entityKey = info.parentKey,\n        fieldName = info.fieldName;\n    var allFields = cache.inspectFields(entityKey);\n    var fieldInfos = allFields.filter(function (info) {\n      return info.fieldName === fieldName;\n    });\n    var size = fieldInfos.length;\n\n    if (size === 0) {\n      return undefined;\n    }\n\n    var fieldKey = \"\".concat(fieldName, \"(\").concat(Object(urql__WEBPACK_IMPORTED_MODULE_2__[\"stringifyVariables\"])(fieldArgs), \")\");\n    var isItInTheCache = cache.resolve(cache.resolveFieldByKey(entityKey, fieldKey), 'posts');\n    info.partial = !isItInTheCache;\n    var hasMore = true;\n    var results = [];\n    fieldInfos.forEach(function (fi) {\n      var key = cache.resolveFieldByKey(entityKey, fi.fieldKey);\n      var data = cache.resolve(key, 'posts');\n\n      var _hasMore = cache.resolve(key, 'hasMore');\n\n      if (!_hasMore) {\n        hasMore = _hasMore;\n      }\n\n      results.push.apply(results, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data));\n    });\n    return {\n      __typename: 'PaginatedPosts',\n      hasMore: hasMore,\n      posts: results\n    };\n  };\n};\nvar createUrqlClient = function createUrqlClient(ssrExchange) {\n  return {\n    url: 'http://localhost:4000/graphql',\n    fetchOptions: {\n      credentials: 'include'\n    },\n    exchanges: [urql__WEBPACK_IMPORTED_MODULE_2__[\"dedupExchange\"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_3__[\"cacheExchange\"])({\n      keys: {\n        PaginatedPosts: function PaginatedPosts() {\n          return null;\n        }\n      },\n      resolvers: {\n        Query: {\n          posts: cursorPagination()\n        }\n      },\n      updates: {\n        Mutation: {\n          vote: function vote(_result, args, cache, info) {\n            var _ref3 = args,\n                postId = _ref3.postId,\n                value = _ref3.value;\n            var data = cache.readFragment(graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject()), {\n              id: postId\n            });\n\n            if (data) {\n              if (data.voteStatus === args.value) {\n                return;\n              }\n\n              var newPoints = data.points + value * 2;\n              cache.writeFragment(graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject2()), {\n                id: postId,\n                points: newPoints\n              });\n            }\n          },\n          createPost: function createPost(_result, args, cache, info) {\n            var allFields = cache.inspectFields('Query');\n            var fieldInfos = allFields.filter(function (info) {\n              return info.fieldName === 'posts';\n            });\n            fieldInfos.forEach(function (fi) {\n              cache.invalidate('Query', 'posts', fi.arguments || {});\n            });\n          },\n          login: function login(_result, args, cache, info) {\n            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_6__[\"betterUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_5__[\"MeDocument\"]\n            }, _result, function (result, query) {\n              if (result.login.errors) {\n                return query;\n              } else {\n                return {\n                  me: result.login.user\n                };\n              }\n            });\n          },\n          register: function register(_result, args, cache, info) {\n            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_6__[\"betterUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_5__[\"MeDocument\"]\n            }, _result, function (result, query) {\n              if (result.register.errors) {\n                return query;\n              } else {\n                return {\n                  me: result.register.user\n                };\n              }\n            });\n          },\n          logout: function logout(_result, args, cache, info) {\n            Object(_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_6__[\"betterUpdateQuery\"])(cache, {\n              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_5__[\"MeDocument\"]\n            }, _result, function () {\n              return {\n                me: null\n              };\n            });\n          }\n        }\n      }\n    }), errorExchange, ssrExchange, urql__WEBPACK_IMPORTED_MODULE_2__[\"fetchExchange\"]]\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHM/ZjRiNiJdLCJuYW1lcyI6WyJlcnJvckV4Y2hhbmdlIiwiZm9yd2FyZCIsIm9wcyQiLCJwaXBlIiwidGFwIiwiZXJyb3IiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJSb3V0ZXIiLCJyZXBsYWNlIiwiY3Vyc29yUGFnaW5hdGlvbiIsIl9wYXJlbnQiLCJmaWVsZEFyZ3MiLCJjYWNoZSIsImluZm8iLCJlbnRpdHlLZXkiLCJwYXJlbnRLZXkiLCJmaWVsZE5hbWUiLCJhbGxGaWVsZHMiLCJpbnNwZWN0RmllbGRzIiwiZmllbGRJbmZvcyIsImZpbHRlciIsInNpemUiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJmaWVsZEtleSIsInN0cmluZ2lmeVZhcmlhYmxlcyIsImlzSXRJblRoZUNhY2hlIiwicmVzb2x2ZSIsInJlc29sdmVGaWVsZEJ5S2V5IiwicGFydGlhbCIsImhhc01vcmUiLCJyZXN1bHRzIiwiZm9yRWFjaCIsImZpIiwia2V5IiwiZGF0YSIsIl9oYXNNb3JlIiwicHVzaCIsIl9fdHlwZW5hbWUiLCJwb3N0cyIsImNyZWF0ZVVycWxDbGllbnQiLCJzc3JFeGNoYW5nZSIsInVybCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiZXhjaGFuZ2VzIiwiZGVkdXBFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJrZXlzIiwiUGFnaW5hdGVkUG9zdHMiLCJyZXNvbHZlcnMiLCJRdWVyeSIsInVwZGF0ZXMiLCJNdXRhdGlvbiIsInZvdGUiLCJfcmVzdWx0IiwiYXJncyIsInBvc3RJZCIsInZhbHVlIiwicmVhZEZyYWdtZW50IiwiZ3FsIiwiaWQiLCJ2b3RlU3RhdHVzIiwibmV3UG9pbnRzIiwicG9pbnRzIiwid3JpdGVGcmFnbWVudCIsImNyZWF0ZVBvc3QiLCJpbnZhbGlkYXRlIiwiYXJndW1lbnRzIiwibG9naW4iLCJiZXR0ZXJVcGRhdGVRdWVyeSIsInF1ZXJ5IiwiTWVEb2N1bWVudCIsInJlc3VsdCIsImVycm9ycyIsIm1lIiwidXNlciIsInJlZ2lzdGVyIiwibG9nb3V0IiwiZmV0Y2hFeGNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGFBQXVCLEdBQUcsU0FBMUJBLGFBQTBCO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsU0FBaUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pELFdBQU9DLGtEQUFJLENBQ1RGLE9BQU8sQ0FBQ0MsSUFBRCxDQURFLEVBRVRFLGlEQUFHLENBQUMsaUJBQWU7QUFBQSxVQUFaQyxLQUFZLFNBQVpBLEtBQVk7O0FBQ2pCLFVBQUlBLEtBQUosYUFBSUEsS0FBSix1QkFBSUEsS0FBSyxDQUFFQyxPQUFQLENBQWVDLFFBQWYsQ0FBd0IsbUJBQXhCLENBQUosRUFBa0Q7QUFDaERDLDBEQUFNLENBQUNDLE9BQVAsQ0FBZSxRQUFmO0FBQ0Q7QUFDRixLQUpFLENBRk0sQ0FBWDtBQVFELEdBVCtCO0FBQUEsQ0FBaEM7O0FBZ0JPLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBZ0I7QUFDOUMsU0FBTyxVQUFDQyxPQUFELEVBQVVDLFNBQVYsRUFBcUJDLEtBQXJCLEVBQTRCQyxJQUE1QixFQUFxQztBQUFBLFFBQ3ZCQyxTQUR1QixHQUNFRCxJQURGLENBQ2xDRSxTQURrQztBQUFBLFFBQ1pDLFNBRFksR0FDRUgsSUFERixDQUNaRyxTQURZO0FBRTFDLFFBQU1DLFNBQVMsR0FBR0wsS0FBSyxDQUFDTSxhQUFOLENBQW9CSixTQUFwQixDQUFsQjtBQUNBLFFBQU1LLFVBQVUsR0FBR0YsU0FBUyxDQUFDRyxNQUFWLENBQWlCLFVBQUNQLElBQUQ7QUFBQSxhQUFVQSxJQUFJLENBQUNHLFNBQUwsS0FBbUJBLFNBQTdCO0FBQUEsS0FBakIsQ0FBbkI7QUFDQSxRQUFNSyxJQUFJLEdBQUdGLFVBQVUs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O0FBQ0QsZUFGRCxNQUVPO0FBQ0wsdUJBQU87QUFDTEksb0JBQUUsRUFBRUYsTUFBTSxDQUFDSSxRQUFQLENBQWdCRDtBQURmLGlCQUFQO0FBR0Q7QUFDRixhQVpjLENBQWpCO0FBY0QsV0FyRU87QUFzRVJFLGdCQUFNLEVBQUUsZ0JBQUN2QixPQUFELEVBQVVDLElBQVYsRUFBZ0I1QyxLQUFoQixFQUF1QkMsSUFBdkIsRUFBZ0M7QUFDdEN5RCx3RkFBaUIsQ0FDZjFELEtBRGUsRUFFZjtBQUFFMkQsbUJBQUssRUFBRUMsNkRBQVVBO0FBQW5CLGFBRmUsRUFHZmpCLE9BSGUsRUFJZjtBQUFBLHFCQUFPO0FBQUVvQixrQkFBRSxFQUFFO0FBQU4sZUFBUDtBQUFBLGFBSmUsQ0FBakI7QUFNRDtBQTdFTztBQURIO0FBVEcsS0FBRCxDQUZKLEVBNkZUNUUsYUE3RlMsRUE4RlQwQyxXQTlGUyxFQStGVHNDLGtEQS9GUztBQUwwQyxHQUF2QjtBQUFBLENBQXpCIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBkZWR1cEV4Y2hhbmdlLFxuICBmZXRjaEV4Y2hhbmdlLFxuICBFeGNoYW5nZSxcbiAgc3RyaW5naWZ5VmFyaWFibGVzLFxufSBmcm9tICd1cnFsJztcbmltcG9ydCB7IGNhY2hlRXhjaGFuZ2UsIFJlc29sdmVyIH0gZnJvbSAnQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZSc7XG5pbXBvcnQgeyBwaXBlLCB0YXAgfSBmcm9tICd3b25rYSc7XG5pbXBvcnQge1xuICBMb2dpbk11dGF0aW9uLFxuICBNZVF1ZXJ5LFxuICBNZURvY3VtZW50LFxuICBSZWdpc3Rlck11dGF0aW9uLFxuICBWb3RlTXV0YXRpb25WYXJpYWJsZXMsXG59IGZyb20gJy4uL2dlbmVyYXRlZC9ncmFwaHFsJztcbmltcG9ydCB7IGJldHRlclVwZGF0ZVF1ZXJ5IH0gZnJvbSAnLi9iZXR0ZXJVcGRhdGVRdWVyeSc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGZpZWxkSW5mb09mS2V5IH0gZnJvbSAnQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZS9kaXN0L3R5cGVzL3N0b3JlJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5jb25zdCBlcnJvckV4Y2hhbmdlOiBFeGNoYW5nZSA9ICh7IGZvcndhcmQgfSkgPT4gKG9wcyQpID0+IHtcbiAgcmV0dXJuIHBpcGUoXG4gICAgZm9yd2FyZChvcHMkKSxcbiAgICB0YXAoKHsgZXJyb3IgfSkgPT4ge1xuICAgICAgaWYgKGVycm9yPy5tZXNzYWdlLmluY2x1ZGVzKCdub3QgYXV0aGVudGljYXRlZCcpKSB7XG4gICAgICAgIFJvdXRlci5yZXBsYWNlKCcvbG9naW4nKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBQYWdpbmF0aW9uUGFyYW1zIHtcbiAgb2Zmc2V0QXJndW1lbnQ/OiBzdHJpbmc7XG4gIGxpbWl0QXJndW1lbnQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBjdXJzb3JQYWdpbmF0aW9uID0gKCk6IFJlc29sdmVyID0+IHtcbiAgcmV0dXJuIChfcGFyZW50LCBmaWVsZEFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgY29uc3QgeyBwYXJlbnRLZXk6IGVudGl0eUtleSwgZmllbGROYW1lIH0gPSBpbmZvO1xuICAgIGNvbnN0IGFsbEZpZWxkcyA9IGNhY2hlLmluc3BlY3RGaWVsZHMoZW50aXR5S2V5KTtcbiAgICBjb25zdCBmaWVsZEluZm9zID0gYWxsRmllbGRzLmZpbHRlcigoaW5mbykgPT4gaW5mby5maWVsZE5hbWUgPT09IGZpZWxkTmFtZSk7XG4gICAgY29uc3Qgc2l6ZSA9IGZpZWxkSW5mb3MubGVuZ3RoO1xuICAgIGlmIChzaXplID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkS2V5ID0gYCR7ZmllbGROYW1lfSgke3N0cmluZ2lmeVZhcmlhYmxlcyhmaWVsZEFyZ3MpfSlgO1xuICAgIGNvbnN0IGlzSXRJblRoZUNhY2hlID0gY2FjaGUucmVzb2x2ZShcbiAgICAgIGNhY2hlLnJlc29sdmVGaWVsZEJ5S2V5KGVudGl0eUtleSwgZmllbGRLZXkpIGFzIHN0cmluZyxcbiAgICAgICdwb3N0cydcbiAgICApO1xuXG4gICAgaW5mby5wYXJ0aWFsID0gIWlzSXRJblRoZUNhY2hlO1xuICAgIGxldCBoYXNNb3JlID0gdHJ1ZTtcblxuICAgIGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW107XG4gICAgZmllbGRJbmZvcy5mb3JFYWNoKChmaSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gY2FjaGUucmVzb2x2ZUZpZWxkQnlLZXkoZW50aXR5S2V5LCBmaS5maWVsZEtleSkgYXMgc3RyaW5nO1xuICAgICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlc29sdmUoa2V5LCAncG9zdHMnKSBhcyBzdHJpbmdbXTtcbiAgICAgIGNvbnN0IF9oYXNNb3JlID0gY2FjaGUucmVzb2x2ZShrZXksICdoYXNNb3JlJyk7XG5cbiAgICAgIGlmICghX2hhc01vcmUpIHtcbiAgICAgICAgaGFzTW9yZSA9IF9oYXNNb3JlIGFzIGJvb2xlYW47XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdHMucHVzaCguLi5kYXRhKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBfX3R5cGVuYW1lOiAnUGFnaW5hdGVkUG9zdHMnLFxuICAgICAgaGFzTW9yZSxcbiAgICAgIHBvc3RzOiByZXN1bHRzLFxuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVXJxbENsaWVudCA9IChzc3JFeGNoYW5nZTogYW55KSA9PiAoe1xuICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbCcsXG4gIGZldGNoT3B0aW9uczoge1xuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScgYXMgY29uc3QsXG4gIH0sXG4gIGV4Y2hhbmdlczogW1xuICAgIGRlZHVwRXhjaGFuZ2UsXG4gICAgY2FjaGVFeGNoYW5nZSh7XG4gICAgICBrZXlzOiB7XG4gICAgICAgIFBhZ2luYXRlZFBvc3RzOiAoKSA9PiBudWxsLFxuICAgICAgfSxcbiAgICAgIHJlc29sdmVyczoge1xuICAgICAgICBRdWVyeToge1xuICAgICAgICAgIHBvc3RzOiBjdXJzb3JQYWdpbmF0aW9uKCksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdXBkYXRlczoge1xuICAgICAgICBNdXRhdGlvbjoge1xuICAgICAgICAgIHZvdGU6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwb3N0SWQsIHZhbHVlIH0gPSBhcmdzIGFzIFZvdGVNdXRhdGlvblZhcmlhYmxlcztcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZWFkRnJhZ21lbnQoXG4gICAgICAgICAgICAgIGdxbGBcbiAgICAgICAgICAgICAgICBmcmFnbWVudCBfIG9uIFBvc3Qge1xuICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIHBvaW50c1xuICAgICAgICAgICAgICAgICAgdm90ZVN0YXR1c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgeyBpZDogcG9zdElkIH0gYXMgYW55XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgaWYgKGRhdGEudm90ZVN0YXR1cyA9PT0gYXJncy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zdCBuZXdQb2ludHMgPSAoZGF0YS5wb2ludHMgYXMgbnVtYmVyKSArIHZhbHVlICogMjtcblxuICAgICAgICAgICAgICBjYWNoZS53cml0ZUZyYWdtZW50KFxuICAgICAgICAgICAgICAgIGdxbGBcbiAgICAgICAgICAgICAgICAgIGZyYWdtZW50IF9fIG9uIFBvc3Qge1xuICAgICAgICAgICAgICAgICAgICBwb2ludHNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIHsgaWQ6IHBvc3RJZCwgcG9pbnRzOiBuZXdQb2ludHMgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNyZWF0ZVBvc3Q6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWxsRmllbGRzID0gY2FjaGUuaW5zcGVjdEZpZWxkcygnUXVlcnknKTtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkSW5mb3MgPSBhbGxGaWVsZHMuZmlsdGVyKFxuICAgICAgICAgICAgICAoaW5mbykgPT4gaW5mby5maWVsZE5hbWUgPT09ICdwb3N0cydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmaWVsZEluZm9zLmZvckVhY2goKGZpKSA9PiB7XG4gICAgICAgICAgICAgIGNhY2hlLmludmFsaWRhdGUoJ1F1ZXJ5JywgJ3Bvc3RzJywgZmkuYXJndW1lbnRzIHx8IHt9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbG9naW46IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8TG9naW5NdXRhdGlvbiwgTWVRdWVyeT4oXG4gICAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXG4gICAgICAgICAgICAgIF9yZXN1bHQsXG4gICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5sb2dpbi5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbWU6IHJlc3VsdC5sb2dpbi51c2VyLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWdpc3RlcjogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxSZWdpc3Rlck11dGF0aW9uLCBNZVF1ZXJ5PihcbiAgICAgICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcbiAgICAgICAgICAgICAgX3Jlc3VsdCxcbiAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlZ2lzdGVyLmVycm9ycykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LnJlZ2lzdGVyLnVzZXIsXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxvZ291dDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5PihcbiAgICAgICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcbiAgICAgICAgICAgICAgX3Jlc3VsdCxcbiAgICAgICAgICAgICAgKCkgPT4gKHsgbWU6IG51bGwgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgZXJyb3JFeGNoYW5nZSxcbiAgICBzc3JFeGNoYW5nZSxcbiAgICBmZXRjaEV4Y2hhbmdlLFxuICBdLFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/createUrqlClient.ts\n");

/***/ })

})