import { Component, DestroyRef, ElementRef, Renderer2, ViewChild, inject } from "@angular/core";
import { HeaderService } from "../../services/header.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Menu } from "../../models/menu";
import { LanguageEnum } from "../../enums/language.enum";
import { MenuFrenchData } from "../../data/menu.fr.data";
import { MenuEnglishData } from "../../data/menu.en.data";
import { LanguageService } from "src/app/services/language.service";
import { Router } from "@angular/router";

@Component({
    standalone: true,
    selector: `app-header-menu-phone-panel`,
    imports: [],
    templateUrl: `./header-menu-phone-panel.component.html`,
    styleUrls: [`./header-menu-phone-panel.component.scss`]
})
export class HeaderMenuPhonePanelComponent {

    public menu!: Menu;
    public isClosingPanel: boolean = false;

    @ViewChild('main') main!: ElementRef;
    
    private _menuService: HeaderService = inject(HeaderService);
    private langagueService: LanguageService = inject(LanguageService);
    private destroyRef: DestroyRef = inject(DestroyRef);
    private _router: Router = inject(Router);
    private _renderer: Renderer2 = inject(Renderer2);

    ngOnInit(): void {
        this.langagueService.getLanguageObs()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(language => {
                switch(language){
                    case LanguageEnum.FRENCH:
                        this.menu = new MenuFrenchData();
                        break;
                    case LanguageEnum.ENGLISH:
                        this.menu = new MenuEnglishData();
                        break;
                }
        });


        this._renderer.listen('window', 'click',(e:Event)=>{
            if (e.target == this.main.nativeElement) {
                this.closePanel();
            }
        })
    }

    /**
     * Closing the panel and niavigate to new url if the arg is passed
     * @param path 
     */
    public closePanel(path?: string): void {
        this.isClosingPanel = true;
        setTimeout(() => {
            this._menuService.isPhoneMenuOpened.next(false);
            if (path) {
                this._router.navigate([path]);
            }
        }, 300);
    }

    /**
     * Return true if the param path is the same to the current path
     * @param path 
     * @returns 
     */
    public isOnPath(path: string): boolean {
        return this._menuService.isOnPath(path);
    }

}