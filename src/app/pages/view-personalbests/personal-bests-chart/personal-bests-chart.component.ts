import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { IPersonalBest } from 'src/app/models/personalbest.model';
import { PersonalbestService } from 'src/app/services/personalbest/personalbest.service';

@Component({
  selector: 'app-personal-bests-chart',
  templateUrl: './personal-bests-chart.component.html',
  styleUrls: ['./personal-bests-chart.component.scss']
})
export class PersonalBestsChartComponent implements OnInit {
  chartData: ChartDataset[] = [];
  chartLabels: string[] = [];
  chartOptions: ChartOptions;
  chartType: ChartType = 'line';
  showExersise: string = 'Push ups';

  personalBestsData: IPersonalBest[] = [];

  constructor(private personalbestService: PersonalbestService) { }


  ngOnInit() {
    // Replace with your own logic to fetch personal best data
    
    this.retrieveExercisesByName("Squat");
    
    
    
  }

  // exercises: IPersonalBest[] = [];

    retrieveExercisesByName(name: string) {
      this.personalbestService.getExercisesByName(name).subscribe((exercises) => {
        this.personalBestsData = exercises;
        this.setChartData();
        this.setChartLabels();
        this.setchartOptions();
        console.log(this.personalBestsData);
      });
    }

    setChartData()
    {
        this.personalBestsData.sort((a, b) => {
          return new Date(a.date!).getTime() - new Date(b.date!).getTime();
        });

        // this.personalBestsData.forEach(element => {
          this.chartData = [
            {
              data: this.personalBestsData.map((data) => data.reps!),
              label: 'Squat',
            }
          ];

          //sort chart data by date
          
        // });    

        console.log("Chart Data" ,this.chartData);
    }

    setChartLabels()
    {
      // this.chartLabels = personalBestsData1.map((data) => data.date);

      this.chartLabels = [];
      this.personalBestsData.forEach(element => {
        this.chartLabels.push(element.date!)

        //sort Chart labesls by date
        this.chartLabels.sort((a, b) => {
          return new Date(a).getTime() - new Date(b).getTime();
        }
        );
      });
      console.log("chart Labels" ,this.chartLabels);
    }

    setchartOptions()
    {
      this.chartOptions = {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };
      
    }


  // generateChartData() {
  //   // Replace with your own logic to extract the necessary data for the chart
  //   const personalBestsData1 = [
  //     { date: '2022-01-01', weight: 100 },
  //     { date: '2022-02-01', weight: 110 },
  //     { date: '2022-03-01', weight: 120 },
  //     // Add more personal best data points
  //   ];

  //   const personalBestsData2 = [
  //     { date: '2022-01-01', weight: 90 },
  //     { date: '2022-02-01', weight: 95 },
  //     { date: '2022-03-01', weight: 105 },
  //     // Add more personal best data points
  //   ];

  //   // Extract the necessary data for the chart
  //   this.chartData = [
  //     {
  //       data: personalBestsData1.map((data) => data.weight),
  //       label: 'Push ups'
  //     },
  //     {
  //       data: personalBestsData2.map((data) => data.weight),
  //       label: 'Run ups'
  //     }
  //   ];

  //   // Assign the dates from personalBestsData to chartLabels
  //   // Make sure all datasets have the same labels
  //   this.chartLabels = personalBestsData1.map((data) => data.date);

  //   // Configure the chart options
  //   this.chartOptions = {
  //     responsive: true,
  //     scales: {
  //       y: {
  //         beginAtZero: true
  //       }
  //     }
  //   };
  // }
}
