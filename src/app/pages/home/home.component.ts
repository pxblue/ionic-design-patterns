import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
    constructor(public readonly stateService: StateService, private readonly _breakpointObserver: BreakpointObserver) {}
}
