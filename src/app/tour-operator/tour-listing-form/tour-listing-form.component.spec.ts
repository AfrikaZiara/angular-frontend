import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourListingFormComponent } from './tour-listing-form.component';

describe('TourListingFormComponent', () => {
  let component: TourListingFormComponent;
  let fixture: ComponentFixture<TourListingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourListingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourListingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
