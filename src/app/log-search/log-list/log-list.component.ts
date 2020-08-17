import { Component, OnInit, Input } from '@angular/core';
import { LogInterface } from 'src/app/interfaces/log-interface';
import { LogsService } from 'src/app/logs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {

  @Input() tag: string;
  logs: LogInterface[] = [];
  log: LogInterface = null;

  constructor(private logsService: LogsService, private router: Router) { }

  ngOnInit() {
    if(this.tag !== null){
      this.onGetLogsByTag(this.tag);
    }
  }

  onGetLogsByTag(tag: string){
    this.logsService.getLogsByTag(tag).subscribe(logs => this.logs = logs);
  }

  onGetLogById(id: string){
    this.logsService.getLogById(id).subscribe(log => this.log = log);
    this.router.navigateByUrl('creation-form'); 
    // START: One way of using routerLink
    //  this.router.navigateByUrl(`${'app-customer-details'}/${rowVal.id}`); 
    // and this: an obs from an ang lib sends the customer data 
  // ngOnInit() {
  //   this.route.data.subscribe((res) => {
  //       this.customerData = res;
  //   },
  }
}
