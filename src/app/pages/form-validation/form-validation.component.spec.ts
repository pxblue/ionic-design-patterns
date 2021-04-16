import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationComponent } from './form-validation.component';

describe('FormValidationComponent', () => {
    let component: FormValidationComponent;
    let fixture: ComponentFixture<FormValidationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormValidationComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormValidationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
