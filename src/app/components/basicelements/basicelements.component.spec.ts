import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicelementsComponent } from './basicelements.component';

xdescribe('BasicelementsComponent', () => {
  let component: BasicelementsComponent;
  let fixture: ComponentFixture<BasicelementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicelementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BasicelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
