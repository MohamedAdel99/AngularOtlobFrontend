import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {Ng2Webstorage} from 'ngx-webstorage';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { MaterialModule } from './material.module';
import { OffersComponent } from './offers/offers.component';
import { RestaurantShowComponent } from './restaurant-show/restaurant-show.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuard } from "./auth.guard";
import { CashformComponent } from './checkout/cashform/cashform.component';
import { FinishComponent } from './finish/finish.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DiffrestmodComponent } from './diffrestmod/diffrestmod.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    RegisterSuccessComponent,
    HomeComponent,
    RestaurantsComponent,
    OffersComponent,
    RestaurantShowComponent,
    CartComponent,
    CartItemComponent,
    ProfileComponent,
    ProfileEditComponent,
    CheckoutComponent,
    CashformComponent,
    FinishComponent,
    DiffrestmodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    [BrowserAnimationsModule],
    Ng2SearchPipeModule,
    Ng2Webstorage.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'Register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register-success', component: RegisterSuccessComponent},
      {path: 'home', component: HomeComponent},
      {path: 'restaurants', component: RestaurantsComponent},
      {path: 'restaurants/:name', component: RestaurantShowComponent},
      {path: 'offers', component: OffersComponent},
      { path: 'cart', component: CartComponent },
      {path: 'profile', component: ProfileComponent,canActivate: [AuthGuard]},
      {path: 'profile/edit', component: ProfileEditComponent,canActivate: [AuthGuard]},
      {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
      {path: 'finish', component: FinishComponent,canActivate: [AuthGuard]},
    ]),
    HttpClientModule,
    NgbModule
  ],
  entryComponents:[
    DiffrestmodComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
