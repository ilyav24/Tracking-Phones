import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  phones: Phone[] = [];

  constructor(private phoneService: PhoneService,private webSocketService: WebSocketService) { }

  ngOnInit(): void {
    // here we want to listen to an event from the socket.io server
    this.webSocketService.listen('test event').subscribe((data) => {
      console.log(data);
    });

    this.webSocketService.listen('connected message').subscribe((data) => {
      console.log(data);
    });



    this.getPhones();
    
  }

  getPhones(): void{
    this.phoneService.getPhones()
      .subscribe(phones => this.phones = phones.slice(1,5))
  }

}
