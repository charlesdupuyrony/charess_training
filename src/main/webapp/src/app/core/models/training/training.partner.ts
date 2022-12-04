import {Training} from "./training";
import {Institution} from "../security/institution";

export class TrainingPartner {

    id: number;
    training: Training;
    partner: Institution;
    status: String;
    participantsQuantity: number;
    participants: [{Person}];


    constructor(t) {
        {
            this.id = t.id;
            this.training = t.training;
            this.partner = t.partner;
            this.status = t.status;
            this.participantsQuantity = t.participantsQuantity;
            this.participants = t.participants || null;
        }
    }
}
