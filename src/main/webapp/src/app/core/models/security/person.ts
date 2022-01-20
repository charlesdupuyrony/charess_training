import * as moment from 'moment';

export class Person {
    id: number;
    identifier: string;
    firstName: string;
    lastName: string;
    gender: string;
    phone: string;
    email: string;
    birthDate: moment.Moment;
    locationAddress: Location;
    textAddress: string;
    fullname: string;
    alias: string;

    constructor(person) {
        {
            this.id = person?.id;
            this.identifier =  person?.identifier;
            this.firstName = person?.firstName;
            this.lastName = person?.lastName;
            this.email = person?.email;
            this.gender = person?.gender;
        }
    }
}