import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UpdateWorkoutSchedule } from 'src/app/actions';
import { IWorkoutScheduleModel } from 'src/app/models';

@Component({
  selector: 'edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.scss'],
})
export class EditScheduleComponent  implements OnInit {
  @Input() schedule:IWorkoutScheduleModel;
  constructor(private store:Store) { }

  ngOnInit() {}

  editSchedule() {
    this.store.dispatch(new UpdateWorkoutSchedule(this.schedule))
  }
}
