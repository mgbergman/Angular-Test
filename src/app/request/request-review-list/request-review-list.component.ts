import { Component, OnInit } from '@angular/core';import { Request } from '../request.class';
import { RequestService} from '../request.service';
import { ActivatedRoute, Router} from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  requests: Request[] = [];
  users: User = new User();
  
  constructor(
    private requestsrv: RequestService,
    private systemsrv: SystemService
  ) { }

  ngOnInit(): void {
    this.users = this.systemsrv.loggedInUser;


    this.requestsrv.requests(this.users.id).subscribe(
      
      res => { console.log(res); 
      this.requests= res as Request[]
      },
      err => { console.error(err); }
    );

}
}