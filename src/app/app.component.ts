import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuPhonePanelComponent } from './header/components/header-menu-phone-panel/header-menu-phone-panel.component';
import { HeaderService } from './header/services/header.service';

@Component({
  standalone: true,
  selector: 'app-root',
  providers: [
    HeaderService
  ],
  imports: [
    HeaderComponent,
    HeaderMenuPhonePanelComponent,
    RouterOutlet
  ],
  template: `
    <div class="main">
      <div class="main-main">
        <app-header-main></app-header-main>
        <div class="scroll">
          <router-outlet></router-outlet>
        </div>
      </div>
      @if(isPanelOpened) {
        <div
          class="main-panel-menu">
          <app-header-menu-phone-panel></app-header-menu-phone-panel>
        </div>
        }
    </div>
  `,
  styles: [`
    .main {
      height: 100%;
      width: 100%;
      position: relative;
    }
    .main-main {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 1;
    }
    .main-panel-menu {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      z-index: 2;
    }
    .scroll {
      height:100%;
    }
  `]
})
export class AppComponent {
    
    private _menuService: HeaderService = inject(HeaderService);

    public get isPanelOpened(): boolean {
        return this._menuService.isPhoneMenuOpened.getValue();
    }
}
