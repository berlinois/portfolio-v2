import { CommonModule } from "@angular/common";
import { Component, DestroyRef, OnInit, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import emailJs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from "src/environments/environment";
import { LanguageService } from "../services/language.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { LanguageEnum } from "../header/enums/language.enum";
import { ContactPlaceHolder } from "./models/contact-placeholder";
import { ContactPlaceholderEnglish } from "./data/contact-placeholder.english";
import { ContactPlaceholderFrench } from "./data/contact-placeholder.french";
import { BehaviorSubject } from "rxjs";
import { StateMailEnum } from "./models/state-mail-enum";
import { ContactPhone } from "./models/contact-phone";
import { ContactPhoneFrench } from "./data/contact-phone.french";
import { ContactPhoneEnglish } from "./data/contact-phone.english";

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        CommonModule
    ],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    public form: FormGroup = new FormGroup({
        nom: new FormControl(null, Validators.required),
        mail: new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        telephone: new FormControl(null, [Validators.pattern("^[0-9]{10}$")]),
        message: new FormControl(null, Validators.required)
    });
    
    public listPlaceholders!: ContactPlaceHolder;

    public phoneText!: ContactPhone;

    public buttonText: BehaviorSubject<string> = new BehaviorSubject(``);

    public mailSending: boolean = false;

    public isPhoneShown: boolean = false;

    private langagueService: LanguageService = inject(LanguageService);
    private destroyRef: DestroyRef = inject(DestroyRef);
    private stateMail: StateMailEnum = StateMailEnum.NOT_SENT;

    ngOnInit(): void {
        this.langagueService.getLanguageObs().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(language => {
            switch(language){
                case LanguageEnum.FRENCH:
                    this.listPlaceholders = new ContactPlaceholderFrench();
                    this.phoneText = new ContactPhoneFrench();
                    this._manageButtonText();
                    break;
                case LanguageEnum.ENGLISH:
                    this.listPlaceholders = new ContactPlaceholderEnglish();
                    this.phoneText = new ContactPhoneEnglish();
                    this._manageButtonText();
                    break;
            }
        });
    }

    private _manageButtonText(): void {
        if (this.stateMail == StateMailEnum.NOT_SENT) {
            this.buttonText.next(this.listPlaceholders.button.buttonText);
        } else if (this.stateMail == StateMailEnum.SENT) {
            this.buttonText.next(this.listPlaceholders.button.buttonSentText);
        } else if (this.stateMail == StateMailEnum.ERROR) {
            this.buttonText.next(this.listPlaceholders.button.buttonErrorText);
        } else if (this.stateMail == StateMailEnum.TRAVELLING) {
            this.buttonText.next(this.listPlaceholders.button.buttonTravellingText);
        }
    }

    public sendMail(): void {
        this.mailSending = true;
        this.stateMail = StateMailEnum.TRAVELLING;
        this._manageButtonText();
        emailJs.send(
            environment.emailJs.serviceId,
            environment.emailJs.templateId,
            this.form.value,
            environment.emailJs.publicKey
        ).then((result: EmailJSResponseStatus) => {
            this.stateMail = StateMailEnum.SENT;
            this._manageButtonText();
        }, (error) => {
            this.stateMail = StateMailEnum.ERROR;
            this._manageButtonText();
        });
    }

    /**
     * Is input text invalid
     */
    public isFieldInvalid(formName: string): boolean | undefined {
        return this.form.get(formName)?.invalid && this.form.get(formName)?.touched;
    }

    /**
     * Is mail empty or bad written
     */
    public isMailInvalid(): string {
        const mail = this.form.get('mail');
        if (mail != null && mail.touched && mail.errors) {
            if (mail.errors['pattern']) {
                return `Veuillez saisir un mail valide`;
            } else if (mail.errors['required']) {
                return `Veuillez remplir le champ`;
            } else {
                return ``;
            }
        } else {
            return ``;
        }
    }

    /**
     * Show the number
     */
    public showNumber(): void {
        ;
    }

    /**
     * Calculate if show text or phone number
     */
    public get getPhoneNumber(): string {
        return this.isPhoneShown ? this.buildPhoneNumber() : this.phoneText.linkText;
    }

    /** 
     * Build phone number to avoid any leak in the web 
     */
    private buildPhoneNumber(): string {
        let p: string = `+`;
        const listNumber: number[] = [5,8,1,0,9,3,2,6,4,7];
        const listAnswer: number[] = [5,5,-1,7,-1,6,0,-1,3,9,-1,5,6,-1,0,8];
        for(let index of listAnswer) {
            p += index == -1 ? ` ` : listNumber[index];
        }
        return p;
    }
}

