import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IFriendsModel } from 'src/app/models';

@Component({
  selector: 'user-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss'],
})
export class FriendComponent  implements OnInit {
  @Input() friend!:IFriendsModel;

  constructor(private Nav: NavController) { }

  ngOnInit() {}

  viewOtherUser(){
    this.Nav.navigateRoot("/otheruser");
  }
}
