import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsStoreComponent } from './products-store/products-store.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    ProductsStoreComponent,
    ProductDetailComponent
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
