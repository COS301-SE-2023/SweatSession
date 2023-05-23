import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import {
  getCurrentUserId,
  Login,
  Logout,
  Register,
  SetUser,
  SubscribeToAuthState,
} from '../util';
import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import produce from 'immer';
import { tap } from 'rxjs';
import { AuthApi } from './auth.api';

export interface AuthenticationStateModel {
  user: User | null;
}



@State<AuthenticationStateModel>({
  name: 'authentication',
  defaults: {
    user: null
  }
})
@Injectable()
export class AuthState {
  constructor(private readonly authenticationApi: AuthApi) {}

  @Selector()
  static user(state: AuthenticationStateModel) {
    return state.user;
  }

  @Selector()
  static getUserId(state: AuthenticationStateModel) {
    return state.user?.uid;
  }

  @Action(SubscribeToAuthState)
  public subscribeToAuthState(ctx: StateContext<AuthenticationStateModel>) {
    return this.authenticationApi.auth$().pipe(
      tap((user: User | null) => {
        ctx.dispatch(new SetUser(user));
      })
    );
  }

  @Action(SetUser)
  async setUser(ctx: StateContext<AuthenticationStateModel>, { user }: SetUser) {
    ctx.setState(
      produce((draft) => {
        draft.user = user;
      })
    );
  }

  @Action(Register)
  async register(
    ctx: StateContext<AuthenticationStateModel>,
    { email, password }: Register
  ) {
    try {
      await this.authenticationApi.register(email, password);
      return ctx.dispatch(new Navigate(['home']));
    } catch (err) {
      return (err as Error).message;
    }
  }

  @Action(Login)
  async login(ctx: StateContext<AuthenticationStateModel>, { email, password }: Login) {
    try {
      await this.authenticationApi.login(email, password);
      return ctx.dispatch(new Navigate(['home']));
    } catch (err) {
      return ctx.dispatch(new Navigate(['/login']));
    }
  }

  @Action(Logout)
  async logout(ctx: StateContext<AuthenticationStateModel>) {
    await this.authenticationApi.logout();
    return ctx.dispatch(new Navigate(['/login']));
  }
}
