import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GridWithPipesComponent } from './grid-with-pipes.component';
import { FilterPipe } from './grid-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'grid-with-pipes',
        component: GridWithPipesComponent
      }
    ])
  ],
  declarations: [
    GridWithPipesComponent,
    FilterPipe
  ]
})
export class GridWithPipesModule { }
