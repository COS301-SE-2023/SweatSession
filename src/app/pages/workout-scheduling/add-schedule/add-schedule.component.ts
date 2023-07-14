import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { Timestamp } from 'firebase/firestore';
import { AddWorkoutSchedule } from 'src/app/actions';
import { AddGymSessionLocation } from 'src/app/actions/location.actions';
import { IWorkoutScheduleModel } from 'src/app/models';
import { LocationRepository } from 'src/app/repository/location.repository';
import { GymsearchComponent } from '../../search/gymsearch/gymsearch.component';

@Component({
  selector: 'add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.scss'],
})
export class AddScheduleComponent  implements OnInit {
  schedule:IWorkoutScheduleModel={};
  placeId: string;

  constructor(private popoverController: PopoverController, private store: Store, private modalController: ModalController, private locationRepository: LocationRepository) { }

  ngOnInit() {}

  closePopup() {
    this.popoverController.dismiss();
  }

  addSchedule() {
    this.setFields();
    this.store.dispatch(new AddWorkoutSchedule(this.schedule));
    // this.store.dispatch(new AddGymSessionLocation(this.placeId));
    // this.store.dispatch(new AddWorkoutSchedule(this.placeId));
    this.locationRepository.addGymSession(this.placeId, this.schedule.date!, this.schedule.time!, this.schedule.completeAt!);
    console.log(this.schedule);
    console.log(this.placeId);
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

  async openLocationModal() {
    const modal = await this.modalController.create({
      component: GymsearchComponent, // Replace LocationModalPage with the name of your modal component
    });
    await modal.present();
  
    // Handle the location selection event when the modal is dismissed
    const { data } = await modal.onDidDismiss();
    if (data && data.selectedGym && data.placeId) {
      console.log(data);
      this.schedule.location = data.selectedGym;
      this.placeId = data.place_id;
    }
  }
}
