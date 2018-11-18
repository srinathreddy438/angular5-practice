import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-async-with-observable',
  templateUrl: './async-with-observable.component.html',
  styleUrls: ['./async-with-observable.component.scss']
})
export class AsyncWithObservableComponent implements OnInit {
  countCompleted: boolean;
  countDown: number;
  count$: Observable<number>;
  message: string;
  constructor() {
    this.countDown = 5;
    this.message = 'Happy birthday!';
    this.countCompleted = false;

    this.count$ = Observable
      .interval(1000)
      .map(i => this.countDown - i)
      .takeWhile(i => i > 0)
      .finally(() => this.countCompleted = true);
  }

  ngOnInit() {
  }
}
