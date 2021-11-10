import { TestBed } from '@angular/core/testing';

import { PeticionApiService } from './peticion-api.service';

describe('PeticionApiService', () => {
  let service: PeticionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
