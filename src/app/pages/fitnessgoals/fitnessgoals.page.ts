import { Component, OnInit } from '@angular/core';
import { getAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { IGOAL } from "../../models";
import { FitnessgoalService } from "../../services/fitnessgoal/goal.service";
import { GoalcardComponent } from "./goalcard/goalcard.component";

@Component({
  selector: 'app-fitnessgoals',
  templateUrl: './fitnessgoals.page.html',
  styleUrls: ['./fitnessgoals.page.scss'],
})
export class FitnessgoalsPage implements OnInit {

  currUserId: string | undefined = undefined;
  GOALS : IGOAL[] = [];
  constructor(private router: Router,
              private fitnessgaolservive: FitnessgoalService,
              private goalcardComponent:GoalcardComponent) { }

  ngOnInit() {
    this.CheckContent();
  }

  addGoal() {
    this.router.navigate(['/goalview']);
  }

  CheckContent() {
    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;

    if (this.currUserId!=undefined) {
      sessionStorage.setItem('currUserId', this.currUserId);
    } else {
      this.currUserId = sessionStorage.getItem('currUserId') ?? "";
    }

    this.fitnessgaolservive.getGoals(this.currUserId)
        .subscribe((data: { goals: IGOAL[]; }) =>
            {
                this.GOALS = data.goals;
            });

      this.goalcardComponent.selectedSegment
      if ( this.goalcardComponent.selectedSegment == '1') {

            console.log("this.goalcardComponent.selectedSegment == '1'");
            this.GOALS = this.GOALS.filter((goal) =>goal.progress == 100);
      }
  }
}