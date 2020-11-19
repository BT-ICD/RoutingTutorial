import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InMemoryProductService } from '../in-memory-product.service';

//Learning Reference: https://www.techiediaries.com/angular-inmemory-web-api/
//https://medium.com/@amcdnl/mocking-with-angular-more-than-just-unit-testing-cbb7908c9fcc

@Component({
  selector: 'app-in-memory-product-list',
  templateUrl: './in-memory-product-list.component.html',
  styleUrls: ['./in-memory-product-list.component.css']
})
export class InMemoryProductListComponent implements OnInit {
  products: any[] = [];
  selectedProduct: any;
  constructor(private inMemoryProductService: InMemoryProductService, private router: Router) { }

  ngOnInit(): void {

    this.loadProducts();
  }
  private loadProducts() {
    this.inMemoryProductService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }

  selectRow(product) {
    this.selectedProduct = product;
  }
  editProduct() {
    if (this.selectedProduct)
      this.router.navigate(['/inmemory', this.selectedProduct.id]);
    else
      alert('Please select product');
  }
  deleteProduct() {
    if (this.selectedProduct) {
      console.log('Deleting id: ', this.selectedProduct.id);
      this.inMemoryProductService.deleteProduct(this.selectedProduct.id).subscribe(data => {
        console.log(data);
        this.loadProducts();
      });
      this.router.navigate(['/inmemory']);
    }
    else
      alert('Please select product');

  }
}
