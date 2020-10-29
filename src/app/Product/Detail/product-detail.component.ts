import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../iproduct';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
productList:IProduct[];
product:IProduct;

  constructor(private productDataService: ProductDataService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  let id= this.route.snapshot.paramMap.get('id');
    console.log(`Id is: ${id}`);    
   const result = this.productDataService.getProductList().filter(data=>data.id==+id);
   if(result.length==1)
    this.product=result[0];
  }
  backToList(){
    this.router.navigate(['/products']);
  }

}
