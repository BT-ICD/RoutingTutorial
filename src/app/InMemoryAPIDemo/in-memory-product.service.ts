import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryProductService {
SERVER_URL:string='http://localhost:8080/api/';
  constructor(private httpClient:HttpClient) { }
  getProducts(){
      return this.httpClient.get(this.SERVER_URL+'products');
  }
  createProduct(product:{id:number,name:string, rate:number,releasedDate:Date,category:string}){
    return this.httpClient.post(`${this.SERVER_URL + 'products'}`,product);
  }
}
