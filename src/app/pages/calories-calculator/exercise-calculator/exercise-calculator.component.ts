import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { take, tap } from 'rxjs';
import { Exercise } from 'src/app/models/exercise.model';
import { ExerciseService, WorkoutscheduleService } from 'src/app/services';
import { HealthDataService } from 'src/app/services/healthDataService/healthData.service';

@Component({
  selector: 'exercise-calculator',
  templateUrl: './exercise-calculator.component.html',
  styleUrls: ['./exercise-calculator.component.scss'],
})
export class ExerciseCalculatorComponent implements OnInit {

  workoutForm: FormGroup;
  exercisesArray: Exercise[] = [];
  scheduleId: string;
  currUserId: string | undefined;
  plannedWorkouts: any;
  selectedWorkout: Exercise[];
  userWeight: number = 70;
  metValues : { [key: string]: number } = {
    "stretches": 2.3,
    "pushUps": 8,
    "sitUps": 8,
    "jumpingJacks": 7.7,
    "lunges": 4,
    "planks": 6,
    "burpees": 8,
    "crunches": 5,
    // "lunges": 4,
    // "pushUps": 8,
    // "pushUps": 8,
    // "pushUps": 8,
  }
  // exerciseOptions: string[] = ["Exercise 1", "Exercise 2", "Exercise 3", "Exercise 4"];

  constructor(
    private exerciseService: ExerciseService,
    private formBuilder: FormBuilder,
    private workoutscheduleService: WorkoutscheduleService,
    private healthDataService: HealthDataService
  ) {
    this.workoutForm = this.formBuilder.group({
      exercises: this.formBuilder.array([])
    });
  }

  async ngOnInit() {
    // this.exerciseService.getExerciseByScheduleId(this.scheduleId).pipe(take(1)).subscribe((exercises) => {
    //   this.exercisesArray = exercises.map((exercise) => ({
    //     ...exercise,
    //     id: exercise.id,
    //   }));
    //   console.log('Fetched exercises:', this.exercisesArray);
    this.populateFormWithExercises();
    // });
    this.getUserWorkouts();
    this.getSessionWorkout("QSR1W4sMCU487Rncx8gB");
    console.log(this.selectedWorkout);
    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;
    if (this.currUserId != undefined) {
      sessionStorage.setItem('currUserId', this.currUserId);
    } else {
      this.currUserId = sessionStorage.getItem('currUserId')!;
    }
    const healthdata = await this.healthDataService.getHealthData(this.currUserId);
    console.log(healthdata);
  }

  deleteExercise(index: number) {
    this.exercises.removeAt(index);
  }

  async addExercise() {
    const exerciseControl = this.formBuilder.group({
      name: [''],
      sets: [''],
      reps: [''],
      weight: [''],
      duration: ['']
    });
    (this.workoutForm.get('exercises') as FormArray).push(exerciseControl);
    // await this.calculateTotalCaloriesBurned();
    console.log(this.workoutForm.get('exercises') as FormArray);
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
        duration: [exercise.duration]
      });
      exercisesFormArray.push(exerciseControl);
    });
  }

  async getUserWorkouts() {
    (await this.workoutscheduleService.getSchedules({ userId: this.currUserId! })).subscribe(
      (response) => {
        // alert(response)
        this.plannedWorkouts = response;
        console.log("Planned workouts");
        console.log(this.plannedWorkouts);
      }
    )
  }

  async getSessionWorkout(sessionId: string){
    try {
      const response = await this.exerciseService.getExerciseByScheduleId(sessionId).toPromise();
      this.selectedWorkout = response!;
      return response;
    } catch (error) {
      console.error('Error fetching session workout:', error);
      return "Error fetching session workout:";
    }
  }

  calculateCaloriesBurnedForExercise(exerciseName: string, duration: number){
    let calories = this.userWeight*this.metValues[exerciseName]*(duration/60);
    console.log("calories");
    console.log(calories);
    console.log(this.userWeight);
    console.log(exerciseName);
    console.log(this.metValues[exerciseName]);
    console.log(duration);
    return calories;
  }

  async calculateTotalCaloriesBurned(){
    let totalCaloriesBurned = 0;
    const exercisesArray = this.workoutForm.get('exercises') as FormArray;
    const userEnteredValues: any[] = [];

    // exercisesArray.controls.forEach((control: FormGroup) => {
    //   const exercise = {
    //     name: control.get('name').value,
    //     sets: control.get('sets').value,
    //     reps: control.get('reps').value,
    //     weight: control.get('weight').value,
    //     duration: control.get('duration').value,
    //   };
    //   enteredValues.push(exercise);
    // });
    
    for (let ex of this.workoutForm.value.exercises){
      console.log("exer");
      console.log(ex);
      let caloriesBurnedForExercise = this.calculateCaloriesBurnedForExercise(ex.name, ex.duration);
      totalCaloriesBurned += caloriesBurnedForExercise;
      console.log("caloriesBurnedForExercise");
      console.log(caloriesBurnedForExercise);
    }
    console.log("total");
    console.log(totalCaloriesBurned);
  }

  // public async saveExercise(exerciseData: Exercise, index: number) {
  //   let exercise = this.exercisesArray[index];
  
  //   if (exercise) {
  //     Object.assign(exercise, exerciseData);
  //   }
  // }

  // public async saveExercises() { 
  //   console.log('Initial exercisesArray:', this.exercisesArray);
  //   console.log('Form exercises:', this.exercises.controls);
  //   const promises = this.exercises.controls.map((exerciseControl: AbstractControl, index: number) => {
  //     const exerciseData = {
  //       scheduleId: this.scheduleId,
  //       name: exerciseControl.get('name')?.value ?? "",
  //       sets: exerciseControl.get('sets')?.value ?? 0,
  //       reps: exerciseControl.get('reps')?.value ?? 0,
  //       weight: exerciseControl.get('weight')?.value ?? 0,
  //       duration: exerciseControl.get('duration')?.value ?? 0,
  //     };
  //     console.log(exerciseData)
  //     return this.saveExercise(exerciseData, index);
  //   });
  
  //   await Promise.all(promises);
  
  //   console.log('All exercises saved.');
  //   console.log(this.exercisesArray);
  // }
}
