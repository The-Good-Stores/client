import { Component, OnInit } from '@angular/core';
import Ad from '../Models/ads.model';
import User from '../Models/user.model';
import { AdsService } from '../services/ads.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  logo = "/assets/images/logo.png"

  data: Ad[] = [];
  products?: Ad;
  user?: User | undefined;
  constructor(private adsService: AdsService, userService: UserService) {}

  ngOnInit(): void {
    this.adsService.getAds().subscribe((result) => {
      result.data.forEach((products: Ad) => {
        if (products.active === true) {
          while (this.data.length < 8) {
            this.data.push(products);
          }
        }
      });
    });
  }
}
