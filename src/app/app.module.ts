import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppNotfoundComponent } from './app-notfound/app-notfound.component';
import { LogCreationModule } from './log-creation/log-creation.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppNotfoundComponent
  ],
  imports: [
    BrowserModule,
    LogCreationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
