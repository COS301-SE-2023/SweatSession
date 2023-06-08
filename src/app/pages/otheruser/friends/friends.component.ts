import { Component, Input, OnInit } from '@angular/core';
import { IFriendsModel } from 'src/app/models';

@Component({
  selector: 'otheruser-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent  implements OnInit {
  @Input() friends!: IFriendsModel[];
  constructor() { }

  ngOnInit() {}

}
