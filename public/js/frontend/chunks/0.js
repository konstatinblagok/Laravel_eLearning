(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LanguageList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LanguageList */ "./resources/js/frontend/src/LanguageList/index.js");
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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TheLanguageModal',
  props: {
    type: Number,
    display: Boolean
  },
  data: function data() {
    return {
      langs: _LanguageList__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
  },
  computed: {
    isShown: function isShown() {
      return this.display;
    },
    headerType: function headerType() {
      return this.type === 1 ? 1 : 2;
    },
    isType: function isType() {
      if (this.type === 1) {
        return "home";
      }

      if (this.type === 2) {
        return "category";
      } else return "lesson-list";
    }
  },
  methods: {
    onCloseModal: function onCloseModal() {
      this.$emit('isClosed', true);
    },
    setLocale: function setLocale(val) {
      this.$i18n.locale = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=style&index=0&id=1e24f993&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=style&index=0&id=1e24f993&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nh4[data-v-1e24f993] {\n    color: gray;\n}\n@media only screen and (min-width: 1400px) {\n.cust-modal-content[data-v-1e24f993] {\n        max-width: 1015px;\n}\n}\n@media only screen and (min-width: 1200px) and (max-width: 1399px) {\n.cust-modal-content[data-v-1e24f993] {\n        max-width: 1130px;\n}\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n.cust-modal-content[data-v-1e24f993] {\n        max-width: 950px;\n}\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n.cust-modal-content[data-v-1e24f993] {\n        max-width: 700px;\n}\n}\n@media only screen and (min-width: 576px) and (max-width: 767px) {\n.cust-modal-content[data-v-1e24f993] {\n        max-width: 530px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=style&index=0&id=1e24f993&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=style&index=0&id=1e24f993&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheLanguageModal.vue?vue&type=style&index=0&id=1e24f993&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=style&index=0&id=1e24f993&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=template&id=1e24f993&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=template&id=1e24f993&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "cust-modal",
      style: _vm.isShown ? "display: block" : "display: none",
      attrs: { id: "myModal" }
    },
    [
      _c("div", { staticClass: "cust-modal-content" }, [
        _c("div", { staticClass: "cust-modal-header" }, [
          _c(
            "span",
            { staticClass: "cust-close", on: { click: _vm.onCloseModal } },
            [_vm._v("??")]
          ),
          _vm._v(" "),
          _c("h4", [
            _vm._v(_vm._s(_vm.$tc("TheLanguageModal.header", _vm.headerType)))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "cust-modal-body mt-4 mb-3" }, [
          _vm.headerType === 1
            ? _c(
                "div",
                { staticClass: "row" },
                _vm._l(_vm.langs, function(flag, key) {
                  return _c(
                    "div",
                    {
                      key: key,
                      staticClass:
                        "col-xs-6 col-sm-4 col-md-4 col-lg-3 mt-1 mb-4 cursor-on",
                      on: { click: _vm.onCloseModal }
                    },
                    [
                      _c(
                        "a",
                        {
                          on: {
                            click: function($event) {
                              return _vm.setLocale(key)
                            }
                          }
                        },
                        [
                          _c("span", { class: "flag-icon flag-icon-" + key }),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(flag.name))])
                        ]
                      )
                    ]
                  )
                }),
                0
              )
            : _c(
                "div",
                { staticClass: "row" },
                _vm._l(_vm.langs, function(flag, key) {
                  return _c(
                    "div",
                    {
                      key: key,
                      staticClass:
                        "col-xs-6 col-sm-4 col-md-4 col-lg-3 mt-1 mb-4",
                      on: { click: _vm.onCloseModal }
                    },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: { name: _vm.isType } } },
                        [
                          _c("span", { class: "flag-icon flag-icon-" + key }),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(flag.name))])
                        ]
                      )
                    ],
                    1
                  )
                }),
                0
              )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "cust-modal-footer align-content-center mb-4" },
          [
            _c(
              "button",
              {
                staticClass: "btn btn-outline-primary",
                on: { click: _vm.onCloseModal }
              },
              [_vm._v(" Close ")]
            )
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/src/LanguageList/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/frontend/src/LanguageList/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var langs = {
  // 'za': {
  //     name: 'Afrikaans',
  //     title: 'Ek praat Afrikaans'
  // },
  // 'id': {
  //     name: 'Bahasa Indonesia',
  //     title: 'Saya berbahasa Indonesia'
  // },
  // 'es-ca': {
  //     name: 'Catal??',
  //     title: 'Parlo catal??'
  // },
  // 'dk': {
  //     name: 'Dansk',
  //     title: 'Jeg taler dansk'
  // },
  'de': {
    name: 'Deutsch',
    title: 'Ich spreche Deutsch'
  },
  // 'ee': {
  //     name: 'Eesti',
  //     title: 'Ma r????gin eesti keelt'
  // },
  'us': {
    name: 'English',
    title: 'I speak English'
  },
  'es': {
    name: 'Espa??ol',
    title: 'Hablo espa??ol'
  },
  'fr': {
    name: 'Fran??ais',
    title: 'Je parle fran??ais'
  },
  // 'es-ga': {
  //     name: 'Galego',
  //     title: 'Falo galego'
  // },
  // 'hr': {
  //     name: 'Hrvatski',
  //     title: 'Govorim hrvatski'
  // },
  // 'it': {
  //     name: 'Italiano',
  //     title: 'Parlo italiano'
  // },
  // 'tz': {
  //     name: 'Kiswahili',
  //     title: 'Ninazungumza Kiswahili'
  // },
  // 'lv': {
  //     name: 'Latvie??u',
  //     title: 'Es run??ju latviski'
  // },
  // 'lt': {
  //     name: 'Lietuvi?? kalba',
  //     title: 'A?? kalbu lietuvi??kai'
  // },
  // 'ro': {
  //     name: 'Limba rom??n??',
  //     title: 'Vorbesc limba rom??n??'
  // },
  // 'hu': {
  //     name: 'Magyar',
  //     title: 'Magyarul besz??lek'
  // },
  // 'ms': {
  //     name: 'Melayu',
  //     title: 'Saya bertutur dalam bahasa Melayu'
  // },
  // 'nl': {
  //     name: 'Nederlands',
  //     title: 'Ik spreek Nederlands'
  // },
  // 'no': {
  //     name: 'Norsk',
  //     title: 'Jeg snakker norsk'
  // },
  // 'pl': {
  //     name: 'Polski',
  //     title: 'M??wi?? po polsku'
  // },
  // 'pt': {
  //     name: 'Portugu??s',
  //     title: 'Eu falo portugu??s'
  // },
  // 'al': {
  //     name: 'Shqip',
  //     title: 'Un?? flas anglisht'
  // },
  // 'sk': {
  //     name: 'Sloven??ina',
  //     title: 'Hovor??m po slovensky'
  // },
  // 'sl': {
  //     name: 'Sloven????ina',
  //     title: 'Govorim slovensko'
  // },
  // 'rs': {
  //     name: 'Srpski jezik',
  //     title: 'Ja govorim srpski'
  // },
  // 'fi': {
  //     name: 'Suomi',
  //     title: 'Puhun suomea'
  // },
  'se': {
    name: 'Svenska',
    title: 'Jag talar svenska'
  },
  // 'ph': {
  //     name: 'Tagalog',
  //     title: 'Nagsasalita ako ng Tagalog'
  // },
  // 'vn': {
  //     name: 'Ti???ng Vi???t',
  //     title: 'T??i n??i ti???ng Vi???t'
  // },
  // 'tr': {
  //     name: 'T??rk??e',
  //     title: 'T??rk??e konu??uyorum'
  // },
  // 'is': {
  //     name: '??slenska',
  //     title: '??g tala ??slensku'
  // },
  // 'cz': {
  //     name: '??e??tina',
  //     title: 'Mluv??m ??esky'
  // },
  // 'gr': {
  //     name: '????????????????',
  //     title: '?????????? ????????????????'
  // },
  // 'by': {
  //     name: '????????????????????',
  //     title: '?? ?????????????????? ????-??????????????????'
  // },
  // 'bg': {
  //     name: '?????????????????? ????????',
  //     title: '???? ???????????? ?????????????????? ????????'
  // },
  // 'mk': {
  //     name: '????????????????????',
  //     title: '???????????????? ????????????????????'
  // },
  // 'ru': {
  //     name: '??????????????',
  //     title: '?? ???????????? ????-????????????'
  // },
  // 'ua': {
  //     name: '????????????????????',
  //     title: '?? ?????????????????? ??????????????????????'
  // },
  // 'am': {
  //     name: '??????????????',
  //     title: '???? ???????????? ???? ??????????????'
  // },
  // 'il': {
  //     name: '??????????',
  //     title: '?????? ???????? ??????????'
  // },
  // 'pk': {
  //     name: '????????',
  //     title: '?????? ???????? ??????????/?????????? ??????'
  // },
  // 'sa': {
  //     name: '?????????? ??????????????',
  //     title: '?????? ?????????? ??????????????'
  // },
  // 'ir': {
  //     name: '??????????',
  //     title: '???? ?????????? ???????? ?????????????'
  // },
  // 'in': {
  //     name: '???????????????',
  //     title: '????????? ??????????????? ???????????????/??????????????? ?????????'
  // },
  // 'panjab': {
  //     name: '??????????????????',
  //     title: '????????? ?????????????????? ???????????????/??????????????? ?????????'
  // },
  // 'th': {
  //     name: '?????????????????????',
  //     title: '???????????????????????????????????? / ???????????????????????????????????????'
  // },
  // 'ge': {
  //     name: '?????????????????????',
  //     title: '?????? ?????????????????????????????? ????????????????????????'
  // },
  // 'et': {
  //     name: '????????????',
  //     title: '???????????? ??????????????????'
  // },
  'cn': {
    name: '??????',
    title: '????????????'
  },
  // 'jp': {
  //     name: '?????????',
  //     title: '??????????????????????????????'
  // },
  'kr': {
    name: '?????????',
    title: '?????? ???????????? ?????????.'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (langs);

/***/ }),

/***/ "./resources/js/frontend/src/components/TheLanguageModal.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/frontend/src/components/TheLanguageModal.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheLanguageModal_vue_vue_type_template_id_1e24f993_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheLanguageModal.vue?vue&type=template&id=1e24f993&scoped=true& */ "./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=template&id=1e24f993&scoped=true&");
/* harmony import */ var _TheLanguageModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheLanguageModal.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TheLanguageModal_vue_vue_type_style_index_0_id_1e24f993_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheLanguageModal.vue?vue&type=style&index=0&id=1e24f993&scoped=true&lang=css& */ "./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=style&index=0&id=1e24f993&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TheLanguageModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheLanguageModal_vue_vue_type_template_id_1e24f993_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheLanguageModal_vue_vue_type_template_id_1e24f993_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1e24f993",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/components/TheLanguageModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLanguageModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheLanguageModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLanguageModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=style&index=0&id=1e24f993&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=style&index=0&id=1e24f993&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLanguageModal_vue_vue_type_style_index_0_id_1e24f993_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheLanguageModal.vue?vue&type=style&index=0&id=1e24f993&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=style&index=0&id=1e24f993&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLanguageModal_vue_vue_type_style_index_0_id_1e24f993_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLanguageModal_vue_vue_type_style_index_0_id_1e24f993_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLanguageModal_vue_vue_type_style_index_0_id_1e24f993_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLanguageModal_vue_vue_type_style_index_0_id_1e24f993_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=template&id=1e24f993&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=template&id=1e24f993&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLanguageModal_vue_vue_type_template_id_1e24f993_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheLanguageModal.vue?vue&type=template&id=1e24f993&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLanguageModal.vue?vue&type=template&id=1e24f993&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLanguageModal_vue_vue_type_template_id_1e24f993_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLanguageModal_vue_vue_type_template_id_1e24f993_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);