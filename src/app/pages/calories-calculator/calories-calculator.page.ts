import { Component, OnInit } from '@angular/core';
import {  ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {ToastController} from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getAuth } from '@angular/fire/auth';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ProfileService} from "../../services";
import {CalorieSummary} from "./calorie-summary";
import { Observable } from 'rxjs';

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
  }

  onSegmentChange(event: any) {
    this.selectedSegment = event.detail.value;
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
}