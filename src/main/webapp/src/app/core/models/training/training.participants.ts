import {Training} from "./training";

export class TrainingParticipants {
    id: number;
    training: Training;
    participants: [{Participant}];

    constructor(t) {
        {
            this.id = t.id;
            this.training = t.training;
            this.participants = t.participants;
        }
    }
}

