/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./Store/User/SetUserAction.tsx":
/*!**************************************!*\
  !*** ./Store/User/SetUserAction.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    initialState: {},\n    action: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)(\"user/setUser\"),\n    reducers (state, { payload  }) {\n        if (typeof payload !== \"undefined\") {\n            state.user = payload;\n        } else {\n            state.user = null;\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdG9yZS9Vc2VyL1NldFVzZXJBY3Rpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnRDtBQUVoRCxpRUFBZTtJQUNiQyxZQUFZLEVBQUUsRUFBRTtJQUNoQkMsTUFBTSxFQUFFRiw4REFBWSxDQUFDLGNBQWMsQ0FBQztJQUNwQ0csUUFBUSxFQUFDQyxLQUFLLEVBQUUsRUFBRUMsT0FBTyxHQUFFLEVBQUU7UUFDM0IsSUFBSSxPQUFPQSxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQ2xDRCxLQUFLLENBQUNFLElBQUksR0FBR0QsT0FBTyxDQUFDO1NBQ3RCLE1BQU07WUFDTEQsS0FBSyxDQUFDRSxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ25CO0tBQ0Y7Q0FDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFpbHdpbmQvLi9TdG9yZS9Vc2VyL1NldFVzZXJBY3Rpb24udHN4PzI4MzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0aWFsU3RhdGU6IHt9LFxuICBhY3Rpb246IGNyZWF0ZUFjdGlvbihcInVzZXIvc2V0VXNlclwiKSxcbiAgcmVkdWNlcnMoc3RhdGUsIHsgcGF5bG9hZCB9KSB7XG4gICAgaWYgKHR5cGVvZiBwYXlsb2FkICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBzdGF0ZS51c2VyID0gcGF5bG9hZDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUudXNlciA9IG51bGw7XG4gICAgfVxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVBY3Rpb24iLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJyZWR1Y2VycyIsInN0YXRlIiwicGF5bG9hZCIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Store/User/SetUserAction.tsx\n");

/***/ }),

/***/ "./Store/User/index.ts":
/*!*****************************!*\
  !*** ./Store/User/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @thecodingmachine/redux-toolkit-wrapper */ \"@thecodingmachine/redux-toolkit-wrapper\");\n/* harmony import */ var _thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SetUserAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetUserAction */ \"./Store/User/SetUserAction.tsx\");\n\n\nconst sliceInitialState = {\n    user: null\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0__.buildSlice)(\"userr\", [\n    _SetUserAction__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n], sliceInitialState).reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdG9yZS9Vc2VyL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBcUU7QUFDekI7QUFFNUMsTUFBTUUsaUJBQWlCLEdBQUc7SUFDekJDLElBQUksRUFBRSxJQUFJO0NBQ1Y7QUFFRCxpRUFBZUgsbUZBQVUsQ0FBQyxPQUFPLEVBQUU7SUFBQ0Msc0RBQWE7Q0FBQyxFQUFFQyxpQkFBaUIsQ0FBQyxDQUFDRSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlsd2luZC8uL1N0b3JlL1VzZXIvaW5kZXgudHM/MTZlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBidWlsZFNsaWNlIH0gZnJvbSBcIkB0aGVjb2RpbmdtYWNoaW5lL3JlZHV4LXRvb2xraXQtd3JhcHBlclwiO1xuaW1wb3J0IFNldFVzZXJBY3Rpb24gZnJvbSBcIi4vU2V0VXNlckFjdGlvblwiO1xuXG5jb25zdCBzbGljZUluaXRpYWxTdGF0ZSA9IHtcblx0dXNlcjogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkU2xpY2UoXCJ1c2VyclwiLCBbU2V0VXNlckFjdGlvbl0sIHNsaWNlSW5pdGlhbFN0YXRlKS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImJ1aWxkU2xpY2UiLCJTZXRVc2VyQWN0aW9uIiwic2xpY2VJbml0aWFsU3RhdGUiLCJ1c2VyIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Store/User/index.ts\n");

/***/ }),

