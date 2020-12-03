import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
import { ActivatedRoute, Router} from '@angular/router'


@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor: Vendor;
  
  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void{
    console.log(this.vendor)
    this.vendorsvc.change(this.vendor).subscribe(
      res => {
        console.debug("Vendor Change:", res);
        this.router.navigateByUrl("/vendor/list")
        this.vendor = res;
      },
      err => { console.error(err); } 
    )
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.vendorsvc.get(id).subscribe(
      res => {
        console.debug("Vendor:", res);
        this.vendor = res;
      },
      err => { console.error(err); }
    )


  }

}
