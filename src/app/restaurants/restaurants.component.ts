import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../restaurant.service';
import {RestPayload} from '../restaurants/rest-payload';
import {Observable} from 'rxjs';
import {Router} from '@angular/router'
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  rests: Observable<Array<RestPayload>>;
  srest : RestPayload
  constructor(private restaurantService:RestaurantService,private router:Router) { }

  ngOnInit(): void {
    this.rests=this.restaurantService.getAllRest();
  }
  restclicked(rest){
    this.router.navigate(['/restaurants', rest.name], { queryParams: { id: rest.rid} });
  }
}
