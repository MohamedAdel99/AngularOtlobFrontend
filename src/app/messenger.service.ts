import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  private message = new BehaviorSubject('Wait for a message from the restaurant');
  currentMessage = this.message.asObservable();
  
  constructor () {}
  
  changeMessage (message: string) {
  this.message.next(message);
    }
  }