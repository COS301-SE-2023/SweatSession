import { Component, OnInit, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetOtheruserProfile, GetProfileAction } from 'src/app/actions';
import { IMessage, IProfileModel } from 'src/app/models';
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
  profile: IProfileModel;

  constructor(private store:Store) { }

  ngOnInit() {
    if(this.showUser) {
     this.displayProfile();
    }
  }

  displayProfile() {
    this.store.dispatch(new GetOtheruserProfile({userId: this.message.senderId!}));

    this.profile$.subscribe((response)=>{
      this.profile = response;
    })
  }
}
