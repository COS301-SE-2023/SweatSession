import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SubscribeToPoints } from 'src/app/actions/points.actions';
import { IPoints } from 'src/app/models/points.model';
import { PointsState } from 'src/app/states/points/points.state';

@Component({
  selector: 'app-points',
  templateUrl: './points.page.html',
  styleUrls: ['./points.page.scss'],
})
export class PointsPage implements OnInit {

  @Select(PointsState.points)
  points$!: Observable<IPoints | null>;
  
  @Select(PointsState.workoutSessionsAttended)
  workoutSessionsAttended$!: Observable<Number | null>;
  
  constructor(private alertController: AlertController, private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new SubscribeToPoints());
  }

  // get progressValue(): number {
  //   const workoutSessionsAttended = (await this.sessionsCompleted$.toPromise()) || 0;
  //   return workoutSessionsAttended / 3;
  // }

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
