import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-stand-by',
  templateUrl: './stand-by.component.html',
  styleUrls: ['./stand-by.component.css']
})
export class StandByComponent implements OnInit {

  constructor(
    private webSocketService: WebSocketService,
    private MessageService: MessageService,
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
  }

}
