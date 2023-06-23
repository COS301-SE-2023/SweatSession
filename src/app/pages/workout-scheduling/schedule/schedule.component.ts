import { Component, Input, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { PopoutScheduleComponent } from '../popout-schedule/popout-schedule.component';
import { Time } from '@angular/common';
import { IWorkoutScheduleModel } from 'src/app/models';
import { Select, Store } from '@ngxs/store';
import { WorkoutSchedulingState } from 'src/app/states';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { LoadSchedule, RemoveWorkoutSchedule } from 'src/app/actions';

@Component({
  selector: 'workout-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent  implements OnInit {
  @Input() schedules: IWorkoutScheduleModel[]=[];
  @Input() categoryName:string;
  @Select(WorkoutSchedulingState.returnSchedule) schedule$!: Observable<IWorkoutScheduleModel>; 
  constructor(private popoverController: PopoverController, private store:Store, private alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {}

  addWorkout(schedule: IWorkoutScheduleModel) {
    this.navCtrl.navigateForward('/workout-tracking', { state: { schedule } });
  }

  async viewSchedule(schedule: IWorkoutScheduleModel) {
    this.loadSchedule(schedule);
    const popover = await this.popoverController.create({
      component: PopoutScheduleComponent,
      translucent: true
    });
    return await popover.present();
  }

  loadSchedule(schedule: IWorkoutScheduleModel) {
    this.store.dispatch(new LoadSchedule(schedule));
  }

  removeSchedule(schedule: IWorkoutScheduleModel) {
    this.store.dispatch(new RemoveWorkoutSchedule(schedule))
  }
}
