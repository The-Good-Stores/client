import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Ad from 'src/app/Models/ads.model';
import User from 'src/app/Models/user.model';
import { AdsService } from 'src/app/services/ads.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id') || '';
  ad: Ad | undefined;
  user: User | undefined = {
    username: '',
  };
  constructor(
    public adsService: AdsService,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.adsService.getAd(this.id).subscribe((result) => {
      console.log({ result });
      this.ad = result.data;
      console.log({ ad1: this.ad });
    });
    this.user = this.userService.getUserInfo();
  }

  disable() {
    if (this.ad) {
      this.adsService.disableAd(this.ad.adsId).subscribe((res) => {
        if (res.success) window.location.reload();
      });
    }
  }
  activate() {
    if (this.ad) {
      this.adsService.activateAd(this.ad.adsId).subscribe((res) => {
        if (res.success) window.location.reload();
      });
    }
  }
}
