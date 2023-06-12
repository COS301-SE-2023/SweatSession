import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { StageOtheruserInfo } from 'src/app/actions';
import { IFriendsModel } from 'src/app/models';

@Component({
  selector: 'otheruser-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent  implements OnInit {
  @Input() friends!: IFriendsModel[];
  constructor(private store:Store) { }

  ngOnInit() {}

  viewOtherUser(friend: IFriendsModel){
    this.store.dispatch(new StageOtheruserInfo(friend))
  }
}
