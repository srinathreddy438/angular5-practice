import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableWithoutAsyncComponent } from './observable-without-async.component';

describe('ObservableWithoutAsyncComponent', () => {
  let component: ObservableWithoutAsyncComponent;
  let fixture: ComponentFixture<ObservableWithoutAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableWithoutAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableWithoutAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
