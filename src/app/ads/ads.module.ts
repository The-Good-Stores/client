import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsListComponent } from './ads-list/ads-list.component';
import { PostComponent } from './post/post.component';
import { ManageComponent } from './manage/manage.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdsListComponent,
    PostComponent,
    ManageComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
  ]
})
export class AdsModule { }
