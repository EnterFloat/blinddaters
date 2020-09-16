(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App'\n});\n\n//# sourceURL=webpack:///./src/frontend/App.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/AppHomeComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/AppHomeComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cometchat-pro/chat */ \"./node_modules/@cometchat-pro/chat/CometChat.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CONSTS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CONSTS */ \"./src/frontend/CONSTS.js\");\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader */ \"./src/frontend/Loader.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"AppHomeComponent\",\n  components: {\n    Loader: _Loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  data: function data() {\n    return {\n      // showUi: false,\n      showloader: false,\n      uid: null\n    };\n  },\n  methods: {\n    login: function login(event, uid) {\n      var _this = this;\n\n      this.showloader = true;\n\n      if (event) {\n        event.preventDefault();\n      }\n\n      if (uid) {\n        this.uid = uid;\n      }\n\n      _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__[\"CometChat\"].login(this.uid, _CONSTS__WEBPACK_IMPORTED_MODULE_1__[\"COMETCHAT_CONSTANTS\"].API_KEY).then(function (user) {\n        console.log('current log : ', user);\n        location.href = '#/menu';\n        _this.showloader = false;\n      });\n    }\n  },\n  created: function created() {\n    var _this2 = this;\n\n    _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__[\"CometChat\"].getLoggedinUser().then(function (user) {\n      if (user) {\n        location.href = '#/menu';\n        _this2.uid = user.getUid();\n      } else {\n        _this2.showloader = false;\n      }\n    }, function (error) {\n      console.log('yes here', error);\n      _this2.showloader = false;\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/AppHomeComponent.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/AppNavigationComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/AppNavigationComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cometchat-pro/chat */ \"./node_modules/@cometchat-pro/chat/CometChat.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"AppNavigationComponent\",\n  created: function created() {\n    _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__[\"CometChat\"].getLoggedinUser().then(function (user) {\n      console.log('we are here', user);\n\n      if (!user) {\n        location.href = '/';\n      }\n    }, function (error) {\n      console.log(error);\n      location.href = '/';\n    });\n  },\n  methods: {\n    logout: function logout() {\n      _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__[\"CometChat\"].logout().then(function () {\n        location.href = '/';\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/AppNavigationComponent.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/Loader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/Loader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Loader'\n});\n\n//# sourceURL=webpack:///./src/frontend/Loader.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/Avatar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/Avatar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ \"./node_modules/core-js/modules/es.date.to-string.js\");\n/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Avatar\",\n  props: ['item'],\n  data: function data() {\n    return {\n      randomcolor: function randomcolor() {\n        var color = Math.floor(0x1000000 * Math.random()).toString(16);\n        var bgcolor = '#' + ('000000' + color).slice(-6);\n        return bgcolor;\n      }\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/Avatar.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/CallList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/CallList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"CallList\"\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/CallList.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ChatContainer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/ChatContainer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cometchat-pro/chat */ \"./node_modules/@cometchat-pro/chat/CometChat.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LeftSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeftSidebar */ \"./src/frontend/lib/cometchat-components/components/LeftSidebar.vue\");\n/* harmony import */ var _MessageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageContainer */ \"./src/frontend/lib/cometchat-components/components/MessageContainer.vue\");\n/* harmony import */ var _RightSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RightSidebar */ \"./src/frontend/lib/cometchat-components/components/RightSidebar.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ChatContainer',\n  components: {\n    LeftSidebar: _LeftSidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    MessageContainer: _MessageContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    RightSidebar: _RightSidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  data: function data() {\n    return {\n      leftOpen: true,\n      centerOpen: false,\n      rightOpen: false,\n      currentUser: null\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__[\"CometChat\"].getLoggedinUser().then(function (user) {\n      if (user) {\n        _this.currentUser = user;\n      }\n    }, function (error) {\n      console.log('yes here', error);\n    });\n  },\n  mounted: function mounted() {\n    this.$root.$on(\"selectedUser\", function (data) {\n      console.log(data);\n      var el = document.getElementById('pageWrapper');\n      console.log('back butn', el);\n\n      if (el.classList.contains(\"left-open\")) {\n        el.classList.add(\"center-open\");\n        el.classList.remove(\"left-open\");\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ChatContainer.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ChatList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/ChatList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: STRING_CONSTS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STRING_CONSTS\", function() { return STRING_CONSTS; });\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim */ \"./node_modules/core-js/modules/es.string.trim.js\");\n/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers */ \"./node_modules/core-js/modules/web.timers.js\");\n/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cometchat-pro/chat */ \"./node_modules/@cometchat-pro/chat/CometChat.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Avatar */ \"./src/frontend/lib/cometchat-components/components/Avatar.vue\");\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nvar STRING_CONSTS = {\n  STRING_MESSAGES: {\n    LOADING_MESSSAGE: 'Loading...',\n    SEARCH_LOADING: 'Searching...',\n    ERROR_LOADING_USERS: 'Error in loading',\n    ERROR_COMETCHAT_LOGIN: 'Loag in error, reload',\n    ERROR_NO_USERS_FOUND: 'No users found',\n    EMPTY_STRING: '',\n    SINGLE_SPACE: ' '\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"ChatList\",\n  components: {\n    Avatar: _Avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  data: function data() {\n    return {\n      chatList: [],\n      chatRequest: '',\n      messageToDisplay: '',\n      callChatList: function callChatList(searchKey) {\n        if (searchKey) {\n          this.chatRequest = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].ConversationsRequestBuilder().setLimit(30).setSearchKeyword(searchKey).build();\n        } else {\n          this.chatRequest = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].ConversationsRequestBuilder().setLimit(30).build();\n        }\n\n        return this.chatRequest;\n      },\n      chatFetchNext: function chatFetchNext() {\n        return this.chatRequest.fetchNext();\n      }\n    };\n  },\n  methods: {\n    currentUser: function currentUser(data, index) {\n      this.$root.$emit('selectedUser', data.conversationWith);\n      this.chatList[index].unreadMessageCount = 0;\n    },\n    getChatList: function getChatList(data) {\n      var _this = this;\n\n      this.callChatList(data).fetchNext().then(function (chat) {\n        _this.chatList = [].concat(Object(_Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this.chatList), Object(_Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(chat));\n      }, function (error) {\n        console.log(error);\n      });\n    },\n    handleChatScroll: function handleChatScroll(element) {\n      var _this2 = this;\n\n      if (element.target.offsetHeight + element.target.scrollTop >= element.target.scrollHeight - 20) {\n        this.chatFetchNext().then(function (chat) {\n          _this2.chatList = [].concat(Object(_Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this2.chatList), Object(_Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(chat));\n        }, function (error) {\n          console.log(error);\n        });\n      }\n    },\n    onSearchChange: function onSearchChange(event) {\n      var _this3 = this;\n\n      this.chatList = [];\n\n      if (this.searchStarted) {\n        clearTimeout(this.searchStarted);\n      }\n\n      if (event.target.value.trim() !== STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING) {\n        this.searchStarted = setTimeout(function () {\n          _this3.messageToDisplay = STRING_CONSTS.STRING_MESSAGES.SEARCH_LOADING;\n\n          _this3.getChatList(event.target.value);\n        }, 400);\n      } else if (event.target.value.trim() === STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING && event.data === null) {\n        event.target.value = STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING;\n        this.searchStarted = setTimeout(function () {\n          _this3.getChatList();\n        }, 400);\n      } else if (event.target.value.trim() === STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING && event.data === STRING_CONSTS.STRING_MESSAGES.SINGLE_SPACE) {\n        event.target.value = STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING;\n      }\n    }\n  },\n  created: function created() {\n    this.getChatList();\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ChatList.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ContactScreen.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/ContactScreen.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cometchat-pro/chat */ \"./node_modules/@cometchat-pro/chat/CometChat.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UserList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList */ \"./src/frontend/lib/cometchat-components/components/UserList.vue\");\n/* harmony import */ var _MessageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageContainer */ \"./src/frontend/lib/cometchat-components/components/MessageContainer.vue\");\n/* harmony import */ var _RightSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RightSidebar */ \"./src/frontend/lib/cometchat-components/components/RightSidebar.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ContactScreen',\n  components: {\n    UserList: _UserList__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    MessageContainer: _MessageContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    RightSidebar: _RightSidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  data: function data() {\n    return {\n      currentUser: null,\n      leftOpen: true,\n      centerOpen: false,\n      rightOpen: false\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__[\"CometChat\"].getLoggedinUser().then(function (user) {\n      if (user) {\n        _this.currentUser = user;\n      }\n    }, function (error) {\n      console.log('yes here', error);\n    });\n  },\n  mounted: function mounted() {\n    this.$root.$on(\"selectedUser\", function (data) {\n      console.log(data);\n      var el = document.getElementById('pageWrapper');\n\n      if (el.classList.contains(\"left-open\")) {\n        el.classList.add(\"center-open\");\n        el.classList.remove(\"left-open\");\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ContactScreen.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ConversationScreen.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/ConversationScreen.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cometchat-pro/chat */ \"./node_modules/@cometchat-pro/chat/CometChat.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ChatList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatList */ \"./src/frontend/lib/cometchat-components/components/ChatList.vue\");\n/* harmony import */ var _MessageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageContainer */ \"./src/frontend/lib/cometchat-components/components/MessageContainer.vue\");\n/* harmony import */ var _RightSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RightSidebar */ \"./src/frontend/lib/cometchat-components/components/RightSidebar.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ConversationScreen',\n  components: {\n    ChatList: _ChatList__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    MessageContainer: _MessageContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    RightSidebar: _RightSidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  data: function data() {\n    return {\n      currentUser: null,\n      leftOpen: true,\n      centerOpen: false,\n      rightOpen: false\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__[\"CometChat\"].getLoggedinUser().then(function (user) {\n      if (user) {\n        _this.currentUser = user;\n      }\n    }, function (error) {\n      console.log('yes here', error);\n    });\n  },\n  mounted: function mounted() {\n    this.$root.$on(\"selectedUser\", function (data) {\n      console.log(data);\n      var el = document.getElementById('pageWrapper');\n\n      if (el.classList.contains(\"left-open\")) {\n        el.classList.add(\"center-open\");\n        el.classList.remove(\"left-open\");\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ConversationScreen.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/GroupList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/GroupList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: STRING_CONSTS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STRING_CONSTS\", function() { return STRING_CONSTS; });\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim */ \"./node_modules/core-js/modules/es.string.trim.js\");\n/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers */ \"./node_modules/core-js/modules/web.timers.js\");\n/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cometchat-pro/chat */ \"./node_modules/@cometchat-pro/chat/CometChat.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Avatar */ \"./src/frontend/lib/cometchat-components/components/Avatar.vue\");\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nvar STRING_CONSTS = {\n  STRING_MESSAGES: {\n    LOADING_MESSSAGE: 'Loading...',\n    SEARCH_LOADING: 'Searching...',\n    ERROR_LOADING_USERS: 'Error in loading',\n    ERROR_COMETCHAT_LOGIN: 'Loag in error, reload',\n    ERROR_NO_USERS_FOUND: 'No users found',\n    EMPTY_STRING: '',\n    SINGLE_SPACE: ' '\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"GroupList\",\n  components: {\n    Avatar: _Avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  data: function data() {\n    return {\n      grousList: [],\n      groupRequest: '',\n      messageToDisplay: '',\n      callGroup: function callGroup(searchKey) {\n        if (searchKey) {\n          this.groupRequest = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].GroupsRequestBuilder().setLimit(30).setSearchKeyword(searchKey).build();\n        } else {\n          this.groupRequest = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].GroupsRequestBuilder().setLimit(30).build();\n        }\n\n        return this.groupRequest;\n      },\n      groupFetchnext: function groupFetchnext() {\n        return this.groupRequest.fetchNext();\n      }\n    };\n  },\n  methods: {\n    currentGroup: function currentGroup(data) {\n      this.$root.$emit('selectedUser', data);\n    },\n    getGroupList: function getGroupList(data) {\n      var _this = this;\n\n      this.callGroup(data).fetchNext().then(function (groups) {\n        _this.grousList = [].concat(Object(_Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this.grousList), Object(_Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(groups));\n      }, function (error) {\n        console.log(error);\n      });\n    },\n    handleGroupScroll: function handleGroupScroll(elem) {\n      var _this2 = this;\n\n      if (elem.target.offsetHeight + elem.target.scrollTop >= elem.target.scrollHeight - 20) {\n        this.groupFetchnext().then(function (group) {\n          _this2.grousList = [].concat(Object(_Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this2.grousList), Object(_Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(group));\n        }, function (error) {\n          console.log(error);\n        });\n      }\n    },\n    onSearchChange: function onSearchChange(event) {\n      var _this3 = this;\n\n      this.grousList = [];\n\n      if (this.searchStarted) {\n        clearTimeout(this.searchStarted);\n      }\n\n      if (event.target.value.trim() !== STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING) {\n        this.searchStarted = setTimeout(function () {\n          _this3.messageToDisplay = STRING_CONSTS.STRING_MESSAGES.SEARCH_LOADING;\n\n          _this3.getGroupList(event.target.value);\n        }, 400);\n      } else if (event.target.value.trim() === STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING && event.data === null) {\n        event.target.value = STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING;\n        this.searchStarted = setTimeout(function () {\n          _this3.getGroupList();\n        }, 400);\n      } else if (event.target.value.trim() === STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING && event.data === STRING_CONSTS.STRING_MESSAGES.SINGLE_SPACE) {\n        event.target.value = STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING;\n      }\n    }\n  },\n  created: function created() {\n    this.getGroupList();\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/GroupList.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/GroupScreen.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/GroupScreen.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cometchat-pro/chat */ \"./node_modules/@cometchat-pro/chat/CometChat.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _GroupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupList */ \"./src/frontend/lib/cometchat-components/components/GroupList.vue\");\n/* harmony import */ var _MessageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageContainer */ \"./src/frontend/lib/cometchat-components/components/MessageContainer.vue\");\n/* harmony import */ var _RightSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RightSidebar */ \"./src/frontend/lib/cometchat-components/components/RightSidebar.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'GroupScreen',\n  components: {\n    GroupList: _GroupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    MessageContainer: _MessageContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    RightSidebar: _RightSidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  data: function data() {\n    return {\n      currentUser: null,\n      leftOpen: true,\n      centerOpen: false,\n      rightOpen: false\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__[\"CometChat\"].getLoggedinUser().then(function (user) {\n      if (user) {\n        _this.currentUser = user;\n      }\n    }, function (error) {\n      console.log('yes here', error);\n    });\n  },\n  mounted: function mounted() {\n    this.$root.$on(\"selectedUser\", function (data) {\n      console.log(data);\n      var el = document.getElementById('pageWrapper');\n\n      if (el.classList.contains(\"left-open\")) {\n        el.classList.add(\"center-open\");\n        el.classList.remove(\"left-open\");\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/GroupScreen.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SidebarHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarHeader */ \"./src/frontend/lib/cometchat-components/components/SidebarHeader.vue\");\n/* harmony import */ var _NavComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavComponent */ \"./src/frontend/lib/cometchat-components/components/NavComponent.vue\");\n/* harmony import */ var _UserList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserList */ \"./src/frontend/lib/cometchat-components/components/UserList.vue\");\n/* harmony import */ var _ChatList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatList */ \"./src/frontend/lib/cometchat-components/components/ChatList.vue\");\n/* harmony import */ var _CallList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CallList */ \"./src/frontend/lib/cometchat-components/components/CallList.vue\");\n/* harmony import */ var _GroupList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GroupList */ \"./src/frontend/lib/cometchat-components/components/GroupList.vue\");\n/* harmony import */ var _MoreList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MoreList */ \"./src/frontend/lib/cometchat-components/components/MoreList.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// import { CometChat } from \"@cometchat-pro/chat\";\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"LeftSidebar\",\n  components: {\n    SidebarHeader: _SidebarHeader__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    Nav: _NavComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    UserList: _UserList__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    CallList: _CallList__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    GroupList: _GroupList__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    MoreList: _MoreList__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    ChatList: _ChatList__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  data: function data() {\n    return {\n      activeTab: \"contacts\"\n    };\n  },\n  methods: {\n    currentTab: function currentTab(value) {\n      this.activeTab = value;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/Loader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/Loader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Loader'\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/Loader.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/Log.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/Log.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Log\",\n  props: ['log_data'],\n  data: function data() {\n    return {\n      log: function log(log_data) {\n        console.log(log_data);\n      }\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/Log.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageContainer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/MessageContainer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MessageHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageHeader */ \"./src/frontend/lib/cometchat-components/components/MessageHeader.vue\");\n/* harmony import */ var _MessageView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageView */ \"./src/frontend/lib/cometchat-components/components/MessageView.vue\");\n/* harmony import */ var _MessageFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageFooter */ \"./src/frontend/lib/cometchat-components/components/MessageFooter.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"MessageContainer\",\n  props: ['currentUser'],\n  components: {\n    MessageHeader: _MessageHeader__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    MessageView: _MessageView__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    MessageFooter: _MessageFooter__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  data: function data() {\n    return {\n      userData: {}\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.$root.$on(\"selectedUser\", function (data) {\n      _this.userData = data;\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageContainer.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageFooter.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/MessageFooter.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ \"./node_modules/core-js/modules/es.date.to-string.js\");\n/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cometchat-pro/chat */ \"./node_modules/@cometchat-pro/chat/CometChat.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"MessageFooter\",\n  data: function data() {\n    return {\n      inputmessage: '',\n      user: '',\n      group: '',\n      // currentUser: '',\n      listItems: [{\n        title: 'Image',\n        id: 'image',\n        icon: 'image_icon.svg'\n      }, {\n        title: 'File',\n        id: 'file',\n        icon: 'attach_file_icon.svg'\n      }, {\n        title: 'Audio',\n        id: 'audio',\n        icon: 'audiotrack_icon.svg'\n      }, {\n        title: 'Video',\n        id: 'video',\n        icon: 'video_icon.svg'\n      }, {\n        title: 'Location',\n        id: 'location',\n        icon: 'location_on_icon.svg'\n      }],\n      filesInput: null,\n      imageInput: null,\n      audioInput: null,\n      videoInput: null,\n      updatedMessagesList: ''\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.$root.$on(\"selectedUser\", function (data) {\n      _this.currentUser = data;\n\n      if (data.uid) {\n        _this.user = data;\n      } else if (data.guid) {\n        _this.group = data;\n      }\n    });\n  },\n  methods: {\n    onchangeDetect: function onchangeDetect(ev) {\n      var _this2 = this;\n\n      // console.log(ev.target.value);\n      if (ev.keyCode === 13 && ev.shiftKey) {\n        console.log(' I am shift enter', ev.srcElement.innerText);\n      } else if (ev.keyCode === 13) {\n        ev.preventDefault();\n        var receiverID;\n        var receiverType;\n\n        if (this.group) {\n          receiverID = this.group.guid;\n          receiverType = _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].RECEIVER_TYPE.GROUP;\n        } else {\n          receiverID = this.user.uid;\n          receiverType = _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].RECEIVER_TYPE.USER;\n        }\n\n        var messageText = ev.target.value.toString();\n        var textMessage = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].TextMessage(receiverID, messageText, receiverType);\n        ev.target.value = '';\n        _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].sendMessage(textMessage).then(function (message) {\n          // console.log('Message sent successfully:', message);\n          if (_this2.onMessageSent) {\n            _this2.onMessageSent(message);\n          } // if (this.onAction) {\n          //   this.onAction('message_sent', message);\n          // }\n          // this.$root.$emit('messageSent', message);\n\n        }, function (error) {\n          console.log('Message sending failed with error:', error);\n        });\n        return false;\n      }\n    },\n    onItemClick: function onItemClick(event, item) {\n      console.log('item clicked here on conversation page==', event, item);\n      this.inputType = item.id;\n\n      switch (item.id) {\n        case 'file':\n          {\n            document.getElementById('file-input').click();\n            break;\n          }\n\n        case 'image':\n          {\n            document.getElementById('image-input').click();\n            break;\n          }\n\n        case 'video':\n          {\n            document.getElementById('video-input').click();\n            break;\n          }\n\n        case 'audio':\n          {\n            document.getElementById('audio-input').click();\n            break;\n          }\n\n        case 'location':\n          {\n            document.getElementById('file-input').click();\n            break;\n          }\n      }\n    },\n    onMediInputChange: function onMediInputChange(event) {\n      var _this3 = this;\n\n      console.log('file ', event);\n      var reader = new FileReader();\n\n      reader.onload = function (e) {\n        switch (event.target.id) {\n          case 'video-input':\n            {\n              _this3.videoInput = e.target.result;\n              break;\n            }\n\n          case 'image-input':\n            {\n              _this3.imageInput = e.target.result;\n              break;\n            }\n\n          case 'audio-input':\n            {\n              _this3.audioInput = e.target.result;\n              break;\n            }\n\n          case 'file-input':\n            {\n              // this.filesInput = this.sanitizer.bypassSecurityTrustResourceUrl(e.target.result);\n              _this3.filesInput = e.target.result;\n              break;\n            }\n        }\n      };\n\n      console.log(this.fileName = event.target.files[0]);\n      this.fileName = event.target.files[0].name;\n      this.fileSize = event.target.files[0].size / 1000 + 'kb';\n      reader.readAsDataURL(event.target.files[0]);\n    },\n    sendImageMessage: function sendImageMessage(event) {\n      var _this4 = this;\n\n      console.log('done event', event);\n      var input;\n      var messageType;\n      var receiverID;\n      var receiverType;\n\n      if (this.imageInput) {\n        input = document.getElementById('image-input');\n        messageType = _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].MESSAGE_TYPE.IMAGE;\n      } else if (this.filesInput) {\n        input = document.getElementById('file-input');\n        messageType = _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].MESSAGE_TYPE.FILE;\n      } else if (this.audioInput) {\n        messageType = _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].MESSAGE_TYPE.AUDIO;\n        input = document.getElementById('audio-input');\n      } else if (this.videoInput) {\n        messageType = _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].MESSAGE_TYPE.VIDEO;\n        input = document.getElementById('video-input');\n      } // input = document.getElementById('image-input');\n\n\n      if (this.user) {\n        receiverID = this.user.uid;\n        receiverType = _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].RECEIVER_TYPE.USER;\n      } else if (this.group) {\n        receiverID = this.group.guid;\n        receiverType = _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].RECEIVER_TYPE.GROUP;\n      }\n\n      var mediaMessage = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].MediaMessage(receiverID, input.files[0], messageType, receiverType);\n      console.log(mediaMessage);\n      _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].sendMediaMessage(mediaMessage).then(function (message) {\n        console.log('Media message sent successfully', message);\n\n        _this4.onMessageSent(message);\n\n        input.value = null;\n        _this4.imageInput = undefined;\n        _this4.audioInput = undefined;\n        _this4.filesInput = undefined;\n        _this4.videoInput = undefined;\n        _this4.showOptionMenu = false;\n      }, function (error) {\n        console.log('Media message sending failed with error', error); // Handle exception.\n      });\n    },\n    onMessageSent: function onMessageSent(message) {\n      // this.updatedMessagesList = JSON.stringify([message]);\n      // console.log('sent msg call', this.updatedMessagesList);\n      this.$root.$emit('messageSent', message);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageFooter.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageHeader.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/MessageHeader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ \"./node_modules/core-js/modules/es.date.to-string.js\");\n/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cometchat-pro/chat */ \"./node_modules/@cometchat-pro/chat/CometChat.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"MessageHeader\",\n  data: function data() {\n    return {\n      menuOption: false,\n      userData: {}\n    };\n  },\n  // props:['userData'],\n  mounted: function mounted() {\n    var _this = this;\n\n    this.$root.$on(\"selectedUser\", function (data) {\n      _this.userData = data;\n    });\n  },\n  methods: {\n    getDate: function getDate(datetime) {\n      var date = new Date(datetime * 1000);\n      return date.toLocaleTimeString();\n    },\n    randomcolor: function randomcolor() {\n      var color = Math.floor(0x1000000 * Math.random()).toString(16);\n      var bgcolor = '#' + ('000000' + color).slice(-6);\n      return bgcolor;\n    },\n    makeAudioCall: function makeAudioCall(event) {\n      console.log('Audio call', event);\n    },\n    makeVideoCall: function makeVideoCall(event) {\n      console.log('Video call', event);\n    },\n    clickMenuOption: function clickMenuOption() {\n      this.menuOption = !this.menuOption;\n      this.$root.$emit('menuOpen', this.menuOption);\n      var el = document.getElementById('pageWrapper');\n\n      if (el.classList.contains(\"center-open\")) {\n        el.classList.remove(\"center-open\");\n        el.classList.add(\"right-open\"); // el.classList.add(\"left-open\");\n      }\n    },\n    backToLeft: function backToLeft() {\n      var el = document.getElementById('pageWrapper');\n\n      if (el.classList.contains(\"center-open\")) {\n        el.classList.remove(\"center-open\"); // el.classList.remove(\"right-open\");\n\n        el.classList.add(\"left-open\");\n      }\n    },\n    attachListener: function attachListener(callback) {\n      var _this2 = this;\n\n      // console.log(\"attched Listener\",callback);\n      //  console.log('listner header');\n      var listenerID = 'UNIQUE_LISTENER_ID_HEADER';\n      _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].addUserListener(listenerID, new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].UserListener({\n        onUserOnline: function onUserOnline(onlineUser) {\n          /* when someuser/friend comes online, user will be received here */\n          if (onlineUser.getUid() === _this2.userData.uid) {\n            callback(onlineUser);\n            console.log(onlineUser, 'isonline');\n          }\n        },\n        onUserOffline: function onUserOffline(offlineUser) {\n          /* when someuser/friend went offline, user will be received here */\n          if (offlineUser.getUid() === _this2.userData.uid) {\n            callback(offlineUser);\n            console.log(offlineUser, 'is offline');\n          }\n        }\n      }));\n    },\n    callback: function callback(user) {\n      console.log(user, 'isonlineoffline');\n      this.userData = user;\n    }\n  },\n  created: function created() {\n    this.attachListener(this.callback);\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageHeader.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageView.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/MessageView.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ \"./node_modules/core-js/modules/es.date.to-string.js\");\n/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.parse-int */ \"./node_modules/core-js/modules/es.parse-int.js\");\n/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers */ \"./node_modules/core-js/modules/web.timers.js\");\n/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @cometchat-pro/chat */ \"./node_modules/@cometchat-pro/chat/CometChat.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Loader */ \"./src/frontend/lib/cometchat-components/components/Loader.vue\");\n\n\n\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"MessageView\",\n  props: ['currentUser'],\n  components: {\n    Loader: _Loader__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n  },\n  data: function data() {\n    return {\n      userData: {},\n      messageRequest: [],\n      messages: [],\n      currentScrollPossition: 0,\n      scrollTrigger: false,\n      cometchat: _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_8__[\"CometChat\"],\n      loading: false,\n      messageRequestBuilder: function messageRequestBuilder(uType, uid, limit) {\n        var messagesRequest = \"\";\n\n        if (uType == \"user\") {\n          messagesRequest = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_8__[\"CometChat\"].MessagesRequestBuilder().setUID(uid).setLimit(limit).build();\n        } else {\n          messagesRequest = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_8__[\"CometChat\"].MessagesRequestBuilder().setGUID(uid).setLimit(limit).build();\n        }\n\n        return messagesRequest;\n      },\n      attachListener: function attachListener(callback) {\n        var _this = this;\n\n        var listenerID = 'UNIQUE_LISTENER_ID';\n        _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_8__[\"CometChat\"].addMessageListener(listenerID, new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_8__[\"CometChat\"].MessageListener({\n          onTextMessageReceived: function onTextMessageReceived(textMessage) {\n            // console.log('Text message received successfully', textMessage);\n            _this.checkAndSendToCallBack(textMessage, callback); // Handle text message\n\n          },\n          onMediaMessageReceived: function onMediaMessageReceived(mediaMessage) {\n            // console.log('Media message received successfully', mediaMessage);\n            // Handle media message\n            _this.checkAndSendToCallBack(mediaMessage, callback);\n          },\n          onCustomMessageReceived: function onCustomMessageReceived(customMessage) {\n            // console.log('Custom message received successfully', customMessage);\n            // Handle custom message\n            _this.checkAndSendToCallBack(customMessage, callback);\n          },\n          onMessagesDelivered: function onMessagesDelivered(messageDelivered) {\n            // console.log('Custom message messageDelivered successfully', messageDelivered);\n            _this.checkAndSendToCallBack(messageDelivered, callback, true);\n          },\n          onMessagesRead: function onMessagesRead(messageRead) {\n            // console.log('Custom message messageRead successfully', messageRead);\n            _this.checkAndSendToCallBack(messageRead, callback, true);\n          },\n          onTypingEnded: function onTypingEnded(typingIndicator) {\n            console.log('typingIndicator', typingIndicator);\n          }\n        }));\n      },\n      checkAndSendToCallBack: function checkAndSendToCallBack(message, callback) {\n        var isReceipt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n        if (!isReceipt) {\n          var msg = message;\n\n          if (msg.getReceiverType() === 'user') {\n            if (this.userData.uid === msg.getSender().getUid()) {\n              callback(msg);\n            }\n          } else {\n            if (this.userData.guid === msg.getReceiverId()) {\n              callback(msg);\n            }\n          }\n        } else {\n          var msgReceipt = message;\n\n          if (msgReceipt.getReceiverType() === 'user') {\n            if (this.userData.uid === msgReceipt.getSender().getUid()) {\n              callback(msgReceipt, true);\n            }\n          } else {\n            if (this.userData.guid === msgReceipt.getReceiver()) {\n              callback(msgReceipt, true);\n            }\n          }\n        }\n      },\n      markMessageAsRead: function markMessageAsRead(message) {\n        if (!(message.getReadAt() || message.getReadByMeAt())) {\n          if (message.getReceiverType() === 'user') {\n            _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_8__[\"CometChat\"].markAsRead(message.getId().toString(), message.getSender().getUid(), message.getReceiverType());\n          } else {\n            _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_8__[\"CometChat\"].markAsRead(message.getId().toString(), message.getReceiverId(), message.getReceiverType());\n          }\n        }\n      }\n    };\n  },\n  // props:['userData'],\n  mounted: function mounted() {\n    var _this2 = this;\n\n    this.$root.$on(\"selectedUser\", function (data) {\n      _this2.messageWindowRefresh(data);\n    });\n    this.$root.$on(\"messageSent\", function (msg) {\n      console.log(\"change something\");\n\n      _this2.messages.push(msg);\n\n      _this2.scrollToBottom(); // this.checkListner();\n      // this.messageScrollWrpr.scrollTop = this.messageScrollWrpr.scrollHeight;\n\n    });\n  },\n  created: function created() {\n    var _this3 = this;\n\n    this.attachListener(function (message, isReceipt) {\n      if (!isReceipt) {\n        // this.messages=[...this.messages,message];\n        // const message = message;\n        // const currentscrollHeight = this.tref.nativeElement.scrollHeight;\n        // this.messages = this.messages.filter((msg) => {\n        //   return msg['id'] !== message['id'];\n        // });\n        _this3.messages = [].concat(Object(_Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this3.messages), [message]); // this.messages.push(message);\n\n        _this3.markMessageAsRead(message);\n      } else {\n        // console.log('this is messages objects', this.messages);\n        var messageReceipt = message;\n\n        if (messageReceipt.getReceiverType() === 'user') {\n          var messages = _this3.messages.map(function (msgObject) {\n            if (!msgObject['deliveredAt'] && messageReceipt.RECEIPT_TYPE.DELIVERY_RECEIPT === messageReceipt.getReceiptType() && messageReceipt.getSender().getUid() === _this3.userData.uid) {\n              msgObject['deliveredAt'] = parseInt(messageReceipt.getDeliveredAt().toString());\n            }\n\n            if (!msgObject['readAt'] && messageReceipt.RECEIPT_TYPE.READ_RECEIPT === messageReceipt.getReceiptType() && messageReceipt.getSender().getUid() === _this3.userData.uid) {\n              msgObject['readAt'] = parseInt(messageReceipt.getReadAt().toString());\n            }\n\n            return msgObject;\n          });\n\n          _this3.messages = messages;\n        } else {//TODO update if receiver type is group;\n        }\n      }\n    });\n  },\n  updated: function updated() {\n    var _this4 = this;\n\n    this.messageScrollWrpr = document.getElementById(\"messageViewWrapr\"); // this.scrollToBottom();\n    // if (!this.scrollTrigger) {\n\n    this.messageScrollWrpr.scrollTop = this.messageScrollWrpr.scrollHeight;\n    setTimeout(function () {\n      // this.messageScrollWrpr.scrollTop = this.messageScrollWrpr.scrollHeight - this.currentScrollPossition;\n      _this4.messageScrollWrpr.scrollTop = _this4.messageScrollWrpr.scrollHeight;\n    }, 1000); // } else {\n    // console.log('call once---77777');\n    // //   setTimeout(() => {\n    //     this.scrollToBottom();\n    // //   }, 500);\n    // }\n  },\n  methods: {\n    messageWindowRefresh: function messageWindowRefresh(data) {\n      var _this5 = this;\n\n      this.loading = true;\n      this.userData = data;\n      this.messages = []; // this.currentHeight = 0;\n\n      if (this.userData && this.userData.uid) {\n        this.messageRequest = this.messageRequestBuilder(\"user\", this.userData.uid, 30);\n        this.messageRequest.fetchPrevious().then(function (messages) {\n          _this5.messages = [].concat(Object(_Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(messages), Object(_Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this5.messages));\n          _this5.loading = false;\n\n          _this5.scrollToBottom();\n        }, function (err) {\n          console.log(err);\n        });\n      } else if (this.userData && this.userData.guid) {\n        this.messageRequest = this.messageRequestBuilder(\"group\", this.userData.guid, 30);\n        this.messageRequest.fetchPrevious().then(function (messages) {\n          _this5.messages = [].concat(Object(_Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this5.messages), Object(_Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(messages));\n          _this5.loading = false;\n\n          _this5.scrollToBottom();\n        }, function (err) {\n          console.log(err);\n        });\n      } // return false;\n\n    },\n    getDate: function getDate(datetime) {\n      var date = new Date(datetime * 1000); // console.log(date.toLocaleTimeString().split(':'))\n\n      return date.toLocaleTimeString(); // return date.toLocaleTimeString().split(':')[0] + ':' + date.toLocaleTimeString().split(':')[1] ;\n      // var date = new Date(datetime * 1000);\n      // var hours = date.getHours();\n      // var minutes = date.getMinutes();\n      // // var seconds = date.getSeconds();\n      // return (\"0\"+hours).slice(-2) +\":\"+ (\"0\"+minutes).slice(-2);\n    },\n    handlePreviousMsg: function handlePreviousMsg(event) {\n      var _this6 = this;\n\n      this.scrollTrigger = true;\n\n      if (event.target.scrollTop === 0 && this.messages.length > 0) {\n        this.currentScrollPossition = this.messageScrollWrpr.scrollHeight;\n        this.messageRequest.fetchPrevious().then(function (messages) {\n          if (messages.length > 0) _this6.messages = [].concat(Object(_Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(messages), Object(_Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this6.messages)); // console.log(this.messages);\n\n          _this6.scrollTrigger = false;\n        }, function (err) {\n          console.log(err);\n        });\n      }\n    },\n    scrollToBottom: function scrollToBottom() {\n      var _this7 = this;\n\n      // this.messageScrollWrpr.scrollTop = this.messageScrollWrpr.scrollHeight + this.messageScrollWrpr.offsetHeight;\n      // if (!this.scrollTrigger) {\n      //     this.messageScrollWrpr.scrollTop = this.messageScrollWrpr.scrollHeight - this.currentScrollPossition;\n      // } else {\n      // }\n      setTimeout(function () {\n        _this7.messageScrollWrpr.scrollTop = _this7.messageScrollWrpr.scrollHeight + _this7.messageScrollWrpr.offsetHeight;\n      }, 100);\n    },\n    printDate: function printDate(time1, time2) {\n      if (time2) {\n        if (new Date(time1 * 1000).getDate() - new Date(time2 * 1000).getDate()) {\n          return new Date(time1 * 1000).toLocaleDateString();\n        }\n      } else {\n        return new Date(time1 * 1000).toLocaleDateString();\n      }\n\n      return undefined;\n    },\n    checkListner: function checkListner() {\n      if (this.userData && this.userData.uid) {\n        this.group = undefined;\n        this.refreshMessageList = '';\n        this.messages = []; // console.log('message list component is getting called+++');\n      } else if (this.userData && this.userData.guid) {\n        this.user = undefined;\n        this.refreshMessageList = '';\n        this.messages = [];\n      } else {\n        return;\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageView.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MoreList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/MoreList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cometchat-pro/chat */ \"./node_modules/@cometchat-pro/chat/CometChat.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"MoreList\",\n  data: function data() {\n    var _this = this;\n\n    return {\n      user: _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__[\"CometChat\"].getLoggedinUser().then(function (usr) {\n        if (usr) {\n          _this.user = usr; // console.log(this.loggedInUser, '++++');\n        }\n      })\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MoreList.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/NavComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/NavComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Nav\",\n  methods: {\n    tabClickHandler: function tabClickHandler(e) {\n      e.preventDefault();\n      var currEle = e.currentTarget;\n      var currentTabName = currEle.getAttribute(\"id\");\n      var oldActive = document.querySelector(\".active\");\n      oldActive.classList.remove(\"active\");\n\n      if (currentTabName == \"contactlist\") {\n        currEle.classList.add(\"active\"); // this.activeTab = \"contacts\";\n\n        this.$emit('activeTab', 'contacts');\n      } else if (currentTabName === \"calllist\") {\n        currEle.classList.add(\"active\"); // this.activeTab = \"call\";\n\n        this.$emit('activeTab', 'call');\n      } else if (currentTabName === \"chatlist\") {\n        currEle.classList.add(\"active\"); // this.activeTab = \"chat\";\n\n        this.$emit('activeTab', 'chat');\n      } else if (currentTabName === \"grouplist\") {\n        currEle.classList.add(\"active\"); // this.activeTab = \"groups\";        \n\n        this.$emit('activeTab', 'groups');\n      } else {\n        currEle.classList.add(\"active\"); // this.activeTab = \"more\";        \n\n        this.$emit('activeTab', 'more');\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/NavComponent.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/RightSidebar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/RightSidebar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cometchat-pro/chat */ \"./node_modules/@cometchat-pro/chat/CometChat.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"RightSidebar\",\n  data: function data() {\n    return {\n      isMenu: false,\n      user: {},\n      blockeUser: ''\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.$root.$on(\"menuOpen\", function (val) {\n      // console.log(val, 'menu open')\n      _this.isMenu = val;\n    });\n    this.$root.$on(\"selectedUser\", function (data) {\n      _this.user = data;\n      _this.blockeUser = _this.user.blockedByMe;\n    });\n  },\n  methods: {\n    toggleBlockUser: function toggleBlockUser() {\n      var _this2 = this;\n\n      // console.log(event);\n      if (!this.blockeUser) {\n        var usersList = [this.user.uid]; //   console.log(event.target)\n\n        _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__[\"CometChat\"].blockUsers(usersList).then(function (list) {\n          _this2.blockeUser = !_this2.blockeUser;\n          console.log(\"users list blocked\", {\n            list: list\n          });\n        }, function (error) {\n          console.log(\"Blocking user fails with error\", error);\n        });\n      } else {\n        var _usersList = [this.user.uid];\n        _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_0__[\"CometChat\"].unblockUsers(_usersList).then(function (list) {\n          _this2.blockeUser = !_this2.blockeUser;\n          console.log(\"users list unblocked\", {\n            list: list\n          });\n        }, function (error) {\n          console.log(\"unblocking user fails with error\", error);\n        });\n      }\n    },\n    backToCenter: function backToCenter() {\n      var el = document.getElementById('pageWrapper');\n\n      if (el.classList.contains(\"right-open\")) {\n        el.classList.remove(\"right-open\");\n        el.classList.add(\"center-open\");\n        this.isMenu = false;\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/RightSidebar.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"SidebarHeader\",\n  props: ['activeTab']\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/UserList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/UserList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: STRING_CONSTS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STRING_CONSTS\", function() { return STRING_CONSTS; });\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim */ \"./node_modules/core-js/modules/es.string.trim.js\");\n/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers */ \"./node_modules/core-js/modules/web.timers.js\");\n/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cometchat-pro/chat */ \"./node_modules/@cometchat-pro/chat/CometChat.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Avatar */ \"./src/frontend/lib/cometchat-components/components/Avatar.vue\");\n/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Log */ \"./src/frontend/lib/cometchat-components/components/Log.vue\");\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvar STRING_CONSTS = {\n  STRING_MESSAGES: {\n    LOADING_MESSSAGE: \"Loading...\",\n    SEARCH_LOADING: \"Searching...\",\n    ERROR_LOADING_USERS: \"Error in loading\",\n    ERROR_COMETCHAT_LOGIN: \"Loag in error, reload\",\n    ERROR_NO_USERS_FOUND: \"No users found\",\n    EMPTY_STRING: \"\",\n    SINGLE_SPACE: \" \"\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"UserList\",\n  components: {\n    Avatar: _Avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    Log: _Log__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  },\n  data: function data() {\n    return {\n      usersList: [],\n      usersRequest: \"\",\n      messageToDisplay: \"\",\n      callUser: function callUser(searchKey) {\n        if (searchKey) {\n          this.usersRequest = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].UsersRequestBuilder().setLimit(30).setSearchKeyword(searchKey).build();\n        } else {\n          this.usersRequest = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].UsersRequestBuilder().setLimit(30).build();\n        }\n\n        return this.usersRequest;\n      },\n      userFetchNext: function userFetchNext() {\n        return this.usersRequest.fetchNext();\n      }\n    };\n  },\n  methods: {\n    currentUser: function currentUser(data) {\n      this.$root.$emit(\"selectedUser\", data);\n    },\n    getUserlist: function getUserlist(data) {\n      var _this = this;\n\n      this.callUser(data).fetchNext().then(function (users) {\n        _this.usersList = [].concat(Object(_Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this.usersList), Object(_Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(users));\n      }, function (error) {\n        console.log(error);\n      });\n    },\n    handleUserScroll: function handleUserScroll(elem) {\n      var _this2 = this;\n\n      if (elem.target.offsetHeight + elem.target.scrollTop >= elem.target.scrollHeight - 20) {\n        this.userFetchNext().then(function (users) {\n          _this2.usersList = [].concat(Object(_Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this2.usersList), Object(_Users_Kasper_programming_wordpress_sites_blinddaters_wp_content_plugins_vue_wp_starter_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(users));\n        }, function (error) {\n          console.log(error);\n        });\n      }\n    },\n    onSearchChange: function onSearchChange(event) {\n      var _this3 = this;\n\n      this.usersList = [];\n\n      if (this.searchStarted) {\n        clearTimeout(this.searchStarted);\n      }\n\n      if (event.target.value.trim() !== STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING) {\n        this.searchStarted = setTimeout(function () {\n          _this3.messageToDisplay = STRING_CONSTS.STRING_MESSAGES.SEARCH_LOADING;\n\n          _this3.getUserlist(event.target.value);\n        }, 400);\n      } else if (event.target.value.trim() === STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING && event.data === null) {\n        event.target.value = STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING;\n        this.searchStarted = setTimeout(function () {\n          _this3.getUserlist();\n        }, 400);\n      } else if (event.target.value.trim() === STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING && event.data === STRING_CONSTS.STRING_MESSAGES.SINGLE_SPACE) {\n        event.target.value = STRING_CONSTS.STRING_MESSAGES.EMPTY_STRING;\n      }\n    }\n  },\n  console_log: function console_log(item) {\n    console.log(item);\n    return true;\n  },\n  created: function created() {\n    this.getUserlist();\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/UserList.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/App.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/AppHomeComponent.vue?vue&type=style&index=0&id=5507639e&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/AppHomeComponent.vue?vue&type=style&index=0&id=5507639e&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/AppHomeComponent.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/AppNavigationComponent.vue?vue&type=style&index=0&id=53bfc248&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/AppNavigationComponent.vue?vue&type=style&index=0&id=53bfc248&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/AppNavigationComponent.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/Loader.vue?vue&type=style&index=0&id=82cd7ff2&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/Loader.vue?vue&type=style&index=0&id=82cd7ff2&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/Loader.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/Avatar.vue?vue&type=style&index=0&id=78d5bf48&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/Avatar.vue?vue&type=style&index=0&id=78d5bf48&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/Avatar.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ChatContainer.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/ChatContainer.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ChatContainer.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ChatList.vue?vue&type=style&index=0&id=31a175d9&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/ChatList.vue?vue&type=style&index=0&id=31a175d9&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ChatList.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/GroupList.vue?vue&type=style&index=0&id=2879230a&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/GroupList.vue?vue&type=style&index=0&id=2879230a&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/GroupList.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/Loader.vue?vue&type=style&index=0&id=2564bbd4&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/Loader.vue?vue&type=style&index=0&id=2564bbd4&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/Loader.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageContainer.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/MessageContainer.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageContainer.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageFooter.vue?vue&type=style&index=0&id=65c1da62&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/MessageFooter.vue?vue&type=style&index=0&id=65c1da62&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageFooter.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageHeader.vue?vue&type=style&index=0&id=235d127e&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/MessageHeader.vue?vue&type=style&index=0&id=235d127e&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageHeader.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageView.vue?vue&type=style&index=0&id=48ef59d9&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/MessageView.vue?vue&type=style&index=0&id=48ef59d9&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageView.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MoreList.vue?vue&type=style&index=0&id=19b0d0d6&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/MoreList.vue?vue&type=style&index=0&id=19b0d0d6&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MoreList.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/RightSidebar.vue?vue&type=style&index=0&id=4b4cd0e3&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/RightSidebar.vue?vue&type=style&index=0&id=4b4cd0e3&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/RightSidebar.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/UserList.vue?vue&type=style&index=0&id=6ae0a968&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/UserList.vue?vue&type=style&index=0&id=6ae0a968&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/UserList.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/App.vue?vue&type=template&id=82d33a46&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/App.vue?vue&type=template&id=82d33a46& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"app\" } }, [_c(\"router-view\")], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/AppHomeComponent.vue?vue&type=template&id=5507639e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/AppHomeComponent.vue?vue&type=template&id=5507639e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      !_vm.showloader\n        ? _c(\n            \"div\",\n            { staticStyle: { \"text-align\": \"center\", display: \"flex\" } },\n            [\n              _c(\"div\", { staticStyle: { margin: \"auto\" } }, [\n                _vm._m(0),\n                _vm._v(\" \"),\n                _c(\n                  \"p\",\n                  {\n                    staticStyle: {\n                      margin: \"auto\",\n                      \"font-size\": \"42px\",\n                      color: \"#2da7ff\",\n                      \"font-weight\": \"500\",\n                      \"line-height\": \"54px\"\n                    }\n                  },\n                  [_vm._v(\"\\n        Kitchen Sink App\\n      \")]\n                ),\n                _vm._v(\" \"),\n                _c(\"p\", { staticStyle: { margin: \"auto\", padding: \"10px\" } }, [\n                  _vm._v(\"\\n        Login with one of our sample users\\n      \")\n                ]),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  {\n                    staticStyle: {\n                      display: \"flex\",\n                      width: \"100%\",\n                      \"flex-wrap\": \"wrap\",\n                      margin: \"auto\"\n                    }\n                  },\n                  [\n                    _c(\"div\", { staticClass: \"userSelector\" }, [\n                      _c(\"img\", {\n                        staticStyle: { margin: \"5px\", \"max-width\": \"41px\" },\n                        attrs: {\n                          src:\n                            \"https://data-us.cometchat.io/assets/images/avatars/ironman.png\"\n                        }\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"p\", { staticStyle: { margin: \"auto\" } }, [\n                        _c(\n                          \"a\",\n                          {\n                            attrs: { href: \"javascript:;\" },\n                            on: {\n                              click: function($event) {\n                                return _vm.login($event, \"superhero1\")\n                              }\n                            }\n                          },\n                          [_vm._v(\" superhero1\")]\n                        )\n                      ])\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"div\", { staticClass: \"userSelector\" }, [\n                      _c(\"img\", {\n                        staticStyle: { margin: \"5px\", \"max-width\": \"41px\" },\n                        attrs: {\n                          src:\n                            \"https://data-us.cometchat.io/assets/images/avatars/captainamerica.png\"\n                        }\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"p\", { staticStyle: { margin: \"auto\" } }, [\n                        _c(\n                          \"a\",\n                          {\n                            attrs: { href: \"javascript:;\" },\n                            on: {\n                              click: function($event) {\n                                return _vm.login($event, \"superhero2\")\n                              }\n                            }\n                          },\n                          [_vm._v(\"superhero2\")]\n                        )\n                      ])\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"div\", { staticClass: \"userSelector\" }, [\n                      _c(\"img\", {\n                        staticStyle: { margin: \"5px\", \"max-width\": \"41px\" },\n                        attrs: {\n                          src:\n                            \"https://data-us.cometchat.io/assets/images/avatars/spiderman.png\"\n                        }\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"p\", { staticStyle: { margin: \"auto\" } }, [\n                        _c(\n                          \"a\",\n                          {\n                            attrs: { href: \"javascript:;\" },\n                            on: {\n                              click: function($event) {\n                                return _vm.login($event, \"superhero3\")\n                              }\n                            }\n                          },\n                          [_vm._v(\"superhero3\")]\n                        )\n                      ])\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"div\", { staticClass: \"userSelector\" }, [\n                      _c(\"img\", {\n                        staticStyle: { margin: \"5px\", \"max-width\": \"41px\" },\n                        attrs: {\n                          src:\n                            \"https://data-us.cometchat.io/assets/images/avatars/wolverine.png\"\n                        }\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"p\", { staticStyle: { margin: \"auto\" } }, [\n                        _c(\n                          \"a\",\n                          {\n                            attrs: { href: \"javascript:;\" },\n                            on: {\n                              click: function($event) {\n                                return _vm.login($event, \"superhero4\")\n                              }\n                            }\n                          },\n                          [_vm._v(\"superhero4\")]\n                        )\n                      ])\n                    ])\n                  ]\n                ),\n                _vm._v(\" \"),\n                _c(\"p\", { staticStyle: { margin: \"auto\", padding: \"10px\" } }, [\n                  _vm._v(\"Login continue with UID\")\n                ]),\n                _vm._v(\" \"),\n                _c(\"input\", {\n                  directives: [\n                    {\n                      name: \"model\",\n                      rawName: \"v-model\",\n                      value: _vm.uid,\n                      expression: \"uid\"\n                    }\n                  ],\n                  staticStyle: { margin: \"auto\", padding: \"10px\" },\n                  attrs: { type: \"text\", placeholder: \"Enter your UID here\" },\n                  domProps: { value: _vm.uid },\n                  on: {\n                    input: function($event) {\n                      if ($event.target.composing) {\n                        return\n                      }\n                      _vm.uid = $event.target.value\n                    }\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  {\n                    staticClass: \"loginButton\",\n                    on: {\n                      click: function($event) {\n                        return _vm.login($event, _vm.uid)\n                      }\n                    }\n                  },\n                  [_vm._v(\"Login\")]\n                )\n              ])\n            ]\n          )\n        : _vm.showloader\n        ? _c(\"Loader\")\n        : _vm._e()\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticStyle: { width: \"150px\", margin: \"auto\" } }, [\n      _c(\"img\", {\n        staticStyle: { \"max-width\": \"100%\", \"max-height\": \"100%\" },\n        attrs: {\n          src:\n            \"https://www.cometchat.com/wp-content/uploads/2018/03/Logo-C-White.png\",\n          alt: \"\"\n        }\n      })\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/AppHomeComponent.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/AppNavigationComponent.vue?vue&type=template&id=53bfc248&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/AppNavigationComponent.vue?vue&type=template&id=53bfc248&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      {\n        staticStyle: {\n          display: \"flex\",\n          \"flex-direction\": \"row\",\n          \"flex-wrap\": \"wrap\"\n        }\n      },\n      [\n        _vm._m(0),\n        _vm._v(\" \"),\n        _c(\n          \"p\",\n          {\n            staticStyle: {\n              width: \"90%\",\n              \"text-align\": \"center\",\n              \"font-size\": \"16px\",\n              margin: \"auto\",\n              color: \"#333\",\n              \"padding-top\": \"50px\"\n            }\n          },\n          [\n            _vm._v(\n              \"\\n            The UI Kit has three different ways to make chat Applications.\\n        \"\n            )\n          ]\n        ),\n        _vm._v(\" \"),\n        _vm._m(1),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          {\n            staticStyle: {\n              width: \"90%\",\n              margin: \"50px\",\n              \"margin-left\": \"auto\",\n              \"margin-right\": \"auto\",\n              \"max-width\": \"500px\"\n            }\n          },\n          [\n            _c(\n              \"div\",\n              {\n                staticStyle: {\n                  \"background-color\": \"white\",\n                  width: \"100%\",\n                  height: \"100%\",\n                  \"box-shadow\": \"0px 0px 5px 0px #3335\",\n                  \"border-radius\": \"10px\",\n                  padding: \"5px\"\n                }\n              },\n              [\n                _c(\"div\", { staticStyle: { \"text-align\": \"center\" } }, [\n                  _c(\"h2\", [\n                    _vm._v(\"\\n                UI Screens\\n                \")\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"p\", [\n                    _vm._v(\n                      \"\\n                It open's Screen Activity where user can use predefined screen present in library. User can create their own\\n                layout using screen in few minutes.\\n                \"\n                    )\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\n                    \"div\",\n                    { staticStyle: { display: \"flex\" } },\n                    [\n                      _c(\n                        \"Ul\",\n                        {\n                          staticStyle: {\n                            display: \"flex\",\n                            width: \"100%\",\n                            margin: \"auto\",\n                            padding: \"5px\"\n                          }\n                        },\n                        [\n                          _c(\"li\", { staticClass: \"chips\" }, [\n                            _c(\n                              \"a\",\n                              { attrs: { href: \"#/conversation-screen\" } },\n                              [_vm._v(\"coversations\")]\n                            )\n                          ]),\n                          _vm._v(\" \"),\n                          _c(\"li\", { staticClass: \"chips\" }, [\n                            _c(\"a\", { attrs: { href: \"#/group-screen\" } }, [\n                              _vm._v(\"group\")\n                            ])\n                          ]),\n                          _vm._v(\" \"),\n                          _c(\"li\", { staticClass: \"chips\" }, [\n                            _c(\"a\", { attrs: { href: \"#/contact-screen\" } }, [\n                              _vm._v(\"contact\")\n                            ])\n                          ])\n                        ]\n                      )\n                    ],\n                    1\n                  )\n                ])\n              ]\n            )\n          ]\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          {\n            staticStyle: {\n              width: \"90%\",\n              margin: \"50px\",\n              \"margin-left\": \"auto\",\n              \"margin-right\": \"auto\",\n              \"max-width\": \"500px\"\n            }\n          },\n          [\n            _c(\n              \"div\",\n              {\n                staticStyle: {\n                  \"background-color\": \"white\",\n                  width: \"100%\",\n                  height: \"100%\",\n                  \"box-shadow\": \"0px 0px 5px 0px #3335\",\n                  \"border-radius\": \"10px\",\n                  padding: \"5px\"\n                }\n              },\n              [\n                _c(\"div\", { staticStyle: { \"text-align\": \"center\" } }, [\n                  _c(\"h2\", [\n                    _vm._v(\"\\n                UI Components\\n                \")\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"p\", [\n                    _vm._v(\n                      \"\\n                It open's Activity directly from UI Library. It is pre-defined UI helpful for user to build chat system by\\n                integrating it within minutes.\\n                \"\n                    )\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\n                    \"div\",\n                    { staticStyle: { display: \"flex\" } },\n                    [\n                      _c(\n                        \"Ul\",\n                        {\n                          staticStyle: {\n                            display: \"flex\",\n                            width: \"100%\",\n                            margin: \"auto\",\n                            padding: \"5px\"\n                          }\n                        },\n                        [\n                          _c(\"li\", { staticClass: \"chips\" }, [\n                            _c(\"a\", { attrs: { href: \"#/contact-list\" } }, [\n                              _vm._v(\"User\")\n                            ])\n                          ]),\n                          _vm._v(\" \"),\n                          _c(\"li\", { staticClass: \"chips\" }, [\n                            _c(\"a\", { attrs: { href: \"#/group-list\" } }, [\n                              _vm._v(\"Groups\")\n                            ])\n                          ]),\n                          _vm._v(\" \"),\n                          _c(\"li\", { staticClass: \"chips\" }, [\n                            _c(\"a\", { attrs: { href: \"#/chat-list\" } }, [\n                              _vm._v(\"Conversations\")\n                            ])\n                          ])\n                        ]\n                      )\n                    ],\n                    1\n                  )\n                ])\n              ]\n            )\n          ]\n        )\n      ]\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      {\n        staticStyle: {\n          width: \"90%\",\n          margin: \"50px\",\n          \"margin-left\": \"auto\",\n          \"margin-right\": \"auto\",\n          \"max-width\": \"max-content\"\n        }\n      },\n      [\n        _c(\n          \"div\",\n          {\n            staticStyle: {\n              \"background-color\": \"#333\",\n              color: \"white\",\n              cursor: \"pointer\",\n              padding: \"10px\",\n              width: \"100%\",\n              height: \"100%\",\n              \"box-shadow\": \"0px 0px 5px 0px #3335\",\n              \"border-radius\": \"10px\"\n            },\n            on: {\n              click: function($event) {\n                return _vm.logout()\n              }\n            }\n          },\n          [\n            _c(\"div\", { staticStyle: { \"text-align\": \"center\" } }, [\n              _vm._v(\"\\n            Logout\\n            \")\n            ])\n          ]\n        )\n      ]\n    )\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"p\",\n      {\n        staticStyle: {\n          width: \"90%\",\n          \"font-size\": \"24px\",\n          margin: \"auto\",\n          color: \"rgb(67, 171, 255)\",\n          \"padding-top\": \"50px\",\n          \"text-align\": \"center\"\n        }\n      },\n      [\n        _vm._v(\n          \"\\n            The UI Kit has three different ways to make fully customizable UI required to build a chat application.\\n\\n            \"\n        ),\n        _c(\n          \"span\",\n          {\n            staticStyle: {\n              width: \"90%\",\n              \"font-size\": \"16px\",\n              margin: \"auto\",\n              color: \"#AAA\"\n            }\n          },\n          [\n            _vm._v(\n              \"\\n            The UI Kit has been developed to help developers of different levels of experience to build a chat application in\\n            a\\n            few minutes to a couple of hours.\\n            \"\n            )\n          ]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      {\n        staticStyle: {\n          width: \"90%\",\n          margin: \"50px\",\n          \"margin-left\": \"auto\",\n          \"margin-right\": \"auto\",\n          \"max-width\": \"500px\"\n        }\n      },\n      [\n        _c(\n          \"div\",\n          {\n            staticStyle: {\n              \"background-color\": \"white\",\n              width: \"100%\",\n              height: \"100%\",\n              \"box-shadow\": \"0px 0px 5px 0px #3335\",\n              \"border-radius\": \"10px\",\n              padding: \"5px\"\n            }\n          },\n          [\n            _c(\"div\", { staticStyle: { \"text-align\": \"center\" } }, [\n              _c(\"h2\", [\n                _vm._v(\"\\n                UI Unified\\n                \")\n              ]),\n              _vm._v(\" \"),\n              _c(\"p\", [\n                _vm._v(\n                  \"\\n                It open's Activity directly from UI Library. It is pre-defined UI helpful for user to build chat system by\\n                integrating it within minutes.\\n                \"\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\n              \"a\",\n              { staticClass: \"launchButton\", attrs: { href: \"#/embeded-app\" } },\n              [\n                _c(\n                  \"div\",\n                  {\n                    staticStyle: {\n                      width: \"100%\",\n                      height: \"50px\",\n                      \"text-align\": \"center\",\n                      \"border-top\": \"0.3px solid #e8e8e8\",\n                      display: \"flex\"\n                    }\n                  },\n                  [\n                    _c(\"p\", { staticStyle: { margin: \"auto\" } }, [\n                      _vm._v(\" Launch \")\n                    ])\n                  ]\n                )\n              ]\n            )\n          ]\n        )\n      ]\n    )\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/AppNavigationComponent.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/Loader.vue?vue&type=template&id=82cd7ff2&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/Loader.vue?vue&type=template&id=82cd7ff2&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"card br\" }, [\n      _c(\"div\", { staticClass: \"wrapper\" }, [\n        _c(\"div\", { staticClass: \"comment br animate w80\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" })\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/Loader.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/Avatar.vue?vue&type=template&id=78d5bf48&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/Avatar.vue?vue&type=template&id=78d5bf48&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm.item.uid\n    ? _c(\"div\", { staticClass: \"chat-contact-listitem-thum\" }, [\n        _vm.item.avatar\n          ? _c(\"img\", { attrs: { src: _vm.item.avatar } })\n          : _c(\n              \"div\",\n              {\n                staticClass: \"avatar\",\n                style: { \"background-color\": _vm.randomcolor() }\n              },\n              [_vm._v(_vm._s(_vm.item.name.charAt(0).toLowerCase()))]\n            )\n      ])\n    : _vm.item.guid\n    ? _c(\n        \"div\",\n        { staticClass: \"chat-ppl-thumbnail-wrap grp-chat-ppl-thumbnail-wrap\" },\n        [\n          _vm.item.icon\n            ? _c(\"img\", { attrs: { src: _vm.item.icon } })\n            : _c(\n                \"div\",\n                {\n                  staticClass: \"avatar\",\n                  style: { \"background-color\": _vm.randomcolor() }\n                },\n                [_vm._v(_vm._s(_vm.item.name.charAt(0).toLowerCase()))]\n              )\n        ]\n      )\n    : _vm._e()\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/Avatar.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/CallList.vue?vue&type=template&id=07361242&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/CallList.vue?vue&type=template&id=07361242&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"scroll-container\" }, [\n      _c(\"div\", { staticClass: \"ccl-left-panel-head-wrap\" }, [\n        _c(\"h4\", { staticClass: \"ccl-left-panel-head-ttl\" }, [_vm._v(\"Calls\")]),\n        _vm._v(\" \"),\n        _c(\"a\", {\n          staticClass: \"ccl-left-panel-head-edit-link\",\n          staticStyle: { display: \"none\" },\n          attrs: { href: \"javascript:void(0);\" }\n        }),\n        _vm._v(\" \"),\n        _c(\n          \"a\",\n          {\n            staticClass:\n              \"ccl-left-panel-head-done-link ccl-blue-color ccl-semi-bold-text\",\n            staticStyle: { display: \"block\" },\n            attrs: { href: \"javascript:void(0);\" }\n          },\n          [_vm._v(\"Done\")]\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"ccl-left-panel-call-fltr-wrap\" }, [\n        _c(\"div\", { staticClass: \"ccl-left-panel-call-fltrs clearfix\" }, [\n          _c(\n            \"a\",\n            {\n              staticClass: \"ccl-left-panel-call-fltr-btn ccl-center active\",\n              attrs: { href: \"javascript:void(0);\" }\n            },\n            [_vm._v(\"All\")]\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"a\",\n            {\n              staticClass: \"ccl-left-panel-call-fltr-btn ccl-center\",\n              attrs: { href: \"javascript:void(0);\" }\n            },\n            [_vm._v(\"Missed\")]\n          )\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { staticClass: \"chat-ppl-list-ext-wrap call-ppl-list-ext-wrap\" },\n        [\n          _c(\"div\", { staticClass: \"chat-ppl-list-wrap\" }, [\n            _c(\"div\", { staticClass: \"chat-ppl-listitem clearfix\" }, [\n              _c(\"div\", { staticClass: \"chat-ppl-thumbnail-wrap\" }, [\n                _c(\"img\", {\n                  attrs: { src: __webpack_require__(/*! ./../assets/images/people-1_2x.jpg */ \"./src/frontend/lib/cometchat-components/assets/images/people-1_2x.jpg\") }\n                })\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"chat-ppl-listitem-dtls\" }, [\n                _c(\"span\", { staticClass: \"chat-ppl-listitem-name\" }, [\n                  _vm._v(\"Gladys Kanyinda\")\n                ]),\n                _vm._v(\" \"),\n                _c(\n                  \"p\",\n                  {\n                    staticClass:\n                      \"chat-ppl-listitem-txt ccl-secondary-color incoming\"\n                  },\n                  [_vm._v(\"Incoming Audio\")]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"a\", {\n                staticClass: \"del-call-link\",\n                staticStyle: { display: \"block\" },\n                attrs: { href: \"javascript:void(0);\" }\n              })\n            ]),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"chat-ppl-listitem clearfix\" }, [\n              _c(\"div\", { staticClass: \"chat-ppl-thumbnail-wrap\" }, [\n                _c(\"img\", {\n                  attrs: { src: __webpack_require__(/*! ./../assets/images/people-2_2.jpg */ \"./src/frontend/lib/cometchat-components/assets/images/people-2_2.jpg\") }\n                })\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"chat-ppl-listitem-dtls\" }, [\n                _c(\"span\", { staticClass: \"chat-ppl-listitem-name\" }, [\n                  _vm._v(\"Ashish Asharaful\")\n                ]),\n                _vm._v(\" \"),\n                _c(\n                  \"p\",\n                  {\n                    staticClass:\n                      \"chat-ppl-listitem-txt ccl-secondary-color video-incoming\"\n                  },\n                  [_vm._v(\"Incoming Video\")]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"a\", {\n                staticClass: \"del-call-link\",\n                staticStyle: { display: \"block\" },\n                attrs: { href: \"javascript:void(0);\" }\n              })\n            ]),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"chat-ppl-listitem clearfix\" }, [\n              _c(\"div\", { staticClass: \"chat-ppl-thumbnail-wrap\" }, [\n                _c(\"img\", {\n                  attrs: { src: __webpack_require__(/*! ./../assets/images/people-1_2x.jpg */ \"./src/frontend/lib/cometchat-components/assets/images/people-1_2x.jpg\") }\n                })\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"chat-ppl-listitem-dtls\" }, [\n                _c(\"span\", { staticClass: \"chat-ppl-listitem-name\" }, [\n                  _vm._v(\"Gladys Kanyinda\")\n                ]),\n                _vm._v(\" \"),\n                _c(\n                  \"p\",\n                  {\n                    staticClass:\n                      \"chat-ppl-listitem-txt ccl-secondary-color outgoing\"\n                  },\n                  [_vm._v(\"Outgoing Audio\")]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"a\", {\n                staticClass: \"del-call-link\",\n                staticStyle: { display: \"block\" },\n                attrs: { href: \"javascript:void(0);\" }\n              })\n            ]),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"chat-ppl-listitem clearfix\" }, [\n              _c(\"div\", { staticClass: \"chat-ppl-thumbnail-wrap\" }, [\n                _c(\"img\", {\n                  attrs: { src: __webpack_require__(/*! ./../assets/images/people-2_2.jpg */ \"./src/frontend/lib/cometchat-components/assets/images/people-2_2.jpg\") }\n                })\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"chat-ppl-listitem-dtls\" }, [\n                _c(\"span\", { staticClass: \"chat-ppl-listitem-name\" }, [\n                  _vm._v(\"Gladys Kanyinda\")\n                ]),\n                _vm._v(\" \"),\n                _c(\n                  \"p\",\n                  {\n                    staticClass:\n                      \"chat-ppl-listitem-txt ccl-secondary-color missed\"\n                  },\n                  [_vm._v(\"Missed Audio\")]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"a\", {\n                staticClass: \"del-call-link\",\n                staticStyle: { display: \"block\" },\n                attrs: { href: \"javascript:void(0);\" }\n              })\n            ])\n          ])\n        ]\n      )\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/CallList.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ChatContainer.vue?vue&type=template&id=7ea6d2d6&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/ChatContainer.vue?vue&type=template&id=7ea6d2d6& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"page-wrapper\" }, [\n      _c(\n        \"div\",\n        {\n          staticClass: \"page-int-wrapper\",\n          class: {\n            \"left-open\": _vm.leftOpen,\n            \"center-open\": _vm.centerOpen,\n            \"right-open\": _vm.rightOpen\n          },\n          attrs: { id: \"pageWrapper\" }\n        },\n        [\n          _c(\"LeftSidebar\"),\n          _vm._v(\" \"),\n          _c(\"MessageContainer\", { attrs: { currentUser: _vm.currentUser } }),\n          _vm._v(\" \"),\n          _c(\"RightSidebar\")\n        ],\n        1\n      )\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ChatContainer.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ChatList.vue?vue&type=template&id=31a175d9&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/ChatList.vue?vue&type=template&id=31a175d9&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      {\n        staticClass: \"chat-ppl-list-ext-wrap scroll-container\",\n        on: {\n          scroll: function($event) {\n            return _vm.handleChatScroll($event)\n          }\n        }\n      },\n      _vm._l(_vm.chatList, function(chatRow, index) {\n        return _c(\"div\", { key: index, staticClass: \"chat-ppl-list-wrap\" }, [\n          _c(\n            \"div\",\n            {\n              staticClass: \"chat-ppl-listitem clearfix\",\n              on: {\n                click: function($event) {\n                  return _vm.currentUser(chatRow, index)\n                }\n              }\n            },\n            [\n              _c(\"Avatar\", { attrs: { item: chatRow.conversationWith } }),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"chat-ppl-listitem-dtls\" }, [\n                _c(\"span\", { staticClass: \"chat-ppl-listitem-name\" }, [\n                  _vm._v(_vm._s(chatRow.conversationWith.name))\n                ]),\n                _vm._v(\" \"),\n                chatRow.lastMessage\n                  ? _c(\n                      \"p\",\n                      {\n                        staticClass: \"chat-ppl-listitem-txt ccl-secondary-color\"\n                      },\n                      [_vm._v(_vm._s(chatRow.lastMessage.data.text))]\n                    )\n                  : !chatRow.lastMessage\n                  ? _c(\"p\", { staticClass: \"chat-ppl-listitem-space\" }, [\n                      _vm._v(\"   \")\n                    ])\n                  : _vm._e()\n              ]),\n              _vm._v(\" \"),\n              chatRow.unreadMessageCount > 0\n                ? _c(\"span\", { staticClass: \"chat-ppl-listitem-msg-cnt\" }, [\n                    _vm._v(_vm._s(chatRow.unreadMessageCount))\n                  ])\n                : _vm._e()\n            ],\n            1\n          )\n        ])\n      }),\n      0\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ChatList.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ContactScreen.vue?vue&type=template&id=7852340e&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/ContactScreen.vue?vue&type=template&id=7852340e& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"page-wrapper\" }, [\n    _c(\n      \"div\",\n      {\n        staticClass: \"page-int-wrapper\",\n        class: {\n          \"left-open\": _vm.leftOpen,\n          \"center-open\": _vm.centerOpen,\n          \"right-open\": _vm.rightOpen\n        },\n        attrs: { id: \"pageWrapper\" }\n      },\n      [\n        _c(\"div\", { staticClass: \"ccl-left-panel\" }, [_c(\"UserList\")], 1),\n        _vm._v(\" \"),\n        _c(\"MessageContainer\", { attrs: { currentUser: _vm.currentUser } }),\n        _vm._v(\" \"),\n        _c(\"RightSidebar\")\n      ],\n      1\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ContactScreen.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ConversationScreen.vue?vue&type=template&id=3d578652&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/ConversationScreen.vue?vue&type=template&id=3d578652& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"page-wrapper\" }, [\n    _c(\n      \"div\",\n      {\n        staticClass: \"page-int-wrapper\",\n        class: {\n          \"left-open\": _vm.leftOpen,\n          \"center-open\": _vm.centerOpen,\n          \"right-open\": _vm.rightOpen\n        },\n        attrs: { id: \"pageWrapper\" }\n      },\n      [\n        _c(\"div\", { staticClass: \"ccl-left-panel\" }, [_c(\"ChatList\")], 1),\n        _vm._v(\" \"),\n        _c(\"MessageContainer\", { attrs: { currentUser: _vm.currentUser } }),\n        _vm._v(\" \"),\n        _c(\"RightSidebar\")\n      ],\n      1\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ConversationScreen.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/GroupList.vue?vue&type=template&id=2879230a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/GroupList.vue?vue&type=template&id=2879230a&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"ccl-left-panel-head-wrap\" }, [\n      _c(\"div\", { staticClass: \"ccl-left-panel-srch-inpt-wrap\" }, [\n        _c(\"input\", {\n          staticClass: \"ccl-left-panel-srch font-15 ccl-secondary-color\",\n          attrs: {\n            autocomplete: \"off\",\n            placeholder: \"Search\",\n            type: \"text\",\n            maxlength: \"200\"\n          },\n          on: {\n            input: function($event) {\n              return _vm.onSearchChange($event)\n            }\n          }\n        }),\n        _vm._v(\" \"),\n        _c(\"input\", {\n          staticClass: \"search-btn\",\n          attrs: { id: \"searchButton\", type: \"button\" }\n        })\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm.grousList.length == 0\n      ? _c(\"div\", { staticClass: \"cometchat-message-container\" }, [\n          _c(\"p\", [_vm._v(\"\\n    \" + _vm._s(_vm.messageToDisplay) + \"\\n    \")])\n        ])\n      : _vm.grousList.length != 0\n      ? _c(\n          \"div\",\n          {\n            staticClass: \"chat-ppl-list-ext-wrap scroll-container\",\n            on: {\n              scroll: function($event) {\n                return _vm.handleGroupScroll($event)\n              }\n            }\n          },\n          _vm._l(_vm.grousList, function(groupRow, index) {\n            return _c(\n              \"div\",\n              { key: index, staticClass: \"chat-ppl-list-wrap\" },\n              [\n                _c(\n                  \"div\",\n                  {\n                    staticClass: \"chat-ppl-listitem clearfix\",\n                    on: {\n                      click: function($event) {\n                        return _vm.currentGroup(groupRow)\n                      }\n                    }\n                  },\n                  [\n                    _c(\"Avatar\", { attrs: { item: groupRow } }),\n                    _vm._v(\" \"),\n                    _c(\"div\", { staticClass: \"chat-ppl-listitem-dtls\" }, [\n                      _c(\"span\", { staticClass: \"chat-ppl-listitem-name\" }, [\n                        _vm._v(_vm._s(groupRow.name))\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\n                        \"p\",\n                        {\n                          staticClass:\n                            \"chat-ppl-listitem-txt ccl-secondary-color\"\n                        },\n                        [_vm._v(_vm._s(groupRow.owner))]\n                      )\n                    ])\n                  ],\n                  1\n                )\n              ]\n            )\n          }),\n          0\n        )\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/GroupList.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/GroupScreen.vue?vue&type=template&id=01e19250&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/GroupScreen.vue?vue&type=template&id=01e19250& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"page-wrapper\" }, [\n    _c(\n      \"div\",\n      {\n        staticClass: \"page-int-wrapper\",\n        class: {\n          \"left-open\": _vm.leftOpen,\n          \"center-open\": _vm.centerOpen,\n          \"right-open\": _vm.rightOpen\n        },\n        attrs: { id: \"pageWrapper\" }\n      },\n      [\n        _c(\"div\", { staticClass: \"ccl-left-panel\" }, [_c(\"GroupList\")], 1),\n        _vm._v(\" \"),\n        _c(\"MessageContainer\", { attrs: { currentUser: _vm.currentUser } }),\n        _vm._v(\" \"),\n        _c(\"RightSidebar\")\n      ],\n      1\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/GroupScreen.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?vue&type=template&id=b291d13c&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?vue&type=template&id=b291d13c& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"ccl-left-panel\" },\n    [\n      _c(\"SidebarHeader\", { attrs: { \"active-tab\": _vm.activeTab } }),\n      _vm._v(\" \"),\n      _vm.activeTab == \"contacts\"\n        ? _c(\"UserList\")\n        : _vm.activeTab == \"call\"\n        ? _c(\"CallList\")\n        : _vm.activeTab == \"chat\"\n        ? _c(\"ChatList\")\n        : _vm.activeTab == \"groups\"\n        ? _c(\"GroupList\")\n        : _c(\"MoreList\"),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { staticClass: \"ccl-left-panel-footer-wrap\" },\n        [_c(\"Nav\", { on: { activeTab: _vm.currentTab } })],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/Loader.vue?vue&type=template&id=2564bbd4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/Loader.vue?vue&type=template&id=2564bbd4&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"card br\" }, [\n      _c(\"div\", { staticClass: \"wrapper\" }, [\n        _c(\"div\", { staticClass: \"comment br animate w80\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"comment br animate\" })\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/Loader.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/Log.vue?vue&type=template&id=1861b2d1&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/Log.vue?vue&type=template&id=1861b2d1& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [_vm._v(_vm._s(_vm.log(_vm.log_data)))])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/Log.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageContainer.vue?vue&type=template&id=1222be06&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/MessageContainer.vue?vue&type=template&id=1222be06& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"ccl-center-panel ccl-chat-center-panel\" },\n    [\n      _c(\"a\", {\n        staticClass: \"ccl-center-panel-close-link\",\n        attrs: { href: \"javascript:void(0);\" }\n      }),\n      _vm._v(\" \"),\n      _c(\"MessageHeader\"),\n      _vm._v(\" \"),\n      _c(\"MessageView\", { attrs: { currentUser: _vm.currentUser } }),\n      _vm._v(\" \"),\n      _c(\"MessageFooter\")\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageContainer.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageFooter.vue?vue&type=template&id=65c1da62&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/MessageFooter.vue?vue&type=template&id=65c1da62&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"cc1-chat-win-inpt-ext-wrap\" }, [\n    _vm.user.uid || _vm.group.guid\n      ? _c(\"div\", { staticClass: \"cc1-chat-win-inpt-int-wrap\" }, [\n          _c(\n            \"div\",\n            { staticClass: \"cc1-chat-win-inpt-attach\" },\n            [\n              _vm._l(_vm.listItems, function(item, index) {\n                return _c(\n                  \"a\",\n                  {\n                    key: index,\n                    attrs: { href: \"javascript:;\", title: item.title },\n                    on: {\n                      click: function($event) {\n                        return _vm.onItemClick($event, item)\n                      }\n                    }\n                  },\n                  [\n                    _c(\"img\", {\n                      attrs: {\n                        src: __webpack_require__(\"./src/frontend/lib/cometchat-components/assets/images/svg sync recursive ^\\\\.\\\\/.*$\")(\"./\" + item.icon),\n                        alt: \"...\"\n                      }\n                    })\n                  ]\n                )\n              }),\n              _vm._v(\" \"),\n              _c(\"input\", {\n                staticStyle: { display: \"none\" },\n                attrs: {\n                  id: \"image-input\",\n                  accept: \"image/*\",\n                  type: \"file\",\n                  name: \"name\"\n                },\n                on: {\n                  change: function($event) {\n                    return _vm.onMediInputChange($event)\n                  }\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"input\", {\n                staticStyle: { display: \"none\" },\n                attrs: {\n                  id: \"video-input\",\n                  accept: \"video/*\",\n                  type: \"file\",\n                  name: \"name\"\n                },\n                on: {\n                  change: function($event) {\n                    return _vm.onMediInputChange($event)\n                  }\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"input\", {\n                staticStyle: { display: \"none\" },\n                attrs: { id: \"file-input\", type: \"file\", name: \"name\" },\n                on: {\n                  change: function($event) {\n                    return _vm.onMediInputChange($event)\n                  }\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"input\", {\n                staticStyle: { display: \"none\" },\n                attrs: {\n                  id: \"audio-input\",\n                  type: \"file\",\n                  accept: \"audio/*\",\n                  name: \"name\"\n                },\n                on: {\n                  change: function($event) {\n                    return _vm.onMediInputChange($event)\n                  }\n                }\n              })\n            ],\n            2\n          ),\n          _vm._v(\" \"),\n          _vm.filesInput || _vm.imageInput || _vm.audioInput || _vm.videoInput\n            ? _c(\"div\", { staticClass: \"cometchat-image-viewer-container\" }, [\n                _c(\"div\", { staticClass: \"media-wrap-container\" }, [\n                  _vm.imageInput\n                    ? _c(\"img\", {\n                        staticClass: \"cometchat-image-viewer-image\",\n                        attrs: { src: _vm.imageInput }\n                      })\n                    : _vm.audioInput\n                    ? _c(\n                        \"audio\",\n                        {\n                          staticClass: \"cometchat-image-viewer-image\",\n                          attrs: { controls: \"\" }\n                        },\n                        [_c(\"source\", { attrs: { src: _vm.audioInput } })]\n                      )\n                    : _vm.videoInput\n                    ? _c(\n                        \"video\",\n                        {\n                          staticClass: \"cometchat-image-viewer-image\",\n                          attrs: { controls: \"\" }\n                        },\n                        [_c(\"source\", { attrs: { src: _vm.videoInput } })]\n                      )\n                    : _vm._e(),\n                  _vm._v(\" \"),\n                  _vm.fileName || _vm.fileSize\n                    ? _c(\"div\", { staticClass: \"media-desc-container\" }, [\n                        _vm.fileName\n                          ? _c(\"div\", { staticClass: \"file-desc\" }, [\n                              _vm._v(_vm._s(_vm.fileName))\n                            ])\n                          : _vm._e(),\n                        _vm._v(\" \"),\n                        _vm.fileSize\n                          ? _c(\"div\", { staticClass: \"file-desc\" }, [\n                              _vm._v(_vm._s(_vm.fileSize))\n                            ])\n                          : _vm._e()\n                      ])\n                    : _vm._e(),\n                  _vm._v(\" \"),\n                  _c(\n                    \"a\",\n                    {\n                      staticClass: \"media-send-button\",\n                      attrs: { href: \"javascript:;\" },\n                      on: {\n                        click: function($event) {\n                          return _vm.sendImageMessage($event)\n                        }\n                      }\n                    },\n                    [_vm._v(\"Send File\")]\n                  )\n                ])\n              ])\n            : _vm._e(),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"cc1-chat-win-inpt-wrap\" }, [\n            _c(\"input\", {\n              staticClass: \"cc1-chat-win-inpt-box font-15\",\n              attrs: {\n                autocomplete: \"off\",\n                name: \"chatMsg\",\n                id: \"chatMsg\",\n                placeholder: \"Type Message\",\n                type: \"text\"\n              },\n              on: {\n                keydown: function($event) {\n                  return _vm.onchangeDetect($event)\n                }\n              }\n            }),\n            _vm._v(\" \"),\n            _c(\"input\", {\n              staticClass: \"smile-button\",\n              attrs: { id: \"smileButton\", type: \"button\" }\n            })\n          ]),\n          _vm._v(\" \"),\n          _vm._m(0)\n        ])\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"cc1-chat-win-inpt-send\" }, [\n      _c(\n        \"a\",\n        {\n          staticClass: \"cc1-chat-win-inpt-send-btn\",\n          staticStyle: { display: \"none\" },\n          attrs: { href: \"javascript:void(0);\" }\n        },\n        [\n          _c(\"img\", {\n            attrs: { src: __webpack_require__(/*! ./../assets/images/svg/send-blue-icon.svg */ \"./src/frontend/lib/cometchat-components/assets/images/svg/send-blue-icon.svg\") }\n          })\n        ]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"a\",\n        {\n          staticClass: \"cc1-chat-win-inpt-voice-btn\",\n          attrs: { href: \"javascript:void(0);\" }\n        },\n        [\n          _c(\"img\", {\n            attrs: {\n              src: __webpack_require__(/*! ./../assets/images/svg/voice-record-frey-icon.svg */ \"./src/frontend/lib/cometchat-components/assets/images/svg/voice-record-frey-icon.svg\")\n            }\n          })\n        ]\n      )\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageFooter.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageHeader.vue?vue&type=template&id=235d127e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/MessageHeader.vue?vue&type=template&id=235d127e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _vm.userData.uid || _vm.userData.guid\n      ? _c(\"div\", { staticClass: \"cc1-chat-win-header clearfix\" }, [\n          _c(\"div\", { staticClass: \"cc1-chat-win-user\" }, [\n            _c(\n              \"a\",\n              {\n                staticClass: \"back-btn\",\n                attrs: { href: \"javascript:;\" },\n                on: {\n                  click: function($event) {\n                    return _vm.backToLeft()\n                  }\n                }\n              },\n              [_vm._v(\" \")]\n            ),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"cc1-chat-win-user-thumb\" }, [\n              _vm.userData.avatar\n                ? _c(\"img\", { attrs: { src: _vm.userData.avatar } })\n                : _vm.userData.icon\n                ? _c(\"img\", { attrs: { src: _vm.userData.icon } })\n                : _c(\n                    \"div\",\n                    {\n                      staticClass: \"avatar\",\n                      style: { \"background-color\": _vm.randomcolor() }\n                    },\n                    [_vm._v(_vm._s(_vm.userData.name.charAt(0).toLowerCase()))]\n                  )\n            ]),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"cc1-chat-win-user-name-wrap\" }, [\n              _c(\"h6\", { staticClass: \"cc1-chat-win-user-name\" }, [\n                _vm._v(_vm._s(_vm.userData.name))\n              ]),\n              _vm._v(\" \"),\n              _vm.userData.status !== \"offline\"\n                ? _c(\n                    \"span\",\n                    { staticClass: \"cc1-chat-win-user-status ccl-blue-color\" },\n                    [_vm._v(_vm._s(_vm.userData.status))]\n                  )\n                : _vm.userData.status === \"offline\" && _vm.userData.lastActiveAt\n                ? _c(\"span\", { staticClass: \"cc1-chat-win-user-status\" }, [\n                    _vm._v(\n                      \"Last Active At: \" +\n                        _vm._s(_vm.getDate(_vm.userData.lastActiveAt))\n                    )\n                  ])\n                : _vm._e()\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"cc1-chat-win-con-opt-wrap\" }, [\n            _c(\"a\", {\n              staticClass: \"cc1-chat-win-con-opt details\",\n              attrs: { href: \"javascript:void(0);\" },\n              on: {\n                click: function($event) {\n                  return _vm.clickMenuOption()\n                }\n              }\n            })\n          ])\n        ])\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageHeader.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageView.vue?vue&type=template&id=48ef59d9&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/MessageView.vue?vue&type=template&id=48ef59d9&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      staticClass: \"cc1-chat-win-conver-wrap\",\n      attrs: { id: \"messageViewWrapr\" },\n      on: {\n        \"&scroll\": function($event) {\n          return _vm.handlePreviousMsg($event)\n        }\n      }\n    },\n    [\n      _vm._l(_vm.messages, function(msg, index) {\n        return _c(\n          \"div\",\n          {\n            key: index,\n            staticClass: \"clearfix\",\n            class: [\n              msg.sender.uid === _vm.currentUser.uid\n                ? \"cc1-chat-win-sndr-row\"\n                : \"cc1-chat-win-rcvr-row\"\n            ]\n          },\n          [\n            (index === 0\n            ? _vm.printDate(msg.sentAt)\n            : _vm.printDate(msg.sentAt, _vm.messages[index - 1].sentAt))\n              ? _c(\n                  \"div\",\n                  { staticClass: \"dateSeperatorCongtainer ccl-center\" },\n                  [\n                    _c(\"span\", { staticClass: \"dateSeperator\" }, [\n                      _vm._v(\n                        _vm._s(\n                          index === 0\n                            ? _vm.printDate(msg.sentAt)\n                            : _vm.printDate(\n                                msg.sentAt,\n                                _vm.messages[index - 1].sentAt\n                              )\n                        )\n                      )\n                    ])\n                  ]\n                )\n              : _vm._e(),\n            _vm._v(\" \"),\n            msg.sender.uid === _vm.currentUser.uid\n              ? _c(\n                  \"div\",\n                  { staticClass: \"cc1-chat-win-msg-block sender-msg\" },\n                  [\n                    _c(\"div\", { staticClass: \"cc1-chat-win-sndr-msg-wrap\" }, [\n                      _vm.cometchat.MESSAGE_TYPE.TEXT === msg.type\n                        ? _c(\"p\", { staticClass: \"chat-txt-msg\" }, [\n                            _vm._v(_vm._s(msg.text))\n                          ])\n                        : _vm.cometchat.MESSAGE_TYPE.VIDEO === msg.type\n                        ? _c(\"div\", { staticClass: \"message-video\" }, [\n                            _c(\n                              \"video\",\n                              {\n                                attrs: {\n                                  width: \"100%\",\n                                  height: \"auto\",\n                                  controls: \"\"\n                                }\n                              },\n                              [\n                                _c(\"source\", {\n                                  attrs: {\n                                    src: msg.data.url,\n                                    type: \"audio/mp4\"\n                                  }\n                                })\n                              ]\n                            )\n                          ])\n                        : _vm.cometchat.MESSAGE_TYPE.AUDIO === msg.type\n                        ? _c(\"div\", { staticClass: \"message-audio\" }, [\n                            _c(\n                              \"audio\",\n                              {\n                                attrs: {\n                                  controls: \"\",\n                                  width: \"100%\",\n                                  height: \"auto\"\n                                }\n                              },\n                              [_c(\"source\", { attrs: { src: msg.data.url } })]\n                            )\n                          ])\n                        : _vm.cometchat.MESSAGE_TYPE.MEDIA === msg.type\n                        ? _c(\"div\", { staticClass: \"message-media\" }, [\n                            _vm._v(\n                              _vm._s(\n                                msg.text ? \"this is text Message\" : msg.category\n                              )\n                            )\n                          ])\n                        : _vm.cometchat.MESSAGE_TYPE.FILE === msg.type\n                        ? _c(\"div\", { staticClass: \"message-file\" }, [\n                            _c(\n                              \"a\",\n                              {\n                                attrs: { href: msg.data.url, target: \"_blank\" }\n                              },\n                              [_vm._v(\"File message\")]\n                            )\n                          ])\n                        : _vm.cometchat.MESSAGE_TYPE.CUSTOM === msg.type\n                        ? _c(\"div\", { staticClass: \"message-text\" }, [\n                            _vm._v(\n                              _vm._s(\n                                msg.text ? \"this is text Message\" : msg.category\n                              )\n                            )\n                          ])\n                        : _vm.cometchat.MESSAGE_TYPE.IMAGE == msg.type\n                        ? _c(\"div\", { staticClass: \"message-image\" }, [\n                            _c(\"img\", {\n                              attrs: {\n                                src: msg.data.url ? msg.data.url : msg.category\n                              }\n                            })\n                          ])\n                        : _c(\"div\", { staticClass: \"message-text\" }, [\n                            _vm._v(\n                              _vm._s(\n                                msg.text\n                                  ? \"Something Unknown CometChat can't process\"\n                                  : \"Something Unknown CometChat can't process\"\n                              )\n                            )\n                          ])\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"div\", { staticClass: \"cc1-chat-win-msg-time-wrap\" }, [\n                      _c(\"span\", { staticClass: \"cc1-chat-win-timestamp\" }, [\n                        _vm._v(\n                          \"\\n          \" +\n                            _vm._s(_vm.getDate(msg.sentAt)) +\n                            \"\\n\\n          \"\n                        ),\n                        msg.sentAt && !msg.deliveredAt && !msg.readAt\n                          ? _c(\"span\", { staticClass: \"cc1-chat-win-tick\" }, [\n                              _c(\"img\", {\n                                staticStyle: { width: \"15px\" },\n                                attrs: {\n                                  src: __webpack_require__(/*! ./../assets/images/single_tick.png */ \"./src/frontend/lib/cometchat-components/assets/images/single_tick.png\"),\n                                  alt: \"sent\"\n                                }\n                              })\n                            ])\n                          : _vm._e(),\n                        _vm._v(\" \"),\n                        msg.deliveredAt && !msg.readAt\n                          ? _c(\"span\", { staticClass: \"cc1-chat-win-tick\" }, [\n                              _c(\"img\", {\n                                staticStyle: { width: \"15px\" },\n                                attrs: {\n                                  src: __webpack_require__(/*! ./../assets/images/double_tick.png */ \"./src/frontend/lib/cometchat-components/assets/images/double_tick.png\"),\n                                  alt: \"sent\"\n                                }\n                              })\n                            ])\n                          : _vm._e(),\n                        _vm._v(\" \"),\n                        msg.readAt\n                          ? _c(\"span\", { staticClass: \"cc1-chat-win-tick\" }, [\n                              _c(\"img\", {\n                                staticStyle: { width: \"15px\" },\n                                attrs: {\n                                  src: __webpack_require__(/*! ./../assets/images/double_tick_blue.png */ \"./src/frontend/lib/cometchat-components/assets/images/double_tick_blue.png\"),\n                                  alt: \"sent\"\n                                }\n                              })\n                            ])\n                          : _vm._e()\n                      ])\n                    ])\n                  ]\n                )\n              : _vm._e(),\n            _vm._v(\" \"),\n            msg.sender.uid !== _vm.currentUser.uid\n              ? _c(\n                  \"div\",\n                  { staticClass: \"cc1-chat-win-msg-block reciever-msg\" },\n                  [\n                    _c(\"div\", { staticClass: \"cc1-chat-win-rcvr-msg-wrap\" }, [\n                      _vm.cometchat.MESSAGE_TYPE.TEXT === msg.type\n                        ? _c(\"p\", { staticClass: \"chat-txt-msg\" }, [\n                            _vm._v(_vm._s(msg.text))\n                          ])\n                        : _vm.cometchat.MESSAGE_TYPE.VIDEO === msg.type\n                        ? _c(\"div\", { staticClass: \"message-video\" }, [\n                            _c(\n                              \"video\",\n                              {\n                                attrs: {\n                                  width: \"100%\",\n                                  height: \"auto\",\n                                  controls: \"\"\n                                }\n                              },\n                              [\n                                _c(\"source\", {\n                                  attrs: {\n                                    src: msg.data.url,\n                                    type: \"audio/mp4\"\n                                  }\n                                })\n                              ]\n                            )\n                          ])\n                        : _vm.cometchat.MESSAGE_TYPE.AUDIO === msg.type\n                        ? _c(\"div\", { staticClass: \"message-audio\" }, [\n                            _c(\n                              \"audio\",\n                              {\n                                attrs: {\n                                  controls: \"\",\n                                  width: \"100%\",\n                                  height: \"auto\"\n                                }\n                              },\n                              [_c(\"source\", { attrs: { src: msg.data.url } })]\n                            )\n                          ])\n                        : _vm.cometchat.MESSAGE_TYPE.MEDIA === msg.type\n                        ? _c(\"div\", { staticClass: \"message-media\" }, [\n                            _vm._v(\n                              _vm._s(\n                                msg.text ? \"this is text Message\" : msg.category\n                              )\n                            )\n                          ])\n                        : _vm.cometchat.MESSAGE_TYPE.FILE === msg.type\n                        ? _c(\"div\", { staticClass: \"message-file\" }, [\n                            _c(\n                              \"a\",\n                              {\n                                attrs: { href: msg.data.url, target: \"_blank\" }\n                              },\n                              [_vm._v(\"File message\")]\n                            )\n                          ])\n                        : _vm.cometchat.MESSAGE_TYPE.CUSTOM === msg.type\n                        ? _c(\"div\", { staticClass: \"message-text\" }, [\n                            _vm._v(\n                              _vm._s(\n                                msg.text ? \"this is text Message\" : msg.category\n                              )\n                            )\n                          ])\n                        : _vm.cometchat.MESSAGE_TYPE.IMAGE == msg.type\n                        ? _c(\"div\", { staticClass: \"message-image\" }, [\n                            _c(\"img\", {\n                              attrs: {\n                                src: msg.data.url ? msg.data.url : msg.category\n                              }\n                            })\n                          ])\n                        : _c(\"div\", { staticClass: \"message-text\" }, [\n                            _vm._v(\n                              _vm._s(\n                                msg.text\n                                  ? \"Something Unknown CometChat can't process\"\n                                  : \"Something Unknown CometChat can't process\"\n                              )\n                            )\n                          ])\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"div\", { staticClass: \"cc1-chat-win-msg-time-wrap\" }, [\n                      _c(\"span\", { staticClass: \"cc1-chat-win-timestamp\" }, [\n                        _vm._v(\n                          \"\\n          \" +\n                            _vm._s(_vm.getDate(msg.sentAt)) +\n                            \"\\n          \"\n                        )\n                      ])\n                    ])\n                  ]\n                )\n              : _vm._e()\n          ]\n        )\n      }),\n      _vm._v(\" \"),\n      _vm.loading ? _c(\"Loader\") : _vm._e()\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageView.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MoreList.vue?vue&type=template&id=19b0d0d6&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/MoreList.vue?vue&type=template&id=19b0d0d6&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"cc1-left-panel-user\" }, [\n      _c(\"div\", { staticClass: \"cc1-left-panel-user-thumb\" }, [\n        _vm.user.avatar\n          ? _c(\"img\", { attrs: { src: _vm.user.avatar } })\n          : _c(\"img\", {\n              attrs: { src: __webpack_require__(/*! ./../assets/images/people-2_2.jpg */ \"./src/frontend/lib/cometchat-components/assets/images/people-2_2.jpg\") }\n            })\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"cc1-left-panel-user-name-wrap\" }, [\n        _c(\"h6\", { staticClass: \"cc1-left-panel-user-name\" }, [\n          _vm._v(_vm._s(_vm.user.name))\n        ])\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"cc1-left-panel-myacc-opts-wrap\" }, [\n      _c(\n        \"div\",\n        {\n          staticClass: \"cc1-left-panel-myacc-opts-list-ttl ccl-text-uppercase\"\n        },\n        [_vm._v(\"Other\")]\n      ),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"cc1-left-panel-myacc-opts-list\" }, [\n        _c(\n          \"a\",\n          {\n            staticClass: \"cc1-left-panel-myacc-opt help ccl-semi-bold-text\",\n            attrs: { href: \"https://forum.cometchat.com/\", target: \"_blank\" }\n          },\n          [\n            _c(\"span\", { staticClass: \"cc1-left-panel-myacc-optname\" }),\n            _vm._v(\"Help\")\n          ]\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"a\",\n          {\n            staticClass: \"cc1-left-panel-myacc-opt report ccl-semi-bold-text\",\n            attrs: { href: \"https://forum.cometchat.com/\", target: \"_blank\" }\n          },\n          [\n            _c(\"span\", { staticClass: \"cc1-left-panel-myacc-optname\" }),\n            _vm._v(\"Report a Problem\")\n          ]\n        )\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MoreList.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/NavComponent.vue?vue&type=template&id=1ad6255d&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/NavComponent.vue?vue&type=template&id=1ad6255d& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"ccl-left-panel-nav-list clearfix\" }, [\n    _c(\"div\", { staticClass: \"ccl-left-panel-nav-listitem\" }, [\n      _c(\"a\", {\n        staticClass: \"ccl-left-panel-nav-link people active\",\n        attrs: { id: \"contactlist\", href: \"javascript:void(0);\" },\n        on: {\n          click: function($event) {\n            return _vm.tabClickHandler($event)\n          }\n        }\n      })\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"ccl-left-panel-nav-listitem\" }, [\n      _c(\"a\", {\n        staticClass: \"ccl-left-panel-nav-link chat\",\n        attrs: { id: \"chatlist\", href: \"javascript:void(0);\" },\n        on: {\n          click: function($event) {\n            return _vm.tabClickHandler($event)\n          }\n        }\n      })\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"ccl-left-panel-nav-listitem\" }, [\n      _c(\"a\", {\n        staticClass: \"ccl-left-panel-nav-link grp-chat\",\n        attrs: { id: \"grouplist\", href: \"javascript:void(0);\" },\n        on: {\n          click: function($event) {\n            return _vm.tabClickHandler($event)\n          }\n        }\n      })\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"ccl-left-panel-nav-listitem\" }, [\n      _c(\"a\", {\n        staticClass: \"ccl-left-panel-nav-link more\",\n        attrs: { id: \"morelist\", href: \"javascript:void(0);\" },\n        on: {\n          click: function($event) {\n            return _vm.tabClickHandler($event)\n          }\n        }\n      })\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/NavComponent.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/RightSidebar.vue?vue&type=template&id=4b4cd0e3&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/RightSidebar.vue?vue&type=template&id=4b4cd0e3&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      staticClass: \"ccl-right-panel\",\n      style: _vm.isMenu ? \"display: block;\" : \"display: none;\"\n    },\n    [\n      _c(\n        \"a\",\n        {\n          staticClass: \"ccl-right back-btn\",\n          attrs: { href: \"javascript:void(0);\" },\n          on: {\n            click: function($event) {\n              return _vm.backToCenter()\n            }\n          }\n        },\n        [_vm._v(\"Back\")]\n      ),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"ccl-dtls-panel-wrap\" }, [\n        _vm._m(0),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"ccl-dtls-panel-body\" }, [\n          _vm._m(1),\n          _vm._v(\" \"),\n          _vm._m(2),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"ccl-dtls-panel-section\" }, [\n            _c(\n              \"h6\",\n              {\n                staticClass:\n                  \"ccl-dtls-panel-section-head ccl-secondary-color ccl-text-uppercase\"\n              },\n              [_vm._v(\"Privacy & Support\")]\n            ),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"ccl-dtls-section-list\" }, [\n              _vm._m(3),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"ccl-dtls-section-listitem\" }, [\n                _c(\n                  \"a\",\n                  {\n                    staticClass:\n                      \"ccl-dtls-section-listitem-link ccl-red-color ccl-semi-bold-text\",\n                    attrs: { href: \"javascript:void(0);\" },\n                    on: {\n                      click: function($event) {\n                        return _vm.toggleBlockUser()\n                      }\n                    }\n                  },\n                  [\n                    !_vm.blockeUser\n                      ? _c(\"span\", [_vm._v(\"Block User\")])\n                      : _vm.blockeUser\n                      ? _c(\"span\", [_vm._v(\"Unblock User\")])\n                      : _vm._e()\n                  ]\n                )\n              ]),\n              _vm._v(\" \"),\n              _vm._m(4)\n            ])\n          ])\n        ])\n      ])\n    ]\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"ccl-right-panel-head-wrap\" }, [\n      _c(\"h4\", { staticClass: \"ccl-right-panel-head-ttl\" }, [_vm._v(\"Details\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"ccl-dtls-noti-sel-wrap\" }, [\n      _c(\"input\", {\n        staticClass: \"css-checkbox\",\n        attrs: {\n          type: \"checkbox\",\n          id: \"notificationSel\",\n          autocomplete: \"off\",\n          name: \"notificationSel\"\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\n        \"label\",\n        {\n          staticClass: \"ccl-semi-bold-text\",\n          attrs: { for: \"notificationSel\" }\n        },\n        [_vm._v(\"Notifications\")]\n      )\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"ccl-dtls-panel-section\" }, [\n      _c(\n        \"h6\",\n        {\n          staticClass:\n            \"ccl-dtls-panel-section-head ccl-secondary-color ccl-text-uppercase\"\n        },\n        [_vm._v(\"Actions\")]\n      ),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"ccl-dtls-section-list\" }, [\n        _c(\"div\", { staticClass: \"ccl-dtls-section-listitem\" }, [\n          _c(\n            \"a\",\n            {\n              staticClass:\n                \"ccl-dtls-section-listitem-link ccl-blue-color ccl-semi-bold-text\",\n              attrs: { href: \"javascript:void(0);\" }\n            },\n            [_vm._v(\"Search in Conversation\")]\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"ccl-dtls-section-listitem\" }, [\n          _c(\n            \"a\",\n            {\n              staticClass:\n                \"ccl-dtls-section-listitem-link ccl-blue-color ccl-semi-bold-text\",\n              attrs: { href: \"javascript:void(0);\" }\n            },\n            [_vm._v(\"Create Group\")]\n          )\n        ])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"ccl-dtls-section-listitem\" }, [\n      _c(\n        \"a\",\n        {\n          staticClass:\n            \"ccl-dtls-section-listitem-link ccl-red-color ccl-semi-bold-text\",\n          attrs: { href: \"javascript:void(0);\" }\n        },\n        [_vm._v(\"Clear Chat\")]\n      )\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"ccl-dtls-section-listitem\" }, [\n      _c(\n        \"a\",\n        {\n          staticClass:\n            \"ccl-dtls-section-listitem-link ccl-red-color ccl-semi-bold-text\",\n          attrs: { href: \"javascript:void(0);\" }\n        },\n        [_vm._v(\"Report\")]\n      )\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/RightSidebar.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?vue&type=template&id=0a8e1bd6&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?vue&type=template&id=0a8e1bd6& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"ccl-left-panel-head-wrap\" }, [\n      _c(\"h4\", { staticClass: \"ccl-left-panel-head-ttl\" }, [\n        _vm._v(\n          \"\\n            \" +\n            _vm._s(\n              _vm.activeTab.charAt(0).toUpperCase() + _vm.activeTab.slice(1)\n            ) +\n            \"\\n        \"\n        )\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/UserList.vue?vue&type=template&id=6ae0a968&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/lib/cometchat-components/components/UserList.vue?vue&type=template&id=6ae0a968&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"ccl-left-panel-head-wrap\" }, [\n      _c(\"div\", { staticClass: \"ccl-left-panel-srch-inpt-wrap\" }, [\n        _c(\"input\", {\n          staticClass: \"ccl-left-panel-srch font-15 ccl-secondary-color\",\n          attrs: {\n            autocomplete: \"off\",\n            placeholder: \"Search\",\n            type: \"text\",\n            maxlength: \"200\"\n          },\n          on: {\n            input: function($event) {\n              return _vm.onSearchChange($event)\n            }\n          }\n        }),\n        _vm._v(\" \"),\n        _c(\"input\", {\n          staticClass: \"search-btn\",\n          attrs: { id: \"searchButton\", type: \"button\" }\n        })\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm.usersList.length == 0\n      ? _c(\"div\", { staticClass: \"cometchat-message-container\" }, [\n          _c(\"p\", [_vm._v(_vm._s(_vm.messageToDisplay))])\n        ])\n      : _vm.usersList.length != 0\n      ? _c(\n          \"div\",\n          {\n            staticClass: \"chat-contact-list-ext-wrap scroll-container\",\n            on: {\n              scroll: function($event) {\n                return _vm.handleUserScroll($event)\n              }\n            }\n          },\n          _vm._l(_vm.usersList, function(userRow, i) {\n            return _c(\"div\", { key: i, staticClass: \"contact-list-wrpr\" }, [\n              _c(\n                \"div\",\n                {\n                  staticClass: \"chat-ppl-listitem clearfix\",\n                  on: {\n                    click: function($event) {\n                      return _vm.currentUser(userRow)\n                    }\n                  }\n                },\n                [\n                  i > 0 &&\n                  _vm.usersList[i - 1].name.charAt(0).toUpperCase() !==\n                    userRow.name.charAt(0).toUpperCase()\n                    ? _c(\n                        \"span\",\n                        { staticClass: \"chat-contact-list-apla-ftlr\" },\n                        [\n                          _vm._v(\n                            _vm._s(\n                              i > 0 &&\n                                _vm.usersList[i - 1].name\n                                  .charAt(0)\n                                  .toUpperCase() ===\n                                  userRow.name.charAt(0).toUpperCase()\n                                ? \"\"\n                                : userRow.name.substring(0, 1).toUpperCase()\n                            )\n                          )\n                        ]\n                      )\n                    : _vm._e(),\n                  _vm._v(\" \"),\n                  _c(\"Avatar\", { attrs: { item: userRow } }),\n                  _vm._v(\" \"),\n                  _c(\n                    \"div\",\n                    { staticClass: \"chat-ppl-listitem-dtls\" },\n                    [\n                      _c(\"span\", { staticClass: \"chat-ppl-listitem-name\" }, [\n                        _vm._v(_vm._s(userRow.name))\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"Log\", { attrs: { log_data: userRow } })\n                    ],\n                    1\n                  )\n                ],\n                1\n              )\n            ])\n          }),\n          0\n        )\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/UserList.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/frontend/App.vue":
/*!******************************!*\
  !*** ./src/frontend/App.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_82d33a46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=82d33a46& */ \"./src/frontend/App.vue?vue&type=template&id=82d33a46&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./src/frontend/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./src/frontend/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_82d33a46___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_82d33a46___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/App.vue?");

