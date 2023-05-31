import { IFriendsModel } from 'src/app/models';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddFriendAction, GetFriendsAction } from 'src/app/actions';
import { FriendsState, FriendsStateModel } from 'src/app/states';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  friends:IFriendsModel[]=[];
  @Select(FriendsState.returnFriends) friends$! : Observable<IFriendsModel[]>;
  constructor(private store: Store) { 
    this.store.dispatch(new GetFriendsAction());
    this.displayFriends();
  }

  ngOnInit() {
    this.displayFriends();
  }

  addFriend() {
    //thsi.store.dispatch(new AddFriendAction(payload));
  }

  displayFriends() {
    this.store.dispatch(new GetFriendsAction());
    this.friends$.subscribe((response)=>{
      this.friends = response;
      console.table(this.friends);
    })
  }
}
