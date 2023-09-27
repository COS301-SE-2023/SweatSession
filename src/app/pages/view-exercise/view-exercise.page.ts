import {Component, Input, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExerciseList } from 'src/app/models/exercise.model';
import { InstructionModalComponent } from '../exercise-explorer/instruction-modal/instruction-modal.component'
import {MUSCLE_GROUP_DATA, MuscleGroup} from "../../models/muscleGroup.model";
import {ExerciseExplorerPage} from "../exercise-explorer/exercise-explorer.page";


@Component({
  selector: 'app-view-exercise',
  templateUrl: './view-exercise.page.html',
  styleUrls: ['./view-exercise.page.scss'],
})

export class ViewExercisePage  implements OnInit {

  receivedBodypart: string;

  ExerciseDetails: ExerciseList[] = [];

  constructor(private modalController: ModalController,
              private ExerciseExplorerPage: ExerciseExplorerPage
  ) { }

  ngOnInit() {

    this.ExerciseExplorerPage.bodypart$.subscribe((bodypart) => {
      this.receivedBodypart = bodypart;
    });
    this.populateExerciseDetails();
  }

  populateExerciseDetails() {
    //Fetch data frm the API and populate the ExerciseDetails object

    for (let i = 0; i < Object.keys(MUSCLE_GROUP_DATA).length; i++)
    {
      console.log("This: " + Object.keys(MUSCLE_GROUP_DATA)[i] + " == " + this.receivedBodypart);
      if (Object.keys(MUSCLE_GROUP_DATA)[i] == this.receivedBodypart)
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
