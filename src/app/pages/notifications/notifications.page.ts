import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {NoticeService } from 'src/app/services/notifications/notice.service';
import { NoticehomeService } from 'src/app/services/notifications/noticehome.service';
import { Notice } from 'src/app/models/notice.model';
import { AlertController, NavController } from '@ionic/angular';
import { Location } from "@angular/common";
import { NavigationService } from 'src/app/services';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})



export class NotificationsPage implements OnInit {
  

  noticeamount : number ;
  noticeList: Notice[];
  sendamount: string ;
  

  
  //noticeList: Observable<Notice[]> = this.noticeService.getNotices();
 

  constructor(private noticeService: NoticeService , 
    private alertController: AlertController,
    public nav: NavController,
    private noticehomeService: NoticehomeService,
    private navigation: NavigationService ) { 
    
  }
 
  ngOnInit() {
    this.getNotifications() ;
      
  }
   
  getNotifications(){
    this.noticeService.getNotices().subscribe((notices: Notice[]) => {
      this.noticeList = notices;
      console.log('Number of notices:', this.noticeList.length);
      this.noticeamount = this.noticeList.length ;
      console.log(this.noticeamount);
      this.sendNotifications(this.noticeamount);

    });  

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'You have no new notifications!',
      buttons: ['OK']
    });
    this.createNotifications("Luqmaan" , "12:02 " , "Liked your post");

    await alert.present();
  }

  clearNotifications(){

    for(let i = 0 ; i<this.noticeList.length ; i++){
      this.noticeService.deleteNotices(this.noticeList[i].id!);
      console.log(this.noticeList[i].id)
    }
    this.noticeList = [] ;
  }

  sendNotifications(num :number){
    this.noticeamount = num ;
    this.noticehomeService.send_data.next(this.noticeamount);
  }

  createNotifications(sendername: string , sentdate: string , message: string){
    this.noticeService.createNotices(sendername , sentdate , message);
  }

  back() {
    this.navigation.back();
  }
}
