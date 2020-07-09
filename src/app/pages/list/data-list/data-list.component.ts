import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
    selector: 'app-data-list',
    templateUrl: './data-list.component.html',
    styleUrls: ['./data-list.component.scss'],
})
export class DataListComponent  {
    list = [
        {
            name: 'George Washington',
            year: 1789,
        },
        {
            name: 'John Adams',
            year: 1796,
        },
        {
            name: 'Thomas Jefferson',
            year: 1800,
        },
        {
            name: 'James Madison',
            year: 1808,
        },
        {
            name: 'James Monroe',
            year: 1812,
        },
    ];

    constructor(
        private readonly _drawerService: StateService,
    ) {}

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
