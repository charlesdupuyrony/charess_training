(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_organisation_training_training_module_ts"],{

/***/ 25618:
/*!*******************************************************************************************************!*\
  !*** ./src/app/organisation/training/broadcast-completion/training.broadcast.completion.component.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingBroadcastCompletionComponent": function() { return /* binding */ TrainingBroadcastCompletionComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 29790);



class TrainingBroadcastCompletionComponent {
    constructor(router) {
        var _a, _b;
        this.router = router;
        const tn = (_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.training;
        this._msg = `You have successfully broadcast the training: "${(_b = tn === null || tn === void 0 ? void 0 : tn.topic) === null || _b === void 0 ? void 0 : _b.title}", scheduled from ${tn === null || tn === void 0 ? void 0 : tn.startDate} to ${tn === null || tn === void 0 ? void 0 : tn.endDate}`;
    }
    get msg() {
        return this._msg;
    }
    ngOnInit() { }
    go(e) {
        this.router.navigate(['/organisation/training/broadcast']);
    }
}
TrainingBroadcastCompletionComponent.ɵfac = function TrainingBroadcastCompletionComponent_Factory(t) { return new (t || TrainingBroadcastCompletionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
TrainingBroadcastCompletionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrainingBroadcastCompletionComponent, selectors: [["app-form"]], decls: 18, vars: 10, consts: [[1, "content"], [1, "broadcast"], [2, "text-align", "center"], [3, "click"]], template: function TrainingBroadcastCompletionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Go to: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrainingBroadcastCompletionComponent_Template_span_click_7_listener() { return ctx.go("list"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrainingBroadcastCompletionComponent_Template_span_click_11_listener() { return ctx.go("new"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrainingBroadcastCompletionComponent_Template_span_click_15_listener() { return ctx.go("planning"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, "Training List"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, "New Broadcast"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 8, "Planning"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".broadcast[_ngcontent-%COMP%] {\n  text-align: center;\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluaW5nLmJyb2FkY2FzdC5jb21wbGV0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoidHJhaW5pbmcuYnJvYWRjYXN0LmNvbXBsZXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJvYWRjYXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogZ3JlZW47XG4gIC8vZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"] });


/***/ }),

/***/ 30261:
/*!*********************************************************************************!*\
  !*** ./src/app/organisation/training/broadcast/training.broadcast.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingBroadcastComponent": function() { return /* binding */ TrainingBroadcastComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 69978);
/* harmony import */ var _core_models_training_training__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/models/training/training */ 60599);
/* harmony import */ var _configuration_topic_form_topic_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../configuration/topic/form/topic.form.component */ 59894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _training_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../training.service */ 64821);
/* harmony import */ var _configuration_topic_topic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configuration/topic/topic.service */ 34052);
/* harmony import */ var _configuration_institution_institution_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configuration/institution/institution.service */ 85848);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 29790);























function TrainingBroadcastComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", t_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r18.fullname);
} }
function TrainingBroadcastComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "This field is required"));
} }
function TrainingBroadcastComponent_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "This field is required"));
} }
function TrainingBroadcastComponent_mat_error_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "This field is required"));
} }
function TrainingBroadcastComponent_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "End Date needs to be greater than first date"));
} }
function TrainingBroadcastComponent_mat_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", l_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](l_r19.name);
} }
function TrainingBroadcastComponent_mat_error_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "This field is required"));
} }
function TrainingBroadcastComponent_mat_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", c_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](c_r20.name);
} }
function TrainingBroadcastComponent_mat_error_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "This field is required"));
} }
function TrainingBroadcastComponent_mat_error_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "This field is required"));
} }
function TrainingBroadcastComponent_mat_option_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", p_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](p_r21.name);
} }
function TrainingBroadcastComponent_mat_error_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "This field is required"));
} }
function TrainingBroadcastComponent_mat_error_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "This field is required"));
} }
function TrainingBroadcastComponent_mat_error_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "This field is required"));
} }
class TrainingBroadcastComponent {
    constructor(fb, router, service, topicService, placeService, snack, dialog) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.topicService = topicService;
        this.placeService = placeService;
        this.snack = snack;
        this.dialog = dialog;
        this.topic = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
        this.topicArray = [];
        this.location = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
        this.locationArray = [];
        this.categories = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
        this.categoryArray = [];
        this.partners = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
        this.partnerArray = [];
        this.dim = {
            width: '1000px',
            height: '380px'
        };
        this.fg = this.fb.group(new _core_models_training_training__WEBPACK_IMPORTED_MODULE_0__.Training({}), { validator: this.datesValidator('startDate', 'endDate') });
    }
    ngOnInit() {
        this.topics = this.topic.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(value => {
            if (typeof value === 'string' && value.trim().length < 1)
                return [];
            this.service.getTopics(typeof value === 'string' ? value.toLowerCase() : value.name).subscribe((res) => {
                this.topicArray = res;
            });
            return this.topicArray;
        }));
        this.locations = this.location.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(value => {
            if (typeof value === 'string' && value.trim().length < 1)
                return [];
            this.service.getLocations(typeof value === 'string' ? value.toLowerCase() : value.name).subscribe((res) => {
                this.locationArray = res;
            });
            return this.locationArray;
        }));
        this.service.getCategories('').subscribe((res) => {
            this.categoryArray = res;
        });
        this.placeService.getPlaces('').subscribe((res) => {
            this.partnerArray = res;
        });
    }
    datesValidator(startDate, endDate) {
        return (formGroup) => {
            const start = formGroup.controls[startDate];
            const end = formGroup.controls[endDate];
            if (end.errors && !end.errors.datesValidator) {
                return;
            }
            if (new Date(start.value) > new Date(end.value)) {
                end.setErrors({ datesValidator: true });
            }
            else {
                end.setErrors(null);
            }
        };
    }
    // updatePartners(){
    //     if(this.partnerArray.length > 0 && typeof this.location.value !='string'){
    //         this.partnerArray = this.partnerArray.filter(p => p.id != this.location.value?.id);
    //     }
    // }
    completion(t) {
        // this.router.navigate(['/organisation/training/broadcast-completion'], {state: {training: t}});
        this.router.navigate(['/organisation/training/page']);
    }
    initialize() { }
    toast(color, text) {
        this.snack.open(text, '', {
            duration: 2000, verticalPosition: 'top', horizontalPosition: 'right', panelClass: color,
        });
    }
    success(t) {
        this.toast('bg-green', 'The user has been successfully created');
        this.completion(t);
    }
    error(err) {
        this.toast('bg-red', 'Something went wrong the usr has not been created. Please, try again!');
        console.error(err);
    }
    display(ob) {
        if (!ob)
            return;
        return ob.fullname ? ob.fullname : (ob.name ? ob.name : ob.title);
    }
    submit(ob) {
        ob.topic = this.topic.value;
        ob.location = this.location.value;
        ob.categories = this.categories.value;
        ob.partners = this.partners.value;
        this.service.broadcast(ob).subscribe((res) => this.success(res), (err) => this.error(err));
    }
    cancel() {
        // this.fm.close();
    }
    add() {
        const dialogRef = this.dialog.open(_configuration_topic_form_topic_form_component__WEBPACK_IMPORTED_MODULE_1__.TopicFormComponent, Object.assign(Object.assign({}, this.dim), { data: {
                topic: this.topic,
                action: 'add',
            } }));
    }
}
TrainingBroadcastComponent.ɵfac = function TrainingBroadcastComponent_Factory(t) { return new (t || TrainingBroadcastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_training_service__WEBPACK_IMPORTED_MODULE_2__.TrainingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_configuration_topic_topic_service__WEBPACK_IMPORTED_MODULE_3__.TopicService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_configuration_institution_institution_service__WEBPACK_IMPORTED_MODULE_4__.InstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog)); };
TrainingBroadcastComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TrainingBroadcastComponent, selectors: [["app-form"]], decls: 121, vars: 73, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "page-title"], [1, "row", "clearfix"], [1, "card"], [1, "body"], [3, "formGroup", "submit"], [1, "col-11"], ["appearance", "outline", 1, "example-full-width"], ["type", "text", "matInput", "", "required", "", 3, "formControl", "matAutocomplete"], ["autoActiveFirstOption", "", 3, "displayWith"], ["autoTopic", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-1", "add-button-training", 3, "click"], ["mat-mini-fab", "", "color", "primary", "type", "button"], [1, "col-white"], [1, "col-2"], ["matInput", "", "formControlName", "startDate", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["start", ""], ["matInput", "", "formControlName", "endDate", "required", "", 3, "matDatepicker"], ["end", ""], [1, "col-8"], ["autoLocation", "matAutocomplete"], [1, "col-9"], ["multiple", "", "required", "", 3, "formControl"], [1, "col-3"], ["matInput", "", "formControlName", "capacity", "required", ""], [1, "col-12"], ["formControlName", "mode", "required", ""], [3, "value"], ["formControlName", "testType", "required", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "type", "disabled"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"]], template: function TrainingBroadcastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function TrainingBroadcastComponent_Template_form_submit_13_listener() { return ctx.submit(ctx.fg.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-autocomplete", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, TrainingBroadcastComponent_mat_option_23_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, TrainingBroadcastComponent_mat_error_25_Template, 3, 3, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrainingBroadcastComponent_Template_div_click_26_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "mat-datepicker-toggle", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "mat-datepicker", null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, TrainingBroadcastComponent_mat_error_40_Template, 3, 3, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "mat-datepicker-toggle", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "mat-datepicker", null, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, TrainingBroadcastComponent_mat_error_50_Template, 3, 3, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, TrainingBroadcastComponent_mat_error_51_Template, 3, 3, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "mat-autocomplete", 13, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, TrainingBroadcastComponent_mat_option_60_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](61, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, TrainingBroadcastComponent_mat_error_62_Template, 3, 3, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "mat-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, TrainingBroadcastComponent_mat_option_70_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](71, TrainingBroadcastComponent_mat_error_71_Template, 3, 3, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](77, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](78, TrainingBroadcastComponent_mat_error_78_Template, 3, 3, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "mat-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](86, TrainingBroadcastComponent_mat_option_86_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](87, TrainingBroadcastComponent_mat_error_87_Template, 3, 3, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "mat-select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "mat-option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "En pr\u00E9sentiel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "mat-option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "En ligne");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](99, TrainingBroadcastComponent_mat_error_99_Template, 3, 3, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "mat-select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "mat-option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "Auto \u00C9valuation");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "mat-option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109, "Pr\u00E9 et Post Tests");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](110, TrainingBroadcastComponent_mat_error_110_Template, 3, 3, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrainingBroadcastComponent_Template_button_click_118_listener() { return ctx.initialize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](39);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](49);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 45, "training.organisation.broadcast"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.fg);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 47, "Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.topic)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("displayWith", ctx.display);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 49, ctx.topics));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.topic.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](35, 51, "Start Date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fg.get("startDate").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](45, 53, "End Date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fg.get("endDate").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fg.get("endDate").hasError("datesValidator"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](56, 55, "Where to"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.location)("matAutocomplete", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("displayWith", ctx.display);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](61, 57, ctx.locations));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.location.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](68, 59, "Participants Category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.categoryArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.categories.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](76, 61, "Number of attendees"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fg.get("capacity").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](84, 63, "Partners"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.partners);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.partnerArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.partners.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](93, 65, "Mode Transmission"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "MODE_ON_SITE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "MODE_ON_LINE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fg.get("mode").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](104, 67, "Test Type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "TEST_TYPE_AUTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "TEST_TYPE_PRE_AND_POST");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fg.get("testType").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.submit)("disabled", !ctx.fg.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](117, 69, "Save"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](120, 71, "Reinitialize"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepicker, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe], styles: [".add-button-training[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluaW5nLmJyb2FkY2FzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSiIsImZpbGUiOiJ0cmFpbmluZy5icm9hZGNhc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWJ1dHRvbi10cmFpbmluZyB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 9577:
/*!***********************************************************************!*\
  !*** ./src/app/organisation/training/page/training.page.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingPageComponent": function() { return /* binding */ TrainingPageComponent; },
