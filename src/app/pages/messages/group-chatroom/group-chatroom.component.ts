import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IGroup } from 'src/app/models';
import { MessagesState } from 'src/app/states';

@Component({
  selector: 'group-chatroom',
  templateUrl: './group-chatroom.component.html',
  styleUrls: ['./group-chatroom.component.scss'],
})
export class GroupChatroomComponent  implements OnInit {
  
  constructor() { }

  ngOnInit() {}
}