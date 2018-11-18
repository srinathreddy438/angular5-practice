import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AsyncWithPromiseComponent } from './async-with-promise/async-with-promise.component';
import { AsyncWithObservableComponent } from './async-with-observable/async-with-observable.component';
import { PromiseWithoutAsyncComponent } from './promise-without-async/promise-without-async.component';
import { PromiseWithAsyncComponent } from './promise-with-async/promise-with-async.component';
import { ObservableWithoutAsyncComponent } from './observable-without-async/observable-without-async.component';
import { ObservableWithAsyncComponent } from './observable-with-async/observable-with-async.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'async',
        component: AppComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    AsyncWithPromiseComponent,
    AsyncWithObservableComponent,
    PromiseWithoutAsyncComponent,
    PromiseWithAsyncComponent,
    ObservableWithoutAsyncComponent,
    ObservableWithAsyncComponent
  ]
})
export class AsyncModule { }
