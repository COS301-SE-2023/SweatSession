import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { getAuth } from 'firebase/auth';
import { AddFriendAction, AddSweatBuddy, RemoveFriendAction, RemoveFriendRequest } from 'src/app/actions';
import { IFriendsModel, IRequestToAdd } from 'src/app/models';
import { Notice } from 'src/app/models/notice.model';
import { BadgesRepository } from 'src/app/repository';
import { NoticeService } from 'src/app/services/notifications/notice.service';
import { NoticehomeService } from 'src/app/services/notifications/noticehome.service';
// import { HomePage } from '../home/home.page';
// import { Router } from '@angular/router';
// import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})



export class NotificationsPage implements OnInit {


  noticeamount: number;
  noticeList: Notice[];
  noticeList2: Notice[] = [];
  sendamount: string;
  auth = getAuth();
  currUserId = this.auth.currentUser?.uid;
  showOptions = false;



  //noticeList: Observable<Notice[]> = this.noticeService.getNotices();


  constructor(private noticeService: NoticeService,
    private alertController: AlertController,
    public nav: NavController,
    private noticehomeService: NoticehomeService,
    private store: Store,
    private badgesRepository: BadgesRepository) {

  }

  ngOnInit() {
    this.getNotifications();

  }

  showGroupOptions() {
    this.showOptions = !this.showOptions;
  }

  getNotifications() {
    this.noticeService.getNotices().subscribe((notices: Notice[]) => {
      this.noticeList = notices;
      for (let i = 0; i < this.noticeList.length; i++) {
        if (this.noticeList[i].senttoid == this.currUserId) {
          for (let x = 0; x < this.noticeList2.length; x++) {
            if (this.noticeList2[x].id == this.noticeList[i].id) {
              return;
            }
          }
          this.noticeList2.push(this.noticeList[i]);
        }
      }
      this.noticeList2 = this.noticeList2.reverse();
      this.noticeList2 = this.noticeList2.reverse();
      this.noticeamount = this.noticeList2.length;
      console.log('Number of notices:', this.noticeamount);
      this.sendNotifications(this.noticeamount);
    });

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Notifications',
      message: 'You have no new notifications!',
      buttons: ['OK']
    });


    await alert.present();
  }

  clearNotifications() {

    for (let i = 0; i < this.noticeList2.length; i++) {
      this.noticeService.deleteNotices(this.noticeList2[i].id!);
      console.log(this.noticeList2[i].id);

    }
    this.noticeList2 = [];
  }

  clearNotification(id: string) {
    this.noticeService.deleteNotices(id);
    console.log("seen part" + id);
    for (let i = 0; i < this.noticeList2.length; i++) {
      if (id == this.noticeList2[i].id) {
        this.noticeList2.splice(i, 1);
      }
    }
  }

  rejectFriendRequest(notice: Notice, senderid: string, senttoid: string) {
    const friend: IFriendsModel = {
      userId: notice.senderid,
      name: notice.sendername,
      profileURL: notice.profileurl,
    }
    this.store.dispatch(new RemoveFriendAction(friend))
    this.noticeService.rejectFriend(senderid, senttoid);
  }

  sendNotifications(num: number) {
    this.noticeamount = num;
    this.noticehomeService.send_data.next(this.noticeamount);
  }

  addFriend(notice: Notice) {
    const friend: IFriendsModel = {
      userId: notice.senderid,
      name: notice.sendername,
      profileURL: notice.profileurl,
    }
    this.store.dispatch(new RemoveFriendRequest(notice.senderid!))
    this.store.dispatch(new AddFriendAction(friend))
    this.clearNotification(notice.id!);
  }

  acceptToJoinWorkout(notice: Notice) {
    if (this.currUserId != undefined) {
      sessionStorage.setItem('currUserId', this.currUserId);
    } else {
      this.currUserId = sessionStorage.getItem('currUserId')!;
    }
    this.badgesRepository.addBadge(this.currUserId!, 5); //Dynamic Duo Badge
    let request: IRequestToAdd = notice.scheduleRequest!;
    this.store.dispatch(new AddSweatBuddy({ userId: notice.senttoid!, ownerId: request.senderId, scheduleId: request.scheduleId! }))
    this.clearNotification(notice.id!);
  }

  rejectToJoinWorkou(notice: Notice) {
    this.clearNotification(notice.id!);
  }
}
