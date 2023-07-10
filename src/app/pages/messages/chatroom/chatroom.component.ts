import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { GetMessages } from 'src/app/actions';
import { IMessage } from 'src/app/models';
import { MessagesState } from 'src/app/states';

@Component({
  selector: 'chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss'],
})
export class ChatroomComponent  implements OnInit {

  @Select(MessagesState.returnChats) chats$: Observable<IMessage[]>;
  chats: IMessage[] = [];


  constructor(private store: Store) { }

  ngOnInit() {}

  getChatMessages() {
    this.store.dispatch(new GetMessages())
    this.chats$.pipe(
      tap((response)=>{
        this.chats = response;
      })
    )
  }

}
