import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from '../user.class';
import { UserService} from "../user.service";


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User = null;
  message: string = ''

  userName = '';
  password = '';


  login(): void {
    
    this.usersvc.login(this.userName, this.password ).subscribe(
      res => {
         this.user = res as User;
         this.systemsvc.loggedInUser = this.user;
         console.debug("User:", res);
         this.router.navigateByUrl("/request/list");
      },
      err => {
        this.message = "User Name/Password not found";       
        console.error("Invalid", err);
        this.systemsvc.loggedInUser = null;
        }
  );
  }

  constructor(
    private usersvc: UserService,
    private router: Router,
    private systemsvc: SystemService,

  ) { }

  ngOnInit(): void {
    this.userName = 'mgbergman';
    this.password = 'bryan1123';
    this.systemsvc.loggedInUser = null;
  }

}
