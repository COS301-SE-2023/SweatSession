import { Component, Input, OnInit } from '@angular/core';
import { IWorkoutScheduleModel } from 'src/app/models';

@Component({
  selector: 'workout-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent  implements OnInit {
  @Input() schedules: IWorkoutScheduleModel[]=[];
  @Input() categoryName:string;
  constructor() { }

  ngOnInit() {}
}
