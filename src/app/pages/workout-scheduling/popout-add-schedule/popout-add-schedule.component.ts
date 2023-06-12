import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { AddWorkoutSchedule } from 'src/app/actions';
import { IWorkoutScheduleModel } from 'src/app/models';

@Component({
  selector: 'app-popout-add-schedule',
  templateUrl: './popout-add-schedule.component.html',
  styleUrls: ['./popout-add-schedule.component.scss'],
})
export class PopoutAddScheduleComponent  implements OnInit {
  schedule:IWorkoutScheduleModel={
    
  };

  constructor(private popoverController: PopoverController, private store: Store) { }

  ngOnInit() {}

  closePopup() {
    this.popoverController.dismiss();
  }

  addSchedule() {
    this.store.dispatch(new AddWorkoutSchedule(this.schedule));
    this.closePopup();
    console.table(this.schedule);
  }

}
