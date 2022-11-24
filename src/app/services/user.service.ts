import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import User from '../Models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = '/user';
  constructor(private http: HttpClient) {}
  register(user: User): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${this.baseUrl}/register`, user);
  }
  login(user: User): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${this.baseUrl}/login`, user);
  }
  logout(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/${this.baseUrl}/logout`);
  }
  public isAuthenticated(): Boolean {
    const user = localStorage.getItem('user');
    if (user && JSON.parse(user)) {
      return true;
    }
    return false;
  }
  public setUserInfo(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  public getUserInfo() {
    let user: User | undefined;
    console.log(localStorage.getItem('user'));
    const localUser = localStorage.getItem('user') || '';
    user = JSON.parse(localUser);
    return user;
  }
  public clearUserInfo() {
    localStorage.clear();
  }
}
