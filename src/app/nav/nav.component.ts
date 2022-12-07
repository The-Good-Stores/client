import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import User from '../Models/user.model';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  loggedIn: Boolean = false;
  username: String | undefined;
  public navbarCollapsed = true;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loggedIn = this.authService.isAuthenticated();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.loggedIn = this.authService.isLoggedIn;
        this.username = this.userService.getUserInfo()?.username;
      }
    });
  }
  logout() {
    this.userService.logout().subscribe((res) => {
      if (res.success) {
        this.userService.clearUserInfo();
        this.authService.isLoggedIn = false;
        window.location.reload();
      }
    });
  }
}
