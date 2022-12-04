(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./authentication/page404/page404.component */
      1991);
      /* harmony import */


      var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layout/app-layout/auth-layout/auth-layout.component */
      17050);
      /* harmony import */


      var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout/app-layout/main-layout/main-layout.component */
      9899);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core/guard/auth.guard */
      19390);
      /* harmony import */


      var _core_models_security_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./core/models/security/role */
      66314);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__.MainLayoutComponent,
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
        children: [{
          path: '',
          redirectTo: '/authentication/signin',
          pathMatch: 'full'
        }, {
          path: 'organisation',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            roles: [_core_models_security_role__WEBPACK_IMPORTED_MODULE_4__.Role.SUPER, _core_models_security_role__WEBPACK_IMPORTED_MODULE_4__.Role.ADMIN, _core_models_security_role__WEBPACK_IMPORTED_MODULE_4__.Role.ORGANISER]
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("src_app_organisation_organisation_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./organisation/organisation.module */
            86479)).then(function (m) {
              return m.OrganisationModule;
            });
          }
        }, {
          path: 'partnership',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            roles: [_core_models_security_role__WEBPACK_IMPORTED_MODULE_4__.Role.SUPER, _core_models_security_role__WEBPACK_IMPORTED_MODULE_4__.Role.PARTNER]
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_partnership_partnership_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./partnership/partnership.module */
            78995)).then(function (m) {
              return m.PartnershipModule;
            });
          }
        }, {
          path: 'configuration',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            roles: [_core_models_security_role__WEBPACK_IMPORTED_MODULE_4__.Role.SUPER, _core_models_security_role__WEBPACK_IMPORTED_MODULE_4__.Role.ADMIN]
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("src_app_configuration_configuration_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./configuration/configuration.module */
            55062)).then(function (m) {
              return m.ConfigurationModule;
            });
          }
        }, {
          path: 'admin',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            roles: [_core_models_security_role__WEBPACK_IMPORTED_MODULE_4__.Role.SUPER, _core_models_security_role__WEBPACK_IMPORTED_MODULE_4__.Role.ADMIN]
          },
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./admin/admin.module */
            77095)).then(function (m) {
              return m.AdminModule;
            });
          }
        }, {
          path: 'teacher',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: _core_models_security_role__WEBPACK_IMPORTED_MODULE_4__.Role.TRAINER
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng2-ch-401b22"), __webpack_require__.e("default-node_modules_ngx-echarts___ivy_ngcc___fesm2015_ngx-echarts_js"), __webpack_require__.e("default-src_app_teacher_dashboard_dashboard_component_ts"), __webpack_require__.e("src_app_teacher_teacher_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./teacher/teacher.module */
            33042)).then(function (m) {
              return m.TeacherModule;
            });
          }
        }, {
          path: 'student',
          canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          data: {
            role: _core_models_security_role__WEBPACK_IMPORTED_MODULE_4__.Role.ATTENDEE
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng2-ch-401b22"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-bar_js"), __webpack_require__.e("default-node_modules_ngx-echarts___ivy_ngcc___fesm2015_ngx-echarts_js"), __webpack_require__.e("default-src_app_student_dashboard_dashboard_component_ts"), __webpack_require__.e("src_app_student_student_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./student/student.module */
            47859)).then(function (m) {
              return m.StudentModule;
            });
          }
        }, // Extra components
        {
          path: 'calendar',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_fullcalendar_angular___ivy_ngcc___fesm2015_fullcalendar-angular_js-node_-7d935a"), __webpack_require__.e("src_app_calendar_calendar_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./calendar/calendar.module */
            979)).then(function (m) {
              return m.CalendarsModule;
            });
          }
        }, {
          path: 'task',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sidenav_js"), __webpack_require__.e("default-node_modules_angular_cdk___ivy_ngcc___fesm2015_drag-drop_js"), __webpack_require__.e("src_app_task_task_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./task/task.module */
            23917)).then(function (m) {
              return m.TaskModule;
            });
          }
        }, {
          path: 'contacts',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("src_app_contacts_contacts_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./contacts/contacts.module */
            6808)).then(function (m) {
              return m.ContactsModule;
            });
          }
        }, {
          path: 'email',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angu-956b01"), __webpack_require__.e("src_app_email_email_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./email/email.module */
            57727)).then(function (m) {
              return m.EmailModule;
            });
          }
        }, {
          path: 'apps',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sidenav_js"), __webpack_require__.e("default-node_modules_angular_cdk___ivy_ngcc___fesm2015_drag-drop_js"), __webpack_require__.e("src_app_apps_apps_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./apps/apps.module */
            99269)).then(function (m) {
              return m.AppsModule;
            });
          }
        }, {
          path: 'widget',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng2-ch-401b22"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-bar_js"), __webpack_require__.e("default-node_modules_angular_cdk___ivy_ngcc___fesm2015_drag-drop_js"), __webpack_require__.e("src_app_widget_widget_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./widget/widget.module */
            88503)).then(function (m) {
              return m.WidgetModule;
            });
          }
        }, {
          path: 'ui',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-spinner_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sidenav_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_progress-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_slider_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_expansion_js"), __webpack_require__.e("src_app_ui_ui_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./ui/ui.module */
            28086)).then(function (m) {
              return m.UiModule;
            });
          }
        }, {
          path: 'forms',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sort_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_toolbar_js-node_modules_ngx-mater-be9d83"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_sidenav_js"), __webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angu-956b01"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_slider_js"), __webpack_require__.e("src_app_forms_forms_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./forms/forms.module */
            71366)).then(function (m) {
              return m.FormModule;
            });
          }
        }, {
          path: 'tables',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-7ead80"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("src_app_tables_tables_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./tables/tables.module */
            81439)).then(function (m) {
              return m.TablesModule;
            });
          }
        }, {
          path: 'media',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_media_media_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./media/media.module */
            51173)).then(function (m) {
              return m.MediaModule;
            });
          }
        }, {
          path: 'charts',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng2-ch-401b22"), __webpack_require__.e("default-node_modules_ngx-echarts___ivy_ngcc___fesm2015_ngx-echarts_js"), __webpack_require__.e("src_app_charts_charts_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./charts/charts.module */
            55108)).then(function (m) {
              return m.ChartsModule;
            });
          }
        }, {
          path: 'timeline',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_timeline_timeline_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./timeline/timeline.module */
            6159)).then(function (m) {
              return m.TimelineModule;
            });
          }
        }, {
          path: 'icons',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_icons_icons_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./icons/icons.module */
            74115)).then(function (m) {
              return m.IconsModule;
            });
          }
        }, {
          path: 'extra-pages',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_expansion_js"), __webpack_require__.e("src_app_extra-pages_extra-pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./extra-pages/extra-pages.module */
            95859)).then(function (m) {
              return m.ExtraPagesModule;
            });
          }
        }, {
          path: 'maps',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_maps_maps_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./maps/maps.module */
            83842)).then(function (m) {
              return m.MapsModule;
            });
          }
        }, {
          path: 'multilevel',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_multilevel_multilevel_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./multilevel/multilevel.module */
            96895)).then(function (m) {
              return m.MultilevelModule;
            });
          }
        }]
      }, {
        path: 'authentication',
        component: _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__.AuthLayoutComponent,
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_authentication_authentication_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./authentication/authentication.module */
          41082)).then(function (m) {
            return m.AuthenticationModule;
          });
        }
      }, {
        path: '**',
        component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__.Page404Component
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-spinner */
      95593);
      /* harmony import */


      var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layout/page-loader/page-loader.component */
      66105);

      var _AppComponent = function _AppComponent(_router, location, spinner) {
        var _this2 = this;

        _classCallCheck(this, _AppComponent);

        this._router = _router;
        this.spinner = spinner;

        this._router.events.subscribe(function (routerEvent) {
          if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
            _this2.spinner.show();

            _this2.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf('/') + 1);
          }

          if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
            _this2.spinner.hide();
          }

          window.scrollTo(0, 0);
        });
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.PlatformLocation), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-loader");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_0__.PageLoaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "createTranslateLoader": function createTranslateLoader() {
          return (
            /* binding */
            _createTranslateLoader
          );
        },

        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core/core.module */
      40294);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/shared.module */
      44466);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./layout/header/header.component */
      17876);
      /* harmony import */


      var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./layout/page-loader/page-loader.component */
      66105);
      /* harmony import */


      var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./layout/sidebar/sidebar.component */
      20129);
      /* harmony import */


      var _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./layout/right-sidebar/right-sidebar.component */
      72325);
      /* harmony import */


      var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./layout/app-layout/auth-layout/auth-layout.component */
      17050);
      /* harmony import */


      var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./layout/app-layout/main-layout/main-layout.component */
      9899);
      /* harmony import */


      var _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./core/interceptor/jwt.interceptor */
      72624);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      32472);
      /* harmony import */


      var ng_click_outside__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-click-outside */
      74191);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true,
        wheelPropagation: false
      };

      function _createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
      }

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__.LocationStrategy,
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_14__.HashLocationStrategy
        }, {
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__.PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HTTP_INTERCEPTORS,
          useClass: _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_10__.JwtInterceptor,
          multi: true
        } // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        ],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__.PerfectScrollbarModule, ng_click_outside__WEBPACK_IMPORTED_MODULE_11__.ClickOutsideModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule.forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateLoader,
            useFactory: _createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClient]
          }
        }), _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_5__.PageLoaderComponent, _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.SidebarComponent, _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_7__.RightSidebarComponent, _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__.AuthLayoutComponent, _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_9__.MainLayoutComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__.PerfectScrollbarModule, ng_click_outside__WEBPACK_IMPORTED_MODULE_11__.ClickOutsideModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
        });
      })();
      /***/

    },

    /***/
    1991:
    /*!*************************************************************!*\
      !*** ./src/app/authentication/page404/page404.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Page404Component": function Page404Component() {
          return (
            /* binding */
            _Page404Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _Page404Component = /*#__PURE__*/function () {
        function _Page404Component() {
          _classCallCheck(this, _Page404Component);
        }

        _createClass(_Page404Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _Page404Component;
      }();

      _Page404Component.ɵfac = function Page404Component_Factory(t) {
        return new (t || _Page404Component)();
      };

      _Page404Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _Page404Component,
        selectors: [["app-page404"]],
        decls: 21,
        vars: 0,
        consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/bg-04.png)"], [1, "col-sm-6", "auth-form-section"], [1, "form-section"], [1, "auth-wrapper"], [1, "error-header", "p-b-45"], [1, "error-subheader", "p-b-5"], [1, "error-subheader2", "p-b-5"], [1, "container-auth-form-btn", "mt-5"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn"], [1, "w-full", "p-t-15", "p-b-15", "text-center"], ["routerLink", "/authentication/signin", 1, "txt1"]],
        template: function Page404Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 404 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Looks Like You're Lost ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " The Page You Are Looking For Not Available! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Go To Home Page ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Need Help? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNDA0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    8696:
    /*!******************************************!*\
      !*** ./src/app/config/config.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfigService": function ConfigService() {
          return (
            /* binding */
            _ConfigService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ConfigService = /*#__PURE__*/function () {
        function _ConfigService() {
          _classCallCheck(this, _ConfigService);

          this.setConfigData();
        }

        _createClass(_ConfigService, [{
          key: "setConfigData",
          value: function setConfigData() {
            this.configData = {
              layout: {
                rtl: true,
                variant: 'light',
                theme_color: 'white',
                logo_bg_color: 'white',
                sidebar: {
                  collapsed: false,
                  backgroundColor: 'light' // options:  light & dark

                }
              }
            };
          }
        }]);

        return _ConfigService;
      }();

      _ConfigService.ɵfac = function ConfigService_Factory(t) {
        return new (t || _ConfigService)();
      };

      _ConfigService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ConfigService,
        factory: _ConfigService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    40294:
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CoreModule": function CoreModule() {
          return (
            /* binding */
            _CoreModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./service/rightsidebar.service */
      74930);
      /* harmony import */


      var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./guard/auth.guard */
      19390);
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./service/auth.service */
      41782);
      /* harmony import */


      var _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./service/dynamic-script-loader.service */
      77431);
      /* harmony import */


      var _guard_module_import_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./guard/module-import.guard */
      6785);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CoreModule = function _CoreModule(parentModule) {
        _classCallCheck(this, _CoreModule);

        (0, _guard_module_import_guard__WEBPACK_IMPORTED_MODULE_4__.throwIfAlreadyLoaded)(parentModule, 'CoreModule');
      };

      _CoreModule.ɵfac = function CoreModule_Factory(t) {
        return new (t || _CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_CoreModule, 12));
      };

      _CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _CoreModule
      });
      _CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__.RightSidebarService, _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, _service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService, _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__.DynamicScriptLoaderService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_CoreModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]
        });
      })();
      /***/

    },

    /***/
    19390:
    /*!******************************************!*\
      !*** ./src/app/core/guard/auth.guard.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* binding */
            _AuthGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../service/auth.service */
      41782);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AuthGuard = /*#__PURE__*/function () {
        function _AuthGuard(authService, router) {
          _classCallCheck(this, _AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(_AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.authService.currentUserValue) {
              var userRole = this.authService.currentUserValue.profile.role;

              if (route.data.roles && route.data.roles.indexOf(userRole) === -1) {
                this.router.navigate(['/authentication/signin']);
                return false;
              }

              return true;
            }

            this.router.navigate(['/authentication/signin']);
            return false;
          }
        }]);

        return _AuthGuard;
      }();

      _AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || _AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };

      _AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AuthGuard,
        factory: _AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    6785:
    /*!***************************************************!*\
      !*** ./src/app/core/guard/module-import.guard.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "throwIfAlreadyLoaded": function throwIfAlreadyLoaded() {
          return (
            /* binding */
            _throwIfAlreadyLoaded
          );
        }
        /* harmony export */

      });

      function _throwIfAlreadyLoaded(parentModule, moduleName) {
        if (parentModule) {
          throw new Error("".concat(moduleName, " has already been loaded. Import ").concat(moduleName, " modules in the AppModule only."));
        }
      }
      /***/

    },

    /***/
    72624:
    /*!*****************************************************!*\
      !*** ./src/app/core/interceptor/jwt.interceptor.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JwtInterceptor": function JwtInterceptor() {
          return (
            /* binding */
            _JwtInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../service/auth.service */
      41782);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _JwtInterceptor = /*#__PURE__*/function () {
        function _JwtInterceptor(authenticationService, router) {
          _classCallCheck(this, _JwtInterceptor);

          this.authenticationService = authenticationService;
          this.router = router;
          this.paths = ['/api/user', '/api/place', '/api/user/password', '/api/authenticate'];
        }

        _createClass(_JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var url = request.url;
            var ck = false;

            if (!this.authenticationService.isTokenValid()) {
              this.paths.forEach(function (p) {
                if (url.includes(p) === true) {
                  ck = url.includes(p);
                  return;
                }
              });

              if (!ck) {
                this.router.navigate(['/authentication/signin']);
              }
            }

            var currentUser = this.authenticationService.currentUserValue;

            if (currentUser && currentUser.token) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(currentUser.token)
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return _JwtInterceptor;
      }();

      _JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
        return new (t || _JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };

      _JwtInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _JwtInterceptor,
        factory: _JwtInterceptor.ɵfac
      });
      /***/
    },

    /***/
    31288:
    /*!************************************************!*\
      !*** ./src/app/core/models/security/locale.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Locale": function Locale() {
          return (
            /* binding */
            _Locale
          );
        }
        /* harmony export */

      });

      var _Locale;

      (function (Locale) {
        Locale["ENGLISH"] = "en";
        Locale["FRENCH"] = "fr";
        Locale["KREYOL"] = "kr";
      })(_Locale || (_Locale = {}));
      /***/

    },

    /***/
    66314:
    /*!**********************************************!*\
      !*** ./src/app/core/models/security/role.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Role": function Role() {
          return (
            /* binding */
            _Role
          );
        }
        /* harmony export */

      });

      var _Role;

      (function (Role) {
        Role["SUPER"] = "super";
        Role["ADMIN"] = "admin";
        Role["ATTENDEE"] = "attendee";
        Role["ORGANISER"] = "organiser";
        Role["CLERK"] = "clerk";
        Role["PARTNER"] = "partner";
        Role["TRAINER"] = "trainer";
      })(_Role || (_Role = {}));
      /***/

    },

    /***/
    41782:
    /*!**********************************************!*\
      !*** ./src/app/core/service/auth.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      45094);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      41964);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      5207);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _AuthService = /*#__PURE__*/function () {
        function _AuthService(http) {
          _classCallCheck(this, _AuthService);

          this.http = http;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
          this.currentUser = this.currentUserSubject.asObservable();
        }

        _createClass(_AuthService, [{
          key: "currentUserValue",
          get: function get() {
            return this.currentUserSubject.value;
          }
        }, {
          key: "login",
          value: function login(username, password) {
            var _this3 = this;

            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.auth), {
              username: username,
              password: password
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (user) {
              localStorage.setItem('currentUser', JSON.stringify(user));

              _this3.currentUserSubject.next(user);

              sessionStorage.setItem("username", user.username);
              sessionStorage.setItem("token", "Bearer " + user.token);
              return user;
            }));
          }
        }, {
          key: "tokenExpired",
          value: function tokenExpired(token) {
            var expiry = JSON.parse(atob(token.split('.')[1])).exp;
            return Math.floor(new Date().getTime() / 1000) >= expiry;
          }
        }, {
          key: "isTokenValid",
          value: function isTokenValid() {
            var user = sessionStorage.getItem("username");
            var chk = !(user === null);

            if (chk) {
              chk = !this.tokenExpired(sessionStorage.getItem("token"));
            }

            return chk;
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('currentUser');
            sessionStorage.removeItem("username");
            this.currentUserSubject.next(null);
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
              success: false
            });
          }
        }]);

        return _AuthService;
      }();

      _AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || _AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
      };

      _AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _AuthService,
        factory: _AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    77431:
    /*!***************************************************************!*\
      !*** ./src/app/core/service/dynamic-script-loader.service.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScriptStore": function ScriptStore() {
          return (
            /* binding */
            _ScriptStore
          );
        },

        /* harmony export */
        "DynamicScriptLoaderService": function DynamicScriptLoaderService() {
          return (
            /* binding */
            _DynamicScriptLoaderService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ScriptStore = [];

      var _DynamicScriptLoaderService = /*#__PURE__*/function () {
        function _DynamicScriptLoaderService() {
          var _this4 = this;

          _classCallCheck(this, _DynamicScriptLoaderService);

          this.scripts = {};

          _ScriptStore.forEach(function (script) {
            _this4.scripts[script.name] = {
              loaded: false,
              src: script.src
            };
          });
        }

        _createClass(_DynamicScriptLoaderService, [{
          key: "load",
          value: function load() {
            var _this5 = this;

            var promises = [];

            for (var _len = arguments.length, scripts = new Array(_len), _key = 0; _key < _len; _key++) {
              scripts[_key] = arguments[_key];
            }

            scripts.forEach(function (script) {
              return promises.push(_this5.loadScript(script));
            });
            return Promise.all(promises);
          }
        }, {
          key: "loadScript",
          value: function loadScript(name) {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              if (!_this6.scripts[name].loaded) {
                // load script
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = _this6.scripts[name].src;

                if (script.readyState) {
                  // IE
                  script.onreadystatechange = function () {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                      script.onreadystatechange = null;
                      _this6.scripts[name].loaded = true;
                      resolve({
                        script: name,
                        loaded: true,
                        status: 'Loaded'
                      });
                    }
                  };
                } else {
                  // Others
                  script.onload = function () {
                    _this6.scripts[name].loaded = true;
                    resolve({
                      script: name,
                      loaded: true,
                      status: 'Loaded'
                    });
                  };
                }

                script.onerror = function (error) {
                  return resolve({
                    script: name,
                    loaded: false,
                    status: 'Loaded'
                  });
                };

                document.getElementsByTagName('head')[0].appendChild(script);
              } else {
                resolve({
                  script: name,
                  loaded: true,
                  status: 'Already Loaded'
                });
              }
            });
          }
        }]);

        return _DynamicScriptLoaderService;
      }();

      _DynamicScriptLoaderService.ɵfac = function DynamicScriptLoaderService_Factory(t) {
        return new (t || _DynamicScriptLoaderService)();
      };

      _DynamicScriptLoaderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _DynamicScriptLoaderService,
        factory: _DynamicScriptLoaderService.ɵfac
      });
      /***/
    },

    /***/
    9964:
    /*!**************************************************!*\
      !*** ./src/app/core/service/language.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LanguageService": function LanguageService() {
          return (
            /* binding */
            _LanguageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_security_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/security/locale */
      31288);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _LanguageService = /*#__PURE__*/function () {
        function _LanguageService(translate) {
          _classCallCheck(this, _LanguageService);

          this.translate = translate;
          this.languages = [_models_security_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.ENGLISH, _models_security_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.FRENCH, _models_security_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.KREYOL];
          var browserLang;
          translate.addLangs(this.languages);

          if (localStorage.getItem('lang')) {
            browserLang = localStorage.getItem('lang');
          } else {
            browserLang = translate.getBrowserLang();
          }

          translate.use(browserLang.match(/en|fr|kr/) ? browserLang : _models_security_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.ENGLISH);
        }

        _createClass(_LanguageService, [{
          key: "setLanguage",
          value: function setLanguage(lang) {
            this.translate.use(lang);
            localStorage.setItem('lang', lang);
          }
        }]);

        return _LanguageService;
      }();

      _LanguageService.ɵfac = function LanguageService_Factory(t) {
        return new (t || _LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService));
      };

      _LanguageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _LanguageService,
        factory: _LanguageService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    74930:
    /*!******************************************************!*\
      !*** ./src/app/core/service/rightsidebar.service.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RightSidebarService": function RightSidebarService() {
          return (
            /* binding */
            _RightSidebarService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      45094);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _RightSidebarService = function _RightSidebarService() {
        var _this7 = this;

        _classCallCheck(this, _RightSidebarService);

        this.sidebarSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.sidebarState = this.sidebarSubject.asObservable();

        this.setRightSidebar = function (value) {
          _this7.sidebarSubject.next(value);
        };
      };

      _RightSidebarService.ɵfac = function RightSidebarService_Factory(t) {
        return new (t || _RightSidebarService)();
      };

      _RightSidebarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _RightSidebarService,
        factory: _RightSidebarService.ɵfac
      });
      /***/
    },

    /***/
    17050:
    /*!************************************************************************!*\
      !*** ./src/app/layout/app-layout/auth-layout/auth-layout.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthLayoutComponent": function AuthLayoutComponent() {
          return (
            /* binding */
            _AuthLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AuthLayoutComponent = /*#__PURE__*/function () {
        function _AuthLayoutComponent() {
          _classCallCheck(this, _AuthLayoutComponent);
        }

        _createClass(_AuthLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AuthLayoutComponent;
      }();

      _AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) {
        return new (t || _AuthLayoutComponent)();
      };

      _AuthLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AuthLayoutComponent,
        selectors: [["app-auth-layout"]],
        decls: 1,
        vars: 0,
        template: function AuthLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        encapsulation: 2
      });
      /***/
    },

    /***/
    9899:
    /*!************************************************************************!*\
      !*** ./src/app/layout/app-layout/main-layout/main-layout.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainLayoutComponent": function MainLayoutComponent() {
          return (
            /* binding */
            _MainLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../header/header.component */
      17876);
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../sidebar/sidebar.component */
      20129);
      /* harmony import */


      var _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../right-sidebar/right-sidebar.component */
      72325);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _MainLayoutComponent = /*#__PURE__*/function () {
        function _MainLayoutComponent() {
          _classCallCheck(this, _MainLayoutComponent);
        }

        _createClass(_MainLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _MainLayoutComponent;
      }();

      _MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) {
        return new (t || _MainLayoutComponent)();
      };

      _MainLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _MainLayoutComponent,
        selectors: [["app-main-layout"]],
        decls: 4,
        vars: 0,
        template: function MainLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-right-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.RightSidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet],
        encapsulation: 2
      });
      /***/
    },

    /***/
    17876:
    /*!***************************************************!*\
      !*** ./src/app/layout/header/header.component.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/service/rightsidebar.service */
      74930);
      /* harmony import */


      var _config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../config/config.service */
      8696);
      /* harmony import */


      var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/service/auth.service */
      41782);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/service/language.service */
      9964);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);

      function HeaderComponent_img_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 31);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r1.flagvalue, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        }
      }

      function HeaderComponent_img_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 31);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r2.defaultFlag, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function HeaderComponent_a_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_a_47_Template_a_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var item_r4 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r5.setLanguage(item_r4.text, item_r4.lang, item_r4.flag);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r3.langStoreValue === item_r4.lang));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", item_r4.flag, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.text);
        }
      }

      var document = window.document;

      var _HeaderComponent = /*#__PURE__*/function (_src_app_shared_Unsub) {
        _inherits(_HeaderComponent, _src_app_shared_Unsub);

        var _super = _createSuper(_HeaderComponent);

        function _HeaderComponent(document, renderer, elementRef, rightSidebarService, configService, authService, router, languageService) {
          var _this8;

          _classCallCheck(this, _HeaderComponent);

          _this8 = _super.call(this);
          _this8.document = document;
          _this8.renderer = renderer;
          _this8.elementRef = elementRef;
          _this8.rightSidebarService = rightSidebarService;
          _this8.configService = configService;
          _this8.authService = authService;
          _this8.router = router;
          _this8.languageService = languageService;
          _this8.config = {};
          _this8.isNavbarCollapsed = true;
          _this8.listLang = [{
            text: 'English',
            flag: 'assets/images/flags/us.jpg',
            lang: 'en'
          }, {
            text: 'French',
            flag: 'assets/images/flags/french.png',
            lang: 'fr'
          }, {
            text: 'Haitian Creole',
            flag: 'assets/images/flags/haiti.png',
            lang: 'kr'
          }];
          return _this8;
        }

        _createClass(_HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.config = this.configService.configData;
            this.usr = this.authService.currentUserValue;
            this.usrName = this.usr.person.fullname;
            this.userImg = this.usr.img === undefined ? "assets/images/user/admin.jpg" : this.usr.img;
            this.profile = this.usr.profile.name;
            this.homePage = this.usr.profile.page;
            localStorage.setItem('lang', this.usr.locale);
            this.langStoreValue = localStorage.getItem('lang');
            var val = this.listLang.filter(function (x) {
              return x.lang === _this9.langStoreValue;
            });
            this.countryName = val.map(function (element) {
              return element.text;
            });

            if (val.length === 0) {
              if (this.flagvalue === undefined) {
                this.defaultFlag = 'assets/images/flags/us.jpg';
              }
            } else {
              this.flagvalue = val.map(function (element) {
                return element.flag;
              });
            }

            this.setLanguage(val[0].text, val[0].lang, val[0].flag);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (localStorage.getItem('theme')) {
              this.renderer.removeClass(this.document.body, this.config.layout.variant);
              this.renderer.addClass(this.document.body, localStorage.getItem('theme'));
            } else {
              this.renderer.addClass(this.document.body, this.config.layout.variant);
            }

            if (localStorage.getItem('menuOption')) {
              this.renderer.addClass(this.document.body, localStorage.getItem('menuOption'));
            } else {
              this.renderer.addClass(this.document.body, 'menu_' + this.config.layout.sidebar.backgroundColor);
            }

            if (localStorage.getItem('choose_logoheader')) {
              this.renderer.addClass(this.document.body, localStorage.getItem('choose_logoheader'));
            } else {
              this.renderer.addClass(this.document.body, 'logo-' + this.config.layout.logo_bg_color);
            }

            if (localStorage.getItem('sidebar_status')) {
              if (localStorage.getItem('sidebar_status') === 'close') {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
              } else {
                this.renderer.removeClass(this.document.body, 'side-closed');
                this.renderer.removeClass(this.document.body, 'submenu-closed');
              }
            } else {
              if (this.config.layout.sidebar.collapsed === true) {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
              }
            }
          }
        }, {
          key: "callFullscreen",
          value: function callFullscreen() {
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
              if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
              } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
              } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
              } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
              }
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
              } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              }
            }
          }
        }, {
          key: "setLanguage",
          value: function setLanguage(text, lang, flag) {
            this.countryName = text;
            this.flagvalue = flag;
            this.langStoreValue = lang;
            this.languageService.setLanguage(lang);
          }
        }, {
          key: "mobileMenuSidebarOpen",
          value: function mobileMenuSidebarOpen(event, className) {
            var hasClass = event.target.classList.contains(className);

            if (hasClass) {
              this.renderer.removeClass(this.document.body, className);
            } else {
              this.renderer.addClass(this.document.body, className);
            }
          }
        }, {
          key: "callSidemenuCollapse",
          value: function callSidemenuCollapse() {
            var hasClass = this.document.body.classList.contains('side-closed');

            if (hasClass) {
              this.renderer.removeClass(this.document.body, 'side-closed');
              this.renderer.removeClass(this.document.body, 'submenu-closed');
            } else {
              this.renderer.addClass(this.document.body, 'side-closed');
              this.renderer.addClass(this.document.body, 'submenu-closed');
            }
          } //
          // public toggleRightSidebar(): void {
          //     this.subs.sink = this.rightSidebarService.sidebarState.subscribe(
          //     (isRunning) => {
          //             this.isOpenSidebar = isRunning;
          //         }
          //     );
          //     this.rightSidebarService.setRightSidebar((this.isOpenSidebar = !this.isOpenSidebar));
          // }

        }, {
          key: "logout",
          value: function logout() {
            var _this10 = this;

            this.subs.sink = this.authService.logout().subscribe(function (res) {
              if (!res.success) {
                _this10.router.navigate(['/authentication/signin']);
              }
            });
          }
        }]);

        return _HeaderComponent;
      }(src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter);

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__.RightSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService));
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["app-header"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
        decls: 48,
        vars: 8,
        consts: [[1, "navbar", "active"], ["navbar", ""], [1, "container-fluid"], [1, "navbar-header"], ["href", "#", "onClick", "return false;", "aria-expanded", "false", 1, "navbar-toggle", "collapsed", 3, "click"], ["href", "#", "onClick", "return false;", 1, "bars", 3, "click"], [1, "navbar-brand", 3, "routerLink"], ["src", "assets/images/logo.png", "alt", ""], [1, "logo-name"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "float-start", "collapse-menu-icon"], ["mat-icon-button", "", 1, "sidemenu-collapse", 3, "click"], [1, "nav", "navbar-nav", "navbar-right"], ["ngbDropdown", "", 1, "nav-item", "user_profile"], ["href", "#", "onClick", "return false;", "ngbDropdownToggle", "", "role", "button", 1, "nav-notification-icons", "pt-0"], ["width", "32", "height", "32", "alt", "User", 1, "rounded-circle", 3, "src"], ["ngbDropdownMenu", "", 1, "notification-dropdown", "pullDown"], [1, "noti-list", 2, "position", "relative", "max-width", "600px", "max-height", "300px", 3, "perfectScrollbar"], [1, "menu"], [1, "body"], [1, "user_dw_menu"], ["href", "#", "onClick", "return false;"], ["aria-hidden", "false", 1, "msr-2"], ["href", "javascript:void(0);", 3, "click"], [1, "fullscreen"], ["mat-icon-button", "", 1, "nav-notification-icons", 3, "click"], ["ngbDropdown", "", 1, "nav-item"], ["ngbDropdownToggle", "", 1, "lang-dropdown"], ["height", "16", 3, "src", 4, "ngIf"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "lang-item", "dropdown-menu-right", "pullDown"], ["href", "javascript:void(0);", "class", "dropdown-item lang-item-list", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["height", "16", 3, "src"], ["href", "javascript:void(0);", 1, "dropdown-item", "lang-item-list", 3, "ngClass", "click"], ["height", "12", 1, "flag-img", 3, "src"], [1, "align-middle"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() {
              return ctx.isNavbarCollapsed = !ctx.isNavbarCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_5_listener($event) {
              return ctx.mobileMenuSidebarOpen($event, "overlay-open");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "CHARESS");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_13_listener() {
              return ctx.callSidemenuCollapse();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "ul", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "ul", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_32_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "power_settings_new");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "li", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_37_listener() {
              return ctx.callFullscreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "fullscreen");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "li", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, HeaderComponent_img_42_Template, 1, 1, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, HeaderComponent_img_43_Template, 1, 1, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, HeaderComponent_a_47_Template, 4, 5, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", ctx.homePage);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbCollapse", ctx.isNavbarCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.usrName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx.userImg, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.profile);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.flagvalue !== undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.flagvalue === undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.listLang);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbCollapse, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /***/
    },

    /***/
    66105:
    /*!*************************************************************!*\
      !*** ./src/app/layout/page-loader/page-loader.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageLoaderComponent": function PageLoaderComponent() {
          return (
            /* binding */
            _PageLoaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-spinner */
      95593);

      var _PageLoaderComponent = /*#__PURE__*/function () {
        function _PageLoaderComponent() {
          _classCallCheck(this, _PageLoaderComponent);
        }

        _createClass(_PageLoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PageLoaderComponent;
      }();

      _PageLoaderComponent.ɵfac = function PageLoaderComponent_Factory(t) {
        return new (t || _PageLoaderComponent)();
      };

      _PageLoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _PageLoaderComponent,
        selectors: [["app-page-loader"]],
        decls: 2,
        vars: 1,
        consts: [["bdColor", "rgb(63,69,95)", "size", "medium", "color", "#0af0d5", "type", "ball-scale-pulse", 3, "fullScreen"], [2, "color", "white"]],
        template: function PageLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
          }
        },
        directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxvYWRlci5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /***/
    },

    /***/
    72325:
    /*!*****************************************************************!*\
      !*** ./src/app/layout/right-sidebar/right-sidebar.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RightSidebarComponent": function RightSidebarComponent() {
          return (
            /* binding */
            _RightSidebarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/service/rightsidebar.service */
      74930);
      /* harmony import */


      var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/config/config.service */
      8696);
      /* harmony import */


      var ng_click_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-click-outside */
      74191);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      42542);

      var _c0 = function _c0(a1, a2) {
        return {
          "position": "relative",
          "max-height": a1,
          "max-width": a2
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "actived": a0
        };
      };

      var _RightSidebarComponent = /*#__PURE__*/function (_src_app_shared_Unsub2) {
        _inherits(_RightSidebarComponent, _src_app_shared_Unsub2);

        var _super2 = _createSuper(_RightSidebarComponent);

        function _RightSidebarComponent(document, renderer, elementRef, rightSidebarService, configService) {
          var _this11;

          _classCallCheck(this, _RightSidebarComponent);

          _this11 = _super2.call(this);
          _this11.document = document;
          _this11.renderer = renderer;
          _this11.elementRef = elementRef;
          _this11.rightSidebarService = rightSidebarService;
          _this11.configService = configService;
          _this11.selectedBgColor = 'white';
          _this11.showpanel = false;
          _this11.isDarkSidebar = false;
          _this11.isDarTheme = false;
          _this11.config = {};
          return _this11;
        }

        _createClass(_RightSidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.config = this.configService.configData;
            this.subs.sink = this.rightSidebarService.sidebarState.subscribe(function (isRunning) {
              _this12.isOpenSidebar = isRunning;
            });
            this.setRightSidebarWindowHeight();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // set header color on startup
            if (localStorage.getItem('choose_skin')) {
              this.renderer.addClass(this.document.body, localStorage.getItem('choose_skin'));
              this.selectedBgColor = localStorage.getItem('choose_skin_active');
            } else {
              this.renderer.addClass(this.document.body, 'theme-' + this.config.layout.theme_color);
              this.selectedBgColor = this.config.layout.theme_color;
            }

            if (localStorage.getItem('menuOption')) {
              if (localStorage.getItem('menuOption') === 'menu_dark') {
                this.isDarkSidebar = true;
              } else if (localStorage.getItem('menuOption') === 'menu_light') {
                this.isDarkSidebar = false;
              } else {
                this.isDarkSidebar = this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
              }
            } else {
              this.isDarkSidebar = this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
            }

            if (localStorage.getItem('theme')) {
              if (localStorage.getItem('theme') === 'dark') {
                this.isDarTheme = true;
              } else if (localStorage.getItem('theme') === 'light') {
                this.isDarTheme = false;
              } else {
                this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
              }
            } else {
              this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
            }
          }
        }, {
          key: "selectTheme",
          value: function selectTheme(e) {
            this.selectedBgColor = e;
            var prevTheme = this.elementRef.nativeElement.querySelector('.right-sidebar .demo-choose-skin li.actived').getAttribute('data-theme');
            this.renderer.removeClass(this.document.body, 'theme-' + prevTheme);
            this.renderer.addClass(this.document.body, 'theme-' + this.selectedBgColor);
            localStorage.setItem('choose_skin', 'theme-' + this.selectedBgColor);
            localStorage.setItem('choose_skin_active', this.selectedBgColor);
          }
        }, {
          key: "lightSidebarBtnClick",
          value: function lightSidebarBtnClick() {
            this.renderer.removeClass(this.document.body, 'menu_dark');
            this.renderer.removeClass(this.document.body, 'logo-black');
            this.renderer.addClass(this.document.body, 'menu_light');
            this.renderer.addClass(this.document.body, 'logo-white');
            var menuOption = 'menu_light';
            localStorage.setItem('choose_logoheader', 'logo-white');
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "darkSidebarBtnClick",
          value: function darkSidebarBtnClick() {
            this.renderer.removeClass(this.document.body, 'menu_light');
            this.renderer.removeClass(this.document.body, 'logo-white');
            this.renderer.addClass(this.document.body, 'menu_dark');
            this.renderer.addClass(this.document.body, 'logo-black');
            var menuOption = 'menu_dark';
            localStorage.setItem('choose_logoheader', 'logo-black');
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "lightThemeBtnClick",
          value: function lightThemeBtnClick() {
            this.renderer.removeClass(this.document.body, 'dark');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
            this.renderer.removeClass(this.document.body, 'menu_dark');
            this.renderer.removeClass(this.document.body, 'logo-black');

            if (localStorage.getItem('choose_skin')) {
              this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
            } else {
              this.renderer.removeClass(this.document.body, 'theme-' + this.config.layout.theme_color);
            }

            this.renderer.addClass(this.document.body, 'light');
            this.renderer.addClass(this.document.body, 'submenu-closed');
            this.renderer.addClass(this.document.body, 'menu_light');
            this.renderer.addClass(this.document.body, 'logo-white');
            this.renderer.addClass(this.document.body, 'theme-white');
            var theme = 'light';
            var menuOption = 'menu_light';
            this.selectedBgColor = 'white';
            this.isDarkSidebar = false;
            localStorage.setItem('choose_logoheader', 'logo-white');
            localStorage.setItem('choose_skin', 'theme-white');
            localStorage.setItem('theme', theme);
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "darkThemeBtnClick",
          value: function darkThemeBtnClick() {
            this.renderer.removeClass(this.document.body, 'light');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
            this.renderer.removeClass(this.document.body, 'menu_light');
            this.renderer.removeClass(this.document.body, 'logo-white');

            if (localStorage.getItem('choose_skin')) {
              this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
            } else {
              this.renderer.removeClass(this.document.body, 'theme-' + this.config.layout.theme_color);
            }

            this.renderer.addClass(this.document.body, 'dark');
            this.renderer.addClass(this.document.body, 'submenu-closed');
            this.renderer.addClass(this.document.body, 'menu_dark');
            this.renderer.addClass(this.document.body, 'logo-black');
            this.renderer.addClass(this.document.body, 'theme-black');
            var theme = 'dark';
            var menuOption = 'menu_dark';
            this.selectedBgColor = 'black';
            this.isDarkSidebar = true;
            localStorage.setItem('choose_logoheader', 'logo-black');
            localStorage.setItem('choose_skin', 'theme-black');
            localStorage.setItem('theme', theme);
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "setRightSidebarWindowHeight",
          value: function setRightSidebarWindowHeight() {
            var height = window.innerHeight - 137;
            this.maxHeight = height + '';
            this.maxWidth = '500px';
          }
        }, {
          key: "onClickedOutside",
          value: function onClickedOutside(event) {
            var button = event.target;

            if (button.id !== 'settingBtn') {
              if (this.isOpenSidebar === true) {
                this.toggleRightSidebar();
              }
            }
          }
        }, {
          key: "toggleRightSidebar",
          value: function toggleRightSidebar() {
            this.rightSidebarService.setRightSidebar(this.isOpenSidebar = !this.isOpenSidebar);
          }
        }, {
          key: "setRTLSettings",
          value: function setRTLSettings() {
            document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
            this.renderer.addClass(this.document.body, 'rtl');
          }
        }, {
          key: "setLTRSettings",
          value: function setLTRSettings() {
            document.getElementsByTagName('html')[0].removeAttribute('dir');
            this.renderer.removeClass(this.document.body, 'rtl');
          }
        }]);

        return _RightSidebarComponent;
      }(src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter);

      _RightSidebarComponent.ɵfac = function RightSidebarComponent_Factory(t) {
        return new (t || _RightSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__.RightSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService));
      };

      _RightSidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _RightSidebarComponent,
        selectors: [["app-right-sidebar"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 92,
        vars: 28,
        consts: [["id", "rightsidebar", 1, "right-sidebar", 3, "ngClass", "clickOutside"], [1, "rightSidebarClose", 3, "click"], [1, "far", "fa-times-circle"], [1, "demo-skin", 3, "ngStyle", "perfectScrollbar"], [1, "rightSetting"], [1, "setting-list", "list-unstyled", "m-t-20"], [1, "form-check"], [1, "form-check", "m-l-10"], [1, "form-check-label"], ["type", "checkbox", "value", "", "checked", "", 1, "form-check-input"], [1, "form-check-sign"], [1, "check"], [1, "mt-2", 3, "value"], ["value", "light", 3, "click"], ["value", "dark", 3, "click"], [1, "demo-choose-skin", "choose-theme", "list-unstyled"], ["data-theme", "white", 3, "ngClass", "click"], [1, "white-theme", "white-theme-border"], ["data-theme", "black", 3, "ngClass", "click"], [1, "black-theme"], ["data-theme", "purple", 3, "ngClass", "click"], [1, "purple-theme"], ["data-theme", "blue", 3, "ngClass", "click"], [1, "blue-theme"], ["data-theme", "cyan", 3, "ngClass", "click"], [1, "cyan-theme"], ["data-theme", "green", 3, "ngClass", "click"], [1, "green-theme"], ["data-theme", "orange", 3, "ngClass", "click"], [1, "orange-theme"], [1, "sidebar-progress"], [1, "progress", "m-t-20"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "shadow-style", "width-per-45"], [1, "progress-description"], ["role", "progressbar", "aria-valuenow", "63", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "shadow-style", "width-per-63"]],
        template: function RightSidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "aside", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("clickOutside", function RightSidebarComponent_Template_aside_clickOutside_0_listener($event) {
              return ctx.onClickedOutside($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_div_click_1_listener() {
              return ctx.toggleRightSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "GENERAL SETTINGS");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Save History ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Show Status ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Auto Submit Issue ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " Show Status To All ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "SIDEBAR MENU COLORS");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-button-toggle-group", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-button-toggle", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_44_listener() {
              return ctx.lightSidebarBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Light");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-button-toggle", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_46_listener() {
              return ctx.darkSidebarBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "THEME COLORS");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-button-toggle-group", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "mat-button-toggle", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_52_listener() {
              return ctx.lightThemeBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Light");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-button-toggle", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_54_listener() {
              return ctx.darkThemeBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "SKINS");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "ul", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "li", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_60_listener() {
              return ctx.selectTheme("white");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_62_listener() {
              return ctx.selectTheme("black");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_64_listener() {
              return ctx.selectTheme("purple");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "li", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_66_listener() {
              return ctx.selectTheme("blue");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "li", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_68_listener() {
              return ctx.selectTheme("cyan");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "li", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_70_listener() {
              return ctx.selectTheme("green");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_72_listener() {
              return ctx.selectTheme("orange");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Disk Space");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "26% remaining");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Server Load");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](88, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "Highly Loaded");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.isOpenSidebar ? "open" : "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](11, _c0, ctx.maxHeight + "px", ctx.maxWidth + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.isDarkSidebar ? "dark" : "light");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.isDarTheme ? "dark" : "light");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c1, ctx.selectedBgColor === "white"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](16, _c1, ctx.selectedBgColor === "black"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](18, _c1, ctx.selectedBgColor === "purple"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](20, _c1, ctx.selectedBgColor === "blue"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](22, _c1, ctx.selectedBgColor === "cyan"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](24, _c1, ctx.selectedBgColor === "green"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](26, _c1, ctx.selectedBgColor === "orange"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, ng_click_outside__WEBPACK_IMPORTED_MODULE_3__.ClickOutsideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggle],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodC1zaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    39617:
    /*!*************************************************!*\
      !*** ./src/app/layout/sidebar/sidebar-items.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ROUTES": function ROUTES() {
          return (
            /* binding */
            _ROUTES
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _core_models_security_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/models/security/role */
      66314);

      var _ROUTES = [{
        path: '',
        title: 'training.organisation.text',
        moduleName: 'organisation',
        iconType: 'material-icons-two-tone',
        icon: 'auto_graph',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        roles: [_core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.SUPER, _core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN, _core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.ORGANISER],
        submenu: [{
          path: '/organisation/training/broadcast',
          title: 'training.organisation.broadcast',
          moduleName: 'organisation',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          roles: [_core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.SUPER, _core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN, _core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.ORGANISER],
          submenu: []
        }, // {
        //     path: '/organisation/planning',
        //     title: 'training.organisation.planning',
        //     moduleName: 'organisation',
        //     iconType: '',
        //     icon: '',
        //     class: 'ml-menu',
        //     groupTitle: false,
        //     badge: '',
        //     badgeClass: '',
        //     roles: [Role.SUPER, Role.ADMIN, Role.ORGANISER],
        //     submenu: []
        // },
        // {
        //     path: '/organisation/calendar',
        //     title: 'training.organisation.calendar',
        //     moduleName: 'organisation',
        //     iconType: '',
        //     icon: '',
        //     class: 'ml-menu',
        //     groupTitle: false,
        //     badge: '',
        //     badgeClass: '',
        //     roles: [Role.SUPER, Role.ADMIN, Role.ORGANISER],
        //     submenu: []
        // },
        {
          path: '/organisation/training/page',
          title: 'training.page',
          moduleName: 'organisation',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          roles: [_core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.SUPER, _core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN, _core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.ORGANISER],
          submenu: []
        } // {
        //     path: '/organisation/dashboard',
        //     title: 'training.organisation.dashboard',
        //     moduleName: 'organisation',
        //     iconType: '',
        //     icon: '',
        //     class: 'ml-menu',
        //     groupTitle: false,
        //     badge: '',
        //     badgeClass: '',
        //     roles: [Role.SUPER, Role.ADMIN, Role.ORGANISER],
        //     submenu: []
        // }
        ]
      }, {
        path: '',
        title: 'training.partnership.text',
        moduleName: 'partnership',
        iconType: 'material-icons-two-tone',
        icon: 'group_work',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        roles: [_core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.SUPER, _core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.PARTNER],
        submenu: [{
          path: '/partnership/participants',
          title: 'training.partnership.participants',
          moduleName: 'partnership',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          roles: [_core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.SUPER, _core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN, _core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.PARTNER],
          submenu: []
        } // {
        //     path: '/partnership/request',
        //     title: 'training.partnership.request',
        //     moduleName: 'partnership',
        //     iconType: '',
        //     icon: '',
        //     class: 'ml-menu',
        //     groupTitle: false,
        //     badge: '',
        //     badgeClass: '',
        //     roles: [Role.SUPER, Role.ADMIN, Role.PARTNER],
        //     submenu: [],
        // },
        // {
        //     path: '/partnership/demands',
        //     title: 'training.partnership.demands',
        //     moduleName: 'partnership',
        //     iconType: '',
        //     icon: '',
        //     class: 'ml-menu',
        //     groupTitle: false,
        //     badge: '',
        //     badgeClass: '',
        //     roles: [Role.SUPER, Role.ADMIN, Role.PARTNER],
        //     submenu: [],
        // },
        // {
        //     path: '/partnership/dashboard',
        //     title: 'training.partnership.dashboard',
        //     moduleName: 'partnership',
        //     iconType: '',
        //     icon: '',
        //     class: 'ml-menu',
        //     groupTitle: false,
        //     badge: '',
        //     badgeClass: '',
        //     roles: [Role.SUPER, Role.ADMIN, Role.PARTNER],
        //     submenu: [],
        // }
        ]
      }, {
        path: '',
        title: 'training.attendee.text',
        moduleName: 'attendee',
        iconType: 'material-icons-two-tone',
        icon: 'perm_media',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        roles: [_core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.SUPER, _core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN, _core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.ATTENDEE],
        submenu: [{
          path: '/attendee/charts',
          title: 'training.attendee.charts',
          moduleName: 'attendee',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          roles: [_core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.SUPER, _core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN, _core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.PARTNER],
          submenu: []
        }]
      }, {
        path: '',
        title: 'training.configuration.text',
        moduleName: 'configuration',
        iconType: 'material-icons-two-tone',
        icon: 'settings_suggest',
        "class": 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        roles: [_core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.SUPER, _core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN],
        submenu: [{
          path: '/configuration/topic/page',
          title: 'training.configuration.list.topic',
          moduleName: 'configuration',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          roles: [_core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.SUPER, _core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN],
          submenu: []
        }, {
          path: '/configuration/institution/page',
          title: 'training.configuration.list.facility',
          moduleName: 'configuration',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          roles: [_core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.SUPER, _core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN],
          submenu: []
        }, {
          path: '/configuration/account/page',
          title: 'training.configuration.list.account',
          moduleName: 'configuration',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          roles: [_core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.SUPER, _core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN],
          submenu: []
        }, {
          path: '/configuration/category/page',
          title: 'training.configuration.list.category',
          moduleName: 'configuration',
          iconType: '',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          roles: [_core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.SUPER, _core_models_security_role__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN],
          submenu: []
        }]
      }];
      /***/
    },

    /***/
    20129:
    /*!*****************************************************!*\
      !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidebarComponent": function SidebarComponent() {
          return (
            /* binding */
            _SidebarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _sidebar_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sidebar-items */
      39617);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/service/auth.service */
      41782);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function SidebarComponent_li_4_a_1_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, sidebarItem_r1.badgeClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](sidebarItem_r1.badge);
        }
      }

      function SidebarComponent_li_4_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_li_4_a_1_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.callLevel1Toggle($event, sidebarItem_r1.moduleName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SidebarComponent_li_4_a_1_span_6_Template, 2, 4, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", sidebarItem_r1["class"] === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, sidebarItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, sidebarItem_r1["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, sidebarItem_r1.iconType));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](sidebarItem_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 6, sidebarItem_r1.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sidebarItem_r1.badge != "");
        }
      }

      function SidebarComponent_li_4_ul_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_li_4_ul_2_li_1_Template_a_click_1_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

            var sidebarSubItem_r11 = restoredCtx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r12.callLevel2Toggle($event, sidebarSubItem_r11.moduleName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarSubItem_r11 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r10.level2Menu === sidebarSubItem_r11.moduleName ? "activeSub" : "")("routerLinkActive", sidebarSubItem_r11.submenu.length > 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", sidebarSubItem_r11.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, sidebarSubItem_r11.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, sidebarSubItem_r11["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, sidebarSubItem_r11.title), " ");
        }
      }

      function SidebarComponent_li_4_ul_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_4_ul_2_li_1_Template, 4, 11, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", sidebarItem_r1.submenu);
        }
      }

      function SidebarComponent_li_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_4_a_1_Template, 7, 14, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SidebarComponent_li_4_ul_2_Template, 2, 1, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarItem_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.level1Menu === sidebarItem_r1.moduleName && sidebarItem_r1.submenu.length != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", sidebarItem_r1.submenu.length != 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !sidebarItem_r1.groupTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sidebarItem_r1.submenu.length > 0);
        }
      }

      var _c1 = function _c1(a1, a2) {
        return {
          "position": "relative",
          "max-height": a1,
          "max-width": a2
        };
      };

      var _SidebarComponent = /*#__PURE__*/function () {
        //routerObj = null;
        function _SidebarComponent(document, renderer, elementRef, authService) {
          _classCallCheck(this, _SidebarComponent);

          this.document = document;
          this.renderer = renderer;
          this.elementRef = elementRef;
          this.authService = authService;
          this.level1Menu = '';
          this.level2Menu = '';
          this.level3Menu = '';
          this.headerHeight = 60; //const body = this.elementRef.nativeElement.closest('body');
          // this.routerObj = this.router.events.subscribe((event) => {
          //     if (event instanceof NavigationEnd) {
          //         const role = ['admin', 'teacher', 'student', 'student'];
          //         const currenturl = event.url.split('?')[0];
          //         const firstString = currenturl.split('/').slice(1)[0];
          //         if (role.indexOf(firstString) !== -1) {
          //             this.level1Menu = currenturl.split('/')[2];
          //             this.level2Menu = currenturl.split('/')[3];
          //         } else {
          //             this.level1Menu = currenturl.split('/')[1];
          //             this.level2Menu = currenturl.split('/')[2];
          //         }
          //         this.renderer.removeClass(this.document.body, 'overlay-open');
          //     }
          // });
        }

        _createClass(_SidebarComponent, [{
          key: "windowResizecall",
          value: function windowResizecall(event) {
            this.setMenuHeight();
            this.checkStatuForResize(false);
          }
        }, {
          key: "onGlobalClick",
          value: function onGlobalClick(event) {
            if (!this.elementRef.nativeElement.contains(event.target)) {
              this.renderer.removeClass(this.document.body, 'overlay-open');
            }
          }
        }, {
          key: "callLevel1Toggle",
          value: function callLevel1Toggle(event, element) {
            if (element === this.level1Menu) {
              this.level1Menu = '0';
            } else {
              this.level1Menu = element;
            }

            var hasClass = event.target.classList.contains('toggled');

            if (hasClass) {
              this.renderer.removeClass(event.target, 'toggled');
            } else {
              this.renderer.addClass(event.target, 'toggled');
            }
          }
        }, {
          key: "callLevel2Toggle",
          value: function callLevel2Toggle(event, element) {
            if (element === this.level2Menu) {
              this.level2Menu = '0';
            } else {
              this.level2Menu = element;
            }
          }
        }, {
          key: "callLevel3Toggle",
          value: function callLevel3Toggle(event, element) {
            if (element === this.level3Menu) {
              this.level3Menu = '0';
            } else {
              this.level3Menu = element;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.authService.currentUserValue) {
              var userRole = this.authService.currentUserValue.profile.role;
              this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.ROUTES.filter(function (x) {
                return x.roles.indexOf(userRole) !== -1;
              });
            }

            this.initLeftSidebar();
            this.bodyTag = this.document.body;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {//this.routerObj.unsubscribe();
          }
        }, {
          key: "initLeftSidebar",
          value: function initLeftSidebar() {
            var _this = this;

            _this.setMenuHeight();

            _this.checkStatuForResize(true);
          }
        }, {
          key: "setMenuHeight",
          value: function setMenuHeight() {
            this.innerHeight = window.innerHeight;
            var height = this.innerHeight - this.headerHeight;
            this.listMaxHeight = height + '';
            this.listMaxWidth = '500px';
          }
        }, {
          key: "checkStatuForResize",
          value: function checkStatuForResize(firstTime) {
            if (window.innerWidth < 1170) {
              this.renderer.addClass(this.document.body, 'ls-closed');
            } else {
              this.renderer.removeClass(this.document.body, 'ls-closed');
            }
          }
        }, {
          key: "mouseHover",
          value: function mouseHover(e) {
            var body = this.elementRef.nativeElement.closest('body');

            if (body.classList.contains('submenu-closed')) {
              this.renderer.addClass(this.document.body, 'side-closed-hover');
              this.renderer.removeClass(this.document.body, 'submenu-closed');
            }
          }
        }, {
          key: "mouseOut",
          value: function mouseOut(e) {
            var body = this.elementRef.nativeElement.closest('body');

            if (body.classList.contains('side-closed-hover')) {
              this.renderer.removeClass(this.document.body, 'side-closed-hover');
              this.renderer.addClass(this.document.body, 'submenu-closed');
            }
          }
        }]);

        return _SidebarComponent;
      }();

      _SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || _SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
      };

      _SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _SidebarComponent,
        selectors: [["app-sidebar"]],
        hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function SidebarComponent_resize_HostBindingHandler($event) {
              return ctx.windowResizecall($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("mousedown", function SidebarComponent_mousedown_HostBindingHandler($event) {
              return ctx.onGlobalClick($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
          }
        },
        decls: 5,
        vars: 5,
        consts: [["id", "leftsidebar", 1, "sidebar", 3, "mouseenter", "mouseleave"], [1, "menu"], [1, "list", 3, "ngStyle", "perfectScrollbar"], [3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "routerLinkActive"], ["class", "menu-top", 3, "routerLink", "ngClass", "click", 4, "ngIf"], ["class", "ml-menu", 4, "ngIf"], [1, "menu-top", 3, "routerLink", "ngClass", "click"], [3, "ngClass"], [1, "hide-menu"], [3, "ngClass", 4, "ngIf"], [1, "ml-menu"], [3, "ngClass", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "ngClass", "routerLinkActive"], [3, "routerLink", "ngClass", "click"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "aside", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function SidebarComponent_Template_aside_mouseenter_1_listener($event) {
              return ctx.mouseHover($event);
            })("mouseleave", function SidebarComponent_Template_aside_mouseleave_1_listener($event) {
              return ctx.mouseOut($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SidebarComponent_li_4_Template, 3, 5, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c1, ctx.listMaxHeight + "px", ctx.listMaxWidth + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sidebarItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */"]
      });
      /***/
    },

    /***/
    7868:
    /*!*******************************************************!*\
      !*** ./src/app/shared/UnsubscribeOnDestroyAdapter.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UnsubscribeOnDestroyAdapter": function UnsubscribeOnDestroyAdapter() {
          return (
            /* binding */
            _UnsubscribeOnDestroyAdapter
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _sub_sink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sub-sink */
      12822);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /**
       * A class that automatically unsubscribes all observables when the object gets destroyed
       */


      var _UnsubscribeOnDestroyAdapter = /*#__PURE__*/function () {
        function _UnsubscribeOnDestroyAdapter() {
          _classCallCheck(this, _UnsubscribeOnDestroyAdapter);

          /**
           * The subscription sink object that stores all subscriptions
           */
          this.subs = new _sub_sink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
        }
        /**
         * The lifecycle hook that unsubscribes all subscriptions when the component / object gets destroyed
         */


        _createClass(_UnsubscribeOnDestroyAdapter, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subs.unsubscribe();
          }
        }]);

        return _UnsubscribeOnDestroyAdapter;
      }();

      _UnsubscribeOnDestroyAdapter.ɵfac = function UnsubscribeOnDestroyAdapter_Factory(t) {
        return new (t || _UnsubscribeOnDestroyAdapter)();
      };

      _UnsubscribeOnDestroyAdapter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _UnsubscribeOnDestroyAdapter,
        factory: _UnsubscribeOnDestroyAdapter.ɵfac
      });
      /***/
    },

    /***/
    94872:
    /*!*******************************************!*\
      !*** ./src/app/shared/material.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaterialModule": function MaterialModule() {
          return (
            /* binding */
            _MaterialModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/datepicker */
      43220);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-mask */
      69129);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/list */
      77746);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      42542);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      45396);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var materialModules = [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule.forRoot(), _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule];

      var _MaterialModule = function _MaterialModule() {
        _classCallCheck(this, _MaterialModule);
      };

      _MaterialModule.ɵfac = function MaterialModule_Factory(t) {
        return new (t || _MaterialModule)();
      };

      _MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: _MaterialModule
      });
      _MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        imports: [[materialModules], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](_MaterialModule, {
          imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule]
        });
      })();
      /***/

    },

    /***/
    44466:
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-spinner */
      95593);
      /* harmony import */


      var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./material.module */
      94872);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SharedModule = function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      };

      _SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule], _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_SharedModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]
        });
      })();
      /***/

    },

    /***/
    12822:
    /*!************************************!*\
      !*** ./src/app/shared/sub-sink.ts ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubSink": function SubSink() {
          return (
            /* binding */
            _SubSink
          );
        }
        /* harmony export */

      });
      /**
       * Subscription sink that holds Observable subscriptions
       * until you call unsubscribe on it in ngOnDestroy.
       */


      var _SubSink = /*#__PURE__*/function () {
        /**
         * Subscription sink that holds Observable subscriptions
         * until you call unsubscribe on it in ngOnDestroy.
         *
         * @example
         * In Angular:
         * ```
         *   private subs = new SubSink();
         *   ...
         *   this.subs.sink = observable$.subscribe(
         *   this.subs.add(observable$.subscribe(...));
         *   ...
         *   ngOnDestroy() {
         *     this.subs.unsubscribe();
         *   }
         * ```
         */
        function _SubSink() {
          _classCallCheck(this, _SubSink);

          this._subs = [];
        }
        /**
         * Add subscriptions to the tracked subscriptions
         * @example
         *  this.subs.add(observable$.subscribe(...));
         */


        _createClass(_SubSink, [{
          key: "add",
          value: function add() {
            for (var _len2 = arguments.length, subscriptions = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              subscriptions[_key2] = arguments[_key2];
            }

            this._subs = this._subs.concat(subscriptions);
          }
          /**
           * Assign subscription to this sink to add it to the tracked subscriptions
           * @example
           *  this.subs.sink = observable$.subscribe(...);
           */

        }, {
          key: "sink",
          set: function set(subscription) {
            this._subs.push(subscription);
          }
          /**
           * Unsubscribe to all subscriptions in ngOnDestroy()
           * @example
           *   ngOnDestroy() {
           *     this.subs.unsubscribe();
           *   }
           */

        }, {
          key: "unsubscribe",
          value: function unsubscribe() {
            this._subs.forEach(function (sub) {
              return sub && sub.unsubscribe();
            });

            this._subs = [];
          }
        }]);

        return _SubSink;
      }();
      /***/

    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.
      //
      //


      var _environment = {
        production: false,
        api: 'http://100.21.60.231:8080/api',
        auth: 'http://100.21.60.231:8080/api/authenticate'
      }; // export const environment = {
      //     production: false,
      //     api: 'http://localhost:8080/api',
      //     auth: 'http://localhost:8080/api/authenticate',
      // };

      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map