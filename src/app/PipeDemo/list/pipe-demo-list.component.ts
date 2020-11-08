import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataPipeDataService } from '../product-data-pipe.service';
import { IProductPipe } from '../producttype-pipe';

@Component({
  selector: 'app-pipe-demo-list',
  templateUrl: './pipe-demo-list.component.html',
  styleUrls: ['./pipe-demo-list.component.css']
})
export class PipeDemoListComponent implements OnInit {
  productList: IProductPipe[];
  selectedProduct: IProductPipe;
  constructor(private productDataPipeDataService: ProductDataPipeDataService, private router: Router) { }

  ngOnInit(): void {
    this.productList = this.productDataPipeDataService.getProductList();
  }
  selectRow(data: IProductPipe) {
    this.selectedProduct = data;
  }
  navigateToDetail() {
    if (this.selectedProduct) {
      this.router.navigate(['/pipedemo1', this.selectedProduct.id]);
    }
    else {
      alert('Please select product');
    }
  }
}
