import { TestBed } from '@angular/core/testing';

import { SecurityUtilService } from './security-util.service';

describe('SecurityUtilService', () => {
  let service: SecurityUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
