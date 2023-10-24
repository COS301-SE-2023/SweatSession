import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs, NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { Logout } from 'src/app/actions';
import { IGetProfile } from 'src/app/models';
import { SetProfileService } from 'src/app/services';
import { NoticehomeService } from 'src/app/services/notifications/noticehome.service';
import { AuthApi } from 'src/app/states/auth/auth.api';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('tabs', { static: false }) tabs: IonTabs;
  noticeamount : number ;
  sub : Subscription ;
  DisplayName$? = "na";
  ProfilePicture$? = "na";
  getU : IGetProfile = {userId: 'na'};
  darkmode : boolean = false;
  constructor(private nav:NavController,private noticehomeService: NoticehomeService ,
    private authAPI: AuthApi,
    private setpr: SetProfileService,
    private store: Store) { }

  ngOnInit() {
    if(localStorage.getItem('darkmode')=='true') {
      document.body.setAttribute('color-theme','dark');
      this.darkmode = true;
    } else {
      document.body.setAttribute('color-theme','light');
      this.darkmode = false;
    }

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

    if(event.detail.checked)
    {
      document.body.setAttribute('color-theme','dark');
      localStorage.setItem('darkmode','true');
    }
    else
    {
      document.body.setAttribute('color-theme','light');
        localStorage.setItem('darkmode','false');
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
