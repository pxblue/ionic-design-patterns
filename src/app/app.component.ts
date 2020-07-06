import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from './services/state.service';
import * as PXBColors from '@pxblue/colors';
import { DrawerLayoutVariantType } from '@pxblue/angular-components';
import { DrawerItem, NAV_ITEMS } from './app-routing.module';
import { ViewportService } from './services/viewport.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    colors: Record<string, any> = PXBColors;
    routes = NAV_ITEMS;
    selected: string;

    constructor(
        private router: Router,
        public readonly stateService: StateService,
        public viewportService: ViewportService
    ) {}

    select(route: DrawerItem, parentRoute: string = '/'): void {
        if (!route.children) {
            this.router.navigate([parentRoute + route.path]);
            this.selected = route.title;
            if (this.viewportService.isSmall()) {
              this.stateService.setDrawerOpen(false);
            }
        }
    }

    goHome(): void {
      console.log('clicked');
      this.router.navigate(['']);
    }
}
