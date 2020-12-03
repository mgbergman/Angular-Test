import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request/request.class';
import { RequestLine } from './requestline.class';
import { RequestLineService } from './requestline.service';
import { SystemService } from '../system.service';


@Component({
  selector: 'app-requestline',
  templateUrl: './requestline.component.html',
  styleUrls: ['./requestline.component.css']
})
export class RequestlineComponent implements OnInit {

  request: Request;
  requestlines: RequestLine[];
  id: number = 0;

  constructor(
    private requestsvc: RequestService,
    private requestlinessvc: RequestLineService,
    private systemsvc: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.systemsvc.checkLogin();

    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.requestsvc.get(this.id).subscribe(
      res => {
        console.log("Request:", res);
        this.request = res;
      },
      err => {
        console.error(err);
      }
    );

    this.requestlinessvc.getLines(this.id).subscribe(
      res => {
        console.debug("Request Lines:", res);
        this.requestlines = res;
      },
      err => {
        console.error(err);
      }
    );
  }


  refreshLines():void
  {
    this.id = this.route.snapshot.params.id;

    this.requestlinessvc.getLines(this.id).subscribe(
      res => {
        console.debug("Request Lines:", res);
        this.requestlines = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  refreshRequest():void
  {
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
  }

  submit():void
  {
    this.request.reasonForRejection = "";
    this.requestsvc.review(this.request).subscribe(
      res =>{

        console.debug("Submitted for review");
        this.refreshRequest();
      },
      err => {
        console.error("Failed to submit for review", err);
      }
    )
  }

  // deleteLine(id : number):void
  // {
  //   this.requestlinessvc.delete({id}).subscribe(
  //     res => {
  //       console.debug("Line Item deleted!");
  //       this.refreshLines();
  //       this.refreshRequest();
  //     },
  //     err => {
  //       console.error("Could not delete line item: ", err);
  //     }
  //   );
  // }
  }


