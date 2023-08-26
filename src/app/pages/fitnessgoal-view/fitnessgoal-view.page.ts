import { Component, OnInit } from '@angular/core';
import {FitnessgoalService, NavigationService} from "../../services";
import {forEach} from "@angular-devkit/schematics";
import {ITASK,IGOAL} from "../../models";
import { AuthApi } from 'src/app/states/auth/auth.api';
import {getAuth} from "@angular/fire/auth";
import { getCurrentUserId } from 'src/app/actions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fitnessgoal-view',
  templateUrl: './fitnessgoal-view.page.html',
  styleUrls: ['./fitnessgoal-view.page.scss'],
})
export class FitnessgoalViewPage implements OnInit {

  goalName: string;
  goalId: string;
  goalDesc: string;
  GOAL: IGOAL = {};
  currUserId: string | undefined = undefined;
  constructor(private fitnessgaolservive: FitnessgoalService,
              private authApi: AuthApi,
              private router:Router,
              private navigate: NavigationService) {}

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
  
    this.navigate.back();
  }
  
  

  cancel() {
    this.navigate.back();
  }
  
  ngOnInit() {
    this.getGoal();
  }

}
