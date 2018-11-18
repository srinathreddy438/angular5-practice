import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CpcolorDirective } from './cpcolor.directive';

@Component({
  selector: 'app-cpcolor-parent',
  templateUrl: './cpcolor-parent.component.html',
  styleUrls: ['./cpcolor-parent.component.scss']
})
export class CpcolorParentComponent implements AfterViewInit {
  @ViewChild('CpcolorDirective')
  private cpcolorDirective: CpcolorDirective;
  ngAfterViewInit() {
    console.log(this.cpcolorDirective);
  }
  changeColorTo(color) {
    this.cpcolorDirective.changeColor(color);
  }
}
