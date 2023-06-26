import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController, ActionSheetController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { RemoveWorkoutSchedule, UpdateWorkoutAdded, UpdateWorkoutSchedule } from 'src/app/actions';
import { IWorkoutScheduleModel } from 'src/app/models';
import { WorkoutSchedulingState } from 'src/app/states';

@Component({
  selector: 'schedule-content',
  templateUrl: './schedule-content.component.html',
  styleUrls: ['./schedule-content.component.scss'],
})
export class ScheduleContentComponent  implements OnInit {
  private firestoreSubscription: Subscription;
  @Input() schedule!: IWorkoutScheduleModel;
  isSlideShow = false;
  isEditSlide = false;

  constructor(private store: Store, private nav:NavController, 
    private actionSheetCtrl: ActionSheetController, 
    private firestore: AngularFirestore, 
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  async viewSchedule() {
    this.isSlideShow=!this.isSlideShow;
  }

  removeSchedule() {
    this.store.dispatch(new RemoveWorkoutSchedule(this.schedule))
  }

  viewExercises () {
    this.nav.navigateRoot("/workout-tracking");
  }

  toggleEditSlide() {
    this.isEditSlide = !this.isEditSlide;
  }

  timeLeft() {
    const currentTime = new Date().getTime();
    const targetTime = new Date(`${this.schedule.date}T${this.schedule.time}`).getTime();
    const timeDiff = targetTime - currentTime;

    if(timeDiff>0){
      const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
      const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const minutes = Math.floor(timeDiff / (1000 * 60));
      if(daysLeft<1){
        if(hoursLeft<1)
          return `You have ${minutes} minutes left`;
        return `You have ${hoursLeft} hours left`;
      }
      return `You have ${daysLeft} days left`;
    }
    return "Schedule overdue";
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: `Are you sure you want to delete ${this.schedule.name}?`,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: ()=>this.removeSchedule()
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

  // fraction(schedule: IWorkoutScheduleModel) {
  //   console.table(schedule);
  //   console.log(schedule.createdAt);
  //   const now = new Date();
  //   console.log(now);
  //   // if (false) {
  //   //   const currentTime = new Date().getTime();
  //   //   const timeDiff = schedule.createdAt.getTime() - currentTime;
  //   //   const targetTime = new Date(`${schedule.date}T${schedule.time}`).getTime();
  //   //   const createdTime = schedule.createdAt!.getTime();
  //   //   const diff = targetTime - createdTime;
  //   //   console.log(timeDiff/diff)
  //   //   return timeDiff/diff;
  //   // }
  //   return 0.5;
  // }
  

  addWorkout(schedule: IWorkoutScheduleModel) {
    this.navCtrl.navigateForward('/workout-tracking', { state: { schedule } });
    schedule.workoutAdded = true;
    if (schedule.id) {
      const scheduleId: string = schedule.id;
      const scheduleRef = this.firestore.collection('schedules').doc(scheduleId);
      scheduleRef.update({ workoutAdded: true }).then(() => {
        this.store.dispatch(new UpdateWorkoutAdded({ id: scheduleId, workoutAdded: true }));
      }).catch((error) => {
        console.log('Error updating workoutAdded property:', error);
      });
    } else {
      console.log('Error: schedule.id is undefined');
    }
  }
  
  viewWorkout(schedule: IWorkoutScheduleModel) {
    this.navCtrl.navigateForward('/workout-tracking', { state: { schedule } });
  }
}
