import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { register } from 'swiper/element/bundle';
import { ProfileService } from "../../services";
import { CalorieSummary } from "./calorie-summary";
register();

@Component({
  selector: 'app-calories-calculator',
  templateUrl: './calories-calculator.page.html',
  styleUrls: ['./calories-calculator.page.scss'],
})



export class CaloriesCalculatorPage implements OnInit {
  BMIValue: number;
  TDEEValue: number;
  healthDataForm: FormGroup;
  currUserId: string | undefined | null;
  commitmentLevel: number;
  weightGoals: number;
  totalTargetCalories: number;
  totalDietCalories: number;
  totalWorkoutCalories: number;
  targetCalories$: Observable<number> = CalorieSummary.targetCalories$;
  dietCalories$: Observable<number> = CalorieSummary.dietCalories$;
  workoutCalories$: Observable<number> = CalorieSummary.workoutCalories$;
  darkmode=false;

  selectedSegment: string = 'target';
  calorieSummary: any;

  constructor(private formBuilder: FormBuilder,private firestore: AngularFirestore, private profileService: ProfileService)
  {
    this.healthDataForm = this.formBuilder.group({
      height: ['', Validators.required],
      weight: ['', Validators.required],
      diet: ['', Validators.required],
      medicalConditions: ['', Validators.required],
      workoutCommitment: ['', Validators.required],
      displayName: ['']
    });
    this.commitmentLevel = 0;
    this.weightGoals = 0;
  }


  ngOnInit() {
    this.calorieSummary = new CalorieSummary();
    this. initialize();
  }

  onSegmentChange(event: any) {
    this.selectedSegment = event.detail.value;
  }

  initialize() {
    this.targetCalories$.subscribe((response)=>{
      this.totalTargetCalories = response;
    })
    this.dietCalories$.subscribe((response)=>{
      this.totalDietCalories = response;
    })
    this.workoutCalories$.subscribe((response)=>{
      this.totalWorkoutCalories = response;
    })
    this.checkTheme();
  }

  targetCalories(){
    return CalorieSummary.targetCalories;
  }

  dietCalories(){
    return CalorieSummary.dietCalories;
  }

  workoutCalories(){
    return CalorieSummary.workoutCalories;
  }

  returnTitle() {
    return `${this.totalDietCalories + this.totalWorkoutCalories}`;
  }
  
  returnWorkoutTitle() {
    return `${this.totalWorkoutCalories}`
  }

  returnDietTitle() {
    return `${this.totalDietCalories}`
  }

  checkTheme() {
    if(localStorage.getItem('darkmode')=='true') {
      return true;
    } 
    return false;
  }
}