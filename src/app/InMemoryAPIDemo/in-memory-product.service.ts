import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryProductService {
  SERVER_URL: string = 'http://localhost:8080/api/';
  constructor(private httpClient: HttpClient) { }
  getProducts() {
    return this.httpClient.get(this.SERVER_URL + 'products');
  }
  createProduct(product: { id: number, name: string, rate: number, releasedDate: Date, category: string }) {
    return this.httpClient.post(`${this.SERVER_URL + 'products'}`, product);
  }
  deleteProduct(id) {
    return this.httpClient.delete(`${this.SERVER_URL + 'products'}/${id}`);
  }
  updateProduct(product: { id: number, name: string, rate: number, releasedDate: Date, category: string }) {
    return this.httpClient.put(`${this.SERVER_URL + 'products'}/${product.id}`, product);
  }
  getProduct(id): Observable<any> {
    if (id == 0) {
      let curDate = new Date();
      let product = { id: 0, name: '', rate: 0, releasedDate: curDate, category: '' };
      return of(product);
    }
    else {
      return this.httpClient.get(`${this.SERVER_URL + 'products'}/${id}`);
    }
  }
}
