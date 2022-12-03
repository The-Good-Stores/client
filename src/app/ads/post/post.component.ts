import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/services/ads.service';
import Ad from 'src/app/Models/ads.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import User from 'src/app/Models/user.model';
import { ImgUploadService } from 'src/app/services/img-upload.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  user: User | undefined = this.userService.getUserInfo();
  posting: boolean = true;
  id = this.route.snapshot.paramMap.get('id');

  imageError: string | null;
  isImageSaved: boolean;
  cardImageBase64: string;

  constructor(
    private adsService: AdsService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private imgUploadService: ImgUploadService
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
    imgUrl: '',
  };
  ngOnInit(): void {
    if (this.id != null) {
      this.posting = false;
      this.adsService.getAd(this.id).subscribe((result) => {
        this.postInfo = result.data;
        console.log(this.postInfo);
      });
    }
  }
  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const max_height = 15200;
      const max_width = 25600;
      if (fileInput.target.files[0].size > max_size) {
        this.imageError = 'Maximum size allowed is ' + max_size / 1000 + 'Mb';

        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = () => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;
          return true;
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
    return;
  }
  async post() {
    this.imgUploadService.imgUpload(this.cardImageBase64).subscribe((res) => {
      console.log(res.success);
      this.postInfo.imgUrl = res.data.url;
      if (this.posting && this.user && res.success) {
        this.postInfo.username = this.user.username;
        this.adsService
          .createAd(this.postInfo)
          .subscribe((result) => console.log({ result }));
        console.log(this.postInfo);
        this.router.navigate(['ads']);
      } else {
        this.adsService
          .editAd(this.postInfo.adsId, this.postInfo)
          .subscribe((result) => console.log({ result }));
        console.log(this.postInfo);
        this.router.navigate(['ads']);
      }
    });
  }
}
