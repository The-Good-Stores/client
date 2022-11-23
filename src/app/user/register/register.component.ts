import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }
  registerInfo = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  }

  ngOnInit(): void {
  }

  register(): void {
    console.log(this.registerInfo);
    this.userService
      .register(this.registerInfo)
      .subscribe((result) => console.log({result}));
  }

}
