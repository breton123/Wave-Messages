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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _project_Wave_Messages_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _project_Wave_Messages_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_project_Wave_Messages_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var _atoms_FriendModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../atoms/FriendModal */ \"./atoms/FriendModal.js\");\n/* harmony import */ var _atoms_userID__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../atoms/userID */ \"./atoms/userID.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    var ChangeSideBar = function ChangeSideBar() {\n        if (size == true) {\n            setSize(false);\n            console.log(\"Changed\");\n        } else {\n            setSize(true);\n            console.log(\"Changed\");\n        }\n    };\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState)(_atoms_FriendModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"]), 2), friendModal = ref[0], setFriendModal = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState)(_atoms_userID__WEBPACK_IMPORTED_MODULE_7__[\"default\"]), 2), GlobalUserID = ref1[0], setGlobalUserID = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), size = ref2[0], setSize = ref2[1];\n    var ref3 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)(), session = ref3.data;\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"default\"), userID = ref4[0], setUserID = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), friends = ref5[0], setFriends = ref5[1];\n    function addUser() {\n        return _addUser.apply(this, arguments);\n    }\n    function _addUser() {\n        _addUser = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_project_Wave_Messages_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, ref1, ref2;\n            return _project_Wave_Messages_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!session) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        ;\n                        _ctx.next = 4;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"users\"), {\n                            email: session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.email,\n                            name: session === null || session === void 0 ? void 0 : (ref1 = session.user) === null || ref1 === void 0 ? void 0 : ref1.name,\n                            image: session === null || session === void 0 ? void 0 : (ref2 = session.user) === null || ref2 === void 0 ? void 0 : ref2.image\n                        });\n                    case 4:\n                        _ctx.next = 6;\n                        return getID();\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _addUser.apply(this, arguments);\n    }\n    function checkAccount() {\n        return _checkAccount.apply(this, arguments);\n    }\n    function _checkAccount() {\n        _checkAccount = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_project_Wave_Messages_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref;\n            return _project_Wave_Messages_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (session) {\n                            ;\n                            console.log(\"Check Account\");\n                            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"users\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.where)(\"email\", \"==\", session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.email)), function(snapshot) {\n                                if (snapshot.empty) {\n                                    addUser();\n                                } else {\n                                    var id = snapshot.docs[0].id;\n                                    setUserID(id);\n                                    setGlobalUserID(id);\n                                }\n                            });\n                        }\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _checkAccount.apply(this, arguments);\n    }\n    function getID() {\n        return _getID.apply(this, arguments);\n    }\n    function _getID() {\n        _getID = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_project_Wave_Messages_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref;\n            return _project_Wave_Messages_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"users\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.where)(\"email\", \"==\", session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.email)), function(snapshot) {\n                            var id = snapshot.docs[0].id;\n                            setUserID(id);\n                            setGlobalUserID(id);\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _getID.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        checkAccount();\n    }, [\n        session\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"users\", userID, \"friends\")), function(snapshot) {\n            return setFriends(snapshot.docs);\n        });\n    }, [\n        _firebase__WEBPACK_IMPORTED_MODULE_5__.db,\n        userID\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col bg-gray-400 px-3  text-center items-center py-2 shadow-lg space-y-5 \".concat(size ? \"w-40\" : \"w-20\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.DotsCircleHorizontalIcon, {\n                className: \"absolute h-6  cursor-pointer \".concat(size ? \"left-40\" : \"left-20\"),\n                onClick: function() {\n                    return ChangeSideBar();\n                }\n            }, void 0, false, {\n                fileName: \"/project/Wave-Messages/components/Header.js\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this),\n            !session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"mb-5 cursor-pointer\",\n                onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn,\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/project/Wave-Messages/components/Header.js\",\n                lineNumber: 111,\n                columnNumber: 9\n            }, this),\n            session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"mb-5 cursor-pointer\",\n                onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut,\n                children: \"Log Out\"\n            }, void 0, false, {\n                fileName: \"/project/Wave-Messages/components/Header.js\",\n                lineNumber: 116,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex justify-between space-x-2 items-center cursor-pointer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        className: \"bg-blue-500 mask-circle \".concat(size ? \"h-10\" : \"h-20\"),\n                        src: \"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80\"\n                    }, void 0, false, {\n                        fileName: \"/project/Wave-Messages/components/Header.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: \"\".concat(size ? \"\" : \"hidden\"),\n                        children: \"Louis Breton\"\n                    }, void 0, false, {\n                        fileName: \"/project/Wave-Messages/components/Header.js\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/project/Wave-Messages/components/Header.js\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.PlusCircleIcon, {\n                className: \"h-10 cursor-pointer\",\n                onClick: function() {\n                    setFriendModal(true);\n                }\n            }, void 0, false, {\n                fileName: \"/project/Wave-Messages/components/Header.js\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        className: \"toggle opacity-50\",\n                        checked: true\n                    }, void 0, false, {\n                        fileName: \"/project/Wave-Messages/components/Header.js\",\n                        lineNumber: 134,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: \"Dark Mode\"\n                    }, void 0, false, {\n                        fileName: \"/project/Wave-Messages/components/Header.js\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/project/Wave-Messages/components/Header.js\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/project/Wave-Messages/components/Header.js\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"I5RF8hHcSiTf0vbYlqYNqerpBm8=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBR2tDO0FBQ2lCO0FBQ1c7QUFTbEM7QUFDSztBQUNZO0FBQ0Y7QUFDSDs7QUFFeEMsU0FBU21CLE1BQU0sR0FBRztRQVFQQyxhQUFhLEdBQXRCLFNBQVNBLGFBQWEsR0FBRztRQUN2QixJQUFJQyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2hCQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEIsTUFBTTtZQUNMRixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEI7S0FDRjs7SUFmRCxJQUFzQ04sR0FBeUIsb0ZBQXpCQSxzREFBYyxDQUFDRiwwREFBUyxDQUFDLE1BQXhEUyxXQUFXLEdBQW9CUCxHQUF5QixHQUE3QyxFQUFFUSxjQUFjLEdBQUlSLEdBQXlCLEdBQTdCO0lBQ2xDLElBQXdDQSxJQUE0QixvRkFBNUJBLHNEQUFjLENBQUNELHFEQUFZLENBQUMsTUFBN0RVLFlBQVksR0FBcUJULElBQTRCLEdBQWpELEVBQUVVLGVBQWUsR0FBSVYsSUFBNEIsR0FBaEM7SUFDcEMsSUFBd0JoQixJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQS9CbUIsSUFBSSxHQUFhbkIsSUFBYyxHQUEzQixFQUFFb0IsT0FBTyxHQUFJcEIsSUFBYyxHQUFsQjtJQUNwQixJQUEwQkcsSUFBWSxHQUFaQSwyREFBVSxFQUFFLEVBQTlCd0IsT0FBYSxHQUFLeEIsSUFBWSxDQUE5QndCLElBQUk7SUFDWixJQUE0QjNCLElBQW1CLEdBQW5CQSwrQ0FBUSxDQUFDLFNBQVMsQ0FBQyxFQUF4QzZCLE1BQU0sR0FBZTdCLElBQW1CLEdBQWxDLEVBQUU4QixTQUFTLEdBQUk5QixJQUFtQixHQUF2QjtJQUN4QixJQUE4QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFuQytCLE9BQU8sR0FBZ0IvQixJQUFZLEdBQTVCLEVBQUVnQyxVQUFVLEdBQUloQyxJQUFZLEdBQWhCO2FBWVhpQyxPQUFPO2VBQVBBLFFBQU87O2FBQVBBLFFBQU87UUFBUEEsUUFBTyxHQUF0QiwwT0FBeUI7Z0JBR1pMLEdBQWEsRUFDZEEsSUFBYSxFQUNaQSxJQUFhOzs7OzRCQUpwQkEsQ0FBQUEsT0FBTzs7Ozs7OytCQUNIakIsMERBQU0sQ0FBQ0gsOERBQVUsQ0FBQ0sseUNBQUUsRUFBRSxPQUFPLENBQUMsRUFBRTs0QkFDcENxQixLQUFLLEVBQUVOLE9BQU8sYUFBUEEsT0FBTyxXQUFNLEdBQWJBLEtBQUFBLENBQWEsR0FBYkEsQ0FBQUEsR0FBYSxHQUFiQSxPQUFPLENBQUVPLElBQUksY0FBYlAsR0FBYSxjQUFiQSxLQUFBQSxDQUFhLEdBQWJBLEdBQWEsQ0FBRU0sS0FBSzs0QkFDM0JFLElBQUksRUFBRVIsT0FBTyxhQUFQQSxPQUFPLFdBQU0sR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxDQUFBQSxJQUFhLEdBQWJBLE9BQU8sQ0FBRU8sSUFBSSxjQUFiUCxJQUFhLGNBQWJBLEtBQUFBLENBQWEsR0FBYkEsSUFBYSxDQUFFUSxJQUFJOzRCQUN6QkMsS0FBSyxFQUFFVCxPQUFPLGFBQVBBLE9BQU8sV0FBTSxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLENBQUFBLElBQWEsR0FBYkEsT0FBTyxDQUFFTyxJQUFJLGNBQWJQLElBQWEsY0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxJQUFhLENBQUVTLEtBQUs7eUJBQzVCLENBQUM7OzsrQkFDSUMsS0FBSyxFQUFFOzs7Ozs7U0FFaEI7ZUFUY0wsUUFBTzs7YUFXUE0sWUFBWTtlQUFaQSxhQUFZOzthQUFaQSxhQUFZO1FBQVpBLGFBQVksR0FBM0IsME9BQThCO2dCQU1EWCxHQUFhOzs7O3dCQUx4QyxJQUFJQSxPQUFPLEVBQUU7OzRCQUNYUCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzs0QkFDN0JoQiw4REFBVSxDQUNSQyx5REFBSyxDQUNIQyw4REFBVSxDQUFDSyx5Q0FBRSxFQUFFLE9BQU8sQ0FBQyxFQUN2QkoseURBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFbUIsT0FBTyxhQUFQQSxPQUFPLFdBQU0sR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxDQUFBQSxHQUFhLEdBQWJBLE9BQU8sQ0FBRU8sSUFBSSxjQUFiUCxHQUFhLGNBQWJBLEtBQUFBLENBQWEsR0FBYkEsR0FBYSxDQUFFTSxLQUFLLENBQUMsQ0FDM0MsRUFDRCxTQUFDeEIsUUFBUSxFQUFLO2dDQUNaLElBQUlBLFFBQVEsQ0FBQzhCLEtBQUssRUFBRTtvQ0FDbEJQLE9BQU8sRUFBRSxDQUFDO2lDQUNYLE1BQU07b0NBQ0wsSUFBTVEsRUFBRSxHQUFHL0IsUUFBUSxDQUFDZ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDRCxFQUFFO29DQUM5QlgsU0FBUyxDQUFDVyxFQUFFLENBQUMsQ0FBQztvQ0FDZGYsZUFBZSxDQUFDZSxFQUFFLENBQUMsQ0FBQztpQ0FDckI7NkJBQ0YsQ0FDRixDQUFDO3lCQUNIOzs7Ozs7U0FDRjtlQW5CY0YsYUFBWTs7YUFxQlpELEtBQUs7ZUFBTEEsTUFBSzs7YUFBTEEsTUFBSztRQUFMQSxNQUFLLEdBQXBCLDBPQUF1QjtnQkFJSVYsR0FBYTs7Ozs7d0JBSHRDdEIsOERBQVUsQ0FDUkMseURBQUssQ0FDSEMsOERBQVUsQ0FBQ0sseUNBQUUsRUFBRSxPQUFPLENBQUMsRUFDdkJKLHlEQUFLLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRW1CLE9BQU8sYUFBUEEsT0FBTyxXQUFNLEdBQWJBLEtBQUFBLENBQWEsR0FBYkEsQ0FBQUEsR0FBYSxHQUFiQSxPQUFPLENBQUVPLElBQUksY0FBYlAsR0FBYSxjQUFiQSxLQUFBQSxDQUFhLEdBQWJBLEdBQWEsQ0FBRU0sS0FBSyxDQUFDLENBQzNDLEVBQ0QsU0FBQ3hCLFFBQVEsRUFBSzs0QkFDWixJQUFJK0IsRUFBRSxHQUFHL0IsUUFBUSxDQUFDZ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDRCxFQUFFOzRCQUM1QlgsU0FBUyxDQUFDVyxFQUFFLENBQUMsQ0FBQzs0QkFDZGYsZUFBZSxDQUFDZSxFQUFFLENBQUMsQ0FBQzt5QkFDckIsQ0FDRixDQUFDOzs7Ozs7U0FDSDtlQVpjSCxNQUFLOztJQWNwQnBDLGdEQUFTLENBQUMsV0FBTTtRQUNkcUMsWUFBWSxFQUFFLENBQUM7S0FDaEIsRUFBRTtRQUFDWCxPQUFPO0tBQUMsQ0FBQyxDQUFDO0lBRWQxQixnREFBUyxDQUNQO2VBQ0VJLDhEQUFVLENBQ1JDLHlEQUFLLENBQUNDLDhEQUFVLENBQUNLLHlDQUFFLEVBQUUsT0FBTyxFQUFFZ0IsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQ2pELFNBQUNuQixRQUFRO21CQUFLc0IsVUFBVSxDQUFDdEIsUUFBUSxDQUFDZ0MsSUFBSSxDQUFDO1NBQUEsQ0FDeEM7S0FBQSxFQUNIO1FBQUM3Qix5Q0FBRTtRQUFFZ0IsTUFBTTtLQUFDLENBQ2IsQ0FBQztJQUVGLHFCQUNFLDhEQUFDYyxLQUFHO1FBQ0ZDLFNBQVMsRUFBRSxvRkFBbUYsQ0FFN0YsT0FEQ3pCLElBQUksR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUN0Qjs7MEJBRUYsOERBQUNyQiwrRUFBd0I7Z0JBQ3ZCOEMsU0FBUyxFQUFFLCtCQUE4QixDQUV4QyxPQURDekIsSUFBSSxHQUFHLFNBQVMsR0FBRyxTQUFTLENBQzVCO2dCQUNGMEIsT0FBTyxFQUFFOzJCQUFNM0IsYUFBYSxFQUFFO2lCQUFBOzs7OztvQkFDOUI7WUFDRCxDQUFDVSxPQUFPLGtCQUNQLDhEQUFDa0IsSUFBRTtnQkFBQ0YsU0FBUyxFQUFDLHFCQUFxQjtnQkFBQ0MsT0FBTyxFQUFFekMsbURBQU07MEJBQUUsT0FFckQ7Ozs7O29CQUFLO1lBRU53QixPQUFPLGtCQUNOLDhEQUFDa0IsSUFBRTtnQkFBQ0YsU0FBUyxFQUFDLHFCQUFxQjtnQkFBQ0MsT0FBTyxFQUFFeEMsb0RBQU87MEJBQUUsU0FFdEQ7Ozs7O29CQUFLOzBCQUVQLDhEQUFDc0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDREQUE0RDs7a0NBQ3pFLDhEQUFDRyxLQUFHO3dCQUNGSCxTQUFTLEVBQUUsMEJBQXlCLENBQXlCLE9BQXZCekIsSUFBSSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUU7d0JBQzlENkIsR0FBRyxFQUFDLHFKQUFxSjs7Ozs7NEJBQ3BKO2tDQUNQLDhEQUFDRixJQUFFO3dCQUFDRixTQUFTLEVBQUUsRUFBQyxDQUF1QixPQUFyQnpCLElBQUksR0FBRyxFQUFFLEdBQUcsUUFBUSxDQUFFO2tDQUFFLGNBQVk7Ozs7OzRCQUFLOzs7Ozs7b0JBQ3ZEOzBCQUNOLDhEQUFDcEIscUVBQWM7Z0JBQ2I2QyxTQUFTLEVBQUMscUJBQXFCO2dCQUMvQkMsT0FBTyxFQUFFLFdBQU07b0JBQ2JyQixjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3RCOzs7OztvQkFDRDswQkFDRiw4REFBQ21CLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQywyQ0FBMkM7O2tDQUN4RCw4REFBQ0ssT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLFVBQVU7d0JBQUNOLFNBQVMsRUFBQyxtQkFBbUI7d0JBQUNPLE9BQU87Ozs7OzRCQUFHO2tDQUMvRCw4REFBQ0wsSUFBRTtrQ0FBQyxXQUFTOzs7Ozs0QkFBSzs7Ozs7O29CQUNkOzs7Ozs7WUFDRixDQUNOO0NBQ0g7R0F0SFE3QixNQUFNOztRQUN5QkQsa0RBQWM7UUFDWkEsa0RBQWM7UUFFNUJiLHVEQUFVOzs7QUFKN0JjLEtBQUFBLE1BQU07QUF3SGYsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRG90c0NpcmNsZUhvcml6b250YWxJY29uLFxyXG4gIFBsdXNDaXJjbGVJY29uLFxyXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIEltYWdlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIG9uU25hcHNob3QsXHJcbiAgcXVlcnksXHJcbiAgY29sbGVjdGlvbixcclxuICB3aGVyZSxcclxuICBzbmFwc2hvdCxcclxuICBhZGREb2MsXHJcbiAgZG9jLFxyXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IGFkZEZyaWVuZCBmcm9tIFwiLi4vYXRvbXMvRnJpZW5kTW9kYWxcIjtcclxuaW1wb3J0IGdsb2JhbFVzZXJJRCBmcm9tIFwiLi4vYXRvbXMvdXNlcklEXCI7XHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IFtmcmllbmRNb2RhbCwgc2V0RnJpZW5kTW9kYWxdID0gdXNlUmVjb2lsU3RhdGUoYWRkRnJpZW5kKTtcclxuICBjb25zdCBbR2xvYmFsVXNlcklELCBzZXRHbG9iYWxVc2VySURdID0gdXNlUmVjb2lsU3RhdGUoZ2xvYmFsVXNlcklEKTtcclxuICBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCBbdXNlcklELCBzZXRVc2VySURdID0gdXNlU3RhdGUoXCJkZWZhdWx0XCIpO1xyXG4gIGNvbnN0IFtmcmllbmRzLCBzZXRGcmllbmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gQ2hhbmdlU2lkZUJhcigpIHtcclxuICAgIGlmIChzaXplID09IHRydWUpIHtcclxuICAgICAgc2V0U2l6ZShmYWxzZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNpemUodHJ1ZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZFVzZXIoKSB7XHJcbiAgICBpZiAoc2Vzc2lvbikge1xyXG4gICAgICBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgXCJ1c2Vyc1wiKSwge1xyXG4gICAgICAgIGVtYWlsOiBzZXNzaW9uPy51c2VyPy5lbWFpbCxcclxuICAgICAgICBuYW1lOiBzZXNzaW9uPy51c2VyPy5uYW1lLFxyXG4gICAgICAgIGltYWdlOiBzZXNzaW9uPy51c2VyPy5pbWFnZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGF3YWl0IGdldElEKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBjaGVja0FjY291bnQoKSB7XHJcbiAgICBpZiAoc2Vzc2lvbikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNoZWNrIEFjY291bnRcIik7XHJcbiAgICAgIG9uU25hcHNob3QoXHJcbiAgICAgICAgcXVlcnkoXHJcbiAgICAgICAgICBjb2xsZWN0aW9uKGRiLCBcInVzZXJzXCIpLFxyXG4gICAgICAgICAgd2hlcmUoXCJlbWFpbFwiLCBcIj09XCIsIHNlc3Npb24/LnVzZXI/LmVtYWlsKVxyXG4gICAgICAgICksXHJcbiAgICAgICAgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICBpZiAoc25hcHNob3QuZW1wdHkpIHtcclxuICAgICAgICAgICAgYWRkVXNlcigpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBzbmFwc2hvdC5kb2NzWzBdLmlkO1xyXG4gICAgICAgICAgICBzZXRVc2VySUQoaWQpO1xyXG4gICAgICAgICAgICBzZXRHbG9iYWxVc2VySUQoaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldElEKCkge1xyXG4gICAgb25TbmFwc2hvdChcclxuICAgICAgcXVlcnkoXHJcbiAgICAgICAgY29sbGVjdGlvbihkYiwgXCJ1c2Vyc1wiKSxcclxuICAgICAgICB3aGVyZShcImVtYWlsXCIsIFwiPT1cIiwgc2Vzc2lvbj8udXNlcj8uZW1haWwpXHJcbiAgICAgICksXHJcbiAgICAgIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgIGxldCBpZCA9IHNuYXBzaG90LmRvY3NbMF0uaWQ7XHJcbiAgICAgICAgc2V0VXNlcklEKGlkKTtcclxuICAgICAgICBzZXRHbG9iYWxVc2VySUQoaWQpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoZWNrQWNjb3VudCgpO1xyXG4gIH0sIFtzZXNzaW9uXSk7XHJcblxyXG4gIHVzZUVmZmVjdChcclxuICAgICgpID0+XHJcbiAgICAgIG9uU25hcHNob3QoXHJcbiAgICAgICAgcXVlcnkoY29sbGVjdGlvbihkYiwgXCJ1c2Vyc1wiLCB1c2VySUQsIFwiZnJpZW5kc1wiKSksXHJcbiAgICAgICAgKHNuYXBzaG90KSA9PiBzZXRGcmllbmRzKHNuYXBzaG90LmRvY3MpXHJcbiAgICAgICksXHJcbiAgICBbZGIsIHVzZXJJRF1cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGJnLWdyYXktNDAwIHB4LTMgIHRleHQtY2VudGVyIGl0ZW1zLWNlbnRlciBweS0yIHNoYWRvdy1sZyBzcGFjZS15LTUgJHtcclxuICAgICAgICBzaXplID8gXCJ3LTQwXCIgOiBcInctMjBcIlxyXG4gICAgICB9YH1cclxuICAgID5cclxuICAgICAgPERvdHNDaXJjbGVIb3Jpem9udGFsSWNvblxyXG4gICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGgtNiAgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgIHNpemUgPyBcImxlZnQtNDBcIiA6IFwibGVmdC0yMFwiXHJcbiAgICAgICAgfWB9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gQ2hhbmdlU2lkZUJhcigpfVxyXG4gICAgICAvPlxyXG4gICAgICB7IXNlc3Npb24gJiYgKFxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi01IGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17c2lnbklufT5cclxuICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgKX1cclxuICAgICAge3Nlc3Npb24gJiYgKFxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi01IGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17c2lnbk91dH0+XHJcbiAgICAgICAgICBMb2cgT3V0XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBzcGFjZS14LTIgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYmctYmx1ZS01MDAgbWFzay1jaXJjbGUgJHtzaXplID8gXCJoLTEwXCIgOiBcImgtMjBcIn1gfVxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTQ3OTAxMDgzNzctYmU5YzI5YjI5MzMwP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TW54OGNISnZabWxzWlh4bGJud3dmSHd3Zkh3JTNEJnc9MTAwMCZxPTgwXCJcclxuICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YCR7c2l6ZSA/IFwiXCIgOiBcImhpZGRlblwifWB9PkxvdWlzIEJyZXRvbjwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UGx1c0NpcmNsZUljb25cclxuICAgICAgICBjbGFzc05hbWU9XCJoLTEwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRGcmllbmRNb2RhbCh0cnVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cInRvZ2dsZSBvcGFjaXR5LTUwXCIgY2hlY2tlZCAvPlxyXG4gICAgICAgIDxoMT5EYXJrIE1vZGU8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIkRvdHNDaXJjbGVIb3Jpem9udGFsSWNvbiIsIlBsdXNDaXJjbGVJY29uIiwidXNlU3RhdGUiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJzaWduSW4iLCJzaWduT3V0Iiwib25TbmFwc2hvdCIsInF1ZXJ5IiwiY29sbGVjdGlvbiIsIndoZXJlIiwic25hcHNob3QiLCJhZGREb2MiLCJkb2MiLCJkYiIsImFkZEZyaWVuZCIsImdsb2JhbFVzZXJJRCIsInVzZVJlY29pbFN0YXRlIiwiSGVhZGVyIiwiQ2hhbmdlU2lkZUJhciIsInNpemUiLCJzZXRTaXplIiwiY29uc29sZSIsImxvZyIsImZyaWVuZE1vZGFsIiwic2V0RnJpZW5kTW9kYWwiLCJHbG9iYWxVc2VySUQiLCJzZXRHbG9iYWxVc2VySUQiLCJkYXRhIiwic2Vzc2lvbiIsInVzZXJJRCIsInNldFVzZXJJRCIsImZyaWVuZHMiLCJzZXRGcmllbmRzIiwiYWRkVXNlciIsImVtYWlsIiwidXNlciIsIm5hbWUiLCJpbWFnZSIsImdldElEIiwiY2hlY2tBY2NvdW50IiwiZW1wdHkiLCJpZCIsImRvY3MiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaDEiLCJpbWciLCJzcmMiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});