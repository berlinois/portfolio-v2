import { ContactPhone } from "../models/contact-phone";

export class ContactPhoneFrench implements ContactPhone {
    linkText: string;
    startText: string;
    emailText: string;

    constructor() {
        this.startText = `Vous pouvez me contacter par téléphone, en me laissant un message vocal ou écrit :`;
        this.linkText = `Afficher le numero`;
        this.emailText = `Ou bien, vous pouvez m'envoyer un e-mail via le formulaire ci-dessous :`;
    }
}