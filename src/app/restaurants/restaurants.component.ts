import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../mocks/services/restaurants.service';
import { Area } from '../mocks/models/area';
import { RestaurantType } from '../mocks/models/restaurantType';
import { Restaurant } from '../mocks/models/restaurant';
import { AreasService } from '../mocks/services/areas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  areas: Area[];
  restaurantTypes: RestaurantType[];
  selectedAreaId: number;
  selectedRestaurantTypeId: number;
  restaurants: Restaurant[];
  constructor(private restaurantsService: RestaurantsService, private areasService: AreasService,
    private router: Router) { }

  ngOnInit() {
    this.getAreas();
    this.getRestaurantTypes();
  }

  getAreas() {
    return this.areasService.getAreas().subscribe((response) => {
      this.areas = response;
    })
  }

  getRestaurantTypes() {
    return this.restaurantsService.getRestaurantTypes().subscribe((response) => {
      this.restaurantTypes = response;  
    })
  }

  findRestaurants() {
    this.restaurantsService.getRestaurants(this.selectedAreaId, this.selectedRestaurantTypeId).subscribe((response) => {
      this.restaurants = response;
    })
  }
  
  navigateToRestaurantreview(id: number) {
    this.router.navigate(['../restaurantreview/' + id]);
  }

}
