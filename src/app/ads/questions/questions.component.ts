import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Ad from 'src/app/Models/ads.model';
import Question from 'src/app/Models/question.model';
import User from 'src/app/Models/user.model';
import { QuestionService } from 'src/app/services/question.service';
import { AdsService } from '../../services/ads.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  @Input() user: User | undefined;
  questions: Question[] = [];
  answer: string = '';
  questionForm: string = '';
  @Input() ad: Ad = {
    username: '',
    adsId: '',
    title: '',
    body: '',
    price: NaN,
    begin: new Date(),
    end: new Date(),
    deliveryMethod: '',
    active: true,
  };
  id: string | null = this.route.snapshot.paramMap.get('id');
  constructor(
    private questionService: QuestionService,
    public adsService: AdsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (this.id != null) {
      this.adsService.getAd(this.id).subscribe((res) => {
        this.ad = res.data;
        this.questions = res.question;
      });
    }
  }
  answerQuestion(qid: string) {
    this.questionService
      .answerQuestion(this.ad?.adsId, qid, this.answer)
      .subscribe((res) => console.log(res));
  }
  submitQuestion() {
    this.questionService
      .postQuestion(this.ad?.adsId, { question: this.questionForm })
      .subscribe((res) => {
        if (res.success) {
          window.location.reload();
        }
      });
  }
}
