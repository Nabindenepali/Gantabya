import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedEventComponent } from './featured-event.component';

describe('FeaturedEventComponent', () => {
  let component: FeaturedEventComponent;
  let fixture: ComponentFixture<FeaturedEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
