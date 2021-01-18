import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as socketIo from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {



  private socket: SocketIOClient.Socket;
  readonly uri: string = "http://localhost:3000";

  constructor() {
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
