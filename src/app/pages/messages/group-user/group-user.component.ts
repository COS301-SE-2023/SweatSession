import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RemoveChatGroupUser, StageOtheruserInfo } from 'src/app/actions';
import { IProfileModel, IRemoveChatGroupUser } from 'src/app/models';
import { MessagesService } from 'src/app/services';
import { OtheruserState } from 'src/app/states';

@Component({
  selector: 'group-user',
  templateUrl: './group-user.component.html',
  styleUrls: ['./group-user.component.scss'],
})
export class GroupUserComponent  implements OnInit {
  @Input() userId: string;
  @Input() currentUserId: string;
  @Select(OtheruserState.returnOtherUserProfile) profile$: Observable<IProfileModel>;
  @Input() profile: IProfileModel;
  @Input() groupId: string;
  @Input() isCurrentUserAdmin: boolean = false;

  load = true;

  constructor(private store:Store, private nav: NavController,private service: MessagesService) {}

  ngOnInit() {

    this.service.getUser(this.userId).then((profile)=>{
      this.profile = profile;
      this.load = false;
    })
  }

  viewOtherUser(){
    this.store.dispatch(new StageOtheruserInfo(this.profile));
  }

  removeUser() {
    let payload: IRemoveChatGroupUser = {
      adminId: this.currentUserId,
      userId: this.userId,
      groupId: this.groupId
    }
    this.store.dispatch(new RemoveChatGroupUser(payload));
  }
}
