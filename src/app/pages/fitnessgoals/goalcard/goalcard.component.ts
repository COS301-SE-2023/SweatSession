import { Component, OnInit } from '@angular/core';
import {IAddGOAL, IGOAL} from 'src/app/models/fitnessgoals.model';
import { IGOALS } from 'src/app/models/fitnessgoals.model';
import {FormControl, FormGroup} from "@angular/forms";
import {Selector, Store} from "@ngxs/store";
import {AddGoalAction} from "../../../actions/fitnessgoals/fitnessgoals.action";
import {FitnessgoalService} from "../../../services/fitnessgoal/goal.service";
import {getCurrentUserId} from "../../../actions";
import {AuthApi} from "../../../states/auth/auth.api";

@Component({
  selector: 'app-goalcard',
  templateUrl: './goalcard.component.html',
  styleUrls: ['./goalcard.component.scss'],
})


export class GoalcardComponent  implements OnInit {
    isHover: boolean = false;
    presentingElement = null;
    selectedEndDate: string = "";
    selectedStartDate: string = "";
    file: File | null = null;


    goalForm = new FormGroup({

        name: new FormControl(''),
        description: new FormControl(''),
        coverPicture: new FormControl('https://loremflickr.com/320/240'),
        start: new FormControl(''),
        end: new FormControl(''),
        progress: new FormControl(0),
        days_left: new FormControl(0),

    });

    goals: IGOALS = {
        goals: []
    }

  constructor(private store:Store,
              private fitnessgaolservive:FitnessgoalService,
              private authApi: AuthApi,
              )
              { }

  ngOnInit() {
    this.retrievegoals();
  }

  viewSchedule() {

  }

  viewGoal() {

  }

  removeGoal() {

  }
  calculate_Progress()
  {
        return 0.5;
  }
  addGoal() {

      //success toast
      // close the modal
    console.log("Add Goal");
  }

    selectFile()
    {
        document.getElementById('fileInput')?.click();
    }
    getDp() {
        return this.goalForm.value.coverPicture;
    }

    onFileSelected(event: any) {
        this.file = event.target.files[0];
        this.SaveFile();

    }
    SaveFile() {
        if (this.file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                this.goalForm.patchValue({ coverPicture: reader.result as string});
                // this. = reader.result as string;

            };
            reader.readAsDataURL(this.file);
        }

        console.log(this.goalForm.value.coverPicture);
    }
    onSubmit() {
        // set fields
       this.authApi.getCurrentUserId().then((id) => {

           const new_goal:IGOAL = {
               id : id,
               name : this.goalForm.value.name ?? "",
               description : this.goalForm.value.description ?? "",
               coverPicture : this.goalForm.value.coverPicture ?? "",
               start : this.goalForm.value.start ?? "",
               end : this.goalForm.value.end ?? "",
               progress : this.goalForm.value.progress ?? 0, //TODO: will need to fix these
               days_left : this.goalForm.value.days_left ?? 0,
           }

           const iaddgoal : IAddGOAL = {
               userId : id,
               goal : new_goal
            }
           this.fitnessgaolservive.addGoal(iaddgoal);
           // console.log(this.goalForm.value);

       });




    }

    private retrievegoals() {
        this.authApi.getCurrentUserId().then((id) => {
            if (typeof id === "string") {
                this.fitnessgaolservive.getGoals(id).subscribe((goals) => {
                    this.goals.goals = goals;
                });
            }
        }
        );
    }
}





