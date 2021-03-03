import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as socketIo from 'socket.io-client';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {



  private socket: SocketIOClient.Socket;
  // how to check if the phone/mobile socket connects to the server?
  // need to test by connecting my phone to the service
  // 1 way is ngrok program
  
  
  readonly uri: string = "localhost:3000" + this.router.url;

  constructor(private router: Router) {
    // how do we know which component we're using the service from?
    // so that we can diffrentiate admin from client
    // we use the uri with the router path /dashboard is admin
    // while /standby is client
    //console.log(this.uri);
    this.socket = socketIo.connect(this.uri);
   }

   

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName,(data: unknown) => {
        subscriber.next(data);
      })
    });
  }

  emit(eventName: string, data: any){
    this.socket.emit(eventName, data);
    
  }
}
