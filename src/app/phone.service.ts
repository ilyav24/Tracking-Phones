import { Injectable } from '@angular/core';
import {Phone} from './phone';
import {PHONES} from './mock-phones';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  getPhones(): Observable<Phone[]> {
    return of(PHONES);
  }
  constructor() { }
}
