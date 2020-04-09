import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogReadHomeComponent } from './log-read-home/log-read-home.component';

const routes: Routes = [ { path: "", component: LogReadHomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogReadRoutingModule { }
