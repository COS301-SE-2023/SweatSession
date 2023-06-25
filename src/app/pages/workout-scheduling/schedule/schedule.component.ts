import { Component, Input, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { PopoutScheduleComponent } from '../popout-schedule/popout-schedule.component';
import { Time } from '@angular/common';
import { IWorkoutScheduleModel } from 'src/app/models';
import { UpdateWorkoutAdded } from 'src/app/actions/workoutSchedule.action';
import { Select, Store } from '@ngxs/store';
import { WorkoutSchedulingState } from 'src/app/states';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { LoadSchedule, RemoveWorkoutSchedule } from 'src/app/actions';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'workout-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent  implements OnInit {
  @Input() schedules: IWorkoutScheduleModel[]=[];
  @Input() categoryName:string;
  private firestoreSubscription: Subscription;
  @Select(WorkoutSchedulingState.returnSchedule) schedule$!: Observable<IWorkoutScheduleModel>; 
  constructor(private popoverController: PopoverController, private firestore: AngularFirestore, private store:Store, private alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
    this.firestoreSubscription = this.firestore
      .collection('schedules')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as IWorkoutScheduleModel;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      )
      .subscribe((schedules: IWorkoutScheduleModel[]) => {
        this.schedules = schedules;
      });
  }
  

  ngOnDestroy() {
    this.firestoreSubscription.unsubscribe();
  }
  

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

  async viewSchedule(schedule: IWorkoutScheduleModel) {
    this.loadSchedule(schedule);
    const popover = await this.popoverController.create({
      component: PopoutScheduleComponent,
      translucent: true
    });
    return await popover.present();
  }

  loadSchedule(schedule: IWorkoutScheduleModel) {
    this.store.dispatch(new LoadSchedule(schedule));
  }

  removeSchedule(schedule: IWorkoutScheduleModel) {
    this.store.dispatch(new RemoveWorkoutSchedule(schedule))
  }
}
