(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_admin_admin_module_ts"], {
    /***/
    13176:
    /*!***********************************************!*\
      !*** ./src/app/admin/admin-routing.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminRoutingModule": function AdminRoutingModule() {
          return (
            /* binding */
            _AdminRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng2-ch-401b22"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-bar_js"), __webpack_require__.e("default-node_modules_ngx-echarts___ivy_ngcc___fesm2015_ngx-echarts_js"), __webpack_require__.e("default-src_app_student_dashboard_dashboard_component_ts"), __webpack_require__.e("default-src_app_teacher_dashboard_dashboard_component_ts"), __webpack_require__.e("src_app_admin_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./dashboard/dashboard.module */
          31052)).then(function (m) {
            return m.DashboardModule;
          });
        }
      }, {
        path: 'teachers',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("src_app_admin_teachers_teachers_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./teachers/teachers.module */
          61863)).then(function (m) {
            return m.TeachersModule;
          });
        }
      }, {
        path: 'students',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("src_app_admin_students_students_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./students/students.module */
          46250)).then(function (m) {
            return m.StudentsModule;
          });
        }
      }, {
        path: 'courses',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("src_app_admin_courses_courses_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./courses/courses.module */
          58830)).then(function (m) {
            return m.CoursesModule;
          });
        }
      }, {
        path: 'library',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("src_app_admin_library_library_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./library/library.module */
          98632)).then(function (m) {
            return m.LibraryModule;
          });
        }
      }, {
        path: 'departments',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("src_app_admin_departments_departments_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./departments/departments.module */
          55491)).then(function (m) {
            return m.DepartmentsModule;
          });
        }
      }, {
        path: 'staff',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("src_app_admin_staff_staff_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./staff/staff.module */
          82318)).then(function (m) {
            return m.StaffModule;
          });
        }
      }, {
        path: 'holidays',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("src_app_admin_holidays_holidays_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./holidays/holidays.module */
          46319)).then(function (m) {
            return m.HolidaysModule;
          });
        }
      }, {
        path: 'fees',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("src_app_admin_fees_fees_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./fees/fees.module */
          45124)).then(function (m) {
            return m.FeesModule;
          });
        }
      }];

      var _AdminRoutingModule = function _AdminRoutingModule() {
        _classCallCheck(this, _AdminRoutingModule);
      };

      _AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) {
        return new (t || _AdminRoutingModule)();
      };

      _AdminRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _AdminRoutingModule
      });
      _AdminRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_AdminRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    77095:
    /*!***************************************!*\
      !*** ./src/app/admin/admin.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminModule": function AdminModule() {
          return (
            /* binding */
            _AdminModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-routing.module */
      13176);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AdminModule = function _AdminModule() {
        _classCallCheck(this, _AdminModule);
      };

      _AdminModule.ɵfac = function AdminModule_Factory(t) {
        return new (t || _AdminModule)();
      };

      _AdminModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _AdminModule
      });
      _AdminModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_AdminModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_admin_admin_module_ts-es5.js.map