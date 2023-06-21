import { Component, Input, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { Time } from '@angular/common';
import { IWorkoutScheduleModel } from 'src/app/models';
import { Select, Store } from '@ngxs/store';
import { WorkoutSchedulingState } from 'src/app/states';
import { Observable } from 'rxjs';
import { LoadSchedule, RemoveWorkoutSchedule } from 'src/app/actions';

@Component({
  selector: 'workout-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent  implements OnInit {
  @Input() schedules: IWorkoutScheduleModel[]=[];
  @Input() categoryName:string;
  constructor(private popoverController: PopoverController, private store:Store, private alertController: AlertController,) { }

  ngOnInit() {}

  loadSchedule(schedule: IWorkoutScheduleModel) {
    this.store.dispatch(new LoadSchedule(schedule));
  }
}
