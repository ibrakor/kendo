import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/Product";
import {ProductsService} from "../../../service/products.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  product: Product

  constructor(private productService: ProductsService, private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.getProductDetail()
  }

  getProductDetail() {
    const id = +this.route.snapshot.paramMap.get('id')!!
    this.productService.getProductDetail(id).subscribe(result =>
      (this.product = result))
  }

}
