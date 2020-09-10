import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {MessengerService} from '../messenger.service';
import {RestaurantService} from '../restaurant.service';
import {FoodService} from '../food.service'
import { CartService } from '../cart.service';
import { RestPayload } from '../restaurants/rest-payload';
import { LocalStorageService } from 'ngx-webstorage';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DiffrestmodComponent } from '../diffrestmod/diffrestmod.component';

@Component({
  selector: 'app-restaurant-show',
  templateUrl: './restaurant-show.component.html',
  styleUrls: ['./restaurant-show.component.css']
})
export class RestaurantShowComponent implements OnInit {
  restid :number;
  restaurant: RestPayload = new RestPayload(this.restid,'','','','','');
  foods:any;
  message: string;
  imageSource:string;
  oldcart:any
  collapsed:boolean = true
  title = 'appBootstrap';
  closeResult: string;
  constructor(private route: ActivatedRoute,private restaurantService:RestaurantService ,private foodservice:FoodService, private cartService: CartService,private msg :MessengerService,private localStoraqeService: LocalStorageService,private modalService: NgbModal) { }

  ngOnInit(): void {
   this.route.queryParams.subscribe(params => {
    this.restid = params['id'];});
   let obs = this.restaurantService.getbyid(this.restid)
   obs.subscribe((data) => this.restaurant=data);
   let obs2 = this.foodservice.getbyid(this.restid)
   obs2.subscribe((data) => this.foods=data);
  }
  showmenu(){
    this.imageSource = this.restaurant.menu;
    this.collapsed = !this.collapsed
  }
  addToCart(product){  
    this.msg.changeMessage('pressed');
    let currentitems =[];
    var found=0
    var currentrid=product.rest.rid;
    var currentrest='';
    if(this.localStoraqeService.retrieve("cartdata"))
    { 
    currentitems = JSON.parse(this.localStoraqeService.retrieve("cartdata"));
    currentrid=currentitems[0].rest.rid;
    currentrest=currentitems[0].rest.name;
    if(currentitems.find(o => o.fid === product.fid))
      found=1;
    }

    if ((product.qty == 0 && !found) || !currentitems ) {
      if(product.rest.rid === currentrid)
      {product.qty++;
      this.cartService.addToCart(product);
    }
      else{
        const modalRef = this.modalService.open(DiffrestmodComponent,);
        modalRef.componentInstance.my_modal_content = currentrest;
    }
  } 
    else {
      let obj=currentitems.find(o => o.fid === product.fid);
      obj.qty++;
      product.qty=obj.qty;
      let index = currentitems.findIndex(x => x.fid === product.fid)
      this.cartService.updateCart(product,index);
    }
    window.alert('Your product has been added to the cart!');
  }
  
}
