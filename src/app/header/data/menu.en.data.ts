import { ItemMenu } from "../models/item-menu";
import { Menu } from "../models/menu";

export class MenuEnglishData implements Menu {

    listItems: ItemMenu[];

    constructor() {
        this.listItems = [
            {value: 'Experiences', link: '/experiences'},
            {value: 'Skills', link: '/skills'},
            {value: 'Passions', link: '/passions'},
            {value: 'Contact', link: '/contact'}
        ];
    }
}