import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyLoadComponent } from './lazy-load.component';
@NgModule({
    imports : [
        RouterModule.forChild([
            {
                path: '',
                component: LazyLoadComponent
            }
        ])
    ],
    declarations: [
        LazyLoadComponent
    ]
})

export class LazyLoadModule {

}