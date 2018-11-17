import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { FilterPipe } from './pipes/grid-filter.pipe';
import { FilterPipe } from './';
// interceptor
import { InterceptorModule } from './interceptor/index';
@NgModule({
    declarations: [FilterPipe],
    imports: [
        CommonModule,
        InterceptorModule
    ],
    exports: [FilterPipe],
    providers: []
})

export class SharedModule { }
