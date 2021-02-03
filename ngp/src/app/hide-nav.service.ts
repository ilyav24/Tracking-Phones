import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HideNavService {
  private subject = new Subject<any>();

  // To control if the user is admin in or not, we will use a BehaviorSubject
  private loggedIn: boolean = false

  constructor() {
    
   }

  // sending event of entry to  dashboard view
  sendEnterEvent(){
    this.subject.next();

  }

  // recieving event of entry to dashboard view
  getEnterEvent():Observable<any>{
    return this.subject.asObservable();
 }

 // logged in getter
 getLoggedIn() {
  return this.loggedIn;
}

// logged in setter
setLoggedIn(flag: boolean) {
  this.loggedIn = flag;
}
}
