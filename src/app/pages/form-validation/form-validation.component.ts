import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StateService } from '../../services/state.service';

class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      return control.dirty && form.invalid;
  }
}

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss'],
})
export class FormValidationComponent implements OnInit {
  isCollapsed: boolean;
  basicForm: FormGroup;
  errorMatcher = new CrossFieldErrorMatcher();


  constructor(
    private readonly _drawerService: StateService,
    private readonly _breakpointObserver: BreakpointObserver,
    private readonly _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void { 
    this._breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Handset])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
            this.isCollapsed = true;
        } else {
            this.isCollapsed = false;
        }
      });
  }

  toggleMenu(): void {
    const drawerOpen = this._drawerService.getDrawerOpen();
    this._drawerService.setDrawerOpen(!drawerOpen);
  }

  initForm(): void {
    this.basicForm = this._formBuilder.group({
      inputControl: ['', Validators.required],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.pattern(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
        ]),
      ],
      phoneNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.pattern(/((\(\d{3}\)?)|(\d{3}))([\s-./]?)(\d{3})([\s-./]?)(\d{4})/),
        ]),
      ],
    });
  }
}
