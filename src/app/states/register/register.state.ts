import { Injectable } from '@angular/core';
//import { RegisterAuth as AuthActionRegister } from 'src/app/actions/auth';
import { Register as RegisterAction} from 'src/app/actions/register';
import { Action, State, StateContext, Store } from '@ngxs/store';
import {AuthApi} from 'src/app/states/auth/auth.api';
import { RegisterService } from 'src/app/services';
// import {} from 'functions/src/';

export interface RegisterStateModel {
  registerForm: {
    model: {
      email: string | null;
      password: string | null;
      cPassword: string | null;
    };

    modified: boolean; //reg form modified or not
    status: string; //status of the registration form
    errors: object; //validation errors
  };
}

@State<RegisterStateModel>({
  name: 'register',
  defaults: {
    registerForm: {
      model: {
        email: null,
        password: null,
        cPassword: null,
      },
      modified: false,
      status: '',
      errors: {},
    },
  },
})

@Injectable({
  providedIn: 'root'
})
export class RegisterState {
  constructor(private store: Store, private authApi: AuthApi, private service: RegisterService) {}
  @Action(RegisterAction)
  async register(context: StateContext<RegisterStateModel>, action: RegisterAction) {//, email: string, password: string
    try {

      // alert("register.state.ts");
      const state = context.getState();

      // const regEmail = state.registerForm.model.email;
      // const regPassword = state.registerForm.model.password;
      // alert(action.email);
      // alert(action.password);
      // alert("register.state.ts");
      const { email, password } = action;
      // alert(email);
      // alert(password);
      // alert(state.registerForm.model.email);
      // alert(state.registerForm.model.password);
      //no need to get cPassword since it should be the same as password

      if (action.email && action.password) {
        //return context.dispatch(new AuthActionRegister(email, password));
        const regSuccessful = await this.authApi.register(email, password);
        if (regSuccessful){
          const currUserId = await this.authApi.getCurrentUserId();
          if (currUserId!=null){
            return this.service.register(currUserId, email);
          }
        }
      }
      return alert("Please set email and/or password");
    } catch (error) {
      
      return alert((error as Error).message);
    }
  }
}