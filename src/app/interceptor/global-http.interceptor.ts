import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { AlertService } from '../services/alert.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {
  options = {
    autoClose: true,
    keepAfterRouteChange: false,
  };
  constructor(
    private alertService: AlertService,
    private spinnerService: NgxSpinnerService
  ) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerService.show();

    return next
      .handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.spinnerService.hide();

          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            //client-side error
            errorMessage = `Error : ${error.error.message}`;
          } else {
            //server-side error
            errorMessage = `Error Code : ${error.status}\nMessage: ${error.message}`;
          }
          console.log(errorMessage);
          this.alertService.error(errorMessage, this.options);

          return throwError(() => new Error(errorMessage));
        })
      )
      .pipe(
        map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
          if (evt instanceof HttpResponse) {
            this.spinnerService.hide();
          }
          return evt;
        })
      );
  }
}
