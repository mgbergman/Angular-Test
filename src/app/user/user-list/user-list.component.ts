import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  sortCriteria: string = "userName";
  ascSequence: boolean = false;
 

  sortColumn(column: string): void {
    if(column == this.sortCriteria) {
      this.ascSequence = !this.ascSequence;
      return;
    }
    this.sortCriteria = column;
    this.ascSequence = true;
  }

 

  constructor(
    private usersrv: UserService,
   

  ) { }

  ngOnInit(): void {
    this.usersrv.list().subscribe(
      res => { console.log(res); 
      this.users= res as User[]
      },
      err => { console.error(err); }
    );


  }

}
