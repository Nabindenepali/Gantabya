import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FeaturedEventsComponent} from './featured-events.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('FeaturedEventsComponent', () => {
    let component: FeaturedEventsComponent;
    let fixture: ComponentFixture<FeaturedEventsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FeaturedEventsComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FeaturedEventsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
