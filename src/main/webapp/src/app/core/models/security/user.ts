import { Profile } from './profile';
import { Locale } from './locale';
import { Person } from './person';
import {Institution} from "./institution";

export class User {
    id: number;
    username: string;
    person: Person;
    locale: Locale;
    status: string;
    profile?: Profile;
    institution?: Institution;
    img?: string;
    token?: string;

    constructor(usr) {
        {
            this.id = usr?.id;
            this.username = usr?.username;
            this.profile = usr?.profile;
            this.institution = usr?.institution;
            this.status = usr.status;
            this.person = usr.person?usr.person:new Person({});
        }
    }
}


