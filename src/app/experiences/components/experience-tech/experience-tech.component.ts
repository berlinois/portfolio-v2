import { Component, Input } from "@angular/core";
import { ExperienceTechnology } from "src/app/experiences/models/experience-technology";

@Component({
    standalone: true,
    selector: 'exp-tech',
    templateUrl: './experience-tech.component.html',
    styleUrls: ['./experience-tech.component.scss']
})
export class ExperienceTechCard {
    @Input() tech!: ExperienceTechnology;
}
