import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest, HttpResponse,
} from '@angular/common/http';
import {catchError, Observable, of, tap, throwError} from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  private cache = new Map<string, HttpResponse<any>>();

  constructor() {
  }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = httpRequest.headers.set('Version', environment.api.version)
      .set('Agent', environment.api.agent);
    const requestClone = httpRequest.clone({headers});

    const cachedResponse = this.cache.get(httpRequest.url);
    if (cachedResponse) {
      return of(cachedResponse);
    }


    return next.handle(requestClone).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cache.set(httpRequest.url, event);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
