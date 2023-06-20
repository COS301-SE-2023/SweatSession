import { Component, OnInit } from '@angular/core';

import { IGOAL } from 'src/app/models/fitnessgoals.model';
import {FormControl, FormGroup} from "@angular/forms";
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
        progress: new FormControl(''),
        days_left: new FormControl(''),

    });

    Goals: IGOAL[] =
        [
            {
                id: 1,
                name: "Lose Weight",
                description: "Lose 10 pounds in 2 months",
                coverPicture: "https://loremflickr.com/320/240",
                start: "2020-01-01",
                end: "2020-03-01",
                progress: 0.5,
                days_left: 60,
            }
            ,
            {
                id: 2,
                name: "Gain Weight",
                description: "Gain 10 pounds in 2 months",
                coverPicture: "https://loremflickr.com/320/240/gym",
                start: "2020-01-01",
                end: "2020-03-01",
                progress: 0.5,
                days_left: 60,
            },
        ];
  constructor() { }

  ngOnInit() {

  }

  viewSchedule() {

  }

  viewGoal() {

  }

  removeGoal() {

  }

  addGoal() {
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
        console.log(this.goalForm.value);
    }
    protected readonly AudioBuffer = AudioBuffer;
}





