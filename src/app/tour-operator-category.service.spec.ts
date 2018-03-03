import { TestBed, inject } from '@angular/core/testing';

import { TourOperatorCategoryService } from './tour-operator-category.service';

describe('TourOperatorCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TourOperatorCategoryService]
    });
  });

  it('should be created', inject([TourOperatorCategoryService], (service: TourOperatorCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
