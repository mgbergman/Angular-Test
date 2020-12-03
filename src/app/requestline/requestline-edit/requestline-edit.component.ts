import { Component, OnInit } from '@angular/core';
import { Request } from '../../request/request.class';

import { RequestLineService } from '../requestline.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/request/request.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { SystemService } from 'src/app/system.service';
import { RequestLine} from '../requestline.class';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  requestline: RequestLine;

  constructor(
    private requestsvc: RequestService,
    private requestlinesvc: RequestLineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log(this.requestline);
    this.requestlinesvc.edit(this.requestline).subscribe(
      res => {
        console.log("Request Change:", res);
        this.router.navigateByUrl("/request/lines/")
        this.requestline = res;
      },
      err => { console.error(err); }
    )
  }
  delete(): void {
    this.requestlinesvc.delete(this.requestline).subscribe(
      res => {
        console.debug("product delete successful!",res);
        this.router.navigateByUrl("/request/lines/{id}");  
      },
      err => {
        console.error("Product delete failed!",err);
      }
    );
  }
  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.requestlinesvc.get(id).subscribe(
      res => {
        console.log("Requestline:", res);
        this.requestline = res;
        console.log(this.requestline);
      },
      err => { console.error(err); }
    )
  }

}