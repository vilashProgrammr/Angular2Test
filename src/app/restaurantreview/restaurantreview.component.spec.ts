import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantreviewComponent } from './restaurantreview.component';

describe('RestaurantreviewComponent', () => {
  let component: RestaurantreviewComponent;
  let fixture: ComponentFixture<RestaurantreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