/***/ }),

/***/ "./src/frontend/App.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/frontend/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/App.vue?");

/***/ }),

/***/ "./src/frontend/App.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************!*\
  !*** ./src/frontend/App.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/App.vue?");

/***/ }),

/***/ "./src/frontend/App.vue?vue&type=template&id=82d33a46&":
/*!*************************************************************!*\
  !*** ./src/frontend/App.vue?vue&type=template&id=82d33a46& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_82d33a46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=82d33a46& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/App.vue?vue&type=template&id=82d33a46&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_82d33a46___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_82d33a46___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/App.vue?");

/***/ }),

/***/ "./src/frontend/AppHomeComponent.vue":
/*!*******************************************!*\
  !*** ./src/frontend/AppHomeComponent.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AppHomeComponent_vue_vue_type_template_id_5507639e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppHomeComponent.vue?vue&type=template&id=5507639e&scoped=true& */ \"./src/frontend/AppHomeComponent.vue?vue&type=template&id=5507639e&scoped=true&\");\n/* harmony import */ var _AppHomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppHomeComponent.vue?vue&type=script&lang=js& */ \"./src/frontend/AppHomeComponent.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _AppHomeComponent_vue_vue_type_style_index_0_id_5507639e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppHomeComponent.vue?vue&type=style&index=0&id=5507639e&scoped=true&lang=css& */ \"./src/frontend/AppHomeComponent.vue?vue&type=style&index=0&id=5507639e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _AppHomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _AppHomeComponent_vue_vue_type_template_id_5507639e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _AppHomeComponent_vue_vue_type_template_id_5507639e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"5507639e\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/AppHomeComponent.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/AppHomeComponent.vue?");

