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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _project_Wave_Messages_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _project_Wave_Messages_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_project_Wave_Messages_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var _atoms_FriendModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../atoms/FriendModal */ \"./atoms/FriendModal.js\");\n/* harmony import */ var _atoms_userID__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../atoms/userID */ \"./atoms/userID.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    var ChangeSideBar = function ChangeSideBar() {\n        if (size == true) {\n            setSize(false);\n            console.log(\"Changed\");\n        } else {\n            setSize(true);\n            console.log(\"Changed\");\n        }\n    };\n    var changeColorMode = function changeColorMode() {\n        if (colorMode) {\n            setColorMode(false);\n        } else {\n            setColorMode(true);\n        }\n    };\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState)(_atoms_FriendModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"]), 2), friendModal = ref[0], setFriendModal = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState)(_atoms_userID__WEBPACK_IMPORTED_MODULE_7__[\"default\"]), 2), GlobalUserID = ref1[0], setGlobalUserID = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), size = ref2[0], setSize = ref2[1];\n    var ref3 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)(), session = ref3.data;\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"default\"), userID = ref4[0], setUserID = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), friends = ref5[0], setFriends = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), colorMode = ref6[0], setColorMode = ref6[1];\n    function addUser() {\n        return _addUser.apply(this, arguments);\n    }\n    function _addUser() {\n        _addUser = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_project_Wave_Messages_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, ref1, ref2;\n            return _project_Wave_Messages_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!session) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        ;\n                        _ctx.next = 4;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"users\"), {\n                            email: session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.email,\n                            name: session === null || session === void 0 ? void 0 : (ref1 = session.user) === null || ref1 === void 0 ? void 0 : ref1.name,\n                            image: session === null || session === void 0 ? void 0 : (ref2 = session.user) === null || ref2 === void 0 ? void 0 : ref2.image\n                        });\n                    case 4:\n                        _ctx.next = 6;\n                        return getID();\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _addUser.apply(this, arguments);\n    }\n    function checkAccount() {\n        return _checkAccount.apply(this, arguments);\n    }\n    function _checkAccount() {\n        _checkAccount = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_project_Wave_Messages_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref;\n            return _project_Wave_Messages_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (session) {\n                            ;\n                            console.log(\"Check Account\");\n                            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"users\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.where)(\"email\", \"==\", session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.email)), function(snapshot) {\n                                if (snapshot.empty) {\n                                    addUser();\n                                } else {\n                                    var id = snapshot.docs[0].id;\n                                    setUserID(id);\n                                    setGlobalUserID(id);\n                                }\n                            });\n                        }\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _checkAccount.apply(this, arguments);\n    }\n    function getID() {\n        return _getID.apply(this, arguments);\n    }\n    function _getID() {\n        _getID = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_project_Wave_Messages_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref;\n            return _project_Wave_Messages_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"users\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.where)(\"email\", \"==\", session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.email)), function(snapshot) {\n                            var id = snapshot.docs[0].id;\n                            setUserID(id);\n                            setGlobalUserID(id);\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _getID.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        checkAccount();\n    }, [\n        session\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"users\", userID, \"friends\")), function(snapshot) {\n            return setFriends(snapshot.docs);\n        });\n    }, [\n        _firebase__WEBPACK_IMPORTED_MODULE_5__.db,\n        userID\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"text-[#51557E] flex flex-col bg-[#1B2430] px-3  text-center items-center py-2 shadow-lg space-y-5 \".concat(size ? \"w-40\" : \"w-20\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.DotsCircleHorizontalIcon, {\n                className: \"absolute h-6  cursor-pointer \".concat(size ? \"left-40\" : \"left-20\"),\n                onClick: function() {\n                    return ChangeSideBar();\n                }\n            }, void 0, false, {\n                fileName: \"/project/Wave-Messages/components/Header.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this),\n            !session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"mb-5 cursor-pointer\",\n                onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn,\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/project/Wave-Messages/components/Header.js\",\n                lineNumber: 120,\n                columnNumber: 9\n            }, this),\n            session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"mb-5 cursor-pointer\",\n                onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut,\n                children: \"Log Out\"\n            }, void 0, false, {\n                fileName: \"/project/Wave-Messages/components/Header.js\",\n                lineNumber: 125,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex justify-between space-x-2 items-center cursor-pointer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        className: \"bg-blue-500 mask-circle \".concat(size ? \"h-10\" : \"h-20\"),\n                        src: \"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80\"\n                    }, void 0, false, {\n                        fileName: \"/project/Wave-Messages/components/Header.js\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: \"\".concat(size ? \"\" : \"hidden\"),\n                        children: \"Louis Breton\"\n                    }, void 0, false, {\n                        fileName: \"/project/Wave-Messages/components/Header.js\",\n                        lineNumber: 134,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/project/Wave-Messages/components/Header.js\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.PlusCircleIcon, {\n                className: \"h-10 cursor-pointer\",\n                onClick: function() {\n                    setFriendModal(true);\n                }\n            }, void 0, false, {\n                fileName: \"/project/Wave-Messages/components/Header.js\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        className: \"toggle opacity-80\",\n                        onClick: function() {\n                            changeColorMode();\n                        }\n                    }, void 0, false, {\n                        fileName: \"/project/Wave-Messages/components/Header.js\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, this),\n                    colorMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: \"Dark Mode\"\n                    }, void 0, false, {\n                        fileName: \"/project/Wave-Messages/components/Header.js\",\n                        lineNumber: 150,\n                        columnNumber: 22\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: \"Light Mode\"\n                    }, void 0, false, {\n                        fileName: \"/project/Wave-Messages/components/Header.js\",\n                        lineNumber: 150,\n                        columnNumber: 43\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/project/Wave-Messages/components/Header.js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/project/Wave-Messages/components/Header.js\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"6h4DnAA8XhYpxXbBA9LzGMYlVI4=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsWUFBVTs7Ozs7NEJBQUs7Ozs7OztvQkFDakQ7Ozs7OztZQUNGLENBQ047Q0FDSDtHQXJJUWhDLE1BQU07O1FBQ3lCRCxrREFBYztRQUNaQSxrREFBYztRQUU1QmIsdURBQVU7OztBQUo3QmMsS0FBQUEsTUFBTTtBQXVJZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEb3RzQ2lyY2xlSG9yaXpvbnRhbEljb24sXHJcbiAgUGx1c0NpcmNsZUljb24sXHJcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgSW1hZ2UsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgb25TbmFwc2hvdCxcclxuICBxdWVyeSxcclxuICBjb2xsZWN0aW9uLFxyXG4gIHdoZXJlLFxyXG4gIHNuYXBzaG90LFxyXG4gIGFkZERvYyxcclxuICBkb2MsXHJcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgYWRkRnJpZW5kIGZyb20gXCIuLi9hdG9tcy9GcmllbmRNb2RhbFwiO1xyXG5pbXBvcnQgZ2xvYmFsVXNlcklEIGZyb20gXCIuLi9hdG9tcy91c2VySURcIjtcclxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW2ZyaWVuZE1vZGFsLCBzZXRGcmllbmRNb2RhbF0gPSB1c2VSZWNvaWxTdGF0ZShhZGRGcmllbmQpO1xyXG4gIGNvbnN0IFtHbG9iYWxVc2VySUQsIHNldEdsb2JhbFVzZXJJRF0gPSB1c2VSZWNvaWxTdGF0ZShnbG9iYWxVc2VySUQpO1xyXG4gIGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnN0IFt1c2VySUQsIHNldFVzZXJJRF0gPSB1c2VTdGF0ZShcImRlZmF1bHRcIik7XHJcbiAgY29uc3QgW2ZyaWVuZHMsIHNldEZyaWVuZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjb2xvck1vZGUsIHNldENvbG9yTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGZ1bmN0aW9uIENoYW5nZVNpZGVCYXIoKSB7XHJcbiAgICBpZiAoc2l6ZSA9PSB0cnVlKSB7XHJcbiAgICAgIHNldFNpemUoZmFsc2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZWRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaXplKHRydWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBhZGRVc2VyKCkge1xyXG4gICAgaWYgKHNlc3Npb24pIHtcclxuICAgICAgYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsIFwidXNlcnNcIiksIHtcclxuICAgICAgICBlbWFpbDogc2Vzc2lvbj8udXNlcj8uZW1haWwsXHJcbiAgICAgICAgbmFtZTogc2Vzc2lvbj8udXNlcj8ubmFtZSxcclxuICAgICAgICBpbWFnZTogc2Vzc2lvbj8udXNlcj8uaW1hZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCBnZXRJRCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gY2hlY2tBY2NvdW50KCkge1xyXG4gICAgaWYgKHNlc3Npb24pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDaGVjayBBY2NvdW50XCIpO1xyXG4gICAgICBvblNuYXBzaG90KFxyXG4gICAgICAgIHF1ZXJ5KFxyXG4gICAgICAgICAgY29sbGVjdGlvbihkYiwgXCJ1c2Vyc1wiKSxcclxuICAgICAgICAgIHdoZXJlKFwiZW1haWxcIiwgXCI9PVwiLCBzZXNzaW9uPy51c2VyPy5lbWFpbClcclxuICAgICAgICApLFxyXG4gICAgICAgIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHNuYXBzaG90LmVtcHR5KSB7XHJcbiAgICAgICAgICAgIGFkZFVzZXIoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gc25hcHNob3QuZG9jc1swXS5pZDtcclxuICAgICAgICAgICAgc2V0VXNlcklEKGlkKTtcclxuICAgICAgICAgICAgc2V0R2xvYmFsVXNlcklEKGlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRJRCgpIHtcclxuICAgIG9uU25hcHNob3QoXHJcbiAgICAgIHF1ZXJ5KFxyXG4gICAgICAgIGNvbGxlY3Rpb24oZGIsIFwidXNlcnNcIiksXHJcbiAgICAgICAgd2hlcmUoXCJlbWFpbFwiLCBcIj09XCIsIHNlc3Npb24/LnVzZXI/LmVtYWlsKVxyXG4gICAgICApLFxyXG4gICAgICAoc25hcHNob3QpID0+IHtcclxuICAgICAgICBsZXQgaWQgPSBzbmFwc2hvdC5kb2NzWzBdLmlkO1xyXG4gICAgICAgIHNldFVzZXJJRChpZCk7XHJcbiAgICAgICAgc2V0R2xvYmFsVXNlcklEKGlkKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGVja0FjY291bnQoKTtcclxuICB9LCBbc2Vzc2lvbl0pO1xyXG5cclxuICB1c2VFZmZlY3QoXHJcbiAgICAoKSA9PlxyXG4gICAgICBvblNuYXBzaG90KFxyXG4gICAgICAgIHF1ZXJ5KGNvbGxlY3Rpb24oZGIsIFwidXNlcnNcIiwgdXNlcklELCBcImZyaWVuZHNcIikpLFxyXG4gICAgICAgIChzbmFwc2hvdCkgPT4gc2V0RnJpZW5kcyhzbmFwc2hvdC5kb2NzKVxyXG4gICAgICApLFxyXG4gICAgW2RiLCB1c2VySURdXHJcbiAgKTtcclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlQ29sb3JNb2RlKCkge1xyXG4gICAgaWYgKGNvbG9yTW9kZSkge1xyXG4gICAgICBzZXRDb2xvck1vZGUoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Q29sb3JNb2RlKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgdGV4dC1bIzUxNTU3RV0gZmxleCBmbGV4LWNvbCBiZy1bIzFCMjQzMF0gcHgtMyAgdGV4dC1jZW50ZXIgaXRlbXMtY2VudGVyIHB5LTIgc2hhZG93LWxnIHNwYWNlLXktNSAke1xyXG4gICAgICAgIHNpemUgPyBcInctNDBcIiA6IFwidy0yMFwiXHJcbiAgICAgIH1gfVxyXG4gICAgPlxyXG4gICAgICA8RG90c0NpcmNsZUhvcml6b250YWxJY29uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgaC02ICBjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgc2l6ZSA/IFwibGVmdC00MFwiIDogXCJsZWZ0LTIwXCJcclxuICAgICAgICB9YH1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBDaGFuZ2VTaWRlQmFyKCl9XHJcbiAgICAgIC8+XHJcbiAgICAgIHshc2Vzc2lvbiAmJiAoXHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTUgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXtzaWduSW59PlxyXG4gICAgICAgICAgTG9naW5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICApfVxyXG4gICAgICB7c2Vzc2lvbiAmJiAoXHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTUgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXtzaWduT3V0fT5cclxuICAgICAgICAgIExvZyBPdXRcclxuICAgICAgICA8L2gxPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXgtMiBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BiZy1ibHVlLTUwMCBtYXNrLWNpcmNsZSAke3NpemUgPyBcImgtMTBcIiA6IFwiaC0yMFwifWB9XHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5NDc5MDEwODM3Ny1iZTljMjliMjkzMzA/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh6WldGeVkyaDhNbng4Y0hKdlptbHNaWHhsYm53d2ZId3dmSHclM0Qmdz0xMDAwJnE9ODBcIlxyXG4gICAgICAgID48L2ltZz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgJHtzaXplID8gXCJcIiA6IFwiaGlkZGVuXCJ9YH0+TG91aXMgQnJldG9uPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxQbHVzQ2lyY2xlSWNvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImgtMTAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHNldEZyaWVuZE1vZGFsKHRydWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0b2dnbGUgb3BhY2l0eS04MFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoYW5nZUNvbG9yTW9kZSgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtjb2xvck1vZGUgPyA8aDE+RGFyayBNb2RlPC9oMT4gOiA8aDE+TGlnaHQgTW9kZTwvaDE+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIkRvdHNDaXJjbGVIb3Jpem9udGFsSWNvbiIsIlBsdXNDaXJjbGVJY29uIiwidXNlU3RhdGUiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJzaWduSW4iLCJzaWduT3V0Iiwib25TbmFwc2hvdCIsInF1ZXJ5IiwiY29sbGVjdGlvbiIsIndoZXJlIiwic25hcHNob3QiLCJhZGREb2MiLCJkb2MiLCJkYiIsImFkZEZyaWVuZCIsImdsb2JhbFVzZXJJRCIsInVzZVJlY29pbFN0YXRlIiwiSGVhZGVyIiwiQ2hhbmdlU2lkZUJhciIsInNpemUiLCJzZXRTaXplIiwiY29uc29sZSIsImxvZyIsImNoYW5nZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsInNldENvbG9yTW9kZSIsImZyaWVuZE1vZGFsIiwic2V0RnJpZW5kTW9kYWwiLCJHbG9iYWxVc2VySUQiLCJzZXRHbG9iYWxVc2VySUQiLCJkYXRhIiwic2Vzc2lvbiIsInVzZXJJRCIsInNldFVzZXJJRCIsImZyaWVuZHMiLCJzZXRGcmllbmRzIiwiYWRkVXNlciIsImVtYWlsIiwidXNlciIsIm5hbWUiLCJpbWFnZSIsImdldElEIiwiY2hlY2tBY2NvdW50IiwiZW1wdHkiLCJpZCIsImRvY3MiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaDEiLCJpbWciLCJzcmMiLCJpbnB1dCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});