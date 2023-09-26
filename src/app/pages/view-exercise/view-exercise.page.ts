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

  @Input() bodypart: string;

  ExerciseDetails: ExerciseList[] = [];

  constructor(private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.populateExerciseDetails();
  }

  populateExerciseDetails() {
    //Fetch data frm the API and populate the ExerciseDetails object

    for (let i = 0; i < Object.keys(MUSCLE_GROUP_DATA).length; i++)
    {
      if (Object.keys(MUSCLE_GROUP_DATA)[i] == this.bodypart)
      {
        for (let j = 0; j < Object.keys(MUSCLE_GROUP_DATA)[i].length; j++)
        {
          const mock1 :  ExerciseList = {
            MuscleGroup: Object.keys(MUSCLE_GROUP_DATA)[i][j],
            video:
                {
                  id: "1",
                  url:"ss",
                  exersiseName: "Breathe Air",
                  exerciseDescription: "This is a description of the exercise",
                  instructions: [" Do this", "Do that", "Do this other thing"]
                  // url: Object.keys(MUSCLE_GROUP_DATA)[i][j].url,
                  // exersiseName: Object.keys(MUSCLE_GROUP_DATA)[i][j].name,
                  // exerciseDescription: Object.keys(MUSCLE_GROUP_DATA)[i][j].description,
                  // instructions: Object.keys(MUSCLE_GROUP_DATA)[i][j].instructions
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
