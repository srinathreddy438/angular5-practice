import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridWithPipesComponent } from './grid-with-pipes.component';

describe('GridWithPipesComponent', () => {
  let component: GridWithPipesComponent;
  let fixture: ComponentFixture<GridWithPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GridWithPipesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridWithPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
