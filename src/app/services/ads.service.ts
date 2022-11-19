import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdsService {
  baseUrl = '/ads';
  constructor(private http: HttpClient) {}
  //Get ALL ads from database
  getAds(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/${this.baseUrl}/all`);
  }
  getAd(adsId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${adsId}`);
  }
}
