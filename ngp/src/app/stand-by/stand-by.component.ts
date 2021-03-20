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

  
  visitors: any = [];

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
      
      this.http.get(this.GEO_URL).toPromise().then((data: any) => {

        for (let value in data) {
          if (data.hasOwnProperty(value)) {
            if (
              value === 'geoplugin_request' ||
              value === 'geoplugin_city' ||
              value === 'geoplugin_countryName' ||
              value === 'geoplugin_latitude' ||
              value === 'geoplugin_longitude') {

              this.visitors.push(data[value]);
            }
          }
        }
      });

      this.webSocketService.emit('sent location', this.visitors);
      this.visitors = [];
    });
  }

}
