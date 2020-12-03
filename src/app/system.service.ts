import { NgIf } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user/user.class';


@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: User = null;
  constructor(
    private router: Router) { }

  isAdmin(): boolean {
    return (this.loggedInUser == null) ? false: this.loggedInUser.isAdmin;
  }

  checkLogin(): void {
    if (this.loggedInUser == null) {
      this.router.navigateByUrl('/request/create')
    }
  }

}
