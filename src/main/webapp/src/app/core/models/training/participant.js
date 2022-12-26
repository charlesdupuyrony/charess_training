import {Institution} from "../security/institution";
import {Training} from "./training";

export class Participant {
    id: number;
    person: Person;
    partner: Institution;
    training: Training;

    constructor(p){
        {
            this.id = p.id;
            this.person = p.person;
            this.partner = p.partner;
            this.training = p.training;

        }
    }

}
