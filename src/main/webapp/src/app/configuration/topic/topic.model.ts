import {Person} from "../../core/models/security/person";

export class Topic {
    id: number;
    name: string;
    manager?: Person;
    locationAddress?: Location;
    textAddress?: string;
    address?: string;
    parent?: Institution;

    constructor(institution) {
        {
            this.id = institution.id;
            this.name = institution.name;
            this.textAddress = institution.textAddress || '';
            this.address = institution.address || '';
            this.manager = institution.manager || null;
            this.parent = institution.parent || null;
            this.locationAddress = institution.locationAddress || null;
        }
    }
}
