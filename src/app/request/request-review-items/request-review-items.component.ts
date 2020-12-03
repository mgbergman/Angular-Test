import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/request/request.class';
import { RequestLine } from 'src/app/requestline/requestline.class';
import { RequestLineService } from 'src/app/requestline/requestline.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/request/request.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-request-review-items',
  templateUrl: './request-review-items.component.html',
  styleUrls: ['./request-review-items.component.css']
})
export class RequestReviewItemsComponent implements OnInit {
  request: Request = new Request();
  lines: RequestLine[] = [];
  constructor(
    private requestsvc: RequestService,
    private linessvc: RequestLineService,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params.id;

    this.requestsvc.get(id).subscribe(
      res => {
        console.debug("Request:", res);
        this.request = res;
      },
      err => {
        console.error(err);
      }
    );

    this.linessvc.getLines(id).subscribe(
      res => {
        console.debug("Request Lines:", res);
        this.lines = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  rejectRequest():void
  {
    if(this.request.reasonForRejection != "")
      this.requestsvc.reject(this.request).subscribe(
        res =>{
          console.debug("Request Rejected");
          this.router.navigateByUrl("/request/list");
        },
        err => {
          console.error("Failed to reject", err);
        }
      )
    
  }

  approveRequest():void
  {
    this.requestsvc.approve(this.request).subscribe(
      res =>{
        console.debug("Request Approved");
        this.router.navigateByUrl("/request/list");
      },
      err => {
        console.error("Failed to approve", err);
      }
    )
  }

}
