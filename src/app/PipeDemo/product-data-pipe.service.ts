import { Injectable } from '@angular/core';
import { IProductPipe } from './producttype-pipe';

@Injectable({
  providedIn: 'root'
})
export class ProductDataPipeDataService {

  constructor() { }
  getProductList():IProductPipe[]{
    let  products: IProductPipe[] = [
      { id: 101, name: 'Dettol', rate: 30, releasedDate:new Date('10-Nov-2000'),category:'A' },
      { id: 102, name: 'Cinthol', rate: 40 , releasedDate:new Date('20-Apr-2012'),category:'B'},
      { id: 103, name: 'Lifeboy', rate: 50 , releasedDate:new Date('18-Feb-2015'),category:'C'},
      { id: 104, name: 'Dove', rate: 60, releasedDate:new Date('12-Jan-2018'),category:'A' }
    ]
   return products;
  }
}
