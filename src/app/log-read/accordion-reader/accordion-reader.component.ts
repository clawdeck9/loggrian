import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-reader',
  templateUrl: './accordion-reader.component.html',
  styleUrls: ['./accordion-reader.component.css']
})
export class AccordionReaderComponent implements OnInit {

  @Input() data=[];
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
  currentIndex=0;
  constructor() { }

  ngOnInit() {
  }

  onTitleClick(index: number) {
    if (index === this.currentIndex) {
      this.currentIndex = -1;
    } else {
      this.currentIndex = index;
    }
  }
}
