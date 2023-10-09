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
    // this.nav.navigateRoot("/home/dashboard");
    sessionStorage.removeItem("otheruser");
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

  onToggletheme(event: any)
  {
    console.log(event.detail.checked);
    if(event.detail.checked)
    {
      document.body.setAttribute('color-theme','dark');
    }
    else
    {
      document.body.setAttribute('color-theme','light');
    }

  }

  goToSettings() {
    this.nav.navigateRoot("/settings");
  }

  openhelpwebsite() {
    window.location.href = 'https://drive.google.com/file/d/1QVv3vk6EiRsO7b123LUXclGO4n4Fs5ML/view?usp=sharing';
  }

  // async displayProfile() {
  //   // this.userId$.subscribe(async (response)=>{
  //   //   if(response) {
  //   //     this.userId = response;
  //   //     this.store.dispatch(new GetProfileAction({userId: this.userId}))
  //   //     this.profile$.subscribe(async (response)=>{
  //   //       if(response) {
  //   //         this.profile = await response;
  //   //         this.show = true;
  //   //         this.nav.navigateRoot("/home/dashboard");
  //   //       }
  //   //     })
  //   //   }
  //   // })
  // }
}
