import { Component, Input, OnInit } from '@angular/core';
import { IProfileModel } from 'src/app/models';

@Component({
  selector: 'leaderboard-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent  implements OnInit {
  @Input() user:IProfileModel={};
  @Input() position:number;

  constructor() { }

  ngOnInit() {}

}
