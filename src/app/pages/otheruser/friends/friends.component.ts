import { Component, Input, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetOtheruserFriends, StageOtheruserInfo, SubscribeToAuthState } from 'src/app/actions';
import { IFriendsModel } from 'src/app/models';
import { AuthState, OtheruserState } from 'src/app/states';
import { Observable } from 'rxjs';

@Component({
  selector: 'otheruser-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent  implements OnInit {
  friends!: IFriendsModel[];
  @Select(OtheruserState.returnOtherUserFriends) friends$!: Observable<IFriendsModel[]>;
  @Select(AuthState.getCurrUserId) userId$!: Observable<string>;
  userId:string;
 
  constructor(private store:Store) { }

  ngOnInit() {
    this.displayFriends();
  }

  viewOtherUser(friend: IFriendsModel){
    this.store.dispatch(new StageOtheruserInfo(friend))
  }

  displayFriends() {
    this.store.dispatch(new GetOtheruserFriends())
    this.store.dispatch(new SubscribeToAuthState())
    this.friends$.subscribe((response)=> {
      this.friends = response;
    })

    this.userId$.subscribe((response)=>{
      this.userId = response;
    })
  }

  isCurrentUser(friend:IFriendsModel) {
    if(this.userId && friend.userId){
      return this.userId === friend.userId;
    }
    return false;
  }
}
