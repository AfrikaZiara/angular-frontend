import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTourOperatorsComponent } from './admin-tour-operators.component';

describe('AdminTourOperatorsComponent', () => {
  let component: AdminTourOperatorsComponent;
  let fixture: ComponentFixture<AdminTourOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTourOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTourOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
