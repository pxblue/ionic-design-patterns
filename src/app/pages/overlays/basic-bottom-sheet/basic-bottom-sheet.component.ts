import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DataService } from './data.service';
import { BottomSheet } from './bottom-sheet/bottom-sheet';
import * as Colors from '@pxblue/colors';

@Component({
    selector: 'app-basic-bottom-sheet',
    templateUrl: './basic-bottom-sheet.component.html',
    styleUrls: ['./basic-bottom-sheet.component.scss'],
})
export class BasicBottomSheetComponent implements OnInit {
    data: any[] = [];
    Colors = Colors;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _bottomSheet: MatBottomSheet,
        private readonly _dataService: DataService
    ) {}

    ngOnInit(): void {
        this.data = this._dataService.data;
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }

    showBottomSheet(): void {
        this._bottomSheet.open(BottomSheet, { restoreFocus: false });
    }
}
