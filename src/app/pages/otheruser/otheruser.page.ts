import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddFriendAction, LoadOtherUserProfile, RemoveFriendAction, RemoveUser } from 'src/app/actions';
import { IFriendsModel, IProfileModel, IWorkoutScheduleModel } from 'src/app/models';
import { OtherUserStateModel, OtheruserState } from 'src/app/states';
import {NoticeService } from 'src/app/services/notifications/notice.service';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-otheruser',
  templateUrl: './otheruser.page.html',
  styleUrls: ['./otheruser.page.scss'],
})
export class OtheruserPage implements OnInit {
  isFriendsSlideActive = false;
  isScheduleSlideActive = false;
  otherUserInfo!: OtherUserStateModel;
  user!: IProfileModel;
  friends: IFriendsModel[] =[];
  schedules: IWorkoutScheduleModel[] = [];
  @Select(OtheruserState.getOtherUser) user$!: Observable<OtherUserStateModel>;
  auth = getAuth();
  currUserId = this.auth.currentUser?.uid;
  date : string ;
  
  constructor(private store: Store , private noticeService: NoticeService ) {
    this.displayUserInfo();
  }

  ngOnInit() {
    this.displayUserInfo();
    this.isFriendsSlideActive = false;
    this.isScheduleSlideActive = false;
  }

  removeFriend() {
    this.otherUserInfo.friendshipStatus = false;
    this.store.dispatch(new RemoveFriendAction(this.friendModel()))
    this.date = new Date().toTimeString() ;
    this.createNotifications("My name" , this.date , "Removed you as a Friend!")  ;
  }

  addFriend() {
   if(this.user!=null) {
    this.otherUserInfo.friendshipStatus = true;
    this.store.dispatch(new AddFriendAction(this.friendModel()))
    alert(this.user.userId,)
   } else(
    alert("User is null.....")
   )
   this.date = new Date().toTimeString() ;
   this.createNotifications("My name" , this.date , "Requested to friend you!")  ;
  }

  viewSchedules() {
    //this.store.dispatch(new GetWorkoutSchedule())
    console.log("view schedules")
    this.isScheduleSlideActive = !this.isScheduleSlideActive;
    console.log(this.isScheduleSlideActive);
  }

  viewFriends() {
    //this.store.dispatch(new GetFriendsAction())
    console.log("view friends")
    this.isFriendsSlideActive = !this.isFriendsSlideActive;
    console.log(this.isFriendsSlideActive);
  }

  displayUserInfo() {
    this.store.dispatch(new LoadOtherUserProfile());
    this.user$.subscribe((response)=>{
      this.otherUserInfo = response;
      this.user = response.otheruser as IProfileModel;
      this.friends = response.friends;
      this.schedules = response.workoutSchedule;
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

  createNotifications(sendername: string , sentdate: string , message: string){
    this.noticeService.createNotices(sendername , sentdate , message , this.currUserId!);
  }




}
