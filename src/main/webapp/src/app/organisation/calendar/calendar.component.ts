import {Component, ViewChild, OnInit} from '@angular/core';
import {CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventApi,
} from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/angular';

import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Calendar } from './calendar.model';
import { FormDialogComponent } from './dialogs/form-dialog/form-dialog.component';
import { CalendarService } from './calendar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { INITIAL_EVENTS } from './events-util';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {UnsubscribeOnDestroyAdapter} from "../../shared/UnsubscribeOnDestroyAdapter";

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
})

export class CalendarComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
    @ViewChild('calendar', { static: false })
    calendar: Calendar | null;
    public addCusForm: FormGroup;
    dialogTitle: string;
    calendarData: any;

    calendarEvents: EventInput[];
    //tempEvents: EventInput[];

    constructor(private fb: FormBuilder, private dialog: MatDialog, public calendarService: CalendarService, private snack: MatSnackBar){
        super();
        // this.dialogTitle = 'Add New Event';
        // this.calendar = new Calendar({});
        // this.addCusForm = this.createCalendarForm(this.calendar);
    }

    public ngOnInit(): void {
        this.calendarEvents = INITIAL_EVENTS;
        //this.tempEvents = this.calendarEvents;
        this.calendarOptions.initialEvents = this.calendarEvents;
    }

    calendarOptions: CalendarOptions = {
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

    handleDateSelect(selectInfo: DateSelectArg) {
        this.addNewEvent();
    }

    addNewEvent() {
        const dialogRef = this.dialog.open(FormDialogComponent, {
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
        this.toast(
        'snackbar-success',
        'Add Record Successfully...!!!'
        );
        }
        });
    }

    handleEventClick(clickInfo: EventClickArg) {
        this.eventClick(clickInfo);
    }

    eventClick(row) {
        const calendarData: any = {
        id: row.event.id,
        title: row.event.title,
        startDate: row.event.start,
        endDate: row.event.end,
        details: row.event.extendedProps.details,
        };

        const dialogRef = this.dialog.open(FormDialogComponent, {
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
        this.toast(
        'black',
        'Edit Record Successfully...!!!'
        );
        this.addCusForm.reset();
        } else if (result === 'delete') {
        this.calendarData = this.calendarService.getDialogData();
        this.calendarEvents.forEach(function (element, index) {
        if (this.calendarData.id === element.id) {
        row.event.remove();
        }
        }, this);

        this.toast('snackbar-danger','Delete Record Successfully...!!!');
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

    handleEvents(events: EventApi[]) {
    // this.currentEvents = events;
    }

    createCalendarForm(calendar): FormGroup {
        return this.fb.group({
            id: [calendar.id],
            title: [calendar.title, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
            category: [calendar.category],
            startDate: [calendar.startDate, [Validators.required]],
            endDate: [calendar.endDate, [Validators.required]],
            details: [calendar.details, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')],
            ],
        });
    }

    private toast(color, text) {
        this.snack.open(text, '', {
            duration: 2000, verticalPosition: 'top', horizontalPosition: 'right', panelClass: color,
        });
    }
}
