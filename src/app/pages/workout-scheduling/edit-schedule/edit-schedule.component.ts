import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UpdateWorkoutSchedule } from 'src/app/actions';
import { IWorkoutScheduleModel } from 'src/app/models';
import { GymsearchComponent } from '../../search/gymsearch/gymsearch.component';
import { ModalController } from '@ionic/angular';
import { Timestamp } from 'firebase/firestore';
import { Exercise } from 'src/app/models/exercise.model';
import { ExerciseService } from 'src/app/services';

@Component({
  selector: 'edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.scss'],
})
export class EditScheduleComponent  implements OnInit {
  @Input() schedule:IWorkoutScheduleModel;
  @Input() exercises:  Exercise[] = [];
  isChange = false;
  placeId = null;
  constructor(private store:Store, 
              private modalController: ModalController,
              private exerciseService: ExerciseService
              // private cdr: ChangeDetectorRef
              ) { }

  ngOnInit() {}

  checkChange() {
    if(this.isDateTimeValid() && this.IsvalidDuration()) {
      this.isChange = true;
    } else {
      this.isChange = false;
    }
  }

  editSchedule() {
    let completeAt = new Date(`${this.schedule.date!}T${this.schedule.time!}`);
    let now = new Date();
    completeAt.setMinutes(completeAt.getMinutes()+this.schedule.duration!);
    this.schedule.completeAt = Timestamp.fromDate(completeAt);
    let notifyAt = completeAt;
    notifyAt.setMinutes(notifyAt.getMinutes()-5);
    this.schedule.notifyAt = Timestamp.fromDate(notifyAt);
    // if(completeAt > now ) {
    //   this.schedule.joined = false;
    //   this.schedule.filledExerciseList = false;
    // }
    this.schedule.joined = false;
    this.schedule.filledExerciseList = false;
    this.updateExercises();
    this.store.dispatch(new UpdateWorkoutSchedule(this.schedule))
  }

  async openLocationModal() {
    const modal = await this.modalController.create({
      component: GymsearchComponent, 
    });
    await modal.present();
  
    // Handle the location selection event when the modal is dismissed
    const { data } = await modal.onDidDismiss();
    if (data && data.selectedGym && data.placeId) {
      console.log(data);

      this.schedule.location=data.selectedGym
      this.placeId = data.placeId; 
    }
  }

  isDateTimeValid(): boolean {
    const currentDate = new Date();
    const selectedDateTime = new Date(`${this.schedule.date}T${this.schedule.time}`);

    return selectedDateTime > currentDate;
  }

  getMinTime(): string {
    const currentDate = new Date();
    const currentHour = currentDate.getHours().toString().padStart(2, '0');
    const currentMinute = (currentDate.getMinutes()).toString().padStart(2, '0');

    return `${currentHour}:${currentMinute}`;
  }
  
  getMinDate(): string {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const currentDay = currentDate.getDate().toString().padStart(2, '0');

    return `${currentYear}-${currentMonth}-${currentDay}`;
  }

  IsvalidDuration() {
    if(this.schedule.duration! < 10) {
      return false;
    }
    return true;
  }

  updateExercises() {
    this.exercises.forEach((exercise)=>{
      if(exercise.completed) {
        exercise.completed = false;
        this.exerciseService.updateExercise(exercise.id! , exercise)
      }
    })
  }
}
