import { Component, OnInit } from '@angular/core';
import {ChartDataset, ChartOptions, ChartType} from "chart.js";

@Component({
  selector: 'app-health-data-display',
  templateUrl: './health-data-display.page.html',
  styleUrls: ['./health-data-display.page.scss'],
})
export class HealthDataDisplayPage implements OnInit {

  chartData: ChartDataset[] = [];
  chartLabels: string[] = [];
  chartType: ChartType = 'line';

  constructor() { }

  ngOnInit() {
    this.setChartData();
  }

  setChartData() {
    this.chartData = [
      { data: [90, 83, 73, 52, 559], label: 'Weight' },
      { data: [1, 2, 3], label: 'Calories' },

    ];
    this.chartLabels = ['January', 'February', 'March', 'April', 'May'];

  }

}
