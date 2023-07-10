import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable, switchMap, tap } from 'rxjs';
import { GetChatFriends, GetFriendsProfiles, StageChatFriend } from 'src/app/actions';
import { IChatFriend, IFriendsModel, IProfileModel } from 'src/app/models';
import { MessagesState } from 'src/app/states';

@Component({
  selector: 'app-home',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  public chats = [
    {
      name: "John Doe",
      avatar: "path/to/avatar1.jpg",
      lastMessage: "Hey, what's up?",
      timestamp: "10:30 AM"
    },
    {
      name: "Jane Smith",
      avatar: "path/to/avatar2.jpg",
      lastMessage: "Did you finish the project?",
      timestamp: "09:45 AM"
    },
    {
      name: "Mike Johnson",
      avatar: "path/to/avatar3.jpg",
      lastMessage: "Let's meet for lunch today.",
      timestamp: "08:15 AM"
    },
    {
      name: "Emily Williams",
      avatar: "path/to/avatar4.jpg",
      lastMessage: "Can you send me the document?",
      timestamp: "07:55 AM"
    },
    {
      name: "David Lee",
      avatar: "path/to/avatar5.jpg",
      lastMessage: "I'll be late for the meeting.",
      timestamp: "06:20 AM"
    },
    {
      name: "Sarah Davis",
      avatar: "path/to/avatar6.jpg",
      lastMessage: "Happy birthday!",
      timestamp: "05:35 AM"
    }
  ];

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
    
    this.chatFriends$.pipe(
      tap((response)=> {
        this.chatFriends = response;
        console.log(response);
        this.chatFriends.length === 0 ? this.noFriends = true : this.noFriends = false;
      }),
    )

    this.friends$.subscribe((response)=>{
        this.friends = response
    })
  }

  stageUser(user: IProfileModel) {
    this.store.dispatch(new StageChatFriend(user.userId!))
  }
}
