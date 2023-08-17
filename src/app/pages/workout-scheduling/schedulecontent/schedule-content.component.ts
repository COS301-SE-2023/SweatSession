import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController, ActionSheetController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { RemoveWorkoutSchedule, UpdateWorkoutAdded, UpdateWorkoutSchedule } from 'src/app/actions';
import { IWorkoutScheduleModel } from 'src/app/models';
import { PointsRepository } from 'src/app/repository/points.repository';
import { WorkoutSchedulingState } from 'src/app/states';
import { getAuth } from '@angular/fire/auth';
import { NoticeService } from 'src/app/services/notifications/notice.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'schedule-content',
  templateUrl: './schedule-content.component.html',
  styleUrls: ['./schedule-content.component.scss'],
})
export class ScheduleContentComponent implements OnInit {
  
  currUserId: string | undefined | null;
  private firestoreSubscription: Subscription;
  @Input() schedule!: IWorkoutScheduleModel;
  isSlideShow = false;
  isEditSlide = false;
  ratio: Number = 1;

  date : string ;
  shortdate : string[] ;

  constructor(private store: Store, private nav: NavController,
    private actionSheetCtrl: ActionSheetController,
    private firestore: AngularFirestore,
    private navCtrl: NavController,
    private pointsRepository: PointsRepository , 
    private noticeService: NoticeService ,
    private alertController: AlertController) { }

  ngOnInit() {
    if (!sessionStorage.getItem('siteInit')) {
      this.sendReminder();
      sessionStorage.setItem('siteInit', 'true');

    }
    if (!this.isCompleted()) {
      this.fraction();
      this.counter();
    }
  }

 

  async viewSchedule() {
    this.isSlideShow = !this.isSlideShow;
    this.fraction();
  }

  removeSchedule() {
    this.store.dispatch(new RemoveWorkoutSchedule(this.schedule))
  }

  viewExercises() {
    this.nav.navigateRoot("/workout-tracking");
  }

  toggleEditSlide() {
    this.isEditSlide = !this.isEditSlide;
  }

  async sendReminder(){
    console.log("sendreminder");
    const currentTime = new Date().getTime();
    const targetTime = new Date(`${this.schedule.date}T${this.schedule.time}`).getTime();
    const timeDiff = targetTime - currentTime;
    if (timeDiff > 0) {
     const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
     const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
     const minutes = Math.floor(timeDiff / (1000 * 60));
      
        if(timeDiff > 0){

          if(daysLeft < 1 ){
            if(hoursLeft >= 1){
              this.date = new Date().toTimeString() ;
              this.shortdate = this.date.split(':' , 2);
              this.createNotifications("SWEAT-SESSION" , this.shortdate[0] + ':' + this.shortdate[1] , "Your workout begins at " + this.schedule.location + " in " + hoursLeft + " hours")  ;

              
            }else{

              this.date = new Date().toTimeString() ;
              this.shortdate = this.date.split(':' , 2);
              this.createNotifications("SWEAT-SESSION" , this.shortdate[0] + ':' + this.shortdate[1] , "Your workout begins at " + this.schedule.location + "in " + minutes + " minutes")  ;

              
          }
          }
         
          
        }  

  }
}

  timeLeft() {
    const currentTime = new Date().getTime();
    const targetTime = new Date(`${this.schedule.date}T${this.schedule.time}`).getTime();
    const timeDiff = targetTime - currentTime;

    if (timeDiff > 0) {
      const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
      const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const minutes = Math.floor(timeDiff / (1000 * 60));
      const seconds = Math.floor(timeDiff / (1000));
      if(daysLeft<1){
        if(hoursLeft<1){
         
          return `You have ${minutes} minutes left`;
        }
        return `You have ${hoursLeft} hours left`;
       
      }
      else if (daysLeft == 1) {
        
        return `your have ${daysLeft} day left`;
      }
      return `your have ${daysLeft} days left`;
    }

    if (this.inSession()) {
      return "Workout Session Has Begun";
    }
    return "Workout Session Overdue";
  }

  inSession() {
    const completeAt = this.schedule.completeAt!.toDate().getTime();
    const scheduledTime = new Date(`${this.schedule.date}T${this.schedule.time}`).getTime();
    const now = new Date().getTime();

    if (now >= scheduledTime && now < completeAt) {
      return true;
    }
    return false;
  }

  isCompleted() {
    if (this.schedule.status == "completed")
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
          handler: () => this.removeSchedule()
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
    const timeDiff = currentTime - createdAt.getTime();
    const targetTime = new Date(`${this.schedule.date}T${this.schedule.time}`).getTime();
    const timeDiff2 = targetTime - currentTime;

    const createdTime = createdAt.getTime();
    const diff = targetTime - createdTime;
    if (timeDiff / diff > 1) {
      this.ratio = 1;
      if (this.inSession()) {
        if (this.schedule.status != "inSession") {
          this.schedule.status = "inSession";
          this.store.dispatch(new UpdateWorkoutSchedule(this.schedule));
        }
      } else if (this.schedule.status != "completed") {
        this.schedule.status = "completed";
        this.store.dispatch(new UpdateWorkoutSchedule(this.schedule))
      }
    }
    this.ratio = timeDiff / diff;
  }

  counter() {
    setInterval(() => {
      this.fraction()
    }, 1000 * 60)
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
    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;
    if (this.currUserId != undefined) {
      sessionStorage.setItem('currUserId', this.currUserId);
    } else {
      this.currUserId = sessionStorage.getItem('currUserId');
    }
    if (this.currUserId != undefined) {
      this.pointsRepository.workoutSessionPoints(this.currUserId);
    }
  }

  joined() {
    return this.schedule.joined;
  }

  createNotifications(sendername: string , sentdate: string , message: string){
    const auth = getAuth();
    this.currUserId = auth.currentUser?.uid;
    this.noticeService.createNotices(sendername , sentdate , message , this.currUserId! , this.currUserId! , '/assets/Asset 3.png');
  }



}
