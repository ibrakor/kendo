import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsStoreComponent} from './products/products-store/products-store.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductsComponent} from './products/products.component';


@NgModule({
  declarations: [
    ProductsStoreComponent,
    ProductDetailComponent,
    ProductsComponent
  ],
  exports: [
    ProductsStoreComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
