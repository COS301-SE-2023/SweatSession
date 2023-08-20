import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { RemoveFriendAction } from 'src/app/actions';
import { StageOtheruserInfo } from 'src/app/actions';
import { IFriendsModel, IProfileModel } from 'src/app/models';
import { ProfileService } from 'src/app/services';

@Component({
  selector: 'user-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss'],
})
export class FriendComponent  implements OnInit {
  @Input() friend!:IFriendsModel;
  profile: IProfileModel;
  load: boolean = true;

  constructor(private Nav: NavController, private store: Store, private profileService: ProfileService) { }

  ngOnInit() {

    this.profileService.getUser(this.friend.userId!).then((profile)=>{
      this.profile = profile;
      this.load = false;
    })
  }

  viewOtherUser(){
    this.store.dispatch(new StageOtheruserInfo(this.friend));
  }

  removeFriend() {
    this.store.dispatch(new RemoveFriendAction(this.friend));
  }
}
