import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormValidationComponent } from './form-validation.component';
import { FormValidationModule } from './form-validation.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../../app.module';

describe('FormValidationComponent', () => {
    let component: FormValidationComponent;
    let fixture: ComponentFixture<FormValidationComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [
                FormValidationModule,
                MatCardModule,
                MatIconModule,
                MatInputModule,
                MatListModule,
                MatToolbarModule,
                AppModule,
                FormsModule,
                ReactiveFormsModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormValidationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });

    it('should allow field with a valid email address', () => {
        component.basicForm.controls.email.setValue('admin@123.com');
        void expect(component.basicForm.controls.email.valid).toBeTruthy();
        component.basicForm.controls.email.setValue('admin@123');
        void expect(component.basicForm.controls.email.valid).toBeFalsy();
    });

    it('should allow field with a valid phone number', () => {
        component.basicForm.controls.phoneNumControl.setValue('1234567898');
        void expect(component.basicForm.controls.phoneNumControl.valid).toBeTruthy();
        component.basicForm.controls.phoneNumControl.setValue('+1(919)9870998');
        void expect(component.basicForm.controls.phoneNumControl.valid).toBeTruthy();
        component.basicForm.controls.phoneNumControl.setValue('+1(919)9870998');
        void expect(component.basicForm.controls.phoneNumControl.valid).toBeTruthy();
        component.basicForm.controls.phoneNumControl.setValue('+19199870998');
        void expect(component.basicForm.controls.phoneNumControl.valid).toBeTruthy();
    });

    it('should not allow field with a invalid phone number', () => {
        component.basicForm.controls.phoneNumControl.setValue('1-800-CALL-HOME');
        void expect(component.basicForm.controls.phoneNumControl.valid).toBeFalsy();
        component.basicForm.controls.phoneNumControl.setValue('123456789');
        void expect(component.basicForm.controls.phoneNumControl.valid).toBeFalsy();
    });

    it('should allow field with a valid input', () => {
        component.basicForm.controls.inputControl.setValue('qwerty12');
        void expect(component.basicForm.controls.inputControl.valid).toBeTruthy();
    });

    it('should allow field with a valid old password', () => {
        component.oldPasswordFG.controls.oldPasswordControl.setValue('qwert12');
        void expect(component.oldPasswordFG.controls.oldPasswordControl.valid).toBeTruthy();
    });

    it('should allow field with a valid new password', () => {
        component.newPasswordFG.controls.newPasswordControl.setValue('qwert12');
        void expect(component.newPasswordFG.controls.newPasswordControl.valid).toBeTruthy();
        component.newPasswordFG.controls.newPasswordControl.setValue('Qwert12');
        void expect(component.newPasswordFG.controls.newPasswordControl.valid).toBeTruthy();
        component.newPasswordFG.controls.newPasswordControl.setValue('12@Qwert');
        void expect(component.newPasswordFG.controls.newPasswordControl.valid).toBeTruthy();
    });

    it('should allow field with a valid confirm password', () => {
        component.newPasswordFG.controls.newPasswordControl.setValue('qwert12');
        component.newPasswordFG.controls.confirmPasswordControl.setValue('qwert12');
        void expect(component.newPasswordFG.controls.newPasswordControl.value).toEqual(
            component.newPasswordFG.controls.confirmPasswordControl.value
        );
    });
});
