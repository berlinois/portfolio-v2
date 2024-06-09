import { AfterViewInit, Component, DestroyRef, OnInit, inject } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { LanguageEnum } from "src/app/header/enums/language.enum";
import { LanguageService } from "src/app/services/language.service";
import { HomeInterface } from "./models/home.interface";
import { HomeFrData } from "./data/home.fr.data";
import { HomeEnData } from "./data/home.en.data";
import { CommonModule } from "@angular/common";
import { ImgDirective } from "./directives/img.directive";
import { ImageStateService } from "./services/image-state.service";
import { Router, RouterModule } from "@angular/router";

@Component({
    standalone: true,
    imports: [CommonModule, ImgDirective, RouterModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

    public homeDescription!: HomeInterface;

    public imageId: string = `image-home`;

    public showBorderImageHome: boolean = false;

    public exitAnimation: boolean = false;

    private langagueService: LanguageService = inject(LanguageService);
    private destroyRef: DestroyRef = inject(DestroyRef);
    private imageStateService: ImageStateService = inject(ImageStateService);
    private router: Router = inject(Router);

    ngOnInit(): void {
        this.langagueService.getLanguageObs().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(language => {
            switch(language){
                case LanguageEnum.FRENCH:
                    this.homeDescription = new HomeFrData();
                    break;
                case LanguageEnum.ENGLISH:
                    this.homeDescription = new HomeEnData();
                    break;
            }
        });
    }

    ngAfterViewInit(): void {
        this.imageStateService.getImgStateObs(this.imageId)?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(evt => {
            if (evt === true) {
                setTimeout(() => {
                    this.showBorderImageHome = true;
                }, 70);
                
            }
        });
    }

    public navigateExperience(): void {
        this.exitAnimation = true;
        setTimeout(() => {
            this.router.navigate([`/experiences`]);       
        }, 900);
    }

}