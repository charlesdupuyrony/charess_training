import { Profile } from './profile';
import { Locale } from './locale';
import { Person } from './person';

export class User {
    id: number;
    username: string;
    person: Person;
    locale: Locale;
    status: string;
    profile?: Profile;
    img?: string;
    token?: string;

    constructor(usr) {
        {
            this.id = usr.id;
            this.username = usr.username;
            this.person = usr.person?usr.person:new Person({});
        }
    }
}


