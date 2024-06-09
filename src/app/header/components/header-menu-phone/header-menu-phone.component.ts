import { Component, inject } from "@angular/core";
import { HeaderService } from "../../services/header.service";

@Component({
    standalone: true,
    selector: `app-header-menu-phone`,
    imports: [],
    templateUrl: `./header-menu-phone.component.html`,
    styleUrls: [`header-menu-phone.component.scss`]
})
export class HeaderMenuPhoneComponent {

    private _menuService: HeaderService = inject(HeaderService);

    /**
     * Open the panel for the header menu
     */
    public openMenuPhone() {
        this._menuService.isPhoneMenuOpened.next(true);
    }


}