import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetOtheruserSchedules, LoadSchedule } from 'src/app/actions';
import { IWorkoutScheduleModel } from 'src/app/models';
import { OtheruserState } from 'src/app/states';

@Component({
  selector: 'otheruser-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss'],
})
export class SchedulesComponent  implements OnInit {
  schedules: IWorkoutScheduleModel[] = [];
  isSlideShow = false;
  @Select(OtheruserState.returnOtherUserSchedules) schedules$!: Observable<IWorkoutScheduleModel[]>;

  constructor(private popoverController: PopoverController, private store:Store) { }
  
  ngOnInit() {
    this. displayWorkoutSchedules();
  }

  loadSchedule(schedule: IWorkoutScheduleModel) {
    this.store.dispatch(new LoadSchedule(schedule));
  }

  
  displayWorkoutSchedules() {
    this.store.dispatch( new GetOtheruserSchedules())
    this.schedules$.subscribe((response)=>{
      this.schedules = response;
    })
  }
}
