(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_organisation_calendar_calendar_module_ts"],{

/***/ 92121:
/*!******************************************************************!*\
  !*** ./src/app/organisation/calendar/calendar-routing.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarRoutingModule": function() { return /* binding */ CalendarRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.component */ 93564);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: '',
        component: _calendar_component__WEBPACK_IMPORTED_MODULE_0__.CalendarComponent
    }
];
class CalendarRoutingModule {
}
CalendarRoutingModule.ɵfac = function CalendarRoutingModule_Factory(t) { return new (t || CalendarRoutingModule)(); };
CalendarRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CalendarRoutingModule });
CalendarRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CalendarRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 93564:
/*!*************************************************************!*\
  !*** ./src/app/organisation/calendar/calendar.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarComponent": function() { return /* binding */ CalendarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialogs/form-dialog/form-dialog.component */ 2841);
/* harmony import */ var _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.service */ 29927);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _core_service_training_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/service/training.service */ 29744);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/angular */ 52955);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 29790);











const _c0 = ["calendar"];
class CalendarComponent extends _shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__.UnsubscribeOnDestroyAdapter {
    //tempEvents: EventInput[];
    constructor(fb, dialog, calendarService, snack, service) {
        super();
        this.fb = fb;
        this.dialog = dialog;
        this.calendarService = calendarService;
        this.snack = snack;
        this.service = service;
        this.calendarEvents = [];
        this.calendarOptions = {
            headerToolbar: {
                left: 'prev, next today',
                center: 'title',
                right: 'dayGridMonth, timeGridWeek, timeGridDay, listWeek',
            },
            height: 970,
            initialView: 'dayGridMonth',
            weekends: true,
            editable: true,
            selectable: true,
            selectMirror: true,
            dayMaxEvents: true,
            select: this.handleDateSelect.bind(this),
            eventClick: this.handleEventClick.bind(this),
            eventsSet: this.handleEvents.bind(this),
        };
        // this.dialogTitle = 'Add New Event';
        // this.calendar = new Calendar({});
        // this.addCusForm = this.createCalendarForm(this.calendar);
        alert();
        this.service.getEvents().subscribe((res) => {
            for (let i = 0; i < res.length; i++) {
                this.calendarEvents.push({
                    id: res[i].id.toString(),
                    title: res[i].topic.title,
                    start: new Date(res[i].startDate),
                    end: new Date(res[i].endDate)
                });
            }
            this.calendarOptions.initialEvents = this.calendarEvents;
            console.log('------2932----------', this.calendarEvents);
        });
        alert();
    }
    ngOnInit() {
        // this.calendarEvents = INITIAL_EVENTS;
        //  this.calendarEvents = this.service.getEvents().subscribe();
        console.log('------292----------', this.calendarEvents);
        //this.tempEvents = this.calendarEvents;
    }
    handleDateSelect(selectInfo) {
        this.addNewEvent();
    }
    addNewEvent() {
        const dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_0__.FormDialogComponent, {
            data: {
                calendar: this.calendar,
                action: 'add',
            }
        });
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 'submit') {
                this.calendarData = this.calendarService.getDialogData();
                this.calendarEvents = this.calendarEvents.concat({
                    // add new event data. must create new array
                    id: this.calendarData.id,
                    title: this.calendarData.title,
                    start: this.calendarData.startDate,
                    end: this.calendarData.endDate,
                    details: this.calendarData.details,
                });
                this.calendarOptions.events = this.calendarEvents;
                this.addCusForm.reset();
                this.toast('snackbar-success', 'Add Record Successfully...!!!');
            }
        });
    }
    handleEventClick(clickInfo) {
        this.eventClick(clickInfo);
    }
    eventClick(row) {
        const calendarData = {
            id: row.event.id,
            title: row.event.title,
            startDate: row.event.start,
            endDate: row.event.end,
            details: row.event.extendedProps.details,
        };
        const dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_0__.FormDialogComponent, {
            data: {
                calendar: calendarData,
                action: 'edit',
            }
        });
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 'submit') {
                this.calendarData = this.calendarService.getDialogData();
                this.calendarEvents.forEach(function (element, index) {
                    if (this.calendarData.id === element.id) {
                        this.editEvent(index, this.calendarData);
                    }
                }, this);
                this.toast('black', 'Edit Record Successfully...!!!');
                this.addCusForm.reset();
            }
            else if (result === 'delete') {
                this.calendarData = this.calendarService.getDialogData();
                this.calendarEvents.forEach(function (element, index) {
                    if (this.calendarData.id === element.id) {
                        row.event.remove();
                    }
                }, this);
                this.toast('snackbar-danger', 'Delete Record Successfully...!!!');
            }
        });
    }
    editEvent(eventIndex, calendarData) {
        const calendarEvents = this.calendarEvents.slice();
        const singleEvent = Object.assign({}, calendarEvents[eventIndex]);
        singleEvent.id = calendarData.id;
        singleEvent.title = calendarData.title;
        singleEvent.start = calendarData.startDate;
        singleEvent.end = calendarData.endDate;
        singleEvent.className = 'fc-event-success';
        singleEvent.details = calendarData.details;
        calendarEvents[eventIndex] = singleEvent;
        this.calendarEvents = calendarEvents; // reassign the array
        this.calendarOptions.events = calendarEvents;
    }
    handleEvents(events) {
        // this.currentEvents = events;
    }
    createCalendarForm(calendar) {
        return this.fb.group({
            id: [calendar.id],
            title: [calendar.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
            category: [calendar.category],
            startDate: [calendar.startDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            endDate: [calendar.endDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            details: [calendar.details, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')],
            ],
        });
    }
    toast(color, text) {
        this.snack.open(text, '', {
            duration: 2000, verticalPosition: 'top', horizontalPosition: 'right', panelClass: color,
        });
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_calendar_service__WEBPACK_IMPORTED_MODULE_2__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_service_training_service__WEBPACK_IMPORTED_MODULE_3__.TrainingService)); };
CalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["app-calendar"]], viewQuery: function CalendarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.calendar = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 4, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "page-title"], [1, "card"], [1, "card-body"], [1, "col-md-12", "col-sm-12"], [3, "options"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "full-calendar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 2, "training.organisation.calendar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.calendarOptions);
    } }, directives: [_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_8__.FullCalendarComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxlbmRhci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 24061:
/*!*********************************************************!*\
  !*** ./src/app/organisation/calendar/calendar.model.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Calendar": function() { return /* binding */ Calendar; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 38583);

