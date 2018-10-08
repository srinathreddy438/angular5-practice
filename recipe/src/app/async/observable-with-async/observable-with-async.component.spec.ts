import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableWithAsyncComponent } from './observable-with-async.component';

describe('ObservableWithAsyncComponent', () => {
  let component: ObservableWithAsyncComponent;
  let fixture: ComponentFixture<ObservableWithAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableWithAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableWithAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
