import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { GetOtheruserProfile, GetUser, StageOtheruserInfo } from 'src/app/actions';
import { IProfileModel } from 'src/app/models';
import { MessagesService } from 'src/app/services';
import { MessagesState, OtheruserState } from 'src/app/states';

@Component({
  selector: 'group-user',
  templateUrl: './group-user.component.html',
  styleUrls: ['./group-user.component.scss'],
})
export class GroupUserComponent  implements OnInit {
  @Input() userId: string;
  @Input() currentUserId: string;
  @Input() modal:any;
  @Select(OtheruserState.returnOtherUserProfile) profile$: Observable<IProfileModel>;
  @Input() profile: IProfileModel = {displayName: 'me'};

  constructor(private store:Store, private nav: NavController,private service: MessagesService) {}

  ngOnInit() {
    this.service.getUser(this.userId).then((profile)=>{
      this.profile = profile;
    })
  }

  viewOtherUser(){
    this.modal.dismiss();
    this.store.dispatch(new StageOtheruserInfo(this.profile));
  }
}
