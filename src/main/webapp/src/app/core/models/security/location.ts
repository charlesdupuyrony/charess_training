import { Person } from './person';

export class Location {

    id: number;
    name: string;
    nature: string;
    parent: Location;
    created: string;
    creator: Person;
    edited?: string;
    editor?: Person;

}
