import { TestBed } from '@angular/core/testing';

import { SetProfileService } from './setprofile.service';

describe('ProfileService', () => {
  let service: SetProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
