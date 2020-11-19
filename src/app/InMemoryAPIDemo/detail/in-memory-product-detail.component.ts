import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InMemoryProductService } from '../in-memory-product.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-in-memory-product-detail',
  templateUrl: './in-memory-product-detail.component.html',
  styleUrls: ['./in-memory-product-detail.component.css']
})
export class InMemoryProductDetailComponent implements OnInit {
  product: any;
  constructor(private inMemoryProductService: InMemoryProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = 0;
    this.route.paramMap.subscribe(params => {
      id = +params.get('id')
    })
    this.inMemoryProductService.getProduct(id).subscribe(data => {
      this.onProductRetrieved(data);
    })

  }
  onProductRetrieved(data) {
    this.product = data;
    var datePipe = new DatePipe("en-US");
    this.product.releasedDate = datePipe.transform(this.product.releasedDate, 'yyyy-MM-dd');
    //this.CustomerVM.customer.CustomerDob = formatedyear;

    //this.product.releasedDate = (this.product.releasedDate as Date).toLocaleDateString('yyyy-MM-dd');
    console.log(this.product);
  }
  saveChanges(form: NgForm) {
    console.log(form.value);
    let product = { id: +form.value.id, name: form.value.name, rate: +form.value.rate, releasedDate: form.value.releasedDate, category: form.value.category };
    console.log(product);
    if (product.id == 0) {
      //Add new product
      this.inMemoryProductService.createProduct(product).subscribe(data => {
        console.log('result:', data);
        this.router.navigate(['/inmemory']);
      });
    }
    else {
      //edit existing product
      this.inMemoryProductService.updateProduct(product).subscribe(data => {
        console.log('result:', data);
        this.router.navigate(['/inmemory']);

      });
    }

  }
}
