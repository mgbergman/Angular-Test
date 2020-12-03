import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService} from '../request.service';
import { ActivatedRoute, Router} from '@angular/router'
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = [];

  constructor(
    private systemsvc: SystemService,
    private requestsrv: RequestService
  ) { }

  ngOnInit(): void {
    this.systemsvc.checkLogin();
    this.requestsrv.list().subscribe(
      res => { console.log(res); 
      this.requests= res as Request[]
      },
      err => { console.error(err); }
    );

}
}
