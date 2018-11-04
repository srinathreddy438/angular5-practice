import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-with-async',
  templateUrl: './promise-with-async.component.html',
  styleUrls: ['./promise-with-async.component.scss']
})
export class PromiseWithAsyncComponent implements OnInit {
  getPromiseResponse: Promise<any>;
  constructor() { 
    this.getPromiseResponse = this.getPromiseData();
  }

  ngOnInit() {
  }

  getPromiseData() {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve('promide resolved');
      }, 5000)
    });
  }
}
