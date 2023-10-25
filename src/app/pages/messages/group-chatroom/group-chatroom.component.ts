import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Timestamp } from 'firebase/firestore';
import { Observable, Subscription, switchMap, tap } from 'rxjs';
import { ExitChatGroup, GetGroup, GetGroupMessages, RemoveChatGroup, RemoveChatGroupSession, SendGroupMessage, StageGroup, SubscribeToAuthState } from 'src/app/actions';
import { IGroup, IMessage } from 'src/app/models';
import { NavigationService } from 'src/app/services';
import { NotifyService } from 'src/app/services/notify/notify.service';
import { AuthState, MessagesState } from 'src/app/states';

@Component({
  selector: 'group-chatroom',
  templateUrl: './group-chatroom.component.html',
  styleUrls: ['./group-chatroom.component.scss'],
})
export class GroupChatroomComponent  implements OnInit {
  @Select(MessagesState.returnChats) chats$: Observable<IMessage[]>;
  @Select(MessagesState.returnGroup) group$: Observable<IGroup>;
  @Select(AuthState.getCurrUserId) userId$!: Observable<string>;
  chats: IMessage[] = [];
  currentUserId = '';
  group: IGroup = {}
  isShowMembers = false;
  showOptions = false;

  @ViewChild('contentElement', { static: false }) contentElement: IonContent;
  message: IMessage = {text: ''};
  private userSubscription: Subscription;
  
  constructor(private store: Store, private navigation: NavigationService, private notify: NotifyService) { }

  ngOnInit() {this.displayChats()}

  displayChats() {
    this.store.dispatch(new GetGroup());
    this.store.dispatch(new GetGroupMessages());
    this.store.dispatch(new SubscribeToAuthState());
    this.userSubscription = this.userId$.pipe(
      tap((response)=> this.currentUserId = response),
      switchMap(()=>this.group$),
      tap((response)=> {
        this.group = response;
      } ),
      switchMap(()=>this.chats$),
      tap((response)=> this.chats = response),
    ).subscribe(()=>{
      this.scrollToBottom()
    })
  }

  scrollToBottom() {
    setTimeout(() => {
      this.contentElement.scrollToBottom();
    }, 100);
  }

  sendMessage() {
    if(this.message.text.trim()!== '') {
      this.message.date = Timestamp.now();
      this.store.dispatch(new SendGroupMessage(this.message));
      this.message = {text: ""};
      this.scrollToBottom();
    }
  }

  showMembers() {
    this.isShowMembers = !this.isShowMembers;
  }

  removeSession() {
    this.store.dispatch(new RemoveChatGroupSession());
  }

  isText() {
    return this.message.text?.trim() != '';
  }

  selectGroup() {
    this.store.dispatch(new StageGroup(this.group.id!))
  }

  showGroupOptions() {
    this.showOptions = !this.showOptions;
  }

  exitGroup() {
    this.store.dispatch(new ExitChatGroup(this.group))
    this.showOptions = false;
    this.navigation.back();
  }

  deleteGroup() {
    this.store.dispatch(new RemoveChatGroup(this.group))
    this.showOptions = false;
  }

  editGroup() {
    this.showOptions = false;
  }

  reportGroup() {
    console.log('report');
    this.showOptions = false;
  }

  isAdmin() {
    return this.group.admin?.includes(this.currentUserId);
  }

  isOwner() {
    return this.group?.createBy == this.currentUserId;
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}