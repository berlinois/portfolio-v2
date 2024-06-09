import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ExperienceCard } from "src/app/experiences/models/experience-card";
import { LocalDatePipe } from "src/app/pipes/local-date.pipe";
import { ExperienceTechCard } from "../experience-tech/experience-tech.component";
import { ExperienceTechnology } from "src/app/experiences/models/experience-technology";

@Component({
    standalone: true,
    selector: 'exp-card',
    imports: [
        CommonModule,
        LocalDatePipe,
        ExperienceTechCard
    ],
    templateUrl: './experiene-card.component.html',
    styleUrls: ['experiene-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
    
    @Input() exp!: ExperienceCard;
    @Input() isLast: boolean = false;

    public listColumnTech!: ExperienceTechnology[][];

    private readonly TECHNOLOGIES_COLUMN_LENGTH: number = 3;

    ngOnInit(): void {
        const nbColumns: number =
            Math.ceil(this.exp.technologies.length / this.TECHNOLOGIES_COLUMN_LENGTH);

        this.listColumnTech = new Array(nbColumns);
        let indexTab = nbColumns - 1;
        for (let i = 0; i < nbColumns; i++) {
            if (i == 0) {
                this.listColumnTech[indexTab] = this.exp.technologies
                    .slice(- this.TECHNOLOGIES_COLUMN_LENGTH);
            } else {
                this.listColumnTech[indexTab] = this.exp.technologies
                    .slice(
                        (i + 1) * (- this.TECHNOLOGIES_COLUMN_LENGTH),
                        i * (- this.TECHNOLOGIES_COLUMN_LENGTH));
            }
            indexTab--;
        }

        const firstIndex = this.listColumnTech[0];
        if (firstIndex.length < this.TECHNOLOGIES_COLUMN_LENGTH) {
            for (let i = firstIndex.length; i<this.TECHNOLOGIES_COLUMN_LENGTH; i++) {
                firstIndex[i] = {
                    name: `toto`,
                    percentage: `10`,
                    blank: true
                }
            }
        }
    }
}