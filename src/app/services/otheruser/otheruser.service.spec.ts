import { TestBed } from '@angular/core/testing';

import { OtheruserService } from './otheruser.service';

describe('OtheruserService', () => {
  let service: OtheruserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtheruserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
