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
  ratio:Number = 1;

  constructor(private store: Store, private nav:NavController, 
    private actionSheetCtrl: ActionSheetController, 
    private firestore: AngularFirestore, 
    private navCtrl: NavController) { }

  ngOnInit() {
    if(!this.isCompleted()) {
      this. fraction();
      this.counter();
    }
  }

  async viewSchedule() {
    this.isSlideShow=!this.isSlideShow;
    this.fraction();
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
          return `you have ${minutes} minutes left`;
        return `you have ${hoursLeft} hours left`;
      }
      else if(daysLeft==1) {
        return `your have ${daysLeft} day left`;
      }
      return `your have ${daysLeft} days left`;
    }

    if(this.inSession()) {
      return "Session started";
    }
    return "schedule overdue";
  }

  inSession() {
    const completeAt = this.schedule.completeAt!.toDate().getTime();
    const scheduledTime = new Date(`${this.schedule.date}T${this.schedule.time}`).getTime();
    const now = new Date().getTime();
    
    if(now >= scheduledTime && now < completeAt) {
      return true;
    }
    return false;
  }

  isCompleted() {
    if(this.schedule.status == "completed")
      return true;
    return false;
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

  fraction() {
    const createdAt = this.schedule.createdAt!.toDate()
    const currentTime = new Date().getTime();
    const timeDiff =  currentTime-createdAt.getTime();
    const targetTime = new Date(`${this.schedule.date}T${this.schedule.time}`).getTime();
    const createdTime = createdAt.getTime();
    const diff = targetTime - createdTime;
    if(timeDiff/diff > 1){
      this.ratio = 1;
      if(this.inSession()) {
        if(this.schedule.status != "inSession") {
          this.schedule.status = "inSession";
          this.store.dispatch(new UpdateWorkoutSchedule(this.schedule));
        }
      }else if(this.schedule.status != "completed") {
        this.schedule.status = "completed";
        this.store.dispatch(new UpdateWorkoutSchedule(this.schedule))
      }
    }
    this.ratio = timeDiff/diff;
  }

  counter() {
    setInterval(()=>{
      this.fraction()
    },1000*60)
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

  join() {
    this.schedule.joined = true;
    this.store.dispatch(new UpdateWorkoutSchedule(this.schedule))
  }

  joined() {
    return  this.schedule.joined;
  }
}
