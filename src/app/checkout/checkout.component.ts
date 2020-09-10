import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  holo=0
  items : any;
  total = 0;
  x='active'
  s=''
  flag=0
  constructor(private localStoraqeService: LocalStorageService) { }

  ngOnInit(): void {
    this.items = JSON.parse(this.localStoraqeService.retrieve('cartdata'));
    this.items.forEach(item => {
      this.total += (item.qty * item.price)
    })
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
