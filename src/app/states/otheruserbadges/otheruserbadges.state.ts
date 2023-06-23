import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import { OtherUserBadgesApi } from './otheruserbadges.api';

import produce from 'immer';
import { Observable, tap } from 'rxjs';
import { IBadges } from 'src/app/models/badges.model';
import { SetBadges, SubscribeToBadges } from 'src/app/actions/badges.actions';

export interface OtherUserBadgesStateModel {
  //currUser: User | null;
  currBadges: IBadges | null | undefined;
}



@State<OtherUserBadgesStateModel>({
  name: 'otheruserbadges',
  defaults: {
    currBadges: null
  }
})
@Injectable()
export class OtherUserBadgesState {
  constructor(private readonly otherUserBadgesApi: OtherUserBadgesApi, private readonly store: Store) { }

  @Selector()
  static receivedBadges(state: OtherUserBadgesStateModel) {
    return state.currBadges?.receivedBadges;
  }

  @Selector()
  static currBadges(state: OtherUserBadgesStateModel) {
    return state.currBadges;
  }

//   @Action(SubscribeToOtherUserBadges)
//   public subscribeToOtherUserBadgesState(context: StateContext<OtherUserBadgesStateModel>) {
//     return this.otherUserBadgesApi.otheruserbadges$("FAsfcbCr1PZxDrvFrg2LSFFYu942").pipe(
//       tap((currBadges: IBadges) => {
//         console.log("IN SubscribeToOtherUserBadges");
//         console.log(currBadges);
//         context.dispatch(new SetOtherUserBadges(currBadges));
//       })
//     );
//   }

//   @Action(SetSubscribeToOtherUserBadges)
//   async setSubscribeToOtherUserBadges(context: StateContext<OtherUserBadgesStateModel>, { otherUserBadges }: SetOtherUserBadges) {
//     return context.setState(
//       produce((repr) => {
//         repr.currBadges = badges;
//       })
//     );
//   }
}
