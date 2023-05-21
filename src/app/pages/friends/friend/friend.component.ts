import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss'],
})
export class FriendComponent  implements OnInit {
  @Input() name!:string;

  constructor() { }

  ngOnInit() {}

}
