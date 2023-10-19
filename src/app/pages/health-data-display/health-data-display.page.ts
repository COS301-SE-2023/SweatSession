import { Component, OnInit } from '@angular/core';
import {ChartDataset, ChartOptions, ChartType} from "chart.js";
// import {takeUntil} from "rxjs/operators";
import {getAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {healthData, weightdata} from "../../models/exercise.model";
import {HealthDataService} from "../../services/healthDataService/healthData.service";

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

  constructor(private firestore: AngularFirestore,
              private healthdataservice: HealthDataService) {

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
      this.chartData = [
            { data: [], label: 'Weight' },
          { data: [], label: 'Calories'}
        ];

      this.setupProfile();
  }

     setupProfile() {
        const auth = getAuth();


        if (this.currUserId!=undefined) {
            sessionStorage.setItem('currUserId', this.currUserId);
        }
        else {
            this.currUserId = sessionStorage.getItem('currUserId') ?? "";
        }

        this.setChartData();
        this.fetchHealthData();
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
                        // this.isLoading = false;
                    }
                });


        }
    }


  setChartData() {

      if(this.currUserId)
      {
          
          this.healthdataservice.fetchWeightData(this.currUserId).subscribe((data) => {
            data.forEach((Weightdata: weightdata) => {
                // console.log("Feeelings");
                if(Weightdata)
                {
                    // console.table(Weightdata);
                    this.chartData[0].data.push(Weightdata.weight);
                    
                    this.chartData[1].data.push(Weightdata.calories);
                    this.chartLabels.push(Weightdata.date.toString());
                    // console.log("Moonlight");
                }
            });
            this.sortchatLabels();
            this.isLoading = false;
        }
              
          );

      }
      else
      {
          console.log("currUserId is null");
      }
  }

  sortchatLabels()
  {
      this.chartLabels.sort((a, b) => {
          return new Date(a).getTime() - new Date(b).getTime();
      });
  }

}
