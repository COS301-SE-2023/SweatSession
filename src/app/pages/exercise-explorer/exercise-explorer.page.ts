import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewExercisesComponent } from './view-exercises/view-exercises.component';

@Component({
  selector: 'app-exercise-explorer',
  templateUrl: './exercise-explorer.page.html',
  styleUrls: ['./exercise-explorer.page.scss'],
})
export class ExerciseExplorerPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async openExerciseModal() {
    const modal = await this.modalController.create({
      component: ViewExercisesComponent, // Replace LocationModalPage with the name of your modal component
    });
    await modal.present();
  
    // Handle the location selection event when the modal is dismissed
    const { data } = await modal.onDidDismiss();
  }

}
