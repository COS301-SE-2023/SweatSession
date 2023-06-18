import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { IGetProfile } from 'src/app/models';
import { SetProfileService } from 'src/app/services';
import { AuthApi } from 'src/app/states/auth/auth.api';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {

  constructor
  (
    private Nav: NavController,
    private store: Store,
    private modalController: ModalController,
    private setprofileservices: SetProfileService, 
    private authApi: AuthApi,
  )
  {
    this.ngOnInit();
  }

  ProfilePicture$? = './assets/img/ProfileSE.png';
  displayName$? = 'na';
  myBio$? = 'na';
  friends$ = 0;
  groups$ = 0;
  getUser : IGetProfile = {userId: 'na'};
  getUserid() {
    return  this.authApi.getCurrentUserId();
  }

  ngOnInit()
  {
    this.getUserid().then((id) => {
      this.getUser.userId = id;
    this.setprofileservices.getProfile(this.getUser).subscribe((profile) => {
        
          this.ProfilePicture$ = profile.profile.profileURL;
          this.displayName$ = profile.profile.displayName;
          this.myBio$ = profile.profile.bio;
          // this.friends$ = profile.profile.friends.length;
          // this.groups$ = profile.profile.groups.length;

          if(profile.profile.profileURL == "")
          {
            this.ProfilePicture$ =  'src/assets/img/ProfileSE.png';
          }
           
      });

    });
  }

  Leaderboard(){
    this.Nav.navigateRoot('/home/leaderboard');
  }

  Friends(){
    this.Nav.navigateRoot('/friends');
  }

  Groups(){
    this.Nav.navigateRoot('/groups');
  }
  Schedule(){
    this.Nav.navigateRoot('/workout-scheduling');
  }
}
