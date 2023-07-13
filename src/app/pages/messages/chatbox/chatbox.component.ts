import { Component, OnInit, Input } from '@angular/core';
import { IMessage } from 'src/app/models';

@Component({
  selector: 'chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss'],
})
export class ChatboxComponent  implements OnInit {
  @Input() message: IMessage;
  @Input() currentUserId: string;
  constructor() { }

  ngOnInit() {}

}
