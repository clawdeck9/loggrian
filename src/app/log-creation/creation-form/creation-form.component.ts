import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { FormControl } from '@angular/forms';
import { LogsService } from '../../logs.service';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css']
})
export class CreationFormComponent implements OnInit {

  filteredTags = ['no value', 'but...', 'this', 'could', 'be', 'longer'];


  creationForm = new FormGroup({
    'title': new FormControl('testing Loggrian: title'),
    'tag': new FormControl(),
    'tagList': new FormControl(),
    'lines': new FormControl()
  });

  constructor(private service: LogsService) {
    console.log(this.creationForm.get('title'));
  }

  ngOnInit() {
    this.creationForm.get('tag').valueChanges.subscribe(tagValue => {
      if (tagValue.length > 0) {
        this.filteredTags = this.service.getTags(tagValue);
      }
      console.log('filtTags:', this.filteredTags);
    });
  }

  onTagSelected(tag: string){
    // console.log('tag:',tag);
    this.creationForm.patchValue( {'tag': tag});
  }
  onSubmit(){
    // console.log('form:', this.creationForm);
    this.service.createLog(this.creationForm);
  }
}
