import { TestBed, ComponentFixture } from '@angular/core/testing';
import { WorkoutTrackingPage } from './workout-tracking.page';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Exercise } from '../../models/exercise.model';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('WorkoutTrackingPage', () => {
  let component: WorkoutTrackingPage;
  let fixture: ComponentFixture<WorkoutTrackingPage>;
  let exerciseServiceMock = {
    getExerciseByScheduleId: jest.fn(),
    updateExercise: jest.fn(),
    addExerciseWithUniqueId: jest.fn(),
    deleteExerciseFromDatabase: jest.fn()
  };
  
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutTrackingPage ],
      providers: [ 
        { provide: FormBuilder, useValue: new FormBuilder() },
        { provide: ExerciseService, useValue: exerciseServiceMock },
        { provide: Router, useValue: { getCurrentNavigation: () => ({ extras: { state: { schedule: { id: '1' }}}})}}
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkoutTrackingPage);
    component = fixture.componentInstance;
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should get exercises on init', () => {
    const exercises = [{id: '1', name: 'pushup', sets: 10, reps: 10, weight: 30}];
    exerciseServiceMock.getExerciseByScheduleId.mockReturnValue(of(exercises));
    component.ngOnInit();
    expect(component.exercisesArray).toEqual(exercises);
    expect(component.exercises.length).toBe(1);
  });
  
  it('should add an exercise', () => {
    component.addExercise();
    expect(component.exercises.length).toBe(1);
  });

  it('should delete an exercise', () => {
    component.addExercise();
    component.deleteExercise(0);
    expect(component.exercises.length).toBe(0);
  });

  it('should save an exercise', async () => {
    const exerciseData = { id: '1', name: 'pushup', scheduleId: 'wawawa', sets: 10, reps: 10, weight: 30 };
    await component.saveExercise(exerciseData, 0);
    expect(exerciseServiceMock.updateExercise).toBeCalled();
  });

  it('should save an exercise', async () => {
    const exerciseData: Exercise = { 
      id: '1', 
      scheduleId: 'wawawa', 
      name: 'pushup', 
      sets: 10, 
      reps: 10, 
      weight: 30,
      hasChanged: true 
    };
    
    await component.saveExercise(exerciseData, 0);
    
    expect(exerciseServiceMock.updateExercise).toBeCalled();
  });
});
