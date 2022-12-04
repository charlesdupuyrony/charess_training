(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_calendar_calendar_module_ts"], {
    /***/
    19987:
    /*!*****************************************************!*\
      !*** ./src/app/calendar/calendar-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarRoutingModule": function CalendarRoutingModule() {
          return (
            /* binding */
            _CalendarRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./calendar.component */
      86304);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _calendar_component__WEBPACK_IMPORTED_MODULE_0__.CalendarComponent
      }];

      var _CalendarRoutingModule = function _CalendarRoutingModule() {
        _classCallCheck(this, _CalendarRoutingModule);
      };

      _CalendarRoutingModule.ɵfac = function CalendarRoutingModule_Factory(t) {
        return new (t || _CalendarRoutingModule)();
      };

      _CalendarRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _CalendarRoutingModule
      });
      _CalendarRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_CalendarRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    86304:
    /*!************************************************!*\
      !*** ./src/app/calendar/calendar.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarComponent": function CalendarComponent() {
          return (
            /* binding */
            _CalendarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _calendar_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./calendar.model */
      89169);
      /* harmony import */


      var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dialogs/form-dialog/form-dialog.component */
      82758);
      /* harmony import */


      var _events_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./events-util */
      46132);
      /* harmony import */


      var _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/UnsubscribeOnDestroyAdapter */
      7868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./calendar.service */
      62374);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @fullcalendar/angular */
      52955);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);

      var _c0 = ["calendar"];

      function CalendarComponent_li_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-checkbox", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CalendarComponent_li_28_Template_mat_checkbox_change_1_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);

            var filter_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r2.changeCategory($event, filter_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var filter_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", filter_r1.checked)("value", filter_r1.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", filter_r1.value, " ");
        }
      }

      var _CalendarComponent = /*#__PURE__*/function (_shared_UnsubscribeOn) {
        _inherits(_CalendarComponent, _shared_UnsubscribeOn);

        var _super = _createSuper(_CalendarComponent);

        function _CalendarComponent(fb, dialog, calendarService, snackBar) {
          var _this;

          _classCallCheck(this, _CalendarComponent);

          _this = _super.call(this);
          _this.fb = fb;
          _this.dialog = dialog;
          _this.calendarService = calendarService;
          _this.snackBar = snackBar;
          _this.filterOptions = 'All';
          _this.filterItems = ['work', 'personal', 'important', 'travel', 'friends'];
          _this.filters = [{
            name: 'work',
            value: 'Work',
            checked: true
          }, {
            name: 'personal',
            value: 'Personal',
            checked: true
          }, {
            name: 'important',
            value: 'Important',
            checked: true
          }, {
            name: 'travel',
            value: 'Travel',
            checked: true
          }, {
            name: 'friends',
            value: 'Friends',
            checked: true
          }];
          _this.calendarOptions = {
            headerToolbar: {
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },
            initialView: 'dayGridMonth',
            weekends: true,
            editable: true,
            selectable: true,
            selectMirror: true,
            dayMaxEvents: true,
            select: _this.handleDateSelect.bind(_assertThisInitialized(_this)),
            eventClick: _this.handleEventClick.bind(_assertThisInitialized(_this)),
            eventsSet: _this.handleEvents.bind(_assertThisInitialized(_this))
          };
          _this.dialogTitle = 'Add New Event';
          _this.calendar = new _calendar_model__WEBPACK_IMPORTED_MODULE_0__.Calendar({});
          _this.addCusForm = _this.createCalendarForm(_this.calendar);
          return _this;
        }

        _createClass(_CalendarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.calendarEvents = _events_util__WEBPACK_IMPORTED_MODULE_2__.INITIAL_EVENTS;
            this.tempEvents = this.calendarEvents;
            this.calendarOptions.initialEvents = this.calendarEvents;
          }
        }, {
          key: "handleDateSelect",
          value: function handleDateSelect(selectInfo) {
            this.addNewEvent();
          }
        }, {
          key: "addNewEvent",
          value: function addNewEvent() {
            var _this2 = this;

            var tempDirection;

            if (localStorage.getItem('isRtl') === 'true') {
              tempDirection = 'rtl';
            } else {
              tempDirection = 'ltr';
            }

            var dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FormDialogComponent, {
              data: {
                calendar: this.calendar,
                action: 'add'
              },
              direction: tempDirection
            });
            this.subs.sink = dialogRef.afterClosed().subscribe(function (result) {
              if (result === 'submit') {
                _this2.calendarData = _this2.calendarService.getDialogData();
                _this2.calendarEvents = _this2.calendarEvents.concat({
                  // add new event data. must create new array
                  id: _this2.calendarData.id,
                  title: _this2.calendarData.title,
                  start: _this2.calendarData.startDate,
                  end: _this2.calendarData.endDate,
                  className: _this2.getClassNameValue(_this2.calendarData.category),
                  groupId: _this2.calendarData.category,
                  details: _this2.calendarData.details
                });
                _this2.calendarOptions.events = _this2.calendarEvents;

                _this2.addCusForm.reset();

                _this2.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
              }
            });
          }
        }, {
          key: "changeCategory",
          value: function changeCategory(event, filter) {
            if (event.checked) {
              this.filterItems.push(filter.name);
            } else {
              this.filterItems.splice(this.filterItems.indexOf(filter.name), 1);
            }

            this.filterEvent(this.filterItems);
          }
        }, {
          key: "filterEvent",
          value: function filterEvent(element) {
            var list = this.calendarEvents.filter(function (x) {
              return element.map(function (y) {
                return y;
              }).includes(x.groupId);
            });
            this.calendarOptions.events = list;
          }
        }, {
          key: "handleEventClick",
          value: function handleEventClick(clickInfo) {
            this.eventClick(clickInfo);
          }
        }, {
          key: "eventClick",
          value: function eventClick(row) {
            var _this3 = this;

            var calendarData = {
              id: row.event.id,
              title: row.event.title,
              category: row.event.groupId,
              startDate: row.event.start,
              endDate: row.event.end,
              details: row.event.extendedProps.details
            };
            var tempDirection;

            if (localStorage.getItem('isRtl') === 'true') {
              tempDirection = 'rtl';
            } else {
              tempDirection = 'ltr';
            }

            var dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FormDialogComponent, {
              data: {
                calendar: calendarData,
                action: 'edit'
              },
              direction: tempDirection
            });
            this.subs.sink = dialogRef.afterClosed().subscribe(function (result) {
              if (result === 'submit') {
                _this3.calendarData = _this3.calendarService.getDialogData();

                _this3.calendarEvents.forEach(function (element, index) {
                  if (this.calendarData.id === element.id) {
                    this.editEvent(index, this.calendarData);
                  }
                }, _this3);

                _this3.showNotification('black', 'Edit Record Successfully...!!!', 'bottom', 'center');

                _this3.addCusForm.reset();
              } else if (result === 'delete') {
                _this3.calendarData = _this3.calendarService.getDialogData();

                _this3.calendarEvents.forEach(function (element, index) {
                  if (this.calendarData.id === element.id) {
                    row.event.remove();
                  }
                }, _this3);

                _this3.showNotification('snackbar-danger', 'Delete Record Successfully...!!!', 'bottom', 'center');
              }
            });
          }
        }, {
          key: "editEvent",
          value: function editEvent(eventIndex, calendarData) {
            var calendarEvents = this.calendarEvents.slice();
            var singleEvent = Object.assign({}, calendarEvents[eventIndex]);
            singleEvent.id = calendarData.id;
            singleEvent.title = calendarData.title;
            singleEvent.start = calendarData.startDate;
            singleEvent.end = calendarData.endDate;
            singleEvent.className = this.getClassNameValue(calendarData.category);
            singleEvent.groupId = calendarData.category;
            singleEvent.details = calendarData.details;
            calendarEvents[eventIndex] = singleEvent;
            this.calendarEvents = calendarEvents; // reassign the array

            this.calendarOptions.events = calendarEvents;
          }
        }, {
          key: "handleEvents",
          value: function handleEvents(events) {// this.currentEvents = events;
          }
        }, {
          key: "createCalendarForm",
          value: function createCalendarForm(calendar) {
            return this.fb.group({
              id: [calendar.id],
              title: [calendar.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
              category: [calendar.category],
              startDate: [calendar.startDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              endDate: [calendar.endDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              details: [calendar.details, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]]
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
        }, {
          key: "getClassNameValue",
          value: function getClassNameValue(category) {
            var className;
            if (category === 'work') className = 'fc-event-success';else if (category === 'personal') className = 'fc-event-warning';else if (category === 'important') className = 'fc-event-primary';else if (category === 'travel') className = 'fc-event-danger';else if (category === 'friends') className = 'fc-event-info';
            return className;
          }
        }]);

        return _CalendarComponent;
      }(_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_3__.UnsubscribeOnDestroyAdapter);

      _CalendarComponent.ɵfac = function CalendarComponent_Factory(t) {
        return new (t || _CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_calendar_service__WEBPACK_IMPORTED_MODULE_4__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar));
      };

      _CalendarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _CalendarComponent,
        selectors: [["app-calendar"]],
        viewQuery: function CalendarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.calendar = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
        decls: 32,
        vars: 2,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["href", "#", "onClick", "return false;"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "col-md-12", "col-sm-12"], [1, "card"], [1, "card-body"], [1, "col-md-2", "col-sm-12", "p-l-30"], [1, "m-b-25"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "filter-container"], [4, "ngFor", "ngForOf"], [1, "col-md-10", "col-sm-12"], [1, "panel-body"], [3, "options"], ["color", "primary", 3, "checked", "value", "change"]],
        template: function CalendarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Calendar");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Calendar");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_22_listener() {
              return ctx.addNewEvent();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Add Event");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "My Calendars");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, CalendarComponent_li_28_Template, 3, 3, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "full-calendar", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filters);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.calendarOptions);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_11__.FullCalendarComponent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxlbmRhci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    89169:
    /*!********************************************!*\
      !*** ./src/app/calendar/calendar.model.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Calendar": function Calendar() {
          return (
            /* binding */
            _Calendar
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _Calendar = /*#__PURE__*/function () {
        function _Calendar(calendar) {
          _classCallCheck(this, _Calendar);

          {
            this.id = calendar.id || this.getRandomID();
            this.title = calendar.title || '';
            this.category = calendar.category || '';
            this.startDate = (0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.endDate = (0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.details = calendar.details || '';
          }
        }

        _createClass(_Calendar, [{
          key: "getRandomID",
          value: function getRandomID() {
            var S4 = function S4() {
              return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
            };

            return S4() + S4();
          }
        }]);

        return _Calendar;
      }();
      /***/

    },

    /***/
    979:
    /*!*********************************************!*\
      !*** ./src/app/calendar/calendar.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarsModule": function CalendarsModule() {
          return (
            /* binding */
            _CalendarsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./calendar-routing.module */
      19987);
      /* harmony import */


      var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fullcalendar/angular */
      52955);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/datepicker */
      43220);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/radio */
      82613);
      /* harmony import */


      var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng-pick-datetime */
      86050);
      /* harmony import */


      var _calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./calendar.component */
      86304);
      /* harmony import */


      var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dialogs/form-dialog/form-dialog.component */
      82758);
      /* harmony import */


      var _calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./calendar.service */
      62374);
      /* harmony import */


      var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fullcalendar/daygrid */
      93520);
      /* harmony import */


      var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fullcalendar/timegrid */
      40111);
      /* harmony import */


      var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fullcalendar/list */
      4129);
      /* harmony import */


      var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fullcalendar/interaction */
      9549);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);

      _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_9__.FullCalendarModule.registerPlugins([_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_8__["default"]]);

      var _CalendarsModule = function _CalendarsModule() {
        _classCallCheck(this, _CalendarsModule);
      };

      _CalendarsModule.ɵfac = function CalendarsModule_Factory(t) {
        return new (t || _CalendarsModule)();
      };

      _CalendarsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: _CalendarsModule
      });
      _CalendarsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        providers: [_calendar_service__WEBPACK_IMPORTED_MODULE_4__.CalendarService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarRoutingModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_9__.FullCalendarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__.MatRadioModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__.OwlDateTimeModule, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__.OwlNativeDateTimeModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](_CalendarsModule, {
          declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_2__.CalendarComponent, _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_3__.FormDialogComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarRoutingModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_9__.FullCalendarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__.MatRadioModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__.OwlDateTimeModule, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__.OwlNativeDateTimeModule]
        });
      })();
      /***/

    },

    /***/
    62374:
    /*!**********************************************!*\
      !*** ./src/app/calendar/calendar.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarService": function CalendarService() {
          return (
            /* binding */
            _CalendarService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      45094);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      98567);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      75894);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CalendarService = /*#__PURE__*/function () {
        function _CalendarService(httpClient) {
          _classCallCheck(this, _CalendarService);

          this.httpClient = httpClient;
          this.API_URL = "assets/data/calendar.json";
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
              "Content-Type": "application/json"
            })
          };
          this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        }

        _createClass(_CalendarService, [{
          key: "data",
          get: function get() {
            return this.dataChange.value;
          }
        }, {
          key: "getDialogData",
          value: function getDialogData() {
            return this.dialogData;
          }
        }, {
          key: "getAllCalendars",
          value: function getAllCalendars() {
            return this.httpClient.get(this.API_URL).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
          }
        }, {
          key: "addUpdateCalendar",
          value: function addUpdateCalendar(calendar) {
            this.dialogData = calendar;
          }
        }, {
          key: "deleteCalendar",
          value: function deleteCalendar(calendar) {
            this.dialogData = calendar;
          }
        }, {
          key: "errorHandler",
          value: function errorHandler(error) {
            var errorMessage = "";

            if (error.error instanceof ErrorEvent) {
              // Get client-side error
              errorMessage = error.error.message;
            } else {
              // Get server-side error
              errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
            }

            console.log(errorMessage);
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(errorMessage);
          }
        }]);

        return _CalendarService;
      }();

      _CalendarService.ɵfac = function CalendarService_Factory(t) {
        return new (t || _CalendarService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
      };

      _CalendarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _CalendarService,
        factory: _CalendarService.ɵfac
      });
      /***/
    },

    /***/
    82758:
    /*!***********************************************************************!*\
      !*** ./src/app/calendar/dialogs/form-dialog/form-dialog.component.ts ***!
      \***********************************************************************/

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


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _calendar_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../calendar.model */
      89169);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _calendar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../calendar.service */
      62374);
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


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-pick-datetime */
      86050);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function FormDialogComponent_div_69_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormDialogComponent_div_69_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.deleteEvent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _FormDialogComponent = /*#__PURE__*/function () {
        function _FormDialogComponent(dialogRef, data, calendarService, fb) {
          _classCallCheck(this, _FormDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.calendarService = calendarService;
          this.fb = fb;
          this.showDeleteBtn = false;
          this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required // Validators.email,
          ]); // Set the defaults

          this.action = data.action;

          if (this.action === 'edit') {
            this.dialogTitle = data.calendar.title;
            this.calendar = data.calendar;
            this.showDeleteBtn = true;
          } else {
            this.dialogTitle = 'New Event';
            this.calendar = new _calendar_model__WEBPACK_IMPORTED_MODULE_0__.Calendar({});
            this.showDeleteBtn = false;
          }

          this.calendarForm = this.createContactForm();
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
              id: [this.calendar.id],
              title: [this.calendar.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              category: [this.calendar.category],
              startDate: [this.calendar.startDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              endDate: [this.calendar.endDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              details: [this.calendar.details]
            });
          }
        }, {
          key: "submit",
          value: function submit() {// emppty stuff
          }
        }, {
          key: "deleteEvent",
          value: function deleteEvent() {
            this.calendarService.deleteCalendar(this.calendarForm.getRawValue());
            this.dialogRef.close('delete');
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "confirmAdd",
          value: function confirmAdd() {
            this.calendarService.addUpdateCalendar(this.calendarForm.getRawValue());
            this.dialogRef.close('submit');
          }
        }]);

        return _FormDialogComponent;
      }();

      _FormDialogComponent.ɵfac = function FormDialogComponent_Factory(t) {
        return new (t || _FormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_calendar_service__WEBPACK_IMPORTED_MODULE_1__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
      };

      _FormDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _FormDialogComponent,
        selectors: [["app-form-dialog"]],
        decls: 70,
        vars: 16,
        consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "p-l-10", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "title", "required", ""], ["matSuffix", ""], ["formControlName", "category", "required", ""], [3, "value"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], ["matInput", "", "formControlName", "startDate", "placeholder", "Choose a date", "required", "", 3, "owlDateTimeTrigger", "owlDateTime"], ["matSuffix", "", 1, "date-icon", 3, "owlDateTimeTrigger"], ["startDate", ""], ["matInput", "", "formControlName", "endDate", "placeholder", "Choose a date", "required", "", 3, "owlDateTimeTrigger", "owlDateTime"], ["endDate", ""], ["matInput", "", "formControlName", "details"], [1, "col-xl-10", "col-lg-10", "col-md-12", "col-sm-12"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "type", "disabled", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"], [1, "col-xl-2", "col-lg-2", "col-md-12", "col-sm-12"], ["class", "example-button-row", 4, "ngIf"], ["mat-mini-fab", "", "aria-label", "", "color", "warn", 3, "click"], [1, "font-20"]],
        template: function FormDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_7_listener() {
              return ctx.dialogRef.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "turned_in_not");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Work ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Personal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " Important ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " Travel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Friends ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Start date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "today");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "owl-date-time", null, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "End date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "today");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "owl-date-time", null, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Event Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "textarea", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_64_listener() {
              return ctx.confirmAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_66_listener() {
              return ctx.dialogRef.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, FormDialogComponent_div_69_Template, 4, 0, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](45);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.dialogTitle, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.calendarForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "work");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "personal");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "important");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "travel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "friends");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("owlDateTimeTrigger", _r0)("owlDateTime", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("owlDateTimeTrigger", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("owlDateTimeTrigger", _r1)("owlDateTime", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("owlDateTimeTrigger", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.submit)("disabled", !ctx.calendarForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showDeleteBtn);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_2__.OwlDateTimeInputDirective, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_2__.OwlDateTimeTriggerDirective, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_2__.OwlDateTimeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /***/
    },

    /***/
    46132:
    /*!*****************************************!*\
      !*** ./src/app/calendar/events-util.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "INITIAL_EVENTS": function INITIAL_EVENTS() {
          return (
            /* binding */
            _INITIAL_EVENTS
          );
        }
        /* harmony export */

      });

      var d = new Date();
      var day = d.getDate();
      var month = d.getMonth();
      var year = d.getFullYear();
      var _INITIAL_EVENTS = [{
        id: "event1",
        title: "All Day Event",
        start: new Date(year, month, 1, 0, 0),
        end: new Date(year, month, 1, 23, 59),
        className: "fc-event-success",
        groupId: "work",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see."
      }, {
        id: "event2",
        title: "Break",
        start: new Date(year, month, day + 28, 16, 0),
        end: new Date(year, month, day + 29, 20, 0),
        allDay: false,
        className: "fc-event-primary",
        groupId: "important",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see. "
      }, {
        id: "event3",
        title: "Shopping",
        start: new Date(year, month, day + 4, 12, 0),
        end: new Date(year, month, day + 4, 20, 0),
        allDay: false,
        className: "fc-event-warning",
        groupId: "personal",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see. "
      }, {
        id: "event4",
        title: "Meeting",
        start: new Date(year, month, day + 14, 10, 30),
        end: new Date(year, month, day + 16, 20, 0),
        allDay: false,
        className: "fc-event-success",
        groupId: "work",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see."
      }, {
        id: "event5",
        title: "Lunch",
        start: new Date(year, month, day, 11, 0),
        end: new Date(year, month, day, 14, 0),
        allDay: false,
        className: "fc-event-primary",
        groupId: "important",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see."
      }, {
        id: "event6",
        title: "Meeting",
        start: new Date(year, month, day + 2, 12, 30),
        end: new Date(year, month, day + 2, 14, 30),
        allDay: false,
        className: "fc-event-success",
        groupId: "work",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see."
      }, {
        id: "event7",
        title: "Birthday Party",
        start: new Date(year, month, day + 17, 19, 0),
        end: new Date(year, month, day + 17, 19, 30),
        allDay: false,
        className: "fc-event-warning",
        groupId: "personal",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see."
      }, {
        id: "event8",
        title: "Go to Delhi",
        start: new Date(year, month, day + -5, 10, 0),
        end: new Date(year, month, day + -4, 10, 30),
        allDay: false,
        className: "fc-event-danger",
        groupId: "travel",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see."
      }, {
        id: "event9",
        title: "Get To Gather",
        start: new Date(year, month, day + 6, 10, 0),
        end: new Date(year, month, day + 7, 10, 30),
        allDay: false,
        className: "fc-event-info",
        groupId: "friends",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see."
      }, {
        id: "event10",
        title: "Collage Party",
        start: new Date(year, month, day + 20, 10, 0),
        end: new Date(year, month, day + 20, 10, 30),
        allDay: false,
        className: "fc-event-info",
        groupId: "friends",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see."
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_calendar_calendar_module_ts-es5.js.map