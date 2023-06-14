import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddFriendAction, GetOtheruserFriends, GetOtheruserSchedules, LoadOtherUserProfile, RemoveFriendAction, RemoveUser } from 'src/app/actions';
import { IFriendsModel, IProfileModel, IWorkoutScheduleModel } from 'src/app/models';
import { OtherUserStateModel, OtheruserState } from 'src/app/states';

@Component({
  selector: 'app-otheruser',
  templateUrl: './otheruser.page.html',
  styleUrls: ['./otheruser.page.scss'],
})
export class OtheruserPage implements OnInit {
  isFriendsSlideActive = false;
  isScheduleSlideActive = false;
  friendshipStatus: boolean;
 
  user!: IProfileModel;
  friends: IFriendsModel[] =[];
  workoutSchedules: IWorkoutScheduleModel[] = [];

  @Select(OtheruserState.returnOtherUserProfile) user$!: Observable<IProfileModel>;
  @Select(OtheruserState.returnOtherUserFriends) friends$!: Observable<IFriendsModel[]>;
  @Select(OtheruserState.returnOtherUserSchedules) schedules$!: Observable<IWorkoutScheduleModel[]>;
  @Select(OtheruserState.returnFriendshipStatus) friendshipStatus$!: Observable<boolean>;

  constructor(private store: Store, private nav: NavController) {
    this.displayUserInfo();
  }

  ngOnInit() {
    this.displayUserInfo();
  }

  removeFriend() {
    this.store.dispatch(new RemoveFriendAction(this.friendModel()))
  }

  addFriend() {
   if(this.user!=null) {
    this.store.dispatch(new AddFriendAction(this.friendModel()))
    console.log(this.user.userId,)
   } else(
    console.log("User is null.....")
   )
  }

  viewSchedules() {
    this.isScheduleSlideActive =true;
    this.isFriendsSlideActive  =false;
    this.nav.navigateRoot("/otheruser/OtheruserFriends");
  }

  viewFriends() {
    this.isFriendsSlideActive  =true;
    this.isScheduleSlideActive =false;
    this.nav.navigateRoot("/otheruser/OtheruserSchedules");
  }

  displayUserInfo() {
    this.store.dispatch(new LoadOtherUserProfile());
    this.user$.subscribe((response)=>{
      this.user = response;
    })

    this.friendshipStatus$.subscribe((response)=>{
      this.friendshipStatus = response;
    })

    this.displayFriends();
    this.displayWorkoutSchedules();
  }

  displayFriends() {
    this.store.dispatch(new GetOtheruserFriends())
    this.friends$.subscribe((response)=> {
      this.friends = response;
    })
  }


  displayWorkoutSchedules() {
    this.store.dispatch( new GetOtheruserSchedules())
    this.schedules$.subscribe((response)=>{
      this.workoutSchedules = response;
    })
  }



  friendModel() {
    let model = {
      userId: this.user.userId,
      profileURL: this.user.profileURL,
      name: this.user.name
    }
    return model;
  }

  backtoPreviousPage() {
    this.store.dispatch(new RemoveUser());
  }

  backToOtheruserPage() {
    this.isScheduleSlideActive = false;
    this.isFriendsSlideActive = false;
    this.nav.navigateBack("/otheruser");
  }
}
