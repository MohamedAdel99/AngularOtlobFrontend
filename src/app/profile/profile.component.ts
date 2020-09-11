import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {LocalStorageService} from 'ngx-webstorage';
import { OrderService } from '../order.service';
import { OrderPl } from '../checkout/orderpl';
import { Observable } from 'rxjs';
import {ProfileClass} from './profileclass'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public flag=0
  s=''
  x='active'
  username=''
  user : ProfileClass = {};
  id: number;
  orders:Observable<Array<OrderPl>>

  constructor(private authservice:AuthService , private localStoraqeService: LocalStorageService,private orderservice:OrderService) { }

  ngOnInit(): void {
    this.username=this.localStoraqeService.retrieve('username');
    let obs = this.authservice.getuserbyun(this.username);
    obs.subscribe(data => {
      this.user = data;
      this.orders = this.orderservice.getordersbyid(this.user.cid);
 },
 error => console.log(error)
);
  }
 raise(){
    this.flag=1;
    this.s='active';
    this.x=''
 }
 raise2(){
  this.flag=0;
  this.s='';
  this.x='active'
}
}
