import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppNotfoundComponent } from './app-notfound/app-notfound.component';
import { AppLoginComponent } from './app-login/app-login.component';

const routes: Routes = [  
  { path: '', component: AppHomeComponent}, 
  { path: 'login', component: AppLoginComponent} ,
  { path: '**', component: AppNotfoundComponent} // that one is the always the last one
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