/***/ }),

/***/ "./src/frontend/AppHomeComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/frontend/AppHomeComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./AppHomeComponent.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/AppHomeComponent.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/AppHomeComponent.vue?");

/***/ }),

/***/ "./src/frontend/AppHomeComponent.vue?vue&type=style&index=0&id=5507639e&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./src/frontend/AppHomeComponent.vue?vue&type=style&index=0&id=5507639e&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHomeComponent_vue_vue_type_style_index_0_id_5507639e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./AppHomeComponent.vue?vue&type=style&index=0&id=5507639e&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/AppHomeComponent.vue?vue&type=style&index=0&id=5507639e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHomeComponent_vue_vue_type_style_index_0_id_5507639e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHomeComponent_vue_vue_type_style_index_0_id_5507639e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHomeComponent_vue_vue_type_style_index_0_id_5507639e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHomeComponent_vue_vue_type_style_index_0_id_5507639e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHomeComponent_vue_vue_type_style_index_0_id_5507639e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/AppHomeComponent.vue?");

/***/ }),

/***/ "./src/frontend/AppHomeComponent.vue?vue&type=template&id=5507639e&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./src/frontend/AppHomeComponent.vue?vue&type=template&id=5507639e&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHomeComponent_vue_vue_type_template_id_5507639e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./AppHomeComponent.vue?vue&type=template&id=5507639e&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/AppHomeComponent.vue?vue&type=template&id=5507639e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHomeComponent_vue_vue_type_template_id_5507639e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHomeComponent_vue_vue_type_template_id_5507639e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/AppHomeComponent.vue?");

/***/ }),

/***/ "./src/frontend/AppNavigationComponent.vue":
/*!*************************************************!*\
  !*** ./src/frontend/AppNavigationComponent.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AppNavigationComponent_vue_vue_type_template_id_53bfc248_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppNavigationComponent.vue?vue&type=template&id=53bfc248&scoped=true& */ \"./src/frontend/AppNavigationComponent.vue?vue&type=template&id=53bfc248&scoped=true&\");\n/* harmony import */ var _AppNavigationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppNavigationComponent.vue?vue&type=script&lang=js& */ \"./src/frontend/AppNavigationComponent.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _AppNavigationComponent_vue_vue_type_style_index_0_id_53bfc248_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppNavigationComponent.vue?vue&type=style&index=0&id=53bfc248&scoped=true&lang=css& */ \"./src/frontend/AppNavigationComponent.vue?vue&type=style&index=0&id=53bfc248&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _AppNavigationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _AppNavigationComponent_vue_vue_type_template_id_53bfc248_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _AppNavigationComponent_vue_vue_type_template_id_53bfc248_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"53bfc248\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/AppNavigationComponent.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/AppNavigationComponent.vue?");

/***/ }),

/***/ "./src/frontend/AppNavigationComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/frontend/AppNavigationComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavigationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./AppNavigationComponent.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/AppNavigationComponent.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavigationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/AppNavigationComponent.vue?");

/***/ }),

/***/ "./src/frontend/AppNavigationComponent.vue?vue&type=style&index=0&id=53bfc248&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./src/frontend/AppNavigationComponent.vue?vue&type=style&index=0&id=53bfc248&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavigationComponent_vue_vue_type_style_index_0_id_53bfc248_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./AppNavigationComponent.vue?vue&type=style&index=0&id=53bfc248&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/AppNavigationComponent.vue?vue&type=style&index=0&id=53bfc248&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavigationComponent_vue_vue_type_style_index_0_id_53bfc248_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavigationComponent_vue_vue_type_style_index_0_id_53bfc248_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavigationComponent_vue_vue_type_style_index_0_id_53bfc248_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavigationComponent_vue_vue_type_style_index_0_id_53bfc248_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavigationComponent_vue_vue_type_style_index_0_id_53bfc248_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/AppNavigationComponent.vue?");

/***/ }),

/***/ "./src/frontend/AppNavigationComponent.vue?vue&type=template&id=53bfc248&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/frontend/AppNavigationComponent.vue?vue&type=template&id=53bfc248&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavigationComponent_vue_vue_type_template_id_53bfc248_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./AppNavigationComponent.vue?vue&type=template&id=53bfc248&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/AppNavigationComponent.vue?vue&type=template&id=53bfc248&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavigationComponent_vue_vue_type_template_id_53bfc248_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavigationComponent_vue_vue_type_template_id_53bfc248_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/AppNavigationComponent.vue?");

/***/ }),

/***/ "./src/frontend/CONSTS.js":
/*!********************************!*\
  !*** ./src/frontend/CONSTS.js ***!
  \********************************/
/*! exports provided: COMETCHAT_CONSTANTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COMETCHAT_CONSTANTS\", function() { return COMETCHAT_CONSTANTS; });\nvar COMETCHAT_CONSTANTS = {\n  APP_ID: '23200bdf29727b1',\n  REGION: 'eu',\n  API_KEY: '281d58e6467af77d3b7cd20fad36ee2153aec631'\n};\n\n//# sourceURL=webpack:///./src/frontend/CONSTS.js?");

/***/ }),

/***/ "./src/frontend/Loader.vue":
/*!*********************************!*\
  !*** ./src/frontend/Loader.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Loader_vue_vue_type_template_id_82cd7ff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader.vue?vue&type=template&id=82cd7ff2&scoped=true& */ \"./src/frontend/Loader.vue?vue&type=template&id=82cd7ff2&scoped=true&\");\n/* harmony import */ var _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.vue?vue&type=script&lang=js& */ \"./src/frontend/Loader.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Loader_vue_vue_type_style_index_0_id_82cd7ff2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader.vue?vue&type=style&index=0&id=82cd7ff2&scoped=true&lang=css& */ \"./src/frontend/Loader.vue?vue&type=style&index=0&id=82cd7ff2&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Loader_vue_vue_type_template_id_82cd7ff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Loader_vue_vue_type_template_id_82cd7ff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"82cd7ff2\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/Loader.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/Loader.vue?");

/***/ }),

/***/ "./src/frontend/Loader.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/frontend/Loader.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/Loader.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/Loader.vue?");

/***/ }),

/***/ "./src/frontend/Loader.vue?vue&type=style&index=0&id=82cd7ff2&scoped=true&lang=css&":
/*!******************************************************************************************!*\
  !*** ./src/frontend/Loader.vue?vue&type=style&index=0&id=82cd7ff2&scoped=true&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_82cd7ff2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=style&index=0&id=82cd7ff2&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/Loader.vue?vue&type=style&index=0&id=82cd7ff2&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_82cd7ff2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_82cd7ff2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_82cd7ff2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_82cd7ff2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_82cd7ff2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/Loader.vue?");

/***/ }),

/***/ "./src/frontend/Loader.vue?vue&type=template&id=82cd7ff2&scoped=true&":
/*!****************************************************************************!*\
  !*** ./src/frontend/Loader.vue?vue&type=template&id=82cd7ff2&scoped=true& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_82cd7ff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=template&id=82cd7ff2&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/Loader.vue?vue&type=template&id=82cd7ff2&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_82cd7ff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_82cd7ff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/Loader.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/double_tick.png":
/*!*****************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/double_tick.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"202dfeee3157fea030179c648fdc6b28.png\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/double_tick.png?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/double_tick_blue.png":
/*!**********************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/double_tick_blue.png ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fb3261902d9318ba13e732c712ac81f6.png\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/double_tick_blue.png?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/people-1_2x.jpg":
/*!*****************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/people-1_2x.jpg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"eb5d00dcd34ff2fda880c4971cdd7d91.jpg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/people-1_2x.jpg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/people-2_2.jpg":
/*!****************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/people-2_2.jpg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e03c88819ba116071098f5b6a0b6b466.jpg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/people-2_2.jpg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/single_tick.png":
/*!*****************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/single_tick.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"bea5f6a1ed247a0d03c40ee0815fe1fc.png\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/single_tick.png?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg sync recursive ^\\.\\/.*$":
/*!*******************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg sync ^\.\/.*$ ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./Smile-eyes-star.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/Smile-eyes-star.svg\",\n\t\"./apple-black-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/apple-black-icon.svg\",\n\t\"./apple-white-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/apple-white-icon.svg\",\n\t\"./arrow_back_icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/arrow_back_icon.svg\",\n\t\"./attach_file_icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/attach_file_icon.svg\",\n\t\"./audiotrack_icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/audiotrack_icon.svg\",\n\t\"./call-blue-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/call-blue-icon.svg\",\n\t\"./call-end-white-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/call-end-white-icon.svg\",\n\t\"./call-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/call-grey-icon.svg\",\n\t\"./call-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/call-light-grey-icon.svg\",\n\t\"./call-member-white-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/call-member-white-icon.svg\",\n\t\"./call-min-white-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/call-min-white-icon.svg\",\n\t\"./camera-off-white-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/camera-off-white-icon.svg\",\n\t\"./chat-black-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/chat-black-icon.svg\",\n\t\"./chat-blue-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/chat-blue-icon.svg\",\n\t\"./chat-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/chat-grey-icon.svg\",\n\t\"./chat-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/chat-light-grey-icon.svg\",\n\t\"./chat-pin-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/chat-pin-grey-icon.svg\",\n\t\"./chat-pin-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/chat-pin-light-grey-icon.svg\",\n\t\"./chat-white-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/chat-white-icon.svg\",\n\t\"./checkbox-blue-active.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/checkbox-blue-active.svg\",\n\t\"./checkbox-inactive.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/checkbox-inactive.svg\",\n\t\"./cheese-sector-blue-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/cheese-sector-blue-icon.svg\",\n\t\"./cheese-sector-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/cheese-sector-grey-icon.svg\",\n\t\"./cheese-sector-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/cheese-sector-light-grey-icon.svg\",\n\t\"./cross-black-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/cross-black-icon.svg\",\n\t\"./cross-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/cross-grey-icon.svg\",\n\t\"./cross-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/cross-light-grey-icon.svg\",\n\t\"./cross-white-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/cross-white-icon.svg\",\n\t\"./cube-blue-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/cube-blue-icon.svg\",\n\t\"./cube-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/cube-grey-icon.svg\",\n\t\"./cube-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/cube-light-grey-icon.svg\",\n\t\"./delete-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/delete-grey-icon.svg\",\n\t\"./delete-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/delete-light-grey-icon.svg\",\n\t\"./details-pane-blue-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/details-pane-blue-icon.svg\",\n\t\"./double-tick-blue-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/double-tick-blue-icon.svg\",\n\t\"./edit-blue-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/edit-blue-icon.svg\",\n\t\"./gesture_icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/gesture_icon.svg\",\n\t\"./group-chat-blue-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/group-chat-blue-icon.svg\",\n\t\"./group-chat-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/group-chat-grey-icon.svg\",\n\t\"./group-chat-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/group-chat-light-grey-icon.svg\",\n\t\"./headset_icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/headset_icon.svg\",\n\t\"./help-black-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/help-black-icon.svg\",\n\t\"./help-white-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/help-white-icon.svg\",\n\t\"./image_icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/image_icon.svg\",\n\t\"./incoming-call-black-down-arrow.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-black-down-arrow.svg\",\n\t\"./incoming-call-grey-down-arrow.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-grey-down-arrow.svg\",\n\t\"./incoming-call-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-grey-icon.svg\",\n\t\"./incoming-call-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-light-grey-icon.svg\",\n\t\"./incoming-call-video-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-video-grey-icon.svg\",\n\t\"./incoming-call-video-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-video-light-grey-icon.svg\",\n\t\"./left-blue-arrow.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/left-blue-arrow.svg\",\n\t\"./location_on_icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/location_on_icon.svg\",\n\t\"./missed-call-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/missed-call-grey-icon.svg\",\n\t\"./missed-call-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/missed-call-light-grey-icon.svg\",\n\t\"./more-blue-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/more-blue-icon.svg\",\n\t\"./more-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/more-grey-icon.svg\",\n\t\"./more-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/more-light-grey-icon.svg\",\n\t\"./mute-white-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/mute-white-icon.svg\",\n\t\"./notification-black-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/notification-black-icon.svg\",\n\t\"./notification-white-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/notification-white-icon.svg\",\n\t\"./outgoing-call-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/outgoing-call-grey-icon.svg\",\n\t\"./outgoing-call-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/outgoing-call-light-grey-icon.svg\",\n\t\"./outgoing-call-video-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/outgoing-call-video-grey-icon.svg\",\n\t\"./outgoing-call-video-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/outgoing-call-video-light-grey-icon.svg\",\n\t\"./people-blue-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/people-blue-icon.svg\",\n\t\"./people-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/people-grey-icon.svg\",\n\t\"./people-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/people-light-grey-icon.svg\",\n\t\"./plus-blue-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/plus-blue-icon.svg\",\n\t\"./plus-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/plus-grey-icon.svg\",\n\t\"./plus-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/plus-light-grey-icon.svg\",\n\t\"./privacy-black-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/privacy-black-icon.svg\",\n\t\"./privacy-white-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/privacy-white-icon.svg\",\n\t\"./recent-blue-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/recent-blue-icon.svg\",\n\t\"./recent-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/recent-grey-icon.svg\",\n\t\"./recent-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/recent-light-grey-icon.svg\",\n\t\"./report-black-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/report-black-icon.svg\",\n\t\"./report-white-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/report-white-icon.svg\",\n\t\"./rounded-plus-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/rounded-plus-grey-icon.svg\",\n\t\"./rounded-plus-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/rounded-plus-light-grey-icon.svg\",\n\t\"./search-blue-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/search-blue-icon.svg\",\n\t\"./search-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/search-grey-icon.svg\",\n\t\"./search-white-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/search-white-icon.svg\",\n\t\"./send-blue-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/send-blue-icon.svg\",\n\t\"./smilie-blue-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/smilie-blue-icon.svg\",\n\t\"./smilie-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/smilie-grey-icon.svg\",\n\t\"./smilie-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/smilie-light-grey-icon.svg\",\n\t\"./umbrella-blue-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/umbrella-blue-icon.svg\",\n\t\"./umbrella-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/umbrella-grey-icon.svg\",\n\t\"./umbrella-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/umbrella-light-grey-icon.svg\",\n\t\"./video-call-blue-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/video-call-blue-icon.svg\",\n\t\"./video-call-white-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/video-call-white-icon.svg\",\n\t\"./video_icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/video_icon.svg\",\n\t\"./voice-record-frey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/voice-record-frey-icon.svg\",\n\t\"./voice-record-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/voice-record-grey-icon.svg\",\n\t\"./voice-record-light-grey-icon.svg\": \"./src/frontend/lib/cometchat-components/assets/images/svg/voice-record-light-grey-icon.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/frontend/lib/cometchat-components/assets/images/svg sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/Smile-eyes-star.svg":
/*!*************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/Smile-eyes-star.svg ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ecd9436a7ac4d0bbc05666a7b669997f.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/Smile-eyes-star.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/apple-black-icon.svg":
/*!**************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/apple-black-icon.svg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"a24b793017ba77c6701c5d7ee19b0820.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/apple-black-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/apple-white-icon.svg":
/*!**************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/apple-white-icon.svg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b1f7cf39643fc5529aa504a8ee5a9fae.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/apple-white-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/arrow_back_icon.svg":
/*!*************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/arrow_back_icon.svg ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c0785cb520dadf8dd94b54dd99920872.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/arrow_back_icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/attach_file_icon.svg":
/*!**************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/attach_file_icon.svg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"1f99a8e3044aba0a155660db5c2579b8.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/attach_file_icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/audiotrack_icon.svg":
/*!*************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/audiotrack_icon.svg ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"47ee8bbed57804077a6e8c333157158f.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/audiotrack_icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/call-blue-icon.svg":
/*!************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/call-blue-icon.svg ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b728cd1a2a7c5e41999727fef3696d69.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/call-blue-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/call-end-white-icon.svg":
/*!*****************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/call-end-white-icon.svg ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"7e7a5c71e33c1f2927f2e2e05f251473.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/call-end-white-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/call-grey-icon.svg":
/*!************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/call-grey-icon.svg ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d5e56e94afd7c449fc37f9b93c3be616.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/call-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/call-light-grey-icon.svg":
/*!******************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/call-light-grey-icon.svg ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3f83097df92f910a398aa3b9f8938869.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/call-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/call-member-white-icon.svg":
/*!********************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/call-member-white-icon.svg ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"1add7821754a990dd20a7ec72dcbbe03.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/call-member-white-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/call-min-white-icon.svg":
/*!*****************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/call-min-white-icon.svg ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8f89fa229b53e2c57030f40245a28587.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/call-min-white-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/camera-off-white-icon.svg":
/*!*******************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/camera-off-white-icon.svg ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ad23c233163a733a0d12c5ea8502a835.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/camera-off-white-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/chat-black-icon.svg":
/*!*************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/chat-black-icon.svg ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"4c8d242414bb6de132be3319bcd8bab7.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/chat-black-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/chat-blue-icon.svg":
/*!************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/chat-blue-icon.svg ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"df09a65c30b3a169ee01d4e3af24b0a3.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/chat-blue-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/chat-grey-icon.svg":
/*!************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/chat-grey-icon.svg ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"9ba4ec4907d0afcd7534651df70ad785.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/chat-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/chat-light-grey-icon.svg":
/*!******************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/chat-light-grey-icon.svg ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"864e36f2319ff9960fe8ad2e22f1bfc5.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/chat-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/chat-pin-grey-icon.svg":
/*!****************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/chat-pin-grey-icon.svg ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f72d504d53ed38f879d7c62bddec8e1a.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/chat-pin-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/chat-pin-light-grey-icon.svg":
/*!**********************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/chat-pin-light-grey-icon.svg ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"7ffe8b5875c353a67dd978dd05544be7.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/chat-pin-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/chat-white-icon.svg":
/*!*************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/chat-white-icon.svg ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"55f1b805449a0fbb4b14cb365f341baf.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/chat-white-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/checkbox-blue-active.svg":
/*!******************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/checkbox-blue-active.svg ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"7a37fd6e4207b224bbe03dfdb1b2c165.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/checkbox-blue-active.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/checkbox-inactive.svg":
/*!***************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/checkbox-inactive.svg ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"70e099f66f35867837c44edb1f698fe4.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/checkbox-inactive.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/cheese-sector-blue-icon.svg":
/*!*********************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/cheese-sector-blue-icon.svg ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"61fe73b862d1d9c966ee63117a7caf03.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/cheese-sector-blue-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/cheese-sector-grey-icon.svg":
/*!*********************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/cheese-sector-grey-icon.svg ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"10c1b62c4fcc39fceee064a6ba7f857f.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/cheese-sector-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/cheese-sector-light-grey-icon.svg":
/*!***************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/cheese-sector-light-grey-icon.svg ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"675d3436ded77f064ea1c46627bab263.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/cheese-sector-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/cross-black-icon.svg":
/*!**************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/cross-black-icon.svg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d321ab4e34b7231941090f3b562784f1.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/cross-black-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/cross-grey-icon.svg":
/*!*************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/cross-grey-icon.svg ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"4290ba0036a49c4e1f2305cee7513e72.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/cross-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/cross-light-grey-icon.svg":
/*!*******************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/cross-light-grey-icon.svg ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"016e58be4b2c627c05da8aefea5fcffd.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/cross-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/cross-white-icon.svg":
/*!**************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/cross-white-icon.svg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"805934e77e5c5cd75af62d3a80868440.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/cross-white-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/cube-blue-icon.svg":
/*!************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/cube-blue-icon.svg ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"13c8f8925a02e066962ebc17a3c4c315.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/cube-blue-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/cube-grey-icon.svg":
/*!************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/cube-grey-icon.svg ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"581b395fdbcbf12946b8a4e7477549ce.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/cube-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/cube-light-grey-icon.svg":
/*!******************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/cube-light-grey-icon.svg ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"69d8229414b1d3bad0b5ab86c7020a6e.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/cube-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/delete-grey-icon.svg":
/*!**************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/delete-grey-icon.svg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"2f0c2f7a28e2e06f5ba0b2fed4e3fc9a.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/delete-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/delete-light-grey-icon.svg":
/*!********************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/delete-light-grey-icon.svg ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"73a51ab52fd750ddf82722414812aec1.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/delete-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/details-pane-blue-icon.svg":
/*!********************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/details-pane-blue-icon.svg ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fdfd246edf13179c700f549749147d46.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/details-pane-blue-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/double-tick-blue-icon.svg":
/*!*******************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/double-tick-blue-icon.svg ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c11d0196679afd0bb43cf70447057310.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/double-tick-blue-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/edit-blue-icon.svg":
/*!************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/edit-blue-icon.svg ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"7fcf1fb02a95149a95960335897e83f4.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/edit-blue-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/gesture_icon.svg":
/*!**********************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/gesture_icon.svg ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ad7ee2d0d09de50b31e48a3bbe98cf0e.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/gesture_icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/group-chat-blue-icon.svg":
/*!******************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/group-chat-blue-icon.svg ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3ac636e633aaf77aef86116e51bb4938.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/group-chat-blue-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/group-chat-grey-icon.svg":
/*!******************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/group-chat-grey-icon.svg ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8843c764ea5a2bf01c9045649e00407b.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/group-chat-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/group-chat-light-grey-icon.svg":
/*!************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/group-chat-light-grey-icon.svg ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"70ee55faa5a4226d6aee42f913e0b471.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/group-chat-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/headset_icon.svg":
/*!**********************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/headset_icon.svg ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b02d98dc5579bd41483365baf1905333.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/headset_icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/help-black-icon.svg":
/*!*************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/help-black-icon.svg ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"676acf401a50bc5dda37da97282f015b.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/help-black-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/help-white-icon.svg":
/*!*************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/help-white-icon.svg ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"42ff256510b8d9c54e8f107b848659b9.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/help-white-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/image_icon.svg":
/*!********************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/image_icon.svg ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"74c27c4a43d7a436b99683f0d9f73746.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/image_icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-black-down-arrow.svg":
/*!****************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-black-down-arrow.svg ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"64df512a5dcbdf6953073ebd1fa4492d.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-black-down-arrow.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-grey-down-arrow.svg":
/*!***************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-grey-down-arrow.svg ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d9e11363c31c90f462bb923b65121a0e.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-grey-down-arrow.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-grey-icon.svg":
/*!*********************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-grey-icon.svg ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e520bdb3709a01727c3ae648732b46d2.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-light-grey-icon.svg":
/*!***************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-light-grey-icon.svg ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d9e11363c31c90f462bb923b65121a0e.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-video-grey-icon.svg":
/*!***************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-video-grey-icon.svg ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"01227dc4f0549bb7fb9759d884cf1c7c.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-video-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-video-light-grey-icon.svg":
/*!*********************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-video-light-grey-icon.svg ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"9a4038585546cedb9dc494368126b4af.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/incoming-call-video-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/left-blue-arrow.svg":
/*!*************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/left-blue-arrow.svg ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"34c1ac03cb4d322c9ab1cd54f579efa5.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/left-blue-arrow.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/location_on_icon.svg":
/*!**************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/location_on_icon.svg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"dca749851ce951d460c1680ad0ff9b69.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/location_on_icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/missed-call-grey-icon.svg":
/*!*******************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/missed-call-grey-icon.svg ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"345c6b1e9efd92ab8df19bb3d1a2b7a5.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/missed-call-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/missed-call-light-grey-icon.svg":
/*!*************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/missed-call-light-grey-icon.svg ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ebdce7ed73173dd2df7c4a1edf6ed203.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/missed-call-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/more-blue-icon.svg":
/*!************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/more-blue-icon.svg ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b25a2e4f9fd9c2ec2acad1a2355a9b7a.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/more-blue-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/more-grey-icon.svg":
/*!************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/more-grey-icon.svg ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"867693eaaf5faba921370948556e0c73.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/more-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/more-light-grey-icon.svg":
/*!******************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/more-light-grey-icon.svg ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b154436741b49f83c659028dd89cd2d1.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/more-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/mute-white-icon.svg":
/*!*************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/mute-white-icon.svg ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"4ab0e4f108612623bf31c1a62240196b.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/mute-white-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/notification-black-icon.svg":
/*!*********************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/notification-black-icon.svg ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"cc9f51e12f34b4dc82386fe3517eb658.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/notification-black-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/notification-white-icon.svg":
/*!*********************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/notification-white-icon.svg ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e47d57c389cc05763ad58fddaaacfdbf.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/notification-white-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/outgoing-call-grey-icon.svg":
/*!*********************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/outgoing-call-grey-icon.svg ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"1155751c59e0000713938148d72637e4.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/outgoing-call-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/outgoing-call-light-grey-icon.svg":
/*!***************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/outgoing-call-light-grey-icon.svg ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"97a0fac13df1d1e8a592dd5307742d52.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/outgoing-call-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/outgoing-call-video-grey-icon.svg":
/*!***************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/outgoing-call-video-grey-icon.svg ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ca510b974424186263338bf78af4f91d.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/outgoing-call-video-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/outgoing-call-video-light-grey-icon.svg":
/*!*********************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/outgoing-call-video-light-grey-icon.svg ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"79b56a9528647a4d70c104ff506dd01e.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/outgoing-call-video-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/people-blue-icon.svg":
/*!**************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/people-blue-icon.svg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f3eb59d1cc456e6f80c13f5c9cf1ee12.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/people-blue-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/people-grey-icon.svg":
/*!**************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/people-grey-icon.svg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c383bb3f71253c18a0b7bb3907801bf7.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/people-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/people-light-grey-icon.svg":
/*!********************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/people-light-grey-icon.svg ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"9218147bce4705780962c118012f047e.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/people-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/plus-blue-icon.svg":
/*!************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/plus-blue-icon.svg ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e55e2b76e97954bfe6cb84d9a035a352.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/plus-blue-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/plus-grey-icon.svg":
/*!************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/plus-grey-icon.svg ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e52017c0842e53c3f32e244946ffaf2d.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/plus-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/plus-light-grey-icon.svg":
/*!******************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/plus-light-grey-icon.svg ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f18b6f2b85ec5440808d7957527d15ce.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/plus-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/privacy-black-icon.svg":
/*!****************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/privacy-black-icon.svg ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"cf564129af4dc0a8c4889cd1a4d97078.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/privacy-black-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/privacy-white-icon.svg":
/*!****************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/privacy-white-icon.svg ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ca9995f348bce2bcb08def558c117445.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/privacy-white-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/recent-blue-icon.svg":
/*!**************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/recent-blue-icon.svg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"2c53e27e6838bf19d313f8772dedd51a.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/recent-blue-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/recent-grey-icon.svg":
/*!**************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/recent-grey-icon.svg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"88e62d1dd7e762a0e748ff6341bce031.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/recent-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/recent-light-grey-icon.svg":
/*!********************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/recent-light-grey-icon.svg ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"34b971c38cb983fca04019c6af95463c.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/recent-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/report-black-icon.svg":
/*!***************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/report-black-icon.svg ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"01de7e8f994f36cf8005ecd9b7389ef8.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/report-black-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/report-white-icon.svg":
/*!***************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/report-white-icon.svg ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"dd8ca91d1541999ffd813bc44b650f8f.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/report-white-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/rounded-plus-grey-icon.svg":
/*!********************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/rounded-plus-grey-icon.svg ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"1c6b3992b6a86ee0850924961a99adc0.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/rounded-plus-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/rounded-plus-light-grey-icon.svg":
/*!**************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/rounded-plus-light-grey-icon.svg ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8a0e0f4afdf152209a38e41d03739566.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/rounded-plus-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/search-blue-icon.svg":
/*!**************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/search-blue-icon.svg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"75b1e64392fde8343d12aca8fec6af09.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/search-blue-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/search-grey-icon.svg":
/*!**************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/search-grey-icon.svg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"13afd243551a08550e0ad46577730855.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/search-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/search-white-icon.svg":
/*!***************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/search-white-icon.svg ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fe1512d19a7d1face64989d29c4c316a.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/search-white-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/send-blue-icon.svg":
/*!************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/send-blue-icon.svg ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"4c24d164f7c332c849cc2514428757f4.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/send-blue-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/smilie-blue-icon.svg":
/*!**************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/smilie-blue-icon.svg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"6dbb728ecbcd3911383bc3c09b87d3cc.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/smilie-blue-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/smilie-grey-icon.svg":
/*!**************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/smilie-grey-icon.svg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"30036f082cb99edbbcd4a0ea5530e7b0.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/smilie-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/smilie-light-grey-icon.svg":
/*!********************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/smilie-light-grey-icon.svg ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"35c0ffadf5403ba703031619621c7d70.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/smilie-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/umbrella-blue-icon.svg":
/*!****************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/umbrella-blue-icon.svg ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"056e6af85fd1592f9b1cbc5000a2570c.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/umbrella-blue-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/umbrella-grey-icon.svg":
/*!****************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/umbrella-grey-icon.svg ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3bfc17ddc01959c38bd0daf16dcc80d4.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/umbrella-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/umbrella-light-grey-icon.svg":
/*!**********************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/umbrella-light-grey-icon.svg ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"69ed0beb71e6c71fa2496fa8c3c8c2f7.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/umbrella-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/video-call-blue-icon.svg":
/*!******************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/video-call-blue-icon.svg ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e4045655f499cf0fca7207975ef7bd26.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/video-call-blue-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/video-call-white-icon.svg":
/*!*******************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/video-call-white-icon.svg ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"5f424a7546a440332a77517f21ca071b.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/video-call-white-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/video_icon.svg":
/*!********************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/video_icon.svg ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ee46bcdc4d6f9137f0bf1b7e3956b705.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/video_icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/voice-record-frey-icon.svg":
/*!********************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/voice-record-frey-icon.svg ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8d245beebdcaadc79f5927de266895b5.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/voice-record-frey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/voice-record-grey-icon.svg":
/*!********************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/voice-record-grey-icon.svg ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8d245beebdcaadc79f5927de266895b5.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/voice-record-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/assets/images/svg/voice-record-light-grey-icon.svg":
/*!**************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/assets/images/svg/voice-record-light-grey-icon.svg ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3b6ddefaa5680be74ab98792b5af2b07.svg\";\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/assets/images/svg/voice-record-light-grey-icon.svg?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/Avatar.vue":
/*!*********************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/Avatar.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Avatar_vue_vue_type_template_id_78d5bf48_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Avatar.vue?vue&type=template&id=78d5bf48&scoped=true& */ \"./src/frontend/lib/cometchat-components/components/Avatar.vue?vue&type=template&id=78d5bf48&scoped=true&\");\n/* harmony import */ var _Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatar.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/Avatar.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Avatar_vue_vue_type_style_index_0_id_78d5bf48_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Avatar.vue?vue&type=style&index=0&id=78d5bf48&scoped=true&lang=css& */ \"./src/frontend/lib/cometchat-components/components/Avatar.vue?vue&type=style&index=0&id=78d5bf48&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Avatar_vue_vue_type_template_id_78d5bf48_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Avatar_vue_vue_type_template_id_78d5bf48_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"78d5bf48\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/Avatar.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/Avatar.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/Avatar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/Avatar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Avatar.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/Avatar.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/Avatar.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/Avatar.vue?vue&type=style&index=0&id=78d5bf48&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/Avatar.vue?vue&type=style&index=0&id=78d5bf48&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_id_78d5bf48_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Avatar.vue?vue&type=style&index=0&id=78d5bf48&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/Avatar.vue?vue&type=style&index=0&id=78d5bf48&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_id_78d5bf48_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_id_78d5bf48_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_id_78d5bf48_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_id_78d5bf48_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_id_78d5bf48_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/Avatar.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/Avatar.vue?vue&type=template&id=78d5bf48&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/Avatar.vue?vue&type=template&id=78d5bf48&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_78d5bf48_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Avatar.vue?vue&type=template&id=78d5bf48&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/Avatar.vue?vue&type=template&id=78d5bf48&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_78d5bf48_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_78d5bf48_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/Avatar.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/CallList.vue":
/*!***********************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/CallList.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CallList_vue_vue_type_template_id_07361242_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CallList.vue?vue&type=template&id=07361242&scoped=true& */ \"./src/frontend/lib/cometchat-components/components/CallList.vue?vue&type=template&id=07361242&scoped=true&\");\n/* harmony import */ var _CallList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CallList.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/CallList.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _CallList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _CallList_vue_vue_type_template_id_07361242_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _CallList_vue_vue_type_template_id_07361242_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"07361242\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/CallList.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/CallList.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/CallList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/CallList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CallList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CallList.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/CallList.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CallList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/CallList.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/CallList.vue?vue&type=template&id=07361242&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/CallList.vue?vue&type=template&id=07361242&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CallList_vue_vue_type_template_id_07361242_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CallList.vue?vue&type=template&id=07361242&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/CallList.vue?vue&type=template&id=07361242&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CallList_vue_vue_type_template_id_07361242_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CallList_vue_vue_type_template_id_07361242_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/CallList.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/ChatContainer.vue":
/*!****************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/ChatContainer.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ChatContainer_vue_vue_type_template_id_7ea6d2d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatContainer.vue?vue&type=template&id=7ea6d2d6& */ \"./src/frontend/lib/cometchat-components/components/ChatContainer.vue?vue&type=template&id=7ea6d2d6&\");\n/* harmony import */ var _ChatContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatContainer.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/ChatContainer.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _ChatContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatContainer.vue?vue&type=style&index=0&lang=css& */ \"./src/frontend/lib/cometchat-components/components/ChatContainer.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _ChatContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ChatContainer_vue_vue_type_template_id_7ea6d2d6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ChatContainer_vue_vue_type_template_id_7ea6d2d6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/ChatContainer.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ChatContainer.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/ChatContainer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/ChatContainer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatContainer.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ChatContainer.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ChatContainer.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/ChatContainer.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/ChatContainer.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatContainer.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ChatContainer.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ChatContainer.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/ChatContainer.vue?vue&type=template&id=7ea6d2d6&":
/*!***********************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/ChatContainer.vue?vue&type=template&id=7ea6d2d6& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContainer_vue_vue_type_template_id_7ea6d2d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatContainer.vue?vue&type=template&id=7ea6d2d6& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ChatContainer.vue?vue&type=template&id=7ea6d2d6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContainer_vue_vue_type_template_id_7ea6d2d6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContainer_vue_vue_type_template_id_7ea6d2d6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ChatContainer.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/ChatList.vue":
/*!***********************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/ChatList.vue ***!
  \***********************************************************************/
