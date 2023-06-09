import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { Timestamp } from 'firebase/firestore';
import { AddWorkoutSchedule } from 'src/app/actions';
import { IWorkoutScheduleModel } from 'src/app/models';

@Component({
  selector: 'add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.scss'],
})
export class AddScheduleComponent  implements OnInit {
  schedule:IWorkoutScheduleModel={};

  constructor(private popoverController: PopoverController, private store: Store) { }

  ngOnInit() {}

  closePopup() {
    this.popoverController.dismiss();
  }

  addSchedule() {
    this.setFields();
    this.store.dispatch(new AddWorkoutSchedule(this.schedule));
  }

  isDateTimeValid(): boolean {
    const currentDate = new Date();
    const selectedDateTime = new Date(`${this.schedule.date}T${this.schedule.time}`);

    return selectedDateTime > currentDate;
  }

  getMinTime(): string {
    const currentDate = new Date();
    const currentHour = currentDate.getHours().toString().padStart(2, '0');
    const currentMinute = (currentDate.getMinutes()).toString().padStart(2, '0'); //time in ten minutes;

    return `${currentHour}:${currentMinute}`;
  }
  
  getMinDate(): string {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const currentDay = currentDate.getDate().toString().padStart(2, '0');

    return `${currentYear}-${currentMonth}-${currentDay}`;
  }

  setFields() {
    this.schedule.createdAt = Timestamp.fromDate(new Date());
    this.schedule.notified = false;
    let completeAt = new Date(`${this.schedule.date!}T${this.schedule.time!}`);
    completeAt.setMinutes(completeAt.getMinutes()+this.schedule.duration!);
    this.schedule.completeAt = Timestamp.fromDate(completeAt);
    let notifyAt = completeAt;
    notifyAt.setMinutes(notifyAt.getMinutes()-5);
    this.schedule.notifyAt = Timestamp.fromDate(notifyAt);
    this.schedule.status = "uncompleted";
    this.schedule.joined = false;
  }

  isValidInput() {
    const { name, location, duration, time, date, } = this.schedule;

    if ( name && location && duration && time && date && this.isDateTimeValid()) 
      return true;
    return false;
  }
}
