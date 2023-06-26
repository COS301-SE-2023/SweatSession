import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { WorkoutSchedulingPage } from './workout-scheduling.page';

describe('WorkoutSchedulingPage', () => {
  let component: WorkoutSchedulingPage;
  let fixture: ComponentFixture<WorkoutSchedulingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutSchedulingPage],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutSchedulingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});