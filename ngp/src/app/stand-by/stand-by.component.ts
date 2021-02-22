import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stand-by',
  templateUrl: './stand-by.component.html',
  styleUrls: ['./stand-by.component.css']
})
export class StandByComponent implements OnInit {

  readonly GEO_URL = 'http://geoplugin.net/json.gp'

  posts: any;

  constructor(
    private webSocketService: WebSocketService,
    private MessageService: MessageService,
    private http: HttpClient
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

    this.webSocketService.listen('location request').subscribe(() => {
      console.log("called location")
      this.MessageService.add("called location");
      this.posts = this.http.get(this.GEO_URL);
    });
  }

}
