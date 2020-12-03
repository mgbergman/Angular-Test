import { Component, OnInit } from '@angular/core';
import { Request } from '../../request/request.class';
import { RequestLine } from '../requestline.class';
import { RequestLineService } from '../requestline.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/request/request.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  request: Request = new Request();
  requestline: RequestLine = new RequestLine();
  products: Product[] = [];
  buttonsav: string = "btn btn-primary";
  buttondel: string = "btn btn-danger";
  Msg: string = "Save";
  Rid: number = 0;

  constructor(
    private requestsvc: RequestService,
    private requestlinesvc: RequestLineService,
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private systemsvc: SystemService,
    private router: Router

  ) { }

  ngOnInit(): void {

    
    let id = this.route.snapshot.params.id;
    console.log(id);
    this.requestsvc.get(id).subscribe(
      
      res => {console.log(res);this.requestline.request = res;},
      err => {console.error("Failed to read", err)}
    )
    this.productsvc.list().subscribe(
      res => {console.log("Request:", res); this.products = res as Product[];
      },
      err => {
        console.error("Error Reading Request",err);}
      );
    }
   

    save(): void
    {
      console.log(this.requestline);
      this.requestlinesvc.create(this.requestline).subscribe(
        res => {
          console.log("Save");
          this.router.navigateByUrl(`/request/list`); 
        },
        err => {
          console.error("Could not add request: ", err);
        }
      );
    }
  }


  


