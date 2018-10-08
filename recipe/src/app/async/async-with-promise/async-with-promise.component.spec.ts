import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncWithPromiseComponent } from './async-with-promise.component';

describe('AsyncWithPromiseComponent', () => {
  let component: AsyncWithPromiseComponent;
  let fixture: ComponentFixture<AsyncWithPromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncWithPromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncWithPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
