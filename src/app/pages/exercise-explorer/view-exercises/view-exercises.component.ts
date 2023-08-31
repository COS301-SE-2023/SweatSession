import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExerciseList } from 'src/app/models/exercise.model';

@Component({
  selector: 'app-view-exercises',
  templateUrl: './view-exercises.component.html',
  styleUrls: ['./view-exercises.component.scss'],
})
export class ViewExercisesComponent  implements OnInit {

  ExerciseDetails: ExerciseList;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
      console.log("ViewExercisesComponent.ngOnInit()");
      this.populateExerciseDetails("Bicept");
  }

  populateExerciseDetails(MuscleGroup: string) {

    this.ExerciseDetails.name = MuscleGroup;
    this.ExerciseDetails.videoUrls = ["https://www.youtube.com/watch?v=2yjwXTZQDDI",
                                      "https://www.youtube.com/watch?v=2yjwXTZQDDI",
                                      "https://www.youtube.com/watch?v=2yjwXTZQDDI"];
  }
  dismissModal() {
    this.modalController.dismiss();
 }
}
