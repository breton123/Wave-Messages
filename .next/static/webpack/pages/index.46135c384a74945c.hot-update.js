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

/***/ "./components/Chat.js":
/*!****************************!*\
  !*** ./components/Chat.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message */ \"./components/Message.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_FriendModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/FriendModal */ \"./atoms/FriendModal.js\");\n/* harmony import */ var _AddFriendModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddFriendModal */ \"./components/AddFriendModal.js\");\n/* harmony import */ var _atoms_colorModeAtom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../atoms/colorModeAtom */ \"./atoms/colorModeAtom.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Chat() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_FriendModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), 2), friendModal = ref[0], setFriendModal = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_colorModeAtom__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), 2), colorMode = ref1[0], setColorMode = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(colorMode ? \"bg-[#393E46]\" : \"bg-white\", \" flex flex-col-reverse pl-20 w-screen pr-20 space-y-10\"),\n        children: [\n            friendModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AddFriendModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/project/Wave-Messages/components/Chat.js\",\n                lineNumber: 14,\n                columnNumber: 23\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    placeholder: \"Write a Message...\",\n                    className: \"border-2 px-3 py-2 rounded-full w-[50%] mb-3\"\n                }, void 0, false, {\n                    fileName: \"/project/Wave-Messages/components/Chat.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/project/Wave-Messages/components/Chat.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Message__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                sent: true\n            }, void 0, false, {\n                fileName: \"/project/Wave-Messages/components/Chat.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Message__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                sent: false\n            }, void 0, false, {\n                fileName: \"/project/Wave-Messages/components/Chat.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/project/Wave-Messages/components/Chat.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"oQeZZDxoBQJ3JHpPFK8pSHMDm6M=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQWdDO0FBQ1E7QUFDSztBQUNhO0FBQ2Y7QUFDSzs7QUFFaEQsU0FBU00sSUFBSSxHQUFHOztJQUNkLElBQXNDTCxHQUF5QixvRkFBekJBLHNEQUFjLENBQUNDLDBEQUFTLENBQUMsTUFBeERLLFdBQVcsR0FBb0JOLEdBQXlCLEdBQTdDLEVBQUVPLGNBQWMsR0FBSVAsR0FBeUIsR0FBN0I7SUFDbEMsSUFBa0NBLElBQTBCLG9GQUExQkEsc0RBQWMsQ0FBQ0ksNERBQVUsQ0FBQyxNQUFyREksU0FBUyxHQUFrQlIsSUFBMEIsR0FBNUMsRUFBRVMsWUFBWSxHQUFJVCxJQUEwQixHQUE5QjtJQUU5QixxQkFDRSw4REFBQ1UsS0FBRztRQUFDQyxTQUFTLEVBQUUsRUFBQyxDQUEwQyxNQUFzRCxDQUE5RkgsU0FBUyxHQUFHLGNBQWMsR0FBRyxVQUFVLEVBQUMsd0RBQXNELENBQUM7O1lBQy9HRixXQUFXLGtCQUFJLDhEQUFDSCx1REFBVzs7OztvQkFBRzswQkFDL0IsOERBQUNPLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxrQ0FBa0M7MEJBQy9DLDRFQUFDQyxPQUFLO29CQUNKQyxXQUFXLEVBQUMsb0JBQW9CO29CQUNoQ0YsU0FBUyxFQUFDLDhDQUE4Qzs7Ozs7d0JBQ2pEOzs7OztvQkFDTDswQkFDTiw4REFBQ1osZ0RBQU87Z0JBQUNlLElBQUksRUFBRSxJQUFJOzs7OztvQkFBSTswQkFDdkIsOERBQUNmLGdEQUFPO2dCQUFDZSxJQUFJLEVBQUUsS0FBSzs7Ozs7b0JBQUk7Ozs7OztZQUNwQixDQUNOO0NBQ0g7R0FqQlFULElBQUk7O1FBQzJCTCxrREFBYztRQUNsQkEsa0RBQWM7OztBQUZ6Q0ssS0FBQUEsSUFBSTtBQW1CYiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhdC5qcz8wNWFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZXNzYWdlIGZyb20gXCIuL01lc3NhZ2VcIjtcclxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XHJcbmltcG9ydCBhZGRGcmllbmQgZnJvbSBcIi4uL2F0b21zL0ZyaWVuZE1vZGFsXCI7XHJcbmltcG9ydCB7IFBsdXNDaXJjbGVJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgRnJpZW5kTW9kYWwgZnJvbSBcIi4vQWRkRnJpZW5kTW9kYWxcIjtcclxuaW1wb3J0IGNvbG9yVGhlbWUgZnJvbSBcIi4uL2F0b21zL2NvbG9yTW9kZUF0b21cIjtcclxuXHJcbmZ1bmN0aW9uIENoYXQoKSB7XHJcbiAgY29uc3QgW2ZyaWVuZE1vZGFsLCBzZXRGcmllbmRNb2RhbF0gPSB1c2VSZWNvaWxTdGF0ZShhZGRGcmllbmQpO1xyXG4gIGNvbnN0IFtjb2xvck1vZGUsIHNldENvbG9yTW9kZV0gPSB1c2VSZWNvaWxTdGF0ZShjb2xvclRoZW1lKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjb2xvck1vZGUgPyBcImJnLVsjMzkzRTQ2XVwiIDogXCJiZy13aGl0ZVwifSBmbGV4IGZsZXgtY29sLXJldmVyc2UgcGwtMjAgdy1zY3JlZW4gcHItMjAgc3BhY2UteS0xMGB9PlxyXG4gICAgICB7ZnJpZW5kTW9kYWwgJiYgPEZyaWVuZE1vZGFsIC8+fVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIGEgTWVzc2FnZS4uLlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiBweC0zIHB5LTIgcm91bmRlZC1mdWxsIHctWzUwJV0gbWItM1wiXHJcbiAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TWVzc2FnZSBzZW50PXt0cnVlfSAvPlxyXG4gICAgICA8TWVzc2FnZSBzZW50PXtmYWxzZX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7XHJcbiJdLCJuYW1lcyI6WyJNZXNzYWdlIiwidXNlUmVjb2lsU3RhdGUiLCJhZGRGcmllbmQiLCJQbHVzQ2lyY2xlSWNvbiIsIkZyaWVuZE1vZGFsIiwiY29sb3JUaGVtZSIsIkNoYXQiLCJmcmllbmRNb2RhbCIsInNldEZyaWVuZE1vZGFsIiwiY29sb3JNb2RlIiwic2V0Q29sb3JNb2RlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInNlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Chat.js\n"));

/***/ })

});