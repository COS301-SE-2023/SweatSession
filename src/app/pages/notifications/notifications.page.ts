import { Component, OnInit } from '@angular/core';
import {NoticeService } from 'src/app/services/notifications/notice.service';
import { NoticehomeService } from 'src/app/services/notifications/noticehome.service';
import { Notice } from 'src/app/models/notice.model';
import { AlertController, NavController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
// import { HomePage } from '../home/home.page';
// import { Router } from '@angular/router';
// import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})



export class NotificationsPage implements OnInit {
  

  noticeamount : number ;
  noticeList: Notice[];
  noticeList2: Notice[] = [];
  sendamount: string ;
  auth = getAuth();
  currUserId = this.auth.currentUser?.uid;
  
  
  //noticeList: Observable<Notice[]> = this.noticeService.getNotices();
 

  constructor(private noticeService: NoticeService , 
    private alertController: AlertController,
    public nav: NavController,
    private noticehomeService: NoticehomeService) { 
    
  }
 
  ngOnInit() {
    this.getNotifications() ;
      
  }
   
  getNotifications(){
    this.noticeService.getNotices().subscribe((notices: Notice[]) => {
      this.noticeList = notices;
      for(let i = 0 ; i<this.noticeList.length ; i++){
        if(this.noticeList[i].senttoid == this.currUserId){
          this.noticeList2.push(this.noticeList[i]) ;
        }
      }
      this.noticeamount = this.noticeList2.length ;
      console.log('Number of notices:' ,this.noticeamount);
      this.sendNotifications(this.noticeamount);
      

    });  

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'You have no new notifications!',
      buttons: ['OK']
    });
    

    await alert.present();
  }

  clearNotifications(){

    for(let i = 0 ; i<this.noticeList2.length ; i++){
      this.noticeService.deleteNotices(this.noticeList2[i].id!);
      console.log(this.noticeList2[i].id)
    }
    this.noticeList2 = [] ;
  }

  clearNotification(id :string){
    this.noticeService.deleteNotices(id);
    console.log("seen part" + id);
    for(let i = 0 ; i<this.noticeList2.length ; i++){
      if (id == this.noticeList2[i].id){
        this.noticeList2.splice(i , 1) ;
      }
    }
  }

  rejectFriendRequest(senderid: string , senttoid: string){
    this.noticeService.rejectFriend(senderid , senttoid) ;
    console.log('reject working');

  }

  sendNotifications(num :number){
    this.noticeamount = num ;
    this.noticehomeService.send_data.next(this.noticeamount);
  }


  back(){
    this.nav.navigateRoot("/userprofile");
  }

  back(){
    this.nav.navigateRoot("/userprofile");
  }
}
