import { Component, DestroyRef, OnInit, inject } from "@angular/core";
import { LanguageEnum } from "../../enums/language.enum";
import { LanguageService } from "src/app/services/language.service";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    standalone: true,
    selector: `app-header-language`,
    templateUrl: `./header-language.component.html`,
    styleUrls: [`./header-language.component.scss`]
})
export class HeaderLanguageComponent implements OnInit {

    public language = LanguageEnum;

    private languageChoosen: LanguageEnum = LanguageEnum.FRENCH;

    private languageService: LanguageService = inject(LanguageService);

    private destroyRef: DestroyRef = inject(DestroyRef);

    ngOnInit(): void {
        this.languageService.getLanguageObs().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(language => {
            switch(language) {
                case LanguageEnum.FRENCH:
                    this.languageChoosen = LanguageEnum.FRENCH;
                    break;
                case LanguageEnum.ENGLISH:
                    this.languageChoosen = LanguageEnum.ENGLISH;
                    break;
            }
        });
    }

    /**
     * Return true if the language selected is French
     * @returns 
     */
    public isFenchSelected(): boolean {
        return this.languageChoosen == LanguageEnum.FRENCH;
    }

    /**
     * Change the language
     * @param language 
     */
    public changeLanguage(language: LanguageEnum): void {
        if (language !== this.languageChoosen) {
            this.languageService.changeLanguage(language);
        }
    }
    
}