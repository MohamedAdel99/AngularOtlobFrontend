import { Injectable } from '@angular/core';
import {RestPayload} from './restaurants/rest-payload';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) { }

  getAllRest(): Observable<Array<RestPayload>>{
    return this.httpClient.get<Array<RestPayload>>("http://localhost:8080/api/rest/all");
  }
  getbyid(restID):Observable<RestPayload>{
    return this.httpClient.get<RestPayload>("http://localhost:8080/api/rest/id/" + restID);
  }
}
