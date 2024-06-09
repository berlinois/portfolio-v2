import { ContactPhone } from "../models/contact-phone";

export class ContactPhoneEnglish implements ContactPhone {
    linkText: string;
    startText: string;
    emailText: string;

    constructor() {
        this.startText = `You can contact me by telephone, by leaving me a voice or written message:`;
        this.linkText = `Show the number`;
        this.emailText = `Or you can send me an e-mail using the form below:`;
    }
}
