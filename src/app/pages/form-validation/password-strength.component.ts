import { Component, Input } from '@angular/core';
import * as Colors from '@pxblue/colors';

@Component({
    selector: 'app-password-strength',
    template: `
        <mat-list-item style="height: auto;" class="app-password-strength">
            <mat-icon [style.color]="success ? Colors.blue[500] : Colors.gray[300]">{{ icon }}</mat-icon>
            <span [style.color]="success ? Colors.gray[300] : Colors.black[500]" style="padding-left: 8px;">{{
                validationMessage
            }}</span>
        </mat-list-item>
    `,
    styles: [
        `
            ::ng-deep .mat-list-base .app-password-strength.mat-list-item .mat-list-item-content {
                padding: 0;
            }
        `,
    ],
})
export class PasswordStrengthComponent {
    @Input() icon = 'done';
    @Input() validationMessage: string;
    @Input() success = false;
    Colors = Colors;

    constructor() {}
}
