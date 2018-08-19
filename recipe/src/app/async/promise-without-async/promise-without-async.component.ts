import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-promise-without-async',
  templateUrl: './promise-without-async.component.html',
  styleUrls: ['./promise-without-async.component.css']
})
export class PromiseWithoutAsyncComponent implements OnInit {
  promiseData;
  constructor() { }

  ngOnInit() {
    this.getPromiseData().then(res => {
      this.promiseData = res;
    });
  }

  getPromiseData() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve("promise resolved");
        }, 5000);
    });
  }
}
