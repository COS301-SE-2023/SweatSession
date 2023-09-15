import {Component, OnInit, ViewChild} from '@angular/core';
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
import {convertChangeEventsToLogMessage} from "nx/src/daemon/server/watcher";
import {Time} from "@angular/common";
import { event } from 'firebase-functions/v1/analytics';

@Component({
  selector: 'app-goalcard',
  templateUrl: './goalcard.component.html',
  styleUrls: ['./goalcard.component.scss'],
})


export class GoalcardComponent  implements OnInit {

  currUserId: string | undefined = undefined;
  GOALS : IGOAL[] = [];
  selectedSegment: string = '0';
  @ViewChild('loaderContent') loaderContentTemplate: any;
  isLoading :boolean = false;



    constructor(private store: Store,
                private fitnessgaolservive: FitnessgoalService,
                private authApi: AuthApi,
                private fb: FormBuilder,
                private router: Router
    ) 
    {
        
    }

    ngOnInit(): void {
        this.getGoals();
    }

    getGoals()
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

        this.fitnessgaolservive.getGoals(this.currUserId).subscribe((data: { goals: IGOAL[]; }) => {
            //calculate days left
            
            this.GOALS = data.goals;
            this.isLoading = true;
          });
    }

    getDaysleft(goal: IGOAL)
    {
        const time :Time = {hours: 11, minutes: 59};

        const endday = new Date(`${goal.endDate}.${time.hours}:${time.minutes}`).getTime();
        const today = new Date().getTime();
        const diff = endday - today;
        const temp = Math.floor(diff / (1000 * 60 * 60 * 24));
        if(temp < 0)
        {
               return 0
        }else {
               return temp;
        }
    }



    getFilteredGoals()
    {
        if (this.selectedSegment === '0') {
            return this.GOALS.filter(goal => {
              if (goal.progress! < 100) {
                const time: Time = { hours: 11, minutes: 59 };
                const endDay = new Date(`${goal.endDate}.${time.hours}:${time.minutes}`).getTime();
                const today = new Date().getTime();
                const diff = endDay - today;
                const temp = Math.floor(diff / (1000 * 60 * 60 * 24));
                return temp > 0;
              }
              return false; 
            });
          }
          
        else if (this.selectedSegment === '1') 
        {
          return this.GOALS.filter(goal => goal.progress == 100); // Display completed goals
        } 
        else if (this.selectedSegment === '2') 
        {
            

          return this.GOALS.filter(goal => 
            
            {
                const time :Time = {hours: 11, minutes: 59};
                const endday = new Date(`${goal.endDate}.${time.hours}:${time.minutes}`).getTime();
                const today = new Date().getTime();
                const diff = endday - today;
                const temp = Math.floor(diff / (1000 * 60 * 60 * 24));
                if(temp <= 0)
                {
                    return true
                }
                else
                {
                    return false
                }
            }
            ); 
        }
        return this.GOALS;
    }
      
    removeGoal(goalid: string|undefined)
    {
        this.fitnessgaolservive.removeGoal(goalid!)
        //reload page
        //Todo: add a popup to confirm you want to delete the 
        // this.ngOnInit();
    }

    confirmDelete(id: string)
    {
        const alert = document.createElement('ion-alert');
        alert.header = 'Confirm';
        alert.message = 'Are you sure you want to delete this Goal?';
        alert.buttons = [
            {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                    this.router.navigate(['/goals']);
                }
            },
            {
                text: 'Confirm',
                handler: () => {
                    this.removeGoal(id);
                }
            }
        ];

        document.body.appendChild(alert);
        return alert.present();
    }

    viewGoal(goalid: string|undefined) {
        // setgoalid
        FitnessgoalViewPage.prototype.setgoalid(goalid!);
        this.router.navigate(['/fitnessgoal-view'])
    }

    
    onSegmentChange(event: any) {
        this.selectedSegment = event.detail.value;
    }
      

    isCompleted(goalname: IGOAL) {
        return true;
    }
}
