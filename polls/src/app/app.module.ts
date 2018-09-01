import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PollListComponent } from './poll-list/poll-list.component';
import { PollCardComponent } from './poll-card/poll-card.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PollListComponent,
    PollCardComponent,
    ProfileCardComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
