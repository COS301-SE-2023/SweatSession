import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { AddSweatBuddies, AddSweatBuddy } from 'src/app/actions';
import { IProfileModel, IWorkoutScheduleModel } from 'src/app/models';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss'],
})
export class FriendsListComponent implements OnInit {
  @Input() friends: any[] = [];
  @Input() schedule: IWorkoutScheduleModel;
  
  selectedFriends: string[] = [];
  constructor(private modalCtrl: ModalController, private store: Store, private toastController: ToastController) { }

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  confirmSelection() {
    if(this.selectedFriends.length !== 0) {
      this.store.dispatch(new AddSweatBuddies({userIds: this.selectedFriends, scheduleId: this.schedule.id!}))
      this.presentToast();
      this.close();
    }
  }

  toggleFriendSelection(friend: any) {
    const index = this.selectedFriends.indexOf(friend.userId);
  
    if (index === -1) {
      this.selectedFriends.push(friend.userId);
    } else {
      this.selectedFriends.splice(index, 1);
    }
  }

  showConfirm() {
    if(this.selectedFriends.length === 0)
      return false;
    return true;
  }

  isAdded(friend: any) {
    const index = this.schedule?.sweatbuddies?.indexOf(friend.userId);
    if (index === -1)
      return false;
    return true;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Friends Added Successfully',
      duration: 2000,
      position: 'bottom',
      color: 'success',
    });
    toast.present();
  }
}