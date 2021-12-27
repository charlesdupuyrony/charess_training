(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 13176:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": function() { return /* binding */ AdminRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);



const routes = [
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng2-ch-401b22"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-bar_js"), __webpack_require__.e("default-node_modules_ngx-echarts___ivy_ngcc___fesm2015_ngx-echarts_js"), __webpack_require__.e("default-src_app_student_dashboard_dashboard_component_ts"), __webpack_require__.e("default-src_app_teacher_dashboard_dashboard_component_ts"), __webpack_require__.e("src_app_admin_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 31052)).then((m) => m.DashboardModule),
    },
    {
        path: 'teachers',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("src_app_admin_teachers_teachers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./teachers/teachers.module */ 61863)).then((m) => m.TeachersModule),
    },
    {
        path: 'students',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("src_app_admin_students_students_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./students/students.module */ 46250)).then((m) => m.StudentsModule),
    },
    {
        path: 'courses',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("src_app_admin_courses_courses_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./courses/courses.module */ 58830)).then((m) => m.CoursesModule),
    },
    {
        path: 'library',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("src_app_admin_library_library_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./library/library.module */ 98632)).then((m) => m.LibraryModule),
    },
    {
        path: 'departments',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("src_app_admin_departments_departments_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./departments/departments.module */ 55491)).then((m) => m.DepartmentsModule),
    },
    {
        path: 'staff',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("src_app_admin_staff_staff_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./staff/staff.module */ 82318)).then((m) => m.StaffModule),
    },
    {
        path: 'holidays',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("src_app_admin_holidays_holidays_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./holidays/holidays.module */ 46319)).then((m) => m.HolidaysModule),
    },
    {
        path: 'fees',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("src_app_admin_fees_fees_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./fees/fees.module */ 45124)).then((m) => m.FeesModule),
    },
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 77095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": function() { return /* binding */ AdminModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 13176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);



class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts-es2015.js.map