import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  constructor() {
    if (this.isAuthenticated()) {
      this.isLoggedIn = true;
    }
  }
  public isAuthenticated(): Boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  }
}
