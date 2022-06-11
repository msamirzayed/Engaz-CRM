import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  /**
   * Save items to local storage
   * By key, value pairs
   * @param key the name of property
   * @param value the value we need to store
   */
  setItem(key: string, value: string): Observable<void> {
    return of(localStorage.setItem(key, value));
  }

  /**
   * Get the value from local storage for a given property
   * @param key the key of the item we need
   * @returns  the value of the given key
   */
  getItem(key: string): Observable<string | null> {
    return of(localStorage.getItem(key));
  }

  /**
   * Get the value from local storage for a given property
   * @param  key the key of the item we need
   * @returns  the value of the given key
   */
  getStringItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  /**
   * Get the token for the current active user
   * @returns  User Token
   */
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Clear the localStorage and active variables
   */
  clearStorage(): Observable<void> {
    location.reload();
    return of(localStorage.clear());
  }
}
