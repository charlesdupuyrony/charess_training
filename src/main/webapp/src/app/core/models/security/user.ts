import { Person } from './person';
import { Profile } from './profile';

export class User {

    person: Person;
    img?: string;
    username: string;
    locale: string;
    status: string;
    profile: Profile;
    created: string;
    creator: number;
    edited?: string;
    editor?: number;
    token?: string;

}
