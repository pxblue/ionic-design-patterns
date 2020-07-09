import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
    selector: 'app-placeholder',
    template: ` <div>
        <mat-toolbar color="primary" style="color: white">
            <button
                *ngIf="isSmall"
                mat-icon-button
                style="margin-right: 16px"
                (click)="_drawerService.setDrawerOpen(true)"
            >
                <mat-icon>menu</mat-icon>
            </button>
            <h2>Placeholder</h2>
        </mat-toolbar>
        TODO
    </div>`,
})
export class PlaceholderComponent implements OnInit {
    isSmall: boolean;

    constructor(
        private readonly _breakpointObserver: BreakpointObserver,
        public readonly _drawerService: StateService
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
}
