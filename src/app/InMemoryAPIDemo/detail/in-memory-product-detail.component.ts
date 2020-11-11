import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { InMemoryProductService } from '../in-memory-product.service';

@Component({
  selector: 'app-in-memory-product-detail',
  templateUrl: './in-memory-product-detail.component.html',
  styleUrls: ['./in-memory-product-detail.component.css']
})
export class InMemoryProductDetailComponent implements OnInit {

  constructor(private inMemoryProductService:InMemoryProductService, private router:Router) { }

  ngOnInit(): void {
  }
  saveChanges(form:NgForm){
    console.log(form.value);
    let product ={id:form.value.id, name:form.value.name, rate:form.value.rate, releasedDate:form.value.releasedDate, category:form.value.category};
    console.log(product);
    this.inMemoryProductService.createProduct(product).subscribe(data=>{
      console.log('result:' ,data);
      this.router.navigate(['/inmemory']);
    })
  }
}
