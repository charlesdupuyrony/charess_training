import {Person} from "../../core/models/security/person";

export class Institution {
    id: number;
    name: string;
    address?: string;
    manager?: Person;
    parent?: Institution;

    constructor(institution) {
        {
            this.id = institution.id;
            this.name = institution.name;
            this.address = institution.address || '';
            this.manager = institution.manager || null;
            this.parent = institution.parent || null;
        }
    }
}
