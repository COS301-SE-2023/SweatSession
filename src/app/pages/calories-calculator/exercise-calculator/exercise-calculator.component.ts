import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import {FormBuilder, FormGroup, FormArray, AbstractControl, Validators} from '@angular/forms';
import { take, tap } from 'rxjs';
import { Exercise } from 'src/app/models/exercise.model';
import { ExerciseService, WorkoutscheduleService } from 'src/app/services';
import { HealthDataService } from 'src/app/services/healthDataService/healthData.service';
import { CalorieSummary } from "../calorie-summary";

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
  selectedWorkoutId: string;
  userWeight: number;
  message: string = " ";//Enter your workout\nand\npress the Calculate Calories Burned button.
  metValues: { [key: string]: number } = {
    "Stretches": 2.3,
    "Push-Ups": 8,
    "Sit-Ups": 8,
    "Jumping Jacks": 7.7,
    "Lunges": 4,
    "Planks": 6,
    "Burpees": 8,
    "Crunches": 5,
    "Squats": 3.5,
    "Deadlifts": 6,
    "Bench Presses": 6,
    "Pull-Ups": 3.8,
    "Dumbbell Rows": 6,
    "Leg Presses": 6,
    "Leg Curls": 4,
    "Bicep Curls": 4,
    "Tricep Curls": 4,
    "Barbell Rows": 6,
    "Seated Cable Rows": 5,
    "Barbell Curls": 4,
    "Calf Raises": 4,
    // "Cycling": 6,
    // "TreadMill": 8,
    // "pushUps": 8,
  }
  selectedExercises: any = {};
  // formValid = false;
  Incount: 0;
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
    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;
    if (this.currUserId != undefined)
    {
      sessionStorage.setItem('currUserId', this.currUserId);
    }
    else
    {
      this.currUserId = sessionStorage.getItem('currUserId')!;
    }
    // this.exerciseService.getExerciseByScheduleId(this.scheduleId).pipe(take(1)).subscribe((exercises) => {
    //   this.exercisesArray = exercises.map((exercise) => ({
    //     ...exercise,
    //     id: exercise.id,
    //   }));
    //   console.log('Fetched exercises:', this.exercisesArray);
    // this.populateFormWithExercises();
    // });
    this.getUserWorkouts();
    // this.getSessionWorkout("QSR1W4sMCU487Rncx8gB");
    console.log(this.selectedWorkout);
    const healthdata = await this.healthDataService.getHealthData(this.currUserId);
    this.userWeight = healthdata[0].weight;
    console.log(this.userWeight);
  }

  deleteExercise(index: number) {
    this.exercises.removeAt(index);
    this.updateSelectedExerciseValues();
  }

  async addExercise() {
    console.log(this.exercisesArray)
    const exerciseControl = this.formBuilder.group({
      name: ['',[Validators.required]],
      sets: ['',[]],
      reps: ['',[]],
      weight: ['', []],
      // sets: ['',[Validators.required, Validators.min(2)]],
      // reps: ['',[Validators.required, Validators.min(2)]],
      // weight: ['', [Validators.required, Validators.min(2)]],
      duration: ['', [Validators.required, Validators.min(1)]],
    });
    (this.workoutForm.get('exercises') as FormArray).push(exerciseControl);
    // await this.calculateTotalCaloriesBurned();
    console.log(this.workoutForm.get('exercises') as FormArray);
  }


  IsItvalid()
  {
    const Outcount : number = this.workoutForm.get('exercises')?.value.length;
    this.Incount = 0;

    this.workoutForm.get('exercises')?.value.forEach((element: any) =>
    {
      if
      (
          element.name != '' &&
          element.sets != '' &&
          element.reps != '' &&
          element.weight != '' &&
          element.duration != ''
      )
      {
        this.Incount++;
      }

    });

    if (this.Incount === Outcount)
    {
      return true;
    }
    else
    {
      return false;
    }

  }
  get exercises(): FormArray {
    return this.workoutForm.get('exercises') as FormArray;
  }

  populateFormWithExercises() {
    const exercisesFormArray = this.workoutForm.get('exercises') as FormArray;
    let i = 0;
    this.exercisesArray.forEach((exercise) => {
      const exerciseControl = this.formBuilder.group({
        name: [exercise.name],
        sets: [exercise.sets],
        reps: [exercise.reps],
        weight: [exercise.weight],
        duration: [exercise.duration]
      });
      exercisesFormArray.push(exerciseControl);
      this.selectedExercises[i] = exercise.name;
      i++;
    });
  }

  updateSelectedExerciseValues() {
    this.selectedExercises = {};
    // console.log(this.selectedExercises)
    // const exercisesFormArray = this.workoutForm.get('exercises') as FormArray;
    // let i = 0;
    // this.exercisesArray.forEach((exercise) => {
    //   this.selectedExercises[i] = exercise.name;
    //   console.log(exercise.name)
    //   i++;
    // });
  }

  async getUserWorkouts() {
    (await this.workoutscheduleService.getSchedules({ userId: this.currUserId! })).subscribe(
      (response) => {
        // alert(response)
        this.plannedWorkouts = response.schedules;
        console.log("Planned workouts");
        console.log(this.plannedWorkouts);
      }
    )
  }

  async getSessionWorkout(sessionId: string) {
    // try {
    //   const response = await this.exerciseService.getExerciseByScheduleId(sessionId).toPromise();
    //   this.selectedWorkout = response!;
    //   return response;
    // } catch (error) {
    //   console.error('Error fetching session workout:', error);
    //   return "Error fetching session workout:";
    // }
    this.exerciseService.getExerciseByScheduleId(sessionId).pipe(take(1)).subscribe((exercises) => {
      this.exercisesArray = exercises.map((exercise) => ({
        ...exercise,
        id: exercise.id,
      }));
      console.log('Fetched exercises:', this.exercisesArray);
      this.populateFormWithExercises();
    });
  }

  calculateCaloriesBurnedForExercise(exerciseName: string, duration: number) {
    let calories = this.userWeight * this.metValues[exerciseName] * (duration / 60);
    console.log("calories");
    console.log(calories);
    console.log(this.userWeight);
    console.log(exerciseName);
    console.log(this.metValues[exerciseName]);
    console.log(duration);
    return calories;
  }

  async calculateTotalCaloriesBurned() {
    this.message = "";
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

    for (let ex of this.workoutForm.value.exercises) {
      console.log("exer");
      console.log(ex);
      let caloriesBurnedForExercise = this.calculateCaloriesBurnedForExercise(ex.name, ex.duration);
      totalCaloriesBurned += caloriesBurnedForExercise;
      console.log("caloriesBurnedForExercise");
      console.log(caloriesBurnedForExercise);
      this.message += `${ex.name}: ${caloriesBurnedForExercise.toFixed(2)} calories\n`;
    }
    console.log("total");
    console.log(totalCaloriesBurned);
    this.message += `Total Calories Burned: ${totalCaloriesBurned.toFixed(2)} calories`;
    CalorieSummary.workoutCalories = parseFloat(totalCaloriesBurned.toFixed(2));
  }

  exerciseSelected(event: Event, exerciseNo: number) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedExercises[exerciseNo] = selectedValue;
  }

  async workoutSelected(event: Event) {
    const noOfExercises = (this.workoutForm.get('exercises') as FormArray).length;
    for (let e = 0;e<noOfExercises;e++){
      this.deleteExercise(0);
    }
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedWorkoutId = selectedValue;
    console.log(this.selectedWorkoutId);
    await this.getSessionWorkout(this.selectedWorkoutId);

    console.log(this.selectedWorkout);
  }

  isValidInput(){

    let isValid = true;
    this.exercises.controls.forEach(control => {
      if (!control.valid) {
        // this.formValid = false;
        isValid = false;
      }
    });
    return isValid;
  }

  hasWeight(exerciseNo: number) {
    // console.log(this.selectedExercises);
    const exercise = this.selectedExercises[exerciseNo];
    const exercisesWithoutWeight = ["Burpees", "Calf Raises", "Crunches", "Jumping Jacks", "Lunges", "Planks", "Pull-Ups", "Push-Ups", "Sit-Ups", "Stretches"];

    if (exercisesWithoutWeight.includes(exercise)) {
      return false;
    }

    return true;
  }

  hasSets(exerciseNo: number) {
    // console.log(this.selectedExercises);
    const exercise = this.selectedExercises[exerciseNo];
    const exercisesWithoutWeight = ["Stretches"];

    if (exercisesWithoutWeight.includes(exercise)) {
      return false;
    }

    return true;
  }

  hasReps(exerciseNo: number) {
    // console.log(this.selectedExercises);
    const exercise = this.selectedExercises[exerciseNo];
    const exercisesWithoutWeight = ["Stretches"];

    if (exercisesWithoutWeight.includes(exercise)) {
      return false;
    }

    return true;
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
