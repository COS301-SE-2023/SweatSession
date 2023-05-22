import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  friends=["friend1","friend2","friend3","friend4","friend5","friend6","friend7","friend8"];
  //@select(FriendsState.returnFriends) friends$ : Observable<FriendsStateModel>;
  constructor() { }

  ngOnInit() {
    //store.dispatch(new GetFriendsAction());
  }

  addFriend() {
    //store.dispatch(new AddFriendAction(payload));
  }

}
