import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {

  constructor(private Nav: NavController) { }

  ngOnInit() {
  }

  Leaderboard(){
    this.Nav.navigateRoot('/home/leaderboard');
  }

  Chats(){
    this.Nav.navigateRoot('/home/chatbot');
  }

  Groups(){
    this.Nav.navigateRoot('/home/messages');
  }
  Schedule(){
    this.Nav.navigateRoot('/home/notifications');
  }

}
