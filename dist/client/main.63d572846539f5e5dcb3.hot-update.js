"use strict";
self["webpackHotUpdatemredings"]("main",{

/***/ "./src/client/Login/Register.jsx":
/*!***************************************!*\
  !*** ./src/client/Login/Register.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Input */ "./src/client/components/Input.jsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useApolloClient.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
var _templateObject;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var SET_USER = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    mutation Mutation($email: String!, $password: String!) {\n        createUser(email: $email, password: $password)\n    }\n"])));

var Register = function Register() {
  var client = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useApolloClient)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();

  var goToLogin = function goToLogin() {
    return navigate('/login');
  };

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(SET_USER, {
    onCompleted: function onCompleted(data) {
      localStorage.setItem("token", data.createUser);
    }
  }),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      createUser = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({
    mode: 'onBlur'
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      reset = _useForm.reset,
      errors = _useForm.formState.errors;

  var onSubmit = function onSubmit(data) {
    createUser({
      variables: {
        email: data.email,
        password: data.password
      }
    });
    reset();
  };

  if (loading) return 'loading...';
  if (error) return "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 ".concat(error.message);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "px-8 pt-6 pb-8 mb-2",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    label: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u043F\u043E\u0447\u0442\u0443",
    type: "email",
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443",
    classNameLabel: "block text-gray-700 text-sm font-bold mb-2",
    classNameInput: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  }, register('email', {
    required: "Поле обязательно к заполнению",
    minLength: {
      value: 2,
      message: "Поле должно содержать более 2 символов"
    }
  }))), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "pl-2 text-red-500 text-sm"
  }, errors.email.message || "Необходимо ввести логин")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    label: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
    classNameLabel: "block text-gray-700 text-sm font-bold mb-2",
    classNameInput: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
    type: "password"
  }, register('password', {
    required: "Поле обязательно к заполнению",
    minLength: {
      value: 2,
      message: "Поле должно содержать более 2 символов"
    }
  }))), errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "pl-2 text-red-500 text-sm"
  }, errors.password.message || "Необходимо ввести пароль")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    label: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
    classNameLabel: "block text-gray-700 text-sm font-bold mb-2",
    classNameInput: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    type: "password",
    name: "twopassword",
    placeholder: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"
  }, register('twopassword', {
    required: "Поле обязательно к заполнению",
    minLength: {
      value: 2,
      message: "Поле должно содержать более 2 символов"
    }
  }))), errors.twopassword && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "pl-2 text-red-500 text-sm"
  }, errors.twopassword.message || "Необходимо подтвердить пароль")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between mt-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
    type: "submit"
  }, "\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c63187a4b890b9be3916")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.63d572846539f5e5dcb3.hot-update.js.map