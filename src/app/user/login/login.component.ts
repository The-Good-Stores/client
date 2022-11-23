import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }
  loginInfo = {
    username: "",
    password: "",
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginInfo);
    this.userService
      .login(this.loginInfo)
      .subscribe((result) => console.log({result}));
  }

  logout() {
    console.log();
    this.userService
      .logout()
      .subscribe((result) => console.log({result}));
  }
}
