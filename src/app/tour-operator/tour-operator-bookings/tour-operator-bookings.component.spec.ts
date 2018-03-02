import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourOperatorBookingsComponent } from './tour-operator-bookings.component';

describe('TourOperatorBookingsComponent', () => {
  let component: TourOperatorBookingsComponent;
  let fixture: ComponentFixture<TourOperatorBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourOperatorBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourOperatorBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
