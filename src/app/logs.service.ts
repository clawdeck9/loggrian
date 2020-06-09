import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TagInterface } from './interfaces/tag-interface';
import { LogInterface } from './interfaces/log-interface'; 
import { AbstractControl } from '@angular/forms';
import { mergeMap, switchMap, retry, 
  map, catchError, filter, scan, tap } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class LogsService implements OnInit {
// contains the whole tag vector
  tags: string[] = [];

  constructor(private httpCli: HttpClient) {
    if (httpCli === undefined) {
      console.log('HttpClient was not injected ');
    }
    this.getTagList();
  }
// https://console.firebase.google.com/project/log-dispatcher/database/log-dispatcher/data
  postASampleLog(){
    this.httpCli.post("https://log-dispatcher.firebaseio.com/logs.json", 
      { tag:'music', title: 'mixolydian mode', text:'this is not a cool lesson for a beginner'}).
      subscribe(resp => console.log('resp : ', resp));
  }

  ngOnInit(){
  }

  getTagList() {
    this.tags = [];
    this.httpCli.get<TagInterface[]>('http://localhost:8080/tags')
      .pipe(
        tap(item => {
          console.log('resp: ', item);
        }) ,
        map(tagList => {
          for( let i=0; i<tagList.length; i++){
            this.tags.push(tagList[i].name);
          }
        })
      ).subscribe(resp => console.log('subcribed'));
  }


  postLog(form: AbstractControl){
    console.log('form: ', form.value);
    const { tag, title, text } = form.value;
    const fileName = "filename.txt"
    this.httpCli.post<LogInterface>("http://localhost:8080/logs", {tag, title, text, fileName }).
      subscribe(
        resp => {console.log('resp : ', resp)},
        error => {console.log('error: ', error)}
      );
  }

  
// {"-M5uk3BRfxVKukZVqhJB":{"tag":"music","text":"this is not a cool lesson for a beginner","title":"dorian mode"},
//  "-M5vW6ZS9pTwrqrLYI0I":{"tag":"music","text":"this is not a cool lesson for a beginner","title":"dorian mode"}}

// https://console.firebase.google.com/project/log-dispatcher/database/log-dispatcher/data
  getLogById(num: number){
    this.httpCli.get<LogInterface>("https://log-dispatcher.firebaseio.com/logs.json").
    subscribe(resp => (console.log('resp received in log service ')));
  }

// local dispatcher server 8080
  getLogByIdLocal(num: number){
    return this.httpCli.get<LogInterface>("http://localhost:8080/log?id=306");
  }

  getTags(beg: string){
    
    let temp: string[] = [];
    for(let i in this.tags) {
      if (this.tags[i].startsWith(beg)){
        temp.push(this.tags[i]);
      }
    }
    return temp;
  }
}
