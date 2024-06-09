import { CommonModule, DatePipe, KeyValue } from "@angular/common";
import { Component, Input, OnChanges, SimpleChanges, inject } from "@angular/core";
import { SkillsOverview } from "src/app/skills/models/skills-overview";
import { TranslateListSkillsOverview } from "./models/translate-list-skills-overview";
import { LanguageEnum } from "src/app/header/enums/language.enum";

@Component({
    standalone: true,
    selector: 'skills-card-overview',
    imports: [CommonModule],
    providers: [DatePipe],
    templateUrl: './skills-card-overview.component.html',
    styleUrls: ['./skills-card-overview.component.scss']
})
export class SkillsCardOverviewComponent implements OnChanges {

    @Input() overview!: SkillsOverview;
    @Input() language!: LanguageEnum;

    private translateList: TranslateListSkillsOverview[] = [
        {key: 'beginingDate', french: 'Experience', english: 'Experience', order: 5},
        {key: 'birthdate', french: 'Âge', english: 'Age', order: 3},
        {key: 'city', french: 'Ville', english: 'City', order: 4},
        {key: 'drivinglicence', french: 'Permis de conduire', english: 'Driving licence', order: 7},
        {key: 'firstname', french: 'Prénom', english: 'Firstname', order: 1},
        {key: 'languages', french: 'Langues parlées', english: 'Sopken languages', order: 9},
        {key: 'lastname', french: 'Nom', english: 'Lastname', order: 2},
        {key: 'remote', french: 'Remote', english: 'Remote', order: 6},
        {key: 'typeofcontract', french: 'Type de contrat', english: 'Type of contract', order: 8},
    ];

    private datePipe: DatePipe = inject(DatePipe);

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['language']) {
            console.log(changes['language'].currentValue)
        }
    }

    /**
     * Order the list of overview's attribute with the order attribute
     * 
     * @param a 
     * @param b 
     * @returns 
     */
    public keyDescOrder = (a: KeyValue<keyof SkillsOverview, string | Date>, b: KeyValue<keyof SkillsOverview, string | Date>): number => {
        const i = this.translateList.find(e => e.key == a.key);
        const u = this.translateList.find(e => e.key == b.key);
        if (i && u) {
            return i.order - u.order;

        } else {
            return 0;
        }
    }

    /**
     * Return the key depending on the choosen language
     * 
     * @param val 
     * @returns 
     */
    public getKey(val: string): string | undefined {
        return this.language === LanguageEnum.FRENCH ?
            this.translateList.find(e => e.key == val)?.french :
            this.translateList.find(e => e.key == val)?.english;
    }

    public getValue(item: KeyValue<string, string | Date>): string | null {
        if (item.value instanceof Date) {
            const diffTime = (new Date()).getTime() - item.value.getTime();
            const oneYear = 365 * 24 * 60 * 60 * 1000; // in ms
            let diffTimeYears: number = 0;
            const yearTranslate: string = this.language === LanguageEnum.FRENCH ? ` ans` : ' years';

            if (item.key == `beginingDate`) {
                diffTimeYears = Math.round(diffTime / oneYear);
            } else if (item.key == `birthdate`) {
                diffTimeYears = Math.trunc(diffTime / oneYear);
            }

            return diffTimeYears + yearTranslate;
        } else {
            return item.value;
        }
    }
}