/* harmony export */   "Source": function() { return /* binding */ Source; }
/* harmony export */ });
/* harmony import */ var _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ 38345);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 96937);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 45094);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 33763);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 5207);
/* harmony import */ var _training_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../training.service */ 64821);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 29790);





















const _c0 = ["filter"];
function TrainingPageComponent_mat_header_cell_27_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TrainingPageComponent_mat_header_cell_27_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r19.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected())("ngClass", "tbl-checkbox");
} }
function TrainingPageComponent_mat_cell_28_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TrainingPageComponent_mat_cell_28_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function TrainingPageComponent_mat_cell_28_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const row_r21 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r23.selection.toggle(row_r21) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r21))("ngClass", "tbl-checkbox");
} }
function TrainingPageComponent_mat_header_cell_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Theme"));
} }
function TrainingPageComponent_mat_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r25.topic.fullname);
} }
function TrainingPageComponent_mat_header_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Start Date"));
} }
function TrainingPageComponent_mat_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r26.startDate);
} }
function TrainingPageComponent_mat_header_cell_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "End Date"));
} }
function TrainingPageComponent_mat_cell_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r27.endDate);
} }
function TrainingPageComponent_mat_header_cell_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Number of attendees"));
} }
function TrainingPageComponent_mat_cell_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r28.capacity);
} }
function TrainingPageComponent_mat_header_cell_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Number of networks"));
} }
function TrainingPageComponent_mat_cell_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r29.partners.length);
} }
function TrainingPageComponent_mat_header_cell_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Training Location"));
} }
function TrainingPageComponent_mat_cell_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r30.location.name);
} }
function TrainingPageComponent_mat_header_row_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-header-row");
} }
function TrainingPageComponent_mat_row_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-row", 37);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("cursor", "pointer");
} }
const _c1 = function () { return [5, 10, 25, 100]; };
class TrainingPageComponent extends _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(http, dialog, snack, factory, router) {
        super();
        this.http = http;
        this.dialog = dialog;
        this.snack = snack;
        this.factory = factory;
        this.router = router;
        this.displayedColumns = [
            'topic',
            'startDate',
            'endDate',
            'capacity',
            'network',
            'location'
            // 'categories',
            // 'partners',
            // 'actions',
        ];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.SelectionModel(true, []);
        this.profiles = [];
        this.dim = {
            width: '1200px',
            height: '420px'
        };
        this.contextMenuPosition = { x: '0px', y: '0px' };
    }
    load() {
        this.database = new _training_service__WEBPACK_IMPORTED_MODULE_1__.TrainingService(this.http);
        this.datasource = new Source(this.database, this.paginator, this.sort);
        this.subs.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.filter.nativeElement, 'keyup').subscribe(() => {
            if (!this.datasource) {
                return;
            }
            this.datasource.filter = this.filter.nativeElement.value;
        });
    }
    ngOnInit() {
        this.load();
    }
    toast(color, text) {
        this.snack.open(text, '', {
            duration: 2000, verticalPosition: 'top', horizontalPosition: 'right', panelClass: color,
        });
    }
    success() {
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/organisation/training/page']);
        });
        this.toast('bg-green', 'That record has been successfully deleted');
    }
    error(err) {
        this.toast('bg-red', 'That record is in use somewhere, you have to delete its dependance first!');
        console.error(err);
    }
    // add(){
    //     this.router.navigate(['configuration/Training/form']);
    // }
    // edit(row){
    //     this.router.navigate(['configuration/Training/form'],{state:{place: row}});
    // }
    // delete(row): void {
    //     const dialogRef = this.dialog.open(DeleteComponent, {});
    //     this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
    //         if (result === 1) {
    //             this.factory.deleteTraining(row.id).subscribe(
    //                 (res) => this.success(),
    //                 (err: HttpErrorResponse)=>this.error(err)
    //             );
    //             this.load();
    //         }
    //     });
    // }
    displayManagers(managers) {
        let display = '';
        if (managers.length > 0) {
            if (managers.length == 1) {
                display = managers[0].fullname;
            }
            else if (managers.length == 2) {
                display = managers[0].fullname + ' & ' + managers[1].fullname;
            }
            else {
                display = managers[0].fullname + ' & ' + (managers.length - 1) + ' autres';
            }
        }
        return display;
    }
}
TrainingPageComponent.ɵfac = function TrainingPageComponent_Factory(t) { return new (t || TrainingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_training_service__WEBPACK_IMPORTED_MODULE_1__.TrainingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
TrainingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TrainingPageComponent, selectors: [["app-page"]], viewQuery: function TrainingPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuTrigger, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.contextMenu = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 51, vars: 11, consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"], ["filter", ""], [1, "header-buttons"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "topic"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "startDate"], ["matColumnDef", "endDate"], ["matColumnDef", "capacity"], ["matColumnDef", "network"], ["matColumnDef", "location"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "click", "change"], ["mat-sort-header", ""], ["matRipple", ""]], template: function TrainingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-table", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, TrainingPageComponent_mat_header_cell_27_Template, 2, 4, "mat-header-cell", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, TrainingPageComponent_mat_cell_28_Template, 2, 3, "mat-cell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](29, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, TrainingPageComponent_mat_header_cell_30_Template, 3, 3, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, TrainingPageComponent_mat_cell_31_Template, 2, 1, "mat-cell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](32, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, TrainingPageComponent_mat_header_cell_33_Template, 3, 3, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, TrainingPageComponent_mat_cell_34_Template, 2, 1, "mat-cell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](35, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, TrainingPageComponent_mat_header_cell_36_Template, 3, 3, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, TrainingPageComponent_mat_cell_37_Template, 2, 1, "mat-cell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](38, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, TrainingPageComponent_mat_header_cell_39_Template, 3, 3, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, TrainingPageComponent_mat_cell_40_Template, 2, 1, "mat-cell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](41, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, TrainingPageComponent_mat_header_cell_42_Template, 3, 3, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, TrainingPageComponent_mat_cell_43_Template, 2, 1, "mat-cell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](44, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, TrainingPageComponent_mat_header_cell_45_Template, 3, 3, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, TrainingPageComponent_mat_cell_46_Template, 2, 1, "mat-cell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, TrainingPageComponent_mat_header_row_47_Template, 1, 0, "mat-header-row", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, TrainingPageComponent_mat_row_48_Template, 1, 2, "mat-row", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "mat-paginator", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 8, "training.page"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.datasource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx.datasource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c1));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRow], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-column-topic[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 39.5% !important;\n  width: 40% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-startDate[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 7.5% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-endDate[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 7.5% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-capacity[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 9.5% !important;\n  width: 10% !important;\n  text-align: center;\n  justify-content: center;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-network[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 6.5% !important;\n  width: 7% !important;\n  text-align: center;\n  justify-content: center;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-location[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 26.5% !important;\n  width: 27% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluaW5nLnBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBRUEscUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBRUEscUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBRUEscUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUVBLHFCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJ0cmFpbmluZy5wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWNvbHVtbi10b3BpYyB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDM5LjUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA0MCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLXN0YXJ0RGF0ZSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDcuNSUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4ubWF0LWNvbHVtbi1lbmREYXRlIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgNy41JSAhaW1wb3J0YW50O1xuICB3aWR0aDogOCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLWNhcGFjaXR5IHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgOS41JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4ubWF0LWNvbHVtbi1uZXR3b3JrIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgNi41JSAhaW1wb3J0YW50O1xuICB3aWR0aDogNyUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLWxvY2F0aW9uIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMjYuNSUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDI3JSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cbiJdfQ== */"] });
class Source extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.DataSource {
    constructor(service, paginator, ms) {
        super();
        this.service = service;
        this.paginator = paginator;
        this.ms = ms;
        this.filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_16__.BehaviorSubject('');
        this.filteredData = [];
        this.renderedData = [];
        this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
    }
    get filter() {
        return this.filterChange.value;
    }
    set filter(filter) {
        this.filterChange.next(filter);
    }
    connect() {
        const displayDataChanges = [
            this.service.dataChange,
            this.ms.sortChange,
            this.filterChange,
            this.paginator.page,
        ];
        this.service.getTrainings();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.merge)(...displayDataChanges).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(() => {
            this.filteredData = this.service.data
                .slice()
                .filter((training) => {
                const search = (training.topic.title).toLowerCase();
                return search.indexOf(this.filter.toLowerCase()) !== -1;
            });
            const sortedData = this.sortData(this.filteredData.slice());
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            this.renderedData = sortedData.splice(startIndex, this.paginator.pageSize);
            return this.renderedData;
        }));
    }
    disconnect() { }
    sortData(data) {
        if (!this.ms.active || this.ms.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            let propertyA = '';
            let propertyB = '';
            switch (this.ms.active) {
                case 'id':
                    [propertyA, propertyB] = [a.id, b.id];
                    break;
                case 'name':
                    [propertyA, propertyB] = [a.topic.title, b.topic.title];
                    break;
            }
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return ((valueA < valueB ? -1 : 1) * (this.ms.direction === 'asc' ? 1 : -1));
        });
    }
}


