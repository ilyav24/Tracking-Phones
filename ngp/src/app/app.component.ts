import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HideNavService } from './hide-nav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tracking App';

  // will subscribe to the enter method in hide-nav service
  enteredEventSubscription:Subscription;

  // To control if the user is admin in or not, we will use a BehaviorSubject
  private loggedIn :boolean=false;

  // logged in getter
  getLoggedIn() {
    return this.loggedIn;
  }

  // logged in setter
  setLoggedIn(flag: boolean) {
     this.loggedIn=flag;
  }

  constructor(private hideNavService: HideNavService) {
    this.enteredEventSubscription= this.hideNavService.getEnterEvent().subscribe(()=>{
      this.setLoggedIn(true);
    })
  }
}
