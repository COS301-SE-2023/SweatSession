import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { Observable, tap } from 'rxjs';
import { GetWorkoutSchedules } from 'src/app/actions';
import { IWorkoutScheduleModel } from 'src/app/models';
import { IBadges } from 'src/app/models/badges.model';
import { PointsApi, WorkoutSchedulingState } from 'src/app/states';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  
  sessionsCompleted: Number = 0;
  constructor(private store:Store, private pointsApi: PointsApi) { }

  ngOnInit(){
    this.getSessionsAttended()
  }

  getSessionsAttended() {
    this.pointsApi.points$().pipe(
      tap((response)=>{
        this.sessionsCompleted = response.workoutSessionsAttended ? response.workoutSessionsAttended : 0;
      })
    ).subscribe();
  }
}
