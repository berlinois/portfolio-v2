import { Passions } from "../models/passions";
import { PassionsList } from "../models/passions-list";

export class PassionsEnglish implements PassionsList {
    passions: Passions[];

    constructor() {
        this.passions = [
            {
                title: `Rugby referee`,
                paragraphs: [
                    `Since 2014, I have turned my passion for watching rugby games into being an actor in these games. I became a referee, and now each weekend, my activity brings me everywhere in the south of France. I have the opportunity to participate in university games, territorial games, and now federation games too.`,
                    `Now I'm sharing my experience and my knowledge about the rules of this sport with the next generation by teaching the new referees.`,
                ],
                imgSrc: `assets/image/referee.jpg`
            },
            {
                title: `Paragliding`,
                paragraphs: [
                    `My childhood dream has always been to fly as a pilot. I never thought it would happen many years later with a paraglider. It mixes the hike to reach the top of the mountains, the flights above the campaigns and valleys, and the feeling of freedom to go where you want in the sky.`,
                ],
                imgSrc: `assets/image/paraglider.jpg`
            }
        ];
    }
}