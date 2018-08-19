import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-observable-without-async',
  templateUrl: './observable-without-async.component.html',
  styleUrls: ['./observable-without-async.component.css']
})
export class ObservableWithoutAsyncComponent implements OnInit {
  observableRes : number;
  subscription: any = null;
  constructor() { 
    this.subscription = this.getObservableData().subscribe(response => {
      this.observableRes = response;
    });
  }

  ngOnInit() {
  }

  getObservableData() {
    return Observable.interval(1000).take(5).map(v => v*v);
    //for every 1 second number will increment to 1 then it will display
    //1s 0*0 = 0
    //2s 1*1 = 1
    //3s 2*2 = 4
    //4s 3*3 = 9
    //5s 4*4 = 16
  }

  //destroy observable
  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
