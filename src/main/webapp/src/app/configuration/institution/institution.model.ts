export class Institution {
    id: number;
    name: string;
    managers?: [{Manager}];
    locationAddress?: Location;
    textAddress?: string;
    address?: string;
    parent?: Institution;

    constructor(institution) {
        {
            this.id = institution.id;
            this.name = institution.name;
            this.parent = institution.parent || null;
            this.textAddress = institution.textAddress || '';
            this.locationAddress = institution.locationAddress || null;
            this.managers = institution.managers || null;
        }
    }
}

export class Manager {
    id: number;
    identifier: string;
    firstName: string;
    lastName: string;
    email: string;

    constructor(manager) {
        this.id = manager.id;
        this.identifier = manager.identifier;
        this.firstName = manager.firstName;
        this.lastName = manager.lastName
        this.email = manager.email;
    }
}