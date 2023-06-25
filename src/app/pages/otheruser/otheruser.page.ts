import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {GetUsersAction} from 'src/app/actions/profile.action'
import { AddFriendAction, GetOtheruserFriends, GetOtheruserSchedules, LoadOtherUserProfile, RemoveFriendAction, RemoveUser } from 'src/app/actions';
import { IFriendsModel, IProfileModel, IWorkoutScheduleModel , IGotProfile } from 'src/app/models';
import { Profile } from 'src/app/models/notice.model';
import { OtherUserStateModel, OtheruserState } from 'src/app/states';
import {NoticeService } from 'src/app/services/notifications/notice.service';
import { getAuth } from 'firebase/auth';
import { NavigationService } from 'src/app/services';
import { DocumentSnapshot } from 'firebase/firestore';

@Component({
  selector: 'app-otheruser',
  templateUrl: './otheruser.page.html',
  styleUrls: ['./otheruser.page.scss'],
})
export class OtheruserPage implements OnInit {


  friendshipStatus: boolean;
 
  user!: IProfileModel;
  currusername: string;
  friends: IFriendsModel[] =[];
  workoutSchedules: IWorkoutScheduleModel[] = [];
  profileList: Profile[];

 

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
    this.displayCurrentUser(this.currUserId!);
  }

  removeFriend() {
    this.store.dispatch(new RemoveFriendAction(this.friendModel()))
    this.date = new Date().toTimeString() ;
    console.log(this.date.split(':' , 2));
    this.shortdate = this.date.split(':' , 2);
    this.createNotifications(this.currusername , this.shortdate[0] + ':' + this.shortdate[1] , "Removed you as a Friend!")  ;
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
   this.createNotifications(this.currusername , this.shortdate[0] + ':' + this.shortdate[1] , "Sent you a Friend Request!")  ;
  }

  viewSchedules() {
    this.nav.navigateRoot("otheruserSchedules");
  }

  viewFriends() {
    this.nav.navigateRoot("/otheruserFriends");
  }

  displayCurrentUser(id:string){
    this.noticeService.getTheNoticeProfile().subscribe((profiles: Profile[]) => {
    this.profileList = profiles;
    console.log('Number of PROFILES:', this.profileList.length);
    for(let i = 0 ; i<this.profileList.length ; i++){
      if(this.profileList[i].id == this.currUserId ){
        this.currusername = this.profileList[i].displayName! ;
        console.log(this.currusername);
      }
    }

      
  });
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
    this.noticeService.createNotices(sendername , sentdate , message , this.user.userId);
  }





}
