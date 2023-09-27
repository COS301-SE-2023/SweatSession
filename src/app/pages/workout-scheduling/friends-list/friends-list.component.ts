import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { AddSweatBuddies, AddSweatBuddy } from 'src/app/actions';
import { IProfileModel } from 'src/app/models';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss'],
})
export class FriendsListComponent  implements OnInit {
  @Input() friends: any[] = [];
  friendss = [
    {
      userId: "user_1",
      displayName: "John",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileURL: "https://ionicframework.com/docs/img/demos/avatar1.svg"
    },
    {
      userId: "user_2",
      displayName: "Alice",
      bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      profileURL: "https://ionicframework.com/docs/img/demos/avatar2.svg"
    },
    {
      userId: "user_3",
      displayName: "Bob",
      bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      profileURL: "https://ionicframework.com/docs/img/demos/avatar3.svg"
    }
  ];
  selectedFriends: string[] = [];
  constructor(private modalCtrl: ModalController, private store: Store) { }

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  confirmSelection() {
    if(this.selectedFriends.length !== 0) {
      console.table(this.selectedFriends)
      this.selectedFriends.forEach(user => {
        this.store.dispatch(new AddSweatBuddy(user))
      })

      this.store.dispatch(new AddSweatBuddies(this.selectedFriends))
    }
  }

  toggleFriendSelection(friend: any) {
    const index = this.selectedFriends.indexOf(friend.userId);
  
    if (index === -1) {
      this.selectedFriends.push(friend.userId);
    } else {
      this.selectedFriends.splice(index, 1);
    }
  }

  showConfirm() {
    if(this.selectedFriends.length === 0)
      return false;
    return true;
  }
}
