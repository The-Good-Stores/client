import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  ad: Ad | undefined;
  @Input() user: User = {
    username: '',
  };
  constructor(
    public adsService: AdsService,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.adsService.getAd(id).subscribe((result) => {
      console.log({ result });
      this.ad = result.data;
      console.log({ ad1: this.ad });
    });
  }
}
