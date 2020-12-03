import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request = new Request();
 
  
  delete(): void {
    this.requestsvc.remove(this.request).subscribe(
      res => {
        console.debug("request delete successful!",res);
        this.router.navigateByUrl("/request/list");  
      },
      err => {
        console.error("Request delete failed!",err);
      }
    );
  }
  
  
  constructor(
    private route: ActivatedRoute,
    private requestsvc: RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id).subscribe(
      res=> {
        this.request=res;
        console.debug("Request:",res);
      },
      err => {
        console.error("Error on Request.get()",err);
      }
    )
  }
}