import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InMemoryProductService } from 'src/app/InMemoryAPIDemo/in-memory-product.service';

@Component({
  selector: 'app-async-pipe-demo-list',
  templateUrl: './async-pipe-demo-list.component.html',
  styleUrls: ['./async-pipe-demo-list.component.css']
})
export class AsyncPipeDemoListComponent implements OnInit {
  products$: Observable<Object>;

  constructor(private inMemoryProductService: InMemoryProductService) { }

  ngOnInit(): void {
    this.products$ = this.inMemoryProductService.getProducts()
  }

}
