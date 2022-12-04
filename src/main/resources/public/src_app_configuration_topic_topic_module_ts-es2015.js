(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_configuration_topic_topic_module_ts"],{

/***/ 91152:
/*!******************************************************************!*\
  !*** ./src/app/configuration/topic/page/topic.page.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopicPageComponent": function() { return /* binding */ TopicPageComponent; }
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var _form_topic_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form/topic.form.component */ 59894);
/* harmony import */ var _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _delete_delete_confirm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../delete/delete.confirm */ 80303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _topic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../topic.service */ 34052);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 29790);












const _c0 = ["roleTemplate"];
function TopicPageComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r5 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](value_r5);
} }
function TopicPageComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r8 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](value_r8 == null ? null : value_r8.title);
} }
function TopicPageComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopicPageComponent_ng_template_35_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const row_r11 = restoredCtx.row; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.edit(row_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopicPageComponent_ng_template_35_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const row_r11 = restoredCtx.row; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.delete(row_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class TopicPageComponent extends _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__.UnsubscribeOnDestroyAdapter {
    constructor(service, _snackBar, dialog) {
        super();
        this.service = service;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.rows = [];
        this.data = [];
        this.filteredData = [];
        this.columns = [
            { title: 'title' },
            { theme: 'theme' }
        ];
        this.dim = {
            width: '1000px',
            height: '380px'
        };
    }
    ngOnInit() {
        this.set();
    }
    set() {
        this.service.getAllTopics().subscribe(res => {
            this.data = res;
            this.filteredData = res;
        });
    }
    filterDatatable(event) {
        const val = event.target.value.toLowerCase();
        const cols = this.columns;
        const keys = Object.keys(this.filteredData[0]);
        this.data = this.filteredData.filter(function (item) {
            for (let i = 0; i < cols.length; i++) {
                if ((item[cols[i].title] && item[cols[i].title].toString().toLowerCase().indexOf(val) !== -1) || !val)
                    return true;
            }
        });
        this.table.offset = 0;
    }
    arrayRemove(array, id) {
        return array.filter(function (element) {
            return element.id != id;
        });
    }
    showNotification(colorName, text) {
        this._snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: "top",
            horizontalPosition: "right",
            panelClass: colorName,
        });
    }
    success(id) {
        this.data = this.arrayRemove(this.data, id);
        this.showNotification('bg-green', 'That record has been successfully deleted');
    }
    error(err) {
        this.showNotification('bg-red', 'That record is in use somewhere, you have to delete its dependance first!');
        console.error(err);
    }
    add() {
        const dialogRef = this.dialog.open(_form_topic_form_component__WEBPACK_IMPORTED_MODULE_0__.TopicFormComponent, Object.assign(Object.assign({}, this.dim), { data: {
                topic: this.topic,
                action: 'add',
            } }));
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                this.set();
            }
        });
    }
    edit(row) {
        const dialogRef = this.dialog.open(_form_topic_form_component__WEBPACK_IMPORTED_MODULE_0__.TopicFormComponent, Object.assign(Object.assign({}, this.dim), { data: {
                topic: row,
                action: 'edit',
            } }));
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                this.set();
            }
        });
    }
    delete(row) {
        const dialogRef = this.dialog.open(_delete_delete_confirm__WEBPACK_IMPORTED_MODULE_2__.DeleteComponent, {});
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                this.service.deleteTopic(row.id).subscribe(res => this.success(row.id), (err) => this.error(err));
                this.set();
            }
        });
    }
}
TopicPageComponent.ɵfac = function TopicPageComponent_Factory(t) { return new (t || TopicPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_topic_service__WEBPACK_IMPORTED_MODULE_3__.TopicService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
TopicPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TopicPageComponent, selectors: [["app-page"]], viewQuery: function TopicPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.roleTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 36, vars: 22, consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ms-0", "mb-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], [1, "material-icons", "search-icon"], ["type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "placeholder", "keyup"], [1, "header-buttons"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], [1, "material", 3, "rows", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["sortable", "true", "prop", "title", 3, "name", "width"], ["ngx-datatable-cell-template", ""], ["sortable", "true", "prop", "theme", 3, "name", "width"], ["name", "Actions", "sortable", "false", 3, "maxWidth"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "click"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"]], template: function TopicPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function TopicPageComponent_Template_input_keyup_19_listener($event) { return ctx.filterDatatable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopicPageComponent_Template_button_click_23_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ngx-datatable", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "ngx-datatable-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, TopicPageComponent_ng_template_30_Template, 1, 1, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, TopicPageComponent_ng_template_33_Template, 1, 1, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "ngx-datatable-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, TopicPageComponent_ng_template_35_Template, 7, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 14, "training.configuration.list.topic"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 16, "Search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx.data)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 18, "Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 20, "Theme"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("maxWidth", 105);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.DataTableColumnCellDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 83562:
/*!*************************************************************!*\
  !*** ./src/app/configuration/topic/topic-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopicRoutingModule": function() { return /* binding */ TopicRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _page_topic_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/topic.page.component */ 91152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: 'page',
        component: _page_topic_page_component__WEBPACK_IMPORTED_MODULE_0__.TopicPageComponent,
    },
];
class TopicRoutingModule {
}
TopicRoutingModule.ɵfac = function TopicRoutingModule_Factory(t) { return new (t || TopicRoutingModule)(); };
TopicRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TopicRoutingModule });
TopicRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TopicRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 46447:
/*!*****************************************************!*\
  !*** ./src/app/configuration/topic/topic.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopicModule": function() { return /* binding */ TopicModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-material-file-input */ 4904);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var _topic_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topic.service */ 34052);
/* harmony import */ var _topic_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topic-routing.module */ 83562);
/* harmony import */ var _page_topic_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/topic.page.component */ 91152);
/* harmony import */ var _form_topic_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/topic.form.component */ 59894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);



























class TopicModule {
}
TopicModule.ɵfac = function TopicModule_Factory(t) { return new (t || TopicModule)(); };
TopicModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TopicModule });
TopicModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_topic_service__WEBPACK_IMPORTED_MODULE_0__.TopicService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_21__.MaterialFileInputModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_25__.NgxDatatableModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__.MatAutocompleteModule,
            _topic_routing_module__WEBPACK_IMPORTED_MODULE_1__.TopicRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TopicModule, { declarations: [_page_topic_page_component__WEBPACK_IMPORTED_MODULE_2__.TopicPageComponent,
        _form_topic_form_component__WEBPACK_IMPORTED_MODULE_3__.TopicFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_21__.MaterialFileInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_25__.NgxDatatableModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__.MatAutocompleteModule,
        _topic_routing_module__WEBPACK_IMPORTED_MODULE_1__.TopicRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_configuration_topic_topic_module_ts-es2015.js.map