import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppNotfoundComponent } from './app-notfound/app-notfound.component';

const routes: Routes = [
  {
    path: 'log-creation',
    loadChildren: () =>
      import('./log-creation/log-creation.module').then(m => m.LogCreationModule)
  }, 
  {
    path: 'log-search',
    loadChildren: () =>
      import('./log-search/log-search.module').then(m => m.LogSearchModule)
  }, 
  {
    path: 'log-read',
    loadChildren: () =>
      import('./log-read/log-read.module').then(m => m.LogReadModule)
  },  
  { path: '', component: AppHomeComponent}, 
  {path: '**', component: AppNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


