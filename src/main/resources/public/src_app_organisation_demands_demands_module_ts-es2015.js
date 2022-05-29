(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_organisation_demands_demands_module_ts"],{

/***/ 46748:
/*!****************************************************************!*\
  !*** ./src/app/organisation/demands/demands-routing.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemandsRoutingModule": function() { return /* binding */ DemandsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _page_demands_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/demands.page.component */ 35264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: '',
        component: _page_demands_page_component__WEBPACK_IMPORTED_MODULE_0__.DemandsPageComponent,
    },
];
class DemandsRoutingModule {
}
DemandsRoutingModule.ɵfac = function DemandsRoutingModule_Factory(t) { return new (t || DemandsRoutingModule)(); };
DemandsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DemandsRoutingModule });
DemandsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DemandsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 43853:
/*!********************************************************!*\
  !*** ./src/app/organisation/demands/demands.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemandsModule": function() { return /* binding */ DemandsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-material-file-input */ 4904);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var _demands_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demands-routing.module */ 46748);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ 11436);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _page_demands_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/demands.page.component */ 35264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




























class DemandsModule {
}
DemandsModule.ɵfac = function DemandsModule_Factory(t) { return new (t || DemandsModule)(); };
DemandsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DemandsModule });
DemandsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule,
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_19__.MaterialFileInputModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_23__.NgxDatatableModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltipModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_26__.PerfectScrollbarModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__.NgbModule,
            _demands_routing_module__WEBPACK_IMPORTED_MODULE_0__.DemandsRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DemandsModule, { declarations: [_page_demands_page_component__WEBPACK_IMPORTED_MODULE_1__.DemandsPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule,
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_19__.MaterialFileInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_23__.NgxDatatableModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltipModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_26__.PerfectScrollbarModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__.NgbModule,
        _demands_routing_module__WEBPACK_IMPORTED_MODULE_0__.DemandsRoutingModule] }); })();


/***/ }),

/***/ 35264:
/*!*********************************************************************!*\
  !*** ./src/app/organisation/demands/page/demands.page.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemandsPageComponent": function() { return /* binding */ DemandsPageComponent; },
/* harmony export */   "Source": function() { return /* binding */ Source; }
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ 38345);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 96937);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 45094);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 33763);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 5207);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _core_service_training_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/service/training.service */ 29744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 29790);

















