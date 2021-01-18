import { Component, OnInit, Input } from '@angular/core';
import { Phone } from '../phone';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {
  phone?: Phone;
  constructor(
    private route: ActivatedRoute,
    private phoneService: PhoneService,
    private locationURL: Location
  ) { }

  ngOnInit(): void {
    this.getPhone();
  }

  getPhone(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.phoneService.getPhone(id)
      .subscribe(phone => this.phone = phone);
  }

  goBack(): void {
    this.locationURL.back();
  }
  
}
