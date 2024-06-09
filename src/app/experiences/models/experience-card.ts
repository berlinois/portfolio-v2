import { ExperienceLink } from "./experience-link";
import { ExperienceParagraph } from "./experience-paragraph";
import { ExperienceSizeCard } from "./experience-size-card";
import { ExperienceTechnology } from "./experience-technology";

export interface ExperienceCard {
    title: string;
    dateBegin: Date;
    dateEnd: Date;
    city: string;
    paragraphList: ExperienceParagraph[];
    technologies: ExperienceTechnology[];
    link?: ExperienceLink;
    size: ExperienceSizeCard;
    timeExperience?: string;
}