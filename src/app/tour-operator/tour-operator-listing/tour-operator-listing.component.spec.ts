import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourOperatorListingComponent } from './tour-operator-listing.component';

describe('TourOperatorListingComponent', () => {
  let component: TourOperatorListingComponent;
  let fixture: ComponentFixture<TourOperatorListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourOperatorListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourOperatorListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
