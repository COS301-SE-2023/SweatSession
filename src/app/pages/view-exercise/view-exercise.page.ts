import {Component, Input, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExerciseList } from 'src/app/models/exercise.model';
import { InstructionModalComponent } from '../exercise-explorer/instruction-modal/instruction-modal.component'
import {MUSCLE_GROUP_DATA, MuscleGroup} from "../../models/muscleGroup.model";


@Component({
  selector: 'app-view-exercise',
  templateUrl: './view-exercise.page.html',
  styleUrls: ['./view-exercise.page.scss'],
})

export class ViewExercisePage  implements OnInit {

  bodypart: string;

  ExerciseDetails: ExerciseList[] = [];

  constructor(private modalController: ModalController,
  ) { }

  ngOnInit() {

    this.bodypart = window.location.href.split("=")[1];
    this.populateExerciseDetails();
  }

  populateExerciseDetails() {
    //Fetch data frm the API and populate the ExerciseDetails object


    for (let i = 0; i < Object.keys(MUSCLE_GROUP_DATA).length; i++)
    {
      console.log("This: " + Object.keys(MUSCLE_GROUP_DATA)[i] + " == " + this.bodypart);
      if (Object.keys(MUSCLE_GROUP_DATA)[i] == this.bodypart)
      {
        console.log("I got here Bruhh");
        for (let j = 0; j < Object.keys(MUSCLE_GROUP_DATA)[i].length; j++)
        {

          const mock1 :  ExerciseList = {
            MuscleGroup: Object.keys(MUSCLE_GROUP_DATA)[i][j],
            video:
                {
                  id: "1",
                  url:Object.values(MUSCLE_GROUP_DATA)[i][j].url,
                  exersiseName: Object.values(MUSCLE_GROUP_DATA)[i][j].exerciseName,
                    difficulty: Object.values(MUSCLE_GROUP_DATA)[i][j].difficulty,
                  instructions : Object.values(MUSCLE_GROUP_DATA)[i][j].instructions,
                }

          };

          this.ExerciseDetails.push(mock1);
        }
      }
    }



  }

  getExerciseDetails() {
    return this.ExerciseDetails;
  }

  async openModal(ExerciseTuple:ExerciseList) {

    const modal = await this.modalController.create({
      component: InstructionModalComponent,
      componentProps: {

        Exersisedata: ExerciseTuple,
      },
    });
    return await modal.present();
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
