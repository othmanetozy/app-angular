import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {
  }
  public searchProduct(keyword: string = "", page: number = 1, size: number = 4) {
    return this.http.get(`http://localhost:8089/products?name_like=${keyword}&_page=${page}&_limit=${size}`, { observe: 'response' });
  }
//http_response

  public checkProduct(product : Product):Observable<Product>{
    return   this.http.patch<Product>(`http://localhost:8089/products/${product.id}`,
      {checked:!product.checked});
  }

  public deleteProduct(product : Product){
    return   this.http.delete<Product>(`http://localhost:8089/products/${product.id}`,);
  }

  public saveProduct(product: Product) : Observable<Product> {
    return this.http.post<Product>(`http://localhost:8089/products`,
      product);
  }

/*  public searchProduct(keyword : string , page : number, size : number) : Observable<Array<Product>>{
    return  this.http.get<Array<Product>>(`http://localhost:8089/products?name_like=${keyword} &_page=${page}&_limit=${size}`);
  }*/

  public getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8089/products/${productId}`);
  }
}

