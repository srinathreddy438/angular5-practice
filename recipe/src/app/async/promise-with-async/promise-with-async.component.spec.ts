import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseWithAsyncComponent } from './promise-with-async.component';

describe('PromiseWithAsyncComponent', () => {
  let component: PromiseWithAsyncComponent;
  let fixture: ComponentFixture<PromiseWithAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromiseWithAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseWithAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
