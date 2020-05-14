import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css']
})
export class CreationFormComponent implements OnInit {

  creationForm = new FormGroup({
    'title': new FormControl('title here')
  });

  constructor() {
    console.log(this.creationForm.get('title'));
  }

  ngOnInit() {
  }

}
