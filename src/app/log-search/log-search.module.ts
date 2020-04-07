import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogSearchRoutingModule } from './log-search-routing.module';
import { LogSearchHomeComponent } from './log-search-home/log-search-home.component';


@NgModule({
  declarations: [LogSearchHomeComponent],
  imports: [
    CommonModule,
    LogSearchRoutingModule
  ]
})
export class LogSearchModule { }
