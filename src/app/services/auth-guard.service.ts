import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private userService: UserService, private route: Router) {}

  canActivate() {
    if (this.userService.isAuthenticated()) {
      return true;
    }
    this.route.navigate(['user', 'login']);
    return false;
  }
}
