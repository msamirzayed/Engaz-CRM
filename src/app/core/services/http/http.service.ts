import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from './env-url';

@Injectable({
  providedIn: 'root',
})

/**
 * Manipulate the HTTP requests for the whole app
 * handle the main POST, GET, UPDATE, DELETE methods
 */
export class HttpService {
  private readonly baseUrl = baseUrl;

  /**
   * @description Base backend URL
   *
   * @readonly
   * @type {string}
   */
  get URL(): string {
    return this.baseUrl;
  }

  constructor(private http: HttpClient) {}

  /**
   * @description Post request using angular httpClient module
   * @param url - the end point url
   * @param data - request payload
   * @param options - to add custom config for request header
   * @return Observable of response, comes from the end point
   */
  post(url: string, data: any, options?: any): Observable<any> {
    return this.http.post(this.URL + url, data, options);
  }

  /**
   * @description Post request using angular httpClient module
   * @param url - the end point url
   * @param data - request payload
   * @param options - to add custom config for request header
   * @return Observable of response, comes from the end point
   */
  postWithoutBaseUrl(url: string, data: any, options?: any): Observable<any> {
    return this.http.post(url, data, options);
  }

  /**
   * @description Get request using angular httpClient module
   * @param url - the end point url
   * @param data - request payload
   * @return Observable of response, comes from the end point
   */
  get(url: string, data?: any): Observable<any> {
    return this.http.get(this.URL + url, data);
  }

  /**
   * @description PUT request using angular httpClient module
   * you can bass a parameter (data) in the url separated by '/'
   * @param url - the end point url
   * @param data - request payload
   * @return Observable of response, comes from the end point
   */
  put(url: string, data?: any, options?: any): Observable<any> {
    return this.http.put(this.URL + url, data, options);
  }

  /**
   * @description DELETE request using angular httpClient module
   * you can bass a parameter (data) in the url separated by '/'
   * @param url - the end point url
   * @param data - request payload
   * @return Observable of response, comes from the end point
   */
  delete(url: string, data?: any, params?: any): Observable<any> {
    return this.http.delete(this.URL + url, params);
  }
}
