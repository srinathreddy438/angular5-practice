import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
selector: 'app-cptheme',
templateUrl: './cptheme.component.html',
styleUrls: ['./cptheme.component.scss']
})
export class CpthemeComponent implements AfterViewInit {

@ViewChild('name')
private elName: ElementRef;
@ViewChild('city')
private elCity: ElementRef;

ngAfterViewInit() {
this.elName.nativeElement.style.backgroundColor = 'cyan';
this.elName.nativeElement.style.color = 'red';
this.elCity.nativeElement.style.backgroundColor = 'cyan';
this.elCity.nativeElement.style.color = 'red';
}

}
