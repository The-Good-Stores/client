import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}
  baseUrl = 'ads';
  postQuestion(adsId: string | undefined, question: any): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/${this.baseUrl}/add-question/${adsId}`,
      question
    );
    // return this.http.post(
    //   `http://localhost:8000/api/${this.baseUrl}/add-question/${adsId}`,
    //   question
    // )
  }
  answerQuestion(adsId: string, qid: string, answer: string): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/${this.baseUrl}/add-answer/${adsId}/${qid}`,
      {answer}
    );
    // return this.http.post(
    //   `http://localhost:8000/api/${this.baseUrl}/add-answer/${adsId}/${qid}`,
    //   answer
    // );
  }
}
