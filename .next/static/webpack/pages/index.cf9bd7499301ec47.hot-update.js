"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Posts.js":
/*!*****************************!*\
  !*** ./components/Posts.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _public_src_features_postSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/src/features/postSlice */ \"./public/src/features/postSlice.js\");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Post */ \"./components/Post.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Posts = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const posts = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_public_src_features_postSlice__WEBPACK_IMPORTED_MODULE_3__.selectPost);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = ()=>{\n            const response = axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:8080/api/v1/post\").then((response)=>{\n                console.log(response.data);\n                dispatch((0,_public_src_features_postSlice__WEBPACK_IMPORTED_MODULE_3__.addAllPost)(response.data));\n            }).catch((error)=>{\n                console.log(error);\n            });\n        };\n        fetchData();\n        console.log(posts);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Post__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                post: post\n            }, post.id, false, {\n                fileName: \"/Users/diyanshrao/Desktop/facebook-clone/components/Posts.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/diyanshrao/Desktop/facebook-clone/components/Posts.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Posts, \"ENUDqdKwIx40U6eZCutSSehqnb4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2U7QUFDYztBQUNtQjtBQUNoRDtBQUNnQztBQUUxRCxNQUFNUyxRQUFROztJQUNaLE1BQU1DLFdBQVdQLHdEQUFXQTtJQUM1QixNQUFNUSxRQUFRUCx3REFBV0EsQ0FBQ0Usc0VBQVVBO0lBQ3BDSixnREFBU0EsQ0FBQztRQUNSLE1BQU1VLFlBQVk7WUFDaEIsTUFBTUMsV0FBV2IsaURBQ1gsQ0FBQyxxQ0FDSmUsSUFBSSxDQUFDLENBQUNGO2dCQUNMRyxRQUFRQyxHQUFHLENBQUNKLFNBQVNLLElBQUk7Z0JBQ3pCUixTQUFTTCwwRUFBVUEsQ0FBQ1EsU0FBU0ssSUFBSTtZQUNuQyxHQUNDQyxLQUFLLENBQUMsQ0FBQ0M7Z0JBQ05KLFFBQVFDLEdBQUcsQ0FBQ0c7WUFDZDtRQUNKO1FBQ0FSO1FBQ0FJLFFBQVFDLEdBQUcsQ0FBQ047SUFDZCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1U7a0JBQ0VWLE1BQU1XLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ2hCLDZDQUFJQTtnQkFBQ2dCLE1BQU1BO2VBQVdBLEtBQUtDLEVBQUU7Ozs7Ozs7Ozs7QUFJdEM7R0ExQk1mOztRQUNhTixvREFBV0E7UUFDZEMsb0RBQVdBOzs7S0FGckJLO0FBNEJOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdHMuanM/NzVkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGFkZEFsbFBvc3QsIHNlbGVjdFBvc3QgfSBmcm9tIFwiLi4vcHVibGljL3NyYy9mZWF0dXJlcy9wb3N0U2xpY2VcIjtcbmltcG9ydCBQb3N0IGZyb20gXCIuL1Bvc3RcIjtcbmltcG9ydCB7IE1kT3V0bGluZUVsZWN0cmljU2Nvb3RlciB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuXG5jb25zdCBQb3N0cyA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBwb3N0cyA9IHVzZVNlbGVjdG9yKHNlbGVjdFBvc3QpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXhpb3NcbiAgICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvcG9zdFwiKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICBkaXNwYXRjaChhZGRBbGxQb3N0KHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBmZXRjaERhdGEoKTtcbiAgICBjb25zb2xlLmxvZyhwb3N0cyk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgIDxQb3N0IHBvc3Q9e3Bvc3R9IGtleT17cG9zdC5pZH0gLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJhZGRBbGxQb3N0Iiwic2VsZWN0UG9zdCIsIlBvc3QiLCJNZE91dGxpbmVFbGVjdHJpY1Njb290ZXIiLCJQb3N0cyIsImRpc3BhdGNoIiwicG9zdHMiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImdldCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJkaXYiLCJtYXAiLCJwb3N0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Posts.js\n"));

/***/ })

});