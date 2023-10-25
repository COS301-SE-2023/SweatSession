import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Store } from '@ngxs/store';
import { getAuth } from 'firebase/auth';
import { tap } from 'rxjs';
import { IGetWorkoutSchedules, IGotWorkoutSchedules, IProfileModel } from 'src/app/models';
import { NoticeService } from 'src/app/services/notifications/notice.service';
import { WorkoutscheduleService } from 'src/app/services/workoutschedule/workoutschedule.service';
import { PointsApi } from 'src/app/states';
import { register } from 'swiper/element/bundle';

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
  day : string ;
  daynum : number ;
  date : string ;
  shortdate : string[] ;


  constructor(private store:Store,private firestore: AngularFirestore, private pointsApi: PointsApi, private workoutscheduleservice: WorkoutscheduleService, private noticeService: NoticeService) { 
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
        this.sessionsCompleted = response.sessionsCompleted ? response.sessionsCompleted : 0;
      })
    ).subscribe();
  }

  async getWorkoutScheduled(request: IGetWorkoutSchedules){
  (await this.workoutscheduleservice.getSchedules(request)).subscribe((workouts: IGotWorkoutSchedules) => {
    this.workoutlist = workouts;
    for(let i=0 ; i<this.workoutlist.schedules.length; i++){
      if(this.workoutlist.schedules[i].date?.toString() == this.getMinDate()){
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        this.daynum = new Date().getDay() ;
        this.day = weekday[this.daynum];
        this.date = new Date().toTimeString() ;
        this.shortdate = this.date.split(':' , 2);
        //this.createNotifications("SWEATSESSION" , this.day + ' ' +this.shortdate[0] + ':' + this.shortdate[1] + ' ' , "REMINDER!! You have a workout scheduled today at " + this.workoutlist.schedules[i].location )  ;
      }

    }
     
  });
}

 getMinDate(): string {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const currentDay = currentDate.getDate().toString().padStart(2, '0');

    return `${currentYear}-${currentMonth}-${currentDay}`;
  }

  createNotifications(sendername: string , sentdate: string , message: string){
    this.noticeService.createNotices(sendername , sentdate , message , this.currUserId! , this.currUserId! , '/assets/Asset 3.png');
  }



}
