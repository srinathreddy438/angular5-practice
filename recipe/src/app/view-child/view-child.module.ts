import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewChildComponent } from './view-child.component'
//load child components
import { NumberParentComponent } from './number-parent/number-parent.component';
import { NumberComponent } from './number-parent/number/number.component';


@NgModule({
    declarations: [
        ViewChildComponent,
        NumberParentComponent,
        NumberComponent
    ],
    imports: [
        RouterModule.forRoot([
            {
                path: 'view-child',
                component: ViewChildComponent
            }
        ])
    ],
    providers: [],
    //entryComponents: [ViewChildComponent]
})

export class ViewChildModule{ }

//http://www.codeman.in/blog/angular-2-viewchild-example-160