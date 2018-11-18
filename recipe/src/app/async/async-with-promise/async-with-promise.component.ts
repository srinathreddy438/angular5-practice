import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-with-promise',
  templateUrl: './async-with-promise.component.html',
  styleUrls: ['./async-with-promise.component.scss']
})
export class AsyncWithPromiseComponent implements OnInit {

  promise: Promise<string>;
  constructor() { }

  ngOnInit() {
    this.promise = null;
  }
  clickMe() {
    this.promise = new Promise<string>((resolve, reject) => {
      setTimeout(function () {
        resolve('resolved');
      }, 2000);
    });
  }

}
