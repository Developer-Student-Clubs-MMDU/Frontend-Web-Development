"use strict";
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
exports.id = "pages/users/student";
exports.ids = ["pages/users/student"];
exports.modules = {

/***/ "./pages/users/student/index.jsx":
/*!***************************************!*\
  !*** ./pages/users/student/index.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UsersPage = ()=>{\n    console.log(\"print\");\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    console.log(\"Users\", users);\n    console.log(\"hello\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchUsers() {\n            const data = await fetch(\"https://dummyjson.com/users\");\n            setUsers(await data.json());\n        }\n        fetchUsers();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            border: \" solid 2px  #F1EBC7   \"\n                        },\n                        children: \" STUDENT MORE INFO \"\n                    }, void 0, false, {\n                        fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        style: {\n                            width: \"100vw\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            style: {\n                                                background: \" green\"\n                                            },\n                                            children: \" Student Id \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            style: {\n                                                background: \" green\"\n                                            },\n                                            children: \"  PHONE No.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            style: {\n                                                background: \" #30DF11 \"\n                                            },\n                                            children: \"  Username \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            style: {\n                                                background: \" #CDDF11  \"\n                                            },\n                                            children: \"university\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, undefined),\n                            users && users.users && users.users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        style: {\n                                            textAlign: \"center\"\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                style: {\n                                                    border: \" solid 2px #F1C7EA   \"\n                                                },\n                                                children: user.id\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                style: {\n                                                    border: \" solid 2px #F1C7EA   \"\n                                                },\n                                                children: user.phone\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 38\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                style: {\n                                                    border: \" solid 2px #F1C7EA   \"\n                                                },\n                                                children: [\n                                                    user.username,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                style: {\n                                                    border: \" solid 2px #F1C7EA   \"\n                                                },\n                                                children: [\n                                                    user.university,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, user.id, false, {\n                                    fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 29\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/users\",\n                        style: {\n                            background: \"red\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Student Details →\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"click here to view student details\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Powered  by Vikram   \"\n                    }, void 0, false, {\n                        fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vikramkumar/Desktop/Demonstrate the Client-side data fetching using Next.js /pages/users/student/index.jsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9zdHVkZW50L2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQTRDO0FBRTVDLE1BQU1FLFlBQVksSUFBTTtJQUNwQkMsUUFBUUMsR0FBRyxDQUFDO0lBQ1osTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNFLFFBQVFDLEdBQUcsQ0FBQyxTQUFTQztJQUNyQkYsUUFBUUMsR0FBRyxDQUFDO0lBQ1pKLGdEQUFTQSxDQUFDLElBQU07UUFHWixlQUFlTyxhQUFhO1lBQ3hCLE1BQU1DLE9BQU8sTUFBTUMsTUFBTTtZQUV6QkgsU0FBUyxNQUFNRSxLQUFLRSxJQUFJO1FBRTVCO1FBRUFIO0lBRUosR0FBRyxFQUFFO0lBSUwscUJBQ0ksOERBQUNJOzswQkFDRyw4REFBQ0M7O2tDQUNHLDhEQUFDQzt3QkFBSUMsT0FBTzs0QkFBQ0MsUUFBTzt3QkFBeUI7a0NBQUs7Ozs7OztrQ0FDbEQsOERBQUNDO3dCQUFNRixPQUFPOzRCQUFDRyxPQUFPO3dCQUFPOzswQ0FDekIsOERBQUNDOzBDQUNELDRFQUFDQzs7c0RBQ0QsOERBQUNDOzRDQUFHTixPQUFPO2dEQUFDTyxZQUFXOzRDQUFTO3NEQUFJOzs7Ozs7c0RBQ2hDLDhEQUFDRDs0Q0FBR04sT0FBTztnREFBQ08sWUFBVzs0Q0FBUztzREFBSTs7Ozs7O3NEQUNwQyw4REFBQ0Q7NENBQUdOLE9BQU87Z0RBQUNPLFlBQVc7NENBQVk7c0RBQUk7Ozs7OztzREFDdkMsOERBQUNEOzRDQUFHTixPQUFPO2dEQUFDTyxZQUFXOzRDQUFhO3NEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFLeENoQixTQUFTQSxNQUFNQSxLQUFLLElBRXBCQSxNQUFNQSxLQUFLLENBQUNpQixHQUFHLENBQUMsQ0FBQ0MscUJBSWIsOERBQUNDOzhDQUVHLDRFQUFDTDt3Q0FBR0wsT0FBTzs0Q0FBQ1csV0FBVTt3Q0FBUTs7MERBRTlCLDhEQUFDQztnREFBSVosT0FBTztvREFBQ0MsUUFBTztnREFBd0I7MERBQU1RLEtBQUtJLEVBQUU7Ozs7OzswREFDcEQsOERBQUNEO2dEQUFJWixPQUFPO29EQUFDQyxRQUFPO2dEQUF3QjswREFBTVEsS0FBS0ssS0FBSzs7Ozs7OzBEQUM3RCw4REFBQ0Y7Z0RBQUlaLE9BQU87b0RBQUNDLFFBQU87Z0RBQXdCOztvREFBTVEsS0FBS00sUUFBUTtvREFBQzs7Ozs7OzswREFDaEUsOERBQUNIO2dEQUFJWixPQUFPO29EQUFDQyxRQUFPO2dEQUF3Qjs7b0RBQU1RLEtBQUtPLFVBQVU7b0RBQUM7Ozs7Ozs7Ozs7Ozs7bUNBUDlEUCxLQUFLSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFrQm5DLDhEQUFDSTs7a0NBQ0QsOERBQUNDO3dCQUFFQyxNQUFLO3dCQUFTbkIsT0FBTzs0QkFBQ08sWUFBVzt3QkFBSzs7MENBQ3pDLDhEQUFDYTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQzswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUdTLDhEQUFDQTtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTNCO0FBQ0EsaUVBQWVqQyxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdDEvLi9wYWdlcy91c2Vycy9zdHVkZW50L2luZGV4LmpzeD8yMGJlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBVc2Vyc1BhZ2UgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJwcmludFwiKTtcbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnNvbGUubG9nKFwiVXNlcnNcIiwgdXNlcnMpO1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcnMoKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2R1bW15anNvbi5jb20vdXNlcnNcIik7XG5cbiAgICAgICAgICAgIHNldFVzZXJzKGF3YWl0IGRhdGEuanNvbigpKVxuXG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaFVzZXJzKClcblxuICAgIH0sIFtdKVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMSAgc3R5bGU9e3tib3JkZXI6XCIgc29saWQgMnB4ICAjRjFFQkM3ICAgXCIgfX0gID4gU1RVREVOVCBNT1JFIElORk8gPC9oMT5cbiAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3t3aWR0aDogXCIxMDB2d1wifX0+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIGdyZWVuXCIgfX0gPiBTdHVkZW50IElkIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIGdyZWVuXCIgfX0gPiAgUEhPTkUgTm8uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e2JhY2tncm91bmQ6XCIgIzMwREYxMSBcIiB9fSA+ICBVc2VybmFtZSA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7YmFja2dyb3VuZDpcIiAjQ0RERjExICBcIiB9fSA+dW5pdmVyc2l0eTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnMgJiYgdXNlcnMudXNlcnMgJiZcblxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnMudXNlcnMubWFwKCh1c2VyKSA9PiAoXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBrZXk9e3VzZXIuaWR9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAgc3R5bGU9e3tib3JkZXI6XCIgc29saWQgMnB4ICNGMUM3RUEgICBcIiB9fSAgPnt1c2VyLmlkIH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAgc3R5bGU9e3tib3JkZXI6XCIgc29saWQgMnB4ICNGMUM3RUEgICBcIiB9fSAgPnt1c2VyLnBob25lIH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICBzdHlsZT17e2JvcmRlcjpcIiBzb2xpZCAycHggI0YxQzdFQSAgIFwiIH19ICA+e3VzZXIudXNlcm5hbWV9IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgIHN0eWxlPXt7Ym9yZGVyOlwiIHNvbGlkIDJweCAjRjFDN0VBICAgXCIgfX0gID57dXNlci51bml2ZXJzaXR5fSA8L3RkPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG5cblxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvdXNlcnNcIiBzdHlsZT17e2JhY2tncm91bmQ6XCJyZWRcIn19ICA+XG4gICAgICAgICAgICA8aDI+U3R1ZGVudCBEZXRhaWxzICZyYXJyOzwvaDI+XG4gICAgICAgICAgICA8cD5jbGljayBoZXJlIHRvIHZpZXcgc3R1ZGVudCBkZXRhaWxzPC9wPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UG93ZXJlZCAgYnkgVmlrcmFtICAgPC9wPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuXG5cblxuICAgICAgICA8L2NlbnRlcj5cblxuICAgICk7XG5cbn07XG5leHBvcnQgZGVmYXVsdCBVc2Vyc1BhZ2U7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJVc2Vyc1BhZ2UiLCJjb25zb2xlIiwibG9nIiwidXNlcnMiLCJzZXRVc2VycyIsImZldGNoVXNlcnMiLCJkYXRhIiwiZmV0Y2giLCJqc29uIiwiY2VudGVyIiwiZGl2IiwiaDEiLCJzdHlsZSIsImJvcmRlciIsInRhYmxlIiwid2lkdGgiLCJ0aGVhZCIsInRyIiwidGgiLCJiYWNrZ3JvdW5kIiwibWFwIiwidXNlciIsInRib2R5IiwidGV4dEFsaWduIiwidGQiLCJpZCIsInBob25lIiwidXNlcm5hbWUiLCJ1bml2ZXJzaXR5IiwiZm9vdGVyIiwiYSIsImhyZWYiLCJoMiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/student/index.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/student/index.jsx"));
module.exports = __webpack_exports__;

})();