import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'calorie-target',
  templateUrl: './calorie-target.component.html',
  styleUrls: ['./calorie-target.component.scss'],
})
export class CalorieTargetComponent  implements OnInit {

  BMIValue: number;
  TDEEValue: number;
  healthDataForm: FormGroup;
  currUserId: string | undefined | null;
  commitmentLevel: number;
  weightGoals: number;
  
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
  }


  async fetchHealthData() {
    if(this.currUserId) {
      const userProfile = await this.profileService.getProfile({ userId: this.currUserId }).toPromise();
      const displayName = userProfile?.profile.displayName;
      this.firestore.collection('healthdata', ref => ref.where('displayName', '==', displayName))
          .valueChanges()
          .subscribe(data => {
            if (data.length > 0) {
              this.healthDataForm.patchValue(data[0]!);
            }
          });
    }
  }

  calculateandGet_BMR() { //using  Harris-Benedict Equation (Revised Harris-Benedict Equation)
    this.fetchHealthData();
    let height = 180;
    let weight = 60;
    let age = 25;
    let gender = "male"
    let bmr = 0;

    if(gender == "male")
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
      return bmr;
  }

  calculateandGet_TDEE() {

    this.fetchHealthData();
    let TDEE = 0;
    let bmr = this.calculateandGet_BMR();
    TDEE = bmr * this.commitmentLevel;

    return TDEE;
  }


  calculateTargetCalories(): number {

    let targetCalories = this.calculateandGet_TDEE() * this.weightGoals;

    return targetCalories;
  }

}
