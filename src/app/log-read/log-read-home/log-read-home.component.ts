import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-read-home',
  templateUrl: './log-read-home.component.html',
  styleUrls: ['./log-read-home.component.css']
})
export class LogReadHomeComponent implements OnInit {

  logs=[
    {
      title:'first title', 
      text:'what s important to say concerning that topic,it must be said here.',
      tag:'music'
    },
    {
      title:'second title', 
      text:'what s important to say concerning that topic,it must be said here..',
      tag:'music'
    },
    {
      title:'third title', 
      text:'what s important to say concerning that topic,it must be said here...',
      tag:'music'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
