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

/***/ "./components/Message.js":
/*!*******************************!*\
  !*** ./components/Message.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _atoms_colorModeAtom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atoms/colorModeAtom */ \"./atoms/colorModeAtom.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Message(param) {\n    var sent = param.sent;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_colorModeAtom__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), 2), colorMode = ref[0], setColorMode = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center  \".concat(sent ? \"justify-end\" : \"justify-start\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"\".concat(colorMode ? \"bg-white text-gray-800\" : \"bg-base-400\", \"  px-10 py-1 rounded-full text-2xl\"),\n            children: \"Test\"\n        }, void 0, false, {\n            fileName: \"/project/Wave-Messages/components/Message.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/project/Wave-Messages/components/Message.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_s(Message, \"0mM/XveE/0DOpZSA7AiR+phILlo=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = Message;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lc3NhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQWdEO0FBQ1I7O0FBRXhDLFNBQVNFLE9BQU8sQ0FBQyxLQUFRLEVBQUU7UUFBVixJQUFNLEdBQU4sS0FBUSxDQUFOQyxJQUFJOztJQUNyQixJQUFrQ0YsR0FBMEIsb0ZBQTFCQSxzREFBYyxDQUFDRCw0REFBVSxDQUFDLE1BQXJESSxTQUFTLEdBQWtCSCxHQUEwQixHQUE1QyxFQUFFSSxZQUFZLEdBQUlKLEdBQTBCLEdBQTlCO0lBRTlCLHFCQUNFLDhEQUFDSyxLQUFHO1FBQ0ZDLFNBQVMsRUFBRSxxQkFBb0IsQ0FBeUMsT0FBdkNKLElBQUksR0FBRyxhQUFhLEdBQUcsZUFBZSxDQUFFO2tCQUV6RSw0RUFBQ0ssSUFBRTtZQUNERCxTQUFTLEVBQUUsRUFBQyxDQUVYLE1BQWtDLENBRGpDSCxTQUFTLEdBQUcsd0JBQXdCLEdBQUcsYUFBYSxFQUNyRCxvQ0FBa0MsQ0FBQztzQkFDckMsTUFFRDs7Ozs7Z0JBQUs7Ozs7O1lBQ0QsQ0FDTjtDQUNIO0dBaEJRRixPQUFPOztRQUNvQkQsa0RBQWM7OztBQUR6Q0MsS0FBQUEsT0FBTztBQWtCaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lc3NhZ2UuanM/NDg5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29sb3JUaGVtZSBmcm9tIFwiLi4vYXRvbXMvY29sb3JNb2RlQXRvbVwiO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2UoeyBzZW50IH0pIHtcclxuICBjb25zdCBbY29sb3JNb2RlLCBzZXRDb2xvck1vZGVdID0gdXNlUmVjb2lsU3RhdGUoY29sb3JUaGVtZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyICAke3NlbnQgPyBcImp1c3RpZnktZW5kXCIgOiBcImp1c3RpZnktc3RhcnRcIn1gfVxyXG4gICAgPlxyXG4gICAgICA8aDFcclxuICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgY29sb3JNb2RlID8gXCJiZy13aGl0ZSB0ZXh0LWdyYXktODAwXCIgOiBcImJnLWJhc2UtNDAwXCJcclxuICAgICAgICB9ICBweC0xMCBweS0xIHJvdW5kZWQtZnVsbCB0ZXh0LTJ4bGB9XHJcbiAgICAgID5cclxuICAgICAgICBUZXN0XHJcbiAgICAgIDwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlO1xyXG4iXSwibmFtZXMiOlsiY29sb3JUaGVtZSIsInVzZVJlY29pbFN0YXRlIiwiTWVzc2FnZSIsInNlbnQiLCJjb2xvck1vZGUiLCJzZXRDb2xvck1vZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Message.js\n"));

/***/ })

});