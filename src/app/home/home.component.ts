import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  ngOnInit(): void {}
}
