import { Component, Input, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetOtheruserFriends, StageOtheruserInfo } from 'src/app/actions';
import { IFriendsModel } from 'src/app/models';
import { OtheruserState } from 'src/app/states';
import { Observable } from 'rxjs';

@Component({
  selector: 'otheruser-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent  implements OnInit {
  friends!: IFriendsModel[];
  @Select(OtheruserState.returnOtherUserFriends) friends$!: Observable<IFriendsModel[]>;
 
  constructor(private store:Store) { }

  ngOnInit() {
    this.displayFriends();
  }

  viewOtherUser(friend: IFriendsModel){
    this.store.dispatch(new StageOtheruserInfo(friend))
  }

  displayFriends() {
    this.store.dispatch(new GetOtheruserFriends())
    this.friends$.subscribe((response)=> {
      this.friends = response;
    })
  }
}
