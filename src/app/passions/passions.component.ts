import { Component, DestroyRef, OnInit, inject } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { LanguageEnum } from "src/app/header/enums/language.enum";
import { LanguageService } from "src/app/services/language.service";
import { PassionsList } from "./models/passions-list";
import { PassionsFrench } from "./data/passions.fr.data";
import { PassionsEnglish } from "./data/passions.en.data";
import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl: `./passions.component.html`,
    styleUrls: [`./passions.component.scss`]
})
export class PassionsComponent implements OnInit {
    private languageService: LanguageService = inject(LanguageService);
    private destroyRef: DestroyRef = inject(DestroyRef);

    public passionsList!: PassionsList;
        
    ngOnInit(): void {
        this.languageService.getLanguageObs().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(language => {
            switch(language){
                case LanguageEnum.FRENCH:
                    this.passionsList = new PassionsFrench();
                    break;
                case LanguageEnum.ENGLISH:
                    this.passionsList = new PassionsEnglish();
                    break;
            }
        });
    }

}

