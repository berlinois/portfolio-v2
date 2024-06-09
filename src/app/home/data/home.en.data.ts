import { HomeInterface } from "../models/home.interface";

export class HomeEnData implements HomeInterface {

    title: string;
    subtitle: string;
    paragraphs: string[];
    buttonText: string;

    constructor()
    {
        this.title = `Tech Lead Angular`;
        this.subtitle = `Full stack developer`
        this.paragraphs = [
            `Hello, I’m Samuel !`,
            `I developed many applications for more than 5 years in Angular and Java.`,
            `Through these experiences I increased my appetite for the front-end.`,
        ];
        this.buttonText = `Learn more about me`;
    }
}
