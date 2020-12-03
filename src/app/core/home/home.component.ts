import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User = null

  constructor(
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
    this.user = this.systemsvc.loggedInUser;
  }

}
