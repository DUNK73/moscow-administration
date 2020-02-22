import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { BaseHttpException } from '../exceptions/baseException';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CoreInterceptorService implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authReq = req;

    if (this.authenticationService.token) {
      authReq = req.clone(
        {
          headers: req.headers
            .set('Authorization', `JWT ${this.authenticationService.token}`)
        });
    }

    return next
      .handle(authReq)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            console.log('Server response');
          }
        }, error => {
          if (error instanceof HttpResponse) {
            console.log('Server response');
          }
        }),
        catchError(error => {
          if (error instanceof HttpErrorResponse) {
            // if (err.status == 401) console.log('Unauthorized');

            switch (error.status) {
              //case value:
              //  break;

              default:
                return throwError(new BaseHttpException(error));
                break;
            }

          }
        })
      );

    // return next.handle(req);
  }
}
