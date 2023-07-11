import { time } from 'console';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Timestamp } from 'firebase/firestore';
import { Observable, tap, switchMap } from 'rxjs';
import { GetChatFriend, GetMessages, SendMessage, SubscribeToAuthState } from 'src/app/actions';
import { IMessage, IProfileModel } from 'src/app/models';
import { AuthState, MessagesState } from 'src/app/states';

@Component({
  selector: 'chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss'],
})
export class ChatroomComponent  implements OnInit {

  @Select(MessagesState.returnChats) chats$: Observable<IMessage[]>;
  @Select(AuthState.getCurrUserId) userId$!: Observable<string>;
  @Select(MessagesState.returnChatFriendProfile) friendProfile$: Observable<IProfileModel>;
  chats: IMessage[] = [];
  currentUserId: string = "";
  message: IMessage = {text: ''};
  friendProfile: IProfileModel={};


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
    ).subscribe();
  }

  sendMessage() {
    if(this.message.text.trim()!== '') {
      this.message.date = Timestamp.now();
      this.store.dispatch(new SendMessage(this.message))
      this.message = {};
    }
  }

  toDate(chat: IMessage) {
    const date = chat.date?.toDate();
    const day = date?.getDay();
    const month = date?.getMonth();
    const year = date?.getFullYear()
    const time = date

    return `${year}-${month}-${day}`;
  }
}
