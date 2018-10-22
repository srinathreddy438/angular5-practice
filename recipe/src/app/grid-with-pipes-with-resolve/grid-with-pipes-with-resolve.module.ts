import { CommonModule } from '@angular/common';
import { Injectable, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Resolve, RouterModule } from '@angular/router';
import { GridWithPipesWithResolveComponent } from './grid-with-pipes-with-resolve.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ListWithResolverService implements Resolve<any> {
  /*
    refer: https://www.youtube.com/watch?v=Dm1OpX42Aho
          https://www.callibrity.com/blog/angular-2-route-resolves
  */
  constructor(private http: HttpClient) { }
  resolve(): Observable<any> {
    const newsUrl = 'https://httpbin.org/post';
    const news = 'The sky is blue';

    return this.http.post(newsUrl, news).pipe(
      map((dataFromApi) => dataFromApi),
      catchError((err) => Observable.throw(err.json().error))
    );
  }
}
// example2 - resolver
@Injectable()
export class GridListWithResolverService implements Resolve<any> {
  /*
    refer: https://www.youtube.com/watch?v=Dm1OpX42Aho
          https://www.callibrity.com/blog/angular-2-route-resolves
  */
  constructor(private http: HttpClient) { }
  resolve(): Observable<any> {
    const apiRoot = 'http://demo8213882.mockable.io/fetchProperties';
    const url = `${apiRoot}`;
    return this.http.get(url).pipe(
      map((dataFromApi) => dataFromApi),
      catchError((err) => Observable.throw(err.json().error))
    );
  }
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'grid-with-pipes-with-resolve',
        component: GridWithPipesWithResolveComponent,
        resolve: { list: ListWithResolverService, gridList: GridListWithResolverService }
      }
    ])
  ],
  declarations: [
    GridWithPipesWithResolveComponent
  ],
  providers: [
    ListWithResolverService,
    GridListWithResolverService
  ]
})
export class GridWithPipesWithResolveModule { }
