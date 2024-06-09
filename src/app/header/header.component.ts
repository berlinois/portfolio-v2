import { Component } from "@angular/core";
import { HeaderMenuDesktopComponent } from "./components/header-menu-desktop/header-menu-desktop.component";
import { HeaderLanguageComponent } from "./components/header-language/header-language.component";
import { HeaderMenuPhoneComponent } from "./components/header-menu-phone/header-menu-phone.component";

@Component({
    standalone: true,
    selector: `app-header-main`,
    imports: [
        HeaderMenuDesktopComponent,
        HeaderLanguageComponent,
        HeaderMenuPhoneComponent
    ],
    templateUrl: `./header.component.html`,
    styleUrls: [`./header.component.scss`]
})
export class HeaderComponent {


}