import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-progressive-form',
  templateUrl: './progressive-form.component.html',
  styleUrls: ['./progressive-form.component.css']
})
export class ProgressiveFormComponent implements OnInit {
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  comment: FormControl;
  language: FormControl;

  langs = [
    {value: 'telugu-0', viewValue: 'Telugu'},
    {value: 'english-1', viewValue: 'English'},
    {value: 'hindi-2', viewValue: 'Hindi'}
  ];
  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.minLength(3));
    this.comment = new FormControl();
    this.language = new FormControl();
  }
  createForm()  {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      comment: this.comment,
      language: this.language
    }); 
  }

}
