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
    return this.http.post(
      `https://api.imgbb.com/1/upload?expiration=600&key=${environment.filestackAPI}`,
      { image: img }
    );
  }
}
