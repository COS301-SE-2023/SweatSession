import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable, switchMap, tap } from 'rxjs';
import { GetChatFriends, GetFriendsProfiles, StageChatFriend } from 'src/app/actions';
import { IChatFriend, IProfileModel } from 'src/app/models';
import { MessagesState } from 'src/app/states';

@Component({
  selector: 'app-home',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
 @Select(MessagesState.returnChatFriends) chatFriends$: Observable<IChatFriend[]>;
 @Select(MessagesState.returnFriendsProfiles) friends$: Observable<IProfileModel[]>;
 chatFriends: IChatFriend[] = [];
 friends: IProfileModel[] = [];
 loading: boolean = false;
 noFriends: boolean = true;
  

  constructor(private nav:NavController, private store:Store) { }

  ngOnInit() {
    this. displayChatFriends();
  }

  openChat(chat:any) {
    this.nav.navigateRoot("/chatroom");
  }

  displayChatFriends() {
    this.loading = false;
    this.store.dispatch(new GetChatFriends());
    this.store.dispatch(new GetFriendsProfiles());
    
    this.chatFriends$.subscribe((response)=> {
      this.chatFriends = response;
        this.chatFriends.length === 0 ? this.noFriends = true : this.noFriends = false;
    })

    this.friends$.subscribe((response)=>{
        this.friends = response
    })
  }

  stageUser(user: IProfileModel, model?:any) {
    if(model) {
      model.dismiss();
    }
    this.store.dispatch(new StageChatFriend(user.userId!))
  }
}
