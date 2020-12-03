import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = new Product();
  vendors : Vendor[] =[];

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private vendorsvc: VendorService
  ) { }

  save(): void{
    this.productsvc.create(this.product).subscribe(
      res=>{
        console.debug("Product created:",res);
        this.router.navigateByUrl("/product/list");
      },
      err => {
        console.error("ERROR creating product:",err);
      }
    )
  }



  ngOnInit(): void {
    this.vendorsvc.list().subscribe(
      res => { console.debug(res)
      this.vendors = res as Vendor[]
    }
    );
  }

}

