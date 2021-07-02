import { async, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        const fixture = TestBed.createComponent(DashboardComponent);
        fixture.detectChanges();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(DashboardComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it(`should title be equal 'Dashboard'`, () => {
        const fixture = TestBed.createComponent(DashboardComponent);
        const component = fixture.componentInstance;
        expect(component.pageTitle).toEqual('Dashboard');
    });
});
