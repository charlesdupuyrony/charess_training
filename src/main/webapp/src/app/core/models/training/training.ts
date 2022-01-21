import {Topic} from "./topic";
import {User} from "../security/user";
import {Institution} from "../security/institution";

export class Training {
    id: number;
    startDate: Date;
    endDate: Date;
    length: number;
    topic: Topic;
    place: Institution;
    numberOfAttendees: number;
    perdiemAllowed: string;
    requester: Institution;
    sponsor: Institution;
    facilitator: Institution;
    status: string;
    created: Date;
    edited: Date;
    creator: User;
    editor: User;

    constructor(t) {
        {
            this.id = t.id;
            this.startDate = t.startDate;
            this.endDate = t.endDate;
            this.length = t.length;
            this.topic = t.topic?t.topic:new Topic({});
            this.place = t.place?t.place:new Institution({});
            this.numberOfAttendees = t.numberOfAttendees;
            this.perdiemAllowed = t.perdiemAllowed;
            this.requester = t.requester?t.requester:new Institution({});
            this.sponsor = t.sponsor?t.sponsor:new Institution({});
            this.facilitator = t.facilitator?t.facilitator:new Institution({});
            this.status = t.status;
            this.created = t.created;
            this.edited = t.edited;
            this.creator = t.creator?t.creator:new User({});
            this.editor = t.editor?t.editor:new User({});
        }
    }
}
