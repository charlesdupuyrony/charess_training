export class Institution {
    id: number;
    name: string;
    accronym: string;
    fullname: string;
    managers?: [{Person}];
    locationAddress?: Location;
    textAddress?: string;
    address?: string;
    parent?: Institution;

    constructor(institution){
        {
            this.id = institution.id;
            this.name = institution.name;
            this.accronym = institution.accronym;
            this.parent = institution.parent || null;
            this.textAddress = institution.textAddress || '';
            this.locationAddress = institution.locationAddress || null;
            this.managers = institution.managers || null;
        }
    }
}