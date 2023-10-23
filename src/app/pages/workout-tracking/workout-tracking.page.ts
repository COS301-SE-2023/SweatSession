  import { Component, OnInit } from '@angular/core';
  import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
  import { AbstractControl } from '@angular/forms';
  import { take } from 'rxjs/operators';
  import { ExerciseService } from '../../services/exercise/exercise.service';
  import { Exercise } from '../../models/exercise.model';
  import { NavController } from '@ionic/angular';
  import { Router } from '@angular/router';
import { NotifyService } from 'src/app/services/notify/notify.service';
import { NavigationService } from 'src/app/services';


  @Component({
    selector: 'app-workout-tracking',
    templateUrl: './workout-tracking.page.html',
    styleUrls: ['./workout-tracking.page.scss']
  })
  export class WorkoutTrackingPage implements OnInit {
    scheduleId: string;
    workoutForm: FormGroup;
    exercisesArray: Exercise[] = [];
    deletedExercises: string[] = [];
    selectedExercises: any = {};
    Incount: 0;
    darkmode : boolean = false;

    constructor(
      private formBuilder: FormBuilder,
      private exerciseService: ExerciseService,
      private navCtrl: NavController,
      private router: Router,
      private notify: NotifyService,
      private navService: NavigationService) {
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

    ngOnInit(): void {
      if(localStorage.getItem('darkmode')=='true') {
        this.darkmode = true;
      } else {
        this.darkmode = false;
      }
        this.exerciseService.getExerciseByScheduleId(this.scheduleId).pipe(take(1)).subscribe((exercises) => {
          this.exercisesArray = exercises.map((exercise) => ({
            ...exercise,
            id: exercise.id,
          }));
          console.log('Fetched exercises:', this.exercisesArray);
          this.populateFormWithExercises();
        });
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
      console.log(this.selectedExercises)
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
      
      
    get exercises(): FormArray {
      return this.workoutForm.get('exercises') as FormArray;
    }

    addExercise() {
      const exerciseControl = this.formBuilder.group({
        name: [null,[Validators.required]],
        sets: [null,[Validators.required, Validators.min(2)]],
        reps: [null,[Validators.required, Validators.min(2)]],
        weight: [null, [Validators.required, Validators.min(2)]],
        duration: [null, [Validators.required, Validators.min(1)]],
      });

      (this.workoutForm.get('exercises') as FormArray).push(exerciseControl);
    }

    IsItvalid()
    {
      const Outcount : number = this.workoutForm.get('exercises')?.value.length;
      this.Incount = 0;

      this.workoutForm.get('exercises')?.value.forEach((element: any) =>
      {
        if
        (
            element.name != null &&
            // element.reps != null && element.weight != null && && element.sets != null
            element.duration != null
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

    deleteExercise(index: number) {
      const exercise = this.exercisesArray[index];
      if (exercise.id) {
        this.deletedExercises.push(exercise.id);
      }
      this.exercises.removeAt(index);
      this.updateSelectedExerciseValues();
    }

    public async saveExercise(exerciseData: Exercise, index: number) {
      let exercise = this.exercisesArray[index];
    
      if (exercise) {
        Object.assign(exercise, exerciseData);
        if (exercise.id) {
          await this.exerciseService.updateExercise(exercise.id, exercise);
          console.log(`Exercise ${index + 1} updated successfully.`);
        }
      } else {
        const newExercise = await this.exerciseService.addExerciseWithUniqueId(exerciseData);
        console.log(`Exercise ${index + 1} added successfully.`);
        this.exercisesArray.push(newExercise);
      }
    }

    public async saveExercises() { 
      console.log('Initial exercisesArray:', this.exercisesArray);
      console.log('Form exercises:', this.exercises.controls);
      console.log('Deleted exercises:', this.deletedExercises);   
      const promises = this.exercises.controls.map((exerciseControl: AbstractControl, index: number) => {
        const exerciseData = {
          scheduleId: this.scheduleId,
          name: exerciseControl.get('name')?.value ?? "",
          sets: exerciseControl.get('sets')?.value ?? 0,
          reps: exerciseControl.get('reps')?.value ?? 0,
          weight: exerciseControl.get('weight')?.value ?? 0,
          duration: exerciseControl.get('duration')?.value ?? 0,
          completed: false,
        };
    
        return this.saveExercise(exerciseData, index);
      });
    
      await Promise.all(promises);
    
      const deletePromises = this.deletedExercises.map(async (exerciseId) => {
        await this.exerciseService.deleteExerciseFromDatabase(exerciseId);
        console.log(`Exercise with ID ${exerciseId} deleted successfully.`);
      });
    
      await Promise.all(deletePromises);
      this.deletedExercises = [];
    
      console.log('All exercises saved.');
      this.notify.presentSuccessToast("Exercises saved");
      this.navService.back();
    }

    exerciseSelected(event: Event, exerciseNo: number) {
      const selectedValue = (event.target as HTMLSelectElement).value;
      console.log(selectedValue);
      this.selectedExercises[exerciseNo] = selectedValue;
      console.log(this.selectedExercises);
    }


  
    hasWeight(exerciseNo: number){
      // console.log(this.selectedExercises);
      const exercise = this.selectedExercises[exerciseNo];
      const exercisesWithoutWeight = ["Burpees", "Calf Raises", "Crunches", "Jumping Jacks", "Lunges", "Planks", "Pull-Ups", "Push-Ups", "Sit-Ups", "Stretches"];
  
      if (exercisesWithoutWeight.includes(exercise)) {
          return false;
      }
  
      return true;
    }
  
    hasSets(exerciseNo: number){
      // console.log(this.selectedExercises);
      const exercise = this.selectedExercises[exerciseNo];
      const exercisesWithoutWeight = ["Stretches"];
  
      if (exercisesWithoutWeight.includes(exercise)) {
          return false;
      }
  
      return true;
    }
  
    hasReps(exerciseNo: number){
      // console.log(this.selectedExercises);
      const exercise = this.selectedExercises[exerciseNo];
      const exercisesWithoutWeight = ["Stretches"];
  
      if (exercisesWithoutWeight.includes(exercise)) {
          return false;
      }
  
      return true;
    }
    
  }
