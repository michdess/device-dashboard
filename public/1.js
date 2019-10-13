(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DeviceDetails.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DeviceDetails.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
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
  props: ['device'],
  components: {
    'apexchart': vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      loading: true,
      types: null,
      data: ''
    };
  },
  methods: {
    getDeviceMeasurements: function getDeviceMeasurements() {
      var self = this;
      axios.get('/devices/' + this.device.id + '/readings').then(function (response) {
        self.data = response.data;
        self.getTypes();
      });
    },
    getData: function getData() {
      var _this = this;

      return this.data.map(function (item) {
        return _this.item.type.push(item);
      });
    },
    getTypes: function getTypes() {
      this.types = new Set(this.data.map(function (item) {
        return item.type;
      }));
      this.loading = false;
    },
    findSeries: function findSeries(type) {
      var seriesData = this.data.filter(function (item) {
        return item.type === type;
      });
      seriesData = seriesData.sort(function (a, b) {
        return a.createdAt - b.createdAt;
      }); // let seriesValues = seriesData.map(item => [ Date.parse(item.createdAt) , item.value]);

      var seriesValues = seriesData.map(function (item) {
        return {
          x: item.createdAt,
          y: item.value
        };
      }); // return [{name: type ,data: seriesValues}];

      return [{
        data: seriesValues
      }];
    },
    findOptions: function findOptions(type) {
      console.log(type);
      return {
        xaxis: {
          type: 'datetime',
          tickAmount: 'dataPoints'
        }
      };
    }
  },
  created: function created() {
    this.getDeviceMeasurements();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DeviceDetails.vue?vue&type=template&id=9e9d169e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DeviceDetails.vue?vue&type=template&id=9e9d169e& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "flex flex-col w-full" }, [
    _c("p", { staticClass: "text-3xl" }, [_vm._v(_vm._s(_vm.device.name))]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "-mx-2 w-full flex flex-wrap" },
      [
        _vm.loading
          ? _c("div", [_vm._v("Getting devices and readigs...")])
          : _vm._l(_vm.types, function(type) {
              return _c(
                "div",
                { key: type.id, staticClass: "p-2 w-full sm:w-1/2 lg:w-1/3" },
                [
                  _c(
                    "div",
                    { staticClass: "p-2 w-full rounded bg-white shadow-lg" },
                    [
                      _c(
                        "p",
                        {
                          staticClass:
                            "uppercase tracking-wider text-gray-700 font-semibold"
                        },
                        [_vm._v(_vm._s(type))]
                      ),
                      _vm._v(" "),
                      _c("apexchart", {
                        attrs: {
                          width: "100%",
                          type: "line",
                          options: {
                            xaxis: {
                              type: "datetime",
                              labels: {
                                show: true
                              }
                            },
                            axisTicks: { show: true },
                            markers: { size: 6 }
                          },
                          series: _vm.findSeries(type)
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/DeviceDetails.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/DeviceDetails.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeviceDetails_vue_vue_type_template_id_9e9d169e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeviceDetails.vue?vue&type=template&id=9e9d169e& */ "./resources/js/components/DeviceDetails.vue?vue&type=template&id=9e9d169e&");
/* harmony import */ var _DeviceDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeviceDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/DeviceDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeviceDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeviceDetails_vue_vue_type_template_id_9e9d169e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeviceDetails_vue_vue_type_template_id_9e9d169e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DeviceDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DeviceDetails.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/DeviceDetails.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DeviceDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DeviceDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DeviceDetails.vue?vue&type=template&id=9e9d169e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/DeviceDetails.vue?vue&type=template&id=9e9d169e& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceDetails_vue_vue_type_template_id_9e9d169e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DeviceDetails.vue?vue&type=template&id=9e9d169e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DeviceDetails.vue?vue&type=template&id=9e9d169e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceDetails_vue_vue_type_template_id_9e9d169e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceDetails_vue_vue_type_template_id_9e9d169e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);