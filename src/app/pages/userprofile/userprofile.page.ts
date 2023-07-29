import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { IGetProfile } from 'src/app/models';
import { GetFriendsAction } from 'src/app/actions/friend.action';
import { SetProfileService } from 'src/app/services';
import { FriendsState } from 'src/app/states';
import { AuthApi } from 'src/app/states/auth/auth.api';
import {getAuth} from "@angular/fire/auth";
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {
  @Select(FriendsState.returnFriendsSize) friendsSize$! : Observable<number>;
  ProfilePicture$? = '/assets/ProfileSE.jpg';
  displayName$? = 'na';
  myBio$? = 'na';
  friends$ = 0;
  friendsSize = 0;
  groups$ = 0;
  getUser : IGetProfile = {userId: 'na'};
  currUserId: string | undefined = undefined;


  constructor(
    private Nav: NavController,
    private store: Store,
    private setprofileservices: SetProfileService, 
    private authApi: AuthApi,) {}


  ngOnInit() {
    this.displayFriendsSize();
    this.updateprofileinfor();
  }

  updateprofileinfor()
  {
    const auth = getAuth();
        this.currUserId = auth.currentUser?.uid;

        if (this.currUserId!=undefined)
        {
        sessionStorage.setItem('currUserId', this.currUserId);
        }
        else
        {
        this.currUserId = sessionStorage.getItem('currUserId') ?? "";
        }

    this.getUser.userId = this.currUserId;

    this.setprofileservices.getProfile(this.getUser).subscribe((profile) => {
          this.ProfilePicture$ = profile.profile.profileURL;
          this.displayName$ = profile.profile.displayName;
          this.myBio$ = profile.profile.bio;
          //getting groups
          // this.groups$ = profile.profile.groups.length;

          if(profile.profile.profileURL == "" || profile.profile.profileURL == undefined)
          {
            this.ProfilePicture$ =  '/assets/ProfileSE.jpg';
          }
           
      });
  }

  Leaderboard() {
    this.Nav.navigateRoot('/home/leaderboard');
  }

  Friends() {
    this.Nav.navigateRoot('/friends');
  }

  Groups() {
    this.Nav.navigateRoot('/groups');
  }

  Schedule() {
    this.Nav.navigateRoot('/workout-scheduling');
  }

  displayFriendsSize() {
    this.store.dispatch(new GetFriendsAction())
    this.friendsSize$.subscribe((response)=>{
      this.friendsSize = response;
      // console.log("number of friends: " +response);
    })
  }
}
