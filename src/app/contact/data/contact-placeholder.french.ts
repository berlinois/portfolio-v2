import { ContactButton } from "../models/contact-button";
import { ContactPlaceHolder } from "../models/contact-placeholder";

export class ContactPlaceholderFrench implements ContactPlaceHolder {
    name: string;
    email: string;
    phone: string;
    message: string;
    button: ContactButton;

    constructor() {
        this.name = `Nom`;
        this.email = `Mail`;
        this.phone = `Numéro de téléphone (facultatif)`;
        this.message = `Écrivez votre message ici`;
        this.button = {
            buttonErrorText: `Erreur ...`,
            buttonText: `Envoyer`,
            buttonSentText: `Envoyé !`,
            buttonTravellingText: `En cours d'envoi`
        }
    }
}
