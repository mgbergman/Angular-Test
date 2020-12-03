import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule}   from '@angular/forms';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { MenuComponent } from "../app/menu/menu.component";
import { UserListComponent } from '../app/user/user-list/user-list.component';
import { UserEditComponent } from '../app/user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { MenuitemComponent } from './menu/menuitem/menuitem.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { SortPipe } from './core/pipes/sort.pipe';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';

import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestReviewItemsComponent } from './request/request-review-items/request-review-items.component';
import { RequestReviewListComponent } from './request/request-review-list/request-review-list.component';
import { PasswordPipe } from './core/pipes/password.pipe';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineComponent } from './requestline/requestline.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    UserListComponent,
    UserEditComponent,
    UserCreateComponent,
    UserDetailComponent,
    MenuitemComponent,
    VendorListComponent,
    VendorEditComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent,
    SortPipe,
    UserLoginComponent,
    RequestListComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestLinesComponent,
    RequestReviewItemsComponent,
    RequestReviewListComponent,
    PasswordPipe,
    RequestlineEditComponent,
    RequestlineCreateComponent,
    RequestlineComponent,
    RequestCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
