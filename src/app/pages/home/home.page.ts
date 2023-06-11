import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthApi } from 'src/app/states/auth/auth.api';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NoticehomeService } from 'src/app/services/notifications/noticehome.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  noticeamount : number ;
  sub : Subscription ;
  constructor(private nav:NavController,private noticehomeService: NoticehomeService , private authAPI: AuthApi) { }
 
  ngOnInit() {
    this.nav.navigateRoot("/home/dashboard");
  }

  userLogout(){
    this.authAPI.logout();
  }

  ngAfterContentInit() {
    this.sub = this.noticehomeService.send_data.subscribe(
      data => {
        console.log(data)
        this.noticeamount = data
      }
    )
  }

  goToSettings() {
    this.nav.navigateRoot("/settings");
  }



}
