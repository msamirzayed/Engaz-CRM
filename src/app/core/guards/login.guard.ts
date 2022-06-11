import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { StorageService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private storage: StorageService, private router: Router) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.storage.getToken() !== null) {
      this.router.navigate(['/']);
      return false;
    } else return true;
  }
}
