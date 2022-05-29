(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_configuration_institution_institution_module_ts"], {
    /***/
    68233:
    /*!******************************************************************************!*\
      !*** ./src/app/configuration/institution/form/institution.form.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InstitutionFormComponent": function InstitutionFormComponent() {
          return (
            /* binding */
            _InstitutionFormComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      5207);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      69978);
      /* harmony import */


      var _core_models_security_person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/models/security/person */
      42792);
      /* harmony import */


      var _core_models_security_institution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/models/security/institution */
      26469);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _institution_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../institution.service */
      85848);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      21554);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var ngx_mask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-mask */
      69129);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      function InstitutionFormComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "This field is required"));
        }
      }

      function InstitutionFormComponent_mat_option_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", p_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r6.name);
        }
      }

      function InstitutionFormComponent_mat_option_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var l_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", l_r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](l_r7.fullname);
        }
      }

      function InstitutionFormComponent_ng_container_54_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r10.msg));
        }
      }

      function InstitutionFormComponent_ng_container_54_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r11.msg));
        }
      }

      function InstitutionFormComponent_ng_container_54_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InstitutionFormComponent_ng_container_54_div_28_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r14.push();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function InstitutionFormComponent_ng_container_54_div_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InstitutionFormComponent_ng_container_54_div_29_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);

            var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r16.pull(i_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function InstitutionFormComponent_ng_container_54_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, InstitutionFormComponent_ng_container_54_span_7_Template, 3, 3, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function InstitutionFormComponent_ng_container_54_Template_input_blur_8_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);

            var i_r9 = restoredCtx.index;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r19.check(i_r9, "identifier");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-form-field", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, InstitutionFormComponent_ng_container_54_span_14_Template, 3, 3, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function InstitutionFormComponent_ng_container_54_Template_input_blur_15_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);

            var i_r9 = restoredCtx.index;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r21.check(i_r9, "email");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-form-field", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-form-field", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, InstitutionFormComponent_ng_container_54_div_28_Template, 5, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, InstitutionFormComponent_ng_container_54_div_29_Template, 5, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r9 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 12, "Identifier"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.isIdentifierDuplicated[i_r9]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 14, "Email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.isEmailDuplicated[i_r9]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showMaskTyped", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 16, "FirstName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showMaskTyped", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 18, "LastName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showMaskTyped", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.managers["controls"][i_r9].status == "VALID" && i_r9 === 0 && !ctx_r5.msg);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.managers["controls"].length > 1 && (i_r9 > 0 || ctx_r5.managers["controls"][i_r9].status != "VALID"));
        }
      }

      var _InstitutionFormComponent = /*#__PURE__*/function () {
        function _InstitutionFormComponent(fb, router, service, snack) {
          var _this = this;

          _classCallCheck(this, _InstitutionFormComponent);

          this.fb = fb;
          this.router = router;
          this.service = service;
          this.snack = snack;
          this.parent = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl();
          this.locationAddress = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl();
          this.placeArray = [];
          this.locationArray = [];
          this.isIdentifierDuplicated = [];
          this.isEmailDuplicated = [];
          var st = this.router.getCurrentNavigation().extras.state;
          this.title = st ? 'Edit the current institution' : 'Create new institution';
          var pl = st && st.place ? st.place : new _core_models_security_institution__WEBPACK_IMPORTED_MODULE_1__.Institution({});
          pl.managers = this.fb.array(pl.managers == null ? [this.fb.group(new _core_models_security_person__WEBPACK_IMPORTED_MODULE_0__.Person({}))] : pl.managers.map(function (m) {
            return _this.fb.group(m);
          }));
          if (pl && pl.parent) this.parent.setValue(pl.parent);
          if (pl && pl.locationAddress) this.locationAddress.setValue(pl.locationAddress);
          this.fg = this.fb.group(pl);
        }

        _createClass(_InstitutionFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.places = this.parent.valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(''), (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(function (value) {
              if (typeof value === 'string' && value.trim().length < 1) return [];

              _this2.service.getPlaces(typeof value === 'string' ? value.toLowerCase() : value.name).subscribe(function (res) {
                _this2.placeArray = res;
              });

              return _this2.placeArray;
            }));
            this.locations = this.locationAddress.valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(''), (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(function (value) {
              if (typeof value === 'string' && value.trim().length < 1) return [];

              _this2.service.getLocations(typeof value === 'string' ? value.toLowerCase() : value.fullname).subscribe(function (res) {
                _this2.locationArray = res;
              });

              return _this2.locationArray;
            }));
          }
        }, {
          key: "display",
          value: function display(ob) {
            if (!ob) return;
            return ob.fullname ? ob.fullname : ob.name;
          }
        }, {
          key: "toast",
          value: function toast(color, text) {
            this.snack.open(text, '', {
              duration: 2000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: color
            });
          }
        }, {
          key: "success",
          value: function success() {
            this.toast('bg-green', 'The usr has been successfully created');
            this.back();
          }
        }, {
          key: "error",
          value: function error(err) {
            this.toast('bg-red', 'Something went wrong the usr has not been created. Please, try again!');
            console.error(err);
          }
        }, {
          key: "submit",
          value: function submit(ob) {
            var _this3 = this;

            var _a;

            ob.parent = ((_a = this.parent.value) === null || _a === void 0 ? void 0 : _a.toString().trim().length) < 1 ? ob.parent : this.parent.value;
            ob.locationAddress = this.locationAddress.value;
            ob.managers = this.managers.getRawValue();
            this.service.save(ob).subscribe(function (res) {
              return _this3.success();
            }, function (err) {
              return _this3.error(err);
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['configuration/institution/page']);
          }
        }, {
          key: "managers",
          get: function get() {
            return this.fg.get('managers');
          }
        }, {
          key: "chkIdent",
          value: function chkIdent(arr, index) {
            var _this4 = this;

            var ident = arr[index].identifier;
            this.isIdentifierDuplicated = arr.map(function (e) {
              return false;
            });

            for (var i = 0; i < arr.length; i++) {
              if (i != index && arr[i].identifier === ident) {
                this.isIdentifierDuplicated[index] = true;
                this.msg = ' (existed in present pool)';
                return;
              } else {
                this.msg = undefined;
              }
            }

            this.service.getPerson(ident).subscribe(function (res) {
              if (res != null) {
                _this4.pull(index);

                _this4.managers.controls.unshift(_this4.fb.group(res));
              }
            });
          }
        }, {
          key: "chkEmail",
          value: function chkEmail(arr, index) {
            var _this5 = this;

            var mail = arr[index].email;
            this.isEmailDuplicated = arr.map(function (e) {
              return false;
            });

            for (var i = 0; i < arr.length; i++) {
              if (i != index && arr[i].email === mail) {
                this.isEmailDuplicated[index] = true;
                this.msg = ' (existed in present pool)';
                return;
              } else {
                this.msg = undefined;
              }
            }

            this.service.getPerson(mail).subscribe(function (res) {
              if (res != null) {
                _this5.pull(index);

                _this5.managers.controls.unshift(_this5.fb.group(res));
              }
            });
          }
        }, {
          key: "check",
          value: function check(index, field) {
            var arr = this.managers.getRawValue();
            return field === 'identifier' ? this.chkIdent(arr, index) : this.chkEmail(arr, index);
          }
        }, {
          key: "push",
          value: function push() {
            this.managers.controls.unshift(this.fb.group(new _core_models_security_person__WEBPACK_IMPORTED_MODULE_0__.Person({})));
          }
        }, {
          key: "pull",
          value: function pull(index) {
            if (this.managers.length > 1) this.managers.removeAt(index);
          }
        }]);

        return _InstitutionFormComponent;
      }();

      _InstitutionFormComponent.ɵfac = function InstitutionFormComponent_Factory(t) {
        return new (t || _InstitutionFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_institution_service__WEBPACK_IMPORTED_MODULE_2__.InstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar));
      };

      _InstitutionFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _InstitutionFormComponent,
        selectors: [["app-form"]],
        decls: 65,
        vars: 42,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "page-title"], [1, "row", "clearfix"], [1, "card"], [1, "body"], [3, "formGroup", "submit"], [1, "col-6"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "name", "required", ""], [4, "ngIf"], ["type", "text", "matInput", "", 3, "formControl", "matAutocomplete"], ["autoActiveFirstOption", "", 3, "displayWith"], ["autoParent", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "textAddress"], ["autoLoation", "matAutocomplete"], ["formArrayName", "managers", 4, "ngFor", "ngForOf"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "type", "disabled"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"], [3, "value"], ["formArrayName", "managers"], [3, "formGroupName"], [1, "col-2"], [1, "example-full-width", "mb-3"], ["class", "error", 4, "ngIf"], ["matInput", "", "mask", "000-000-000-0", "formControlName", "identifier", "required", "", 3, "blur"], [1, "col-3"], ["matInput", "", "formControlName", "email", "required", "", 3, "showMaskTyped", "blur"], ["matInput", "", "formControlName", "firstName", "required", "", 3, "showMaskTyped"], ["matInput", "", "formControlName", "lastName", "required", "", 3, "showMaskTyped"], ["class", "col-1", 4, "ngIf"], [1, "error"], [1, "col-1"], ["mat-mini-fab", "", "color", "primary", "type", "button", 3, "click"], [1, "col-white"], ["mat-mini-fab", "", "color", "warn", 3, "click"]],
        template: function InstitutionFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function InstitutionFormComponent_Template_form_submit_13_listener() {
              return ctx.submit(ctx.fg.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, InstitutionFormComponent_mat_error_21_Template, 3, 3, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-autocomplete", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, InstitutionFormComponent_mat_option_30_Template, 2, 2, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](43, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-autocomplete", 15, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, InstitutionFormComponent_mat_option_47_Template, 2, 2, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](48, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "fieldset");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "legend");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](53, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, InstitutionFormComponent_ng_container_54_Template, 30, 20, "ng-container", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](61, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InstitutionFormComponent_Template_button_click_62_listener() {
              return ctx.back();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](64, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](29);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 22, ctx.title));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.fg);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 24, "Name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fg.get("name").hasError(""));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 26, "Parent"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.parent)("matAutocomplete", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayWith", ctx.display);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 28, ctx.places));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](37, 30, "Text Address"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](43, 32, "Location Address"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.locationAddress)("matAutocomplete", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayWith", ctx.display);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](48, 34, ctx.locations));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](53, 36, "Manager"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.managers.controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.submit)("disabled", !ctx.fg.valid || ctx.msg);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](61, 38, "Save"), " ", ctx.msg, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](64, 40, "Cancel"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, ngx_mask__WEBPACK_IMPORTED_MODULE_15__.MaskDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    98225:
    /*!*************************************************************************!*\
      !*** ./src/app/configuration/institution/institution-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InstitutionRoutingModule": function InstitutionRoutingModule() {
          return (
            /* binding */
            _InstitutionRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _page_institution_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./page/institution.page.component */
      63067);
      /* harmony import */


      var _form_institution_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form/institution.form.component */
      68233);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: 'page',
        component: _page_institution_page_component__WEBPACK_IMPORTED_MODULE_0__.InstitutionPageComponent
      }, {
        path: 'form',
        component: _form_institution_form_component__WEBPACK_IMPORTED_MODULE_1__.InstitutionFormComponent
      }];

      var _InstitutionRoutingModule = function _InstitutionRoutingModule() {
        _classCallCheck(this, _InstitutionRoutingModule);
      };

      _InstitutionRoutingModule.ɵfac = function InstitutionRoutingModule_Factory(t) {
        return new (t || _InstitutionRoutingModule)();
      };

      _InstitutionRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _InstitutionRoutingModule
      });
      _InstitutionRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_InstitutionRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    10331:
    /*!*****************************************************************!*\
      !*** ./src/app/configuration/institution/institution.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InstitutionModule": function InstitutionModule() {
          return (
            /* binding */
            _InstitutionModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/sort */
      11494);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/toolbar */
      12522);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/datepicker */
      43220);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-material-file-input */
      4904);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var _institution_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./institution-routing.module */
      98225);
      /* harmony import */


      var _institution_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./institution.service */
      85848);
      /* harmony import */


      var _page_institution_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page/institution.page.component */
      63067);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);
      /* harmony import */


      var _form_institution_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./form/institution.form.component */
      68233);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      21554);
      /* harmony import */


      var ngx_mask__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ngx-mask */
      69129);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _InstitutionModule = function _InstitutionModule() {
        _classCallCheck(this, _InstitutionModule);
      };

      _InstitutionModule.ɵfac = function InstitutionModule_Factory(t) {
        return new (t || _InstitutionModule)();
      };

      _InstitutionModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _InstitutionModule
      });
      _InstitutionModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [_institution_service__WEBPACK_IMPORTED_MODULE_1__.InstitutionService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule, ngx_material_file_input__WEBPACK_IMPORTED_MODULE_21__.MaterialFileInputModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule, _institution_routing_module__WEBPACK_IMPORTED_MODULE_0__.InstitutionRoutingModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_25__.NgxDatatableModule, ngx_mask__WEBPACK_IMPORTED_MODULE_26__.NgxMaskModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__.MatAutocompleteModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_InstitutionModule, {
          declarations: [_page_institution_page_component__WEBPACK_IMPORTED_MODULE_2__.InstitutionPageComponent, _form_institution_form_component__WEBPACK_IMPORTED_MODULE_3__.InstitutionFormComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule, ngx_material_file_input__WEBPACK_IMPORTED_MODULE_21__.MaterialFileInputModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule, _institution_routing_module__WEBPACK_IMPORTED_MODULE_0__.InstitutionRoutingModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_25__.NgxDatatableModule, ngx_mask__WEBPACK_IMPORTED_MODULE_26__.NgxMaskModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__.MatAutocompleteModule]
        });
      })();
      /***/

    },

    /***/
    85848:
    /*!******************************************************************!*\
      !*** ./src/app/configuration/institution/institution.service.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InstitutionService": function InstitutionService() {
          return (
            /* binding */
            _InstitutionService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _InstitutionService = /*#__PURE__*/function (_src_app_shared_Unsub) {
        _inherits(_InstitutionService, _src_app_shared_Unsub);

        var _super = _createSuper(_InstitutionService);

        function _InstitutionService(http) {
          var _this6;

          _classCallCheck(this, _InstitutionService);

          _this6 = _super.call(this);
          _this6.http = http;
          _this6.api = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api, "/place");
          return _this6;
        }

        _createClass(_InstitutionService, [{
          key: "getInstitutions",
          value: function getInstitutions() {
            return this.http.get(this.api);
          }
        }, {
          key: "getPlaces",
          value: function getPlaces(criteria) {
            return this.http.get("".concat(this.api, "/search/").concat(criteria));
          }
        }, {
          key: "save",
          value: function save(place) {
            return this.http.post(this.api, place);
          }
        }, {
          key: "getLocations",
          value: function getLocations(criteria) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api, "/location/search/").concat(criteria));
          }
        }, {
          key: "deleteInstitution",
          value: function deleteInstitution(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api, "/place/").concat(id));
          }
        }, {
          key: "getPerson",
          value: function getPerson(key) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api, "/user/person?key=").concat(key));
          }
        }]);

        return _InstitutionService;
      }(src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter);

      _InstitutionService.ɵfac = function InstitutionService_Factory(t) {
        return new (t || _InstitutionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _InstitutionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _InstitutionService,
        factory: _InstitutionService.ɵfac
      });
      /***/
    },

    /***/
    63067:
    /*!******************************************************************************!*\
      !*** ./src/app/configuration/institution/page/institution.page.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InstitutionPageComponent": function InstitutionPageComponent() {
          return (
            /* binding */
            _InstitutionPageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);
      /* harmony import */


      var _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _delete_delete_confirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../delete/delete.confirm */
      80303);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _institution_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../institution.service */
      85848);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _c0 = ["roleTemplate"];

      function InstitutionPageComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r7 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](value_r7);
        }
      }

      function InstitutionPageComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r10 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](value_r10);
        }
      }

      function InstitutionPageComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r13 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r13.length > 0 ? value_r13[0].fullname + " (" + value_r13.length + ")" : "", " ");
        }
      }

      function InstitutionPageComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r16 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](value_r16 == null ? null : value_r16.name);
        }
      }

      function InstitutionPageComponent_ng_template_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InstitutionPageComponent_ng_template_40_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);

            var row_r19 = restoredCtx.row;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r21.edit(row_r19);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InstitutionPageComponent_ng_template_40_Template_button_click_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);

            var row_r19 = restoredCtx.row;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r23["delete"](row_r19);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _InstitutionPageComponent = /*#__PURE__*/function (_shared_UnsubscribeOn) {
        _inherits(_InstitutionPageComponent, _shared_UnsubscribeOn);

        var _super2 = _createSuper(_InstitutionPageComponent);

        function _InstitutionPageComponent(service, snack, dialog, router) {
          var _this7;

          _classCallCheck(this, _InstitutionPageComponent);

          _this7 = _super2.call(this);
          _this7.service = service;
          _this7.snack = snack;
          _this7.dialog = dialog;
          _this7.router = router;
          _this7.rows = [];
          _this7.data = [];
          _this7.filteredData = [];
          _this7.columns = [{
            name: 'name'
          }, {
            name: 'address'
          }];
          return _this7;
        }

        _createClass(_InstitutionPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.set();
          }
        }, {
          key: "set",
          value: function set() {
            var _this8 = this;

            this.service.getInstitutions().subscribe(function (res) {
              _this8.data = res;
              _this8.filteredData = res;
            });
          }
        }, {
          key: "filterDatatable",
          value: function filterDatatable(event) {
            var val = event.target.value.toLowerCase();
            var cols = this.columns;
            var keys = Object.keys(this.filteredData[0]);
            this.data = this.filteredData.filter(function (item) {
              for (var i = 0; i < cols.length; i++) {
                if (item[cols[i].name] && item[cols[i].name].toString().toLowerCase().indexOf(val) !== -1 || !val) return true;
              }
            });
            this.table.offset = 0;
          }
        }, {
          key: "delete",
          value: function _delete(row) {
            var _this9 = this;

            var dialogRef = this.dialog.open(_delete_delete_confirm__WEBPACK_IMPORTED_MODULE_1__.DeleteComponent, {});
            this.subs.sink = dialogRef.afterClosed().subscribe(function (result) {
              if (result === 1) {
                _this9.service.deleteInstitution(row.id).subscribe(function (res) {
                  return _this9.success();
                }, function (err) {
                  return _this9.error(err);
                });

                _this9.set();
              }
            });
          }
        }, {
          key: "toast",
          value: function toast(color, text) {
            this.snack.open(text, '', {
              duration: 2000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: color
            });
          }
        }, {
          key: "success",
          value: function success() {
            var _this10 = this;

            this.router.navigateByUrl('/RefreshComponent', {
              skipLocationChange: true
            }).then(function () {
              _this10.router.navigate(['/configuration/institution/page']);
            });
            this.toast('bg-green', 'That record has been successfully deleted');
          }
        }, {
          key: "error",
          value: function error(err) {
            this.toast('bg-red', 'That record is in use somewhere, you have to delete its dependance first!');
            console.error(err);
          }
        }, {
          key: "add",
          value: function add() {
            this.router.navigate(['configuration/institution/form']);
          }
        }, {
          key: "edit",
          value: function edit(row) {
            this.router.navigate(['configuration/institution/form'], {
              state: {
                place: row
              }
            });
          }
        }]);

        return _InstitutionPageComponent;
      }(_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter);

      _InstitutionPageComponent.ɵfac = function InstitutionPageComponent_Factory(t) {
        return new (t || _InstitutionPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_institution_service__WEBPACK_IMPORTED_MODULE_2__.InstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
      };

      _InstitutionPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _InstitutionPageComponent,
        selectors: [["app-page"]],
        viewQuery: function InstitutionPageComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.DatatableComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.roleTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 41,
        vars: 27,
        consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ms-0", "mb-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], [1, "material", 3, "rows", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["sortable", "true", "prop", "name", 3, "name", "width"], ["ngx-datatable-cell-t-emplate", ""], ["sortable", "true", "prop", "address", 3, "name", "width"], ["ngx-datatable-cell-template", ""], ["sortable", "true", "prop", "managers", 3, "name", "width"], ["sortable", "true", "prop", "parent", 3, "name", "width"], ["name", "Actions", "sortable", "false", 3, "maxWidth"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "click"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]],
        template: function InstitutionPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function InstitutionPageComponent_Template_input_keyup_19_listener($event) {
              return ctx.filterDatatable($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ul", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InstitutionPageComponent_Template_button_click_22_listener() {
              return ctx.add();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ngx-datatable", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, InstitutionPageComponent_ng_template_29_Template, 1, 1, "ng-template", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "ngx-datatable-column", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, InstitutionPageComponent_ng_template_32_Template, 1, 1, "ng-template", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "ngx-datatable-column", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, InstitutionPageComponent_ng_template_35_Template, 1, 1, "ng-template", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "ngx-datatable-column", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, InstitutionPageComponent_ng_template_38_Template, 1, 1, "ng-template", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "ngx-datatable-column", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, InstitutionPageComponent_ng_template_40_Template, 7, 0, "ng-template", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 17, "training.configuration.list.facility"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", ctx.data)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "60")("limit", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 19, "Name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 21, "Address"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](34, 23, "Manager"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](37, 25, "Parent"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("maxWidth", 105);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.DataTableColumnCellDirective],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    26469:
    /*!*****************************************************!*\
      !*** ./src/app/core/models/security/institution.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Institution": function Institution() {
          return (
            /* binding */
            _Institution
          );
        }
        /* harmony export */

      });

      var _Institution = function _Institution(institution) {
        _classCallCheck(this, _Institution);

        {
          this.id = institution.id;
          this.name = institution.name;
          this.parent = institution.parent || null;
          this.textAddress = institution.textAddress || '';
          this.locationAddress = institution.locationAddress || null;
          this.managers = institution.managers || null;
        }
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_configuration_institution_institution_module_ts-es5.js.map