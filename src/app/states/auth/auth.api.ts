import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';

import { signOut } from '@firebase/auth';

@Injectable()
export class AuthApi {
  constructor(private readonly authObject: Auth) {}

  auth$() {
    return authState(this.authObject);
  }





  async login(regEmail: string, regPassword: string) {
    return await signInWithEmailAndPassword(this.authObject, regEmail, regPassword);
  }

  async register(regEmail: string, regPassword: string) {
    return await createUserWithEmailAndPassword(this.authObject, regEmail, regPassword);
  }

  async logout() {
    return await signOut(this.authObject);
  }
}
