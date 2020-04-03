import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogCreationFormComponent } from './log-creation-form/log-creation-form.component';

const routes: Routes = [ { path: 'log-creation', component: LogCreationFormComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogCreationRoutingModule { }
