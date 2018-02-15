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
    component.featuredEvent = {
      id: 1,
      name: 'Horse Riding',
      description: 'Horse Riding in Patan, Nepal',
      organizer: 'Nepal Horse Riders Association',
      date: '2018-02-14',
      imgUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/03/06/11/horse-riding-intelligence.jpg'
    };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
