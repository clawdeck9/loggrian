import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogCreationRoutingModule } from './log-creation-routing.module';
import { LogCreationFormComponent } from './log-creation-form/log-creation-form.component';


@NgModule({
  declarations: [LogCreationFormComponent],
  imports: [
    CommonModule,
    LogCreationRoutingModule
  ]
})
export class LogCreationModule { }