/*! exports provided: STRING_CONSTS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ChatList_vue_vue_type_template_id_31a175d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatList.vue?vue&type=template&id=31a175d9&scoped=true& */ \"./src/frontend/lib/cometchat-components/components/ChatList.vue?vue&type=template&id=31a175d9&scoped=true&\");\n/* harmony import */ var _ChatList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatList.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/ChatList.vue?vue&type=script&lang=js&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"STRING_CONSTS\", function() { return _ChatList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"STRING_CONSTS\"]; });\n\n/* harmony import */ var _ChatList_vue_vue_type_style_index_0_id_31a175d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatList.vue?vue&type=style&index=0&id=31a175d9&scoped=true&lang=css& */ \"./src/frontend/lib/cometchat-components/components/ChatList.vue?vue&type=style&index=0&id=31a175d9&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _ChatList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ChatList_vue_vue_type_template_id_31a175d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ChatList_vue_vue_type_template_id_31a175d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"31a175d9\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/ChatList.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ChatList.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/ChatList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/ChatList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default, STRING_CONSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatList.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ChatList.vue?vue&type=script&lang=js&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"STRING_CONSTS\", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"STRING_CONSTS\"]; });\n\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ChatList.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/ChatList.vue?vue&type=style&index=0&id=31a175d9&scoped=true&lang=css&":
/*!********************************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/ChatList.vue?vue&type=style&index=0&id=31a175d9&scoped=true&lang=css& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_style_index_0_id_31a175d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatList.vue?vue&type=style&index=0&id=31a175d9&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ChatList.vue?vue&type=style&index=0&id=31a175d9&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_style_index_0_id_31a175d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_style_index_0_id_31a175d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_style_index_0_id_31a175d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_style_index_0_id_31a175d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_style_index_0_id_31a175d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ChatList.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/ChatList.vue?vue&type=template&id=31a175d9&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/ChatList.vue?vue&type=template&id=31a175d9&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_template_id_31a175d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatList.vue?vue&type=template&id=31a175d9&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ChatList.vue?vue&type=template&id=31a175d9&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_template_id_31a175d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_template_id_31a175d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ChatList.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/ContactScreen.vue":
/*!****************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/ContactScreen.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ContactScreen_vue_vue_type_template_id_7852340e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactScreen.vue?vue&type=template&id=7852340e& */ \"./src/frontend/lib/cometchat-components/components/ContactScreen.vue?vue&type=template&id=7852340e&\");\n/* harmony import */ var _ContactScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactScreen.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/ContactScreen.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _ContactScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ContactScreen_vue_vue_type_template_id_7852340e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ContactScreen_vue_vue_type_template_id_7852340e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/ContactScreen.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ContactScreen.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/ContactScreen.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/ContactScreen.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactScreen.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ContactScreen.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ContactScreen.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/ContactScreen.vue?vue&type=template&id=7852340e&":
/*!***********************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/ContactScreen.vue?vue&type=template&id=7852340e& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactScreen_vue_vue_type_template_id_7852340e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactScreen.vue?vue&type=template&id=7852340e& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ContactScreen.vue?vue&type=template&id=7852340e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactScreen_vue_vue_type_template_id_7852340e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactScreen_vue_vue_type_template_id_7852340e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ContactScreen.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/ConversationScreen.vue":
/*!*********************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/ConversationScreen.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ConversationScreen_vue_vue_type_template_id_3d578652___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConversationScreen.vue?vue&type=template&id=3d578652& */ \"./src/frontend/lib/cometchat-components/components/ConversationScreen.vue?vue&type=template&id=3d578652&\");\n/* harmony import */ var _ConversationScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConversationScreen.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/ConversationScreen.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _ConversationScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ConversationScreen_vue_vue_type_template_id_3d578652___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ConversationScreen_vue_vue_type_template_id_3d578652___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/ConversationScreen.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ConversationScreen.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/ConversationScreen.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/ConversationScreen.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ConversationScreen.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ConversationScreen.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ConversationScreen.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/ConversationScreen.vue?vue&type=template&id=3d578652&":
/*!****************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/ConversationScreen.vue?vue&type=template&id=3d578652& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationScreen_vue_vue_type_template_id_3d578652___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ConversationScreen.vue?vue&type=template&id=3d578652& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/ConversationScreen.vue?vue&type=template&id=3d578652&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationScreen_vue_vue_type_template_id_3d578652___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationScreen_vue_vue_type_template_id_3d578652___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/ConversationScreen.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/GroupList.vue":
/*!************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/GroupList.vue ***!
  \************************************************************************/
