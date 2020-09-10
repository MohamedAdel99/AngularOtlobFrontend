import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from 'src/app/cart/cart-item';
import { MessengerService } from 'src/app/messenger.service'
import { observable } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartTotal=0
  message:string;
  constructor(private cartService: CartService,private msg : MessengerService,private router:Router,private localStoraqeService: LocalStorageService) { }
 
  ngOnInit(): void {
    this.msg.currentMessage.subscribe(message => this.message = message);
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartService.getItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
    })
  }
  total()
  { this.cartTotal = 0
  this.cartItems.forEach(item => {
    this.cartTotal += (item.qty * item.price)
  })
}
  cancel(){
    this.localStoraqeService.clear("cartdata");
    this.cartService.clearCart();
    window.location.reload();
  }
  nav(){
    window.location.reload;
    this.router.navigateByUrl('/checkout');
  }
}
