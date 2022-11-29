import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsListComponent } from './ads-list/ads-list.component';
import { PostComponent } from './post/post.component';
import { ManageComponent } from './manage/manage.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule } from '@angular/forms';
import { QuestionsComponent } from './questions/questions.component';


@NgModule({
  declarations: [
    AdsListComponent,
    PostComponent,
    ManageComponent,
    DisplayComponent,
    QuestionsComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
  ]
})
export class AdsModule { }
