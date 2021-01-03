import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonesComponent } from './phones/phones.component';
import { FormsModule } from '@angular/forms';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonesComponent,
    PhoneDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }