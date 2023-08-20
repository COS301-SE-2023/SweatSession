import { Component, OnInit } from '@angular/core';
import { FitnessgoalState} from "../../states";
import { GoalcardComponent } from "../fitnessgoals/goalcard/goalcard.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-fitnessgoals',
  templateUrl: './fitnessgoals.page.html',
  styleUrls: ['./fitnessgoals.page.scss'],
})
export class FitnessgoalsPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {}

  addGoal() {
    this.router.navigate(['/goalview']);
  }
}
