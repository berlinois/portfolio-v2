import { Directive, HostListener, Input, OnInit, inject } from "@angular/core";
import { ImageStateService } from "../services/image-state.service";

@Directive({
  selector: '[loadChecker]',
  standalone: true
})
export class ImgDirective implements OnInit {

  @Input() imageId!: string;

  private homeService: ImageStateService = inject(ImageStateService);

  ngOnInit(): void {
    this.homeService.addImageState(this.imageId);
  }

  @HostListener('load')
  onLoad() {
    this.homeService.notifyImageLoaded(this.imageId);
  }

}
