import { Injectable } from '@angular/core';
import { LoginAuth as AuthActionLogin } from 'src/app/actions/auth';
import { Login as LoginAction} from 'src/app/actions/login';
import { Action, State, StateContext, Store } from '@ngxs/store';
import {AuthApi} from 'src/app/states/auth/auth.api';

export interface LoginStateModel {
  loginForm: {
    model: {
      email: string | null;
      password: string | null;
    };

    modified: boolean; //reg form modified or not
    status: string; //status of the registration form
    errors: object; //validation errors
  };
}

@State<LoginStateModel>({
  name: 'loginState',
  defaults: {
    loginForm: {
      model: {
        email: null,
        password: null,
      },
      modified: false,
      status: '',
      errors: {},
    },
  },
})

@Injectable()
export class LoginState {
  constructor(private store: Store, private authApi: AuthApi) {}
  @Action(LoginAction)
  async login(context: StateContext<LoginStateModel>, action: LoginAction) {//, email: string, password: string
    try {
      const state = context.getState();

      // const regEmail = state.registerForm.model.email;
      // const regPassword = state.registerForm.model.password;
      // alert(action.email);
      // alert(action.password);
      // alert("login.state.ts");
      const { email, password } = action;
      // alert(email);
      // alert(password);
      // alert(state.loginForm.model.email);
      // alert(state.loginForm.model.password);
      //no need to get cPassword since it should be the same as password

      if (action.email && action.password) {
        //return context.dispatch(new AuthActionLogin(email, password));
        return this.authApi.login(email, password);
      }
      //return alert("Please enter email and/or password");
    } catch (error) {
      return alert((error as Error).message);
    }
  }
}
