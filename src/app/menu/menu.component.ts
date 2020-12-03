import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus : Menu[] = [

    new Menu("Home",""),
    new Menu("Users","/user/list"),
    new Menu("Vendor","/vendor/list"),
    new Menu("Product","/product/list"),
    new Menu("Request","/request/list"),
    new Menu("Request Review","/request/review"),
    new Menu("About PRS","/about/list")


  ] ;  
  constructor() { }

  ngOnInit(): void {
  }

}
