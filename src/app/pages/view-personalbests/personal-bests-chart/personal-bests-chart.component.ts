import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-personal-bests-chart',
  templateUrl: './personal-bests-chart.component.html',
  styleUrls: ['./personal-bests-chart.component.scss']
})
export class PersonalBestsChartComponent implements OnInit {
  chartData: ChartDataset[];
  chartLabels: string[];
  chartOptions: ChartOptions;
  chartType: ChartType = 'line';

  ngOnInit() {
    // Replace with your own logic to fetch personal best data
    const personalBestsData1 = [
      { date: '2022-01-01', weight: 100 },
      { date: '2022-02-01', weight: 110 },
      { date: '2022-03-01', weight: 120 },
      // Add more personal best data points
    ];

    const personalBestsData2 = [
      { date: '2022-01-01', weight: 90 },
      { date: '2022-02-01', weight: 95 },
      { date: '2022-03-01', weight: 105 },
      // Add more personal best data points
    ];

    // Extract the necessary data for the chart
    this.chartData = [
      {
        data: personalBestsData1.map((data) => data.weight),
        label: 'Push ups'
      },
      {
        data: personalBestsData2.map((data) => data.weight),
        label: 'Run ups'
      }
    ];

    // Assign the dates from personalBestsData to chartLabels
    // Make sure all datasets have the same labels
    this.chartLabels = personalBestsData1.map((data) => data.date);

    // Configure the chart options
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
