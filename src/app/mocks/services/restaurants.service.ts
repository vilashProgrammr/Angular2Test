import { Injectable } from '@angular/core';
import { areas } from '../areas.mock';
import { restaurantTypes } from '../restaurantTypes.mock';
import { restaurants } from '../restaurants.mock';
import { Observable, of } from 'rxjs';
import { RestaurantType } from '../models/restaurantType';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor() { }

  getRestaurantTypes(): Observable<RestaurantType[]> {
    return of(restaurantTypes);
  }

  getRestaurants(areaId: number, restaurantTypeId: number): Observable<Restaurant[]> {
    console.log(restaurants.filter((restaurant) => restaurant.areaId == areaId && restaurant.restaurantTypeId == restaurantTypeId));
    return of(restaurants.filter((restaurant) => restaurant.areaId == areaId && restaurant.restaurantTypeId == restaurantTypeId));
  }

  getRestaurant(id: number) {
    return of(restaurants.filter((restaurant) => restaurant.id == id)[0]);
  }
}
