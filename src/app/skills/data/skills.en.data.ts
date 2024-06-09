import { Skills } from "../models/skills";
import { SkillsDomain } from "../models/skills-domain";
import { SkillsOverview } from "../models/skills-overview";

export class SkillsEnglish implements Skills {
    domains: SkillsDomain[];
    overview: SkillsOverview;

    constructor() {
        this.overview = {
            beginingDate: new Date(2017, 8, 1),
            birthdate: new Date(1995, 11, 30),
            city: `Toulouse`,
            drivinglicence: `Yes`,
            firstname: `Samuel`,
            lastname: `Messelet`,
            languages: `French / English`,
            remote: `Yes`,
            typeofcontract: `Freelance`
        };

        this.domains = [
            {
                    title: `Languages`,
                    technologies: [
                        { title: `Typescript`, percentage: `90`},
                        { title: `Javascript`, percentage: `85`},
                        { title: `Java 15`, percentage: `80`},
                    ]
            },
            {
                    title: `Frameworks`,
                    technologies: [
                        { title: `Angular 15`, percentage: `95`},
                        { title: `AngularJS`, percentage: `70`},
                        { title: `Spring Boot`, percentage: `80`},
                    ]
            },
            {
                    title: `Databases`,
                    technologies: [
                        { title: `PostgreSQL`, percentage: `90`},
                        { title: `Oracle`, percentage: `80`},
                        { title: `Redis`, percentage: `70`},
                    ]
            },
            {
                    title: `Methodologies`,
                    technologies: [
                        { title: `Agile Scrum`, percentage: `95`},
                        { title: `Agile SAFe`, percentage: `95`},
                    ]
            },
            {
                    title: `Other`,
                    technologies: [
                        { title: `Git`, percentage: `90`},
                        { title: `Heroku`, percentage: `80`},
                        { title: `SOAP`, percentage: `70`},
                    ]
            },
        ]
    }
}
