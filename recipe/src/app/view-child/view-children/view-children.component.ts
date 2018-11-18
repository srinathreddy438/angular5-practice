import { AfterViewInit, Component, Directive, Input, QueryList, ViewChildren } from '@angular/core';

@Directive({ selector: 'pane' })
export class Pane {
  // TODO(issue/24571): remove '!'.
  @Input() id: string;
  hidden = true;
  show() {
    this.hidden = false;
  }
}

@Component({
  selector: 'example-app',
  templateUrl: 'view-children.html',
})
export class ViewChildrenComp implements AfterViewInit {
  // TODO(issue/24571): remove '!'.
  @ViewChildren(Pane) panes: QueryList<Pane>;
  serializedPanes: string = '';

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
