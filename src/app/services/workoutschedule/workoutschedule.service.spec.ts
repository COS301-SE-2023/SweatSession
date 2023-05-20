import { TestBed } from '@angular/core/testing';

import { WorkoutscheduleService } from './workoutschedule.service';

describe('WorkoutscheduleService', () => {
  let service: WorkoutscheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutscheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
