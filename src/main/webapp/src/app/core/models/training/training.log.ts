import {User} from "../security/user";
import {Training} from "./training";

export class TrainingLog {
    id: number;
    training: Training;
    status: string;
    statusDate: Date;
    text: string;
    created: Date;
    creator: User;

    constructor(t) {
        {
            this.id = t.id;
            this.training = t.training;
            this.status = t.status;
            this.statusDate = t.statusDate;
            this.text = t.text;
        }
    }
}
