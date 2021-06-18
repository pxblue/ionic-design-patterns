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
    isSmall: boolean;
    basicForm: FormGroup;
    errorMatcher = new CrossFieldErrorMatcher();
    oldPasswordFG: FormGroup;
    newPasswordFG: FormGroup;
    passwordLength = false;
    numberFlag = false;
    specialFlag = false;
    uppercaseFlag = false;
    lowercaseFlag = false;
    oldPasswordVisibility = false;
    newPasswordVisibility = false;
    confirmPasswordVisibility = false;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        private readonly _formBuilder: FormBuilder
    ) {
        this.initForm();
    }

    ngOnInit(): void {
        this._breakpointObserver
            .observe([Breakpoints.Small, Breakpoints.Handset])
            .subscribe((state: BreakpointState) => {
                if (state.matches) {
                    this.isSmall = true;
                } else {
                    this.isSmall = false;
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
            phoneNumControl: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(10),
                    Validators.pattern(/((\(\d{3}\)?)|(\d{3}))([\s-./]?)(\d{3})([\s-./]?)(\d{4})/),
                ]),
            ],
        });
        this.oldPasswordFG = this._formBuilder.group({
            oldPasswordControl: ['', Validators.required],
        });
        this.newPasswordFG = this._formBuilder.group(
            {
                newPasswordControl: [],
                confirmPasswordControl: ['', Validators.required],
            },
            {
                validator: this.checkPasswords,
            }
        );
    }

    //this accepts only number in phone number input field
    numbersOnly(event: KeyboardEvent): boolean {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 40 || charCode > 57)) {
            return false;
        }
        return true;
    }

    checkPasswords(group: FormGroup): any {
        const pass = group.get('newPasswordControl').value;
        const confirmPass = group.get('confirmPasswordControl').value;
        return pass === confirmPass ? null : { passwordsDoNotMatch: true };
    }

    checkPasswordStrength(password: string): void {
        this.passwordLength = password.length > 7;
        this.specialFlag = /[!@#$^&]/.test(password);
        this.numberFlag = /[0-9]/.test(password);
        this.uppercaseFlag = /[A-Z]/.test(password);
        this.lowercaseFlag = /[a-z]/.test(password);
    }

    toggleOldPasswordVisibility(): void {
        this.oldPasswordVisibility = !this.oldPasswordVisibility;
    }

    toggleNewPasswordVisibility(): void {
        this.newPasswordVisibility = !this.newPasswordVisibility;
    }

    toggleConfirmPasswordVisibility(): void {
        this.confirmPasswordVisibility = !this.confirmPasswordVisibility;
    }
}
