import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, multicast } from 'rxjs/operators';
import { Location } from '../Location';


@Component({
  selector: 'app-stand-by',
  templateUrl: './stand-by.component.html',
  styleUrls: ['./stand-by.component.css']
})
export class StandByComponent implements OnInit {

  readonly GEO_URL = 'http://geoplugin.net/json.gp'

  //location$?: Observable<Location>;
  //location?: Location;
  visitors:any = [];

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
      //this.MessageService.add("called location");
      //this.location$ = this.http.get<Location>(this.GEO_URL);

      this.http.get(this.GEO_URL).toPromise().then((data: any) => {


        /* this.location =
        {
          res['geoplugin_request'],
          res['geoplugin_city'],
          res['geoplugin_countryName'],
          res['geoplugin_latitude'],
          res['geoplugin_longitude']
        }; */
        for (let value in data){
          if(data.hasOwnProperty(value)){
            this.visitors.push(data[value]);
            console.log(value)
          }
        }



      });

      this.webSocketService.emit('sent location', this.visitors);
      this.visitors =[];

      // const {
      //   geoplugin_request,
      //   geoplugin_countryName,
      //   geoplugin_city
      // } = this.posts.data;

      // const visitor = {
      //   ip: geoplugin_request,
      //   countryName: geoplugin_countryName,
      //   city: geoplugin_city
      // }

      // this.visitors = [visitor];
    });
  }

}
