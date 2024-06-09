import { formatDate } from "@angular/common";
import { Pipe, PipeTransform, inject } from "@angular/core";
import { LanguageService } from "../services/language.service";

@Pipe({
    name: `localDate`,
    standalone: true,
})
export class LocalDatePipe implements PipeTransform {

    private languageService: LanguageService = inject(LanguageService);

    transform(value: any, format: string) {
        
        if (!value || ! format) {
            return ``;
        }

        return formatDate(value, format, this.languageService.locale);
    }
}