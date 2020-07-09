import {ChangeDetectorRef, Component} from '@angular/core';
import {Router} from '@angular/router';
import {StateService} from './services/state.service';
import {DrawerItem, NAV_ITEMS} from './app-routing.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    routes = NAV_ITEMS;
    selected: string;

    constructor(
        private readonly router: Router,
        private readonly _drawerService: StateService,
        private readonly _changeDetectorRef: ChangeDetectorRef
    ) {}

    select(route: DrawerItem, parentRoute: string = '/'): void {
        if (!route.children) {
            this.router.navigate([parentRoute + route.path]);
            this.selected = route.title;
            this._drawerService.setDrawerOpen(false);
        }
    }

    goHome(): void {
        this.router.navigate(['']);
    }
}
