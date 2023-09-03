import { time } from 'console';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Timestamp } from 'firebase/firestore';
import { Observable, tap, switchMap } from 'rxjs';
import { GetChatFriend, GetMessages, RemoveChatFriendSession, SendMessage, StageOtheruserInfo, SubscribeToAuthState } from 'src/app/actions';
import { IMessage, IProfileModel } from 'src/app/models';
import { AuthState, MessagesState } from 'src/app/states';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss'],
})
export class ChatroomComponent  implements OnInit {

  @Select(MessagesState.returnChats) chats$: Observable<IMessage[]>;
  @Select(AuthState.getCurrUserId) userId$!: Observable<string>;
  @Select(MessagesState.returnChatFriendProfile) friendProfile$: Observable<IProfileModel>;
  @ViewChild('contentElement', { static: false }) contentElement: IonContent;
  chats: IMessage[] = [];
  currentUserId: string = "";
  message: IMessage = {text: ''};
  friendProfile: IProfileModel={};
  showDelete = false;
  dropdownVisible = false;

  constructor(private store: Store) { }

  ngOnInit() {this.getChatMessages()}

  getChatMessages() {
    this.store.dispatch(new GetChatFriend());
    this.store.dispatch(new GetMessages());
    this.store.dispatch(new SubscribeToAuthState());

    this.userId$.pipe(
      tap((response)=> this.currentUserId = response),
      switchMap(()=>this.friendProfile$),
      tap((response)=>{
        this.friendProfile = response;
      }),
      switchMap(()=>this.chats$),
      tap((response)=>{
        this.chats = response;
      })
    ).subscribe(()=>{
      this.scrollToBottom();
    });
  }

  sendMessage() {
    if(this.message.text.trim()!== '') {
      this.message.date = Timestamp.now();
      this.store.dispatch(new SendMessage(this.message))
      this.message = {text: ""};
      this.scrollToBottom()
    }
  }

  scrollToBottom() {
    setTimeout(() => {
      this.contentElement.scrollToBottom();
    }, 100);
  }

  removeSession() {
    this.store.dispatch(new RemoveChatFriendSession());
  }

  viewOtherUser(){
    this.store.dispatch(new StageOtheruserInfo(this.friendProfile));
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  isText() {
    return this.message.text?.trim() !== '';
  }
}
