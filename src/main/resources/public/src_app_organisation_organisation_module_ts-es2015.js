(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_organisation_organisation_module_ts"],{

/***/ 59382:
/*!*************************************************************!*\
  !*** ./src/app/organisation/organisation-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganisationRoutingModule": function() { return /* binding */ OrganisationRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);



const routes = [
    {
        path: 'training',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_configuration_topic_form_topic_form_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_organisation_training_training_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./training/training.module */ 27642)).then((m) => m.TrainingModule),
    },
    {
        path: 'demands',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_organisation_demands_demands_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demands/demands.module */ 43853)).then((m) => m.DemandsModule),
    },
    {
        path: 'calendar',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_fullcalendar_angular___ivy_ngcc___fesm2015_fullcalendar-angular_js-node_-7d935a"), __webpack_require__.e("common"), __webpack_require__.e("src_app_organisation_calendar_calendar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./calendar/calendar.module */ 13976)).then((m) => m.CalendarModule)
    },
];
class OrganisationRoutingModule {
}
OrganisationRoutingModule.ɵfac = function OrganisationRoutingModule_Factory(t) { return new (t || OrganisationRoutingModule)(); };
OrganisationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OrganisationRoutingModule });
OrganisationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrganisationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 86479:
/*!*****************************************************!*\
  !*** ./src/app/organisation/organisation.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganisationModule": function() { return /* binding */ OrganisationModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-material-file-input */ 4904);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var _organisation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organisation-routing.module */ 59382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
























class OrganisationModule {
}
OrganisationModule.ɵfac = function OrganisationModule_Factory(t) { return new (t || OrganisationModule)(); };
OrganisationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OrganisationModule });
OrganisationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__.MatTabsModule,
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_18__.MaterialFileInputModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__.NgxDatatableModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteModule,
            _organisation_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrganisationRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrganisationModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__.MatTabsModule,
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_18__.MaterialFileInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__.NgxDatatableModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteModule,
        _organisation_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrganisationRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_organisation_organisation_module_ts-es2015.js.map