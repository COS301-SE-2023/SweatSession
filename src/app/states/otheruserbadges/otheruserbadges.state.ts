import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import { OtherUserBadgesApi } from './otheruserbadges.api';

import produce from 'immer';
import { Observable, tap } from 'rxjs';
import { IBadges } from 'src/app/models/badges.model';
import { SetOtherUserBadges, SubscribeToOtherUserBadges, SetOtherUserBadgesName, SetOtherUserBadgesId } from 'src/app/actions/otheruserbadges.actions';

export interface OtherUserBadgesStateModel {
  //currUser: User | null;
  currBadges: IBadges | null | undefined;
  usersName: String | null | undefined;
  usersId: String | null | undefined;
}



@State<OtherUserBadgesStateModel>({
  name: 'otheruserbadges',
  defaults: {
    currBadges: null,
    usersName: null,
    usersId: null
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

  @Selector()
  static usersName(state: OtherUserBadgesStateModel) {
    if (state.usersName==undefined){
      return sessionStorage.getItem('otherUserBadgesName');
    }
    return state.usersName;
  }

  @Selector()
  static usersId(state: OtherUserBadgesStateModel) {
    if (state.usersId==undefined){
      return sessionStorage.getItem('otherUserBadgesId');
    }
    return state.usersId;
  }

  @Action(SubscribeToOtherUserBadges)
  public subscribeToOtherUserBadgesState(context: StateContext<OtherUserBadgesStateModel>) {
    const userId = sessionStorage.getItem('otherUserBadgesId');
    if (userId!=undefined){
      return this.otherUserBadgesApi.otheruserbadges$(userId).pipe(
        tap((currBadges: IBadges) => {
          console.log("IN SubscribeToOtherUserBadges");
          console.log(currBadges);
          context.dispatch(new SetOtherUserBadges(currBadges));
        })
      );
    }
    return null;
  }

  @Action(SetOtherUserBadges)
  async setOtherUserBadges(context: StateContext<OtherUserBadgesStateModel>, { otherUserBadges }: SetOtherUserBadges) {
    return context.setState(
      produce((repr) => {
        repr.currBadges = otherUserBadges;
      })
    );
  }

  @Action(SetOtherUserBadgesName)
  async setOtherUserBadgesName(context: StateContext<OtherUserBadgesStateModel>, { otherUserBadgesName }: SetOtherUserBadgesName) {
    return context.setState(
      produce((repr) => {
        repr.usersName = otherUserBadgesName;
        if (otherUserBadgesName!=undefined){
          sessionStorage.setItem('otherUserBadgesName', otherUserBadgesName.toString());
        }else{
          repr.usersName = sessionStorage.getItem('otherUserBadgesName');
        }
      })
    );
  }

  @Action(SetOtherUserBadgesId)
  async setOtherUserBadgesId(context: StateContext<OtherUserBadgesStateModel>, { otherUserBadgesId }: SetOtherUserBadgesId) {
    return context.setState(
      produce((repr) => {
        repr.usersId = otherUserBadgesId;
        if (otherUserBadgesId!=undefined){
          sessionStorage.setItem('otherUserBadgesId', otherUserBadgesId.toString());
        }else{
          repr.usersName = sessionStorage.getItem('otherUserBadgesId');
        }
      })
    );
  }
}
