import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PracticeComponent} from './practice-component';
@NgModule({
    declarations: [
        PracticeComponent
    ],
    imports: [
        RouterModule.forChild([
                {
                    path: '',
                    component: PracticeComponent
                }
            ])
    ],
    exports: [],
    providers: [],
    bootstrap: []
})
export class PracticeModule {
}