/***/ }),

/***/ 4533:
/*!******************************************************************!*\
  !*** ./src/app/organisation/training/training-routing.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingRoutingModule": function() { return /* binding */ TrainingRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _broadcast_training_broadcast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./broadcast/training.broadcast.component */ 30261);
/* harmony import */ var _broadcast_completion_training_broadcast_completion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./broadcast-completion/training.broadcast.completion.component */ 25618);
/* harmony import */ var _page_training_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/training.page.component */ 9577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);






const routes = [
    {
        path: 'broadcast',
        component: _broadcast_training_broadcast_component__WEBPACK_IMPORTED_MODULE_0__.TrainingBroadcastComponent,
    },
    {
        path: 'page',
        component: _page_training_page_component__WEBPACK_IMPORTED_MODULE_2__.TrainingPageComponent,
    },
    {
        path: 'broadcast-completion',
        component: _broadcast_completion_training_broadcast_completion_component__WEBPACK_IMPORTED_MODULE_1__.TrainingBroadcastCompletionComponent,
    },
];
class TrainingRoutingModule {
}
TrainingRoutingModule.ɵfac = function TrainingRoutingModule_Factory(t) { return new (t || TrainingRoutingModule)(); };
TrainingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TrainingRoutingModule });
TrainingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TrainingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 27642:
/*!**********************************************************!*\
  !*** ./src/app/organisation/training/training.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingModule": function() { return /* binding */ TrainingModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-material-file-input */ 4904);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-mask */ 69129);
