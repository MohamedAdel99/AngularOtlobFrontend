import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {CartItem} from './cart/cart-item'
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpclient: HttpClient) { }
    getbyid(rid){
    return this.httpclient.get("http://localhost:8080/api/food/"+ rid);
  }
}
