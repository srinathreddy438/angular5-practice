import { AfterViewInit, Component, Directive, Input, QueryList, ViewChildren, OnInit } from '@angular/core';

@Directive({ selector: '[appPane]' })
export class PaneDirective {
  // TODO(issue/24571): remove '!'.
  @Input() id: string;
  hidden = true;
  show() {
    this.hidden = false;
  }
}

@Component({
  selector: 'app-example',
  templateUrl: 'view-children.html',
})
export class ViewChildrenComponent implements AfterViewInit, OnInit {
  // TODO(issue/24571): remove '!'.
  @ViewChildren(PaneDirective) panes: QueryList<PaneDirective>;
  serializedPanes: string;
  ngOnInit() {
    this.serializedPanes = '';
  }

  // shouldShow = false;

  // show() { this.shouldShow = true; }

  ngAfterViewInit() {
    // this.calculateSerializedPanes();
    // this.panes.changes.subscribe((r) => { this.calculateSerializedPanes(); });
    this.panes.changes.subscribe((r) => { console.log(this.panes); });
  }
  /*
    calculateSerializedPanes() {
      setTimeout(() => { this.serializedPanes = this.panes.map(p => p.id).join(', '); }, 0);
    }*/
}
