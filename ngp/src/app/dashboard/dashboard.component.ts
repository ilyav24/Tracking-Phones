import { Component, Input, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';
import { WebSocketService } from '../web-socket.service';
import { MessageService } from '../message.service';
import { HideNavService } from '../hide-nav.service';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  phones: Phone[] = [];
  

  constructor(
    private phoneService: PhoneService,
    private webSocketService: WebSocketService,
    private MessageService: MessageService,
    private hideNavService: HideNavService,
    ) { }

  
  
  ngOnInit(): void {
    // here we want to listen to an event from the socket.io server
    this.webSocketService.listen('broadcast').subscribe((data) => {
      console.log(data);
      this.MessageService.add(data);
    });

    this.webSocketService.listen('connected message').subscribe((data) => {
      console.log(data);
    });

    // wrap in setTimeout to make the call async
    setTimeout(()=>this.enteredDashboard(),0)
    this.getPhones();


    
  }

  getPhones(): void{
    this.phoneService.getPhones()
      .subscribe(phones => this.phones = phones.slice(1,5))
  }

  enteredDashboard(){
    this.hideNavService.setLoggedIn(true);
  }

}
