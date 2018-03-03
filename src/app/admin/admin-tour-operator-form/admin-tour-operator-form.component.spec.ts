import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTourOperatorFormComponent } from './admin-tour-operator-form.component';

describe('AdminTourOperatorFormComponent', () => {
  let component: AdminTourOperatorFormComponent;
  let fixture: ComponentFixture<AdminTourOperatorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTourOperatorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTourOperatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
