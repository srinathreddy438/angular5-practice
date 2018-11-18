import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
// import 'rxjs';
@Component({
  selector: 'app-progressive-form',
  templateUrl: './progressive-form.component.html',
  styleUrls: ['./progressive-form.component.scss']
})
export class ProgressiveFormComponent implements OnInit {
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  comment: FormControl;
  language: FormControl;

  langs = [
    { value: 'telugu-0', viewValue: 'Telugu' },
    { value: 'english-1', viewValue: 'English' },
    { value: 'hindi-2', viewValue: 'Hindi' }
  ];


  // reactive form
  searchField: FormControl;
  searches: string[] = [];
  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();

    // reactive form
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe((term) => {
        this.searches.push(term);
      });
  }

  createFormControls() {
    this.firstName = new FormControl('sri', Validators.required);
    this.lastName = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.comment = new FormControl();
    this.language = new FormControl();
  }
  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      comment: this.comment,
      language: this.language
    });
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log('Form Submitted!');
      this.myform.reset();
    }
  }

}
