import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { TagInterface } from './interfaces/tag-interface';
import { TaskInterface } from './interfaces/task-interface'; 
import { LogInterface } from './interfaces/log-interface'; 
import { AbstractControl } from '@angular/forms';
import { mergeMap, switchMap, retry, map, catchError, filter, scan, tap } from 'rxjs/operators'; 
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class LogsService implements OnInit {
// contains the whole tag vector
  tags: string[] = [];

  constructor(private auth: AuthService, private http: HttpClient) {
    if (http === undefined) {
      console.log('HttpClient was not injected ');
    }
    // this.getTagList();
  }
// https://console.firebase.google.com/project/log-dispatcher/database/log-dispatcher/data
  postASampleLog(){
    this.http.post("https://log-dispatcher.firebaseio.com/logs.json", 
      { tag:'music', title: 'mixolydian mode', text:'this is not a cool lesson for a beginner'}).
      subscribe(resp => console.log('resp : ', resp));
  }

  ngOnInit(){
  }

  getTagList() {
    this.tags = [];
    this.http.get<TagInterface[]>('http://localhost:8080/tags')
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
  gardelaplace(tag: string){
    console.log('getLogsByTag::getTasks()');
    this.auth.userLoggedIn.pipe(
      tap(data => console.log('user???: ', data))
    );// pipe
  }
// get some tasks from the jwtsecurity spring app
  placeholder(tag: string){
    return this.auth.userLoggedIn.pipe(
      map(
        user => {
          console.log('getLogsByTag::getTasks()');
          return this.http.get<TaskInterface[]>('http://localhost:8080/tasks', {
            headers: new HttpHeaders().set('authorization', user.token),
            withCredentials: true,
            observe: 'body'
          })
        }
      ), // map
      tap(data => console.log('tasks: ', data[1]))
    );// pipe
  }

  getLogsByTag(tag: string) {
    return this.http.get<TaskInterface[]>('http://localhost:8080/tags', {
      headers: new HttpHeaders().set('authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNTk2Njk5OTY5LCJyb2xlcyI6W3siYXV0aG9yaXR5IjoiVVNFUiJ9XX0.jprom03E4xSWGO9hoj--oNC91rc74mu8HOBku0UNp8w'),
      withCredentials: true,
      observe: 'body'
    })
  }

  postLog(){
    console.log('temp post a task ');
    const temp = this.auth.userLoggedIn.value;

    this.http.post<TaskInterface>("http://localhost:8080/tasks", {id: '5', taskName:'nom' }, {
      // headers: new HttpHeaders({ 'withCredentials': 'true'}).set('authorization', temp.token),
      headers: new HttpHeaders().set('authorization', temp.token),
      observe: 'body'
    }).
      subscribe(
        resp => {console.log('resp : ', resp)},
        error => {console.log('error: ', error)}
      );
  }

  placeholder_postLog(form: AbstractControl){
    console.log('form: ', form.value);
    const { tag, title, text } = form.value;
    const fileName = "filename.txt"
    this.http.post<LogInterface>("http://localhost:8080/logs", {tag, title, text, fileName }).
      subscribe(
        resp => {console.log('resp : ', resp)},
        error => {console.log('error: ', error)}
      );
  }

  
// {"-M5uk3BRfxVKukZVqhJB":{"tag":"music","text":"this is not a cool lesson for a beginner","title":"dorian mode"},
//  "-M5vW6ZS9pTwrqrLYI0I":{"tag":"music","text":"this is not a cool lesson for a beginner","title":"dorian mode"}}

// https://console.firebase.google.com/project/log-dispatcher/database/log-dispatcher/data
  getLogById(num: number){
    this.http.get<LogInterface>("https://log-dispatcher.firebaseio.com/logs.json").
    subscribe(resp => (console.log('resp received in log service ')));
  }

// local dispatcher server 8080
  getLogByIdLocal(num: number){
    return this.http.get<LogInterface>("http://localhost:8080/log?id=306");
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
