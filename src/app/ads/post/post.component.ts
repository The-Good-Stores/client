import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/services/ads.service';
import Ad from 'src/app/Models/ads.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import User from 'src/app/Models/user.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  // ad?: Ad;
  user: User | undefined;

  posting: boolean = true;
  id = this.route.snapshot.paramMap.get('id');

  constructor(
    private adsService: AdsService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}
  postInfo: Ad = {
    adsId: '',
    username: '',
    title: '',
    body: '',
    price: 0,
    end: new Date(),
    deliveryMethod: '',
    active: true,
    begin: new Date(),
  };

  ngOnInit(): void {
    this.user = this.userService.getUserInfo();
    console.log("this.user: ", this.user);
    if (this.id != null) {
      this.posting = false;
      this.adsService.getAd(this.id).subscribe((result) => {
        this.postInfo = result.data;
        console.log(this.postInfo);
      });
    }
  }

  post(): void {
    console.log('hello');
    console.log(this.posting);
    if (this.posting) {
      this.adsService
        .createAd(this.postInfo)
        .subscribe((result) => console.log({ result }));
      console.log(this.postInfo);
      this.router.navigate(['ads', this.postInfo.adsId]);
    } else {
      this.adsService
        .editAd(this.postInfo.adsId, this.postInfo)
        .subscribe((result) => console.log({ result }));
      console.log(this.postInfo);
      this.router.navigate(['ads', this.postInfo.adsId]);
    }
  }
}
