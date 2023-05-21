import { Component, Input, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {}

  viewSchedule(){
    console.log(this.title);
  }

}
