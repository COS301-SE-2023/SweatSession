import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-otheruser',
  templateUrl: './otheruser.page.html',
  styleUrls: ['./otheruser.page.scss'],
})
export class OtheruserPage implements OnInit {
  friendshipStatus: boolean = false;
  constructor(store: Store) { }

  ngOnInit() {
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

}
