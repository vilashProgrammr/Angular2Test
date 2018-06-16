import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsService } from './mocks/services/restaurants.service';
import { AreasComponent } from './areas/areas.component';
import { AreasService } from './mocks/services/areas.service';
import { RestaurantreviewComponent } from './restaurantreview/restaurantreview.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    AreasComponent,
    RestaurantreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ RestaurantsService, AreasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
