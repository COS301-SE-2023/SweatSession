import { Component, OnInit } from '@angular/core';
import {IAddGOAL, IGOAL} from 'src/app/models/fitnessgoals.model';
import { IGOALS } from 'src/app/models/fitnessgoals.model';
import {FormControl, FormGroup} from "@angular/forms";
import {Selector, Store} from "@ngxs/store";
import {AddGoalAction} from "../../../actions/fitnessgoals/fitnessgoals.action";
import {FitnessgoalState} from "../../../states/fitnessgoal/fitnessgoal.state";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";
import {Observable} from "rxjs";
import { goalsRepository } from 'src/app/repository';

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
        goals: [
            {
                            id: "1",
                            name: "Lose Weight",
                            description: "Lose 10 pounds in 2 months",
                            coverPicture: "https://loremflickr.com/320/240",
                            start: "2020-01-01",
                            end: "2020-03-01",
                            progress: 0.5,
                            days_left: 60,
            },
            {
                            id: "2",
                            name: "Gain Weight",
                            description: "Gain 10 pounds in 2 months",
                            coverPicture: "https://loremflickr.com/320/240/gym",
                            start: "2020-01-01",
                            end: "2020-03-01",
                            progress: 0.5,
                            days_left: 60,
            }
    ]
    }

  constructor(private store:Store) { }

  ngOnInit() {

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

        const new_goal:IGOAL = {
            id : "0",
            name : this.goalForm.value.name ?? "",
            description : this.goalForm.value.description ?? "",
            coverPicture : this.goalForm.value.coverPicture ?? "",
            start : this.goalForm.value.start ?? "",
            end : this.goalForm.value.end ?? "",
            progress : this.goalForm.value.progress ?? 0, //TODO: will need to fix these
            days_left : this.goalForm.value.days_left ?? 0,
        }

        this.store.dispatch(new AddGoalAction(new_goal));
        console.log(this.goalForm.value);
    }
    protected readonly AudioBuffer = AudioBuffer;
}





