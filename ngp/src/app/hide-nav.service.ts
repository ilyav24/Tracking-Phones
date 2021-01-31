import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HideNavService {
  private subject = new Subject<any>();

  constructor() { }

  // sending event of entry to  dashboard view
  sendEnterEvent(){
    this.subject.next();

  }

  // recieving event of entry to dashboard view
  getEnterEvent():Observable<any>{
    return this.subject.asObservable();
 }
}
