import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppNotfoundComponent } from './app-notfound/app-notfound.component';
import { LogCreationModule } from './log-creation/log-creation.module';
import { LogSearchModule } from './log-search/log-search.module';
import { AppLoginComponent } from './app-login/app-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppNotfoundComponent,
    AppLoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    LogCreationModule,
    LogSearchModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
