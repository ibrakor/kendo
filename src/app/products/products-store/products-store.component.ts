import {Component, OnInit} from '@angular/core';
import {Product} from "../model/Product";
import {ProductsService} from "../../service/products.service";

@Component({
  selector: 'app-products-store',
  templateUrl: './products-store.component.html',
  styleUrl: './products-store.component.css'
})
export class ProductsStoreComponent implements OnInit{

  products : Product[] = []
  constructor(private productService: ProductsService) {
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(result =>
      (this.products = result)
    )
  }

}
