import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/services/ads.service';
import Ad from 'src/app/Models/ads.model';
import User from 'src/app/Models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  ad?: Ad;
  user?: string = localStorage.getItem("username") ?? undefined;

  constructor(private adsService: AdsService, private route: ActivatedRoute) { }
  postInfo = {
    userName: "",
    title: "", 
    body: "", 
    price: "", 
    end: "", 
    deliveryMethod: ""
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if(id === null){

    }else{

    }
  }

  post(): void{
    
  }

}
