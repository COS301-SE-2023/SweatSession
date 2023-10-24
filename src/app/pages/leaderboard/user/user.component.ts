import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { StageOtheruserInfo } from 'src/app/actions';
import { IProfileModel } from 'src/app/models';
import { IBadges } from 'src/app/models/badges.model';
import { BadgesApi } from 'src/app/states/badges/badges.api';
@Component({
  selector: 'leaderboard-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent  implements OnInit {
  @Input() user:IProfileModel={};
  @Input() position:number;
  @Input() isCurrentUser:boolean = false;
  badges = 0;
  sessionsCompleted = 0;
  badges$: Observable<IBadges>;

  constructor(private store:Store,private nav:NavController,private badgesApi: BadgesApi) {}

  ngOnInit() {this.getBadges()}

  viewOtherUser(){
    if(this.isCurrentUser){
      this.nav.navigateRoot('/userprofile')
    }else{
      this.store.dispatch(new StageOtheruserInfo(this.user));
    }
  }

  getBadges() {
    this.badges$ = this.badgesApi.otheruserbadges$(this.user.userId!);
  }
}
