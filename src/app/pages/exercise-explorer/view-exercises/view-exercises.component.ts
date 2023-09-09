import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExerciseList } from 'src/app/models/exercise.model';
import { InstructionModalComponent } from '../instruction-modal/instruction-modal.component';


@Component({
  selector: 'app-view-exercises',
  templateUrl: './view-exercises.component.html',
  styleUrls: ['./view-exercises.component.scss'],
})
export class ViewExercisesComponent  implements OnInit {

  ExerciseDetails: ExerciseList[] = [];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
        this.populateExerciseDetails();
  }

  populateExerciseDetails() {
      //Fetch data frm the API and populate the ExerciseDetails object

      const APImusclegroup : string = "Chest";

      const mock1 :  ExerciseList = {
        MuscleGroup: APImusclegroup,
        video:
            {
                id: "1",
                url: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-bench-press-front.mp4#t=0.1",
                exersiseName: "Breathe Air",
                exerciseDescription: "This is a description of the exercise",
                instructions: [" Do this", "Do that", "Do this other thing"]
            }

      };

      const mock2 :  ExerciseList = {
        MuscleGroup: APImusclegroup,
        video:
            {
                id: "2",
                url: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-bench-press-front.mp4#t=0.1",
                exersiseName: "Breathe Air 2",
                exerciseDescription: "This is a description of the exercise",
                instructions: [" Do this", "Do that", "Do this other thing"]
            }
      }

      const mock3 :  ExerciseList = {
          MuscleGroup: APImusclegroup,
          video:
              {
                  id: "3",
                  url: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-bench-press-front.mp4#t=0.1",
                  exersiseName: "Breathe Air 3",
                  exerciseDescription: "This is a description of the exercise",
                  instructions: [" Do this", "Do that", "Do this other thing"]
              }
      }

      this.ExerciseDetails.push(mock1);
      this.ExerciseDetails.push(mock2);
      this.ExerciseDetails.push(mock3);

  }

  getExerciseDetails() {
      return this.ExerciseDetails;
  }

    async openModal(ExerciseTuple:ExerciseList) {

      // console.log("ExerciseTuple: " + ExerciseTuple.video.instructions[0]);
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
