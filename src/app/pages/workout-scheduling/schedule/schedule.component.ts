import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoutScheduleComponent } from '../popout-schedule/popout-schedule.component';
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
  @Input() schedule!: IWorkoutScheduleModel;
  @Select(WorkoutSchedulingState.returnSchedule) schedule$!: Observable<IWorkoutScheduleModel>; 
  constructor(private popoverController: PopoverController, private store:Store) { }

  ngOnInit() {}

  async viewSchedule(){
    this.loadSchedule();
    const popover = await this.popoverController.create({
      component: PopoutScheduleComponent,
      translucent: true
    });
    return await popover.present();
  }

  loadSchedule() {
    this.store.dispatch(new LoadSchedule(this.schedule));
  }

  removeSchedule() {
    this.store.dispatch(new RemoveWorkoutSchedule({schedule:this.schedule}))
  }
}
