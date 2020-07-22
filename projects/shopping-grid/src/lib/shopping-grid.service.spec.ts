import { TestBed } from '@angular/core/testing';

import { ShoppingGridService } from './shopping-grid.service';

describe('ShoppingGridService', () => {
  let service: ShoppingGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
