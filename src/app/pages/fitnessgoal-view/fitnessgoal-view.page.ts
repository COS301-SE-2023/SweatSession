import { Component, OnInit } from '@angular/core';
import {FitnessgoalService, NavigationService} from "../../services";
import {forEach} from "@angular-devkit/schematics";
import {ITASK,IGOAL} from "../../models";
import { AuthApi } from 'src/app/states/auth/auth.api';
import {getAuth} from "@angular/fire/auth";
import { getCurrentUserId } from 'src/app/actions';
import { Router } from '@angular/router';
import { NoticeService } from 'src/app/services/notifications/notice.service';


@Component({
  selector: 'app-fitnessgoal-view',
  templateUrl: './fitnessgoal-view.page.html',
  styleUrls: ['./fitnessgoal-view.page.scss'],
})
export class FitnessgoalViewPage implements OnInit {

  goalName: string;
  goalId: string;
  goalDesc: string;
  goaldays: number;
  GOAL: IGOAL = {};
  currUserId: string | undefined = undefined;
  day : string ;
  daynum : number ;
  date : string ;
  shortdate : string[] ;

  constructor(private fitnessgaolservive: FitnessgoalService,
              private authApi: AuthApi,
              private router:Router,
              private navigate: NavigationService,
              private noticeService: NoticeService) {}

  getGoal()
  {
    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;

    if (this.currUserId!=undefined)
    {
      sessionStorage.setItem('currUserId', this.currUserId);
    }
    else
    {
      this.currUserId = sessionStorage.getItem('currUserId') ?? "";
    }

    this.fitnessgaolservive.getGoal(this.goalId).subscribe((data) => {
          this.goalName = data.goal.name!;
          this.goalDesc = data.goal.description!;
          this.GOAL = data.goal;
          console.table(this.GOAL);
    });
  }

  getUserid() {
    
    return  this.authApi.getCurrentUserId();
  }

 
  
  setgoalid(id: string)
  {
    this.goalId = id;
  }

  async saveGoal() {
    const updatedTasks: ITASK[] = [];

    this.navigate.back(); // return to the previous page on save

    // Update the tasks and collect the updated ones
    for (const task of this.GOAL.Tasks!) {
      if (task.done) {
        await this.fitnessgaolservive.updateTask(task, this.goalId);
        updatedTasks.push(task);
       
      }
    }
  
    // Mark the tasks as done after updating
    for (const task of updatedTasks) {
      task.done = true;
    }

    const lasttask = updatedTasks[updatedTasks.length - 1] ;
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    this.daynum = new Date().getDay() ;
    this.day = weekday[this.daynum];
    this.date = new Date().toTimeString() ;
    this.shortdate = this.date.split(':' , 2);
    this.createNotifications("SWEATSESSION" , this.day + ' ' +this.shortdate[0] + ':' + this.shortdate[1] + ' ' , "Keep Going!, Task: " + lasttask.content + " of Goal: "+ this.GOAL.name + " is now Complete! " )  ;


  }
  
  

  cancel() {
    this.navigate.back();
  }
  
  ngOnInit() {
    this.getGoal();
  }

  createNotifications(sendername: string , sentdate: string , message: string){
    this.noticeService.createNotices(sendername , sentdate , message , this.currUserId! , this.currUserId! , '/assets/Asset 5.png');
  }

}
