import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsListComponent } from './ads-list/ads-list.component';
import { EditComponent } from './edit/edit.component';
import { PostComponent } from './post/post.component';
import { ManageComponent } from './manage/manage.component';
import { DisplayComponent } from './display/display.component';



@NgModule({
  declarations: [
    AdsListComponent,
    EditComponent,
    PostComponent,
    ManageComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdsModule { }
