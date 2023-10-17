import { Component, OnInit } from '@angular/core';
import {ChartDataset, ChartOptions, ChartType} from "chart.js";
import {takeUntil} from "rxjs/operators";
import {getAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {healthData} from "../../models/exercise.model";

@Component({
  selector: 'app-health-data-display',
  templateUrl: './health-data-display.page.html',
  styleUrls: ['./health-data-display.page.scss'],
})
export class HealthDataDisplayPage implements OnInit {

  chartData: ChartDataset[] = [];
  chartLabels: string[] = [];
  chartType: ChartType = 'line';
  healthData: healthData;
  currUserId: string | undefined | null;
  isLoading: boolean = true;

  constructor(private firestore: AngularFirestore) {

  }

  ngOnInit() {
      this.healthData = {
            age: 0,
            diet: '',
            displayName: '',
            weight: 0,
            height: 0,
            gender: '',
            medicalConditions: '',
            weightGoals: 0,
            workoutCommitment: ''
      }
    this.setChartData();
    this.setupProfile();

  }
    async setupProfile() {
        const auth = getAuth();

        auth.onAuthStateChanged(async (user) => {
            if (user) {
                this.currUserId = user.uid;
                sessionStorage.setItem('currUserId', this.currUserId);
                // this.healthDataForm.patchValue({ currUserId: this.currUserId }); // Set currUserId in the form
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
                .pipe()
                .subscribe((data) => {
                    if (data.length > 0) {
                        this.healthData.weight = (data[0]! as healthData).weight;
                        this.healthData.age = (data[0]! as healthData).age;
                        this.healthData.diet = (data[0]! as healthData).diet;
                        this.healthData.displayName = (data[0]! as healthData).displayName;
                        this.healthData.gender = (data[0]! as healthData).gender;
                        this.healthData.height = (data[0]! as healthData).height;
                        this.healthData.medicalConditions = (data[0]! as healthData).medicalConditions;
                        this.healthData.workoutCommitment = (data[0]! as healthData).workoutCommitment;
                        this.healthData.weightGoals = (data[0]! as healthData).weightGoals;
                        console.table(this.healthData);
                    }
                });


        }
    }

  setChartData() {

    this.chartData = [
      { data: [90, 83, 73, 52, 559], label: 'Weight' },
      { data: [1, 2, 3], label: 'Calories' },

    ];
    this.chartLabels = ['January', 'February', 'March', 'April', 'May'];

  }

}