/***/ "./Store/index.js":
/*!************************!*\
  !*** ./Store/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"persistor\": () => (/* binding */ persistor),\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ \"./Store/User/index.ts\");\n\n\n\n\n\n//REDUCERS :::\n\nconst reducers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    userr: _User__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n});\nconst persistConfig = {\n    key: \"root\",\n    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default()),\n    whitelist: [\n        \"userr\"\n    ]\n};\nconst persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistReducer)(persistConfig, reducers);\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({\n    reducer: persistedReducer,\n    middleware: [\n        (redux_thunk__WEBPACK_IMPORTED_MODULE_3___default())\n    ]\n});\nconst persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistStore)(store);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdG9yZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ3FCO0FBQ1g7QUFDbEI7QUFDZ0I7QUFFaEQsY0FBYztBQUNhO0FBRTNCLE1BQU1PLFFBQVEsR0FBR1Asc0RBQWUsQ0FBQztJQUFFTSxLQUFLO0NBQUUsQ0FBQztBQUUzQyxNQUFNRSxhQUFhLEdBQUc7SUFDckJDLEdBQUcsRUFBRSxNQUFNO0lBQ1hKLE9BQU8sRUFBRUEsa0VBQU87SUFDaEJLLFNBQVMsRUFBRTtRQUFDLE9BQU87S0FBQztDQUNwQjtBQUVELE1BQU1DLGdCQUFnQixHQUFHViw2REFBYyxDQUFDTyxhQUFhLEVBQUVELFFBQVEsQ0FBQztBQUNoRSxNQUFNSyxLQUFLLEdBQUdULGdFQUFjLENBQUM7SUFDNUJVLE9BQU8sRUFBRUYsZ0JBQWdCO0lBQ3pCRyxVQUFVLEVBQUU7UUFBQ1Ysb0RBQUs7S0FBQztDQUNuQixDQUFDO0FBRUYsTUFBTVcsU0FBUyxHQUFHYiwyREFBWSxDQUFDVSxLQUFLLENBQUM7QUFFVCIsInNvdXJjZXMiOlsid2VicGFjazovL3RhaWx3aW5kLy4vU3RvcmUvaW5kZXguanM/ZjA3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyLCBwZXJzaXN0U3RvcmUgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIjtcblxuLy9SRURVQ0VSUyA6OjpcbmltcG9ydCB1c2VyciBmcm9tIFwiLi9Vc2VyXCI7XG5cbmNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHsgdXNlcnIgfSk7XG5cbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XG5cdGtleTogXCJyb290XCIsXG5cdHN0b3JhZ2U6IHN0b3JhZ2UsXG5cdHdoaXRlbGlzdDogW1widXNlcnJcIl0sXG59O1xuXG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcmVkdWNlcnMpO1xuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG5cdHJlZHVjZXI6IHBlcnNpc3RlZFJlZHVjZXIsXG5cdG1pZGRsZXdhcmU6IFt0aHVua10sXG59KTtcblxuY29uc3QgcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKTtcblxuZXhwb3J0IHsgc3RvcmUsIHBlcnNpc3RvciB9O1xuIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsInBlcnNpc3RSZWR1Y2VyIiwicGVyc2lzdFN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJ0aHVuayIsInN0b3JhZ2UiLCJ1c2VyciIsInJlZHVjZXJzIiwicGVyc2lzdENvbmZpZyIsImtleSIsIndoaXRlbGlzdCIsInBlcnNpc3RlZFJlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJtaWRkbGV3YXJlIiwicGVyc2lzdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Store/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/integration/react */ \"redux-persist/lib/integration/react\");\n/* harmony import */ var redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Store */ \"./Store/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_8__, react_hot_toast__WEBPACK_IMPORTED_MODULE_9__]);\n([framer_motion__WEBPACK_IMPORTED_MODULE_8__, react_hot_toast__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_6___default().useState(false);\n    react__WEBPACK_IMPORTED_MODULE_6___default().useEffect(()=>{\n        const start = ()=>{\n            setLoading(true);\n        };\n        const end = ()=>{\n            setLoading(false);\n        };\n        next_router__WEBPACK_IMPORTED_MODULE_7__.Router.events.on(\"routeChangeStart\", start);\n        next_router__WEBPACK_IMPORTED_MODULE_7__.Router.events.on(\"routeChangeComplete\", end);\n        next_router__WEBPACK_IMPORTED_MODULE_7__.Router.events.on(\"routeChangeError\", end);\n        return ()=>{\n            next_router__WEBPACK_IMPORTED_MODULE_7__.Router.events.off(\"routeChangeStart\", start);\n            next_router__WEBPACK_IMPORTED_MODULE_7__.Router.events.off(\"routeChangeComplete\", end);\n            next_router__WEBPACK_IMPORTED_MODULE_7__.Router.events.off(\"routeChangeError\", end);\n        };\n    }, []);\n    const toasterOpt = {\n        style: {\n            padding: \"10px\",\n            color: \"#FFFF\",\n            backgroundColor: \"#E43023\"\n        },\n        duration: 1500\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _Store__WEBPACK_IMPORTED_MODULE_5__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_4__.PersistGate, {\n            loading: null,\n            persistor: _Store__WEBPACK_IMPORTED_MODULE_5__.persistor,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.AnimatePresence, {\n                mode: \"wait\",\n                initial: false,\n                onExitComplete: ()=>window.scrollTo(0, 0)\n                ,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps,\n                        loading: loading\n                    }, void 0, false, {\n                        fileName: \"/Users/khaleef/Desktop/user/pages/_app.js\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_9__.Toaster, {\n                        toastOptions: toasterOpt,\n                        position: \"bottom-center\"\n                    }, void 0, false, {\n                        fileName: \"/Users/khaleef/Desktop/user/pages/_app.js\",\n                        lineNumber: 45,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/khaleef/Desktop/user/pages/_app.js\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/khaleef/Desktop/user/pages/_app.js\",\n            lineNumber: 42,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/khaleef/Desktop/user/pages/_app.js\",\n        lineNumber: 41,\n        columnNumber: 3\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBQ087QUFDRTtBQUMyQjtBQUN2QjtBQUNqQjtBQUNXO0FBQ1c7QUFDTjtBQUUzQixTQUFTUSxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUNyRCxNQUFNLENBQUNDLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUdSLHFEQUFjLENBQUMsS0FBSyxDQUFDO0lBRW5EQSxzREFBZSxDQUFDLElBQU07UUFDckIsTUFBTVcsS0FBSyxHQUFHLElBQU07WUFDbkJILFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQjtRQUNELE1BQU1JLEdBQUcsR0FBRyxJQUFNO1lBQ2pCSixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEI7UUFDRFAseURBQWdCLENBQUMsa0JBQWtCLEVBQUVVLEtBQUssQ0FBQyxDQUFDO1FBQzVDVix5REFBZ0IsQ0FBQyxxQkFBcUIsRUFBRVcsR0FBRyxDQUFDLENBQUM7UUFDN0NYLHlEQUFnQixDQUFDLGtCQUFrQixFQUFFVyxHQUFHLENBQUMsQ0FBQztRQUMxQyxPQUFPLElBQU07WUFDWlgsMERBQWlCLENBQUMsa0JBQWtCLEVBQUVVLEtBQUssQ0FBQyxDQUFDO1lBQzdDViwwREFBaUIsQ0FBQyxxQkFBcUIsRUFBRVcsR0FBRyxDQUFDLENBQUM7WUFDOUNYLDBEQUFpQixDQUFDLGtCQUFrQixFQUFFVyxHQUFHLENBQUMsQ0FBQztTQUMzQyxDQUFDO0tBQ0YsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE1BQU1JLFVBQVUsR0FBRztRQUNsQkMsS0FBSyxFQUFFO1lBQ05DLE9BQU8sRUFBRSxNQUFNO1lBQ2ZDLEtBQUssRUFBRSxPQUFPO1lBQ2RDLGVBQWUsRUFBRSxTQUFTO1NBQzFCO1FBQ0RDLFFBQVEsRUFBRSxJQUFJO0tBQ2Q7SUFFRCxxQkFDQyw4REFBQ3pCLGlEQUFRO1FBQUNFLEtBQUssRUFBRUEseUNBQUs7a0JBQ3JCLDRFQUFDRCw0RUFBVztZQUFDVSxPQUFPLEVBQUUsSUFBSTtZQUFFUixTQUFTLEVBQUVBLDZDQUFTO3NCQUMvQyw0RUFBQ0csMERBQWU7Z0JBQUNvQixJQUFJLEVBQUMsTUFBTTtnQkFBQ0MsT0FBTyxFQUFFLEtBQUs7Z0JBQUVDLGNBQWMsRUFBRSxJQUFNQyxNQUFNLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUFBOztrQ0FDdEYsOERBQUNyQixTQUFTO3dCQUFFLEdBQUdDLFNBQVM7d0JBQUVDLE9BQU8sRUFBRUEsT0FBTzs7Ozs7NEJBQUk7a0NBQy9DLDhEQUFDSixvREFBTzt3QkFBQ3dCLFlBQVksRUFBRVgsVUFBVTt3QkFBRVksUUFBUSxFQUFDLGVBQWU7Ozs7OzRCQUFHOzs7Ozs7b0JBQzdDOzs7OztnQkFDTDs7Ozs7WUFDSixDQUNWO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlsd2luZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tIFwicmVkdXgtcGVyc2lzdC9saWIvaW50ZWdyYXRpb24vcmVhY3RcIjtcbmltcG9ydCB7IHN0b3JlLCBwZXJzaXN0b3IgfSBmcm9tIFwiQC9TdG9yZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBzdGFydCA9ICgpID0+IHtcblx0XHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cdFx0fTtcblx0XHRjb25zdCBlbmQgPSAoKSA9PiB7XG5cdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHR9O1xuXHRcdFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIHN0YXJ0KTtcblx0XHRSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBlbmQpO1xuXHRcdFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsIGVuZCk7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBzdGFydCk7XG5cdFx0XHRSb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgZW5kKTtcblx0XHRcdFJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VFcnJvclwiLCBlbmQpO1xuXHRcdH07XG5cdH0sIFtdKTtcblxuXHRjb25zdCB0b2FzdGVyT3B0ID0ge1xuXHRcdHN0eWxlOiB7XG5cdFx0XHRwYWRkaW5nOiBcIjEwcHhcIixcblx0XHRcdGNvbG9yOiBcIiNGRkZGXCIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI0U0MzAyM1wiLFxuXHRcdH0sXG5cdFx0ZHVyYXRpb246IDE1MDAsXG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHRcdDxQZXJzaXN0R2F0ZSBsb2FkaW5nPXtudWxsfSBwZXJzaXN0b3I9e3BlcnNpc3Rvcn0+XG5cdFx0XHRcdDxBbmltYXRlUHJlc2VuY2UgbW9kZT1cIndhaXRcIiBpbml0aWFsPXtmYWxzZX0gb25FeGl0Q29tcGxldGU9eygpID0+IHdpbmRvdy5zY3JvbGxUbygwLCAwKX0+XG5cdFx0XHRcdFx0ezxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gbG9hZGluZz17bG9hZGluZ30gLz59XG5cdFx0XHRcdFx0PFRvYXN0ZXIgdG9hc3RPcHRpb25zPXt0b2FzdGVyT3B0fSBwb3NpdGlvbj1cImJvdHRvbS1jZW50ZXJcIiAvPlxuXHRcdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDwvUGVyc2lzdEdhdGU+XG5cdFx0PC9Qcm92aWRlcj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsIlBlcnNpc3RHYXRlIiwic3RvcmUiLCJwZXJzaXN0b3IiLCJSZWFjdCIsIlJvdXRlciIsIkFuaW1hdGVQcmVzZW5jZSIsIlRvYXN0ZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3RhcnQiLCJlbmQiLCJldmVudHMiLCJvbiIsIm9mZiIsInRvYXN0ZXJPcHQiLCJzdHlsZSIsInBhZGRpbmciLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImR1cmF0aW9uIiwibW9kZSIsImluaXRpYWwiLCJvbkV4aXRDb21wbGV0ZSIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9hc3RPcHRpb25zIiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@thecodingmachine/redux-toolkit-wrapper":
/*!**********************************************************!*\
  !*** external "@thecodingmachine/redux-toolkit-wrapper" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@thecodingmachine/redux-toolkit-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/integration/react":
/*!******************************************************!*\
  !*** external "redux-persist/lib/integration/react" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("regenerator-runtime/runtime");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();