/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/api/types/shema.js":
/*!********************************!*\
  !*** ./src/api/types/shema.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar _require = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\"),\n    gql = _require.gql;\n\nmodule.exports = gql(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n    type User {\\n        id: ID!\\n        email: String!\\n    }\\n    \\n    type Query {\\n        user(id: ID): User\\n        users: [User!]!\\n        me: User!\\n        hello: String\\n    }\\n    type Mutation {\\n        createUser(email: String!, password: String!): String!\\n    }\\n\"])));\n\n//# sourceURL=webpack://mredings/./src/api/types/shema.js?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("add9194ffb1776ded80d")
/******/ })();
/******/ 
/******/ }
;