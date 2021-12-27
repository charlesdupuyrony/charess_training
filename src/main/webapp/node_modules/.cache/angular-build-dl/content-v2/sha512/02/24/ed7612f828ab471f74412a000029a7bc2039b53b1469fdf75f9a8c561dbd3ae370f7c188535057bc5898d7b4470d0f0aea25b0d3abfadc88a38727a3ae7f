(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_teacher_teacher_module_ts"], {
    /***/
    24104:
    /*!******************************************************************!*\
      !*** ./src/app/teacher/exam-schedule/exam-schedule.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExamScheduleComponent": function ExamScheduleComponent() {
          return (
            /* binding */
            _ExamScheduleComponent
          );
        },

        /* harmony export */
        "ExampleDataSource": function ExampleDataSource() {
          return (
            /* binding */
            _ExampleDataSource
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _exam_schedule_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./exam-schedule.service */
      13453);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/sort */
      11494);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/collections */
      38345);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      96937);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      45094);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      33763);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      5207);
      /* harmony import */


      var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);

      var _c0 = ["filter"];

      function ExamScheduleComponent_mat_header_cell_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ExamScheduleComponent_mat_cell_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r25.id);
        }
      }

      function ExamScheduleComponent_mat_header_cell_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "subject ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ExamScheduleComponent_mat_cell_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r26.subject, "");
        }
      }

      function ExamScheduleComponent_mat_header_cell_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Class Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ExamScheduleComponent_mat_cell_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r27["class"], "");
        }
      }

      function ExamScheduleComponent_mat_header_cell_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ExamScheduleComponent_mat_cell_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, row_r28.date, "MM/dd/yyyy"), " ");
        }
      }

      function ExamScheduleComponent_mat_header_cell_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ExamScheduleComponent_mat_cell_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r29.time, " ");
        }
      }

      function ExamScheduleComponent_mat_header_cell_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Duration");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ExamScheduleComponent_mat_cell_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r30.duration, "");
        }
      }

      function ExamScheduleComponent_mat_header_cell_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Room No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ExamScheduleComponent_mat_cell_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r31.roomNo, "");
        }
      }

      function ExamScheduleComponent_mat_header_cell_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Total Marks");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ExamScheduleComponent_mat_cell_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r32.totalMarks, "");
        }
      }

      function ExamScheduleComponent_mat_header_cell_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Require Marks");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ExamScheduleComponent_mat_cell_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r33.reqMarks, "");
        }
      }

      function ExamScheduleComponent_mat_header_row_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function ExamScheduleComponent_mat_row_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-row", 47);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("cursor", "pointer");
        }
      }

      function ExamScheduleComponent_div_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-progress-spinner", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("diameter", 40);
        }
      }

      function ExamScheduleComponent_div_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No results ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx_r23.dataSource.renderedData.length == 0 ? "" : "none");
        }
      }

      var _c1 = function _c1() {
        return [5, 10, 25, 100];
      };

      var _ExamScheduleComponent = /*#__PURE__*/function (_src_app_shared_Unsub) {
        _inherits(_ExamScheduleComponent, _src_app_shared_Unsub);

        var _super = _createSuper(_ExamScheduleComponent);

        function _ExamScheduleComponent(httpClient, examScheduleService) {
          var _this;

          _classCallCheck(this, _ExamScheduleComponent);

          _this = _super.call(this);
          _this.httpClient = httpClient;
          _this.examScheduleService = examScheduleService;
          _this.displayedColumns = ['subject', 'class', 'date', 'time', 'duration', 'roomNo', 'totalMarks', 'reqMarks'];
          _this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.SelectionModel(true, []);
          return _this;
        }

        _createClass(_ExamScheduleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadData();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this2 = this;

            this.exampleDatabase = new _exam_schedule_service__WEBPACK_IMPORTED_MODULE_0__.ExamScheduleService(this.httpClient);
            this.dataSource = new _ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
            this.subs.sink = (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.filter.nativeElement, 'keyup').subscribe(function () {
              if (!_this2.dataSource) {
                return;
              }

              _this2.dataSource.filter = _this2.filter.nativeElement.value;
            });
          }
        }]);

        return _ExamScheduleComponent;
      }(src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__.UnsubscribeOnDestroyAdapter);

      _ExamScheduleComponent.ɵfac = function ExamScheduleComponent_Factory(t) {
        return new (t || _ExamScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_exam_schedule_service__WEBPACK_IMPORTED_MODULE_0__.ExamScheduleService));
      };

      _ExamScheduleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ExamScheduleComponent,
        selectors: [["app-exam-schedule"]],
        viewQuery: function ExamScheduleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 69,
        vars: 10,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/patient/dashboard"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"], ["filter", ""], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "subject"], ["matColumnDef", "class"], ["matColumnDef", "date"], ["matColumnDef", "time"], ["matColumnDef", "duration"], ["matColumnDef", "roomNo"], ["class", "column-nowrap", 4, "matCellDef"], ["matColumnDef", "totalMarks"], ["matColumnDef", "reqMarks"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], ["class", "tbl-spinner", 4, "ngIf"], ["class", "no-results", 3, "display", 4, "ngIf"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-sort-header", ""], [1, "column-nowrap"], ["matRipple", ""], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], [1, "no-results"]],
        template: function ExamScheduleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Exam Schedule");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Exam Schedule");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ul", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Exam Schedule");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 23, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-table", 25, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](36, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, ExamScheduleComponent_mat_header_cell_37_Template, 2, 0, "mat-header-cell", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, ExamScheduleComponent_mat_cell_38_Template, 2, 1, "mat-cell", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](39, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, ExamScheduleComponent_mat_header_cell_40_Template, 2, 0, "mat-header-cell", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, ExamScheduleComponent_mat_cell_41_Template, 2, 1, "mat-cell", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](42, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, ExamScheduleComponent_mat_header_cell_43_Template, 2, 0, "mat-header-cell", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, ExamScheduleComponent_mat_cell_44_Template, 2, 1, "mat-cell", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](45, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, ExamScheduleComponent_mat_header_cell_46_Template, 2, 0, "mat-header-cell", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, ExamScheduleComponent_mat_cell_47_Template, 3, 4, "mat-cell", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](48, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, ExamScheduleComponent_mat_header_cell_49_Template, 2, 0, "mat-header-cell", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, ExamScheduleComponent_mat_cell_50_Template, 2, 1, "mat-cell", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](51, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, ExamScheduleComponent_mat_header_cell_52_Template, 2, 0, "mat-header-cell", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, ExamScheduleComponent_mat_cell_53_Template, 2, 1, "mat-cell", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](54, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, ExamScheduleComponent_mat_header_cell_55_Template, 2, 0, "mat-header-cell", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, ExamScheduleComponent_mat_cell_56_Template, 2, 1, "mat-cell", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](57, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, ExamScheduleComponent_mat_header_cell_58_Template, 2, 0, "mat-header-cell", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, ExamScheduleComponent_mat_cell_59_Template, 2, 1, "mat-cell", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](60, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, ExamScheduleComponent_mat_header_cell_61_Template, 2, 0, "mat-header-cell", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, ExamScheduleComponent_mat_cell_62_Template, 2, 1, "mat-cell", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, ExamScheduleComponent_mat_header_row_63_Template, 1, 0, "mat-header-row", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, ExamScheduleComponent_mat_row_64_Template, 1, 2, "mat-row", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, ExamScheduleComponent_div_65_Template, 2, 1, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, ExamScheduleComponent_div_66_Template, 2, 2, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "mat-paginator", 43, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.exampleDatabase.isTblLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.exampleDatabase.isTblLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx.dataSource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c1));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinner],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLXNjaGVkdWxlLmNvbXBvbmVudC5zYXNzIn0= */"]
      });

      var _ExampleDataSource = /*#__PURE__*/function (_angular_cdk_collecti) {
        _inherits(_ExampleDataSource, _angular_cdk_collecti);

        var _super2 = _createSuper(_ExampleDataSource);

        function _ExampleDataSource(exampleDatabase, paginator, _sort) {
          var _this3;

          _classCallCheck(this, _ExampleDataSource);

          _this3 = _super2.call(this);
          _this3.exampleDatabase = exampleDatabase;
          _this3.paginator = paginator;
          _this3._sort = _sort;
          _this3.filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject('');
          _this3.filteredData = [];
          _this3.renderedData = []; // Reset to the first page when the user changes the filter.

          _this3.filterChange.subscribe(function () {
            return _this3.paginator.pageIndex = 0;
          });

          return _this3;
        }

        _createClass(_ExampleDataSource, [{
          key: "filter",
          get: function get() {
            return this.filterChange.value;
          },
          set: function set(filter) {
            this.filterChange.next(filter);
          }
          /** Connect function called by the table to retrieve one stream containing the data to render. */

        }, {
          key: "connect",
          value: function connect() {
            var _this4 = this;

            // Listen for any changes in the base data, sorting, filtering, or pagination
            var displayDataChanges = [this.exampleDatabase.dataChange, this._sort.sortChange, this.filterChange, this.paginator.page];
            this.exampleDatabase.getAllExamSchedule();
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_13__.merge).apply(void 0, displayDataChanges).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(function () {
              // Filter data
              _this4.filteredData = _this4.exampleDatabase.data.slice().filter(function (examSchedule) {
                var searchStr = (examSchedule.subject + examSchedule["class"] + examSchedule.date + examSchedule.time + examSchedule.duration + examSchedule.totalMarks).toLowerCase();
                return searchStr.indexOf(_this4.filter.toLowerCase()) !== -1;
              }); // Sort filtered data

              var sortedData = _this4.sortData(_this4.filteredData.slice()); // Grab the page's slice of the filtered sorted data.


              var startIndex = _this4.paginator.pageIndex * _this4.paginator.pageSize;
              _this4.renderedData = sortedData.splice(startIndex, _this4.paginator.pageSize);
              return _this4.renderedData;
            }));
          }
        }, {
          key: "disconnect",
          value: function disconnect() {}
          /** Returns a sorted copy of the database data. */

        }, {
          key: "sortData",
          value: function sortData(data) {
            var _this5 = this;

            if (!this._sort.active || this._sort.direction === '') {
              return data;
            }

            return data.sort(function (a, b) {
              var propertyA = '';
              var propertyB = '';

              switch (_this5._sort.active) {
                case 'id':
                  var _ref = [a.id, b.id];
                  propertyA = _ref[0];
                  propertyB = _ref[1];
                  break;

                case 'subject':
                  var _ref2 = [a.subject, b.subject];
                  propertyA = _ref2[0];
                  propertyB = _ref2[1];
                  break;

                case 'class':
                  var _ref3 = [a["class"], b["class"]];
                  propertyA = _ref3[0];
                  propertyB = _ref3[1];
                  break;

                case 'date':
                  var _ref4 = [a.date, b.date];
                  propertyA = _ref4[0];
                  propertyB = _ref4[1];
                  break;
              }

              var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
              var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
              return (valueA < valueB ? -1 : 1) * (_this5._sort.direction === 'asc' ? 1 : -1);
            });
          }
        }]);

        return _ExampleDataSource;
      }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.DataSource);
      /***/

    },

    /***/
    13453:
    /*!****************************************************************!*\
      !*** ./src/app/teacher/exam-schedule/exam-schedule.service.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExamScheduleService": function ExamScheduleService() {
          return (
            /* binding */
            _ExamScheduleService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      45094);
      /* harmony import */


      var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _ExamScheduleService = /*#__PURE__*/function (_src_app_shared_Unsub2) {
        _inherits(_ExamScheduleService, _src_app_shared_Unsub2);

        var _super3 = _createSuper(_ExamScheduleService);

        function _ExamScheduleService(httpClient) {
          var _this6;

          _classCallCheck(this, _ExamScheduleService);

          _this6 = _super3.call(this);
          _this6.httpClient = httpClient;
          _this6.API_URL = 'assets/data/examSchedule.json';
          _this6.isTblLoading = true;
          _this6.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
          return _this6;
        }

        _createClass(_ExamScheduleService, [{
          key: "data",
          get: function get() {
            return this.dataChange.value;
          }
        }, {
          key: "getDialogData",
          value: function getDialogData() {
            return this.dialogData;
          }
          /** CRUD METHODS */

        }, {
          key: "getAllExamSchedule",
          value: function getAllExamSchedule() {
            var _this7 = this;

            this.subs.sink = this.httpClient.get(this.API_URL).subscribe(function (data) {
              _this7.isTblLoading = false;

              _this7.dataChange.next(data);
            }, function (error) {
              _this7.isTblLoading = false;
              console.log(error.name + ' ' + error.message);
            });
          }
        }, {
          key: "addExamSchedule",
          value: function addExamSchedule(examSchedule) {
            this.dialogData = examSchedule;
            /*  this.httpClient.post(this.API_URL, examSchedule).subscribe(data => {
              this.dialogData = examSchedule;
              },
              (err: HttpErrorResponse) => {
             // error code here
            });*/
          }
        }, {
          key: "updateExamSchedule",
          value: function updateExamSchedule(examSchedule) {
            this.dialogData = examSchedule;
            /* this.httpClient.put(this.API_URL + examSchedule.id, examSchedule).subscribe(data => {
              this.dialogData = examSchedule;
            },
            (err: HttpErrorResponse) => {
              // error code here
            }
            );*/
          }
        }, {
          key: "deleteExamSchedule",
          value: function deleteExamSchedule(id) {
            console.log(id);
            /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
              console.log(id);
              },
              (err: HttpErrorResponse) => {
                 // error code here
              }
            );*/
          }
        }]);

        return _ExamScheduleService;
      }(src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter);

      _ExamScheduleService.ɵfac = function ExamScheduleService_Factory(t) {
        return new (t || _ExamScheduleService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _ExamScheduleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _ExamScheduleService,
        factory: _ExamScheduleService.ɵfac
      });
      /***/
    },

    /***/
    6411:
    /*!******************************************************************!*\
      !*** ./src/app/teacher/leave-request/leave-request.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LeaveRequestComponent": function LeaveRequestComponent() {
          return (
            /* binding */
            _LeaveRequestComponent
          );
        },

        /* harmony export */
        "ExampleDataSource": function ExampleDataSource() {
          return (
            /* binding */
            _ExampleDataSource2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _leave_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./leave-request.service */
      21014);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/sort */
      11494);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/collections */
      38345);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      96937);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! rxjs */
      45094);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! rxjs */
      33763);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! rxjs/operators */
      5207);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);

      var _c0 = ["filter"];

      function LeaveRequestComponent_mat_header_cell_42_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function LeaveRequestComponent_mat_header_cell_42_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return $event ? ctx_r27.masterToggle() : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected())("ngClass", "tbl-checkbox");
        }
      }

      function LeaveRequestComponent_mat_cell_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LeaveRequestComponent_mat_cell_43_Template_mat_checkbox_click_1_listener($event) {
            return $event.stopPropagation();
          })("change", function LeaveRequestComponent_mat_cell_43_Template_mat_checkbox_change_1_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);

            var row_r29 = restoredCtx.$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return $event ? ctx_r31.selection.toggle(row_r29) : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r29 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r29))("ngClass", "tbl-checkbox");
        }
      }

      function LeaveRequestComponent_mat_header_cell_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function LeaveRequestComponent_mat_cell_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r33.id);
        }
      }

      function LeaveRequestComponent_mat_header_cell_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Image ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "tbl-col-width-per-5");
        }
      }

      function LeaveRequestComponent_mat_cell_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", row_r34.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      function LeaveRequestComponent_mat_header_cell_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Roll No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function LeaveRequestComponent_mat_cell_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r35.rNo, "");
        }
      }

      function LeaveRequestComponent_mat_header_cell_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Student Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function LeaveRequestComponent_mat_cell_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r36.name, "");
        }
      }

      function LeaveRequestComponent_mat_header_cell_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "From Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function LeaveRequestComponent_mat_cell_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, row_r37.fromDate, "MM/dd/yyyy"), " ");
        }
      }

      function LeaveRequestComponent_mat_header_cell_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "To Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function LeaveRequestComponent_mat_cell_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, row_r38.toDate, "MM/dd/yyyy"), " ");
        }
      }

      function LeaveRequestComponent_mat_header_cell_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function LeaveRequestComponent_mat_cell_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r39.status, "");
        }
      }

      function LeaveRequestComponent_mat_header_cell_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Reason ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function LeaveRequestComponent_mat_cell_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r40.reason, "");
        }
      }

      function LeaveRequestComponent_mat_header_cell_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function LeaveRequestComponent_mat_cell_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LeaveRequestComponent_mat_cell_70_Template_button_click_1_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LeaveRequestComponent_mat_cell_70_Template_button_click_4_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function LeaveRequestComponent_mat_header_row_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function LeaveRequestComponent_mat_row_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-row", 72);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("cursor", "pointer");
        }
      }

      function LeaveRequestComponent_div_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-progress-spinner", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("diameter", 40);
        }
      }

      function LeaveRequestComponent_div_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No results ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx_r25.dataSource.renderedData.length == 0 ? "" : "none");
        }
      }

      var _c1 = function _c1() {
        return [5, 10, 25, 100];
      };

      var _LeaveRequestComponent = /*#__PURE__*/function (_src_app_shared_Unsub3) {
        _inherits(_LeaveRequestComponent, _src_app_shared_Unsub3);

        var _super4 = _createSuper(_LeaveRequestComponent);

        function _LeaveRequestComponent(httpClient, leaveRequestService, snackBar) {
          var _this8;

          _classCallCheck(this, _LeaveRequestComponent);

          _this8 = _super4.call(this);
          _this8.httpClient = httpClient;
          _this8.leaveRequestService = leaveRequestService;
          _this8.snackBar = snackBar;
          _this8.displayedColumns = ['select', 'img', 'rNo', 'name', 'fromDate', 'toDate', 'status', 'reason', 'actions'];
          _this8.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.SelectionModel(true, []);
          return _this8;
        }

        _createClass(_LeaveRequestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadData();
          }
          /** Whether the number of selected elements matches the total number of rows. */

        }, {
          key: "isAllSelected",
          value: function isAllSelected() {
            var numSelected = this.selection.selected.length;
            var numRows = this.dataSource.renderedData.length;
            return numSelected === numRows;
          }
          /** Selects all rows if they are not all selected; otherwise clear selection. */

        }, {
          key: "masterToggle",
          value: function masterToggle() {
            var _this9 = this;

            this.isAllSelected() ? this.selection.clear() : this.dataSource.renderedData.forEach(function (row) {
              return _this9.selection.select(row);
            });
          }
        }, {
          key: "removeSelectedRows",
          value: function removeSelectedRows() {
            var _this10 = this;

            var totalSelect = this.selection.selected.length;
            this.selection.selected.forEach(function (item) {
              var index = _this10.dataSource.renderedData.findIndex(function (d) {
                return d === item;
              }); // console.log(this.dataSource.renderedData.findIndex((d) => d === item));


              _this10.exampleDatabase.dataChange.value.splice(index, 1);

              _this10.refreshTable();

              _this10.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.SelectionModel(true, []);
            });
            this.showNotification('snackbar-danger', totalSelect + ' Record Delete Successfully...!!!', 'bottom', 'center');
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            this.paginator._changePageSize(this.paginator.pageSize);
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this11 = this;

            this.exampleDatabase = new _leave_request_service__WEBPACK_IMPORTED_MODULE_0__.LeaveRequestService(this.httpClient);
            this.dataSource = new _ExampleDataSource2(this.exampleDatabase, this.paginator, this.sort);
            this.subs.sink = (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.filter.nativeElement, 'keyup').subscribe(function () {
              if (!_this11.dataSource) {
                return;
              }

              _this11.dataSource.filter = _this11.filter.nativeElement.value;
            });
          }
        }, {
          key: "showNotification",
          value: function showNotification(colorName, text, placementFrom, placementAlign) {
            this.snackBar.open(text, '', {
              duration: 2000,
              verticalPosition: placementFrom,
              horizontalPosition: placementAlign,
              panelClass: colorName
            });
          }
        }]);

        return _LeaveRequestComponent;
      }(src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__.UnsubscribeOnDestroyAdapter);

      _LeaveRequestComponent.ɵfac = function LeaveRequestComponent_Factory(t) {
        return new (t || _LeaveRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_leave_request_service__WEBPACK_IMPORTED_MODULE_0__.LeaveRequestService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar));
      };

      _LeaveRequestComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _LeaveRequestComponent,
        selectors: [["app-leave-request"]],
        viewQuery: function LeaveRequestComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MAT_DATE_LOCALE,
          useValue: 'en-GB'
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 77,
        vars: 11,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/patient/dashboard"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"], ["filter", ""], [1, "icon-button-demo", "m-l-10", 3, "hidden"], ["mat-mini-fab", "", "color", "warn", 3, "click"], [1, "col-white"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "img"], ["mat-header-cell", "", 3, "ngClass", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-img tbl-col-width-per-5", 4, "matCellDef"], ["matColumnDef", "rNo"], ["mat-sort-header", "", "class", "psl-3 tbl-col-width-per-8", 4, "matHeaderCellDef"], ["class", "psl-3 tbl-col-width-per-8", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "fromDate"], ["matColumnDef", "toDate"], ["matColumnDef", "status"], ["matColumnDef", "reason"], ["class", "column-nowrap", 4, "matCellDef"], ["matColumnDef", "actions"], ["class", "psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "psl-3 tbl-col-width-per-10", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", 4, "matRowDef", "matRowDefColumns"], ["class", "tbl-spinner", 4, "ngIf"], ["class", "no-results", 3, "display", 4, "ngIf"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "click", "change"], ["mat-sort-header", ""], ["mat-header-cell", "", 3, "ngClass"], ["mat-cell", "", 1, "table-img", "tbl-col-width-per-5"], [3, "src"], ["mat-sort-header", "", 1, "psl-3", "tbl-col-width-per-8"], [1, "psl-3", "tbl-col-width-per-8"], [1, "column-nowrap"], [1, "psl-3", "tbl-col-width-per-10"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Approve", 1, "btn-tbl-edit", 3, "click"], ["aria-label", "Approve", 1, "col-white"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Reject", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Reject", 1, "col-white"], ["matRipple", ""], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], [1, "no-results"]],
        template: function LeaveRequestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Leave Request");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Leave Request");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ul", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Leave Request");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 23, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LeaveRequestComponent_Template_button_click_36_listener() {
              return ctx.removeSelectedRows();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-icon", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-table", 28, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](41, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, LeaveRequestComponent_mat_header_cell_42_Template, 2, 4, "mat-header-cell", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, LeaveRequestComponent_mat_cell_43_Template, 2, 3, "mat-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](44, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, LeaveRequestComponent_mat_header_cell_45_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, LeaveRequestComponent_mat_cell_46_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](47, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, LeaveRequestComponent_mat_header_cell_48_Template, 2, 1, "mat-header-cell", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, LeaveRequestComponent_mat_cell_49_Template, 2, 1, "mat-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](50, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, LeaveRequestComponent_mat_header_cell_51_Template, 2, 0, "mat-header-cell", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, LeaveRequestComponent_mat_cell_52_Template, 2, 1, "mat-cell", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](53, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, LeaveRequestComponent_mat_header_cell_54_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, LeaveRequestComponent_mat_cell_55_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](56, 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, LeaveRequestComponent_mat_header_cell_57_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, LeaveRequestComponent_mat_cell_58_Template, 3, 4, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](59, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, LeaveRequestComponent_mat_header_cell_60_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, LeaveRequestComponent_mat_cell_61_Template, 3, 4, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](62, 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, LeaveRequestComponent_mat_header_cell_63_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, LeaveRequestComponent_mat_cell_64_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](65, 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, LeaveRequestComponent_mat_header_cell_66_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, LeaveRequestComponent_mat_cell_67_Template, 2, 1, "mat-cell", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](68, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, LeaveRequestComponent_mat_header_cell_69_Template, 2, 0, "mat-header-cell", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, LeaveRequestComponent_mat_cell_70_Template, 7, 0, "mat-cell", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, LeaveRequestComponent_mat_header_row_71_Template, 1, 0, "mat-header-row", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, LeaveRequestComponent_mat_row_72_Template, 1, 2, "mat-row", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](73, LeaveRequestComponent_div_73_Template, 2, 1, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](74, LeaveRequestComponent_div_74_Template, 2, 2, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "mat-paginator", 55, 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.selection.hasValue());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.exampleDatabase.isTblLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.exampleDatabase.isTblLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx.dataSource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c1));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__.MatProgressSpinner],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWF2ZS1yZXF1ZXN0LmNvbXBvbmVudC5zYXNzIn0= */"]
      });

      var _ExampleDataSource2 = /*#__PURE__*/function (_angular_cdk_collecti2) {
        _inherits(_ExampleDataSource2, _angular_cdk_collecti2);

        var _super5 = _createSuper(_ExampleDataSource2);

        function _ExampleDataSource2(exampleDatabase, paginator, _sort) {
          var _this12;

          _classCallCheck(this, _ExampleDataSource2);

          _this12 = _super5.call(this);
          _this12.exampleDatabase = exampleDatabase;
          _this12.paginator = paginator;
          _this12._sort = _sort;
          _this12.filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject('');
          _this12.filteredData = [];
          _this12.renderedData = []; // Reset to the first page when the user changes the filter.

          _this12.filterChange.subscribe(function () {
            return _this12.paginator.pageIndex = 0;
          });

          return _this12;
        }

        _createClass(_ExampleDataSource2, [{
          key: "filter",
          get: function get() {
            return this.filterChange.value;
          },
          set: function set(filter) {
            this.filterChange.next(filter);
          }
          /** Connect function called by the table to retrieve one stream containing the data to render. */

        }, {
          key: "connect",
          value: function connect() {
            var _this13 = this;

            // Listen for any changes in the base data, sorting, filtering, or pagination
            var displayDataChanges = [this.exampleDatabase.dataChange, this._sort.sortChange, this.filterChange, this.paginator.page];
            this.exampleDatabase.getAllLeaveRequest();
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_19__.merge).apply(void 0, displayDataChanges).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(function () {
              // Filter data
              _this13.filteredData = _this13.exampleDatabase.data.slice().filter(function (leaveRequest) {
                var searchStr = (leaveRequest.rNo + leaveRequest.name + leaveRequest.fromDate + leaveRequest.toDate + leaveRequest.status + leaveRequest.reason).toLowerCase();
                return searchStr.indexOf(_this13.filter.toLowerCase()) !== -1;
              }); // Sort filtered data

              var sortedData = _this13.sortData(_this13.filteredData.slice()); // Grab the page's slice of the filtered sorted data.


              var startIndex = _this13.paginator.pageIndex * _this13.paginator.pageSize;
              _this13.renderedData = sortedData.splice(startIndex, _this13.paginator.pageSize);
              return _this13.renderedData;
            }));
          }
        }, {
          key: "disconnect",
          value: function disconnect() {}
          /** Returns a sorted copy of the database data. */

        }, {
          key: "sortData",
          value: function sortData(data) {
            var _this14 = this;

            if (!this._sort.active || this._sort.direction === '') {
              return data;
            }

            return data.sort(function (a, b) {
              var propertyA = '';
              var propertyB = '';

              switch (_this14._sort.active) {
                case 'id':
                  var _ref5 = [a.id, b.id];
                  propertyA = _ref5[0];
                  propertyB = _ref5[1];
                  break;

                case 'rNo':
                  var _ref6 = [a.rNo, b.rNo];
                  propertyA = _ref6[0];
                  propertyB = _ref6[1];
                  break;

                case 'name':
                  var _ref7 = [a.name, b.name];
                  propertyA = _ref7[0];
                  propertyB = _ref7[1];
                  break;

                case 'fromDate':
                  var _ref8 = [a.fromDate, b.fromDate];
                  propertyA = _ref8[0];
                  propertyB = _ref8[1];
                  break;

                case 'toDate':
                  var _ref9 = [a.toDate, b.toDate];
                  propertyA = _ref9[0];
                  propertyB = _ref9[1];
                  break;

                case 'status':
                  var _ref10 = [a.status, b.status];
                  propertyA = _ref10[0];
                  propertyB = _ref10[1];
                  break;
              }

              var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
              var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
              return (valueA < valueB ? -1 : 1) * (_this14._sort.direction === 'asc' ? 1 : -1);
            });
          }
        }]);

        return _ExampleDataSource2;
      }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.DataSource);
      /***/

    },

    /***/
    21014:
    /*!****************************************************************!*\
      !*** ./src/app/teacher/leave-request/leave-request.service.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LeaveRequestService": function LeaveRequestService() {
          return (
            /* binding */
            _LeaveRequestService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      45094);
      /* harmony import */


      var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _LeaveRequestService = /*#__PURE__*/function (_src_app_shared_Unsub4) {
        _inherits(_LeaveRequestService, _src_app_shared_Unsub4);

        var _super6 = _createSuper(_LeaveRequestService);

        function _LeaveRequestService(httpClient) {
          var _this15;

          _classCallCheck(this, _LeaveRequestService);

          _this15 = _super6.call(this);
          _this15.httpClient = httpClient;
          _this15.API_URL = 'assets/data/leaveRequest.json';
          _this15.isTblLoading = true;
          _this15.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
          return _this15;
        }

        _createClass(_LeaveRequestService, [{
          key: "data",
          get: function get() {
            return this.dataChange.value;
          }
        }, {
          key: "getDialogData",
          value: function getDialogData() {
            return this.dialogData;
          }
          /** CRUD METHODS */

        }, {
          key: "getAllLeaveRequest",
          value: function getAllLeaveRequest() {
            var _this16 = this;

            this.subs.sink = this.httpClient.get(this.API_URL).subscribe(function (data) {
              _this16.isTblLoading = false;

              _this16.dataChange.next(data);
            }, function (error) {
              _this16.isTblLoading = false;
              console.log(error.name + ' ' + error.message);
            });
          }
        }, {
          key: "addLeaveRequest",
          value: function addLeaveRequest(leaveRequest) {
            this.dialogData = leaveRequest;
            /*  this.httpClient.post(this.API_URL, leaveRequest).subscribe(data => {
              this.dialogData = leaveRequest;
              },
              (err: HttpErrorResponse) => {
             // error code here
            });*/
          }
        }, {
          key: "updateLeaveRequest",
          value: function updateLeaveRequest(leaveRequest) {
            this.dialogData = leaveRequest;
            /* this.httpClient.put(this.API_URL + leaveRequest.id, leaveRequest).subscribe(data => {
              this.dialogData = leaveRequest;
            },
            (err: HttpErrorResponse) => {
              // error code here
            }
            );*/
          }
        }, {
          key: "deleteLeaveRequest",
          value: function deleteLeaveRequest(id) {
            console.log(id);
            /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
              console.log(id);
              },
              (err: HttpErrorResponse) => {
                 // error code here
              }
            );*/
          }
        }]);

        return _LeaveRequestService;
      }(src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter);

      _LeaveRequestService.ɵfac = function LeaveRequestService_Factory(t) {
        return new (t || _LeaveRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _LeaveRequestService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _LeaveRequestService,
        factory: _LeaveRequestService.ɵfac
      });
      /***/
    },

    /***/
    99009:
    /*!*********************************************************************!*\
      !*** ./src/app/teacher/lectures/dialogs/delete/delete.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeleteDialogComponent": function DeleteDialogComponent() {
          return (
            /* binding */
            _DeleteDialogComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _lectures_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../lectures.service */
      60230);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _DeleteDialogComponent = /*#__PURE__*/function () {
        function _DeleteDialogComponent(dialogRef, data, lecturesService) {
          _classCallCheck(this, _DeleteDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.lecturesService = lecturesService;
        }

        _createClass(_DeleteDialogComponent, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            this.lecturesService.deleteLectures(this.data.id);
          }
        }]);

        return _DeleteDialogComponent;
      }();

      _DeleteDialogComponent.ɵfac = function DeleteDialogComponent_Factory(t) {
        return new (t || _DeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_lectures_service__WEBPACK_IMPORTED_MODULE_0__.LecturesService));
      };

      _DeleteDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _DeleteDialogComponent,
        selectors: [["app-delete"]],
        decls: 26,
        vars: 7,
        consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "clearfix"], [1, "font-weight-bold"], ["mat-dialog-actions", "", 1, "mb-1"], ["mat-flat-button", "", "color", "warn", 3, "mat-dialog-close", "click"], ["mat-flat-button", "", "tabindex", "-1", 3, "click"]],
        template: function DeleteDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Are you sure?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Subject Name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Class: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Date: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_22_listener() {
              return ctx.confirmDelete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_24_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.sName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data["class"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](20, 4, ctx.data.date, "MM/dd/yyyy"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", 1);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /***/
    },

    /***/
    13764:
    /*!*******************************************************************************!*\
      !*** ./src/app/teacher/lectures/dialogs/form-dialog/form-dialog.component.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormDialogComponent": function FormDialogComponent() {
          return (
            /* binding */
            _FormDialogComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _lectures_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../lectures.model */
      8718);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _lectures_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../lectures.service */
      60230);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/datepicker */
      43220);

      function FormDialogComponent_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Select Any Subject ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Class name required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please select date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter a valid time ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Select Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _FormDialogComponent = /*#__PURE__*/function () {
        function _FormDialogComponent(dialogRef, data, lecturesService, fb) {
          _classCallCheck(this, _FormDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.lecturesService = lecturesService;
          this.fb = fb;
          this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required // Validators.email,
          ]); // Set the defaults

          this.action = data.action;

          if (this.action === 'edit') {
            this.dialogTitle = data.lectures.sName;
            this.lectures = data.lectures;
          } else {
            this.dialogTitle = 'New Lectures';
            this.lectures = new _lectures_model__WEBPACK_IMPORTED_MODULE_0__.Lectures({});
          }

          this.lecturesForm = this.createContactForm();
        }

        _createClass(_FormDialogComponent, [{
          key: "getErrorMessage",
          value: function getErrorMessage() {
            return this.formControl.hasError('required') ? 'Required field' : this.formControl.hasError('email') ? 'Not a valid email' : '';
          }
        }, {
          key: "createContactForm",
          value: function createContactForm() {
            return this.fb.group({
              id: [this.lectures.id],
              sName: [this.lectures.sName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
              "class": [this.lectures["class"], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
              date: [this.lectures.date, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
              time: [this.lectures.time, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
              status: [this.lectures.status, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
            });
          }
        }, {
          key: "submit",
          value: function submit() {// emppty stuff
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "confirmAdd",
          value: function confirmAdd() {
            this.lecturesService.addLectures(this.lecturesForm.getRawValue());
          }
        }]);

        return _FormDialogComponent;
      }();

      _FormDialogComponent.ɵfac = function FormDialogComponent_Factory(t) {
        return new (t || _FormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_lectures_service__WEBPACK_IMPORTED_MODULE_1__.LecturesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
      };

      _FormDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _FormDialogComponent,
        selectors: [["app-form-dialog"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_LOCALE,
          useValue: 'en-GB'
        }])],
        decls: 71,
        vars: 18,
        consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["formControlName", "sName", "required", ""], [3, "value"], [4, "ngIf"], ["matInput", "", "formControlName", "class", "required", ""], ["matSuffix", ""], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "date", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "time", "required", ""], ["formControlName", "status", "required", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "type", "disabled", "mat-dialog-close", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"]],
        template: function FormDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_7_listener() {
              return ctx.dialogRef.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FormDialogComponent_Template_form_ngSubmit_11_listener() {
              return ctx.submit;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Subject Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Mathematics ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Chemistry ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Physics ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Biology ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, FormDialogComponent_mat_error_26_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Class Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, FormDialogComponent_mat_error_34_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-form-field", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Choose a date");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "mat-datepicker-toggle", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "mat-datepicker", null, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, FormDialogComponent_mat_error_44_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "schedule");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, FormDialogComponent_mat_error_52_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "mat-select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "mat-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " Confirm ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "mat-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Cancelled ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, FormDialogComponent_mat_error_63_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_67_listener() {
              return ctx.confirmAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_69_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dialogTitle, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.lecturesForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "Mathematics");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "Chemistry");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "Physics");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "Biology");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.lecturesForm.get("sName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.lecturesForm.get("class").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.lecturesForm.get("date").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.lecturesForm.get("time").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "Cancelled");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.lecturesForm.get("status").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.submit)("disabled", !ctx.lecturesForm.valid)("mat-dialog-close", 1);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepicker, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /***/
    },

    /***/
    43281:
    /*!********************************************************!*\
      !*** ./src/app/teacher/lectures/lectures.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LecturesComponent": function LecturesComponent() {
          return (
            /* binding */
            _LecturesComponent
          );
        },

        /* harmony export */
        "ExampleDataSource": function ExampleDataSource() {
          return (
            /* binding */
            _ExampleDataSource3
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _lectures_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lectures.service */
      60230);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/sort */
      11494);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/collections */
      38345);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      96937);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! rxjs */
      45094);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! rxjs */
      33763);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! rxjs/operators */
      5207);
      /* harmony import */


      var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dialogs/form-dialog/form-dialog.component */
      13764);
      /* harmony import */


      var _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dialogs/delete/delete.component */
      99009);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);

      var _c0 = ["filter"];

      function LecturesComponent_mat_header_cell_57_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-checkbox", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function LecturesComponent_mat_header_cell_57_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return $event ? ctx_r26.masterToggle() : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected())("ngClass", "tbl-checkbox");
        }
      }

      function LecturesComponent_mat_cell_58_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-checkbox", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LecturesComponent_mat_cell_58_Template_mat_checkbox_click_1_listener($event) {
            return $event.stopPropagation();
          })("change", function LecturesComponent_mat_cell_58_Template_mat_checkbox_change_1_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);

            var row_r28 = restoredCtx.$implicit;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return $event ? ctx_r30.selection.toggle(row_r28) : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r28 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r28))("ngClass", "tbl-checkbox");
        }
      }

      function LecturesComponent_mat_header_cell_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function LecturesComponent_mat_cell_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r32.id);
        }
      }

      function LecturesComponent_mat_header_cell_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Subject Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function LecturesComponent_mat_cell_64_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("contextmenu", function LecturesComponent_mat_cell_64_Template_mat_cell_contextmenu_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);

            var row_r33 = restoredCtx.$implicit;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r34.onContextMenu($event, row_r33);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r33.sName, "");
        }
      }

      function LecturesComponent_mat_header_cell_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function LecturesComponent_mat_cell_67_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("contextmenu", function LecturesComponent_mat_cell_67_Template_mat_cell_contextmenu_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38);

            var row_r36 = restoredCtx.$implicit;

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r37.onContextMenu($event, row_r36);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r36["class"], "");
        }
      }

      function LecturesComponent_mat_header_cell_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function LecturesComponent_mat_cell_70_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("contextmenu", function LecturesComponent_mat_cell_70_Template_mat_cell_contextmenu_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41);

            var row_r39 = restoredCtx.$implicit;

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r40.onContextMenu($event, row_r39);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, row_r39.date, "MM/dd/yyyy"), " ");
        }
      }

      function LecturesComponent_mat_header_cell_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function LecturesComponent_mat_cell_73_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("contextmenu", function LecturesComponent_mat_cell_73_Template_mat_cell_contextmenu_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r44);

            var row_r42 = restoredCtx.$implicit;

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r43.onContextMenu($event, row_r42);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r42 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r42.time, "");
        }
      }

      function LecturesComponent_mat_header_cell_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function LecturesComponent_mat_cell_76_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("contextmenu", function LecturesComponent_mat_cell_76_Template_mat_cell_contextmenu_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r47);

            var row_r45 = restoredCtx.$implicit;

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r46.onContextMenu($event, row_r45);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r45 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r45.status, "");
        }
      }

      function LecturesComponent_mat_header_cell_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function LecturesComponent_mat_cell_79_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LecturesComponent_mat_cell_79_Template_button_click_1_listener($event) {
            return $event.stopPropagation();
          })("click", function LecturesComponent_mat_cell_79_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52);

            var row_r48 = restoredCtx.$implicit;

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r51.editCall(row_r48);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LecturesComponent_mat_cell_79_Template_button_click_4_listener($event) {
            return $event.stopPropagation();
          })("click", function LecturesComponent_mat_cell_79_Template_button_click_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52);

            var row_r48 = restoredCtx.$implicit;

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r54.deleteItem(row_r48);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function LecturesComponent_mat_header_row_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function LecturesComponent_mat_row_81_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-row", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LecturesComponent_mat_row_81_Template_mat_row_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r57);

            var row_r55 = restoredCtx.$implicit;

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r56.editCall(row_r55);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("cursor", "pointer");
        }
      }

      function LecturesComponent_div_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-progress-spinner", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 40);
        }
      }

      function LecturesComponent_ng_template_86_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LecturesComponent_ng_template_86_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r60);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r59.addNew();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "add_box");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Add Record");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LecturesComponent_ng_template_86_Template_button_click_5_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r60);

            var item_r58 = restoredCtx.item;

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r61.editCall(item_r58);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "create");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Edit Record");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LecturesComponent_ng_template_86_Template_button_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r60);

            var item_r58 = restoredCtx.item;

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r62.deleteItem(item_r58);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Delete Record");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LecturesComponent_ng_template_86_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r60);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r63.refresh();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Refresh Record");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "no_encryption");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Disable");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "list_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Nested Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](88);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r23);
        }
      }

      function LecturesComponent_div_104_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No results ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("display", ctx_r24.dataSource.renderedData.length == 0 ? "" : "none");
        }
      }

      var _c1 = function _c1() {
        return [5, 10, 25, 100];
      };

      var _LecturesComponent = /*#__PURE__*/function (_src_app_shared_Unsub5) {
        _inherits(_LecturesComponent, _src_app_shared_Unsub5);

        var _super7 = _createSuper(_LecturesComponent);

        function _LecturesComponent(httpClient, dialog, lecturesService, snackBar) {
          var _this17;

          _classCallCheck(this, _LecturesComponent);

          _this17 = _super7.call(this);
          _this17.httpClient = httpClient;
          _this17.dialog = dialog;
          _this17.lecturesService = lecturesService;
          _this17.snackBar = snackBar;
          _this17.displayedColumns = ['select', 'sName', 'class', 'date', 'time', 'status', 'actions'];
          _this17.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
          _this17.contextMenuPosition = {
            x: '0px',
            y: '0px'
          };
          return _this17;
        }

        _createClass(_LecturesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadData();
          }
        }, {
          key: "refresh",
          value: function refresh() {
            this.loadData();
          }
        }, {
          key: "addNew",
          value: function addNew() {
            var _this18 = this;

            var tempDirection;

            if (localStorage.getItem('isRtl') === 'true') {
              tempDirection = 'rtl';
            } else {
              tempDirection = 'ltr';
            }

            var dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FormDialogComponent, {
              data: {
                lectures: this.lectures,
                action: 'add'
              },
              direction: tempDirection
            });
            this.subs.sink = dialogRef.afterClosed().subscribe(function (result) {
              if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataService
                _this18.exampleDatabase.dataChange.value.unshift(_this18.lecturesService.getDialogData());

                _this18.refreshTable();

                _this18.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
              }
            });
          }
        }, {
          key: "editCall",
          value: function editCall(row) {
            var _this19 = this;

            this.id = row.id;
            var tempDirection;

            if (localStorage.getItem('isRtl') === 'true') {
              tempDirection = 'rtl';
            } else {
              tempDirection = 'ltr';
            }

            var dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FormDialogComponent, {
              data: {
                lectures: row,
                action: 'edit'
              },
              direction: tempDirection
            });
            this.subs.sink = dialogRef.afterClosed().subscribe(function (result) {
              if (result === 1) {
                // When using an edit things are little different, firstly we find record inside DataService by id
                var foundIndex = _this19.exampleDatabase.dataChange.value.findIndex(function (x) {
                  return x.id === _this19.id;
                }); // Then you update that record using data from dialogData (values you enetered)


                _this19.exampleDatabase.dataChange.value[foundIndex] = _this19.lecturesService.getDialogData(); // And lastly refresh table

                _this19.refreshTable();

                _this19.showNotification('black', 'Edit Record Successfully...!!!', 'bottom', 'center');
              }
            });
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this20 = this;

            this.id = row.id;
            var tempDirection;

            if (localStorage.getItem('isRtl') === 'true') {
              tempDirection = 'rtl';
            } else {
              tempDirection = 'ltr';
            }

            var dialogRef = this.dialog.open(_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
              data: row,
              direction: tempDirection
            });
            this.subs.sink = dialogRef.afterClosed().subscribe(function (result) {
              if (result === 1) {
                var foundIndex = _this20.exampleDatabase.dataChange.value.findIndex(function (x) {
                  return x.id === _this20.id;
                }); // for delete we use splice in order to remove single object from DataService


                _this20.exampleDatabase.dataChange.value.splice(foundIndex, 1);

                _this20.refreshTable();

                _this20.showNotification('snackbar-danger', 'Delete Record Successfully...!!!', 'bottom', 'center');
              }
            });
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            this.paginator._changePageSize(this.paginator.pageSize);
          }
          /** Whether the number of selected elements matches the total number of rows. */

        }, {
          key: "isAllSelected",
          value: function isAllSelected() {
            var numSelected = this.selection.selected.length;
            var numRows = this.dataSource.renderedData.length;
            return numSelected === numRows;
          }
          /** Selects all rows if they are not all selected; otherwise clear selection. */

        }, {
          key: "masterToggle",
          value: function masterToggle() {
            var _this21 = this;

            this.isAllSelected() ? this.selection.clear() : this.dataSource.renderedData.forEach(function (row) {
              return _this21.selection.select(row);
            });
          }
        }, {
          key: "removeSelectedRows",
          value: function removeSelectedRows() {
            var _this22 = this;

            var totalSelect = this.selection.selected.length;
            this.selection.selected.forEach(function (item) {
              var index = _this22.dataSource.renderedData.findIndex(function (d) {
                return d === item;
              }); // console.log(this.dataSource.renderedData.findIndex((d) => d === item));


              _this22.exampleDatabase.dataChange.value.splice(index, 1);

              _this22.refreshTable();

              _this22.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.SelectionModel(true, []);
            });
            this.showNotification('snackbar-danger', totalSelect + ' Record Delete Successfully...!!!', 'bottom', 'center');
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this23 = this;

            this.exampleDatabase = new _lectures_service__WEBPACK_IMPORTED_MODULE_0__.LecturesService(this.httpClient);
            this.dataSource = new _ExampleDataSource3(this.exampleDatabase, this.paginator, this.sort);
            this.subs.sink = (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this.filter.nativeElement, 'keyup').subscribe(function () {
              if (!_this23.dataSource) {
                return;
              }

              _this23.dataSource.filter = _this23.filter.nativeElement.value;
            });
          }
        }, {
          key: "showNotification",
          value: function showNotification(colorName, text, placementFrom, placementAlign) {
            this.snackBar.open(text, '', {
              duration: 2000,
              verticalPosition: placementFrom,
              horizontalPosition: placementAlign,
              panelClass: colorName
            });
          } // context menu

        }, {
          key: "onContextMenu",
          value: function onContextMenu(event, item) {
            event.preventDefault();
            this.contextMenuPosition.x = event.clientX + 'px';
            this.contextMenuPosition.y = event.clientY + 'px';
            this.contextMenu.menuData = {
              item: item
            };
            this.contextMenu.menu.focusFirstItem('mouse');
            this.contextMenu.openMenu();
          }
        }]);

        return _LecturesComponent;
      }(src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_3__.UnsubscribeOnDestroyAdapter);

      _LecturesComponent.ɵfac = function LecturesComponent_Factory(t) {
        return new (t || _LecturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_lectures_service__WEBPACK_IMPORTED_MODULE_0__.LecturesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar));
      };

      _LecturesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _LecturesComponent,
        selectors: [["app-lectures"]],
        viewQuery: function LecturesComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuTrigger, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.contextMenu = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 107,
        vars: 16,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/teacher/dashboard"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"], ["filter", ""], [1, "icon-button-demo", "m-l-10", 3, "hidden"], ["mat-mini-fab", "", "color", "warn", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "sName"], [3, "contextmenu", 4, "matCellDef"], ["matColumnDef", "class"], ["matColumnDef", "date"], ["matColumnDef", "time"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], ["class", "tbl-spinner", 4, "ngIf"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["contextMenu", "matMenu"], ["matMenuContent", ""], ["nestedmenu", "matMenu"], ["mat-menu-item", ""], ["class", "no-results", 3, "display", 4, "ngIf"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "click", "change"], ["mat-sort-header", ""], [3, "contextmenu"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "click"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"], ["matRipple", "", 3, "click"], [1, "tbl-spinner"], ["color", "primary", "mode", "indeterminate", 3, "diameter"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "disabled", ""], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "no-results"]],
        template: function LecturesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "All Lecturess");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Lecturess");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ul", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Lecturess");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "li", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "input", 25, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LecturesComponent_Template_button_click_39_listener() {
              return ctx.removeSelectedRows();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-icon", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "ul", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LecturesComponent_Template_button_click_46_listener() {
              return ctx.addNew();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-icon", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LecturesComponent_Template_button_click_51_listener() {
              return ctx.refresh();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "mat-icon", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "refresh");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-table", 34, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](56, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, LecturesComponent_mat_header_cell_57_Template, 2, 4, "mat-header-cell", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, LecturesComponent_mat_cell_58_Template, 2, 3, "mat-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](59, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, LecturesComponent_mat_header_cell_60_Template, 2, 0, "mat-header-cell", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, LecturesComponent_mat_cell_61_Template, 2, 1, "mat-cell", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](62, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, LecturesComponent_mat_header_cell_63_Template, 2, 0, "mat-header-cell", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, LecturesComponent_mat_cell_64_Template, 2, 1, "mat-cell", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](65, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, LecturesComponent_mat_header_cell_66_Template, 2, 0, "mat-header-cell", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, LecturesComponent_mat_cell_67_Template, 2, 1, "mat-cell", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](68, 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](69, LecturesComponent_mat_header_cell_69_Template, 2, 0, "mat-header-cell", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](70, LecturesComponent_mat_cell_70_Template, 3, 4, "mat-cell", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](71, 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](72, LecturesComponent_mat_header_cell_72_Template, 2, 0, "mat-header-cell", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, LecturesComponent_mat_cell_73_Template, 2, 1, "mat-cell", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](74, 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](75, LecturesComponent_mat_header_cell_75_Template, 2, 0, "mat-header-cell", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](76, LecturesComponent_mat_cell_76_Template, 2, 1, "mat-cell", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](77, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](78, LecturesComponent_mat_header_cell_78_Template, 2, 0, "mat-header-cell", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](79, LecturesComponent_mat_cell_79_Template, 7, 0, "mat-cell", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](80, LecturesComponent_mat_header_row_80_Template, 1, 0, "mat-header-row", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](81, LecturesComponent_mat_row_81_Template, 1, 2, "mat-row", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](82, LecturesComponent_div_82_Template, 2, 1, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "mat-menu", null, 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](86, LecturesComponent_ng_template_86_Template, 30, 1, "ng-template", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "mat-menu", null, 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "mail_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "Item 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "call");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Item 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "chat");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "Item 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](104, LecturesComponent_div_104_Template, 2, 2, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "mat-paginator", 60, 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](85);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx.selection.hasValue());

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.exampleDatabase.isTblLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.exampleDatabase.isTblLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx.dataSource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c1));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRowDef, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuItem, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinner],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWN0dXJlcy5jb21wb25lbnQuc2FzcyJ9 */"]
      });

      var _ExampleDataSource3 = /*#__PURE__*/function (_angular_cdk_collecti3) {
        _inherits(_ExampleDataSource3, _angular_cdk_collecti3);

        var _super8 = _createSuper(_ExampleDataSource3);

        function _ExampleDataSource3(exampleDatabase, paginator, _sort) {
          var _this24;

          _classCallCheck(this, _ExampleDataSource3);

          _this24 = _super8.call(this);
          _this24.exampleDatabase = exampleDatabase;
          _this24.paginator = paginator;
          _this24._sort = _sort;
          _this24.filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject('');
          _this24.filteredData = [];
          _this24.renderedData = []; // Reset to the first page when the user changes the filter.

          _this24.filterChange.subscribe(function () {
            return _this24.paginator.pageIndex = 0;
          });

          return _this24;
        }

        _createClass(_ExampleDataSource3, [{
          key: "filter",
          get: function get() {
            return this.filterChange.value;
          },
          set: function set(filter) {
            this.filterChange.next(filter);
          }
          /** Connect function called by the table to retrieve one stream containing the data to render. */

        }, {
          key: "connect",
          value: function connect() {
            var _this25 = this;

            // Listen for any changes in the base data, sorting, filtering, or pagination
            var displayDataChanges = [this.exampleDatabase.dataChange, this._sort.sortChange, this.filterChange, this.paginator.page];
            this.exampleDatabase.getAllLecturess();
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_21__.merge).apply(void 0, displayDataChanges).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(function () {
              // Filter data
              _this25.filteredData = _this25.exampleDatabase.data.slice().filter(function (lectures) {
                var searchStr = (lectures.sName + lectures["class"] + lectures.date + lectures.time).toLowerCase();
                return searchStr.indexOf(_this25.filter.toLowerCase()) !== -1;
              }); // Sort filtered data

              var sortedData = _this25.sortData(_this25.filteredData.slice()); // Grab the page's slice of the filtered sorted data.


              var startIndex = _this25.paginator.pageIndex * _this25.paginator.pageSize;
              _this25.renderedData = sortedData.splice(startIndex, _this25.paginator.pageSize);
              return _this25.renderedData;
            }));
          }
        }, {
          key: "disconnect",
          value: function disconnect() {}
          /** Returns a sorted copy of the database data. */

        }, {
          key: "sortData",
          value: function sortData(data) {
            var _this26 = this;

            if (!this._sort.active || this._sort.direction === '') {
              return data;
            }

            return data.sort(function (a, b) {
              var propertyA = '';
              var propertyB = '';

              switch (_this26._sort.active) {
                case 'id':
                  var _ref11 = [a.id, b.id];
                  propertyA = _ref11[0];
                  propertyB = _ref11[1];
                  break;

                case 'sName':
                  var _ref12 = [a.sName, b.sName];
                  propertyA = _ref12[0];
                  propertyB = _ref12[1];
                  break;

                case 'class':
                  var _ref13 = [a["class"], b["class"]];
                  propertyA = _ref13[0];
                  propertyB = _ref13[1];
                  break;

                case 'date':
                  var _ref14 = [a.date, b.date];
                  propertyA = _ref14[0];
                  propertyB = _ref14[1];
                  break;

                case 'time':
                  var _ref15 = [a.time, b.time];
                  propertyA = _ref15[0];
                  propertyB = _ref15[1];
                  break;
              }

              var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
              var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
              return (valueA < valueB ? -1 : 1) * (_this26._sort.direction === 'asc' ? 1 : -1);
            });
          }
        }]);

        return _ExampleDataSource3;
      }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.DataSource);
      /***/

    },

    /***/
    8718:
    /*!****************************************************!*\
      !*** ./src/app/teacher/lectures/lectures.model.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Lectures": function Lectures() {
          return (
            /* binding */
            _Lectures
          );
        }
        /* harmony export */

      });

      var _Lectures = /*#__PURE__*/function () {
        function _Lectures(lectures) {
          _classCallCheck(this, _Lectures);

          {
            this.id = lectures.id || this.getRandomID();
            this.sName = lectures.dName || '';
            this["class"] = lectures.hod || '';
            this.date = lectures.phone || '';
            this.time = lectures.email || '';
            this.status = lectures.sYear || '';
          }
        }

        _createClass(_Lectures, [{
          key: "getRandomID",
          value: function getRandomID() {
            var S4 = function S4() {
              return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
            };

            return S4() + S4();
          }
        }]);

        return _Lectures;
      }();
      /***/

    },

    /***/
    60230:
    /*!******************************************************!*\
      !*** ./src/app/teacher/lectures/lectures.service.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LecturesService": function LecturesService() {
          return (
            /* binding */
            _LecturesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      45094);
      /* harmony import */


      var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _LecturesService = /*#__PURE__*/function (_src_app_shared_Unsub6) {
        _inherits(_LecturesService, _src_app_shared_Unsub6);

        var _super9 = _createSuper(_LecturesService);

        function _LecturesService(httpClient) {
          var _this27;

          _classCallCheck(this, _LecturesService);

          _this27 = _super9.call(this);
          _this27.httpClient = httpClient;
          _this27.API_URL = 'assets/data/lectures.json';
          _this27.isTblLoading = true;
          _this27.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
          return _this27;
        }

        _createClass(_LecturesService, [{
          key: "data",
          get: function get() {
            return this.dataChange.value;
          }
        }, {
          key: "getDialogData",
          value: function getDialogData() {
            return this.dialogData;
          }
          /** CRUD METHODS */

        }, {
          key: "getAllLecturess",
          value: function getAllLecturess() {
            var _this28 = this;

            this.subs.sink = this.httpClient.get(this.API_URL).subscribe(function (data) {
              _this28.isTblLoading = false;

              _this28.dataChange.next(data);
            }, function (error) {
              _this28.isTblLoading = false;
              console.log(error.name + ' ' + error.message);
            });
          }
        }, {
          key: "addLectures",
          value: function addLectures(lectures) {
            this.dialogData = lectures;
            /*  this.httpClient.post(this.API_URL, lectures).subscribe(data => {
              this.dialogData = lectures;
              },
              (err: HttpErrorResponse) => {
             // error code here
            });*/
          }
        }, {
          key: "updateLectures",
          value: function updateLectures(lectures) {
            this.dialogData = lectures;
            /* this.httpClient.put(this.API_URL + lectures.id, lectures).subscribe(data => {
              this.dialogData = lectures;
            },
            (err: HttpErrorResponse) => {
              // error code here
            }
            );*/
          }
        }, {
          key: "deleteLectures",
          value: function deleteLectures(id) {
            console.log(id);
            /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
              console.log(id);
              },
              (err: HttpErrorResponse) => {
                 // error code here
              }
            );*/
          }
        }]);

        return _LecturesService;
      }(src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter);

      _LecturesService.ɵfac = function LecturesService_Factory(t) {
        return new (t || _LecturesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _LecturesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _LecturesService,
        factory: _LecturesService.ɵfac
      });
      /***/
    },

    /***/
    42967:
    /*!********************************************************!*\
      !*** ./src/app/teacher/settings/settings.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsComponent": function SettingsComponent() {
          return (
            /* binding */
            _SettingsComponent
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
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      51095);

      var _SettingsComponent = /*#__PURE__*/function () {
        function _SettingsComponent() {
          _classCallCheck(this, _SettingsComponent);
        }

        _createClass(_SettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _SettingsComponent;
      }();

      _SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
        return new (t || _SettingsComponent)();
      };

      _SettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _SettingsComponent,
        selectors: [["app-settings"]],
        decls: 80,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/doctor/dashboard"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "card"], [1, "header"], [1, "body"], [1, "example-container"], ["appearance", "outline", 1, "example-full-width"], ["matInput", ""], ["matInput", "", "type", "password"], ["mat-raised-button", "", "color", "primary"], [1, "row", "clearfix"], [1, "col-lg-6", "col-md-12"], [1, "form-group"], [1, "col-lg-4", "col-md-12"], [1, "col-md-12"]],
        template: function SettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Security Settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Current Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "New Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Account Settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "textarea", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Save Changes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /***/
    },

    /***/
    19927:
    /*!***************************************************!*\
      !*** ./src/app/teacher/teacher-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TeacherRoutingModule": function TeacherRoutingModule() {
          return (
            /* binding */
            _TeacherRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _exam_schedule_exam_schedule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./exam-schedule/exam-schedule.component */
      24104);
      /* harmony import */


      var _lectures_lectures_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lectures/lectures.component */
      43281);
      /* harmony import */


      var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../authentication/page404/page404.component */
      1991);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      15442);
      /* harmony import */


      var _leave_request_leave_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./leave-request/leave-request.component */
      6411);
      /* harmony import */


      var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./settings/settings.component */
      42967);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent
      }, {
        path: 'lectures',
        component: _lectures_lectures_component__WEBPACK_IMPORTED_MODULE_1__.LecturesComponent
      }, {
        path: 'leave-request',
        component: _leave_request_leave_request_component__WEBPACK_IMPORTED_MODULE_4__.LeaveRequestComponent
      }, {
        path: 'exam-schedule',
        component: _exam_schedule_exam_schedule_component__WEBPACK_IMPORTED_MODULE_0__.ExamScheduleComponent
      }, {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__.SettingsComponent
      }, {
        path: '**',
        component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__.Page404Component
      }];

      var _TeacherRoutingModule = /*#__PURE__*/_createClass(function _TeacherRoutingModule() {
        _classCallCheck(this, _TeacherRoutingModule);
      });

      _TeacherRoutingModule.ɵfac = function TeacherRoutingModule_Factory(t) {
        return new (t || _TeacherRoutingModule)();
      };

      _TeacherRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _TeacherRoutingModule
      });
      _TeacherRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_TeacherRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    33042:
    /*!*******************************************!*\
      !*** ./src/app/teacher/teacher.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TeacherModule": function TeacherModule() {
          return (
            /* binding */
            _TeacherModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng2-charts */
      86178);
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-echarts */
      93104);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-apexcharts */
      34256);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/radio */
      82613);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/datepicker */
      43220);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/sort */
      11494);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng-pick-datetime */
      86050);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);
      /* harmony import */


      var _teacher_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./teacher-routing.module */
      19927);
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      15442);
      /* harmony import */


      var _lectures_lectures_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lectures/lectures.component */
      43281);
      /* harmony import */


      var _lectures_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lectures/dialogs/delete/delete.component */
      99009);
      /* harmony import */


      var _lectures_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lectures/dialogs/form-dialog/form-dialog.component */
      13764);
      /* harmony import */


      var _leave_request_leave_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./leave-request/leave-request.component */
      6411);
      /* harmony import */


      var _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./settings/settings.component */
      42967);
      /* harmony import */


      var _exam_schedule_exam_schedule_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./exam-schedule/exam-schedule.component */
      24104);
      /* harmony import */


      var _lectures_lectures_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./lectures/lectures.service */
      60230);
      /* harmony import */


      var _leave_request_leave_request_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./leave-request/leave-request.service */
      21014);
      /* harmony import */


      var _exam_schedule_exam_schedule_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./exam-schedule/exam-schedule.service */
      13453);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TeacherModule = /*#__PURE__*/_createClass(function _TeacherModule() {
        _classCallCheck(this, _TeacherModule);
      });

      _TeacherModule.ɵfac = function TeacherModule_Factory(t) {
        return new (t || _TeacherModule)();
      };

      _TeacherModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: _TeacherModule
      });
      _TeacherModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        providers: [_lectures_lectures_service__WEBPACK_IMPORTED_MODULE_9__.LecturesService, _leave_request_leave_request_service__WEBPACK_IMPORTED_MODULE_10__.LeaveRequestService, _exam_schedule_exam_schedule_service__WEBPACK_IMPORTED_MODULE_11__.ExamScheduleService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _teacher_routing_module__WEBPACK_IMPORTED_MODULE_1__.TeacherRoutingModule, ng2_charts__WEBPACK_IMPORTED_MODULE_14__.ChartsModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_15__.NgxEchartsModule.forRoot({
          echarts: function echarts() {
            return __webpack_require__.e(
            /*! import() */
            "node_modules_echarts_index_js").then(__webpack_require__.t.bind(__webpack_require__,
            /*! echarts */
            95252, 23));
          }
        }), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__.PerfectScrollbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_20__.NgApexchartsModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__.MatSnackBarModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__.MatRadioModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__.MatSortModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__.MatCheckboxModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__.MatProgressSpinnerModule, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_0__.OwlDateTimeModule, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_0__.OwlNativeDateTimeModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](_TeacherModule, {
          declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, _lectures_lectures_component__WEBPACK_IMPORTED_MODULE_3__.LecturesComponent, _lectures_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_4__.DeleteDialogComponent, _lectures_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_5__.FormDialogComponent, _leave_request_leave_request_component__WEBPACK_IMPORTED_MODULE_6__.LeaveRequestComponent, _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__.SettingsComponent, _exam_schedule_exam_schedule_component__WEBPACK_IMPORTED_MODULE_8__.ExamScheduleComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _teacher_routing_module__WEBPACK_IMPORTED_MODULE_1__.TeacherRoutingModule, ng2_charts__WEBPACK_IMPORTED_MODULE_14__.ChartsModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_15__.NgxEchartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__.PerfectScrollbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_20__.NgApexchartsModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__.MatSnackBarModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__.MatRadioModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__.MatSortModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__.MatCheckboxModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__.MatProgressSpinnerModule, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_0__.OwlDateTimeModule, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_0__.OwlNativeDateTimeModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_teacher_teacher_module_ts-es5.js.map