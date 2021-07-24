import { Component, Input, OnChanges, SimpleChanges, OnInit, OnDestroy, AfterViewInit, AfterContentChecked, AfterContentInit, AfterViewChecked, DoCheck } from '@angular/core';
import { trigger } from '@angular/core/src/animation/dsl';

@Component({
    selector: 'app-child-component',
    templateUrl: 'child-component.html'
})

export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() parentToChild: string;
    @Input() customer: any;
    changesObjFromParent: Object;
    constructor() {
        this.changesObjFromParent = {};
    }
    ngOnChanges(changes: SimpleChanges) {
        console.log('onchanges calling');
        this.changesObjFromParent = changes;
        console.log(changes);
    }
    ngOnInit() {
        console.log('oninit calling');
    }
    ngDoCheck() {
        console.log('ngDoCheck calling', this.customer);
    }
    ngAfterContentInit() {
        console.log('afterContentInit calling');
    }
    ngAfterContentChecked() {
        console.log('afterContentChecked calling');
    }
    ngAfterViewInit() {
        console.log('afterViewInit calling');
    }
    ngAfterViewChecked() {
        console.log('afterViewChecked calling');
    }
    ngOnDestroy() {
        console.log('ondestroy calling');
    }
}

/* ngOnChnages will trigger whenever value bounded value chnages.
before ngOnInit it will trigger, afterwards every input changes it will trigger

first init, then onchanges console will display
for eveny chnage in input onchanges console will display

ngOnDestroy will call while leaving the page */
