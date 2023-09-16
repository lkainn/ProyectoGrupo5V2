"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./components/RegistrationForm.js":
/*!****************************************!*\
  !*** ./components/RegistrationForm.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst RegistrationForm = ()=>{\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const apiUrl = \"http://127.0.0.1:8000/\";\n    const fetcher = async (url, data)=>{\n        const response = await fetch(url, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        if (!response.ok) {\n            throw new Error(\"Network response was not ok\");\n        }\n        return response.json();\n    };\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(apiUrl, fetcher);\n    const handleUsernameChange = (e)=>{\n        setUsername(e.target.value);\n    };\n    const handleEmailChange = (e)=>{\n        setEmail(e.target.value);\n    };\n    const handlePasswordChange = (e)=>{\n        setPassword(e.target.value);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Validaciones\n        const validationErrors = {};\n        if (username.trim() === \"\") {\n            validationErrors.username = \"Username is required\";\n        }\n        if (email.trim() === \"\") {\n            validationErrors.email = \"Email is required\";\n        }\n        if (password.trim() === \"\") {\n            validationErrors.password = \"Password is required\";\n        }\n        if (Object.keys(validationErrors).length > 0) {\n            setErrors(validationErrors);\n            setSuccessMessage(\"\");\n            setErrorMessage(\"\");\n            return;\n        }\n        const registrationData = {\n            username,\n            email,\n            password\n        };\n        try {\n            const response = await fetcher(apiUrl, registrationData);\n            if (response.success) {\n                // Registro exitoso\n                setSuccessMessage(\"Registro exitoso\");\n                setErrorMessage(\"\");\n                // Limpiar los campos después de un registro exitoso\n                setUsername(\"\");\n                setEmail(\"\");\n                setPassword(\"\");\n            } else {\n                if (response.errors) {\n                    // Manejar errores de validación\n                    setErrorMessage(\"Error en el registro. Verifica tus datos.\");\n                    setSuccessMessage(\"\");\n                }\n            }\n        } catch (error) {\n            // Manejar errores de red u otros errores de la API\n            setErrorMessage(\"Error en la solicitud. Int\\xe9ntalo de nuevo m\\xe1s tarde.\");\n            setSuccessMessage(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Formulario de registro\"\n            }, void 0, false, {\n                fileName: \"X:\\\\Proyecto grupo 5\\\\proyectogrupo5\\\\frontend\\\\components\\\\RegistrationForm.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            successMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"success\",\n                children: successMessage\n            }, void 0, false, {\n                fileName: \"X:\\\\Proyecto grupo 5\\\\proyectogrupo5\\\\frontend\\\\components\\\\RegistrationForm.js\",\n                lineNumber: 102,\n                columnNumber: 26\n            }, undefined),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"error\",\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"X:\\\\Proyecto grupo 5\\\\proyectogrupo5\\\\frontend\\\\components\\\\RegistrationForm.js\",\n                lineNumber: 103,\n                columnNumber: 24\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit\n            }, void 0, false, {\n                fileName: \"X:\\\\Proyecto grupo 5\\\\proyectogrupo5\\\\frontend\\\\components\\\\RegistrationForm.js\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"X:\\\\Proyecto grupo 5\\\\proyectogrupo5\\\\frontend\\\\components\\\\RegistrationForm.js\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RegistrationForm, \"aw1u1AzUo20TsGV6cJJXjd1RlYg=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = RegistrationForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistrationForm);\nvar _c;\n$RefreshReg$(_c, \"RegistrationForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN2Qyw4REFBQ29DO2dCQUFLQyxVQUFVZDs7Ozs7Ozs7Ozs7O0FBS3RCO0dBekdNbEM7O1FBeUJvQkQsMkNBQU1BOzs7S0F6QjFCQztBQTJHTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uRm9ybS5qcz80OWE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5cclxuY29uc3QgUmVnaXN0cmF0aW9uRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtzdWNjZXNzTWVzc2FnZSwgc2V0U3VjY2Vzc01lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgYXBpVXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC8nO1xyXG5cclxuICBjb25zdCBmZXRjaGVyID0gYXN5bmMgKHVybCwgZGF0YSkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihhcGlVcmwsIGZldGNoZXIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVVc2VybmFtZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRW1haWxDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhc3N3b3JkQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIFZhbGlkYWNpb25lc1xyXG4gICAgY29uc3QgdmFsaWRhdGlvbkVycm9ycyA9IHt9O1xyXG5cclxuICAgIGlmICh1c2VybmFtZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIHZhbGlkYXRpb25FcnJvcnMudXNlcm5hbWUgPSAnVXNlcm5hbWUgaXMgcmVxdWlyZWQnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbWFpbC50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIHZhbGlkYXRpb25FcnJvcnMuZW1haWwgPSAnRW1haWwgaXMgcmVxdWlyZWQnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXNzd29yZC50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIHZhbGlkYXRpb25FcnJvcnMucGFzc3dvcmQgPSAnUGFzc3dvcmQgaXMgcmVxdWlyZWQnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChPYmplY3Qua2V5cyh2YWxpZGF0aW9uRXJyb3JzKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNldEVycm9ycyh2YWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoJycpO1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJycpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVnaXN0cmF0aW9uRGF0YSA9IHtcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaGVyKGFwaVVybCwgcmVnaXN0cmF0aW9uRGF0YSk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgIC8vIFJlZ2lzdHJvIGV4aXRvc29cclxuICAgICAgICBzZXRTdWNjZXNzTWVzc2FnZSgnUmVnaXN0cm8gZXhpdG9zbycpO1xyXG4gICAgICAgIHNldEVycm9yTWVzc2FnZSgnJyk7XHJcbiAgICAgICAgLy8gTGltcGlhciBsb3MgY2FtcG9zIGRlc3B1w6lzIGRlIHVuIHJlZ2lzdHJvIGV4aXRvc29cclxuICAgICAgICBzZXRVc2VybmFtZSgnJyk7XHJcbiAgICAgICAgc2V0RW1haWwoJycpO1xyXG4gICAgICAgIHNldFBhc3N3b3JkKCcnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3JzKSB7XHJcbiAgICAgICAgICAvLyBNYW5lamFyIGVycm9yZXMgZGUgdmFsaWRhY2nDs25cclxuICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnRXJyb3IgZW4gZWwgcmVnaXN0cm8uIFZlcmlmaWNhIHR1cyBkYXRvcy4nKTtcclxuICAgICAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKCcnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIE1hbmVqYXIgZXJyb3JlcyBkZSByZWQgdSBvdHJvcyBlcnJvcmVzIGRlIGxhIEFQSVxyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ0Vycm9yIGVuIGxhIHNvbGljaXR1ZC4gSW50w6ludGFsbyBkZSBudWV2byBtw6FzIHRhcmRlLicpO1xyXG4gICAgICBzZXRTdWNjZXNzTWVzc2FnZSgnJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMj5Gb3JtdWxhcmlvIGRlIHJlZ2lzdHJvPC9oMj5cclxuICAgICAge3N1Y2Nlc3NNZXNzYWdlICYmIDxwIGNsYXNzTmFtZT1cInN1Y2Nlc3NcIj57c3VjY2Vzc01lc3NhZ2V9PC9wPn1cclxuICAgICAge2Vycm9yTWVzc2FnZSAmJiA8cCBjbGFzc05hbWU9XCJlcnJvclwiPntlcnJvck1lc3NhZ2V9PC9wPn1cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgey8qIC4uLiBSZXN0byBkZWwgZm9ybXVsYXJpbyAqL31cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbkZvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlU1dSIiwiUmVnaXN0cmF0aW9uRm9ybSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9ycyIsInNldEVycm9ycyIsInN1Y2Nlc3NNZXNzYWdlIiwic2V0U3VjY2Vzc01lc3NhZ2UiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJhcGlVcmwiLCJmZXRjaGVyIiwidXJsIiwiZGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwianNvbiIsImVycm9yIiwiaGFuZGxlVXNlcm5hbWVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0aW9uRXJyb3JzIiwidHJpbSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJyZWdpc3RyYXRpb25EYXRhIiwic3VjY2VzcyIsImRpdiIsImgyIiwicCIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RegistrationForm.js\n"));

/***/ })

});