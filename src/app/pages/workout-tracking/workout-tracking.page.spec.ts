import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutTrackingPage } from './workout-tracking.page';

describe('WorkoutTrackingPage', () => {
  let component: WorkoutTrackingPage;
  let fixture: ComponentFixture<WorkoutTrackingPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(WorkoutTrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
