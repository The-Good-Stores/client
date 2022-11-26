import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) {}
  registerInfo = {
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  };

  caution: string = '';

  ngOnInit(): void {}
  register() {
    this.userService.register(this.registerInfo).subscribe(
      (result) => {
        console.log(result);
        if (result.success) {
          this.userService.setUserInfo(result.token);
          this.authService.isLoggedIn = true;
          this.router.navigate(['']);
        } else {
          this.caution = result.status;
        }
      },
      (error) => {
        this.caution = error.error.message;
      }
    );
  }
}
