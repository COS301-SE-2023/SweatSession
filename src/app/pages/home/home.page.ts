import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthApi } from 'src/app/states/auth/auth.api';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NoticehomeService } from 'src/app/services/notifications/noticehome.service';
import { SetProfileService } from 'src/app/services';
import { IGetFriends, IGetProfile } from 'src/app/models';
import { Logout } from 'src/app/actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  noticeamount : number ;
  sub : Subscription ;
  DisplayName$? = "na";
  ProfilePicture$? = "na";
  getU : IGetProfile = {userId: 'na'};

  constructor(private nav:NavController,private noticehomeService: NoticehomeService ,
    private authAPI: AuthApi,
    private setpr: SetProfileService,
    private store: Store) { }

  ngOnInit() 
  {
    this.authAPI.getCurrentUserId().then((id) => {
      this.getU.userId = id;
      this.setpr.getProfile(this.getU).subscribe((profile) => {
        this.DisplayName$ = profile.profile.displayName;
        this.ProfilePicture$ = profile.profile.profileURL;
      });
    });
    this.nav.navigateRoot("/home/dashboard");
  }

  userLogout(){
    this.store.dispatch(new Logout());
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
