export class Manager {
    id: number;
    identifier: string;
    firstName: string;
    lastName: string;
    email: string;

    constructor(person) {
        {
            this.id = person?.id;
            this.identifier =  person?.identifier;
            this.firstName = person?.firstName;
            this.lastName = person?.lastName;
            this.email = person?.email;
        }
    }
}