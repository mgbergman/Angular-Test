import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User();

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void{
    console.log(this.user)
    this.usersvc.change(this.user).subscribe(
      res => {
        console.debug("User Change:", res);
        this.router.navigateByUrl("/user/list")
        this.user = res;
      },
      err => { console.error(err); } 
    )
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(
      res => {
        this.user = res;
        console.debug("User:", res);
      },
      err => { console.error(err); }
    )
  }

}