import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogSearchHomeComponent } from './log-search-home/log-search-home.component';
import { SearchListComponent } from './search-list/search-list.component';
import { ReaderComponent } from './reader/reader.component';

const routes: Routes = [{path: '', component: LogSearchHomeComponent,
                            children: [{path: '', component: SearchListComponent},
                                        {path: 'reader', component: ReaderComponent}]
                        }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogSearchRoutingModule { }
