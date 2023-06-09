import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import {
  getCurrentUserId,
  LoginAuth,
  Logout,
  RegisterAuth,
  SetUser,
  SubscribeToAuthState,
} from 'src/app/actions/auth';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import { AuthApi } from './auth.api';

import produce from 'immer';
import { tap } from 'rxjs';

export interface AuthenticationStateModel {
  currUser: User | null;
}



@State<AuthenticationStateModel>({
  name: 'authentication',
  defaults: {
    currUser: null
  }
})
@Injectable()
export class AuthState {
  // public static currUserId: string|null|undefined;a
  constructor(private readonly authenticationApi: AuthApi) {}

  @Selector()
  static user(state: AuthenticationStateModel) {
    return state.currUser;
  }

  @Selector()
  static getCurrUserId(state: AuthenticationStateModel) {
    return state.currUser?.uid;
  }

  @Action(SubscribeToAuthState)
  public subscribeToAuthState(context: StateContext<AuthenticationStateModel>) {
    return this.authenticationApi.auth$().pipe(
      tap((currUser: User | null) => {
        context.dispatch(new SetUser(currUser));
      })
    );
  }

  @Action(SetUser)
  async setUser(context: StateContext<AuthenticationStateModel>, { user }: SetUser) {
    context.setState(
      produce((repr) => {
        repr.currUser = user;
      })
    );
  }

  @Action(RegisterAuth)
  async register(
    context: StateContext<AuthenticationStateModel>,
    { email, password }: RegisterAuth
  ) {
    try {
      // alert("auth.state.ts");
      // alert(email);
      // alert(password);
      await this.authenticationApi.register(email, password);
      return context.dispatch(new Navigate(['home']));
    } catch (err) {
      return (err as Error).message;
    }
  }

  @Action(LoginAuth)
  async login(context: StateContext<AuthenticationStateModel>, { email, password }: LoginAuth) {
    //alert("In auth state login function");
    try {
      await this.authenticationApi.login(email, password);
      return context.dispatch(new Navigate(['home']));
    } catch (err) {
      return context.dispatch(new Navigate(['/login'])); //maybe we should change it to register
    }
  }

  @Action(Logout)
  async logout(context: StateContext<AuthenticationStateModel>) {
    await this.authenticationApi.logout();
    return context.dispatch(new Navigate(['/login']));
  }
}
