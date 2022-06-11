import { Injectable } from '@angular/core';
import { switchMap, take } from 'rxjs/operators';
import { HttpService, StorageService } from '../../../core/services';
import { APIURL } from '../../../core/services/http/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = APIURL.users;

  constructor(private http: HttpService, private storage: StorageService) {}

  login() {
    const body = { returnSecureToken: true };
    const url = this.apiUrl.login;

    return this.http
      .postWithoutBaseUrl(url, body)
      .pipe(switchMap(({ idToken }) => this.storage.setItem('token', idToken)));
  }
}
