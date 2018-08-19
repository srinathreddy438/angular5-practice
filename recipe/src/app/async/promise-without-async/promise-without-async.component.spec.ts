import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseWithoutAsyncComponent } from './promise-without-async.component';

describe('PromiseWithoutAsyncComponent', () => {
  let component: PromiseWithoutAsyncComponent;
  let fixture: ComponentFixture<PromiseWithoutAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromiseWithoutAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseWithoutAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
