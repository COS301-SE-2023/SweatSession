import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss'],
})
export class FriendsListComponent  implements OnInit {
  @Input() friends: any[] = [];
  @Input() selectedFriends: any[] = [];
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  confirmSelection() {
    
  }
}
