import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:IProduct[];

  constructor(private productDataService: ProductDataService) { }

  ngOnInit(): void {
    this.products= this.productDataService.getProductList();
  }

}
