import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  registerInfo = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  }

  caution: string = "";

  ngOnInit(): void {
  }

  register() {
    this.userService
      .register(this.registerInfo)
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
