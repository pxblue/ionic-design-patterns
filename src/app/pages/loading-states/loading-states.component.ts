import { Component, OnInit } from '@angular/core';
import { dataList, placeholderList } from './data';
import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-loading-states',
    templateUrl: './loading-states.component.html',
    styleUrls: ['./loading-states.component.scss'],
})
export class LoadingStatesComponent implements OnInit {
    cols = 1;
    deviceList = placeholderList;

    constructor(
        private readonly _drawerService: StateService,
    ) {}

    ngOnInit(): void {
        this.refreshData();
    }

    refreshData(): void {
        this.deviceList = placeholderList;
        // setTimeout(() => {
        //     this.deviceList = dataList;
        // }, 3000);
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
