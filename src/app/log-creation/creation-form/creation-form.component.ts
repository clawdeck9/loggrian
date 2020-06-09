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
    'title': new FormControl('testintg Loggrian'),
    'tag': new FormControl('enter a tag'),
    'tagItem': new FormControl('tag here!'),
    'text': new FormControl('a sample of the whole thing here...')
  });

  constructor(private service: LogsService) {
    console.log(this.creationForm.get('title'));
  }

  ngOnInit() {
    this.creationForm.get('tag').valueChanges.subscribe(tagValue => {
      if (tagValue.length > 1) {
        this.filteredTags = this.service.getTags(tagValue);
      }
      console.log('filtTags:', this.filteredTags);
    });
  }

  onTagSelected(tagBeg: string){
    // console.log('tag:',tag);
    this.creationForm.patchValue( {'tag': tagBeg});
  }
  onSubmit(){
    console.log('form:', this.creationForm);
    this.service.postLog(this.creationForm);
  }
}
