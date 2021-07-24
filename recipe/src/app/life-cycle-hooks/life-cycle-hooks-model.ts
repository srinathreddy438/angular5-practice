import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifeCycleHooksComponent } from './life-cycle-hooks';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child-component/child-component';
import { Browser } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';


const routings: Routes = [
    {
        path: 'life-cycle-hooks',
        component: LifeCycleHooksComponent
    }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(
            routings
        )
    ],
    declarations: [
        LifeCycleHooksComponent,
        ChildComponent
    ],
    providers: [],
    exports: [],
    bootstrap: [],
})

export class LifeCycleHooksModule {}

// remove un used imports alt+shift+o
// https://www.stackchief.com/blog/ngAfterViewChecked%20Example%20%7C%20Angular
