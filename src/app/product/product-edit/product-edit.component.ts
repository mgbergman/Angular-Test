import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { ActivatedRoute, Router} from '@angular/router'
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  vendors : Vendor[] =[];

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private vendorsvc: VendorService
    
  ) { }

  save(): void {
    console.log(this.product)
    this.productsvc.change(this.product).subscribe(
      res => {
        console.log("Product Change:", res);
        this.router.navigateByUrl("/product/list")
        this.product = res;
      },
      err => { console.error(err); }
    )
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.vendorsvc.list().subscribe(
      res => { console.debug(res)
      this.vendors = res as Vendor[]
      }
    );
    
    

    
    this.productsvc.get(id).subscribe(
      res => {
        console.log("Product:", res);
        this.product = res;
      },
      err => { console.error(err); }
    )
  }

}
