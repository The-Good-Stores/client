import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImgUploadService {
  constructor(private http: HttpClient) {}

  imgUpload(img: string): Observable<any> {
    let body = new FormData();
    body.set('key', environment.filestackAPI);
    body.append('image', img.split(',')[1]);
    return this.http.post(`https://api.imgbb.com/1/upload`, body);
  }
}
