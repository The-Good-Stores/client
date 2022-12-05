import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Ad from 'src/app/Models/ads.model';
import Question from 'src/app/Models/question.model';
import User from 'src/app/Models/user.model';
import { QuestionService } from 'src/app/services/question.service';
import { AdsService } from '../../services/ads.service';
import { timer } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit, OnDestroy {
  @Input() user: User | undefined;
  questions: Question[] = [];
  answer: string = '';
  questionForm: string = '';
  subscription: any;
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
    imgUrl: '',
  };
  id: string | null = this.route.snapshot.paramMap.get('id');
  constructor(
    private questionService: QuestionService,
    public adsService: AdsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    if (this.id != null) {
      this.adsService.getAd(this.id).subscribe((res) => {
        this.ad = res.data;
        this.questions = res.question;
        const tim = timer(1000, 1000);
        this.subscription = tim.subscribe(() => {
          this.questions.forEach((ele, index) => {
            var now = moment(new Date()); //todays date
            var end = moment(ele.createdAt); // another date
            var duration = moment.duration(now.diff(end));
            var timeElapsed = '0 minutes'
            //weak, year, month
            if (duration.asDays() >= 1) {
              timeElapsed = duration.asDays().toFixed(0) + ' day ago';
            } else {
              if (duration.asHours() >= 1) {
                timeElapsed = duration.asHours().toFixed(0) + ' hour' + (duration.asMinutes() % 60).toFixed(0) + ' minutes ago';
              } else {
                timeElapsed = duration.asMinutes().toFixed(0) + ' minutes ago';
              }
            }
            this.questions[index].timeElapsed = timeElapsed
          })

        })
        console.log(this.questions)
      });

    }
  }
  answerQuestion(qid: string) {
    this.questionService
      .answerQuestion(this.ad?.adsId, qid, this.answer)
      .subscribe((res) => {
        if (res.success) {
          window.location.reload();
        }
      });
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
