import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Ad from '../Models/ads.model';

@Injectable({
  providedIn: 'root',
})
export class AdsService {
  baseUrl = 'ads';
  constructor(private http: HttpClient) { }
  //Get ALL ads from database
  getAds(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/${this.baseUrl}/all`);
  }
  getAd(adsId: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/${this.baseUrl}/${adsId}`);
  }
  disableAd(adsId: string): Observable<any> {
    // TODO: Authentication
    return this.http.post(`${environment.apiUrl}/${this.baseUrl}/disable/${adsId}`, {});
  }
  activateAd(adsId: string): Observable<any> {
    // TODO: Authentication
    return this.http.post(`${environment.apiUrl}/${this.baseUrl}/activate/${adsId}`, {});
  }
  editAd(adsId: string, data: Ad): Observable<any> {
    // TODO: Authentication
    return this.http.post(`${environment.apiUrl}/${this.baseUrl}/update/${adsId}`, data);
  }
  createAd(ad: Ad): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${this.baseUrl}/post`, ad)
  }

}
