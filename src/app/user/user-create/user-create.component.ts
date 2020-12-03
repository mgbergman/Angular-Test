import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: User = new User();

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void{
    this.usersvc.create(this.user).subscribe(
      res=>{
        console.log("User created:",res);
        this.router.navigateByUrl("/user/list");
      },
      err => {
        console.error("ERROR creating user:",err);
      }
    )
  }



  ngOnInit(): void {
  }

}
