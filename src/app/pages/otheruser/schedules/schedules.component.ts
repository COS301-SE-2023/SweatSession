import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { LoadSchedule } from 'src/app/actions';
import { IWorkoutScheduleModel } from 'src/app/models';
import { PopoutScheduleComponent } from '../../workout-scheduling/popout-schedule/popout-schedule.component';

@Component({
  selector: 'otheruser-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss'],
})
export class SchedulesComponent  implements OnInit {
  @Input() schedules: IWorkoutScheduleModel[] = [];
  constructor(private popoverController: PopoverController, private store:Store) { }
  
  ngOnInit() {}

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

}
