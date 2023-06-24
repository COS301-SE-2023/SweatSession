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
  isChange = false;
  constructor(private store:Store) { }

  ngOnInit() {}

  checkChange() {
    this.isChange = true;
  }

  editSchedule() {
    this.store.dispatch(new UpdateWorkoutSchedule(this.schedule))
  }
}
