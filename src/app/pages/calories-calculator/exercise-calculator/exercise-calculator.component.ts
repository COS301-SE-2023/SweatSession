import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { take } from 'rxjs';
import { Exercise } from 'src/app/models/exercise.model';
import { ExerciseService } from 'src/app/services';

@Component({
  selector: 'exercise-calculator',
  templateUrl: './exercise-calculator.component.html',
  styleUrls: ['./exercise-calculator.component.scss'],
})
export class ExerciseCalculatorComponent  implements OnInit {

  workoutForm: FormGroup;
  exercisesArray: Exercise[] = [];
  deletedExercises: string[] = [];
  scheduleId: string;

  constructor(
    private exerciseService: ExerciseService,
    private formBuilder: FormBuilder
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
  }

  deleteExercise(i: number){
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

  addExercise(){
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
}
