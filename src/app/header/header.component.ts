import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { LocalStorageService } from 'ngx-webstorage';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  storedcart : any;
  constructor(private authService: AuthService,private localStoraqeService: LocalStorageService) { }

  ngOnInit(): void {
    
    this.storedcart = JSON.parse(this.localStoraqeService.retrieve("cartdata"));
  }
 logout(){
 this.authService.logout();
 }
 isAuthenticated(){
   return this.authService.isAuthenticated();
 }
}
