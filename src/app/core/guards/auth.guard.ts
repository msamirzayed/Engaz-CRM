import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { StorageService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private storage: StorageService, private router: Router) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.storage.getToken() === null) {
      this.router.navigate(['/auth/login']);
      return false;
    } else return true;
  }
}
