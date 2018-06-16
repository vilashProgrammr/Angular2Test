import { TestBed, inject } from '@angular/core/testing';

import { RestaurantreviewsService } from './restaurantreviews.service';

describe('RestaurantreviewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantreviewsService]
    });
  });

  it('should be created', inject([RestaurantreviewsService], (service: RestaurantreviewsService) => {
    expect(service).toBeTruthy();
  }));
});
