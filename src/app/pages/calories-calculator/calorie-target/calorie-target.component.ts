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

  calculateandGet_BMR() { //using  the Revised Harris-Benedict Equation
    this.fetchHealthData();

    let height = this.healthDataForm.value.height;
    let weight = this.healthDataForm.value.weight;
    let age = this.healthDataForm.value.age;
    let gender = this.healthDataForm.value.gender;
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

    if(this.healthDataForm.value.workoutCommitment == "Low Commitment (0-1 days/week)")
    {
      this.commitmentLevel = 1.2;
    }
    else if(this.healthDataForm.value.workoutCommitment == "Medium Commitment (2-3 days/week)")
    {
        this.commitmentLevel = 1.375;
    }
    else if (this.healthDataForm.value.workoutCommitment == "High Commitment (4-5 days/week)")
    {
        this.commitmentLevel = 1.55;
    }
    else if (this.healthDataForm.value.workoutCommitment == "Extreme Commitment (6+ days/week)")
    {
        this.commitmentLevel = 1.725;
    }

    TDEE = bmr * this.commitmentLevel;

    return TDEE;
  }

//   Low Commitment (0-1 days/week)">Low Commitment (0-1 days/week)</option>
//   <option value="Medium Commitment (2-3 days/week)">Medium Commitment (2-3 days/week)</option>
// <option value="High Commitment (4-5 days/week)">High Commitment (4-5 days/week)</option>
// <option value="Extreme Commitment (6+ days/week)

  calculateTargetCalories(): number {


    let targetCalories = this.calculateandGet_TDEE() * this.weightGoals;

    return targetCalories;
  }

}
