import { Component, OnInit } from '@angular/core';
import {MUSCLE_GROUP_DATA} from "../../../models/muscleGroup.model";
import {ExerciseList} from "../../../models/exercise.model";
import {InstructionModalComponent} from "../instruction-modal/instruction-modal.component";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-view-exercise',
  templateUrl: './view-exercise.component.html',
  styleUrls: ['./view-exercise.component.scss'],
})
export class ViewExerciseComponent  implements OnInit {

  receivedBodypart: string;
  ExerciseDetails: ExerciseList[] = [];

  constructor(private modalController: ModalController,)
  { }

  ngOnInit() {
    this.populateExerciseDetails();
  }

  populateExerciseDetails() {
    for (let i = 0; i < Object.keys(MUSCLE_GROUP_DATA).length; i++) {
      if (Object.keys(MUSCLE_GROUP_DATA)[i] == this.receivedBodypart) {
        for (let j = 0; j < Object.keys(MUSCLE_GROUP_DATA)[i].length; j++) {

          const mock1: ExerciseList = {
            MuscleGroup: Object.keys(MUSCLE_GROUP_DATA)[i][j],
            video:
                {
                  id: "1",
                  url: Object.values(MUSCLE_GROUP_DATA)[i][j].url,
                  exersiseName: Object.values(MUSCLE_GROUP_DATA)[i][j].exerciseName,
                  difficulty: Object.values(MUSCLE_GROUP_DATA)[i][j].difficulty,
                  instructions: Object.values(MUSCLE_GROUP_DATA)[i][j].instructions,
                }
          };

          this.ExerciseDetails.push(mock1);
        }
      }
    }
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