class Calendar {
    constructor(calendar) {
        {
            this.id = calendar.id || this.getRandomID();
            this.title = calendar.title || '';
            this.category = calendar.category || '';
            this.startDate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.endDate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.details = calendar.details || '';
        }
    }
    getRandomID() {
        const S4 = () => {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return S4() + S4();
    }
}


/***/ }),

/***/ 13976:
/*!**********************************************************!*\
  !*** ./src/app/organisation/calendar/calendar.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarModule": function() { return /* binding */ CalendarModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-routing.module */ 92121);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fullcalendar/angular */ 52955);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 11436);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-pick-datetime */ 86050);
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.component */ 93564);
/* harmony import */ var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogs/form-dialog/form-dialog.component */ 2841);
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.service */ 29927);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/daygrid */ 93520);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/timegrid */ 40111);
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/list */ 4129);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/interaction */ 9549);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _core_service_training_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/service/training.service */ 29744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);



























_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__.FullCalendarModule.registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__.default,
    _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__.default,
    _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__.default,
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_8__.default,
]);
class CalendarModule {
}
CalendarModule.ɵfac = function CalendarModule_Factory(t) { return new (t || CalendarModule)(); };
CalendarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: CalendarModule });
CalendarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        _calendar_service__WEBPACK_IMPORTED_MODULE_4__.CalendarService,
        _core_service_training_service__WEBPACK_IMPORTED_MODULE_9__.TrainingService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarRoutingModule,
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__.FullCalendarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__.MatSnackBarModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule,
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__.OwlDateTimeModule,
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__.OwlNativeDateTimeModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](CalendarModule, { declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_2__.CalendarComponent, _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_3__.FormDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarRoutingModule,
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__.FullCalendarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__.MatSnackBarModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule,
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__.OwlDateTimeModule,
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__.OwlNativeDateTimeModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateModule] }); })();


/***/ }),

