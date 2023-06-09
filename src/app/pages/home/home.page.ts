import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NoticehomeService } from 'src/app/services/notifications/noticehome.service';

import { AuthApi } from 'src/app/states/auth/auth.api';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  noticeamount : number ;
  sub : Subscription ;
  constructor(private noticehomeService: NoticehomeService , private authAPI: AuthApi) { }
 
  ngOnInit() {
    
  }

  ngAfterContentInit() {
    this.sub = this.noticehomeService.send_data.subscribe(
      data => {
        console.log(data)
        this.noticeamount = data
      }
    )
  }

  userLogout(){
    this.authAPI.logout();
  }





}
