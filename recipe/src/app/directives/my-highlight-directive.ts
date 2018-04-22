import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';

@Directive({ 
    selector: '[myHighlight]'
})
export class HighlightDirective {
    constructor(private el: ElementRef) {
    //if u put el as private u can access later other steps also
       this.el.nativeElement.style.backgroundColor = 'yellow';
    }

    //based on ishovering flag bind card-outline-primary class to host element.
    @HostBinding('class.card-outline-primary') private ishovering: boolean;

    @HostListener('mouseover') onMouseOver() {
        this.el.nativeElement.style.backgroundColor = 'red';
        this.el.nativeElement.getElementsByClassName("showHideMe")[0].style.display = 'block';
        this.ishovering = true;
    }
    @HostListener('mouseout') onMouseOut() {
        this.el.nativeElement.style.backgroundColor = 'green';
        this.el.nativeElement.getElementsByClassName("showHideMe")[0].style.display = 'none';
        this.ishovering = false;
    }
}