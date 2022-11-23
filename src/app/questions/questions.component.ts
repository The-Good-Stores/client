import { Component, OnInit } from '@angular/core';
import Question from 'src/app/Models/question.model';
import Ad from 'src/app/Models/ads.model';
import { AdsService } from 'src/app/services/ads.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  data: Question[] = [];
  ad?: Ad;
  constructor(private adsServices: AdsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const adsId = this.route.snapshot.paramMap.get('adsId');
   // this.adsServices.getAd(adsId).subscribe(result => 
   //     console.log(result.question))

  }

}
