import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) {}
  loginInfo = {
    username: '',
    password: '',
  };

  caution: string = '';

  ngOnInit(): void {}

  login() {
    this.userService.login(this.loginInfo).subscribe((result) => {
      console.log(result);
      if (result.success) {
        this.userService.setUserInfo(result.token);
        this.authService.isLoggedIn = true;
        this.router.navigateByUrl('/');
      } else {
        console.log(result.status);
        this.caution = result.status;
      }
    });
  }
}
