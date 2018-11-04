import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterPipe } from './pipes/grid-filter.pipe';
@NgModule({
    declarations: [FilterPipe],
    imports: [CommonModule],
    exports: [FilterPipe],
    providers: []
})

export class SharedModule { }
