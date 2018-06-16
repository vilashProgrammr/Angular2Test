import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../mocks/services/restaurants.service';
import { Restaurant } from '../mocks/models/restaurant';
import { RestaurantreviewsService } from '../mocks/services/restaurantreviews.service';
import { MenuService } from '../mocks/services/menu.service';

@Component({
  selector: 'app-restaurantreview',
  templateUrl: './restaurantreview.component.html',
  styleUrls: ['./restaurantreview.component.css']
})
export class RestaurantreviewComponent implements OnInit {
  restaurant: Restaurant;
  reviews: string[];
  mockUserIds: string[] = [];
  showMenu: Boolean = false;
  menusrc;
  defaultsrc = '../../assets/';
  constructor(private route: ActivatedRoute, private restaurantsService: RestaurantsService,
    private restaurantreviewsService: RestaurantreviewsService,
    private menuService: MenuService) { }

  ngOnInit() {
    this.restaurantsService.getRestaurant(this.route.snapshot.params['id']).subscribe((response) => {
      this.restaurant = response;
    });

    this.getReviews();
  }

  generateMockUserId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  getReviews() {
    let numberOfReviews = Math.floor(Math.random()*11);
    this.restaurantreviewsService.getReviews(numberOfReviews).subscribe((response) => {
      this.reviews = response;
      this.generateUserIdArray();
    })
  }

  generateUserIdArray() {
    for(let i=0; i< this.reviews.length; i++) {
      this.mockUserIds.push(this.generateMockUserId());
    }
  }

  viewMenu() {
    let mockMenus;
    this.menuService.getMockMenus().subscribe((response) => {
      mockMenus = response;
    })
    this.menusrc = this.defaultsrc + mockMenus[Math.floor(Math.random()*mockMenus.length)];
    this.showMenu = true;
  }
}
