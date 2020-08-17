import { Component, OnInit } from '@angular/core';
import { LogInterface } from 'src/app/interfaces/log-interface';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  log: LogInterface = null;

  logs: LogInterface[] = [
    { id: "1", title: "Testing the first creation form", lines: "that the main part of the log: the text", tag: "music" },
    { id: "2", title: "Testing the second creation form", lines: "that the main part of the log: the text", tag: "music" },
    { id: "3", title: "Testing the third creation form", lines: "that the main part of the log: the text", tag: "music" },
  ];

  constructor() { }

  ngOnInit() {
  }

  onGetLogById(id: string){
    // get a log from api or load logs at init?
    console.log('log: ', this.logs[(+id)-1]);
  }

}
