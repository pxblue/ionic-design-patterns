import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';
import { ViewportService } from '../../services/viewport.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
    constructor(public readonly stateService: StateService, public viewportService: ViewportService) {}
}
