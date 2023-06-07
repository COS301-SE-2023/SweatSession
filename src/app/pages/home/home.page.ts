import { Component, OnInit } from '@angular/core';
import { AuthApi } from 'src/app/states/auth/auth.api';
import { SetProfileService } from 'src/app/services';
import { IGetFriends, IGetProfile } from 'src/app/models';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  DisplayName$? = "na";
  ProfilePicture$? = "na";

  constructor(
    private authAPI: AuthApi,
    private setpr: SetProfileService,
  ) { }
 
  getU : IGetProfile = {userId: 'na'};

  ngOnInit() 
  {
    this.authAPI.getCurrentUserId().then((id) => {
      this.getU.userId = id;
      this.setpr.getProfile(this.getU).subscribe((profile) => {
        this.DisplayName$ = profile.profile.displayName;
        this.ProfilePicture$ = profile.profile.profileURL;
      });
    });
    
  }

  userLogout(){
    this.authAPI.logout();
  }



}