/* harmony import */ var _broadcast_training_broadcast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./broadcast/training.broadcast.component */ 30261);
/* harmony import */ var _training_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-routing.module */ 4533);
/* harmony import */ var _training_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training.service */ 64821);
/* harmony import */ var _configuration_institution_institution_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configuration/institution/institution.service */ 85848);
/* harmony import */ var _broadcast_completion_training_broadcast_completion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./broadcast-completion/training.broadcast.completion.component */ 25618);
/* harmony import */ var _page_training_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/training.page.component */ 9577);
/* harmony import */ var _configuration_topic_topic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../configuration/topic/topic.service */ 34052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);































class TrainingModule {
}
TrainingModule.ɵfac = function TrainingModule_Factory(t) { return new (t || TrainingModule)(); };
TrainingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: TrainingModule });
TrainingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_training_service__WEBPACK_IMPORTED_MODULE_2__.TrainingService, _configuration_institution_institution_service__WEBPACK_IMPORTED_MODULE_3__.InstitutionService, _configuration_topic_topic_service__WEBPACK_IMPORTED_MODULE_6__.TopicService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__.MatToolbarModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabsModule,
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_24__.MaterialFileInputModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__.MatProgressSpinnerModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateModule,
            _training_routing_module__WEBPACK_IMPORTED_MODULE_1__.TrainingRoutingModule,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_28__.NgxDatatableModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_29__.NgxMaskModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__.MatAutocompleteModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](TrainingModule, { declarations: [_broadcast_training_broadcast_component__WEBPACK_IMPORTED_MODULE_0__.TrainingBroadcastComponent,
        _broadcast_completion_training_broadcast_completion_component__WEBPACK_IMPORTED_MODULE_4__.TrainingBroadcastCompletionComponent,
        _page_training_page_component__WEBPACK_IMPORTED_MODULE_5__.TrainingPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__.MatToolbarModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabsModule,
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_24__.MaterialFileInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__.MatProgressSpinnerModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateModule,
        _training_routing_module__WEBPACK_IMPORTED_MODULE_1__.TrainingRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_28__.NgxDatatableModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_29__.NgxMaskModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__.MatAutocompleteModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_organisation_training_training_module_ts-es2015.js.map