import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {NoticeService } from 'src/app/services/notifications/notice.service';
import { Notice } from 'src/app/models/notice.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})



export class NotificationsPage implements OnInit {
  

  noticeamount : number ;
  noticeList: Notice[];

  
  //noticeList: Observable<Notice[]> = this.noticeService.getNotices();
 

  constructor(private noticeService: NoticeService , private alertController: AlertController) { 
    
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
    this.noticeList = [] ;
  }
  



}
