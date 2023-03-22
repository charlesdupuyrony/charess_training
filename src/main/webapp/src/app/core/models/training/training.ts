import {Topic} from "./topic";
import {Institution} from "../security/institution";

export class Training {

    id: number;
    topic: Topic;
    startDate: Date;
    endDate: Date;
    location: Institution;
    capacity: number;
    categories: [{Category}];
    partners?: [{PartnerCategory}];
    participants?: [{Participant}];
    cyclic?: string;
    mode?: string;
    testType?: string;
    requester?: Institution;
    requested: Date;
    sponsor?: Institution;
    facilitator?: Institution;
    status?: string;
    statusDate: Date;

    constructor(t) {
        {
            this.id = t.id;
            this.topic = t.topic;
            this.startDate = t.startDate;
            this.endDate = t.endDate;
            this.location = t.location;
            this.capacity = t.capacity;
            this.categories = t.categories || null;
            this.partners = t.partners || null;
            this.participants = t.participants || null;
            this.cyclic = t.cyclic;
            this.mode = t.mode;
            this.testType = t.testType;
            this.requester = t.requester;
            this.requested = t.requested;
            this.sponsor = t.sponsor;
            this.facilitator = t.facilitator;
            this.status = t.status;
            this.statusDate = t.statusDate || null;
        }
    }
}