/*! exports provided: STRING_CONSTS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GroupList_vue_vue_type_template_id_2879230a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupList.vue?vue&type=template&id=2879230a&scoped=true& */ \"./src/frontend/lib/cometchat-components/components/GroupList.vue?vue&type=template&id=2879230a&scoped=true&\");\n/* harmony import */ var _GroupList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupList.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/GroupList.vue?vue&type=script&lang=js&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"STRING_CONSTS\", function() { return _GroupList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"STRING_CONSTS\"]; });\n\n/* harmony import */ var _GroupList_vue_vue_type_style_index_0_id_2879230a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupList.vue?vue&type=style&index=0&id=2879230a&scoped=true&lang=css& */ \"./src/frontend/lib/cometchat-components/components/GroupList.vue?vue&type=style&index=0&id=2879230a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _GroupList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _GroupList_vue_vue_type_template_id_2879230a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _GroupList_vue_vue_type_template_id_2879230a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2879230a\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/GroupList.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/GroupList.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/GroupList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/GroupList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default, STRING_CONSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupList.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/GroupList.vue?vue&type=script&lang=js&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"STRING_CONSTS\", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"STRING_CONSTS\"]; });\n\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/GroupList.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/GroupList.vue?vue&type=style&index=0&id=2879230a&scoped=true&lang=css&":
/*!*********************************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/GroupList.vue?vue&type=style&index=0&id=2879230a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupList_vue_vue_type_style_index_0_id_2879230a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupList.vue?vue&type=style&index=0&id=2879230a&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/GroupList.vue?vue&type=style&index=0&id=2879230a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupList_vue_vue_type_style_index_0_id_2879230a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupList_vue_vue_type_style_index_0_id_2879230a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupList_vue_vue_type_style_index_0_id_2879230a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupList_vue_vue_type_style_index_0_id_2879230a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupList_vue_vue_type_style_index_0_id_2879230a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/GroupList.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/GroupList.vue?vue&type=template&id=2879230a&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/GroupList.vue?vue&type=template&id=2879230a&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupList_vue_vue_type_template_id_2879230a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupList.vue?vue&type=template&id=2879230a&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/GroupList.vue?vue&type=template&id=2879230a&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupList_vue_vue_type_template_id_2879230a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupList_vue_vue_type_template_id_2879230a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/GroupList.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/GroupScreen.vue":
/*!**************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/GroupScreen.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GroupScreen_vue_vue_type_template_id_01e19250___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupScreen.vue?vue&type=template&id=01e19250& */ \"./src/frontend/lib/cometchat-components/components/GroupScreen.vue?vue&type=template&id=01e19250&\");\n/* harmony import */ var _GroupScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupScreen.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/GroupScreen.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _GroupScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _GroupScreen_vue_vue_type_template_id_01e19250___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _GroupScreen_vue_vue_type_template_id_01e19250___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/GroupScreen.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/GroupScreen.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/GroupScreen.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/GroupScreen.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupScreen.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/GroupScreen.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/GroupScreen.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/GroupScreen.vue?vue&type=template&id=01e19250&":
/*!*********************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/GroupScreen.vue?vue&type=template&id=01e19250& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupScreen_vue_vue_type_template_id_01e19250___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupScreen.vue?vue&type=template&id=01e19250& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/GroupScreen.vue?vue&type=template&id=01e19250&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupScreen_vue_vue_type_template_id_01e19250___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupScreen_vue_vue_type_template_id_01e19250___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/GroupScreen.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/LeftSidebar.vue":
/*!**************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/LeftSidebar.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LeftSidebar_vue_vue_type_template_id_b291d13c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeftSidebar.vue?vue&type=template&id=b291d13c& */ \"./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?vue&type=template&id=b291d13c&\");\n/* harmony import */ var _LeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeftSidebar.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _LeftSidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeftSidebar.vue?vue&type=style&index=0&lang=css& */ \"./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _LeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _LeftSidebar_vue_vue_type_template_id_b291d13c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _LeftSidebar_vue_vue_type_template_id_b291d13c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/LeftSidebar.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeftSidebar.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftSidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeftSidebar.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftSidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftSidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftSidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftSidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftSidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?vue&type=template&id=b291d13c&":
/*!*********************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?vue&type=template&id=b291d13c& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftSidebar_vue_vue_type_template_id_b291d13c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeftSidebar.vue?vue&type=template&id=b291d13c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?vue&type=template&id=b291d13c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftSidebar_vue_vue_type_template_id_b291d13c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftSidebar_vue_vue_type_template_id_b291d13c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/LeftSidebar.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/Loader.vue":
/*!*********************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/Loader.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Loader_vue_vue_type_template_id_2564bbd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader.vue?vue&type=template&id=2564bbd4&scoped=true& */ \"./src/frontend/lib/cometchat-components/components/Loader.vue?vue&type=template&id=2564bbd4&scoped=true&\");\n/* harmony import */ var _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/Loader.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Loader_vue_vue_type_style_index_0_id_2564bbd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader.vue?vue&type=style&index=0&id=2564bbd4&scoped=true&lang=css& */ \"./src/frontend/lib/cometchat-components/components/Loader.vue?vue&type=style&index=0&id=2564bbd4&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Loader_vue_vue_type_template_id_2564bbd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Loader_vue_vue_type_template_id_2564bbd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2564bbd4\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/Loader.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/Loader.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/Loader.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/Loader.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/Loader.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/Loader.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/Loader.vue?vue&type=style&index=0&id=2564bbd4&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/Loader.vue?vue&type=style&index=0&id=2564bbd4&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_2564bbd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=style&index=0&id=2564bbd4&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/Loader.vue?vue&type=style&index=0&id=2564bbd4&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_2564bbd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_2564bbd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_2564bbd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_2564bbd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_2564bbd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/Loader.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/Loader.vue?vue&type=template&id=2564bbd4&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/Loader.vue?vue&type=template&id=2564bbd4&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_2564bbd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=template&id=2564bbd4&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/Loader.vue?vue&type=template&id=2564bbd4&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_2564bbd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_2564bbd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/Loader.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/Log.vue":
/*!******************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/Log.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Log_vue_vue_type_template_id_1861b2d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.vue?vue&type=template&id=1861b2d1& */ \"./src/frontend/lib/cometchat-components/components/Log.vue?vue&type=template&id=1861b2d1&\");\n/* harmony import */ var _Log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Log.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/Log.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Log_vue_vue_type_template_id_1861b2d1___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Log_vue_vue_type_template_id_1861b2d1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/Log.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/Log.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/Log.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/Log.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Log.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/Log.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/Log.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/Log.vue?vue&type=template&id=1861b2d1&":
/*!*************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/Log.vue?vue&type=template&id=1861b2d1& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_template_id_1861b2d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Log.vue?vue&type=template&id=1861b2d1& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/Log.vue?vue&type=template&id=1861b2d1&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_template_id_1861b2d1___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_template_id_1861b2d1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/Log.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MessageContainer.vue":
/*!*******************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MessageContainer.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MessageContainer_vue_vue_type_template_id_1222be06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageContainer.vue?vue&type=template&id=1222be06& */ \"./src/frontend/lib/cometchat-components/components/MessageContainer.vue?vue&type=template&id=1222be06&\");\n/* harmony import */ var _MessageContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageContainer.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/MessageContainer.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _MessageContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageContainer.vue?vue&type=style&index=0&lang=css& */ \"./src/frontend/lib/cometchat-components/components/MessageContainer.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _MessageContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _MessageContainer_vue_vue_type_template_id_1222be06___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _MessageContainer_vue_vue_type_template_id_1222be06___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/MessageContainer.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageContainer.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MessageContainer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MessageContainer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageContainer.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageContainer.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageContainer.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MessageContainer.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MessageContainer.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageContainer.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageContainer.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageContainer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageContainer.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MessageContainer.vue?vue&type=template&id=1222be06&":
/*!**************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MessageContainer.vue?vue&type=template&id=1222be06& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageContainer_vue_vue_type_template_id_1222be06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageContainer.vue?vue&type=template&id=1222be06& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageContainer.vue?vue&type=template&id=1222be06&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageContainer_vue_vue_type_template_id_1222be06___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageContainer_vue_vue_type_template_id_1222be06___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageContainer.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MessageFooter.vue":
/*!****************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MessageFooter.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MessageFooter_vue_vue_type_template_id_65c1da62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageFooter.vue?vue&type=template&id=65c1da62&scoped=true& */ \"./src/frontend/lib/cometchat-components/components/MessageFooter.vue?vue&type=template&id=65c1da62&scoped=true&\");\n/* harmony import */ var _MessageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageFooter.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/MessageFooter.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _MessageFooter_vue_vue_type_style_index_0_id_65c1da62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageFooter.vue?vue&type=style&index=0&id=65c1da62&scoped=true&lang=css& */ \"./src/frontend/lib/cometchat-components/components/MessageFooter.vue?vue&type=style&index=0&id=65c1da62&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _MessageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _MessageFooter_vue_vue_type_template_id_65c1da62_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _MessageFooter_vue_vue_type_template_id_65c1da62_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"65c1da62\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/MessageFooter.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageFooter.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MessageFooter.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MessageFooter.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageFooter.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageFooter.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageFooter.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MessageFooter.vue?vue&type=style&index=0&id=65c1da62&scoped=true&lang=css&":
/*!*************************************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MessageFooter.vue?vue&type=style&index=0&id=65c1da62&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageFooter_vue_vue_type_style_index_0_id_65c1da62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageFooter.vue?vue&type=style&index=0&id=65c1da62&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageFooter.vue?vue&type=style&index=0&id=65c1da62&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageFooter_vue_vue_type_style_index_0_id_65c1da62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageFooter_vue_vue_type_style_index_0_id_65c1da62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageFooter_vue_vue_type_style_index_0_id_65c1da62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageFooter_vue_vue_type_style_index_0_id_65c1da62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageFooter_vue_vue_type_style_index_0_id_65c1da62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageFooter.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MessageFooter.vue?vue&type=template&id=65c1da62&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MessageFooter.vue?vue&type=template&id=65c1da62&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageFooter_vue_vue_type_template_id_65c1da62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageFooter.vue?vue&type=template&id=65c1da62&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageFooter.vue?vue&type=template&id=65c1da62&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageFooter_vue_vue_type_template_id_65c1da62_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageFooter_vue_vue_type_template_id_65c1da62_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageFooter.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MessageHeader.vue":
/*!****************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MessageHeader.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MessageHeader_vue_vue_type_template_id_235d127e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageHeader.vue?vue&type=template&id=235d127e&scoped=true& */ \"./src/frontend/lib/cometchat-components/components/MessageHeader.vue?vue&type=template&id=235d127e&scoped=true&\");\n/* harmony import */ var _MessageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageHeader.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/MessageHeader.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _MessageHeader_vue_vue_type_style_index_0_id_235d127e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageHeader.vue?vue&type=style&index=0&id=235d127e&scoped=true&lang=css& */ \"./src/frontend/lib/cometchat-components/components/MessageHeader.vue?vue&type=style&index=0&id=235d127e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _MessageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _MessageHeader_vue_vue_type_template_id_235d127e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _MessageHeader_vue_vue_type_template_id_235d127e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"235d127e\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/MessageHeader.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageHeader.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MessageHeader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MessageHeader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageHeader.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageHeader.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageHeader.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MessageHeader.vue?vue&type=style&index=0&id=235d127e&scoped=true&lang=css&":
/*!*************************************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MessageHeader.vue?vue&type=style&index=0&id=235d127e&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageHeader_vue_vue_type_style_index_0_id_235d127e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageHeader.vue?vue&type=style&index=0&id=235d127e&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageHeader.vue?vue&type=style&index=0&id=235d127e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageHeader_vue_vue_type_style_index_0_id_235d127e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageHeader_vue_vue_type_style_index_0_id_235d127e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageHeader_vue_vue_type_style_index_0_id_235d127e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageHeader_vue_vue_type_style_index_0_id_235d127e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageHeader_vue_vue_type_style_index_0_id_235d127e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageHeader.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MessageHeader.vue?vue&type=template&id=235d127e&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MessageHeader.vue?vue&type=template&id=235d127e&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageHeader_vue_vue_type_template_id_235d127e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageHeader.vue?vue&type=template&id=235d127e&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageHeader.vue?vue&type=template&id=235d127e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageHeader_vue_vue_type_template_id_235d127e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageHeader_vue_vue_type_template_id_235d127e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageHeader.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MessageView.vue":
/*!**************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MessageView.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MessageView_vue_vue_type_template_id_48ef59d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageView.vue?vue&type=template&id=48ef59d9&scoped=true& */ \"./src/frontend/lib/cometchat-components/components/MessageView.vue?vue&type=template&id=48ef59d9&scoped=true&\");\n/* harmony import */ var _MessageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageView.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/MessageView.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _MessageView_vue_vue_type_style_index_0_id_48ef59d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageView.vue?vue&type=style&index=0&id=48ef59d9&scoped=true&lang=css& */ \"./src/frontend/lib/cometchat-components/components/MessageView.vue?vue&type=style&index=0&id=48ef59d9&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _MessageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _MessageView_vue_vue_type_template_id_48ef59d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _MessageView_vue_vue_type_template_id_48ef59d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"48ef59d9\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/MessageView.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageView.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MessageView.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MessageView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageView.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageView.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageView.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MessageView.vue?vue&type=style&index=0&id=48ef59d9&scoped=true&lang=css&":
/*!***********************************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MessageView.vue?vue&type=style&index=0&id=48ef59d9&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageView_vue_vue_type_style_index_0_id_48ef59d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageView.vue?vue&type=style&index=0&id=48ef59d9&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageView.vue?vue&type=style&index=0&id=48ef59d9&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageView_vue_vue_type_style_index_0_id_48ef59d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageView_vue_vue_type_style_index_0_id_48ef59d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageView_vue_vue_type_style_index_0_id_48ef59d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageView_vue_vue_type_style_index_0_id_48ef59d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageView_vue_vue_type_style_index_0_id_48ef59d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageView.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MessageView.vue?vue&type=template&id=48ef59d9&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MessageView.vue?vue&type=template&id=48ef59d9&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageView_vue_vue_type_template_id_48ef59d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageView.vue?vue&type=template&id=48ef59d9&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MessageView.vue?vue&type=template&id=48ef59d9&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageView_vue_vue_type_template_id_48ef59d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageView_vue_vue_type_template_id_48ef59d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MessageView.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MoreList.vue":
/*!***********************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MoreList.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MoreList_vue_vue_type_template_id_19b0d0d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MoreList.vue?vue&type=template&id=19b0d0d6&scoped=true& */ \"./src/frontend/lib/cometchat-components/components/MoreList.vue?vue&type=template&id=19b0d0d6&scoped=true&\");\n/* harmony import */ var _MoreList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoreList.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/MoreList.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _MoreList_vue_vue_type_style_index_0_id_19b0d0d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoreList.vue?vue&type=style&index=0&id=19b0d0d6&scoped=true&lang=css& */ \"./src/frontend/lib/cometchat-components/components/MoreList.vue?vue&type=style&index=0&id=19b0d0d6&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _MoreList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _MoreList_vue_vue_type_template_id_19b0d0d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _MoreList_vue_vue_type_template_id_19b0d0d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"19b0d0d6\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/MoreList.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MoreList.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MoreList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MoreList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MoreList.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MoreList.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MoreList.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MoreList.vue?vue&type=style&index=0&id=19b0d0d6&scoped=true&lang=css&":
/*!********************************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MoreList.vue?vue&type=style&index=0&id=19b0d0d6&scoped=true&lang=css& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreList_vue_vue_type_style_index_0_id_19b0d0d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MoreList.vue?vue&type=style&index=0&id=19b0d0d6&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MoreList.vue?vue&type=style&index=0&id=19b0d0d6&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreList_vue_vue_type_style_index_0_id_19b0d0d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreList_vue_vue_type_style_index_0_id_19b0d0d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreList_vue_vue_type_style_index_0_id_19b0d0d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreList_vue_vue_type_style_index_0_id_19b0d0d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreList_vue_vue_type_style_index_0_id_19b0d0d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MoreList.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/MoreList.vue?vue&type=template&id=19b0d0d6&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/MoreList.vue?vue&type=template&id=19b0d0d6&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreList_vue_vue_type_template_id_19b0d0d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MoreList.vue?vue&type=template&id=19b0d0d6&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/MoreList.vue?vue&type=template&id=19b0d0d6&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreList_vue_vue_type_template_id_19b0d0d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreList_vue_vue_type_template_id_19b0d0d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/MoreList.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/NavComponent.vue":
/*!***************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/NavComponent.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NavComponent_vue_vue_type_template_id_1ad6255d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavComponent.vue?vue&type=template&id=1ad6255d& */ \"./src/frontend/lib/cometchat-components/components/NavComponent.vue?vue&type=template&id=1ad6255d&\");\n/* harmony import */ var _NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavComponent.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/NavComponent.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _NavComponent_vue_vue_type_template_id_1ad6255d___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _NavComponent_vue_vue_type_template_id_1ad6255d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/NavComponent.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/NavComponent.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/NavComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/NavComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavComponent.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/NavComponent.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/NavComponent.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/NavComponent.vue?vue&type=template&id=1ad6255d&":
/*!**********************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/NavComponent.vue?vue&type=template&id=1ad6255d& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_template_id_1ad6255d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavComponent.vue?vue&type=template&id=1ad6255d& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/NavComponent.vue?vue&type=template&id=1ad6255d&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_template_id_1ad6255d___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_template_id_1ad6255d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/NavComponent.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/RightSidebar.vue":
/*!***************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/RightSidebar.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RightSidebar_vue_vue_type_template_id_4b4cd0e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RightSidebar.vue?vue&type=template&id=4b4cd0e3&scoped=true& */ \"./src/frontend/lib/cometchat-components/components/RightSidebar.vue?vue&type=template&id=4b4cd0e3&scoped=true&\");\n/* harmony import */ var _RightSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RightSidebar.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/RightSidebar.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _RightSidebar_vue_vue_type_style_index_0_id_4b4cd0e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RightSidebar.vue?vue&type=style&index=0&id=4b4cd0e3&scoped=true&lang=css& */ \"./src/frontend/lib/cometchat-components/components/RightSidebar.vue?vue&type=style&index=0&id=4b4cd0e3&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _RightSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _RightSidebar_vue_vue_type_template_id_4b4cd0e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _RightSidebar_vue_vue_type_template_id_4b4cd0e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"4b4cd0e3\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/RightSidebar.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/RightSidebar.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/RightSidebar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/RightSidebar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RightSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RightSidebar.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/RightSidebar.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RightSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/RightSidebar.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/RightSidebar.vue?vue&type=style&index=0&id=4b4cd0e3&scoped=true&lang=css&":
/*!************************************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/RightSidebar.vue?vue&type=style&index=0&id=4b4cd0e3&scoped=true&lang=css& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RightSidebar_vue_vue_type_style_index_0_id_4b4cd0e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RightSidebar.vue?vue&type=style&index=0&id=4b4cd0e3&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/RightSidebar.vue?vue&type=style&index=0&id=4b4cd0e3&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RightSidebar_vue_vue_type_style_index_0_id_4b4cd0e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RightSidebar_vue_vue_type_style_index_0_id_4b4cd0e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RightSidebar_vue_vue_type_style_index_0_id_4b4cd0e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RightSidebar_vue_vue_type_style_index_0_id_4b4cd0e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RightSidebar_vue_vue_type_style_index_0_id_4b4cd0e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/RightSidebar.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/RightSidebar.vue?vue&type=template&id=4b4cd0e3&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/RightSidebar.vue?vue&type=template&id=4b4cd0e3&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RightSidebar_vue_vue_type_template_id_4b4cd0e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RightSidebar.vue?vue&type=template&id=4b4cd0e3&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/RightSidebar.vue?vue&type=template&id=4b4cd0e3&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RightSidebar_vue_vue_type_template_id_4b4cd0e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RightSidebar_vue_vue_type_template_id_4b4cd0e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/RightSidebar.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/SidebarHeader.vue":
/*!****************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/SidebarHeader.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SidebarHeader_vue_vue_type_template_id_0a8e1bd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarHeader.vue?vue&type=template&id=0a8e1bd6& */ \"./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?vue&type=template&id=0a8e1bd6&\");\n/* harmony import */ var _SidebarHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarHeader.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _SidebarHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarHeader.vue?vue&type=style&index=0&lang=css& */ \"./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _SidebarHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _SidebarHeader_vue_vue_type_template_id_0a8e1bd6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _SidebarHeader_vue_vue_type_template_id_0a8e1bd6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/SidebarHeader.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarHeader.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarHeader.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?vue&type=template&id=0a8e1bd6&":
/*!***********************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?vue&type=template&id=0a8e1bd6& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarHeader_vue_vue_type_template_id_0a8e1bd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarHeader.vue?vue&type=template&id=0a8e1bd6& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?vue&type=template&id=0a8e1bd6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarHeader_vue_vue_type_template_id_0a8e1bd6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarHeader_vue_vue_type_template_id_0a8e1bd6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/SidebarHeader.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/UserList.vue":
/*!***********************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/UserList.vue ***!
  \***********************************************************************/
/*! exports provided: STRING_CONSTS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UserList_vue_vue_type_template_id_6ae0a968_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList.vue?vue&type=template&id=6ae0a968&scoped=true& */ \"./src/frontend/lib/cometchat-components/components/UserList.vue?vue&type=template&id=6ae0a968&scoped=true&\");\n/* harmony import */ var _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList.vue?vue&type=script&lang=js& */ \"./src/frontend/lib/cometchat-components/components/UserList.vue?vue&type=script&lang=js&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"STRING_CONSTS\", function() { return _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"STRING_CONSTS\"]; });\n\n/* harmony import */ var _UserList_vue_vue_type_style_index_0_id_6ae0a968_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserList.vue?vue&type=style&index=0&id=6ae0a968&scoped=true&lang=css& */ \"./src/frontend/lib/cometchat-components/components/UserList.vue?vue&type=style&index=0&id=6ae0a968&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _UserList_vue_vue_type_template_id_6ae0a968_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _UserList_vue_vue_type_template_id_6ae0a968_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6ae0a968\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/frontend/lib/cometchat-components/components/UserList.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/UserList.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/UserList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/UserList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default, STRING_CONSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/UserList.vue?vue&type=script&lang=js&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"STRING_CONSTS\", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"STRING_CONSTS\"]; });\n\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/UserList.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/UserList.vue?vue&type=style&index=0&id=6ae0a968&scoped=true&lang=css&":
/*!********************************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/UserList.vue?vue&type=style&index=0&id=6ae0a968&scoped=true&lang=css& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_6ae0a968_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-0!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=style&index=0&id=6ae0a968&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/UserList.vue?vue&type=style&index=0&id=6ae0a968&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_6ae0a968_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_6ae0a968_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_6ae0a968_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_6ae0a968_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_6ae0a968_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/UserList.vue?");

/***/ }),

/***/ "./src/frontend/lib/cometchat-components/components/UserList.vue?vue&type=template&id=6ae0a968&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./src/frontend/lib/cometchat-components/components/UserList.vue?vue&type=template&id=6ae0a968&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_6ae0a968_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=template&id=6ae0a968&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/lib/cometchat-components/components/UserList.vue?vue&type=template&id=6ae0a968&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_6ae0a968_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_6ae0a968_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/frontend/lib/cometchat-components/components/UserList.vue?");

/***/ }),

/***/ "./src/frontend/main.js":
/*!******************************!*\
  !*** ./src/frontend/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/frontend/App.vue\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ \"./src/frontend/routes.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cometchat-pro/chat */ \"./node_modules/@cometchat-pro/chat/CometChat.js\");\n/* harmony import */ var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _CONSTS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CONSTS */ \"./src/frontend/CONSTS.js\");\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\nvar appSetting = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(_CONSTS__WEBPACK_IMPORTED_MODULE_5__[\"COMETCHAT_CONSTANTS\"].REGION).build();\n_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__[\"CometChat\"].init(_CONSTS__WEBPACK_IMPORTED_MODULE_5__[\"COMETCHAT_CONSTANTS\"].APP_ID, appSetting).then(function () {\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  var router = new vue_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    routes: _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  });\n  new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    router: router,\n    render: function render(h) {\n      return h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    }\n  }).$mount('#vue-frontend-app');\n}); // let init : function() {\n//     this.loading = true;\n//     let params = new URLSearchParams(location.search); \n//     return new Promise((res,rej)=>{\n//       var appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(COMETCHAT_CONSTANTS.REGION).build();\n//       //initialize cometchat manager\n//       CometChat.init(COMETCHAT_CONSTANTS.APP_ID, appSetting).then(()=>{\n//         CometChat.login(params.get('uid'), COMETCHAT_CONSTANTS.API_KEY).then((user)=>{\n//           console.log('current log : ', user);\n//           this.currentUser = user;\n//           this.isLoggedin = true;\n//           this.loading = false;\n//           res(user);\n//         },error=>{\n//           location.href = '/';\n//           rej(error);\n//         });\n//       })\n//     });\n//   },\n\n//# sourceURL=webpack:///./src/frontend/main.js?");

/***/ }),

/***/ "./src/frontend/routes.js":
/*!********************************!*\
  !*** ./src/frontend/routes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AppHomeComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppHomeComponent */ \"./src/frontend/AppHomeComponent.vue\");\n/* harmony import */ var _AppNavigationComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppNavigationComponent */ \"./src/frontend/AppNavigationComponent.vue\");\n/* harmony import */ var _lib_cometchat_components_components_ChatContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/cometchat-components/components/ChatContainer */ \"./src/frontend/lib/cometchat-components/components/ChatContainer.vue\");\n/* harmony import */ var _lib_cometchat_components_components_ConversationScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/cometchat-components/components/ConversationScreen */ \"./src/frontend/lib/cometchat-components/components/ConversationScreen.vue\");\n/* harmony import */ var _lib_cometchat_components_components_GroupScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/cometchat-components/components/GroupScreen */ \"./src/frontend/lib/cometchat-components/components/GroupScreen.vue\");\n/* harmony import */ var _lib_cometchat_components_components_ContactScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/cometchat-components/components/ContactScreen */ \"./src/frontend/lib/cometchat-components/components/ContactScreen.vue\");\n/* harmony import */ var _lib_cometchat_components_components_UserList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/cometchat-components/components/UserList */ \"./src/frontend/lib/cometchat-components/components/UserList.vue\");\n/* harmony import */ var _lib_cometchat_components_components_ChatList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/cometchat-components/components/ChatList */ \"./src/frontend/lib/cometchat-components/components/ChatList.vue\");\n/* harmony import */ var _lib_cometchat_components_components_GroupList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/cometchat-components/components/GroupList */ \"./src/frontend/lib/cometchat-components/components/GroupList.vue\");\n// routes.js\n\n\n\n\n\n\n\n\n\nvar routes = [{\n  path: \"/\",\n  component: _AppHomeComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: \"/menu\",\n  component: _AppNavigationComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  path: \"/embeded-app\",\n  component: _lib_cometchat_components_components_ChatContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}, {\n  path: \"/conversation-screen\",\n  component: _lib_cometchat_components_components_ConversationScreen__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}, {\n  path: \"/group-screen\",\n  component: _lib_cometchat_components_components_GroupScreen__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}, {\n  path: \"/contact-screen\",\n  component: _lib_cometchat_components_components_ContactScreen__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}, {\n  path: \"/contact-list\",\n  component: _lib_cometchat_components_components_UserList__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n}, {\n  path: \"/chat-list\",\n  component: _lib_cometchat_components_components_ChatList__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n}, {\n  path: \"/group-list\",\n  component: _lib_cometchat_components_components_GroupList__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/frontend/routes.js?");

/***/ })

},[["./src/frontend/main.js","runtime","vendors"]]]);