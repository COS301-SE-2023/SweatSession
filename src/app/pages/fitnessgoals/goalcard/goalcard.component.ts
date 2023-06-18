import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goalcard',
  templateUrl: './goalcard.component.html',
  styleUrls: ['./goalcard.component.scss'],
})
export class GoalcardComponent  implements OnInit {
    goal =
        {
          name: "200 Push-ups per day"
        }

  constructor() { }

  ngOnInit() {}

  viewSchedule() {

  }

  viewGoal() {

  }

  removeGoal() {

  }
}
