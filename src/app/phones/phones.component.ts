import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Phone } from '../phone'
import { PhoneService } from '../phone.service'

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  phones?: Phone[];
  selectedPhone?: Phone;

  constructor(private phoneService: PhoneService, private MessageService: MessageService) {

  }

  ngOnInit(): void {
    this.getPhones();
  }
  getPhones(): void {
    this.phoneService.getPhones()
      .subscribe(phones => this.phones = phones);
  }
  onSelect(phone: Phone): void {
    this.selectedPhone = phone;
    this.MessageService.add(`PhonesComponent: Selected phone id= ${phone.id}`);
  }

}
