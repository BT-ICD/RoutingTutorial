import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductDataPipeDataService } from '../product-data-pipe.service';
import { IProductPipe } from '../producttype-pipe';

@Component({
  selector: 'app-pipe-demo-detail',
  templateUrl: './pipe-demo-detail.component.html',
  styleUrls: ['./pipe-demo-detail.component.css']
})
export class PipeDemoDetailComponent implements OnInit {
  product: IProductPipe;

  constructor(private route: ActivatedRoute, private router: Router, private productDataPipeDataService: ProductDataPipeDataService) { }

  ngOnInit(): void {
    let id: number;
    this.route.paramMap.subscribe(params => {
      id = +params.get('id');

    });

    this.fillProduct(id);

  }
  fillProduct(id: number) {
    let result: IProductPipe[];
    result = this.productDataPipeDataService.getProductList().filter(data => data.id == id);
    if (result.length == 1) {
      this.product = result[0];
    }
    else {
      this.product = null;
    }
  }
  backToList():void{
    this.router.navigate(['pipedemo1'])
  }
}
