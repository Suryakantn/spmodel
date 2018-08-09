import { TestBed, inject } from '@angular/core/testing';

import { SupplierproductService } from './supplierproduct.service';

describe('SupplierproductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupplierproductService]
    });
  });

  it('should be created', inject([SupplierproductService], (service: SupplierproductService) => {
    expect(service).toBeTruthy();
  }));
});
