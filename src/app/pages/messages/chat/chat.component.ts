import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IChatFriend } from 'src/app/models';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent  implements OnInit {

  @Input() chatFriend:IChatFriend;
  constructor(private nav:NavController) { }

  ngOnInit() {}

  toDate() {
    return "11:00 AM";
  }

  openChat() {
    this.nav.navigateRoot("/chatroom");
  }
}
