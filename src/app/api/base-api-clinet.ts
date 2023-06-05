import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseApiClient {

  protected constructor(
    private http: HttpClient,
  ) {

  }

  /**
   * HTTP GET
   */
  protected get(url: string, params: HttpParams = new HttpParams(), headers?: HttpHeaders): Observable<any> {

    headers = this.checkHeaders(headers);

    return this.http.get(url, {
      params,
      headers,
    });
  }

  /**
   * HTTP POST
   */
  protected post(url: string, body: object = {}, headers?: HttpHeaders): Observable<any> {

    headers = this.checkHeaders(headers);

    return this.http.post(url, JSON.stringify(body), {headers});
  }

  /**
   * Adds default headers
   */
  private checkHeaders(headers?: HttpHeaders): HttpHeaders {
    if (!headers) {
      headers = new HttpHeaders().set('Content-Type', 'application/json');
    }

    const headerKeys = headers.keys();

    if (headerKeys.length > 0 && (headerKeys.indexOf('content-type') < 0)) {
      headers = headers.set('Content-Type', 'application/json');
    }

    return headers;
  }
}
