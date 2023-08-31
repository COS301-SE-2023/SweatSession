import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExerciseList } from 'src/app/models/exercise.model';

@Component({
  selector: 'app-view-exercises',
  templateUrl: './view-exercises.component.html',
  styleUrls: ['./view-exercises.component.scss'],
})
export class ViewExercisesComponent  implements OnInit {

  ExerciseDetails: ExerciseList = {

      MuscleGroup: "",
      videoUrls:
        [
            {
                id: "",
                url: "",
                exersiseName: "",
                exerciseDescription: "",
                type: ""
            }
        ]
  };

  constructor(private modalController: ModalController) { }

  ngOnInit() {

  }

  populateExerciseDetails(MuscleGroup: string) {

      //Fetch data frm the API and populate the ExerciseDetails object
    this.ExerciseDetails.MuscleGroup = MuscleGroup;

    this.ExerciseDetails.description = "This is a description of the exercise";
    this.ExerciseDetails.name = "Breathe Air";
    this.ExerciseDetails.videoUrls = [
                                      "../../../../assets/BreatheAir.mp4",
                                      "../../../../assets/BreatheAir.mp4",
                                    ];
  }

  getExerciseDetails() {
      this.populateExerciseDetails("Chest");
      return this.ExerciseDetails;
  }

  dismissModal() {
      this.modalController.dismiss();
  }
}
