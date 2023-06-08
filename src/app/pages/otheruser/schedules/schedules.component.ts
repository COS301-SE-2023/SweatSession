import { Component, Input, OnInit } from '@angular/core';
import { IWorkoutScheduleModel } from 'src/app/models';

@Component({
  selector: 'otheruser-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss'],
})
export class SchedulesComponent  implements OnInit {
  @Input() schedules: IWorkoutScheduleModel[] = [];
  constructor() { }

  ngOnInit() {}

}
