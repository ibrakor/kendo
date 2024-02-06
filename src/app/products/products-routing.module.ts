import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailComponent} from "./products/product-detail/product-detail.component";
import {ProductsStoreComponent} from "./products/products-store/products-store.component";

const routes: Routes = [
  {
    path: "",
    component: ProductsStoreComponent
  },
  {
    path: ":id",
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
