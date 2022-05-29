export class Calendar {
    id: number;
    title: string;
    start: Date;
    end: Date;
    allDay: boolean;
    className: string;
    details: string;

    constructor(t){
        this.id = t.id;
        this.title = t.topic?t.topic.title:'';
        this.start = t.startDate?new Date(t.startDate):null;
        this.end = t.endDate?new Date(t.endDate):null;
        this.allDay = true;
        this.className = "fc-event-primary";
        this.details = this.title + ' - ' + this.start + ' - ' + this.end;
    }
}
