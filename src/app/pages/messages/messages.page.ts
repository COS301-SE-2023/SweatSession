import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable, forkJoin, switchMap, tap } from 'rxjs';
import { GetChatFriends, GetFriendsProfiles, GetUserGroups, StageChatFriend, StageChatGroup, StopChatFriendsLoading } from 'src/app/actions';
import { IChatFriend, IGroup, IProfileModel } from 'src/app/models';
import { MessagesState } from 'src/app/states';

@Component({
  selector: 'app-home',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
 @Select(MessagesState.returnChatFriends) chatFriends$: Observable<IChatFriend[]>;
 @Select(MessagesState.returnFriendsProfiles) friends$: Observable<IProfileModel[]>;
 @Select(MessagesState.returnChatGroups) groups$: Observable<IGroup[]>;
 @Select(MessagesState.returnLoadingState) load$: Observable<boolean>;
  groups: IGroup[] = [];
 chatFriends: IChatFriend[] = [];
 friends: IProfileModel[] = [];
 noFriends: boolean = true;
 selectedSegment = 'chats';
 loading: boolean = true;
  

  constructor(private nav:NavController, private store:Store) { }

  ngOnInit() {
    this. displayChatFriends();
    this.displayGroups();
  }

  openChat(chat:any) {
    this.nav.navigateRoot("/chatroom");
  }

  displayChatFriends() {
    this.store.dispatch(new GetChatFriends());
    this.store.dispatch(new GetFriendsProfiles());
    
    this.chatFriends$.subscribe((response)=> {
      this.chatFriends = response;
        this.chatFriends.length === 0 ? this.noFriends = true : this.noFriends = false;
    })

    this.friends$.subscribe((response)=>{
        this.friends = response
    })

    this.load$.subscribe((response)=>{
      this.loading = response;
    })
  }
  
  displayGroups() {
    this.store.dispatch(new GetUserGroups())
    this.groups$.subscribe((response)=>{
      this.groups=response;
    })
  }

  stageUser(user: IProfileModel, model?:any) {
    if(model) {
      model.dismiss();
    }
    this.store.dispatch(new StageChatFriend(user.userId!))
  }

  stageGroup(group: IGroup) {
    this.store.dispatch(new StageChatGroup(group));
  }

  onSegmentChange(event: any) {
    this.selectedSegment = event.detail.value;
  }
}
