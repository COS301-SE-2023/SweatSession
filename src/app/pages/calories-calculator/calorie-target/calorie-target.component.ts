import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile/profile.service';
import {healthData} from "../../../models/exercise.model";
import {SetProfileService} from "../../../services";
import {HealthDataService} from "../../../services/healthDataService/healthData.service";
import {wait} from "nx-cloud/lib/utilities/waiter";
import {auth} from "firebase-admin";
import {getAuth} from "@angular/fire/auth";
import { CalorieSummary } from '../calorie-summary';

@Component({
  selector: 'calorie-target',
  templateUrl: './calorie-target.component.html',
  styleUrls: ['./calorie-target.component.scss'],
})
export class CalorieTargetComponent  implements OnInit {

  BMIValue: number;
  TDEEValue: number;
  bmr: number;
  healthDataForm: healthData;
  healthDataFORM: FormGroup;
  currUserId: string | undefined | null;
  commitmentLevel: number;
  weightGoals: number;
  targetCalories: number;
  filledOuthealth: boolean = false;

  
  constructor(private formBuilder: FormBuilder,
              private firestore: AngularFirestore,
              private profileService: ProfileService,
              private setProfileService: SetProfileService,
              private healthDataService: HealthDataService

  )
  {
      this.healthDataFORM = this.formBuilder.group({
            height: ['', Validators.required],
            weight: ['', Validators.required],
            diet: ['', Validators.required],
            medicalConditions: ['', Validators.required],
            workoutCommitment: ['', Validators.required],
            age: ['', Validators.required],
            gender: ['', Validators.required],
            displayName: [''],
            weightGoals: ['']
      });

    this.healthDataForm = {
        age: 0,
        diet: "",
        displayName: "",
        gender: "",
        height: 0,
        medicalConditions: "",
        weight: 0,
        workoutCommitment: "",
        weightGoals: 0
    }

    this.commitmentLevel = 0;
    this.weightGoals = 0;
    this.targetCalories = 0;
  }


  ngOnInit()
  {

    this.calculateandGet_BMR();
  }

    fetchHealthData() {

    }

    calculateandGet_BMR()
    { //using  the Revised Harris-Benedict Equation

        let height = 0;
        let weight = 0;
        let age = 0;
        let gender = "none";

        const auth = getAuth();
        this.currUserId = auth.currentUser?.uid;

        if (this.currUserId!=undefined)
        {
            sessionStorage.setItem('currUserId', this.currUserId);
        }
        else
        {
            this.currUserId = sessionStorage.getItem('currUserId') ?? "";
        }

        this.healthDataService.getHealthData(this.currUserId)
            .then((res: unknown) => {
                const healthDataArray = res as healthData[];
                if (healthDataArray.length > 0) {
                    this.filledOuthealth = true;
                    this.healthDataForm.age = healthDataArray[0].age;
                    this.healthDataForm.diet = healthDataArray[0].diet;
                    this.healthDataForm.displayName = healthDataArray[0].displayName;
                    this.healthDataForm.gender = healthDataArray[0].gender;
                    this.healthDataForm.height = healthDataArray[0].height;
                    this.healthDataForm.medicalConditions = healthDataArray[0].medicalConditions;
                    this.healthDataForm.weight = healthDataArray[0].weight;
                    this.healthDataForm.workoutCommitment = healthDataArray[0].workoutCommitment;
                    this.healthDataForm.weightGoals = healthDataArray[0].weightGoals;


                     height = this.healthDataForm.height;
                     weight = this.healthDataForm.weight;
                     age = this.healthDataForm.age;
                     gender = this.healthDataForm.gender;


                    let bmr = 0;

                    if(gender == "Male")
                    {
                        let step1 = 13.397 * weight;
                        let step2 = 4.799 * height;
                        let step3 = 5.677 * age;
                        let step4 = 88.362;
                        bmr = step1 + step2 - step3 + step4;
                    }
                    else
                    {
                        let step1 = 9.247 * weight;
                        let step2 = 3.098 * height;
                        let step3 = 4.330 * age;
                        let step4 = 447.593;
                        bmr = step1 + step2 - step3 + step4;
                    }
                    this.bmr = bmr;


                    //calculate BMI
                    let BMI = 0;
                    let heightM = height / 100;
                    BMI = weight / (heightM * heightM);
                    this.BMIValue = BMI;

                    //calculate TDEE
                    this.calculateandGet_TDEE();
                    this.calculateTargetCalories();

                } else {
                    // Handle the case where there is no data
                    this.filledOuthealth = false;
                    console.log("No health data available.");
                }
            })
            .catch((error) => {
                this.filledOuthealth = false;
                console.log(error);
            });

  }

  calculateandGet_TDEE() {

    let TDEE = 0;

    if(this.healthDataForm.workoutCommitment == "Low Commitment (0-1 days/week)")
    {
      this.commitmentLevel = 1.2;
    }
    else if(this.healthDataForm.workoutCommitment == "Medium Commitment (2-3 days/week)")
    {
        this.commitmentLevel = 1.375;
    }
    else if (this.healthDataForm.workoutCommitment == "High Commitment (4-5 days/week)")
    {
        this.commitmentLevel = 1.55;
    }
    else if (this.healthDataForm.workoutCommitment == "Extreme Commitment (6+ days/week)")
    {
        this.commitmentLevel = 1.725;
    }

    console.log("The value: " + this.commitmentLevel);

    TDEE = this.bmr * this.commitmentLevel;

    this.TDEEValue = TDEE;
    return TDEE;
  }

  calculateTargetCalories(): number
  {
      let targetCalories = this.TDEEValue;

      if(this.healthDataForm.weightGoals == 0)
      {
          this.targetCalories = targetCalories;
      }
      else if(this.healthDataForm.weightGoals > 0)
      {
          if(this.healthDataForm.weightGoals == 1)
          {
                targetCalories = targetCalories + 1100;
                this.targetCalories = targetCalories;
          }
          else if(this.healthDataForm.weightGoals == 0.75)
          {
              targetCalories = targetCalories + 825;
              this.targetCalories = targetCalories;
          }
          else if(this.healthDataForm.weightGoals == 0.5)
          {
              targetCalories = targetCalories + 550;
              this.targetCalories = targetCalories;
          }
          else if(this.healthDataForm.weightGoals == 0.25)
          {
                targetCalories = targetCalories + 275;
                this.targetCalories = targetCalories;
          }

      }
      else if(this.healthDataForm.weightGoals < 0)
      {
          if (this.healthDataForm.weightGoals == -1)
          {
              targetCalories = targetCalories - 1100;
              this.targetCalories = targetCalories;
          }
          else if (this.healthDataForm.weightGoals == -0.75)
          {
              targetCalories = targetCalories - 825;
              this.targetCalories = targetCalories;
          }
          else if (this.healthDataForm.weightGoals == -0.5)
          {
                targetCalories = targetCalories - 550;
                this.targetCalories = targetCalories;
          }
          else if (this.healthDataForm.weightGoals == -0.25)
          {
                targetCalories = targetCalories - 275;
                this.targetCalories = targetCalories;
          }
      }


    CalorieSummary.targetCalories = parseFloat((targetCalories/7).toFixed(2));
    return targetCalories;
  }

}
