import { TestBed } from '@angular/core/testing';

import { NoticehomeService } from './noticehome.service';

describe('NoticehomeService', () => {
  let service: NoticehomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticehomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
