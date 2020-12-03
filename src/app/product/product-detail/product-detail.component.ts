import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  product: Product = new Product();
  vendors : Vendor[];
  isHidden: boolean = true;

  VerifyDelete() {
    this.isHidden = false;
  }
  
  delete(): void {
    this.productsvc.remove(this.product).subscribe(
      res => {
        console.debug("product delete successful!",res);
        this.router.navigateByUrl("/product/list");  
      },
      err => {
        console.error("Product delete failed!",err);
      }
    );
  }
  
  
  constructor(
    private route: ActivatedRoute,
    private productsvc: ProductService,
    private vendorsvc: VendorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.productsvc.get(id).subscribe(
      res=> {
        this.product=res;
        console.debug("Product",res);
      },
      err => {
        console.error("Error on Product.get()",err);
      }
    );
  }
}
