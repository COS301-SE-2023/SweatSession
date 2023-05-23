import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
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

  Friends(){
    this.Nav.navigateRoot('/friends');
  }

  Groups(){
    this.Nav.navigateRoot('/home/messages');
  }
  Schedule(){
    this.Nav.navigateRoot('/workout-scheduling');
  }

}
