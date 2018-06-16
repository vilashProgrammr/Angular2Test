import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AreasComponent } from './areas/areas.component';
import { RestaurantreviewComponent } from './restaurantreview/restaurantreview.component';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantsComponent},
  { path: 'areas', component: AreasComponent },
  { path: 'restaurantreview', component: RestaurantreviewComponent },
  { path: 'restaurantreview/:id', component: RestaurantreviewComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
