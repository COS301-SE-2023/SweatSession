import { Component, OnInit } from '@angular/core';
import {IAddGOAL, IGOAL} from 'src/app/models/fitnessgoals.model';
import { IGOALS } from 'src/app/models/fitnessgoals.model';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Selector, Store} from "@ngxs/store";
import {AddGoalAction} from "../../../actions/fitnessgoals/fitnessgoals.action";
import {FitnessgoalService} from "../../../services/fitnessgoal/goal.service";
import {AuthApi} from "../../../states/auth/auth.api";
import { Router } from '@angular/router';
import {getAuth} from "@angular/fire/auth";
import {FitnessgoalViewPageModule} from "../../fitnessgoal-view/fitnessgoal-view.module";
import {FitnessgoalViewPage} from "../../fitnessgoal-view/fitnessgoal-view.page";
import {today} from "ionicons/icons";
@Component({
  selector: 'app-goalcard',
  templateUrl: './goalcard.component.html',
  styleUrls: ['./goalcard.component.scss'],
})


export class GoalcardComponent  implements OnInit {
    constructor(private store: Store,
                private fitnessgaolservive: FitnessgoalService,
                private authApi: AuthApi,
                private fb: FormBuilder,
                private router: Router
    ) {

    }

    currUserId: string | undefined = undefined;

    goals: IGOALS = {goals: []}

    ngOnInit() {
        this.retrievegoals();
    }


    viewGoal(id: string) {
        this.router.navigate(['/fitnessgoal-view']);
        FitnessgoalViewPage.prototype.setgoalid(id);
    }

    removeGoal(name: string | undefined) {
        // this.goals.goals?.forEach((goal, index) => {
        //     if (goal.name == name) {
        //         this.goals.goals?.splice(index, 1);
        //     }
        // });

        const auth = getAuth();
        this.currUserId = auth.currentUser?.uid;

        if (this.currUserId != undefined) {
            sessionStorage.setItem('currUserId', this.currUserId);
        } else {
            this.currUserId = sessionStorage.getItem('currUserId') ?? "";
        }

        this.fitnessgaolservive.removeGoal(this.currUserId, name ?? "");

    }

    addGoal() {
        this.router.navigate(['/goalview']);
        console.log("Add Goal");
    }



    async retrievegoals() {
        const auth = getAuth();
        this.currUserId = auth.currentUser?.uid;

        if (this.currUserId != undefined) {
            sessionStorage.setItem('currUserId', this.currUserId);
        } else {
            this.currUserId = sessionStorage.getItem('currUserId') ?? "";
        }

        this.fitnessgaolservive.getGoals(this.currUserId).subscribe((GOALS) => {
            for (let goal2 of GOALS.goals) {
                this.fitnessgaolservive.getTasks(this.currUserId, goal2.id!).subscribe((data) => {
                    let count = 0;
                    let all = 0;

                    data.tasks.forEach((task) => {
                        if (task.done == true) {
                            count = count + 1;
                        }
                        all = all + 1;
                    });

                    let progress: number = count / all;
                    console.log(count, all, progress);
                    goal2.progress = progress;
                    goal2.days_left = goal2.duration;

                    if(goal2.progress != 1)
                    {
                        this.goals.goals?.push(goal2);
                    }

                });

            }
        });
    }




}
