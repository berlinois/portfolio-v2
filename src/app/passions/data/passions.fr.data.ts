import { Passions } from "../models/passions";
import { PassionsList } from "../models/passions-list";

export class PassionsFrench implements PassionsList {
    passions: Passions[];

    constructor() {
        this.passions = [
            {
                title: `Arbitre de rugby`,
                paragraphs: [
                    `En 2014, j'ai transformé ma passion d'amateur de rugby en devenant acteur directement dans ces matchs. Je suis devenu arbitre de rugby et maintenant, chaque week-end, je parcours tout le sud de la France pour aller siffler sur le terrain. J'ai l'opportunité de participer à des matchs universitaires, territoriaux, ainsi qu'à des matchs de Fédérale 3.`,
                    `Maintenant, je partage mon expérience et mes connaissances de la règle avec la prochaine génération en étant formateur au sein de mon comité départemental.`,
                ],
                imgSrc: `assets/image/referee.jpg`
            },
            {
                title: `Parapentiste`,
                paragraphs: [
                    `Depuis toujours j'ai rêvé de devenir pilote et de pouvoir voler dans les airs. Je n'aurais jamais pensé que des années plus tard, ça se serait concrétisé en devenant parapentiste. Un sport mélangeant la randonnée dans les montagnes, les vols au-dessus des vallées et campagnes, et la sensation de liberté pure de pouvoir parcourir librement le ciel.`,
                ],
                imgSrc: `assets/image/paraglider.jpg`
            }
        ];
    }
}
