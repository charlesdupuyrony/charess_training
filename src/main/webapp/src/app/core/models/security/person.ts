import { Location } from './location';

export class Person {

    id: number;
    identifier: string;
    identifierType: string;
    firstName: string;
    lastName: string;
    fullname: string;
    alias: string;
    gender: string;
    phone?: string;
    email?: string;
    birthDate?: string;
    locationAddress?: Location;
    textAddress?: string;

}