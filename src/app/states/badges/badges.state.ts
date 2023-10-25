import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';

import { BadgesApi } from './badges.api';

import produce from 'immer';
import { tap } from 'rxjs';
import { SetBadges, SubscribeToBadges } from 'src/app/actions/badges.actions';
import { IBadges } from 'src/app/models/badges.model';

export interface BadgesStateModel {
  //currUser: User | null;
  currBadges: IBadges | null | undefined;
}



@State<BadgesStateModel>({
  name: 'badges',
  defaults: {
    currBadges: null
  }
})
@Injectable()
export class BadgesState {
  constructor(private readonly badgesApi: BadgesApi, private readonly store: Store) { }

  @Selector()
  static receivedBadges(state: BadgesStateModel) {
    return state.currBadges?.receivedBadges;
  }

  @Selector()
  static currBadges(state: BadgesStateModel) {
    return state.currBadges;
  }

  @Action(SubscribeToBadges)
  public subscribeToBadgesState(context: StateContext<BadgesStateModel>) {
    return this.badgesApi.badges$().pipe(
      tap((currBadges: IBadges) => {
        console.log("IN subscribeToBadges");
        console.log(currBadges);
        context.dispatch(new SetBadges(currBadges));
      })
    );
  }

  @Action(SetBadges)
  async setBadges(context: StateContext<BadgesStateModel>, { badges }: SetBadges) {
    return context.setState(
      produce((repr) => {
        repr.currBadges = badges;
      })
    );
  }
}