/***/ 29927:
/*!***********************************************************!*\
  !*** ./src/app/organisation/calendar/calendar.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarService": function() { return /* binding */ CalendarService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 45094);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 98567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 75894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class CalendarService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = "assets/data/calendar.json";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
        };
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    }
    get data() {
        return this.dataChange.value;
    }
    getDialogData() {
        return this.dialogData;
    }
    getAllCalendars() {
        return this.httpClient
            .get(this.API_URL)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    addUpdateCalendar(calendar) {
        this.dialogData = calendar;
    }
    deleteCalendar(calendar) {
        this.dialogData = calendar;
    }
    errorHandler(error) {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(errorMessage);
    }
}
CalendarService.ɵfac = function CalendarService_Factory(t) { return new (t || CalendarService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
CalendarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CalendarService, factory: CalendarService.ɵfac });


/***/ }),

/***/ 2841:
/*!************************************************************************************!*\
  !*** ./src/app/organisation/calendar/dialogs/form-dialog/form-dialog.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormDialogComponent": function() { return /* binding */ FormDialogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _calendar_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../calendar.model */ 24061);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../calendar.service */ 29927);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-pick-datetime */ 86050);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);















function FormDialogComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormDialogComponent_div_69_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.deleteEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class FormDialogComponent {
    constructor(dialogRef, data, calendarService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.calendarService = calendarService;
        this.fb = fb;
        this.showDeleteBtn = false;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.calendar.title;
            this.calendar = data.calendar;
            this.showDeleteBtn = true;
        }
        else {
            this.dialogTitle = 'New Event';
            this.calendar = new _calendar_model__WEBPACK_IMPORTED_MODULE_0__.Calendar({});
            this.showDeleteBtn = false;
        }
        this.calendarForm = this.createContactForm();
    }
    getErrorMessage() {
        return this.formControl.hasError('required')
            ? 'Required field'
            : this.formControl.hasError('email')
                ? 'Not a valid email'
                : '';
    }
    createContactForm() {
        return this.fb.group({
            id: [this.calendar.id],
            title: [
                this.calendar.title,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            ],
            category: [this.calendar.category],
            startDate: [this.calendar.startDate,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            ],
            endDate: [this.calendar.endDate,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            ],
            details: [
                this.calendar.details
            ],
        });
    }
    submit() {
        // emppty stuff
    }
    deleteEvent() {
        this.calendarService.deleteCalendar(this.calendarForm.getRawValue());
        this.dialogRef.close('delete');
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.calendarService.addUpdateCalendar(this.calendarForm.getRawValue());
        this.dialogRef.close('submit');
    }
}
FormDialogComponent.ɵfac = function FormDialogComponent_Factory(t) { return new (t || FormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_calendar_service__WEBPACK_IMPORTED_MODULE_1__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder)); };
FormDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FormDialogComponent, selectors: [["app-form-dialog"]], decls: 70, vars: 16, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "p-l-10", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "title", "required", ""], ["matSuffix", ""], ["formControlName", "category", "required", ""], [3, "value"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], ["matInput", "", "formControlName", "startDate", "placeholder", "Choose a date", "required", "", 3, "owlDateTimeTrigger", "owlDateTime"], ["matSuffix", "", 1, "date-icon", 3, "owlDateTimeTrigger"], ["startDate", ""], ["matInput", "", "formControlName", "endDate", "placeholder", "Choose a date", "required", "", 3, "owlDateTimeTrigger", "owlDateTime"], ["endDate", ""], ["matInput", "", "formControlName", "details"], [1, "col-xl-10", "col-lg-10", "col-md-12", "col-sm-12"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "type", "disabled", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"], [1, "col-xl-2", "col-lg-2", "col-md-12", "col-sm-12"], ["class", "example-button-row", 4, "ngIf"], ["mat-mini-fab", "", "aria-label", "", "color", "warn", 3, "click"], [1, "font-20"]], template: function FormDialogComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_7_listener() { return ctx.dialogRef.close(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_64_listener() { return ctx.confirmAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_66_listener() { return ctx.dialogRef.close(); });
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
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](45);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](54);
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
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_2__.OwlDateTimeInputDirective, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_2__.OwlDateTimeTriggerDirective, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_2__.OwlDateTimeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_organisation_calendar_calendar_module_ts-es2015.js.map