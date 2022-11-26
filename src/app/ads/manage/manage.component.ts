import { Component, Input, OnInit } from '@angular/core';
import Ad from 'src/app/Models/ads.model';
import User from 'src/app/Models/user.model';
import { AdsService } from 'src/app/services/ads.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit {
  data: Ad[] = [];
  show: boolean = false;
  user: User | undefined;
  constructor(
    private adService: AdsService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.adService.getAds().subscribe((res) => {
      res.data.forEach((ad: Ad) => {
        if (ad.username === this.user?.username) {
          this.data?.push(ad);
        }
      });
    });
    this.user = this.userService.getUserInfo();
    console.log(this.data.length);
    console.log(this.data.length === 0);
  }

  activate(adsId: string) {
    this.adService.activateAd(adsId).subscribe((res) => {
      if (res.success) {
        window.location.reload();
      }
    });
  }
  disable(adsid: string) {
    this.adService.disableAd(adsid).subscribe((res) => {
      if (res.success) {
        window.location.reload();
      }
    });
  }
}
