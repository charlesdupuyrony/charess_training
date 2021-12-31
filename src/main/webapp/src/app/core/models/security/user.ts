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
}


