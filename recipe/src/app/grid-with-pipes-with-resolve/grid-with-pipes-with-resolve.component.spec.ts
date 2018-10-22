import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridWithPipesWithResolveComponent } from './grid-with-pipes-with-resolve.component';

describe('GridWithPipesWithResolveComponent', () => {
  let component: GridWithPipesWithResolveComponent;
  let fixture: ComponentFixture<GridWithPipesWithResolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridWithPipesWithResolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridWithPipesWithResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
