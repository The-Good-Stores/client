import { Component, OnInit } from '@angular/core';
import User from 'src/app/Models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  caution: string = '';
  constructor(private userService: UserService) {}
  user: User | undefined;
  updateInfo = {
    username: '',
    email: '',
  };
  ngOnInit(): void {
    this.user = this.userService.getUserInfo();
    this.updateInfo.email = this.user?.email || '';
    this.updateInfo.username = this.user?.username || '';
  }

  update() {
    console.log(this.updateInfo);
    this.userService.updateProfile(this.updateInfo).subscribe((res) => {
      console.log(res.data);
      if (res.success) {
        this.userService.logout().subscribe((res) => {
          if (res.success) {
            this.userService.clearUserInfo();
            window.location.reload();
          }
        });
      }
    });
  }
}
