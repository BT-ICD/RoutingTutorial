import { Injectable } from '@angular/core';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor() { }
  getProductList():IProduct[]{
    let  products: IProduct[] = [
      { id: 101, name: 'Dettol', rate: 30 },
      { id: 102, name: 'Cinthol', rate: 40 },
      { id: 103, name: 'Lifeboy', rate: 50 },
      { id: 104, name: 'Dove', rate: 60 }
    ]
    return products;
  }
}
