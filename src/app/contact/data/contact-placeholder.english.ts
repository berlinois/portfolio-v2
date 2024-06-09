import { ContactButton } from "../models/contact-button";
import { ContactPlaceHolder } from "../models/contact-placeholder";

export class ContactPlaceholderEnglish implements ContactPlaceHolder {
    name: string;
    email: string;
    phone: string;
    message: string;
    button: ContactButton;

    constructor() {
        this.name = `Name`;
        this.email = `Email`;
        this.phone = `Phone number (optional)`;
        this.message = `Please write here your message`;
        this.button = {
            buttonErrorText: `Error ...`,
            buttonText: `Send`,
            buttonSentText: `Sent !`,
            buttonTravellingText: `Sending`
        }
    }
}