import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsListComponent } from './ads/ads-list/ads-list.component';
import { DisplayComponent } from './ads/display/display.component';
import { EditComponent } from './ads/edit/edit.component';
import { PostComponent } from './ads/post/post.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user/login',
    component: LoginComponent,
  },
  {
    path: 'user/register',
    component: RegisterComponent,
  },
  {
    path: 'ads',
    component: AdsListComponent,
  },
  {
    path: 'ads/:id',
    component: DisplayComponent,
  },
  {
    path: 'ads/post',
    component: PostComponent,
  },
  {
    path: 'ads/edit/:id',
    component: EditComponent,
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
