import { Component, OnInit } from '@angular/core';
import { LogsService } from '../../logs.service';


@Component({
  selector: 'app-log-creation-form',
  templateUrl: './log-creation-form.component.html',
  styleUrls: ['./log-creation-form.component.css']
})
export class LogCreationFormComponent implements OnInit {

  constructor(private service: LogsService) { }

  log: any;
  errorLog: any;

  ngOnInit() {
  }

  onTestPost(){
    if(this.service===undefined) console.log('the service is undefined in the formComponent');
    this.service.postASampleLog();
  }
  onPostLog(){
    if(this.service===undefined) console.log('the service is undefined in the formComponent');
    this.service.postLog();
  }
  onGetALog(){
    if(this.service===undefined) console.log('the service is undefined in the formComponent');
    console.log('a log from the server: ', this.service.getLogById(3));
  }
  onGetALogLocal(){
    if(this.service===undefined) console.log('the service is undefined in the formComponent');
    console.log('a log from the server: ');
    this.service.getLogByIdLocal(3).subscribe(
      resp =>  {this.log = resp.tag}, 
      error => {
        this.errorLog = error;
        console.log('error message ', error.message);
      });
  }
}
