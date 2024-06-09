import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { SkillsDomain } from "src/app/skills/models/skills-domain";

@Component({
    standalone: true,
    selector: `skills-card-tech`,
    imports: [
        CommonModule
    ],
    templateUrl: './skills-card-tech.component.html',
    styleUrls: ['./skills-card-tech.component.scss']
})
export class SkillsCardTechComponent {
    @Input() domain!: SkillsDomain;
    public random: number = Math.random();
}
