import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogSearchRoutingModule } from './log-search-routing.module';
import { LogSearchHomeComponent } from './log-search-home/log-search-home.component';
import { SearchListComponent } from './search-list/search-list.component';
import { ReaderComponent } from './reader/reader.component';

@NgModule({
  declarations: [LogSearchHomeComponent, SearchListComponent, ReaderComponent],
  imports: [
    CommonModule,
    LogSearchRoutingModule
  ]
})
export class LogSearchModule { }
