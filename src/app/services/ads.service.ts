import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Ad from '../Models/ads.model';
import Question from '../Models/question.model';

@Injectable({
  providedIn: 'root',
})
export class AdsService {
  baseUrl = 'ads';
  constructor(private http: HttpClient) {}
  //Get ALL ads from database
  getAds(): Observable<{ status: string; data: Ad[] }> {
    return this.http.get<{ status: string; data: Ad[] }>(
      `${environment.apiUrl}/${this.baseUrl}/all`
    );
  }
  getAd(
    adsId: string
  ): Observable<{ status: string; data: Ad; question: Question[] }> {
    return this.http.get<{ status: string; data: Ad; question: Question[] }>(
      `${environment.apiUrl}/${this.baseUrl}/${adsId}`
    );
  }
  disableAd(adsId: string): Observable<any> {
    // TODO: Authentication
    return this.http.post(
      `${environment.apiUrl}/${this.baseUrl}/disable/${adsId}`,
      {},
      { headers: { authentication: 'Basic ' + localStorage.getItem('token') } }
    );
  }
  activateAd(adsId: string): Observable<any> {
    // TODO: Authentication
    return this.http.post(
      `${environment.apiUrl}/${this.baseUrl}/activate/${adsId}`,
      {},
      { headers: { authentication: 'Basic ' + localStorage.getItem('token') } }
    );
  }
  editAd(adsId: string, data: Ad): Observable<any> {
    // TODO: Authentication
    return this.http.post(
      `${environment.apiUrl}/${this.baseUrl}/update/${adsId}`,
      data,
      { headers: { authentication: 'Basic ' + localStorage.getItem('token') } }
    );
  }
  createAd(ad: Ad): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${this.baseUrl}/post`, ad, {
      headers: { authentication: 'Basic ' + localStorage.getItem('token') },
    });
  }
}
