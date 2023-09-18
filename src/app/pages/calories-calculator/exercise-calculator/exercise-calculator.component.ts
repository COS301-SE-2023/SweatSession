import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { take, tap } from 'rxjs';
import { Exercise } from 'src/app/models/exercise.model';
import { ExerciseService, WorkoutscheduleService } from 'src/app/services';

@Component({
  selector: 'exercise-calculator',
  templateUrl: './exercise-calculator.component.html',
  styleUrls: ['./exercise-calculator.component.scss'],
})
export class ExerciseCalculatorComponent implements OnInit {

  workoutForm: FormGroup;
  exercisesArray: Exercise[] = [];
  deletedExercises: string[] = [];
  scheduleId: string;
  currUserId: string | undefined;
  plannedWorkouts: any;

  constructor(
    private exerciseService: ExerciseService,
    private formBuilder: FormBuilder,
    private workoutscheduleService: WorkoutscheduleService
  ) {
    this.workoutForm = this.formBuilder.group({
      exercises: this.formBuilder.array([])
    });
  }

  ngOnInit() {
    // this.exerciseService.getExerciseByScheduleId(this.scheduleId).pipe(take(1)).subscribe((exercises) => {
    //   this.exercisesArray = exercises.map((exercise) => ({
    //     ...exercise,
    //     id: exercise.id,
    //   }));
    //   console.log('Fetched exercises:', this.exercisesArray);
    this.populateFormWithExercises();
    // });
    this.getUserWorkouts();
  }

  deleteExercise(index: number) {
    this.exercises.removeAt(index);
  }

  addExercise() {
    const exerciseControl = this.formBuilder.group({
      name: [''],
      sets: [''],
      reps: [''],
      weight: [''],
    });
    (this.workoutForm.get('exercises') as FormArray).push(exerciseControl);
  }

  get exercises(): FormArray {
    return this.workoutForm.get('exercises') as FormArray;
  }

  populateFormWithExercises() {
    const exercisesFormArray = this.workoutForm.get('exercises') as FormArray;
    this.exercisesArray.forEach((exercise) => {
      const exerciseControl = this.formBuilder.group({
        name: [exercise.name],
        sets: [exercise.sets],
        reps: [exercise.reps],
        weight: [exercise.weight],
      });
      exercisesFormArray.push(exerciseControl);
    });
  }

  async getUserWorkouts() {
    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;
    if (this.currUserId != undefined) {
      sessionStorage.setItem('currUserId', this.currUserId);
    } else {
      this.currUserId = sessionStorage.getItem('currUserId')!;
    }
    (await this.workoutscheduleService.getSchedules({ userId: this.currUserId })).subscribe(
      (response) => {
        // alert(response)
        this.plannedWorkouts = response;
        console.log("Planned workouts");
        console.log(this.plannedWorkouts);
      }
    )
  }
}
