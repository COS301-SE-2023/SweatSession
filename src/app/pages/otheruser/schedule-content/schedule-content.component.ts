import { Component, Input, OnInit } from '@angular/core';
import { IWorkoutScheduleModel } from 'src/app/models';

@Component({
  selector: 'schedule-content',
  templateUrl: './schedule-content.component.html',
  styleUrls: ['./schedule-content.component.scss'],
})
export class ScheduleContentComponent  implements OnInit {
  @Input() schedule:IWorkoutScheduleModel;
  isSlideShow = false;

  constructor() { }

  ngOnInit() {}

  viewSchedule(){
    this.isSlideShow=!this.isSlideShow;
  }

  toDate() {
    return new Date(`${this.schedule.date}T${this.schedule.time}`);
  }
}
