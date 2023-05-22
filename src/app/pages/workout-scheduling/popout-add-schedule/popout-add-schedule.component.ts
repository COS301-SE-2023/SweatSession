import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popout-add-schedule',
  templateUrl: './popout-add-schedule.component.html',
  styleUrls: ['./popout-add-schedule.component.scss'],
})
export class PopoutAddScheduleComponent  implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  closePopup() {
    this.popoverController.dismiss();
  }

  addSchedule() {
    //store.dispatch(new AddScheduleAction(payload));
  }

}
