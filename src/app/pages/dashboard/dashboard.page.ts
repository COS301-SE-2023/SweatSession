import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetWorkoutSchedules } from 'src/app/actions';
import { IWorkoutScheduleModel } from 'src/app/models';
import { WorkoutSchedulingState } from 'src/app/states';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @Select(WorkoutSchedulingState.returnSchedules) schedules$!: Observable<IWorkoutScheduleModel[]>;
  isAddSlide = false;
  schedules: IWorkoutScheduleModel[]=[];
  completed = 0;
  upcoming = 0;
  inSession = 0;
  load = true;
  constructor(private store:Store) { }

  ngOnInit(){
    this.displayWorkoutSchedule();
  }

  displayWorkoutSchedule(){
    this.store.dispatch(new GetWorkoutSchedules())
    this.schedules$.subscribe((response)=>{
      this.schedules = response;
    });
    this.load = false;
  }
}
