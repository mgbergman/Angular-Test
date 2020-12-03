import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {
  user: User = new User();
  isHidden: boolean = true;

  VerifyDelete() {
    this.isHidden = false;
  }
  
  delete(): void {
    this.usersvc.remove(this.user).subscribe(
      res => {
        console.debug("user delete successful!",res);
        this.router.navigateByUrl("/user/list");  
      },
      err => {
        console.error("User delete failed!",err);
      }
    );
  }
  
  
  constructor(
    private route: ActivatedRoute,
    private usersvc: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(
      res=> {
        this.user=res;
        console.debug("User:",res);
      },
      err => {
        console.error("Error on User.get()",err);
      }
    );
  }
}

