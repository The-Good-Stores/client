import { Component, OnInit } from '@angular/core';
import Ad from 'src/app/Models/ads.model';
import { AdsService } from 'src/app/services/ads.service';
  
  @Component({
    selector: 'app-ads-list',
    templateUrl: './ads-list.component.html',
    styleUrls: ['./ads-list.component.css']
  })
  export class AdsListComponent implements OnInit {
    data: Ad[] = [];
    constructor(private adsServices: AdsService) { }
    ngOnInit(): void {
      this.adsServices.getAds().subscribe(result => {
        const now = new Date();
        this.data = result.data.filter((ad: Ad) => {
          const begin = new Date(ad.begin);
          const end = new Date(ad.end);
          return ad.active && begin < now // && now < end;
        })
      });
    }
  }
  