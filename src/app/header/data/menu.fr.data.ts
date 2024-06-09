import { ItemMenu } from "../models/item-menu";
import { Menu } from "../models/menu";

export class MenuFrenchData implements Menu {

    listItems: ItemMenu[];

    constructor() {
        this.listItems = [
            {value: 'Expériences', link: '/experiences'},
            {value: 'Compétences', link: '/skills'},
            {value: 'Passions', link: '/passions'},
            {value: 'Contact', link: '/contact'}
        ];
    }
}
