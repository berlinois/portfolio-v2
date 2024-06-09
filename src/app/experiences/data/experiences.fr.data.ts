import { ExperienceCard } from "../models/experience-card";
import { ExperiencesList } from "../models/experiences-list";

export class ExperiencesFrench implements ExperiencesList {
    experiencesList: ExperienceCard[];

    constructor() {
        this.experiencesList = [
            {
                title: `Développeur web`,
                city: `Toulouse, France`,
                dateBegin: new Date(2023, 3),
                dateEnd: new Date(2023, 4),
                link: {
                    linkSrc: `https://sianamaste.fr`,
                    linkText: `sianamaste.fr`
                },
                paragraphList: [
                    {
                        title: `Développement d'un portail Web sianamaste.fr :`,
                        listText: [
                            `Recueil du besoin métier et proposition de maquettes`,
                            `Recherche de la charte graphique`,
                            `Réalisation des pages avec itérations afin d'améliorer le rendu et l'homogénéité du site`,
                            `Maintien à jour des informations textuelles du site`,
                        ]
                    },
                ],
                technologies: [
                    {
                        name: `Angular 14`,
                        percentage: `100`
                    },
                    {
                        name: `Firebase`,
                        percentage: `100`
                    },
                    {
                        name: `Git`,
                        percentage: `100`
                    },
                ],
                size: {
                    height: `20rem`,
                    width: `70rem`
                }
            },
            {
                title: `Responsable front-end`,
                city: `Toulouse, France`,
                dateBegin: new Date(2020, 4),
                dateEnd: new Date(2022, 12),
                paragraphList: [
                    {
                        title: `Tâches quotidiennes :`,
                        listText: [
                            `Responsable de la partie front de l'application`,
                            `Lien avec le client pour adapter les propositions d'amélioration`,
                            `Réalisation de features full stack`,
                            `Intervention sur plusieurs équipes du train Safe pour penser et développer des écrans`,
                            `Encadrement de développeurs juniors`,
                        ]
                    },
                    {
                        title: `Application Web :`,
                        listText: [
                            `Développement d'une application web pour un acteur leader dans la production et distribution de l'énergie en France`,
                            `Méthodologie Agile avec le framework SAFe ; participations à 15 PI`,
                        ]
                    },
                ],
                technologies: [
                    {
                        name: `Angular 12`,
                        percentage: `100`
                    },
                    {
                        name: `Java 15`,
                        percentage: `70`
                    },
                    {
                        name: `Spring Cloud`,
                        percentage: `80`
                    },
                    {
                        name: `Heroku`,
                        percentage: `80`
                    },
                    {
                        name: `Salesforce`,
                        percentage: `60`
                    },
                    {
                        name: `Redis`,
                        percentage: `60`
                    },
                    {
                        name: `Git`,
                        percentage: `100`
                    },
                ],
                size: {
                    height: `27rem`,
                    width: `80rem`
                }
            },
            {
                title: `Développeur web`,
                city: `Toulouse, France`,
                dateBegin: new Date(2018, 9),
                dateEnd: new Date(2020, 4),
                paragraphList: [
                    {
                        title: `Application Web :`,
                        listText: [
                            `Développement d'une application web pour un acteur leader dans la production et distribution de l'énergie en France`,
                            `Méthodologie Agile avec le framework Scrum appliquée au sein de l'équipe. Intervention en transverse d'un UI/UX designer afin d'améliorer le processus Agile`,
                            `Séminaire entre l'équipe et les utilisateurs directs pour foisonner le backlog`,
                        ]
                    },
                ],
                technologies: [
                    {
                        name: `AngularJS`,
                        percentage: `100`
                    },
                    {
                        name: `JEE`,
                        percentage: `80`
                    },
                    {
                        name: `SOAP`,
                        percentage: `70`
                    },
                    {
                        name: `Jenkins`,
                        percentage: `70`
                    },
                    {
                        name: `Git`,
                        percentage: `100`
                    },
                ],
                size: {
                    height: `19rem`,
                    width: `78rem`
                }
            },
            {
                title: `Étudiant en alternance`,
                city: `Toulouse, France`,
                dateBegin: new Date(2017, 9),
                dateEnd: new Date(2018, 9),
                paragraphList: [
                    {
                        title: `Plateforme d'échanges sécurisés :`,
                        listText: [
                            `Déploiements de flux via script Shell`,
                            `Gestion des incidents en temps réel de la plateforme (analyse, actions correctives)`
                        ]
                    },
                    {
                        title: `Portail Web : `,
                        listText: [
                            `Développement d'un portail Web "from scratch"`,
                            `Méthodologie Kanban utilisée au sein de l'équipe de développement`
                        ]
                    }
                ],
                technologies: [
                    {
                        name: `Angular 5`,
                        percentage: `100`
                    },
                    {
                        name: `Spring Boot`,
                        percentage: `70`
                    },
                    {
                        name: `Jenkins`,
                        percentage: `60`
                    },
                    {
                        name : `SVN`,
                        percentage: `100`
                    }
                ],
                size: {
                    height: `20rem`,
                    width: `68rem`
                }
            },
        ];
    }
}