import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Locale} from "../models/security/locale";

@Injectable({
    providedIn: 'root',
})

export class LanguageService {

    public languages: string[] = [Locale.ENGLISH, Locale.FRENCH, Locale.KREYOL];

    constructor(public translate: TranslateService) {
        let browserLang;
        translate.addLangs(this.languages);

        if (localStorage.getItem('lang')) {
            browserLang = localStorage.getItem('lang');
        } else {
            browserLang = translate.getBrowserLang();
        }
        translate.use(browserLang.match(/en|fr|kr/) ? browserLang : Locale.ENGLISH);
    }

    public setLanguage(lang) {
        this.translate.use(lang);
        localStorage.setItem('lang', lang);
    }
}
