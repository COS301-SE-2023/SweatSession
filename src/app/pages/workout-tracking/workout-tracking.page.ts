import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-workout-tracking',
  templateUrl: './workout-tracking.page.html',
  styleUrls: ['./workout-tracking.page.scss']
})
export class WorkoutTrackingPage implements OnInit {
  workoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
        weight: ''
      })
    );
  }
}
