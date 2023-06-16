import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {GetUsersAction} from 'src/app/actions/profile.action'
import { AddFriendAction, GetOtheruserFriends, GetOtheruserSchedules, LoadOtherUserProfile, RemoveFriendAction, RemoveUser } from 'src/app/actions';
import { IFriendsModel, IProfileModel, IWorkoutScheduleModel , IGotProfile } from 'src/app/models';
import { OtherUserStateModel, OtheruserState } from 'src/app/states';
import {NoticeService } from 'src/app/services/notifications/notice.service';
import { getAuth } from 'firebase/auth';
import { NavigationService } from 'src/app/services';

@Component({
  selector: 'app-otheruser',
  templateUrl: './otheruser.page.html',
  styleUrls: ['./otheruser.page.scss'],
})
export class OtheruserPage implements OnInit {


  friendshipStatus: boolean;
 
  user!: IProfileModel;
  curruser!: IProfileModel;
  friends: IFriendsModel[] =[];
  workoutSchedules: IWorkoutScheduleModel[] = [];

 

  @Select(OtheruserState.returnOtherUserProfile) user$!: Observable<IProfileModel>;
  @Select(OtheruserState.returnOtherUserProfile) curruser$!: Observable<IProfileModel>;
  @Select(OtheruserState.returnOtherUserFriends) friends$!: Observable<IFriendsModel[]>;
  @Select(OtheruserState.returnOtherUserSchedules) schedules$!: Observable<IWorkoutScheduleModel[]>;
  @Select(OtheruserState.returnFriendshipStatus) friendshipStatus$!: Observable<boolean>;

  schedules: IWorkoutScheduleModel[] = [];

  auth = getAuth();
  currUserId = this.auth.currentUser?.uid;
  date : string ;
  shortdate : string[] ;
  

  
 
  
  constructor(private store: Store , private noticeService: NoticeService , private nav: NavController ) {
   
    this.displayUserInfo();
    
  }

  ngOnInit() {
    this.displayUserInfo();
    this.displayCurrentUser();
  }

  removeFriend() {
    this.store.dispatch(new RemoveFriendAction(this.friendModel()))
    this.date = new Date().toTimeString() ;
    console.log(this.date.split(':' , 2));
    this.shortdate = this.date.split(':' , 2);
    this.createNotifications(this.user.name! , this.shortdate[0] + ':' + this.shortdate[1] , "Removed you as a Friend!")  ;
  }

  addFriend() {
   if(this.user!=null) {
    this.store.dispatch(new AddFriendAction(this.friendModel()))
    console.log(this.user.userId,)
   } else(
    console.log("User is null.....")
   )
   this.date = new Date().toTimeString() ;
   this.shortdate = this.date.split(':' , 2);
   this.createNotifications(this.user.name! , this.shortdate[0] + ':' + this.shortdate[1] , "Requested to friend you!")  ;
  }

  viewSchedules() {
    this.nav.navigateRoot("otheruserSchedules");
  }

  viewFriends() {
    this.nav.navigateRoot("/otheruserFriends");
  }

  displayCurrentUser(){
    
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

  createNotifications(sendername: string , sentdate: string , message: string){
    this.noticeService.createNotices(sendername , sentdate , message , this.currUserId!);
  }





}
