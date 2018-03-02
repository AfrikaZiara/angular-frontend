import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTouristsComponent } from './admin-tourists.component';

describe('AdminTouristsComponent', () => {
  let component: AdminTouristsComponent;
  let fixture: ComponentFixture<AdminTouristsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTouristsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTouristsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
