import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncWithObservableComponent } from './async-with-observable.component';

describe('AsyncWithObservableComponent', () => {
  let component: AsyncWithObservableComponent;
  let fixture: ComponentFixture<AsyncWithObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncWithObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncWithObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
