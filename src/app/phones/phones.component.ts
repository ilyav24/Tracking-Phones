import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone'
import { PHONES } from '../mock-phones'

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  phones = PHONES;
  selectedPhone?: Phone;

  constructor() { }

  ngOnInit(): void {
    
  }
  onSelect(phone: Phone): void {
    this.selectedPhone = phone;
  }

}
