import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //any alteration in httpRequest can be done

    const headers = httpRequest.headers.set('Version', environment.api.version)
      .set('Agent', environment.api.agent);
    const requestClone = httpRequest.clone({headers});

    return next.handle(requestClone).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
