import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdModalComponent } from './modal.component';

xdescribe('ModalComponent', () => {
  let component: NgbdModalComponent;
  let fixture: ComponentFixture<NgbdModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NgbdModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
