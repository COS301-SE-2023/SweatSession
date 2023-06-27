import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import {Select, Store} from '@ngxs/store';
import {IFriendsModel, IGetProfile} from 'src/app/models';
import { SetProfileService, FriendsService } from 'src/app/services';
import { AuthApi } from 'src/app/states/auth/auth.api';
import {FriendsState} from "../../states";
import {Observable} from "rxjs";
import {GetFriendsAction} from "../../actions";
import {fitness} from "ionicons/icons";
import {FitnessgoalsPage} from "../fitnessgoals/fitnessgoals.page";

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {
  friends:IFriendsModel[]=[];
  @Select(FriendsState.returnFriends) friends2$! : Observable<IFriendsModel[]>;
  constructor
  (
    private Nav: NavController,
    private store: Store,
    private modalController: ModalController,
    private setprofileservices: SetProfileService,
    private FriendsService: FriendsService,
    private authApi: AuthApi,
  )
  {
    this.ngOnInit();
  }

  ProfilePicture$? = './assets/img/ProfileSE.png';
  displayName$? = 'na';
  myBio$? = 'na';
  groups$ = 0;
  getUser : IGetProfile = {userId: 'na'};
  friends$ = 0;

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

          //getting friends
          this.store.dispatch(new GetFriendsAction());
          this.friends2$.subscribe((response)=>{
            this.friends$ = [response].length;
          })
          //getting groups
          // this.groups$ = profile.profile.groups.length;

          if(profile.profile.profileURL == "")
          {
            this.ProfilePicture$ =  'src/assets/img/ProfileSE.png';
          }
           
      });

    });
  }

  load(){
    // FitnessgoalsPage.prototype.retrieveFitnessGoals();
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
