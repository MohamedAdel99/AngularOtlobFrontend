import { Component, OnInit,Input } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { OrderPl } from "../orderpl";
import { OrderService } from 'src/app/order.service';
import { RestPayload } from 'src/app/restaurants/rest-payload';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-cashform',
  templateUrl: './cashform.component.html',
  styleUrls: ['./cashform.component.css']
})
export class CashformComponent implements OnInit {
  user:any;
  @Input() total: number;
  foods:any;
  rest=''
  username=''
  orderdata: OrderPl;
  constructor(private localStoraqeService: LocalStorageService,private cartservice:CartService,private authservice:AuthService,private router:Router,private oserv:OrderService) {
    this.orderdata = {
      oid:0,
      totalAmount: 0,
      details: '',
      contents:'',
      quantity:0,
      cust:{},
      rest: new RestPayload(0,"","","","","")
    };
   }
  ngOnInit(): void {
    this.username = this.localStoraqeService.retrieve('username');
    let obs = this.authservice.getuserbyun(this.username);
    obs.subscribe((data) => this.user=data);
    this.foods = JSON.parse(this.localStoraqeService.retrieve('cartdata'));
   this.rest = this.foods[0].rest.name;
  }
  myFunc() {
    var extradetails = ((document.getElementById("exchageRateDate") as HTMLInputElement).value);
  this.orderdata.totalAmount=this.total+10;
  this.orderdata.details= extradetails;
  this.orderdata.cust.cid=this.user.cid;
 
  this.orderdata.rest.Rid=this.foods[0].rest.rid;
  for(let i in this.foods)
   this.orderdata.contents=this.foods[i].name;

    this.oserv.addorder(this.orderdata,this.user.cid,this.foods[0].rest.rid).subscribe(data => {
      console.log('register succes');
      this.router.navigateByUrl('/finish');
      this.localStoraqeService.clear('cartdata');
       this.cartservice.clearCart();
    }, error => {
      console.log('register failed');
    });
    }
  cancel(){
    this.localStoraqeService.clear('cartdata');
    this.router.navigateByUrl('/home');
  }
}
