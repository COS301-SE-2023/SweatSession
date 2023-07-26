import { Component, OnInit, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetOtheruserProfile, GetProfileAction, StageOtheruserInfo } from 'src/app/actions';
import { IMessage, IProfileModel } from 'src/app/models';
import { MessagesService } from 'src/app/services';
import { OtheruserState } from 'src/app/states';

@Component({
  selector: 'chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss'],
})
export class ChatboxComponent  implements OnInit {
  @Input() message: IMessage;
  @Input() currentUserId: string;
  @Input() showUser: boolean = false;
  @Select(OtheruserState.returnOtherUserProfile) profile$: Observable<IProfileModel>;
  profile: IProfileModel = {};

  constructor(private store:Store, private service: MessagesService) { }

  ngOnInit() {
    if(this.showUser) {
     this.displayProfile();
    }
  }

  displayProfile() {
    this.service.getUser(this.message.senderId!).then((profile)=>{
      this.profile = profile;
    })
  }

  stageUser() {
    this.store.dispatch(new StageOtheruserInfo(this.profile))
  }
}
