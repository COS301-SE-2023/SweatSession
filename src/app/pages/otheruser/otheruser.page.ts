import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {GetUsersAction} from 'src/app/actions/profile.action'
import { AddFriendAction, CheckIFSendFriendRequest, CreateFriendRequest, GetOtheruserFriends, GetOtheruserSchedules, LoadOtherUserProfile, RemoveFriendAction, RemoveUser } from 'src/app/actions';
import { IFriendsModel, IProfileModel, IWorkoutScheduleModel , IGotProfile } from 'src/app/models';
import { Profile } from 'src/app/models/notice.model';
import { OtherUserStateModel, OtheruserState } from 'src/app/states';
import { NoticeService } from 'src/app/services/notifications/notice.service';
import { getAuth } from 'firebase/auth';
import { NavigationService } from 'src/app/services';
import { SetOtherUserBadgesId, SetOtherUserBadgesName } from 'src/app/actions/otheruserbadges.actions';
import { PointsApi } from 'src/app/states/points/points.api';
import { IPoints } from 'src/app/models/points.model';
import { IBadges } from 'src/app/models/badges.model';
import { BadgesApi } from 'src/app/states/badges/badges.api';
import { DocumentSnapshot } from 'firebase/firestore';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-otheruser',
  templateUrl: './otheruser.page.html',
  styleUrls: ['./otheruser.page.scss'],
})
export class OtheruserPage implements OnInit {

  friendshipStatus: boolean;
  friendRequestStatus: boolean;
  user!: IProfileModel;
  currusername: string;
  profileurl: string;
  friends: IFriendsModel[] =[];
  workoutSchedules: IWorkoutScheduleModel[] = [];
  selectedSegment = "friends"
  
  points$: Observable<IPoints>;
  badges$: Observable<IBadges>;
  profileList: Profile[];

  auth = getAuth();
  currUserId = this.auth.currentUser?.uid;
  day : string ;
  daynum : number ;
  date : string ;
  shortdate : string[] ;

  @Select(OtheruserState.returnOtherUserProfile) user$!: Observable<IProfileModel>;
  @Select(OtheruserState.returnOtherUserProfile) curruser$!: Observable<IProfileModel>;
  @Select(OtheruserState.returnOtherUserFriends) friends$!: Observable<IFriendsModel[]>;
  @Select(OtheruserState.returnOtherUserSchedules) schedules$!: Observable<IWorkoutScheduleModel[]>;
  @Select(OtheruserState.returnFriendshipStatus) friendshipStatus$!: Observable<boolean>;
  @Select(OtheruserState.returnFriendRequestStatus) friendRequestStatus$!: Observable<boolean>;

  constructor(private store: Store , private noticeService: NoticeService , private nav: NavController , pointsApi: PointsApi, badgesApi: BadgesApi) {
   
    this.displayUserInfo();
    const id = this.user?.userId;
    if (id !== undefined) {
      sessionStorage.setItem('otherUserId', id);
      this.points$ = pointsApi.otherUserPoints$(id);
      this.badges$ = badgesApi.otheruserbadges$(id);
    } else {
      const otherUserId = sessionStorage.getItem('otherUserId');
      if (otherUserId !== null) {
        this.points$ = pointsApi.otherUserPoints$(otherUserId);
        this.badges$ = badgesApi.otheruserbadges$(otherUserId);
      } else {
        // Handle the case when `otherUserId` is `null`
        // For example, set `this.points$` to a default value or show an error message
      }
    }
    
  }

  ngOnInit() {
    this.displayUserInfo();
    this.displayCurrentUser(this.currUserId!);
  }

  removeFriend() {
    this.store.dispatch(new RemoveFriendAction(this.friendModel()));
  }

  addFriend() {
   const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   this.daynum = new Date().getDay() ;
   this.day = weekday[this.daynum];
   this.date = new Date().toTimeString() ;
   this.shortdate = this.date.split(':' , 2);
   this.store.dispatch(new CreateFriendRequest(this.user.userId!))
   this.createNotifications(this.currusername , this.day + ' ' +this.shortdate[0] + ':' + this.shortdate[1] + ' '  , "Sent you a Friend Request!");
  }

  viewSchedules() {
    this.nav.navigateRoot("otheruserSchedules");
  }

  viewFriends() {
    this.nav.navigateRoot("/otheruserFriends");
  }

  viewOtherUserBadges() {
    this.store.dispatch(new SetOtherUserBadgesName(this.user!.displayName));
    this.store.dispatch(new SetOtherUserBadgesId(this.user!.userId));
    this.nav.navigateRoot("/otheruserbadges");
  }

  displayCurrentUser(id:string){
    this.noticeService.getTheNoticeProfile().subscribe((profiles: Profile[]) => {
    this.profileList = profiles;
    for(let i = 0 ; i<this.profileList.length ; i++){
      if(this.profileList[i].id == this.currUserId ){
        this.currusername = this.profileList[i].displayName! ;
        this.profileurl = this.profileList[i].profileURL! ;
      }
    }
  });
}


  displayUserInfo() {
    this.store.dispatch(new LoadOtherUserProfile());
    this.user$.subscribe((response)=>{
      this.user = response;
      this.ifRequested();
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
    this.noticeService.createNotices(sendername , sentdate , message , this.user.userId! , this.currUserId! , this.profileurl);
  }

  isRequested() {
    const res = this.user.friendRequests?.includes(this.currUserId!)
    if(res) {
      return res;
    }
    return false;
  }

  onSegmentChange(event: any) {
    this.selectedSegment = event.detail.value;
  }

  ifRequested() {
    this.store.dispatch(new CheckIFSendFriendRequest())

    this.friendRequestStatus$.subscribe((response)=>{
      this.friendRequestStatus = response;
    })
  }
}
