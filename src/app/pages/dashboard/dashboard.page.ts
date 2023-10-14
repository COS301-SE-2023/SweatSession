import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { Observable, tap } from 'rxjs';
import { GetWorkoutSchedules } from 'src/app/actions';
import { IGetWorkoutSchedules } from 'src/app/models';
import { IGotWorkoutSchedules } from 'src/app/models';
import { IBadges } from 'src/app/models/badges.model';
import { PointsApi, WorkoutSchedulingState } from 'src/app/states';
import { register } from 'swiper/element/bundle';
import {WorkoutscheduleService} from 'src/app/services/workoutschedule/workoutschedule.service';
import { getAuth } from 'firebase/auth';

register();

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  
  sessionsCompleted: Number = 0;
  Flag: Boolean = false;
  workoutlist: IGotWorkoutSchedules;
  workoutlists: IGetWorkoutSchedules;
  auth = getAuth();
  currUserId = this.auth.currentUser?.uid;
  constructor(private store:Store, private pointsApi: PointsApi, private workoutscheduleservice: WorkoutscheduleService ) { 
    this.workoutlists = {
      userId: this.currUserId! // Replace 'yourUserIdHere' with the actual user ID.
    };
  }

  ngOnInit(){
    this.getSessionsAttended()
    if(!this.Flag){
      this.getWorkoutScheduled(this.workoutlists);
      this.Flag = true;

    }
  }

  getSessionsAttended() {
    this.pointsApi.points$().pipe(
      tap((response)=>{
        this.sessionsCompleted = response.workoutSessionsAttended ? response.workoutSessionsAttended : 0;
      })
    ).subscribe();
  }

  async getWorkoutScheduled(request: IGetWorkoutSchedules){
  (await this.workoutscheduleservice.getSchedules(request)).subscribe((workouts: IGotWorkoutSchedules) => {
    this.workoutlist = workouts;
    for(let i=0 ; i<this.workoutlist.schedules.length; i++){
      if(this.workoutlist.schedules[i].date == this.getMinDate()){
        console.log("today date");
      }

    }
    console.log(this.workoutlist);
    console.log(this.getMinDate());
  });
}

getMinDate(): Date {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  return new Date(currentYear, currentMonth, currentDay);
}






}
