import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { GetOtheruserProfile, StageOtheruserInfo } from 'src/app/actions';
import { IProfileModel } from 'src/app/models';
import { OtheruserState } from 'src/app/states';

@Component({
  selector: 'group-user',
  templateUrl: './group-user.component.html',
  styleUrls: ['./group-user.component.scss'],
})
export class GroupUserComponent  implements OnInit {
  @Input() userId: string;
  @Input() currentUserId: string;
  @Select(OtheruserState.returnOtherUserProfile) profile$: Observable<IProfileModel>;
  profile: IProfileModel = {};

  constructor(private store:Store, private nav: NavController) { }

  ngOnInit() {
    this.store.dispatch(new GetOtheruserProfile({userId: this.userId}));
    this.profile$.pipe(
      tap((response) => this.profile = response)
    ).subscribe();
  }

  viewOtherUser(){
    this.store.dispatch(new StageOtheruserInfo(this.profile));
  }
}
