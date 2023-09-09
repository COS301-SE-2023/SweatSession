import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { StageOtheruserInfo } from 'src/app/actions';
import { IFriendsModel, IProfileModel } from 'src/app/models';
import { ProfileService } from 'src/app/services';

@Component({
  selector: 'friends-contents',
  templateUrl: './friends-contents.component.html',
  styleUrls: ['./friends-contents.component.scss'],
})
export class FriendsContentsComponent  implements OnInit {
  @Input() friend!:IFriendsModel;
  @Input() userId: string;
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

  isCurrentUser() {
    if(this.userId && this.friend.userId){
      if(this.userId === this.friend.userId)
      return this.userId === this.friend.userId;
    }
    return false;
  }
}


