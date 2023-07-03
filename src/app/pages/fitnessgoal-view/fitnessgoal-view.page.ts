import { Component, OnInit } from '@angular/core';
import {FitnessgoalService} from "../../services";
import {forEach} from "@angular-devkit/schematics";
import {ITASK} from "../../models";
import { AuthApi } from 'src/app/states/auth/auth.api';
import {getAuth} from "@angular/fire/auth";
import { getCurrentUserId } from 'src/app/actions';

@Component({
  selector: 'app-fitnessgoal-view',
  templateUrl: './fitnessgoal-view.page.html',
  styleUrls: ['./fitnessgoal-view.page.scss'],
})
export class FitnessgoalViewPage implements OnInit {

  goalName: string;
  goalId: string;
  tasks: ITASK[] = [];
  currUserId: string | undefined = undefined;
  constructor(private fitnessgaolservive: FitnessgoalService,
              private authApi: AuthApi,
              )
  {

  }

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

    this.fitnessgaolservive.getGoals(this.currUserId).subscribe((data) => {
      data.goals.forEach((goal) => {
        if (goal.id == this.goalId)
        {
          this.goalName = goal.name!;
          this.fitnessgaolservive.getTasks(this.currUserId, goal.id!).subscribe((data) => {
            data.tasks.forEach((task) => {
              this.tasks.push(task);
            });
          }
            );
        }

        });
    });
  }

  getUserid() {
    return  this.authApi.getCurrentUserId();
  }

  onSegmentChange() {
  }
  
  setgoalid(id: string)
  {
    this.goalId = id;
  }

  saveGoal() {
    //remove the done or checked tasks
    const tobedel : ITASK[] = [];

    this.tasks.forEach((task, index) => {
        if (task.done == true)
        {
            tobedel.push(task);
        }
    });

    //save the tasks
    if (this.currUserId!=undefined)
    {
      sessionStorage.setItem('currUserId', this.currUserId);
    }
    else
    {
      this.currUserId = sessionStorage.getItem('currUserId') ?? "";
    }

   //delete these tasks
    tobedel.forEach((task, index) => {
      this.fitnessgaolservive.deleteTask(this.currUserId!, this.goalId, task.content);
    });

  }

  cancel() {
    // Handle the cancel functionality
    // You can navigate back to the previous page or perform any other necessary actions
  }
  ngOnInit() {
    this.getGoal();
  }

}
