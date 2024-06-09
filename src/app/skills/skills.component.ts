import { Component, DestroyRef, OnInit, inject } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { LanguageEnum } from "src/app/header/enums/language.enum";
import { LanguageService } from "src/app/services/language.service";
import { Skills } from "./models/skills";
import { SkillsFrench } from "./data/skills.fr.data";
import { SkillsEnglish } from "./data/skills.en.data";
import { SkillsCardTechComponent } from "./components/skills-card-tech/skills-card-tech.component";
import { CommonModule } from "@angular/common";
import { SkillsCardOverviewComponent } from "./components/skills-card-overview/skills-card-overview.component";

@Component({
    standalone: true,
    imports: [
        SkillsCardTechComponent,
        SkillsCardOverviewComponent,
        CommonModule
    ],
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

    public skills!: Skills;
    public language!: LanguageEnum;
    
    private languageService: LanguageService = inject(LanguageService);
    private destroyRef: DestroyRef = inject(DestroyRef);
    
    ngOnInit(): void {
        this.languageService.getLanguageObs().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(language => {
            switch(language){
                case LanguageEnum.FRENCH:
                    this.language = LanguageEnum.FRENCH;
                    this.skills = new SkillsFrench();
                    break;
                case LanguageEnum.ENGLISH:
                    this.language = LanguageEnum.ENGLISH;
                    this.skills = new SkillsEnglish();
                    break;
            }
        });
    }
}
