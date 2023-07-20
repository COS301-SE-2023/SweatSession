import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Timestamp } from 'firebase/firestore';
import { Observable, switchMap, tap } from 'rxjs';
import { GetMessages, RemoveChatFriendSession, RemoveChatGroupSession, SendMessage, SubscribeToAuthState } from 'src/app/actions';
import { IGroup, IMessage } from 'src/app/models';
import { AuthState, MessagesState } from 'src/app/states';

@Component({
  selector: 'group-chatroom',
  templateUrl: './group-chatroom.component.html',
  styleUrls: ['./group-chatroom.component.scss'],
})
export class GroupChatroomComponent  implements OnInit {
  @Select(MessagesState.returnChats) chats$: Observable<IMessage[]>;
  @Select(AuthState.getCurrUserId) userId$!: Observable<string>;
  chats: IMessage[] = [];
  currentUserId = '';
  @ViewChild('contentElement', { static: false }) contentElement: IonContent;
  message: IMessage = {text: ''};
  
  constructor(private store: Store) { }

  ngOnInit() {}

  displayChats() {
    this.store.dispatch(new GetMessages());
    this.store.dispatch(new SubscribeToAuthState());
    // this.store.dispatch(new GetGroup())

    this.userId$.pipe(
      tap((response)=> this.currentUserId = response),
      switchMap(()=>this.chats$),
      tap((response)=>{
        this.chats = response;
      }),
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
      this.store.dispatch(new SendMessage(this.message))
      this.message = {};
      this.scrollToBottom()
    }
  }

  removeSession() {
    this.store.dispatch(new RemoveChatGroupSession());
  }
}