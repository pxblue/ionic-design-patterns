import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DataService, DataItem } from './data.service';
import { BottomSheet } from './bottom-sheet/bottom-sheet';
import * as Colors from '@pxblue/colors';
import { StateService } from '../../../services/state.service';

@Component({
    selector: 'app-complex-bottom-sheet',
    templateUrl: './complex-bottom-sheet.component.html',
    styleUrls: ['./complex-bottom-sheet.component.scss'],
})
export class ComplexBottomSheetComponent implements OnInit {
    data: DataItem[] = [];
    Colors = Colors;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _bottomSheet: MatBottomSheet,
        private readonly _dataService: DataService
    ) {}

    ngOnInit(): void {
        this._dataService.list.subscribe((list: DataItem[]): void => {
            this.data = list;
        });
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }

    showBottomSheet(): void {
        this._bottomSheet.open(BottomSheet, { restoreFocus: false, panelClass: 'bottomPanel' });
    }
}
