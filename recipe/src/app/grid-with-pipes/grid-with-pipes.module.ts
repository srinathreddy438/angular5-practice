import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GridWithPipesComponent } from './grid-with-pipes.component';
// filter module
import { GridFilterPipeModule } from '../pipes/grid-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GridFilterPipeModule, // filter module
    RouterModule.forRoot([
      {
        path: 'grid-with-pipes',
        component: GridWithPipesComponent
      }
    ])
  ],
  declarations: [
    GridWithPipesComponent
  ]
})
export class GridWithPipesModule { }
