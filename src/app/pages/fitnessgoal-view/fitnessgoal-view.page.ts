import { Component, OnInit } from '@angular/core';
import {FitnessgoalService} from "../../services";
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
  GOAL: IGOAL = {};
  currUserId: string | undefined = undefined;
  constructor(private fitnessgaolservive: FitnessgoalService,
              private authApi: AuthApi,
              private router:Router,
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

    this.fitnessgaolservive.getGoal(this.goalId).subscribe((data) => {
          this.goalName = data.goal.name!;
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

  saveGoal() {
    // remove the done or checked tasks
    this.GOAL.Tasks!.forEach((task) => {
      if (task.done == true)
      {
        this.fitnessgaolservive.updateTask(task,this.goalId);

      }
    }
    );
    //wait a sec

    setTimeout(() => {
    this.router.navigate(['/fitnessgoals']);}, 1000);

  }

  cancel() {
    // Handle the cancel functionality
    // You can navigate back to the previous page or perform any other necessary actions
  }
  ngOnInit() {
    this.getGoal();
  }

}
