import { Injectable } from '@angular/core';
import {Phone} from './phone';
import {PHONES} from './mock-phones';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private MessageService: MessageService) { }

  getPhones(): Observable<Phone[]> {
    // TODO: send message _after_ fethching the phones
    this.MessageService.add('PhoneService: fetched phones')
    return of(PHONES);
  }

  getPhone(id: number): Observable<Phone | undefined> {
    // TODO: send message _after_ fethching the phones
    this.MessageService.add(`PhoneService: fetched phone id=${id}`)
    return of(PHONES.find(phone => phone.id === id));
  }
  
}
