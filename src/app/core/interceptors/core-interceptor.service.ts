import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoreInterceptorService implements HttpInterceptor {

  constructor() { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Im9lbSIsImV4cCI6MTYxMDM4MzE2NCwiZW1haWwiOiJpbmZvQHN5YmVyY2F0LnJ1In0.x1JFx33Vql0p_McnVcexYnk4d2D0KFdrqKxOngBE8m4')
        .set("TTTT", "fdfdf")
      });

    // return next.handle(authReq).pipe(
    //   tap(event => {
    //     if (event instanceof HttpResponse)
    //       console.log('Server response');
    //   }, err => {
    //     if (err instanceof HttpErrorResponse) {
    //       if (err.status == 401) console.log('Unauthorized');
    //     }
    //   })

    // );

    return next.handle(req);
  }
}
