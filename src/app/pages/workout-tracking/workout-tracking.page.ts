import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

import { ExerciseService } from '../../services/exercise/exercise.service';
import { Exercise } from '../../models/exercise.model';
import { NavigationService } from 'src/app/services';


@Component({
  selector: 'app-workout-tracking',
  templateUrl: './workout-tracking.page.html',
  styleUrls: ['./workout-tracking.page.scss']
})
export class WorkoutTrackingPage implements OnInit {
  workoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private exerciseService: ExerciseService,
  ) {
    this.workoutForm = this.formBuilder.group({
      exercises: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {}

  get exercises(): FormArray {
    return this.workoutForm.get('exercises') as FormArray;
  }

  addExercise() {
    this.exercises.push(
      this.formBuilder.group({
        name: '',
        sets: '',
        reps: '',
        weight: ''
      })
    );
  }
  deleteExercise(index: number) {
    this.exercises.removeAt(index);
  }

  saveExercises(scheduleId: string) {
    this.exercises.controls.forEach((exerciseControl: AbstractControl, index: number) => {
      const exercise: Exercise = {
        scheduleId: scheduleId,
        name: exerciseControl.get('name')?.value ?? "",
        sets: exerciseControl.get('sets')?.value ?? 0,
        reps: exerciseControl.get('reps')?.value ?? 0,
        weight: exerciseControl.get('weight')?.value ?? 0,
      };
  
      this.exerciseService.addExercise(exercise).then(() => {
        console.log(`Exercise ${index + 1} added successfully.`);
      });
    });
  }
  
}
