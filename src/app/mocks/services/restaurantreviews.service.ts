import { Injectable } from '@angular/core';
import { reviews } from '../reviews.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantreviewsService {
  reviewsToReturn: string[] = [];
  constructor() { }

  getReviews(numberOfReviews: number): Observable<string[]> {
    while (this.reviewsToReturn.length < numberOfReviews) {
      this.reviewsToReturn.push(reviews[Math.floor(Math.random() * reviews.length)]);
    }
    return of(this.reviewsToReturn);
  }
}
