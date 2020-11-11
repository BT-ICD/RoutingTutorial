import { TestBed } from '@angular/core/testing';

import { InMemoryProductService } from './in-memory-product.service';

describe('InMemoryProductService', () => {
  let service: InMemoryProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
