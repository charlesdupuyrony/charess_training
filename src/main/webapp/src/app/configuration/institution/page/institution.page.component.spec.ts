import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InstitutionPageComponent } from './institution.page.component';

describe('AllTeachersComponent', () => {
    let component: InstitutionPageComponent;
    let fixture: ComponentFixture<InstitutionPageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ InstitutionPageComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InstitutionPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
