import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../products/model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  private baseUrl = "https://fakestoreapi.com/products"

  getProducts(){
    return this.http.get<Product[]>(this.baseUrl)
  }
  getProductDetail (id :number){
    return this.http.get<Product>(this.baseUrl+"/"+id)
  }
}
