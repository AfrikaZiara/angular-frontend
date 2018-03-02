import { TestBed, inject } from '@angular/core/testing';

import { TourOperatorAuthGuardService } from './tour-operator-auth-guard.service';

describe('TourOperatorAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TourOperatorAuthGuardService]
    });
  });

  it('should be created', inject([TourOperatorAuthGuardService], (service: TourOperatorAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
