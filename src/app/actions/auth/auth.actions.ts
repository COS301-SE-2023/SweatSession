import { User } from '@angular/fire/auth';

export class SubscribeToAuthState {
  static readonly type = '[Auth] SubscribeToAuthState';
}

export class SetUser {
  static readonly type = '[Auth] SetUser';
  constructor(public readonly user: User | null) {}
}








export class LoginAuth {
  static readonly type = '[Auth] Login';
  constructor(
    public readonly email: string,
    public readonly password: string
  ) {alert("In auth action register constuctor [Auth] login");}
}

export class RegisterAuth {
  static readonly type = '[Auth] Register';
  constructor(
    public readonly email: string,
    public readonly password: string
  ) {} //alert("In auth action register constuctor [Auth] Register")
}

export class Logout {
  static readonly type = '[Auth] Logout';
}



export class getCurrentUserId {
  static readonly type = '[Auth] SetUser';
}