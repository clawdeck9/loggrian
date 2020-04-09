import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogReadRoutingModule } from './log-read-routing.module';
import { LogReadHomeComponent } from './log-read-home/log-read-home.component';
import { ModalReaderComponent } from './modal-reader/modal-reader.component';
import { AccordionReaderComponent } from './accordion-reader/accordion-reader.component';


@NgModule({
  declarations: [LogReadHomeComponent, ModalReaderComponent, AccordionReaderComponent],
  imports: [
    CommonModule,
    LogReadRoutingModule
  ]
})
export class LogReadModule { }
