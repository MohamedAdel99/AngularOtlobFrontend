import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { CartItem } from "./cart/cart-item";
import { of } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(private localStoraqeService: LocalStorageService) {}
  addToCart(product) {
    this.items.push(product);
    this.localStoraqeService.store("cartdata", JSON.stringify(this.items));
  }

  getItems(): Observable<Array<CartItem>> {
    if(this.localStoraqeService.retrieve("cartdata"))
    {
      this.items = JSON.parse(this.localStoraqeService.retrieve("cartdata"));
    }
    return  of(this.items);
  }
  updateCart(item,index){
    this.items[index]=item;
    this.localStoraqeService.store("cartdata", JSON.stringify(this.items));
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
}