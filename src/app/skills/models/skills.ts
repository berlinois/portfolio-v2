import { SkillsDomain } from "./skills-domain";
import { SkillsOverview } from "./skills-overview";

export interface Skills {
    overview: SkillsOverview;
    domains: SkillsDomain[];
}