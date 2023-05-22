import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popout-schedule',
  templateUrl: './popout-schedule.component.html',
  styleUrls: ['./popout-schedule.component.scss'],
})
export class PopoutScheduleComponent  implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  closePopup() {
    this.popoverController.dismiss();
  }
}