const _c0 = ["filter"];
function DemandsPageComponent_mat_header_cell_26_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DemandsPageComponent_mat_header_cell_26_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r23.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected())("ngClass", "tbl-checkbox");
} }
function DemandsPageComponent_mat_cell_27_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DemandsPageComponent_mat_cell_27_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function DemandsPageComponent_mat_cell_27_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const row_r25 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r27.selection.toggle(row_r25) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r25 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r25))("ngClass", "tbl-checkbox");
} }
function DemandsPageComponent_mat_header_cell_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Topic"));
} }
function DemandsPageComponent_mat_cell_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r29.topic == null ? null : row_r29.topic.title);
} }
function DemandsPageComponent_mat_header_cell_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Number of attendees"));
} }
function DemandsPageComponent_mat_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r30.numberOfAttendees);
} }
function DemandsPageComponent_mat_header_cell_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Start Date"));
} }
function DemandsPageComponent_mat_cell_36_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("contextmenu", function DemandsPageComponent_mat_cell_36_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const row_r31 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r32.onContextMenu($event, row_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, row_r31.startDate, "mediumDate"));
} }
function DemandsPageComponent_mat_header_cell_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "End Date"));
} }
function DemandsPageComponent_mat_cell_39_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("contextmenu", function DemandsPageComponent_mat_cell_39_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const row_r34 = restoredCtx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r35.onContextMenu($event, row_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, row_r34.endDate, "mediumDate"));
} }
function DemandsPageComponent_mat_header_cell_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Institution"));
} }
function DemandsPageComponent_mat_cell_42_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("contextmenu", function DemandsPageComponent_mat_cell_42_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const row_r37 = restoredCtx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r38.onContextMenu($event, row_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r37.requester.name);
} }
function DemandsPageComponent_mat_header_cell_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Creator"));
} }
function DemandsPageComponent_mat_cell_45_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("contextmenu", function DemandsPageComponent_mat_cell_45_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const row_r40 = restoredCtx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r41.onContextMenu($event, row_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r40.creator.person.fullname);
} }
function DemandsPageComponent_mat_header_cell_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Created"));
} }
function DemandsPageComponent_mat_cell_48_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("contextmenu", function DemandsPageComponent_mat_cell_48_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45); const row_r43 = restoredCtx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r44.onContextMenu($event, row_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, row_r43.created, "medium"));
} }
function DemandsPageComponent_mat_header_cell_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Status"));
} }
function DemandsPageComponent_mat_cell_51_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("contextmenu", function DemandsPageComponent_mat_cell_51_Template_mat_cell_contextmenu_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const row_r46 = restoredCtx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r47.onContextMenu($event, row_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r46 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r19.format(row_r46.status));
} }
function DemandsPageComponent_mat_header_row_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-header-row");
} }
function DemandsPageComponent_mat_row_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-row", 41);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("cursor", "pointer");
} }
const _c1 = function () { return [5, 10, 25, 100]; };
class DemandsPageComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(http) {
        super();
        this.http = http;
        this.displayedColumns = [
            'select',
            'topic',
            'attendee',
            'startDate',
            'endDate',
            'place',
            'status',
            'creator',
            'created'
        ];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.SelectionModel(true, []);
        this.contextMenuPosition = { x: '0px', y: '0px' };
    }
    load() {
        this.database = new _core_service_training_service__WEBPACK_IMPORTED_MODULE_1__.TrainingService(this.http);
        this.datasource = new Source(this.database, this.paginator, this.sort);
        this.subs.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.filter.nativeElement, 'keyup').subscribe(() => {
            if (!this.datasource)
                return;
            this.datasource.filter = this.filter.nativeElement.value;
        });
    }
    ngOnInit() {
        this.load();
    }
    format(o) {
        switch (o) {
            case 'TRAINING_REQUESTED': return 'Demandée';
            case 'TRAINING_VALIDATED': return 'Validée';
            case 'TRAINING_REJECTED': return 'Rejetée';
            case 'TRAINING_PENDING': return 'En cours';
            case 'TRAINING_COMPLETED': return 'Complétée';
            case 'TRAINING_UNCOMPLETED': return 'Inachevée';
        }
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.datasource.renderedData.length;
        return numSelected === numRows;
    }
    masterToggle() {
        this.isAllSelected() ? this.selection.clear() : this.datasource.renderedData.forEach((row) => this.selection.select(row));
    }
}
DemandsPageComponent.ɵfac = function DemandsPageComponent_Factory(t) { return new (t || DemandsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
DemandsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DemandsPageComponent, selectors: [["app-page"]], viewQuery: function DemandsPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.contextMenu = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 56, vars: 11, consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "size", "100", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"], ["filter", ""], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "topic"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "attendee"], ["matColumnDef", "startDate"], [3, "contextmenu", 4, "matCellDef"], ["matColumnDef", "endDate"], ["matColumnDef", "place"], ["matColumnDef", "creator"], ["matColumnDef", "created"], ["matColumnDef", "status"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "click", "change"], ["mat-sort-header", ""], [3, "contextmenu"], ["matRipple", ""]], template: function DemandsPageComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-table", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](25, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, DemandsPageComponent_mat_header_cell_26_Template, 2, 4, "mat-header-cell", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, DemandsPageComponent_mat_cell_27_Template, 2, 3, "mat-cell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](28, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, DemandsPageComponent_mat_header_cell_29_Template, 3, 3, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, DemandsPageComponent_mat_cell_30_Template, 2, 1, "mat-cell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](31, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, DemandsPageComponent_mat_header_cell_32_Template, 3, 3, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, DemandsPageComponent_mat_cell_33_Template, 2, 1, "mat-cell", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](34, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, DemandsPageComponent_mat_header_cell_35_Template, 3, 3, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, DemandsPageComponent_mat_cell_36_Template, 3, 4, "mat-cell", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](37, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, DemandsPageComponent_mat_header_cell_38_Template, 3, 3, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, DemandsPageComponent_mat_cell_39_Template, 3, 4, "mat-cell", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](40, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, DemandsPageComponent_mat_header_cell_41_Template, 3, 3, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, DemandsPageComponent_mat_cell_42_Template, 2, 1, "mat-cell", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](43, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, DemandsPageComponent_mat_header_cell_44_Template, 3, 3, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, DemandsPageComponent_mat_cell_45_Template, 2, 1, "mat-cell", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](46, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, DemandsPageComponent_mat_header_cell_47_Template, 3, 3, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, DemandsPageComponent_mat_cell_48_Template, 3, 4, "mat-cell", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](49, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, DemandsPageComponent_mat_header_cell_50_Template, 3, 3, "mat-header-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, DemandsPageComponent_mat_cell_51_Template, 2, 1, "mat-cell", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, DemandsPageComponent_mat_header_row_52_Template, 1, 0, "mat-header-row", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, DemandsPageComponent_mat_row_53_Template, 1, 2, "mat-row", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "mat-paginator", 34, 35);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 8, "training.partnership.demands"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.datasource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx.datasource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c1));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: [".mat-column-select[_ngcontent-%COMP%] {\n    flex: 0 0 4% !important;\n}\n\n.mat-column-topic[_ngcontent-%COMP%] {\n    flex: 0 0 27% !important;\n}\n\n.mat-column-place[_ngcontent-%COMP%] {\n    flex: 0 0 22% !important;\n}\n\n.mat-column-attendee[_ngcontent-%COMP%] {\n    flex: 0 0 6% !important;\n    justify-content: center;\n}\n\n.mat-column-status[_ngcontent-%COMP%] {\n    flex: 0 0 6% !important;\n}\n\n.mat-column-startDate[_ngcontent-%COMP%] {\n    flex: 0 0 6% !important;\n}\n\n.mat-column-endDate[_ngcontent-%COMP%] {\n    flex: 0 0 6% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbWFuZHMucGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJkZW1hbmRzLnBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY29sdW1uLXNlbGVjdCB7XG4gICAgZmxleDogMCAwIDQlICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLXRvcGljIHtcbiAgICBmbGV4OiAwIDAgMjclICFpbXBvcnRhbnQ7XG59XG4ubWF0LWNvbHVtbi1wbGFjZSB7XG4gICAgZmxleDogMCAwIDIyJSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNvbHVtbi1hdHRlbmRlZSB7XG4gICAgZmxleDogMCAwIDYlICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWF0LWNvbHVtbi1zdGF0dXMge1xuICAgIGZsZXg6IDAgMCA2JSAhaW1wb3J0YW50O1xufVxuLm1hdC1jb2x1bW4tc3RhcnREYXRlIHtcbiAgICBmbGV4OiAwIDAgNiUgIWltcG9ydGFudDtcbn1cbi5tYXQtY29sdW1uLWVuZERhdGUge1xuICAgIGZsZXg6IDAgMCA2JSAhaW1wb3J0YW50O1xufVxuIl19 */"] });
class Source extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.DataSource {
    constructor(service, paginator, ms) {
        super();
        this.service = service;
        this.paginator = paginator;
        this.ms = ms;
        this.filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject('');
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
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.merge)(...displayDataChanges).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(() => {
            this.filteredData = this.service.data
                .slice()
                .filter((t) => {
                var _a;
                const search = ((_a = t === null || t === void 0 ? void 0 : t.topic) === null || _a === void 0 ? void 0 : _a.title).toLowerCase();
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
            }
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return ((valueA < valueB ? -1 : 1) * (this.ms.direction === 'asc' ? 1 : -1));
        });
    }
}


/***/ })

}]);
//# sourceMappingURL=src_app_organisation_demands_demands_module_ts-es2015.js.map