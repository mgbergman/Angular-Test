import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor = new Vendor();
  isHidden: boolean = true;

  VerifyDelete() {
    this.isHidden = false;
  }
  
  delete(): void {
    this.vendorsvc.remove(this.vendor).subscribe(
      res => {
        console.debug("vendor delete successful!",res);
        this.router.navigateByUrl("/vendor/list");  
      },
      err => {
        console.error("Vendor delete failed!",err);
      }
    );
  }
  
  
  constructor(
    private route: ActivatedRoute,
    private vendorsvc: VendorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.vendorsvc.get(id).subscribe(
      res=> {
        this.vendor=res;
        console.debug("Vendor:",res);
      },
      err => {
        console.error("Error on Vendor.get()",err);
      }
    )
  
}
}