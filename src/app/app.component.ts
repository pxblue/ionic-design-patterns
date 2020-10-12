import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from './services/state.service';
import { DrawerItem, NAV_ITEMS } from './app-routing.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    routes = NAV_ITEMS;
    selected: string;

    constructor(
        private readonly _router: Router,
        public readonly drawerService: StateService,
        private readonly _changeDetectorRef: ChangeDetectorRef
    ) {}

    select(route: DrawerItem, parentRoute = '/'): void {
        if (!route.children) {
            void this._router.navigate([parentRoute + route.path]);
            this.selected = route.title;
            this.drawerService.setDrawerOpen(false);
        }
    }

    goHome(): void {
        void this._router.navigate(['']);
    }
}
