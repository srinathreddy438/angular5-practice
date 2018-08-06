import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }
  from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/do';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).do(evt => {
        console.log(evt);
      //if (evt instanceof HttpResponse) {
        //console.log('---> status:', evt.status);
        //console.log('---> filter:', req.params.get('filter'));
      //}
    });

  }
}