import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {NoticeService } from 'src/app/services/notifications/notice.service';
import { Notice } from 'src/app/models/notice.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})



export class NotificationsPage implements OnInit {

  toggleswitch = true ;

  
  noticeList: Observable<Notice[]> = this.noticeService.getNotices();
  

  constructor(private noticeService: NoticeService) { }

  ngOnInit() {}

  

  



}
