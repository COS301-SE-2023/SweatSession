import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { RemoveFriendAction } from 'src/app/actions';
import { StageOtheruserInfo } from 'src/app/actions';
import { IFriendsModel } from 'src/app/models';

@Component({
  selector: 'user-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss'],
})
export class FriendComponent  implements OnInit {
  @Input() friend!:IFriendsModel;

  constructor(private Nav: NavController, private store: Store) { }

  ngOnInit() {}

  viewOtherUser(){
    this.store.dispatch(new StageOtheruserInfo(this.friend));
  }

  removeFriend() {
    this.store.dispatch(new RemoveFriendAction(this.friend));
  }
}
