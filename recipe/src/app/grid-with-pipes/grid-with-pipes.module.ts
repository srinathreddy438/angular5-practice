import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GridWithPipesComponent } from './grid-with-pipes.component';
// filter module
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule, // filter module
    RouterModule.forRoot([
      {
        path: 'grid-with-pipes',
        component: GridWithPipesComponent
      }
    ])
  ],
  declarations: [
    GridWithPipesComponent,
    // FilterPipe
  ]
})
export class GridWithPipesModule { }
