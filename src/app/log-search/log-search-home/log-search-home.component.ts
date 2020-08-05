import { Component, OnInit } from '@angular/core';
import { LogsService } from '../../logs.service';
import { LogInterface } from 'src/app/interfaces/log-interface';

@Component({
  selector: 'app-log-search-home',
  templateUrl: './log-search-home.component.html',
  styleUrls: ['./log-search-home.component.css']
})
export class LogSearchHomeComponent implements OnInit {

  logs: LogInterface[] = [];

  constructor(private logsService: LogsService) { }

  ngOnInit() {
  }

  onGetLogsByTag(tag: string){
    this.logsService.getLogsByTag(tag).subscribe(logs => this.logs = logs);
  }

}
