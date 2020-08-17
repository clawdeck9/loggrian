import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { FormControl } from '@angular/forms';
import { LogsService } from '../../logs.service';
import { ActivatedRoute } from '@angular/router';
import { LogInterface } from '../../interfaces/log-interface';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css']
})
export class CreationFormComponent implements OnInit {

  filteredTags = ['no value', 'but...', 'this', 'could', 'be', 'longer'];

  logId = "";
  log: LogInterface = null;

  logs: LogInterface[] = [
    { id: "1", title: "Testing the first creation form", lines: "that the main part of the log: the text", tag: "music" },
    { id: "2", title: "Testing the second creation form", lines: "that the main part of the log: the text", tag: "music" },
    { id: "3", title: "Testing the third creation form", lines: "that the main part of the log: the text", tag: "music" },
  ];

  creationForm: FormGroup;


  // creationForm = new FormGroup({
  //   'title': new FormControl('testing Loggrian: title'),
  //   'tag': new FormControl(),
  //   'tagList': new FormControl(),
  //   'lines': new FormControl()
  // });

  constructor(private service: LogsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // get the id param from the route:
    this.logId = this.route.snapshot.params['id'];
    // this.initForm(this.logId);
    this.initForm("3");
    this.setTagListener();
  }


  // will update the tag list when user types key in tag input
  private setTagListener() {
    this.creationForm.get('tag').valueChanges.subscribe(tagValue => {
      if (tagValue.length > 0) {
        this.filteredTags = this.service.getTags(tagValue);
      }
      // console.log('filtTags:', this.filteredTags);
    });
  }


  // the formControl do not exist, not created onInit(), but created here with or without a Log
  private initForm(id: string) {
    let _title = "";
    let _tag = "";
    let _lines = "";
    let _id = "";
    let _log: LogInterface = null;
    if (id != null) {
      _log = this.logs[(+id)-1];
      _title = _log.title;
      _id = _log.id;
      _lines = _log.lines;
      _tag = _log.tag;
    }
    console.log('preloaded log: ', _log);
    this.creationForm = new FormGroup({
      'title': new FormControl(_title),
      'tag': new FormControl(_tag),
      'tagList': new FormControl(),
      'lines': new FormControl(_lines)
    });
  }

  onTagSelected(tag: string) {
    // console.log('tag:',tag);
    this.creationForm.patchValue({ 'tag': tag });
  }
  onSubmit() {
    // console.log('form:', this.creationForm);
    this.service.createLog(this.creationForm);
  }
}
