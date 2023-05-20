import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-scheduling',
  templateUrl: './workout-scheduling.page.html',
  styleUrls: ['./workout-scheduling.page.scss'],
})
export class WorkoutSchedulingPage {
  pushDay: string = 'Push Day';
  pullDay: string = 'Pull Day';
  legDay: string = 'Leg Day';
  pushDay2: string = 'Push Day';
  pullDay2: string = 'Pull Day';
  legDay2: string = 'Leg Day';
  restDay: string = 'Rest Day';

  onInputChange() {
    console.log('Input fields changed');
    console.log('pushDay:', this.pushDay);
    console.log('pullDay:', this.pullDay);
    console.log('legDay:', this.legDay);
  }

  ngOnInit() {
    // Retrieve the values from local storage
    this.pushDay = localStorage.getItem('pushDay') || 'Push Day';
    this.pullDay = localStorage.getItem('pullDay') || 'Pull Day';
    this.legDay = localStorage.getItem('legDay') || 'Leg Day';
    this.pushDay2 = localStorage.getItem('pushDay2') || 'Push Day';
    this.pullDay2 = localStorage.getItem('pullDay2') || 'Pull Day';
    this.legDay2 = localStorage.getItem('legDay2') || 'Leg Day';
    this.restDay = localStorage.getItem('restDay') || 'Rest Day';
  }

  saveData() {
    // Save the values to local storage
    localStorage.setItem('pushDay', this.pushDay);
    localStorage.setItem('pullDay', this.pullDay);
    localStorage.setItem('legDay', this.legDay);
    localStorage.setItem('pushDay2', this.pushDay2);
    localStorage.setItem('pullDay2', this.pullDay2);
    localStorage.setItem('legDay2', this.legDay2);
    localStorage.setItem('restDay', this.restDay);
  }
  constructor() { }
}
