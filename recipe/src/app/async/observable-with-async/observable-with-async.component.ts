import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-observable-with-async',
  templateUrl: './observable-with-async.component.html',
  styleUrls: ['./observable-with-async.component.scss']
})
export class ObservableWithAsyncComponent implements OnInit {
  observableRes;
  constructor() { }

  ngOnInit() {
    this.observableRes = this.getObservableData();
  }

  getObservableData() {
    return Observable.interval(1000).take(5).map(v => v*v);
  }
}
