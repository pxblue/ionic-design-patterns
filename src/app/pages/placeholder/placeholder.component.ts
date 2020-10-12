import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-placeholder',
    template: `
        <div>
            <mat-toolbar color="primary" style="color: white">
                <button mat-icon-button style="margin-right: 16px" (click)="open()">
                    <mat-icon>menu</mat-icon>
                </button>
                <h2>Placeholder</h2>
            </mat-toolbar>
            TODO
        </div>
    `,
})
export class PlaceholderComponent {
    constructor(private readonly _drawerService: StateService) {}

    open(): void {
        this._drawerService.setDrawerOpen(true);
    }
}
