import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-points',
  templateUrl: './points.page.html',
  styleUrls: ['./points.page.scss'],
})
export class PointsPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {

  }

  async showWorkoutPlanPopup() {
    const alert = await this.alertController.create({
      header: 'Congratulations!',
      message: 'You earned 50 points for completing your workout plan.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async showGymSchedulePopup() {
    const alert = await this.alertController.create({
      header: 'Congratulations!',
      message: 'You earned 75 points for attending 3 workout sessions.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async showFitnessGoalPopup() {
    const alert = await this.alertController.create({
      header: 'Congratulations!',
      message: 'You earned 100 points for completing your fitness goal.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
