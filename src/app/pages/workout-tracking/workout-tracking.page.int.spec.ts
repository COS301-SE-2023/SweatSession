import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { FormArray } from '@angular/forms';
import {
  Router,
  ActivatedRoute,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { of } from 'rxjs';

import { WorkoutTrackingPage } from '../workout-tracking/workout-tracking.page';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { Exercise } from '../../models/exercise.model';

class NavControllerMock {
  navigateForward(): Promise<any> {
    return new Promise((resolve, reject) => resolve('Mocked navigation confirmation!'));
  }
}


describe('WorkoutTrackingPage', () => {
  let component: WorkoutTrackingPage;
  let fixture: ComponentFixture<WorkoutTrackingPage>;
  let exerciseService: ExerciseService;
  let router: Router;
  let navCtrl: NavController;

  const exerciseServiceStub = {
    getExerciseByScheduleId: jest.fn(),
    updateExercise: jest.fn(),
    addExerciseWithUniqueId: jest.fn(),
    deleteExerciseFromDatabase: jest.fn(),
  };

  const routerStub = {
    getCurrentNavigation: () => ({
      extras: {
        state: { 
          schedule: { 
            id: 'randomId'
          }
        }
      }
    }),
  };

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutTrackingPage],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: ExerciseService, useValue: exerciseServiceStub },
        { provide: Router, useValue: routerStub },
        { provide: NavController, useClass: NavControllerMock},
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutTrackingPage);
    component = fixture.componentInstance;
    exerciseService = TestBed.inject(ExerciseService);
    router = TestBed.inject(Router);
    navCtrl = TestBed.inject(NavController);
  }));

  afterEach(() => {
    jest.clearAllMocks();
  }); 


  it('should create the page', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form and fetch exercises on ngOnInit', () => {
    const exerciseArray: Array<{ id: string; scheduleId: string; name: string; sets: number; reps: number; weight: number; hasChanged?: boolean; }> = [
      { id: '1', scheduleId: 'randomId', name: 'Squat', sets: 3, reps: 10, weight: 70, hasChanged: false },
      { id: '2', scheduleId: 'randomId', name: 'Bench Press', sets: 4, reps: 8, weight: 90, hasChanged: true },
    ];
  
    jest
      .spyOn(exerciseService, 'getExerciseByScheduleId')
      .mockImplementation((scheduleId: string) => of(exerciseArray));
  
    component.ngOnInit();
  
    expect(exerciseService.getExerciseByScheduleId).toHaveBeenCalledWith('randomId');
    expect(component.exercisesArray as any).toEqual(exerciseArray);
  
    const exercisesControl = component.workoutForm.get('exercises');
    if (exercisesControl && exercisesControl instanceof FormArray) {
      expect(exercisesControl.controls.length).toBe(2);
    } else {
      console.error('Form control exercises is not an instance of FormArray');
    }
  });
  
  
  

  // Add more tests for addExercise, deleteExercise, saveExercise and saveExercises

  // it('should add a new exercise group to the form', () => {
  //   component.addExercise();

  //   const exercisesControl = component.workoutForm.get('exercises');
  //   if (exercisesControl && exercisesControl instanceof FormArray) {
  //     expect(exercisesControl.controls.length).toBe(1);
  //   } else {
  //     console.error('Form control exercises is not an instance of FormArray');
  //   }
  // });

  // it('should delete an exercise from the form', () => {

  //   const dummyExercise = {id: 'some-id', scheduleId: 'wasdas', name: '', sets: 0, reps: 0, weight: 0};
  //   component.exercisesArray.push(dummyExercise);
  //   component.addExercise();
  //   component.deleteExercise(0);

  //   const exercisesControl = component.workoutForm.get('exercises');
  //   if (exercisesControl && exercisesControl instanceof FormArray) {
  //     expect(exercisesControl.controls.length).toBe(0);
  //   } else {
  //     console.error('Form control exercises is not an instance of FormArray');
  //   }
  //   expect(component.exercisesArray.length).toBe(0);
  // });

  // it('should be able to save an exercise', async () => {
  //   const exerciseData: Exercise = {
  //     name: 'Test Exercise',
  //     scheduleId: 'wasdsa',
  //     sets: 3,
  //     reps: 10,
  //     weight: 70,
  //   };

  //   jest.spyOn(exerciseService, 'addExerciseWithUniqueId')
  //     .mockImplementation(async (exercise: Exercise) => Promise.resolve(exercise));

  //   await component.saveExercise(exerciseData, 0);

  //   expect(exerciseService.addExerciseWithUniqueId).toHaveBeenCalledWith(exerciseData);
  // });

  // it('should be able to save all exercises', async () => {
  //   const exerciseData: Exercise = {
  //     name: 'Test Exercise',
  //     scheduleId: 'wasdsa',
  //     sets: 3,
  //     reps: 10,
  //     weight: 70,
  //   };

  //   jest.spyOn(exerciseService, 'addExerciseWithUniqueId')
  //     .mockImplementation(async (exercise: Exercise) => Promise.resolve(exercise));

  //   component.addExercise();
  //   component.addExercise();

  //   await component.saveExercises();

  //   expect(exerciseService.addExerciseWithUniqueId).toHaveBeenCalledTimes(2);
  // });

  it('should add and delete an exercise correctly', async () => {
    const dummyExercise = {id: 'some-id', scheduleId: 'wawawa', name: '', sets: 0, reps: 0, weight: 0};
    jest.spyOn(component['exerciseService'], 'addExerciseWithUniqueId').mockResolvedValue(dummyExercise);
  
    component.addExercise();
  
    await component.saveExercise(dummyExercise, 0);
  
    let exercisesControl = component.workoutForm.get('exercises');
    if (exercisesControl && exercisesControl instanceof FormArray) {
      expect(exercisesControl.controls.length).toBe(1);
      expect(component.exercisesArray.length).toBe(1);
    } else {
      console.error('Form control exercises is not an instance of FormArray');
    }
  
    component.deleteExercise(0);
  
    exercisesControl = component.workoutForm.get('exercises');
    if (exercisesControl && exercisesControl instanceof FormArray) {
      expect(exercisesControl.controls.length).toBe(0);
    } else {
      console.error('Form control exercises is not an instance of FormArray');
    }
  });
  

  
});

