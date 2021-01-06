import { Injectable } from '@angular/core';
import {Phone} from './phone';
import {PHONES} from './mock-phones';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  getPhones(): Observable<Phone[]> {
    // TODO: send message _after_ fethching the phones
    this.MessageService.add('PhoneService: fetched phones')
    return of(PHONES);
  }
  constructor(private MessageService: MessageService) { }
}
