import {Institution} from "../security/institution";
import {Training} from "./training";

export class PartnerTrainingParticipants {
    id: number;
    training: Training;
    partner: Institution;
    participants: [{Person}];

    constructor(t) {
        {
            this.id = t.id;
            this.training = t.training;
            this.partner = t.partner;
            this.participants = t.participants;
        }
    }
}

