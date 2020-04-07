import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogSearchHomeComponent } from './log-search-home/log-search-home.component';


const routes: Routes = [{ path: "log-search", component: LogSearchHomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogSearchRoutingModule { }
