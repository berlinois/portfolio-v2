import { AfterViewInit, Component, DestroyRef, ElementRef, HostListener, OnInit, QueryList, ViewChildren, inject } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { LanguageEnum } from "src/app/header/enums/language.enum";
import { LanguageService } from "src/app/services/language.service";
import { ExperiencesList } from "./models/experiences-list";
import { ExperiencesFrench } from "./data/experiences.fr.data";
import { ExperiencesEnglish } from "./data/experiences.en.data";
import { ExperienceCardComponent } from "./components/experiene-card/experiene-card.component";

@Component({
    standalone: true,
    imports: [ExperienceCardComponent],
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperiencesComponent implements OnInit, AfterViewInit {

    public experiencesList!: ExperiencesList;

    private langagueService: LanguageService = inject(LanguageService);
    private destroyRef: DestroyRef = inject(DestroyRef);

    @HostListener('window:scroll', ['$event'])
    onWindowScroll($event: any) {
        // console.log(window.scrollY)
    }

    @ViewChildren("ref") listeExpElement!: QueryList<ElementRef>;

    ngAfterViewInit() {
        // console.log(this.listeExpElement.toArray());
    }

    ngOnInit(): void {
        this.langagueService.getLanguageObs().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(language => {
            switch(language){
                case LanguageEnum.FRENCH:
                    this.experiencesList = new ExperiencesFrench();
                    this.experiencesList.experiencesList.forEach(exp => 
                        exp.timeExperience = this.calculateTimeExperience(exp.dateBegin, exp.dateEnd, `mois`)
                    );
                    break;
                case LanguageEnum.ENGLISH:
                    this.experiencesList = new ExperiencesEnglish();
                    this.experiencesList.experiencesList.forEach(exp => 
                        exp.timeExperience = this.calculateTimeExperience(exp.dateBegin, exp.dateEnd, `month`, true)
                    );
                    break;
            }
        });
    }

    /**
     * Calculate the number of month between two dates
     * 
     * @param dateBegin 
     * @param dateEnd 
     * @param monthWording 
     * @param pluralCheck 
     * @returns 
     */
    private calculateTimeExperience(dateBegin: Date, dateEnd: Date, monthWording: string, pluralCheck: boolean = false): string {
        const nbYears = dateEnd.getFullYear() - dateBegin.getFullYear();
        const nbMonths = dateEnd.getMonth() - dateBegin.getMonth();
        const nbMonthsTotal = nbYears * 12 + nbMonths;
        if (pluralCheck && nbMonthsTotal > 1) {
            monthWording += `s`;
        }
        return `${nbMonthsTotal} ${monthWording}`;
    }
}