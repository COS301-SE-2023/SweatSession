import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { StageOtheruserInfo } from 'src/app/actions';
import { IProfileModel } from 'src/app/models';

@Component({
  selector: 'leaderboard-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent  implements OnInit {
  @Input() user:IProfileModel={};
  @Input() position:number;

  constructor(private store:Store) { }

  ngOnInit() {}

  viewOtherUser(){
    this.store.dispatch(new StageOtheruserInfo(this.user));
  }
}
