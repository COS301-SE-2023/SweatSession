import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

import { ExerciseService } from '../../services/exercise/exercise.service';
import { Exercise } from '../../models/exercise.model';
import { NavigationService } from 'src/app/services';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';





@Component({
  selector: 'app-workout-tracking',
  templateUrl: './workout-tracking.page.html',
  styleUrls: ['./workout-tracking.page.scss']
})
export class WorkoutTrackingPage implements OnInit {
  scheduleId: string;
  workoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private exerciseService: ExerciseService,
    private navCtrl: NavController,
    private router: Router
  ) {
    this.workoutForm = this.formBuilder.group({
      exercises: this.formBuilder.array([])
    });
  
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state;
  
    if (state?.['schedule']) {
      this.scheduleId = state['schedule'].id;
    } else {
      console.error('No schedule passed to workout-tracking page');
    }
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

  saveExercises() {
    this.exercises.controls.forEach((exerciseControl: AbstractControl, index: number) => {
      const exercise: Exercise = {
        scheduleId: this.scheduleId,
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
