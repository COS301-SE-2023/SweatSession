import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoadOtherUserProfile } from 'src/app/actions';
import { IProfileModel } from 'src/app/models';
import { OtheruserState } from 'src/app/states';

@Component({
  selector: 'app-otheruser',
  templateUrl: './otheruser.page.html',
  styleUrls: ['./otheruser.page.scss'],
})
export class OtheruserPage implements OnInit {
  friendshipStatus: boolean = false;
  user!: IProfileModel;
  @Select(OtheruserState.getOtherUser) user$!: Observable<IProfileModel>;
  constructor(private store: Store) {
    this.displayUserInfo();
  }

  ngOnInit() {
    this.displayUserInfo();
  }

  removeFriend() {
    this.friendshipStatus = false;
    //this.store.dispatch(new RemoveFriendAction())
  }

  addFriend() {
    this.friendshipStatus = true;
    //this.store.dispatch(new AddFriendAction())
  }

  viewSchedules() {
    //this.store.dispatch(new GetWorkoutSchedule())
    console.log("view schedules")
  }

  viewFriends() {
    //this.store.dispatch(new GetFriendsAction())
    console.log("view friends")
  }

  displayUserInfo() {
    this.store.dispatch(new LoadOtherUserProfile());
    this.user$.subscribe((response)=>{
      this.user = response;
    })
  }

}
