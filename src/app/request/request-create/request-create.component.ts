import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})



export class RequestCreateComponent implements OnInit {

  users : User[] =[];

  request: Request = new Request();
  save(): void{
    this.requestsvc.create(this.request).subscribe(
      res=>{
        console.debug("Request created:",res);
        this.router.navigateByUrl("/request/list");
      },
      err => {
        console.error("ERROR creating request:",err);
      }
    )
  }


  constructor(
    private requestsvc: RequestService,
    private systemsvc: SystemService,
    private router: Router,
    private usersvc: UserService

  ) { }

  ngOnInit(): void {
    this.usersvc.list().subscribe(
      res => { console.debug(res)
      this.users = res as User[]
  }
    )}
}




