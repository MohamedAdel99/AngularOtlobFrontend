import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterPayload} from './register-payload';
import {Observable} from 'rxjs';
import {LoginPayload} from './login-payload';
import {JwtAutResponse} from './JwtAutResponse';
import {map} from 'rxjs/operators';
import {LocalStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private url = 'http://localhost:8080/api/auth/';
  private lh = 'http://localhost:8080/'
  constructor(private httpClient: HttpClient,private localStoraqeService: LocalStorageService,private router:Router) { }

  register(registerPayload: RegisterPayload): Observable<any> {
    return this.httpClient.post(this.url + 'signup', registerPayload);
  }
  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.httpClient.post<JwtAutResponse>(this.lh + 'authenticate', loginPayload).pipe(map(data => {
      this.localStoraqeService.store('authenticationToken', data.token);
      this.localStoraqeService.store('username', data.username);
      return true;
    }));
  }
  isAuthenticated(): boolean {
    return this.localStoraqeService.retrieve('username') != null;
  }
  getuserbyun(username){
    return this.httpClient.get("http://localhost:8080/api/cust/" + username);
  }
  logout() {
    this.localStoraqeService.clear('token');
    this.localStoraqeService.clear('username');
    localStorage.clear();
    window.location.reload();
    this.router.navigateByUrl('/home');
  }
}
