import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from '../Models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  loggedIn: Boolean = false;
  public navbarCollapsed = true;
  constructor(private userService: UserService, private router: Router) {
    this.loggedIn = this.userService.isAuthenticated();
  }
  ngOnInit(): void {}

  logout() {
    console.log('object');
    this.userService.logout().subscribe((res) => {
      if (res.success) {
        this.userService.clearUserInfo();
        window.location.reload();
      }
    });
  }
}
