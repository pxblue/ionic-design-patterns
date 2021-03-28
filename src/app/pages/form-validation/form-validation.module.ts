import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationComponent } from './form-validation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    FormValidationComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    FormValidationComponent]
})
export class FormValidationModule { }
