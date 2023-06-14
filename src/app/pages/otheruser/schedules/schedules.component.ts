import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { GetOtheruserSchedules, LoadSchedule } from 'src/app/actions';
import { IWorkoutScheduleModel } from 'src/app/models';
import { PopoutScheduleComponent } from '../../workout-scheduling/popout-schedule/popout-schedule.component';
import { OtheruserState } from 'src/app/states';
import { Observable } from 'rxjs';

@Component({
  selector: 'otheruser-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss'],
})
export class SchedulesComponent  implements OnInit {
  schedules: IWorkoutScheduleModel[] = [];
  @Select(OtheruserState.returnOtherUserSchedules) schedules$!: Observable<IWorkoutScheduleModel[]>;

  constructor(private popoverController: PopoverController, private store:Store) { }
  
  ngOnInit() {
    this. displayWorkoutSchedules();
  }

  async viewSchedule(schedule: IWorkoutScheduleModel){
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

  
  displayWorkoutSchedules() {
    this.store.dispatch( new GetOtheruserSchedules())
    this.schedules$.subscribe((response)=>{
      this.schedules = response;
    })
  }

}
