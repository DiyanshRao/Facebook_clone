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

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SidebarItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarItem.js */ \"./components/SidebarItem.js\");\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/im */ \"./node_modules/react-icons/im/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Sidebar = ()=>{\n    var _session, _session1;\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-2 py-3 pl-4  hover:bg-gray-200 rounded-l-xl cursor-pointer \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: (_session = session) === null || _session === void 0 ? void 0 : _session.user.image,\n                        height: 40,\n                        width: 40,\n                        className: \"rounded-full cursor-pointer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/diyanshrao/Desktop/facebook-clone/components/Sidebar.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"hidden sm:inline-flex font-medium\",\n                        children: (_session1 = session) === null || _session1 === void 0 ? void 0 : _session1.user.name\n                    }, void 0, false, {\n                        fileName: \"/Users/diyanshrao/Desktop/facebook-clone/components/Sidebar.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/diyanshrao/Desktop/facebook-clone/components/Sidebar.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarItem_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                Icon: react_icons_im__WEBPACK_IMPORTED_MODULE_5__.ImUsers,\n                value: \"Friends\"\n            }, void 0, false, {\n                fileName: \"/Users/diyanshrao/Desktop/facebook-clone/components/Sidebar.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarItem_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdGroups,\n                value: \"Groups\"\n            }, void 0, false, {\n                fileName: \"/Users/diyanshrao/Desktop/facebook-clone/components/Sidebar.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarItem_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                Icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiOutlineShop,\n                value: \"MarketPlace\"\n            }, void 0, false, {\n                fileName: \"/Users/diyanshrao/Desktop/facebook-clone/components/Sidebar.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarItem_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdOutlineOndemandVideo,\n                value: \"Watch\"\n            }, void 0, false, {\n                fileName: \"/Users/diyanshrao/Desktop/facebook-clone/components/Sidebar.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarItem_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsStopwatch,\n                value: \"Memeries\"\n            }, void 0, false, {\n                fileName: \"/Users/diyanshrao/Desktop/facebook-clone/components/Sidebar.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarItem_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdOutlineExpandMore,\n                value: \"See more\"\n            }, void 0, false, {\n                fileName: \"/Users/diyanshrao/Desktop/facebook-clone/components/Sidebar.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/diyanshrao/Desktop/facebook-clone/components/Sidebar.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"ujwIunAD3hlHFoJLG3BNiDLiMqM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNpQjtBQUNGO0FBQ0M7QUFDSztBQUM4QjtBQUNoQztBQUNkO0FBQ2M7QUFFN0MsTUFBTVUsVUFBVTtRQU1EQyxVQU1KQTs7SUFYVCxNQUFNLEVBQUVDLE1BQU1ELE9BQU8sRUFBRUUsTUFBTSxFQUFFLEdBQUdKLDJEQUFVQTtJQUM1QyxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1AsbURBQUtBO3dCQUNKUSxHQUFHLEdBQUVMLFdBQUFBLHFCQUFBQSwrQkFBQUEsU0FBU00sSUFBSSxDQUFDQyxLQUFLO3dCQUN4QkMsUUFBUTt3QkFDUkMsT0FBTzt3QkFDUEwsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDTTt3QkFBRU4sV0FBVTttQ0FDVkosWUFBQUEscUJBQUFBLGdDQUFBQSxVQUFTTSxJQUFJLENBQUNLLElBQUk7Ozs7Ozs7Ozs7OzswQkFHdkIsOERBQUNyQix1REFBV0E7Z0JBQUNzQixNQUFNckIsbURBQU9BO2dCQUFFc0IsT0FBTTs7Ozs7OzBCQUNsQyw4REFBQ3ZCLHVEQUFXQTtnQkFBQ3NCLE1BQU1wQixvREFBUUE7Z0JBQUVxQixPQUFNOzs7Ozs7MEJBQ25DLDhEQUFDdkIsdURBQVdBO2dCQUFDc0IsTUFBTW5CLHlEQUFhQTtnQkFBRW9CLE9BQU07Ozs7OzswQkFDeEMsOERBQUN2Qix1REFBV0E7Z0JBQUNzQixNQUFNbEIsa0VBQXNCQTtnQkFBRW1CLE9BQU07Ozs7OzswQkFDakQsOERBQUN2Qix1REFBV0E7Z0JBQUNzQixNQUFNaEIsdURBQVdBO2dCQUFFaUIsT0FBTTs7Ozs7OzBCQUN0Qyw4REFBQ3ZCLHVEQUFXQTtnQkFBQ3NCLE1BQU1qQiwrREFBbUJBO2dCQUFFa0IsT0FBTTs7Ozs7Ozs7Ozs7O0FBR3BEO0dBdkJNZDs7UUFDOEJELHVEQUFVQTs7O0tBRHhDQztBQXlCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXIuanM/M2RhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2lkZWJhckl0ZW0gZnJvbSBcIi4vU2lkZWJhckl0ZW0uanNcIjtcbmltcG9ydCB7IEltVXNlcnMgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW1cIjtcbmltcG9ydCB7IE1kR3JvdXBzIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgeyBBaU91dGxpbmVTaG9wIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyBNZE91dGxpbmVPbmRlbWFuZFZpZGVvLCBNZE91dGxpbmVFeHBhbmRNb3JlIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgeyBCc1N0b3B3YXRjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZS1mbGV4IGZsZXgtY29sIHB5LTIgcGwtMiBtYXgtdy14bCBsZzptaW4tdy1bMzIwcHhdXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBweS0zIHBsLTQgIGhvdmVyOmJnLWdyYXktMjAwIHJvdW5kZWQtbC14bCBjdXJzb3ItcG9pbnRlciBcIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtzZXNzaW9uPy51c2VyLmltYWdlfVxuICAgICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImhpZGRlbiBzbTppbmxpbmUtZmxleCBmb250LW1lZGl1bVwiPlxuICAgICAgICAgIHtzZXNzaW9uPy51c2VyLm5hbWV9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNpZGViYXJJdGVtIEljb249e0ltVXNlcnN9IHZhbHVlPVwiRnJpZW5kc1wiIC8+XG4gICAgICA8U2lkZWJhckl0ZW0gSWNvbj17TWRHcm91cHN9IHZhbHVlPVwiR3JvdXBzXCIgLz5cbiAgICAgIDxTaWRlYmFySXRlbSBJY29uPXtBaU91dGxpbmVTaG9wfSB2YWx1ZT1cIk1hcmtldFBsYWNlXCIgLz5cbiAgICAgIDxTaWRlYmFySXRlbSBJY29uPXtNZE91dGxpbmVPbmRlbWFuZFZpZGVvfSB2YWx1ZT1cIldhdGNoXCIgLz5cbiAgICAgIDxTaWRlYmFySXRlbSBJY29uPXtCc1N0b3B3YXRjaH0gdmFsdWU9XCJNZW1lcmllc1wiIC8+XG4gICAgICA8U2lkZWJhckl0ZW0gSWNvbj17TWRPdXRsaW5lRXhwYW5kTW9yZX0gdmFsdWU9XCJTZWUgbW9yZVwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2lkZWJhckl0ZW0iLCJJbVVzZXJzIiwiTWRHcm91cHMiLCJBaU91dGxpbmVTaG9wIiwiTWRPdXRsaW5lT25kZW1hbmRWaWRlbyIsIk1kT3V0bGluZUV4cGFuZE1vcmUiLCJCc1N0b3B3YXRjaCIsIkltYWdlIiwidXNlU2Vzc2lvbiIsIlNpZGViYXIiLCJzZXNzaW9uIiwiZGF0YSIsInN0YXR1cyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsInVzZXIiLCJpbWFnZSIsImhlaWdodCIsIndpZHRoIiwicCIsIm5hbWUiLCJJY29uIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n"));

/***/ })

});