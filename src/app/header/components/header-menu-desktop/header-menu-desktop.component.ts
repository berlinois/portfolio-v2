import { Component, DestroyRef, OnInit, inject } from "@angular/core";
import { ItemMenu } from "../../models/item-menu";
import { Router, RouterModule } from "@angular/router";
import { Menu } from "../../models/menu";
import { LanguageService } from "src/app/services/language.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { LanguageEnum } from "../../enums/language.enum";
import { MenuFrenchData } from "../../data/menu.fr.data";
import { MenuEnglishData } from "../../data/menu.en.data";
import { HeaderService } from "../../services/header.service";

@Component({
    standalone: true,
    selector: `app-header-menu-desktop`,
    imports: [
        RouterModule
    ],
    templateUrl: `./header-menu-desktop.component.html`,
    styleUrls: [`header-menu-desktop.component.scss`]
})
export class HeaderMenuDesktopComponent implements OnInit {

    public menu!: Menu;

    public hideAnimation: boolean = false;

    private router: Router = inject(Router);
    private langagueService: LanguageService = inject(LanguageService);
    private destroyRef: DestroyRef = inject(DestroyRef);
    private _headerService: HeaderService = inject(HeaderService);

    ngOnInit(): void {
        this.langagueService.getLanguageObs().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(language => {
            switch(language){
                case LanguageEnum.FRENCH:
                    this.menu = new MenuFrenchData();
                    break;
                case LanguageEnum.ENGLISH:
                    this.menu = new MenuEnglishData();
                    break;
            }
        });
    }

    public isOnFirstPage(): boolean {
        const firstItem: ItemMenu | undefined = this.menu.listItems.at(0);
        if (firstItem) {
            return this.isOnPath(firstItem.link);
        } else {
            return true;
        }
    }

    public isOnPath(path: string): boolean {
        return this._headerService.isOnPath(path);
    }

    public goToHome(): void {
        this.hideAnimation = true;
        setTimeout(() => {
            this.hideAnimation = false;
            this.router.navigate([`/home`]);
        }, 600);
    }
}