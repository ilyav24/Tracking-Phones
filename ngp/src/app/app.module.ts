import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonesComponent } from './phones/phones.component';
import { FormsModule } from '@angular/forms';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { UserPermissionComponent } from './user-permission/user-permission.component';
import { StandByComponent } from './stand-by/stand-by.component';

@NgModule({
  
  declarations: [
    AppComponent,
    PhonesComponent,
    PhoneDetailComponent,
    MessagesComponent,
    DashboardComponent,
    UserPermissionComponent,
    StandByComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
