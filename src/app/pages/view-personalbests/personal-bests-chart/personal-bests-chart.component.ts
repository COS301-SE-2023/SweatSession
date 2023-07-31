import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { IPersonalBest } from 'src/app/models/personalbest.model';
import { PersonalbestService } from 'src/app/services/personalbest/personalbest.service';
import { AlertController } from '@ionic/angular';

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
  showExercise: string = 'Squats';
  showReps = 'reps';

  personalBestsData: IPersonalBest[] = [];

  constructor(private personalbestService: PersonalbestService,
              private alertController: AlertController) { }


  ngOnInit() {
    
    this.retrieveExercisesByName(this.showExercise); 
     
  }

    retrieveExercisesByName(name: string) {
      this.personalbestService.getExercisesByName(name).subscribe((exercises) => {
        this.personalBestsData = exercises;
        this.setChartData();
        this.setChartLabels();
        this.setchartOptions();
        console.log(this.personalBestsData);
      });
    }

    showChart() {
      this.retrieveExercisesByName(this.showExercise);
    }

    

    setChartData()
    {
      const dataKey = this.showReps as keyof IPersonalBest;

      this.personalBestsData.sort((a, b) => {
        return new Date(a.date!).getTime() - new Date(b.date!).getTime();
      });

      this.chartData = [
        {
          data: this.personalBestsData
            .filter((data) => data[dataKey] !== undefined)
            .map((data) => data[dataKey] as number),
          label: this.showReps!.toUpperCase(),
        }
      ];
        console.log("Chart Data" ,this.chartData);
    }

    // Component class
  async confirmDelete(DpersonalBest: any) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this Personal Best ('+ DpersonalBest.exercise +') ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteItem(DpersonalBest);
          },
        },
      ],
    });

    await alert.present();
  }

deleteItem(personalBest: IPersonalBest) {
  this.personalbestService.deletePersonalbest(personalBest);

  const index = this.personalBestsData.indexOf(personalBest);
  if (index > -1) {
    this.personalBestsData.splice(index, 1);
  }
}

    setChartLabels()
    {

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

  }