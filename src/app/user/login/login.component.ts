import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  loginInfo = {
    username: "",
    password: "",
  };

  caution: string = "";

  ngOnInit(): void {
  }

  login() {
    this.userService
      .login(this.loginInfo)
      .subscribe((result) => {
        console.log(result);
        if (result.success) {
          this.userService.setUserInfo(result.user);
          this.router.navigate([""]);
        } else {
          this.caution = result.status;
        }
      });
  }
}
