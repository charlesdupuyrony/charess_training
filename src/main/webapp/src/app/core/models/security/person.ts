import * as moment from 'moment';

export class Person {
    id: number;
    identifier: string;
    identifierType: string;
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

}