import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { getAuth } from 'firebase/auth';
import { Timestamp } from 'firebase/firestore';
import { AddWorkoutSchedule } from 'src/app/actions';
import { IWorkoutScheduleModel } from 'src/app/models';
import { Profile } from 'src/app/models/notice.model';
import { LocationRepository } from 'src/app/repository/location.repository';
import { NoticeService } from 'src/app/services/notifications/notice.service';
import { GymsearchComponent } from '../../search/gymsearch/gymsearch.component';

@Component({
  selector: 'add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.scss'],
})
export class AddScheduleComponent  implements OnInit {
  schedule:IWorkoutScheduleModel={};
  placeId: string;
  auth = getAuth();
  currUserId = this.auth.currentUser?.uid;
  profileList: Profile[];
  currusername: string;
  profileurl: string;
  sweatsessionurl: string ;
  day : string ;
  daynum : number ;
  date : string ;
  shortdate : string[] ;
  duration: number;

  constructor(private popoverController: PopoverController, private store: Store, private modalController: ModalController, private locationRepository: LocationRepository, private noticeService: NoticeService) { }

  ngOnInit() {
    this.displayCurrentUser(this.currUserId!);
    this.duration = 10;
  }

  closePopup() {
    this.popoverController.dismiss();
  }

  addSchedule() {
    this.setFields();
    this.store.dispatch(new AddWorkoutSchedule(this.schedule));
    // this.store.dispatch(new AddGymSessionLocation(this.placeId));
    // this.store.dispatch(new AddWorkoutSchedule(this.placeId));
    this.locationRepository.addGymSession(this.placeId, this.schedule.date!, this.schedule.time!, this.schedule.completeAt!, this.schedule.name!, this.schedule.location!);
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    this.daynum = new Date().getDay() ;
    this.day = weekday[this.daynum];
    this.date = new Date().toTimeString() ;
    this.shortdate = this.date.split(':' , 2);
   this.createNotifications("SWEATSESSION" , this.day + ' ' +this.shortdate[0] + ':' + this.shortdate[1] + ' ' , "LETS-GO!! Your workout has been scheduled at " + this.schedule.location )  ;
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
    this.schedule.sweatbuddies = [];
    this.schedule.sweatbuddiesJoinRequest = [];
    this.schedule.filledExerciseList = false;
  }

  isValidInput() {
    const { name, location, duration, time, date, } = this.schedule;

    if ( name && location && duration && time && date && this.isDateTimeValid() && this.IsvalidDuration())
    {
      return true;
    }

    return false;
  }

  async openLocationModal() {
    const modal = await this.modalController.create({
      component: GymsearchComponent, // Replace LocationModalPage with the name of your modal component
    });
    await modal.present();
  
    // Handle the location selection event when the modal is dismissed
    const { data } = await modal.onDidDismiss();
    console.log(data);
    if (data && data.selectedGym && data.placeId) {
      this.schedule.location = data.selectedGym;
      this.placeId = data.placeId;
      if (data.selectedTime!=""){
        this.schedule.time = data.selectedTime;
      }
      if (data.selectedWorkoutName!=""){
        this.schedule.name = data.selectedWorkoutName;
      }
      if (data.selectedDate!=""){
        this.schedule.date = data.selectedDate;
      }
      if (data.selectedDuration!=""){
        const selectedStartDate = new Date(data.selectedDate+"T"+data.selectedTime+":00");
        console.log(selectedStartDate);
        const selectedEndDate = new Date(data.selectedDuration.seconds * 1000);
        console.log(selectedEndDate);
        const timeDifference = selectedEndDate.getTime() - selectedStartDate.getTime();
        console.log(timeDifference);
        const minutes = Math.floor(timeDifference / (1000 * 60)); // 1 minute = 60,000 milliseconds
        console.log(minutes);
        this.schedule.duration = minutes;
      }
    }
  }

  displayCurrentUser(id:string){
    this.noticeService.getTheNoticeProfile().subscribe((profiles: Profile[]) => {
    this.profileList = profiles;
    for(let i = 0 ; i<this.profileList.length ; i++){
      if(this.profileList[i].id == this.currUserId ){
        this.currusername = this.profileList[i].displayName! ;
        this.profileurl = this.profileList[i].profileURL! ;
        this.sweatsessionurl = "SweatSession/src/assets/Asset 3.png"
      }
    }});
  }

  createNotifications(sendername: string , sentdate: string , message: string){
    this.noticeService.createNotices(sendername , sentdate , message , this.currUserId! , this.currUserId! , '/assets/Asset 3.png');
  }

  IsvalidDuration() {
    if(this.schedule.duration! < 1)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  valueChanged(event: any) {
    const newTimeValue = event.detail.value;
    // this.isValidInput();
    console.log(newTimeValue);
  }
}
