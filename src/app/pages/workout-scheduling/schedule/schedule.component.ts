import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoutScheduleComponent } from '../popout-schedule/popout-schedule.component';
import { Time } from '@angular/common';

@Component({
  selector: 'workout-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent  implements OnInit {
  @Input() id!: string;
  @Input() name!: string;
  @Input() duration!: number;
  @Input() location!: string;
  @Input() date?: Date;
  @Input() time?: Time;
  //@select(WorkoutSchedulingState.returnSchedule) schedule$: Observable<WorkoutSchedulingStateModel>; 
  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  async viewSchedule(){
    /*
    payload: IWorkoutScheduleModel = {
      id: string;
      name:string;
      duration?: number;
      location?: string;
      date?: Date;
      time?: Time;
    }
    console.table(payload);
    */
    //store.dispatch(new LoadSchedule(payload))
    const popover = await this.popoverController.create({
          component: PopoutScheduleComponent,
          translucent: true
        });
        return await popover.present();
  }
}
