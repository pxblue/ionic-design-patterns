import { NgModule } from '@angular/core';
import { DataListComponent, ObjectToList, UnCamelCasePipe } from './data-list.component';
import { InfoListItemModule } from '@pxblue/angular-components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [CommonModule, InfoListItemModule, MatToolbarModule, MatButtonModule],
    declarations: [DataListComponent, UnCamelCasePipe, ObjectToList],
})
export class DataListModule {}
