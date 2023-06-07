import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
// import {
//   getCurrentUserId,
//   LoginAuth,
//   Logout,
//   RegisterAuth,
//   SetUser,
//   SubscribeToAuthState,
// } from 'src/app/actions/auth';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import { BadgesApi } from './badges.api';

import produce from 'immer';
import { tap } from 'rxjs';
import { IBadges } from 'src/app/models/badges.model';
import { SetBadges, SubscribeToBadges } from 'src/app/actions/badges.actions';

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
  constructor(private readonly badgesApi: BadgesApi) {}

  @Selector()
  static receivedBadges(state: BadgesStateModel) {
    return state.currBadges?.receivedBadges;
  }

  @Action(SubscribeToBadges)
  public subscribeToBadgesState(context: StateContext<BadgesStateModel>) {
    alert("IN subscribeToBadges");
    return this.badgesApi.badges$().pipe(
      tap((currBadges: IBadges | null) => {
        context.dispatch(new SetBadges(currBadges));
      })
    );
  }

  @Action(SetBadges)
  async setBadges(context: StateContext<BadgesStateModel>, { badges }: SetBadges) {
    context.setState(
      produce((repr) => {
        repr.currBadges = badges;
      })
    );
  }

//   @Action(RegisterAuth)
//   async register(
//     context: StateContext<AuthenticationStateModel>,
//     { email, password }: RegisterAuth
//   ) {
//     try {
//       // alert("auth.state.ts");
//       // alert(email);
//       // alert(password);
//       await this.authenticationApi.register(email, password);
//       return context.dispatch(new Navigate(['home']));
//     } catch (err) {
//       return (err as Error).message;
//     }
//   }

//   @Action(LoginAuth)
//   async login(context: StateContext<AuthenticationStateModel>, { email, password }: LoginAuth) {
//     //alert("In auth state login function");
//     try {
//       await this.authenticationApi.login(email, password);
//       return context.dispatch(new Navigate(['home']));
//     } catch (err) {
//       return context.dispatch(new Navigate(['/login'])); //maybe we should change it to register
//     }
//   }

//   @Action(Logout)
//   async logout(context: StateContext<AuthenticationStateModel>) {
//     await this.authenticationApi.logout();
//     return context.dispatch(new Navigate(['/login']));
//   }
}
