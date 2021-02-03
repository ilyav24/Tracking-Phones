import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HideNavService {
  private subject = new Subject<any>();
  // To determine if the user is admin in or not, we will use a BehaviorSubject
  private loggedIn = new BehaviorSubject<boolean>(false);
  currentLogState = this.loggedIn.asObservable();

  constructor() { }

  // sending event of entry to  dashboard view
  sendEnterEvent() {
    this.subject.next();
  }

  // recieving event of entry to dashboard view
  getEnterEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  // logged in getter
  getLoggedIn() {
    return this.loggedIn;
  }

  // logged in setter
  setLoggedIn(flag: boolean) {
    this.loggedIn.next(flag);
  }
}
