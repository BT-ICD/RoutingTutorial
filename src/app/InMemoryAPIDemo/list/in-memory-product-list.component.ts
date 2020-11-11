import { Component, OnInit } from '@angular/core';
import { InMemoryProductService } from '../in-memory-product.service';

@Component({
  selector: 'app-in-memory-product-list',
  templateUrl: './in-memory-product-list.component.html',
  styleUrls: ['./in-memory-product-list.component.css']
})
export class InMemoryProductListComponent implements OnInit {
products:any[]=[];
selectedProduct:any;
  constructor(private inMemoryProductService: InMemoryProductService) { }

  ngOnInit(): void {
    this.inMemoryProductService.getProducts().subscribe((data:any[])=>{
      this.products=data;
      // console.log(this.products);
    });
  }
  selectRow(product){
this.selectedProduct=product;
  }

}
