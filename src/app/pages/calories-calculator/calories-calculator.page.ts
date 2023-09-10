import { Component, OnInit } from '@angular/core';
import {  ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-calories-calculator',
  templateUrl: './calories-calculator.page.html',
  styleUrls: ['./calories-calculator.page.scss'],
})



export class CaloriesCalculatorPage implements OnInit  {
  BMIValue: number;
  TDEEValue: number;

  constructor() { }

  ngOnInit() {
  }

  getBMIValue() {
    this.calculateBMI();
    return this.BMIValue;
  }

  getTDEEValue() {
    this.calculateTDEE();
    return this.TDEEValue;
  }

  calculateBMI() {
    let height = 5;
    let weight = 5;
    let bmi = weight / (height / 100 * height / 100);
    this.BMIValue = parseFloat(bmi.toFixed(2));
  }

  calculateTDEE() {
    let height = 5;
    let weight = 5;
    let age = 5;
    let tdee = 0;
    if (this.BMIValue < 18.5) {
      tdee = 1.2 * (10 * weight + 6.25 * height - 5 * age + 5);
    } else if (this.BMIValue >= 18.5 && this.BMIValue < 25) {
      tdee = 1.375 * (10 * weight + 6.25 * height - 5 * age + 5);
    } else if (this.BMIValue >= 25 && this.BMIValue < 30) {
      tdee = 1.55 * (10 * weight + 6.25 * height - 5 * age + 5);
    } else if (this.BMIValue >= 30 && this.BMIValue < 35) {
      tdee = 1.725 * (10 * weight + 6.25 * height - 5 * age + 5);
    } else if (this.BMIValue >= 35) {
      tdee = 1.9 * (10 * weight + 6.25 * height - 5 * age + 5);
    }
    this.TDEEValue = parseFloat(tdee.toFixed(2));
  }

}
