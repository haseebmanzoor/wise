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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\n//THIS IS HOME SCREEN PAGE WITHOUT ANY ROUTE NAME SO IT WILL ALWAYS RENDER AS HOME WHEN NO ROUTE IS PROVIDED\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home(param) {\n    var results = param.results, loading = param.loading;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var userData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.userr.user;\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), accNo = ref[0], setaccNo = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), lName = ref1[0], setlName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password = ref2[0], setpassword = ref2[1];\n    //FUNCTIONS\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            initial: {\n                opacity: 0\n            },\n            whileInView: {\n                opacity: 1\n            },\n            viewport: {\n                once: true\n            },\n            className: \"flex flex-col h-screen items-center overflow-auto scrollbar-hide space-y-4 bg-blue-400 justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-sm text-white\",\n                    children: \"Sign In\"\n                }, void 0, false, {\n                    fileName: \"/Users/khaleef/Desktop/user/pages/index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    src: __webpack_require__(/*! @/assets/logoBrand.png */ \"./assets/logoBrand.png\"),\n                    width: 200,\n                    height: 100\n                }, void 0, false, {\n                    fileName: \"/Users/khaleef/Desktop/user/pages/index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    className: \"form-input bg-gray-50 rounded-md border-0 transition-all w-[350px] text-sm h-[60px] text-gray-400 tracking-wider \",\n                    placeholder: \"Account Number\",\n                    value: accNo,\n                    onChange: function(e) {\n                        setaccNo(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/khaleef/Desktop/user/pages/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/khaleef/Desktop/user/pages/index.tsx\",\n            lineNumber: 23,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n};\n_s(Home, \"ZtA8oWKuurt0+EkRAeqPqYZ8FvI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQURBLDRHQUE0RztBQUNyRDtBQUNYO0FBQ0o7QUFDRDtBQUNiO0FBRUs7O0FBRWhCLFNBQVNPLElBQUksQ0FBQyxLQUFvQixFQUFFO1FBQXBCQyxPQUFPLEdBQVQsS0FBb0IsQ0FBbEJBLE9BQU8sRUFBRUMsT0FBTyxHQUFsQixLQUFvQixDQUFUQSxPQUFPOztJQUM5QyxJQUFNQyxRQUFRLEdBQUdWLHdEQUFXLEVBQU87SUFDbkMsSUFBTVcsTUFBTSxHQUFHUixzREFBUyxFQUFFO0lBQzFCLElBQU1TLFFBQVEsR0FBR1gsd0RBQVcsQ0FBQyxTQUFDWSxLQUFVO2VBQUtBLEtBQUssQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJO0tBQUEsQ0FBQztJQUU5RCxJQUEwQmIsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQWR2QyxLQWNhLEdBQWNBLEdBQVksR0FBMUIsRUFkYixRQWN1QixHQUFJQSxHQUFZLEdBQWhCO0lBQ3RCLElBQTBCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBZnZDLEtBZWEsR0FBY0EsSUFBWSxHQUExQixFQWZiLFFBZXVCLEdBQUlBLElBQVksR0FBaEI7SUFDdEIsSUFBZ0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFoQjdDLFFBZ0JnQixHQUFpQkEsSUFBWSxHQUE3QixFQWhCaEIsV0FnQjZCLEdBQUlBLElBQVksR0FBaEI7SUFFNUIsV0FBVztJQUVYLHFCQUNDO2tCQUNDLDRFQUFDRSxxREFBVTtZQUNWbUIsT0FBTyxFQUFFO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQzthQUFFO1lBQ3ZCQyxXQUFXLEVBQUU7Z0JBQUVELE9BQU8sRUFBRSxDQUFDO2FBQUU7WUFDM0JFLFFBQVEsRUFBRTtnQkFBRUMsSUFBSSxFQUFFLElBQUk7YUFBRTtZQUN4QkMsU0FBUyxFQUFDLHVHQUMwQzs7OEJBRXBELDhEQUFDQyxJQUFFO29CQUFDRCxTQUFTLEVBQUMsb0JBQW9COzhCQUFDLFNBQU87Ozs7O3dCQUFLOzhCQUMvQyw4REFBQ3RCLG1EQUFLO29CQUFDd0IsR0FBRyxFQUFFQyxtQkFBTyxDQUFDLHNEQUF3QixDQUFDO29CQUFFQyxLQUFLLEVBQUUsR0FBRztvQkFBRUMsTUFBTSxFQUFFLEdBQUc7Ozs7O3dCQUFJOzhCQUMxRSw4REFBQ0MsT0FBSztvQkFDTEMsSUFBSSxFQUFDLFFBQVE7b0JBQ2JQLFNBQVMsRUFBQyxtSEFDZ0Q7b0JBQzFEUSxXQUFXLEVBQUMsZ0JBQWdCO29CQUM1QkMsS0FBSyxFQUFFckIsS0FBSztvQkFDWnNCLFFBQVEsRUFBRSxTQUFDQyxDQUFDLEVBQUs7d0JBQ2hCdEIsUUFBUSxDQUFDc0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQyxDQUFDO3FCQUN6Qjs7Ozs7d0JBQ0E7Ozs7OztnQkFDVTtxQkFDWCxDQUNGO0NBQ0Y7R0FuQ3VCOUIsSUFBSTs7UUFDVlAsb0RBQVc7UUFDYkcsa0RBQVM7UUFDUEYsb0RBQVc7OztBQUhMTSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vVEhJUyBJUyBIT01FIFNDUkVFTiBQQUdFIFdJVEhPVVQgQU5ZIFJPVVRFIE5BTUUgU08gSVQgV0lMTCBBTFdBWVMgUkVOREVSIEFTIEhPTUUgV0hFTiBOTyBST1VURSBJUyBQUk9WSURFRFxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2V0VXNlckFjdGlvbiBmcm9tIFwiQC9TdG9yZS9Vc2VyL1NldFVzZXJBY3Rpb25cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcmVzdWx0cywgbG9hZGluZyB9KSB7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8YW55PigpO1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgdXNlckRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUudXNlcnIudXNlcik7XG5cblx0Y29uc3QgW2FjY05vLCBzZXRhY2NOb10gPSB1c2VTdGF0ZShcIlwiKTtcblx0Y29uc3QgW2xOYW1lLCBzZXRsTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRwYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXHQvL0ZVTkNUSU9OU1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuXHRcdFx0XHR3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxIH19XG5cdFx0XHRcdHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cblx0XHRcdFx0Y2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLXNjcmVlbiBpdGVtcy1jZW50ZXIgb3ZlcmZsb3ctYXV0byBcblx0XHRcdFx0c2Nyb2xsYmFyLWhpZGUgc3BhY2UteS00IGJnLWJsdWUtNDAwIGp1c3RpZnktY2VudGVyXCJcblx0XHRcdD5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZVwiPlNpZ24gSW48L2gxPlxuXHRcdFx0XHQ8SW1hZ2Ugc3JjPXtyZXF1aXJlKFwiQC9hc3NldHMvbG9nb0JyYW5kLnBuZ1wiKX0gd2lkdGg9ezIwMH0gaGVpZ2h0PXsxMDB9IC8+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0taW5wdXQgYmctZ3JheS01MCByb3VuZGVkLW1kIGJvcmRlci0wIHRyYW5zaXRpb24tYWxsICBcblx0XHRcdFx0XHR3LVszNTBweF0gdGV4dC1zbSAgaC1bNjBweF0gdGV4dC1ncmF5LTQwMCB0cmFja2luZy13aWRlciBcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiQWNjb3VudCBOdW1iZXJcIlxuXHRcdFx0XHRcdHZhbHVlPXthY2NOb31cblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0XHRcdHNldGFjY05vKGUudGFyZ2V0LnZhbHVlKTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIm1vdGlvbiIsIlJlYWN0IiwiSW1hZ2UiLCJIb21lIiwicmVzdWx0cyIsImxvYWRpbmciLCJkaXNwYXRjaCIsInJvdXRlciIsInVzZXJEYXRhIiwic3RhdGUiLCJ1c2VyciIsInVzZXIiLCJhY2NObyIsInNldGFjY05vIiwibE5hbWUiLCJzZXRsTmFtZSIsInBhc3N3b3JkIiwic2V0cGFzc3dvcmQiLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwiY2xhc3NOYW1lIiwiaDEiLCJzcmMiLCJyZXF1aXJlIiwid2lkdGgiLCJoZWlnaHQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});