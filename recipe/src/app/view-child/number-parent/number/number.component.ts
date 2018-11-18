import { Component } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent {
  count: number;
  constructor() {
    this.count = 0;
  }
  increaseByOne() {
    this.count++;
  }
  decreaseByOne() {
    this.count--;
  }
}
