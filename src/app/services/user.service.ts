import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import User from '../Models/user.model';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'user';
  constructor(private http: HttpClient) {}
  register(user: User): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/${this.baseUrl}/register`,
      user
    );
  }
  login(user: User): Observable<{
    success: boolean;
    status: string;
    token: string;
    username: string;
  }> {
    return this.http.post<{
      success: boolean;
      status: string;
      token: string;
      username: string;
    }>(`${environment.apiUrl}/${this.baseUrl}/login`, user);
  }
  logout(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/${this.baseUrl}/logout`);
  }

  updateProfile(updateForm: {
    username: string;
    email: string;
  }): Observable<{ success: boolean; data: User }> {
    return this.http.post<{ success: boolean; data: User }>(
      `${environment.apiUrl}/${this.baseUrl}/edit-profile`,
      updateForm,
      { headers: { authentication: 'Basic ' + localStorage.getItem('token') } }
    );
  }

  public setUserInfo(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  public getUserInfo() {
    const token = this.getToken();
    if (token != null) {
      let decode: any = jwt_decode(token);
      const user: User = decode.user;
      return user;
    }
    return undefined;
  }
  public clearUserInfo() {
    localStorage.clear();
  }
}
