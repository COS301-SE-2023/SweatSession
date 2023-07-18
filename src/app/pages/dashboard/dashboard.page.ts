import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { Observable } from 'rxjs';
import { GetWorkoutSchedules } from 'src/app/actions';
import { IWorkoutScheduleModel } from 'src/app/models';
import { WorkoutSchedulingState } from 'src/app/states';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @Select(WorkoutSchedulingState.returnSchedules) schedules$!: Observable<IWorkoutScheduleModel[]>;
  isAddSlide = false;
  schedules: IWorkoutScheduleModel[]=[];
  completed = 0;
  upcoming = 0;
  inSession = 0;
  load = true;

  chartData: ChartDataset[] = [];
  chartLabels: string[] = [];
  chartOptions: ChartOptions;
  chartType: ChartType = 'doughnut';

  constructor(private store:Store) { }

  ngOnInit(){
    this.displayWorkoutSchedule();
    this.displaygoals();
  }
  
  displaygoals() {


    this.chartData = [
      {
        data: [5,10,15],
        backgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56'],
        label: 'Goals',
      }
    ];

    this.chartLabels = ['Active', 'Completed', 'Overdue'];

    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      


    };




//     var data = {
//       labels: [
//           "Red",
//           "Blue",
//           "Yellow"
//       ],
//       datasets: [
//           {
//               data: [300, 50, 100],
//               backgroundColor: [
//                   "#FF6384",
//                   "#36A2EB",
//                   "#FFCE56"
//               ],
//               hoverBackgroundColor: [
//                   "#FF6384",
//                   "#36A2EB",
//                   "#FFCE56"
//               ]
//           }]
//   };
  
//   var ctx = document.getElementById("myChart") as HTMLCanvasElement;

// var myDoughnutChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: data,
//     options: {
//         rotation: 1 * Math.PI,
//         circumference: 1 * Math.PI
//     }
// });



}

  displayWorkoutSchedule(){
    this.store.dispatch(new GetWorkoutSchedules())
    this.schedules$.subscribe((response)=>{
      this.schedules = response;
    });
    this.load = false;
  }

      
}
