import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Ad from 'src/app/Models/ads.model';
import { AdsService } from 'src/app/services/ads.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  ad?: Ad;
  user?: string = localStorage.getItem("username") ?? undefined;
  constructor(public adsService: AdsService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (!id) return;

    this.adsService.getAd(id).subscribe(result => {
      console.log("user:", this.user);
      this.ad = result.data;
    });
  }
}
