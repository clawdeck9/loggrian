import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppNotfoundComponent } from './app-notfound/app-notfound.component';

const routes: Routes = [  
  { path: '', component: AppHomeComponent}, 
  {path: '**', component: AppNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
