import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderPl } from './checkout/orderpl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  addorder(order:OrderPl,custid,rid){
    return this.httpClient.post("http://localhost:8080/api/orderfood/add/"+ custid +'/'+ rid,order);
  }
  getordersbyid(cid):Observable<Array<OrderPl>>{
    return this.httpClient.get<Array<OrderPl>>("http://localhost:8080/api/orderfood/" + cid);
  }
}
