import { HomeInterface } from "../models/home.interface";

export class HomeFrData implements HomeInterface {

    title: string;
    subtitle: string;
    paragraphs: string[];
    buttonText: string;

    constructor()
    {
        this.title = `Tech Lead Angular`;
        this.subtitle = `Full stack developer`;
        this.paragraphs = [
            `Hello, je suis Samuel !`,
            `Je développe des applications depuis plus de 5 ans en Angular et Java.`,
            `Au travers de ces expériences, j'ai augmenté mon appétence pour le front-end.`,
        ];
        this.buttonText = `En savoir plus sur moi`;
    }
}