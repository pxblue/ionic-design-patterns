import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';
import * as Colors from '@pxblue/colors';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    animations: [
        trigger('headerFadeInAnimation', [
            state('in', style({ opacity: 1 })),

            transition(':enter', [style({ opacity: 0 }), animate('500ms 250ms')]),
        ]),
        trigger('bodyFadeInAnimation', [
            state('in', style({ opacity: 1 })),

            transition(':enter', [style({ opacity: 0 }), animate('1500ms 500ms')]),
        ]),
        trigger('linksFadeInAnimation', [
            state('in', style({ opacity: 1 })),

            transition(':enter', [style({ opacity: 0 }), animate('1000ms 1250ms')]),
        ]),
    ],
})
export class LandingPageComponent {
    Colors = Colors;

    constructor(
        public readonly stateService: StateService
    ) {}
}
