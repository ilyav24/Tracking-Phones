import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HideNavService } from './hide-nav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tracking App';
  getLoggedIn?: boolean;

  // will subscribe to the enter method in hide-nav service
  

  constructor(public hideNavService: HideNavService) {
    // this.enteredEventSubscription = this.hideNavService.getEnterEvent().subscribe(() => {
    //  this.hideNavService.setLoggedIn(true);
    // })
  }

  ngOnInit() { 
    // subscribe to currentLogState observable which indicates wether the user signed in as admin
    this.hideNavService.currentLogState.subscribe(getLoggedIn => this.getLoggedIn = getLoggedIn)
  }
}
