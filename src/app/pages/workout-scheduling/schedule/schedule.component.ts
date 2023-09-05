import { Component, Input, OnInit } from '@angular/core';
import { IProfileModel, IWorkoutScheduleModel } from 'src/app/models';

@Component({
  selector: 'workout-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent  implements OnInit {
  @Input() schedules: IWorkoutScheduleModel[]=[];
  @Input() categoryName:string;
  @Input() friends: IProfileModel[] = [];
  constructor() { }

  ngOnInit() {}

  returnID(index: Number) { 
    return `${this.categoryName}_schecule_${index}`
  }
}
