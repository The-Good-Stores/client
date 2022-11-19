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
}
