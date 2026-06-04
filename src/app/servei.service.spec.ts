import { TestBed } from '@angular/core/testing';

import { ServeiService } from './servei.service';

describe('ServeiService', () => {
  let service: ServeiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
