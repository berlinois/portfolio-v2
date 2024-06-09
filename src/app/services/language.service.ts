import { registerLocaleData } from "@angular/common";
import { Injectable } from "@angular/core";
import localeFrench from '@angular/common/locales/fr';
import localeEnglish from '@angular/common/locales/en';
import { BehaviorSubject, Observable } from "rxjs";
import { LanguageEnum } from "src/app/header/enums/language.enum";

@Injectable({
    providedIn: `root`
})
export class LanguageService {

    private languageChoosen$: BehaviorSubject<LanguageEnum>
        = new BehaviorSubject<LanguageEnum>(LanguageEnum.FRENCH);

    public locale: string = `fr-FR`;

    constructor()
    {
        registerLocaleData(localeFrench);
    }
    
    /**
     * Change language for automatic date format
     * @param language 
     */
    public changeLanguage(language: LanguageEnum): void {
        this.languageChoosen$.next(language);
        switch(language) {
            case LanguageEnum.FRENCH:
                this.locale = `fr-FR`;
                registerLocaleData(localeFrench);
                break;
            case LanguageEnum.ENGLISH:
                this.locale = `en-EN`;
                registerLocaleData(localeEnglish);
                break;
        }
    }

    /**
     * Get observable to handle the change of language
     * @returns 
     */
    public getLanguageObs(): Observable<LanguageEnum> {
        return this.languageChoosen$.asObservable();
    }
}