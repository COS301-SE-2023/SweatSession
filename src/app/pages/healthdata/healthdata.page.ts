import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NotifyService } from 'src/app/services/notify/notify.service';
import { ProfileService } from '../../services';
import { HealthDataService } from "../../services/healthDataService/healthData.service";
@Component({
  selector: 'app-healthdata',
  templateUrl: './healthdata.page.html',
  styleUrls: ['./healthdata.page.scss'],
})
export class HealthDataPage implements OnInit {
  currUserId: string | undefined | null;
  isBeating: boolean = false;

  healthDataForm: FormGroup;
  bmr: number;
  BMIValue: number;
  isLoading: boolean = true;
  commitmentLevel: number;
  TDEEValue: number;
  targetCalories: number;
  private ngUnsubscribe = new Subject();
  
  startBeating() {
    this.isBeating = true;
    setTimeout(() => {
      this.stopBeating();
    }, 1000);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }

  stopBeating() {
    this.isBeating = false;
  }

  constructor(private formBuilder: FormBuilder, 
    private profileService: ProfileService, 
    private firestore: AngularFirestore, 
    private notifyService: NotifyService,
    private healthDataService: HealthDataService,
    ) {

    this.healthDataForm = this.formBuilder.group({
      height: ['', [Validators.required, Validators.min(100), Validators.max(251)]],
      weight: ['', [Validators.required, Validators.min(30), Validators.max(640)]], // Weight should be a number
      gender: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(16), Validators.max(130)]], // Age should be a number
      diet: [''],
      medicalConditions: [''],
      weightGoals: ['', Validators.required],
      workoutCommitment: ['', Validators.required],
      displayName: [''],
      currUserId: [''],

    });
  }

  ngOnInit() {
    this.setupProfile();
  }

  async setupProfile() {
    const auth = getAuth();
    
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.currUserId = user.uid;
        sessionStorage.setItem('currUserId', this.currUserId);
        this.healthDataForm.patchValue({ currUserId: this.currUserId }); // Set currUserId in the form
        this.isLoading = false;
        await this.fetchHealthData();
      } else {
        this.currUserId = sessionStorage.getItem('currUserId');
      }
    });
  }

  async fetchHealthData() {
    if (this.currUserId) {
      this.firestore
        .collection('healthdata',
            (ref) => ref
                .where('userId', '==', this.currUserId))
        .valueChanges()
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((data) => {
          if (data.length > 0) {
            this.healthDataForm.patchValue(data[0]!);
          }
        });
    }
  }

  async checkHealthDataExistence(userId: string) {
    const snapshot = await this.firestore
      .collection('healthdata', (ref) => ref.where('userId', '==', userId))
      .get()
      .toPromise();

    if (snapshot?.empty) {
      return null;
    } else {
      return snapshot?.docs[0].id;
    }
  }

  async saveHealthData() {

    if (!this.healthDataForm.valid) {
      return;
    }

    if (!this.currUserId) {
      console.log('Current user ID is undefined');
      return;
    }

    const docId = await this.checkHealthDataExistence(this.currUserId);

    if (docId) {
      this.firestore.collection('healthdata').doc(docId).update(this.healthDataForm.value);
      await this.notifyService.presentSuccessToast('Health data updated Successfully.');
    } else {
      this.firestore.collection('healthdata').add({
        ...this.healthDataForm.value,
        userId: this.currUserId, 
      });

      await this.notifyService.presentSuccessToast('Health data added Successfully.');
    }

    this.calculateandGet_BMR()
    const TARGETC = this.calculateTargetCalories();
    console.log("target is => " + TARGETC);
    this.healthDataService.addWeightData(this.healthDataForm.value.weight,TARGETC, this.currUserId);

  }

  calculateandGet_BMR() { //using  the Revised Harris-Benedict Equation

    let height = 0;
    let weight = 0;
    let age = 0;
    let gender = "none";

    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;

    if (this.currUserId != undefined) {
        sessionStorage.setItem('currUserId', this.currUserId);
    } else {
        this.currUserId = sessionStorage.getItem('currUserId') ?? "";
    }

  
  

                height = this.healthDataForm.value.height;
                weight = this.healthDataForm.value.weight;
                age = this.healthDataForm.value.age;
                gender = this.healthDataForm.value.gender;


                let bmr = 0;

                if (gender == "Male") {
                    let step1 = 13.397 * weight;
                    let step2 = 4.799 * height;
                    let step3 = 5.677 * age;
                    let step4 = 88.362;
                    bmr = step1 + step2 - step3 + step4;
                } else {
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
    }

    calculateandGet_TDEE() {

      let TDEE = 0;

      if (this.healthDataForm.value.workoutCommitment == "Low Commitment (0-1 days/week)") {
          this.commitmentLevel = 1.2;
      } else if (this.healthDataForm.value.workoutCommitment == "Medium Commitment (2-3 days/week)") {
          this.commitmentLevel = 1.375;
      } else if (this.healthDataForm.value.workoutCommitment == "High Commitment (4-5 days/week)") {
          this.commitmentLevel = 1.55;
      } else if (this.healthDataForm.value.workoutCommitment == "Extreme Commitment (6+ days/week)") {
          this.commitmentLevel = 1.725;
      }

      console.log("The value: " + this.commitmentLevel);

      TDEE = this.bmr * this.commitmentLevel;

      this.TDEEValue = TDEE;
      return TDEE;
  }

  calculateTargetCalories(): number {

    console.log("The Weight: " + this.healthDataForm.value.weightGoals);
    console.log("The TDEEE: " + this.TDEEValue);
    let targetCalories = this.TDEEValue;

    if (this.healthDataForm.value.weightGoals == 0) {
        this.targetCalories = targetCalories;
    } else if (this.healthDataForm.value.weightGoals > 0) {
        if (this.healthDataForm.value.weightGoals == 1) {
            targetCalories = targetCalories + 1100;
            this.targetCalories = targetCalories;
        } else if (this.healthDataForm.value.weightGoals == 0.75) {
            targetCalories = targetCalories + 825;
            this.targetCalories = targetCalories;
        } else if (this.healthDataForm.value.weightGoals == 0.5) {
            targetCalories = targetCalories + 550;
            this.targetCalories = targetCalories;
        } else if (this.healthDataForm.value.weightGoals == 0.25) {
            targetCalories = targetCalories + 275;
            this.targetCalories = targetCalories;
        }

    } else if (this.healthDataForm.value.weightGoals < 0) {
        if (this.healthDataForm.value.weightGoals == -1) {
            targetCalories = targetCalories - 1100;
            this.targetCalories = targetCalories;
        } else if (this.healthDataForm.value.weightGoals == -0.75) {
            targetCalories = targetCalories - 825;
            this.targetCalories = targetCalories;
        } else if (this.healthDataForm.value.weightGoals == -0.5) {
            targetCalories = targetCalories - 550;
            this.targetCalories = targetCalories;
        } else if (this.healthDataForm.value.weightGoals == -0.25) {
            targetCalories = targetCalories - 275;
            this.targetCalories = targetCalories;
        }
    }


    return targetCalories;
}

}