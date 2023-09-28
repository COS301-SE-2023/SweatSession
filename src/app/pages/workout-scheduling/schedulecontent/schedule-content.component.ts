import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController, ActionSheetController, ModalController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { Subscription, tap } from 'rxjs';
import { RemoveWorkoutSchedule, UpdateWorkoutAdded, UpdateWorkoutSchedule } from 'src/app/actions';
import { IProfileModel, IWorkoutScheduleModel } from 'src/app/models';
import { PointsRepository } from 'src/app/repository/points.repository';
import { getAuth } from '@angular/fire/auth';
import { NoticeService } from 'src/app/services/notifications/notice.service';
import { AlertController } from '@ionic/angular';
import { BadgesRepository } from 'src/app/repository';
import { FriendsListComponent } from '../friends-list/friends-list.component';
import { register } from 'swiper/element/bundle';
import { ExerciseService } from 'src/app/services';
import { Exercise } from 'src/app/models/exercise.model';

register();


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
  day : string ;
  daynum : number ;
  date : string ;
  shortdate : string[] ;
  @Input() id:string;
  selectedFriends:any[] = [];
  @Input() friends: IProfileModel[] = [];
  showOptions = false;
  exercises:  Exercise[]= [];
  completedExercises: Exercise[] = [];
  selectAll: boolean = false;
  count:any;

  constructor(private store: Store, private nav: NavController,
    private modalController: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private firestore: AngularFirestore,
    private navCtrl: NavController,
    private pointsRepository: PointsRepository , 
    private noticeService: NoticeService ,
    private alertController: AlertController,
    private badgesRepository: BadgesRepository,
    private exerciseService: ExerciseService) { }

  ngOnInit() {
    if (!sessionStorage.getItem('siteInit')) {
      this.sendReminder();
      sessionStorage.setItem('siteInit', 'true');

    }
    // if (!this.isCompleted()) {
    //   this.counter();
    // }
    // this.getExercises();
  }

  async viewSchedule() {
    this.isSlideShow = !this.isSlideShow;
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
    console.log(currentTime);
    console.log(targetTime);
    console.log(timeDiff);
    
    if (timeDiff > 0) {
     const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
     const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
     const minutes = Math.floor(timeDiff / (1000 * 60));     
    }

  }

  counter() {
    let l =setInterval(() => {
      this.fraction()
    }, 1000 * 10)
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
        return `You have ${daysLeft} day left`;
      }
      return `You have ${daysLeft} days left`;
    }

    if (this.inSession()) {
      return "Workout Session Has Begun";
    }

    if(this.isCompleted()) {
      return "completed";
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
    if (this.schedule.status === "completed") {
      return true;
    }
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
        if (this.schedule.status !== "inSession") {
          this.schedule.status = "inSession";
          this.store.dispatch(new UpdateWorkoutSchedule(this.schedule));
        }
      } else if (this.schedule.status !== "completed" && this.joined()) {
        this.schedule.status = "completed";
        this.store.dispatch(new UpdateWorkoutSchedule(this.schedule))
        this.count.t
      } else if(this.schedule.status !== "uncompleted" && !this.joined()) {
        this.schedule.status = "uncompleted";
        this.store.dispatch(new UpdateWorkoutSchedule(this.schedule))
        console.log("uncompleted");
      }
    }
    this.ratio = timeDiff / diff;
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
      this.badgesRepository.activeAdventurerBadge(this.currUserId, this.schedule.location!);
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

  confirmSelection() {

  }

  toogleOptions () {
    this.showOptions = !this.showOptions;
  }

  async openFriendSelectionModal() {
    const modal = await this.modalController.create({
      component: FriendsListComponent,
      componentProps: {
        friends: this.friends,
        schedule: this.schedule
      },
    });
  
    await modal.present();
  }

  getExercises() {
    this.exerciseService.getExerciseByScheduleId(this.schedule.id!).subscribe((exercises)=>{
      this.exercises = exercises
    })
  }

  toggleExerciseCompletion(exercise: Exercise) {
    const index = this.completedExercises.findIndex((completedExercise) => completedExercise.id === exercise.id);

    if (index !== -1) {
      this.completedExercises.splice(index, 1);
    } else {
      this.completedExercises.push(exercise);
    }
}

  isExerciseCompleted(exercise: Exercise): boolean {
    return exercise.completed;
  }

  submit() {
    if(!this.schedule.filledExerciseList) {
      this.completedExercises.forEach((exercise)=>{
        exercise.completed = true;
        this.exerciseService.updateExercise(exercise.id! , exercise)
        this.schedule.filledExerciseList = true;
        this.store.dispatch(new UpdateWorkoutSchedule(this.schedule))
      })

      const auth = getAuth();
      this.currUserId = auth.currentUser?.uid;
      if (this.currUserId != undefined) {
        sessionStorage.setItem('currUserId', this.currUserId);
      } else {
        this.currUserId = sessionStorage.getItem('currUserId')!;
      }
      this.pointsRepository.completeWorkoutPlanPoints(this.currUserId);
    }
  }

  toggleSelectAll() {
    if (this.selectAll) {
      this.completedExercises = this.exercises
    } else {
      this.completedExercises = [];
    }
  }
}
