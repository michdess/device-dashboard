(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddDeviceModal.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddDeviceModal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["show"],
  inject: ["deviceState"],
  data: function data() {
    return {
      name: '',
      type: '',
      value: '',
      errors: false
    };
  },
  methods: {
    cancel: function cancel() {
      this.$emit("close");
      document.body.style.removeProperty("overflow");
    },
    confirmAdd: function confirmAdd(e) {
      e.preventDefault();

      if (this.name.length > 0 && this.type.length > 0 && this.value.length <= 3 && this.value.length > 0) {
        this.$emit("close");
        this.deviceState.devices.push({
          'id': this.deviceState.devices.length + 1,
          'name': this.name,
          'type': this.type,
          'value': this.value
        });
      } else {
        this.errors = true;
      }

      document.body.style.removeProperty("overflow");
    }
  },
  watch: {
    show: {
      immediate: true,
      handler: function handler(show) {
        if (show) {
          document.body.style.setProperty("overflow", "hidden");
        } else {
          document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  created: function created() {
    var _this = this;

    var escapeHandler = function escapeHandler(e) {
      if (e.key === "Escape" && _this.show) {
        _this.cancel();
      }
    };

    document.addEventListener("keydown", escapeHandler);
    this.$once("hook:destroyed", function () {
      document.removeEventListener("keydown", escapeHandler);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DeviceCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeviceCard */ "./resources/js/components/DeviceCard.vue");
/* harmony import */ var _AddDeviceModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddDeviceModal */ "./resources/js/components/AddDeviceModal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  inject: ["deviceState"],
  name: 'Dashboard',
  components: {
    DeviceCard: _DeviceCard__WEBPACK_IMPORTED_MODULE_1__["default"],
    AddDeviceModal: _AddDeviceModal__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      addDeviceModalOpen: false
    };
  },
  created: function created() {},
  methods: {},
  computed: {
    loading: function loading() {
      return this.deviceState.loading;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DeviceCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DeviceCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['device'],
  data: function data() {
    return {};
  },
  methods: {
    openDetails: function openDetails() {
      // this.showDropDown = false;
      this.$router.push({
        name: 'detailview',
        params: {
          'id': this.device.id,
          'device': this.device
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddDeviceModal.vue?vue&type=template&id=4278d2c1&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddDeviceModal.vue?vue&type=template&id=4278d2c1& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        { name: "show", rawName: "v-show", value: _vm.show, expression: "show" }
      ],
      staticClass: "fixed top-0 left-0 right-0 bottom-0 p-4",
      staticStyle: { "background-color": "rgba(0,0,0,0.25)" }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "bg-white w-full sm:w-1/3 rounded p-4 mx-auto flex flex-col shadow-lg"
        },
        [
          _c("h1", { staticClass: "text-left text-xl font-bold" }, [
            _vm._v("\n      Add Device\n    ")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.name,
                expression: "name"
              }
            ],
            staticClass: "py-1 px-2 my-2 border-2 border-gray-300 rounded",
            attrs: { placeholder: "Name" },
            domProps: { value: _vm.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.name = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _vm.errors
            ? _c("p", { staticClass: "text-xs text-red-500" }, [
                _vm._v("You must add a name")
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.type,
                expression: "type"
              }
            ],
            staticClass: "py-1 px-2 my-2 border-2 border-gray-300 rounded",
            attrs: { placeholder: "Type" },
            domProps: { value: _vm.type },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.type = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _vm.errors
            ? _c("p", { staticClass: "text-xs text-red-500" }, [
                _vm._v("You must add a type")
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.number",
                value: _vm.value,
                expression: "value",
                modifiers: { number: true }
              }
            ],
            staticClass: "py-1 px-2 my-2 border-2 border-gray-300 rounded",
            attrs: { type: "number", placeholder: "Value (numbers only)" },
            domProps: { value: _vm.value },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.value = _vm._n($event.target.value)
              },
              blur: function($event) {
                return _vm.$forceUpdate()
              }
            }
          }),
          _vm._v(" "),
          _vm.errors
            ? _c("p", { staticClass: "text-xs text-red-500" }, [
                _vm._v("You must add a value and it must be less than 3 digits")
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "flex justify-end" }, [
            _c("div", { staticClass: "text-center flex justify-end mt-2" }, [
              _c(
                "button",
                {
                  staticClass: "text-green-500 mr-4",
                  attrs: { type: "button" },
                  on: { click: _vm.cancel }
                },
                [_vm._v("\n          Cancel\n        ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "px-4 py-2 bg-green-500 text-white rounded",
                  attrs: { type: "button" },
                  on: { click: _vm.confirmAdd }
                },
                [_vm._v("\n          Save\n        ")]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "w-full max-w-full flex flex-wrap" },
    [
      _vm.loading
        ? _c(
            "div",
            {
              staticClass:
                "absolute top-0 left-0 right-0 bottom-0 flex w-full items-center justify-center"
            },
            [_c("moon-loader", { attrs: { loading: _vm.loading, size: 100 } })],
            1
          )
        : [
            _c("div", { staticClass: "flex w-full sm:w-1/2 lg:w-1/5 p-2" }, [
              _c(
                "div",
                {
                  staticClass:
                    "p-4 flex items-center justify-between w-full bg-white shadow-lg rounded cursor-pointer",
                  on: {
                    click: function($event) {
                      _vm.addDeviceModalOpen = !_vm.addDeviceModalOpen
                    }
                  }
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("p", {}, [
                    _c(
                      "svg",
                      {
                        staticClass: "h-6 w-6 fill-current",
                        attrs: {
                          viewBox: "0 0 20 20",
                          version: "1.1",
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: {
                              id: "Page-1",
                              stroke: "inherit",
                              "stroke-width": "1",
                              fill: "inherit",
                              "fill-rule": "evenodd"
                            }
                          },
                          [
                            _c("g", { attrs: { id: "icon-shape" } }, [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M11,9 L11,5 L9,5 L9,9 L5,9 L5,11 L9,11 L9,15 L11,15 L11,11 L15,11 L15,9 L11,9 Z M10,20 C15.5228475,20 20,15.5228475 20,10 C20,4.4771525 15.5228475,0 10,0 C4.4771525,0 0,4.4771525 0,10 C0,15.5228475 4.4771525,20 10,20 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z",
                                  id: "Shape"
                                }
                              })
                            ])
                          ]
                        )
                      ]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _vm._l(_vm.deviceState.devices, function(device) {
              return _c("DeviceCard", {
                key: device.id,
                attrs: { device: device }
              })
            })
          ],
      _vm._v(" "),
      _vm.addDeviceModalOpen
        ? _c(
            "portal",
            { attrs: { to: "modals" } },
            [
              _c("add-device-modal", {
                attrs: { show: _vm.addDeviceModalOpen },
                on: {
                  close: function($event) {
                    _vm.addDeviceModalOpen = false
                  }
                }
              })
            ],
            1
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex flex-col" }, [
      _c("p", { staticClass: "mt-1 text-gray-900 font-semibold text-lg" }, [
        _vm._v("Add new device")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DeviceCard.vue?vue&type=template&id=7868ec31&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DeviceCard.vue?vue&type=template&id=7868ec31& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex w-full sm:w-1/2 lg:w-1/5 p-2" }, [
    _c(
      "div",
      {
        staticClass:
          "p-4 flex items-center justify-between w-full bg-white shadow-lg rounded cursor-pointer",
        on: {
          dblclick: function($event) {
            $event.stopPropagation()
            return _vm.openDetails($event)
          }
        }
      },
      [
        _c("div", { staticClass: "flex flex-col" }, [
          _c("p", { staticClass: "mt-1 text-gray-900 font-semibold text-lg" }, [
            _vm._v(_vm._s(_vm.device.name))
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "uppercase text-sm text-gray-900" }, [
            _vm._v(_vm._s(_vm.device.type ? _vm.device.type : "No type given"))
          ])
        ]),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass:
              "flex items-center justify-center h-10 w-10 px-2 py-1 leading-none bg-teal-200 text-teal-800 rounded-full font-semibold uppercase tracking-wide text-lg"
          },
          [_vm._v(_vm._s(_vm.device.value ? _vm.device.value : "N/A"))]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AddDeviceModal.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/AddDeviceModal.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddDeviceModal_vue_vue_type_template_id_4278d2c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddDeviceModal.vue?vue&type=template&id=4278d2c1& */ "./resources/js/components/AddDeviceModal.vue?vue&type=template&id=4278d2c1&");
/* harmony import */ var _AddDeviceModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddDeviceModal.vue?vue&type=script&lang=js& */ "./resources/js/components/AddDeviceModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddDeviceModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddDeviceModal_vue_vue_type_template_id_4278d2c1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddDeviceModal_vue_vue_type_template_id_4278d2c1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AddDeviceModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AddDeviceModal.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/AddDeviceModal.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDeviceModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddDeviceModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddDeviceModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDeviceModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AddDeviceModal.vue?vue&type=template&id=4278d2c1&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/AddDeviceModal.vue?vue&type=template&id=4278d2c1& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDeviceModal_vue_vue_type_template_id_4278d2c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AddDeviceModal.vue?vue&type=template&id=4278d2c1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddDeviceModal.vue?vue&type=template&id=4278d2c1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDeviceModal_vue_vue_type_template_id_4278d2c1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDeviceModal_vue_vue_type_template_id_4278d2c1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Dashboard.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Dashboard.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/DeviceCard.vue":
/*!************************************************!*\
  !*** ./resources/js/components/DeviceCard.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeviceCard_vue_vue_type_template_id_7868ec31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeviceCard.vue?vue&type=template&id=7868ec31& */ "./resources/js/components/DeviceCard.vue?vue&type=template&id=7868ec31&");
/* harmony import */ var _DeviceCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeviceCard.vue?vue&type=script&lang=js& */ "./resources/js/components/DeviceCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeviceCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeviceCard_vue_vue_type_template_id_7868ec31___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeviceCard_vue_vue_type_template_id_7868ec31___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DeviceCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DeviceCard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/DeviceCard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DeviceCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DeviceCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DeviceCard.vue?vue&type=template&id=7868ec31&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/DeviceCard.vue?vue&type=template&id=7868ec31& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceCard_vue_vue_type_template_id_7868ec31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DeviceCard.vue?vue&type=template&id=7868ec31& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DeviceCard.vue?vue&type=template&id=7868ec31&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceCard_vue_vue_type_template_id_7868ec31___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceCard_vue_vue_type_template_id_7868ec31___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);