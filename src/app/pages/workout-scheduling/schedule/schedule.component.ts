import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoutScheduleComponent } from '../popout-schedule/popout-schedule.component';

@Component({
  selector: 'workout-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent  implements OnInit {
  @Input() id!: string;
  @Input() title!: string;
  @Input() date!: string;
  @Input() body!: string;
  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  async viewSchedule(){
    console.log(this.title);
    const popover = await this.popoverController.create({
          component: PopoutScheduleComponent,
          translucent: true
        });
        return await popover.present();
  }
}
