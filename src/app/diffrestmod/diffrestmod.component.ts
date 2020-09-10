import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from 'ngx-webstorage';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-diffrestmod',
  templateUrl: './diffrestmod.component.html',
  styleUrls: ['./diffrestmod.component.css']
})
export class DiffrestmodComponent implements OnInit {
  @Input() my_modal_content;
  constructor(public activeModal: NgbActiveModal,private localStoraqeService:LocalStorageService,private cartService:CartService) { }

  ngOnInit(): void {
  }
  Clear(){
    this.localStoraqeService.clear("cartdata");
    this.cartService.clearCart();
    window.location.reload();
  }
}
