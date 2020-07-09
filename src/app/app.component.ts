import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from './services/state.service';
import * as PXBColors from '@pxblue/colors';
import { DrawerItem, NAV_ITEMS } from './app-routing.module';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
    colors: Record<string, any> = PXBColors;
    routes = NAV_ITEMS;
    selected: string;
    isSmall: boolean;

    constructor(
        private readonly router: Router,
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        private readonly _changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this._breakpointObserver
            .observe([Breakpoints.Small, Breakpoints.Handset])
            .subscribe((state: BreakpointState) => {
                if (state.matches) {
                    this.isSmall = true;
                } else {
                    this.isSmall = false;
                }
            });
    }

    ngAfterViewInit(): void {
        if (this.isSmall) {
            this._drawerService.setDrawerOpen(false);
            this._changeDetectorRef.detectChanges();
        }
    }

    select(route: DrawerItem, parentRoute: string = '/'): void {
        if (!route.children) {
            this.router.navigate([parentRoute + route.path]);
            this.selected = route.title;
            if (this.isSmall) {
                this._drawerService.setDrawerOpen(false);
            }
        }
    }

    goHome(): void {
        console.log('clicked');
        this.router.navigate(['']);
    }
}
