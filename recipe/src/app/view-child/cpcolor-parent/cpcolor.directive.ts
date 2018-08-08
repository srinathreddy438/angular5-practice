import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appCpcolor]'
})
export class CpcolorDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }
  
  ngAfterViewInit() {
    this.el.nativeElement.style.color = 'red';
  }

  changeColor(color) {
    this.el.nativeElement.style.color = color;
  }
}
