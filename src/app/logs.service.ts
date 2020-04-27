import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogInterface } from './interfaces/log-interface'; 

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor(private httpCli: HttpClient) {
    if (httpCli === undefined) {
      console.log('HttpClient was not injected ');
    }
  }
// https://console.firebase.google.com/project/log-dispatcher/database/log-dispatcher/data
  postASampleLog(){
    this.httpCli.post("https://log-dispatcher.firebaseio.com/logs.json", 
      { tag:'music', title: 'mixolydian mode', text:'this is not a cool lesson for a beginner'}).
      subscribe(resp => console.log('resp : ', resp));
  }

  postLog(){
    this.httpCli.post<LogInterface>("http://localhost:8080/logs", 
      { tag:'music', fileName:'file name', title: 'mixolydian mode', lines:'this is not a cool lesson for a beginner'}).
      subscribe(
        resp => {console.log('resp : ', resp)},
        error => {console.log('error: ', error)}
      );
  }

// {"-M5uk3BRfxVKukZVqhJB":{"tag":"music","text":"this is not a cool lesson for a beginner","title":"dorian mode"},
//  "-M5vW6ZS9pTwrqrLYI0I":{"tag":"music","text":"this is not a cool lesson for a beginner","title":"dorian mode"}}

// https://console.firebase.google.com/project/log-dispatcher/database/log-dispatcher/data
  getLogById(num: number){
    this.httpCli.get<LogInterface>("https://log-dispatcher.firebaseio.com/logs.json").subscribe(resp => (console.log('resp received in log service ')));
  }

// local dispatcher server 8080
  getLogByIdLocal(num: number){
    return this.httpCli.get<LogInterface>("http://localhost:8080/log?id=306");
  }
}
