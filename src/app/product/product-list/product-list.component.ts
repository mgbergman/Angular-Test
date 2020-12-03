import { Component, OnInit } from '@angular/core';
import { ProductService }  from '../product.service';
import { Product } from '../product.class';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  sortCriteria: string = "name";
  ascSequence: boolean = false;



  sortColumn(column: string): void {
    if(column == this.sortCriteria) {
      this.ascSequence = !this.ascSequence;
      return;
    }
    this.sortCriteria = column;
    this.ascSequence = true;
  }

  constructor(

    private productsrv: ProductService,
  ) { }

  ngOnInit(): void {
      this.productsrv.list().subscribe(
            res => { console.log(res); 
            this.products= res as Product[]
            },
            err => { console.error(err); }
    );
  

    }
  }
