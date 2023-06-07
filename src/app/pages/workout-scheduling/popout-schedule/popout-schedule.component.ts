import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IWorkoutScheduleModel } from 'src/app/models';
import { WorkoutSchedulingState } from 'src/app/states';

@Component({
  selector: 'app-popout-schedule',
  templateUrl: './popout-schedule.component.html',
  styleUrls: ['./popout-schedule.component.scss'],
})
export class PopoutScheduleComponent  implements OnInit {
  schedule!: IWorkoutScheduleModel;
  @Select(WorkoutSchedulingState.returnSchedule) schedule$!: Observable<IWorkoutScheduleModel>;
  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
    this.displaySchedule();
  }

  closePopup() {
    this.popoverController.dismiss();
  }

  displaySchedule() {
    this.schedule$.subscribe((response)=>{
      this.schedule=response;
    })
  }
}
