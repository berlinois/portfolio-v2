import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { routes } from "./routes/routes";
import { LOCALE_ID } from "@angular/core";
import { LanguageService } from "./app/services/language.service";

bootstrapApplication(
    AppComponent,
    {
        providers: [
            provideRouter(routes),
            {
                provide: LOCALE_ID,
                deps: [LanguageService],
                useFactory: (languageService: LanguageService) => languageService.locale
            }
        ]
    })
.catch(err =>console.log(err));